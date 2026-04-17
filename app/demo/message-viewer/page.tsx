import Link from "next/link";

export default function MessageViewerDemoPage() {
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
          href="/projects/modern-message-viewer"
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
          Modern Message Viewer
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
        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FVVO2g8Hmc4lbJeyimmfpsO%2FMODERN-REVIEW-DEMO-ONLY%3Fnode-id%3D5-5177%26p%3Df%26viewport%3D-461%252C-680%252C0.21%26t%3DtAhMuyRt4Pwpd87B-1%26scaling%3Dcontain%26content-scaling%3Dfixed%26page-id%3D0%253A1"
        style={{ flex: 1, width: "100%", border: "none" }}
        title="Modern Message Viewer — Interactive Prototype"
        allowFullScreen
      />
    </div>
  );
}
