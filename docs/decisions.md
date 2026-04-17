# sihong.ca — Decision Log

Captures what was decided, why, and when to revisit. New entries go at the bottom of the relevant section.

---

## Infrastructure & Deployment

### D-INFRA-01: Next.js App Router on Vercel (2026-04-16)

**Decision:** Portfolio built with Next.js (App Router) and deployed on Vercel free tier.

**Reasoning:** Zero-config deployment, automatic preview URLs per branch, free custom domain SSL. Next.js gives server-side API routes (needed for password verification) without a separate backend.

**Revisit when:** Never — this is the right tool for a portfolio site.

---

## Security & Access Control

### D-SEC-01: Shared password gate for interactive prototypes (2026-04-16)

**Decision:** All interactive demo pages (Canvas, Message Viewer, SmartAction Builder) are protected behind a single shared password. Password is verified server-side via SHA-256 salted hash in `/api/verify-demo`. Authenticating once grants access to all demos via a shared sessionStorage token (1-hour expiry).

**Why password-protect:** The Figma prototypes contain confidential work product from Eric's employers. Public access would violate NDA obligations. Password lets Eric share demos selectively with recruiters/hiring managers.

**Implementation:** Salt + hash stored in the API route file (server-only, never reaches client bundle). In-memory rate limiting: 5 attempts per IP per 15 minutes. Token stored in sessionStorage (cleared on tab close).

**Revisit when:** Adding new demos — just create a new `/demo/[name]/page.tsx` using the same pattern. No API changes needed.

---

### D-SEC-02: Rotate demo password to strong mixed-case with symbols (2026-04-17)

**Decision:** Replaced the original weak password (`pipeline2026`) with a strong mixed-case password containing symbols and numbers. Password stored in `.env.local` (gitignored) for Eric's reference only. Salt reused from D-SEC-01; hash recomputed.

**Reasoning:** Original password was too guessable — lowercase dictionary word + year. New password uses mixed case, symbols (`!`, `#`), and is not a dictionary word, making brute force impractical even without rate limiting.

**Password location:** `.env.local` in the project root (gitignored, local-only).

**Revisit when:** If the password is compromised — regenerate salt + hash, update the API route, update `.env.local`.

---

## Content & Structure

### D-CONTENT-01: Three case study projects at launch (2026-04-16)

**Decision:** Portfolio launches with three case studies: Review Pipeline Canvas, SmartAction Builder, Modern Message Viewer. Each has a case study page + password-protected interactive Figma prototype.

**Reasoning:** These three projects cover Eric's core strengths — AI agent orchestration, federal-scale no-code workflow design, and enterprise data unification. Breadth across industries (legal tech, federal gov, eDiscovery) demonstrates range.

**Revisit when:** Adding a fourth project, or if a specific job application calls for highlighting different work.

---

### D-CONTENT-02: Figma prototypes embedded via iframe, not static screenshots (2026-04-16)

**Decision:** Interactive prototypes are embedded as full-screen Figma iframes behind the password gate, not as static image galleries.

**Reasoning:** Interactivity is the differentiator. A recruiter clicking through a working prototype understands the design thinking far better than scrolling screenshots. The iframe approach means prototype updates in Figma are reflected on the site instantly — no redeploy needed.

**Trade-off:** Figma embed loads can be slow on poor connections. Acceptable for the target audience (recruiters on office wifi/home broadband).

**Revisit when:** Figma changes their embed policy, or if analytics show high bounce rates on demo pages (suggesting load times are a problem).

---

## Design System

### D-DESIGN-01: Inkpress-inspired monochrome design language (2026-04-16)

**Decision:** Portfolio uses a monochrome design system inspired by Inkpress — `2.5px solid` borders, hard-offset pop shadows (`4px 4px 0px`), canvas-grid backgrounds (`28px` grid), pill buttons with spring hover animations, Space Grotesk + Inter typography.

**Reasoning:** The design itself is a portfolio piece. A template site says "I use templates." A distinctive visual system says "I design systems." The Inkpress language is bold enough to be memorable in a stack of portfolio links.

**Revisit when:** Never for the core identity. Individual components can evolve.
