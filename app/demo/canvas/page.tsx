import Link from "next/link";

export default function CanvasDemoPage() {
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

      <iframe
        src="/prototype/canvas/index.html"
        style={{ flex: 1, width: "100%", border: "none" }}
        title="Review Pipeline Canvas — Interactive Prototype"
      />
    </div>
  );
}
