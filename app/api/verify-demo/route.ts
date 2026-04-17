import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

// Server-side only — none of this reaches the client bundle
const SALT = "741d8a89010ec623b78fc684f10a7262";
const EXPECTED_HASH =
  "7f8bcaa39db778d80ba5fe92989b625eae30f70a73a14d8aa7f11f37217bf903";

// In-memory rate limiter: max 5 attempts per IP per 15 minutes
const attempts = new Map<string, { count: number; resetAt: number }>();
const MAX_ATTEMPTS = 5;
const WINDOW_MS = 15 * 60 * 1000;

// In-memory token store with 1-hour expiry
const validTokens = new Map<string, number>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = attempts.get(ip);

  if (!record || now > record.resetAt) {
    attempts.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  record.count += 1;
  return record.count > MAX_ATTEMPTS;
}

// Cleanup expired entries every 60 seconds
setInterval(() => {
  const now = Date.now();
  for (const [key, val] of attempts) {
    if (now > val.resetAt) attempts.delete(key);
  }
  for (const [token, expiry] of validTokens) {
    if (now > expiry) validTokens.delete(token);
  }
}, 60_000);

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many attempts. Please try again later." },
      { status: 429 }
    );
  }

  try {
    const { password } = await request.json();

    if (!password || typeof password !== "string") {
      return NextResponse.json(
        { error: "Password is required." },
        { status: 400 }
      );
    }

    // SHA-256 with salt, then constant-time comparison
    const inputHash = crypto
      .createHash("sha256")
      .update(SALT + password)
      .digest("hex");

    const isValid = crypto.timingSafeEqual(
      Buffer.from(inputHash, "hex"),
      Buffer.from(EXPECTED_HASH, "hex")
    );

    if (isValid) {
      const token = crypto.randomBytes(32).toString("hex");
      validTokens.set(token, Date.now() + 60 * 60 * 1000); // 1 hour
      return NextResponse.json({ success: true, token });
    }

    return NextResponse.json({ error: "Incorrect password." }, { status: 401 });
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
}

export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get("token");
  if (!token) return NextResponse.json({ valid: false }, { status: 401 });

  const expiry = validTokens.get(token);
  if (expiry && Date.now() < expiry) {
    return NextResponse.json({ valid: true });
  }

  return NextResponse.json({ valid: false }, { status: 401 });
}
