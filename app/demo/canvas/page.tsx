"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function CanvasDemoPage() {
  const [token, setToken] = useState<string | null>(null);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [checking, setChecking] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);

  // Check for existing valid session on mount
  useEffect(() => {
    const stored = sessionStorage.getItem("demo_token");
    if (stored) {
      fetch(`/api/verify-demo?token=${stored}`)
        .then((r) => r.json())
        .then((data) => {
          if (data.valid) setToken(stored);
          else sessionStorage.removeItem("demo_token");
        })
        .catch(() => sessionStorage.removeItem("demo_token"))
        .finally(() => setChecking(false));
    } else {
      setChecking(false);
    }
  }, []);

  useEffect(() => {
    if (!token && !checking && inputRef.current) {
      inputRef.current.focus();
    }
  }, [token, checking]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password.trim() || loading) return;

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/verify-demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        sessionStorage.setItem("demo_token", data.token);
        setToken(data.token);
      } else if (res.status === 429) {
        setError("Too many attempts. Please wait and try again.");
      } else {
        setError(data.error || "Incorrect password.");
        setPassword("");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Loading check
  if (checking) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "var(--faint)",
        }}
      >
        <p style={{ fontFamily: "var(--font-body)", fontSize: "0.85rem", color: "var(--mid)" }}>
          Loading...
        </p>
      </div>
    );
  }

  // Authenticated — show the prototype full-screen
  if (token) {
    return (
      <div
        style={{
          position: "fixed",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          backgroundColor: "var(--faint)",
        }}
      >
        {/* Top bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px 20px",
            borderBottom: "2.5px solid var(--black)",
            backgroundColor: "var(--white)",
            flexShrink: 0,
          }}
        >
          <Link
            href="/projects/review-pipeline-canvas"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.8rem",
              fontWeight: 600,
              color: "var(--secondary)",
            }}
          >
            ← Back to case study
          </Link>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1rem",
              fontWeight: 500,
              color: "var(--black)",
            }}
          >
            Review Pipeline Canvas
          </span>
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.65rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--mid)",
            }}
          >
            Interactive Prototype
          </span>
        </div>

        {/* Full-bleed iframe */}
        <iframe
          src="/prototype/canvas/index.html"
          style={{ flex: 1, width: "100%", border: "none" }}
          title="Review Pipeline Canvas — Interactive Prototype"
        />
      </div>
    );
  }

  // Password gate
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "var(--faint)",
        backgroundImage:
          "linear-gradient(var(--pale) 1px, transparent 1px), linear-gradient(90deg, var(--pale) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "420px",
          margin: "0 24px",
          backgroundColor: "var(--white)",
          border: "2.5px solid var(--black)",
          borderRadius: "var(--radius)",
          boxShadow: "var(--shadow-pop)",
          padding: "40px 32px",
        }}
      >
        {/* Lock icon */}
        <div
          style={{
            width: "48px",
            height: "48px",
            margin: "0 auto 24px",
            backgroundColor: "var(--black)",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        </div>

        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(24px, 4vw, 32px)",
            textAlign: "center",
            marginBottom: "8px",
            lineHeight: 1.2,
          }}
        >
          Protected Demo
        </h2>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.8rem",
            color: "var(--secondary)",
            textAlign: "center",
            marginBottom: "28px",
            lineHeight: 1.7,
          }}
        >
          This interactive prototype is confidential.
          <br />
          Enter the password to continue.
        </p>

        <form onSubmit={handleSubmit}>
          <label
            htmlFor="demo-password"
            style={{
              display: "block",
              fontFamily: "var(--font-body)",
              fontSize: "0.65rem",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--mid)",
              marginBottom: "8px",
            }}
          >
            Password
          </label>
          <input
            ref={inputRef}
            id="demo-password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            autoComplete="off"
            style={{
              width: "100%",
              padding: "12px 16px",
              fontFamily: "var(--font-body)",
              fontSize: "0.9rem",
              border: "2.5px solid var(--black)",
              borderRadius: "10px",
              backgroundColor: "var(--white)",
              color: "var(--black)",
              outline: "none",
            }}
          />

          {error && (
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.8rem",
                color: "#c44",
                marginTop: "10px",
                padding: "8px 12px",
                backgroundColor: "#fef2f2",
                borderRadius: "8px",
                border: "1px solid #fecaca",
              }}
            >
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading || !password.trim()}
            className="interactive-lift"
            style={{
              width: "100%",
              marginTop: "16px",
              padding: "12px",
              fontFamily: "var(--font-body)",
              fontSize: "0.85rem",
              fontWeight: 600,
              letterSpacing: "0.02em",
              color: "var(--white)",
              backgroundColor: "var(--black)",
              border: "2.5px solid var(--black)",
              borderRadius: "var(--radius-pill)",
              opacity: loading || !password.trim() ? 0.6 : 1,
              transition: "all 0.2s var(--spring)",
            }}
          >
            {loading ? "Verifying..." : "Unlock Prototype"}
          </button>
        </form>

        <div style={{ textAlign: "center", marginTop: "24px" }}>
          <Link
            href="/projects/review-pipeline-canvas"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.8rem",
              color: "var(--secondary)",
            }}
          >
            ← Back to case study
          </Link>
        </div>
      </div>
    </div>
  );
}
