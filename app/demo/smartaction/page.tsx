import Link from "next/link";

export default function SmartActionDemoPage() {
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
          href="/projects/smartaction-builder"
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
          SmartAction Builder
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
        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FAf8ki3EmjTpv7CiD50WtWE%2FStage-2---Doc-Rule-Field-Trigger--6vTwMJuHrug0TttrWT9do4-%3Fnode-id%3D26-32792%26viewport%3D167%252C-171%252C0.12%26t%3Dy4FUMRuCNSyxNHo6-1%26scaling%3Dscale-down-width%26content-scaling%3Dfixed%26starting-point-node-id%3D26%253A32792%26page-id%3D23%253A11966"
        style={{ flex: 1, width: "100%", border: "none" }}
        title="SmartAction Builder — Interactive Prototype"
        allowFullScreen
      />
    </div>
  );
}
