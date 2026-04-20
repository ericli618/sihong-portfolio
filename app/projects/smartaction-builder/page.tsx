import Image from "next/image";
import Link from "next/link";
import ProjectLayout from "../../components/ProjectLayout";

export const metadata = {
  title: "SmartAction Builder — Eric Sihong Li",
  description:
    "$70.4M federal modernization converting paper workflows to intelligent digital routing",
};

export default function SmartActionBuilderPage() {
  return (
    <ProjectLayout
      title="SmartAction Builder"
      subtitle="$70.4 Million Paper-Mail Conversion"
    >
      <div className="space-y-20 my-16">
        {/* TL;DR Section */}
        <section>
          <h2 className="font-semibold mb-6">TL;DR — Making the VA&apos;s Mail Visible</h2>
          <p className="text-base text-gray-700 mb-4">
            The U.S. Department of Veterans Affairs processes 14 million mail
            packets a year. Each one passes through 3–6 departments, with
            routing rules that live in people&apos;s heads, email chains, and
            spreadsheets. Nobody could tell you where a packet was, who had it,
            or when it would arrive.
          </p>
          <p className="text-base text-gray-700 mb-4">
            I designed a no-code workflow builder — the Doc Rule Canvas — that
            lets VA administrators model their own routing logic using a
            WHEN → IF → THEN grammar, without writing code or filing
            engineering tickets. It plugs into existing OCR and AI pipelines,
            so the system reads, classifies, and routes packets automatically
            while humans handle the edge cases.
          </p>
        </section>

        {/* Hero Image */}
        <section>
          <div className="flex justify-center">
            <Image
              src="/images/smartaction/va-logo.png"
              alt="U.S. Department of Veterans Affairs logo"
              width={500}
              height={338}
              className="w-full"
              style={{ borderRadius: "8px", maxWidth: "500px", objectFit: "contain" }}
            />
          </div>
        </section>

        {/* Metrics */}
        <section>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1px",
              backgroundColor: "var(--pale)",
              border: "2.5px solid var(--black)",
              borderRadius: "var(--radius)",
              overflow: "hidden",
            }}
          >
            {[
              { stat: "90% faster", label: "Packet-to-first-action time" },
              { stat: "~80% fewer", label: "Manual hand-offs per case" },
              { stat: "400K users", label: "Full rollout target" },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "var(--white)",
                  padding: "24px 20px",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(16px, 2.5vw, 22px)",
                    fontWeight: 700,
                    color: "var(--black)",
                    marginBottom: "6px",
                  }}
                >
                  {item.stat}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.75rem",
                    fontWeight: 500,
                    color: "var(--mid)",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}
                >
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Setting the Stage Section */}
        <section>
          <h2 className="font-semibold mb-6">14 Million Packets, Zero Visibility</h2>
          <p className="text-base text-gray-700 mb-4">
            The VA isn&apos;t one organization — it&apos;s three sectors (Veterans
            Benefits, Veterans Health, National Cemeteries), each with
            specialized departments that enforce their own rules. A single
            benefits claim might need Health redaction before Benefits can
            release it, QA sign-off before payment, and archival once resolved.
            Every detour was invisible. Status lived in someone&apos;s inbox.
          </p>
          <p className="text-base text-gray-700">
            The challenge wasn&apos;t digitizing paper — it was codifying the
            invisible routing logic so any sector could model its own rules
            without custom code.
          </p>
        </section>

        {/* Processing Layer Section */}
        <section>
          <h2 className="font-semibold mb-6">Three-Tier Processing Architecture</h2>

          <Image
            src="/images/smartaction/workflow-example.png"
            alt="Three-tier workflow diagram showing Sector, Department, and Processing Layer routing with branching logic and approval gates"
            width={900}
            height={500}
            className="mb-6 w-full"
            style={{ borderRadius: "8px", border: "1px solid var(--pale)" }}
          />
          <p
            className="text-sm mb-8 text-center"
            style={{ color: "var(--mid)", fontStyle: "italic" }}
          >
            Sector → Department → Processing Layer — packets route through
            domain-specific rules at each tier
          </p>

          <p className="text-base text-gray-700">
            Every packet flows through three levels: the Sector determines
            domain (Benefits, Health, Cemeteries), the Department applies
            specialized rules and creates work orders, and the Processing Layer
            handles re-routing, reviewer approval, and quality control. The
            Doc Rule Canvas lets administrators configure all three tiers
            without engineering involvement.
          </p>
        </section>

        {/* Gap Analysis Section */}
        <section>
          <h2 className="font-semibold mb-6">The Infrastructure Gap</h2>

          <Image
            src="/images/smartaction/folder-record.png"
            alt="Folder and record structure showing how VA departmental hierarchy maps to the folder taxonomy used as routing lanes"
            width={900}
            height={544}
            className="mb-6 w-full"
            style={{ borderRadius: "8px", border: "1px solid var(--pale)" }}
          />
          <p
            className="text-sm mb-8 text-center"
            style={{ color: "var(--mid)", fontStyle: "italic" }}
          >
            Existing folder hierarchy mapped to VA departments — structure was
            there, metadata wasn&apos;t
          </p>

          <p className="text-base text-gray-700 mb-4">
            The folder hierarchy already mirrored VA departmental structure —
            the bones were right. What was missing were the metadata fields
            that make routing possible: who owns this packet, what&apos;s its
            status, when was it last touched. I designed new lifecycle fields
            (status labels, owner assignment, action timestamps) and
            standardized existing folder taxonomies into logic triggers the
            workflow engine could act on.
          </p>

          <Image
            src="/images/smartaction/assign.png"
            alt="Assignment interface — packet owner selection with department routing rules and status tracking fields"
            width={900}
            height={382}
            className="mt-8 w-full"
            style={{ borderRadius: "8px", border: "1px solid var(--pale)" }}
          />
          <p
            className="text-sm mt-3 text-center"
            style={{ color: "var(--mid)", fontStyle: "italic" }}
          >
            Assignment interface — packets get owners, statuses, and lifecycle
            timestamps
          </p>
        </section>

        {/* Design Approach Section */}
        <section>
          <h2 className="font-semibold mb-6">From Static Rails to Living Workflow</h2>
          <p className="text-base text-gray-700 mb-4">
            I mapped the full journey — post-mark through scanning, intake,
            analysis, QA, and archive — using service blueprints and RACI
            matrices to expose every decision gate and stall point. The key
            constraint surfaced quickly: each sector revises its business rules
            constantly. If every rule change required an engineering sprint,
            the system would be outdated before it shipped.
          </p>
          <p className="text-base text-gray-700">
            That constraint became the design brief: the workflow engine
            couldn&apos;t just be configurable — it had to be authorable by the
            people who understand the rules, not the people who write code.
          </p>
        </section>

        {/* Doc Rule Canvas Section */}
        <section>
          <h2 className="font-semibold mb-6">The Doc Rule Canvas</h2>

          <Image
            src="/images/smartaction/screenshot-1.png"
            alt="Doc Rule Canvas interface — WHEN/IF/THEN rule builder with document classification triggers, AI prompt actions, folder routing, and notification configuration"
            width={900}
            height={531}
            className="mb-6 w-full"
            style={{ borderRadius: "8px", border: "1px solid var(--pale)" }}
          />
          <p
            className="text-sm mb-8 text-center"
            style={{ color: "var(--mid)", fontStyle: "italic" }}
          >
            No-code rule builder — WHEN/IF/THEN blocks mirror the service
            blueprint language administrators already use
          </p>

          <p className="text-base text-gray-700 mb-4">
            The canvas uses a WHEN → IF → THEN grammar that mirrors how
            administrators already describe their rules in meetings. A real
            example: When Status = Empty AND Form Classification = &quot;10-10D&quot; →
            Run AI Prompt &quot;Classify Attachments&quot; → write result to Form
            Classification → Move packet to CHAMPVA/10-10D folder → Notify
            Queue Supervisor.
          </p>
          <p className="text-base text-gray-700">
            No JSON. No tickets. The person who knows the rule writes the
            rule.
          </p>
        </section>

        {/* AI Integration Section */}
        <section>
          <h2 className="font-semibold mb-6">AI as &ldquo;Another Verb&rdquo; in the Grammar</h2>

          <Image
            src="/images/smartaction/screenshot-2.png"
            alt="AI integration panel — confidence-aware routing with threshold controls, prompt configuration, and human escalation paths"
            width={900}
            height={433}
            className="mb-6 w-full"
            style={{ borderRadius: "8px", border: "1px solid var(--pale)" }}
          />
          <p
            className="text-sm mb-8 text-center"
            style={{ color: "var(--mid)", fontStyle: "italic" }}
          >
            AI actions slot into the same WHEN/IF/THEN grammar — confidence
            scores determine automatic vs. human routing
          </p>

          <p className="text-base text-gray-700 mb-4">
            AI doesn&apos;t replace the workflow — it becomes another action inside
            it, honoring the same grammar users already know. Five capabilities
            layer in progressively:
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "12px",
            }}
          >
            {[
              {
                name: "Scan-Quality Gate",
                desc: "Flags bad scans (skew, low OCR confidence <85%) for manual rescan before any downstream processing begins.",
              },
              {
                name: "Form Classification",
                desc: "LLM classifies the document form and extracts anchor entities — SSN, Claim ID, Date of Service — with per-field confidence scores.",
              },
              {
                name: "Confidence Routing",
                desc: "Doc Rules pivot on extraction confidence: ≥0.90 routes automatically, <0.90 escalates to a senior analyst. The threshold is tunable per sector.",
              },
              {
                name: "Feedback Loop",
                desc: "QA corrections feed back as ground truth. Nightly retraining closes precision gaps by ~5 percentage points every two weeks.",
              },
              {
                name: "Transparent Controls",
                desc: "Each sector authors its own prompt sets and tunes risk thresholds through the Doc Rule interface. No engineering required.",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  border: "2.5px solid var(--black)",
                  borderRadius: "var(--radius)",
                  padding: "20px",
                  backgroundColor: "var(--white)",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    marginBottom: "8px",
                  }}
                >
                  {item.name}
                </h3>
                <p className="text-sm text-gray-600" style={{ lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Results Section */}
        <section>
          <h2 className="font-semibold mb-6">What Changed</h2>
          <p className="text-base text-gray-700 mb-4">
            Before: packets took 2–3 days to reach first action, passing
            through 8–10 manual hand-offs. After: most packets route within
            hours, often minutes. Manual touches dropped ~80%. The 20-working-day
            FOIA mandate — previously a scramble — is now beaten by a
            comfortable margin.
          </p>
          <p className="text-base text-gray-700 mb-4">
            The initial pilot reached ~7,000 VA staff processing roughly 1
            million packets per year. Full rollout targets ~400,000 VHA
            employees, part of a ~$345M enterprise modernization contract.
          </p>
          <p className="text-base text-gray-700">
            The methodology that made it work: clickable prototypes before
            every development sprint, translating cross-agency business rules
            into interfaces non-technical users could own, and treating AI as
            a verb in an existing grammar rather than a separate system to
            learn.
          </p>
        </section>

        {/* Demo CTA */}
        <section
          style={{
            backgroundColor: "var(--faint)",
            backgroundImage:
              "linear-gradient(var(--pale) 1px, transparent 1px), linear-gradient(90deg, var(--pale) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            border: "2.5px solid var(--black)",
            borderRadius: "var(--radius)",
            padding: "40px 32px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: 500,
              marginBottom: "12px",
              color: "var(--black)",
            }}
          >
            See it in action
          </p>
          <p
            className="text-base mb-8"
            style={{ color: "var(--secondary)", maxWidth: "420px", margin: "0 auto 24px" }}
          >
            Explore the interactive Figma prototype — configure rules,
            set triggers, and experience the no-code workflow builder.
          </p>
          <Link
            href="/demo/smartaction"
            className="interactive-lift"
            style={{
              display: "inline-block",
              padding: "14px 36px",
              fontFamily: "var(--font-body)",
              fontSize: "0.85rem",
              fontWeight: 600,
              letterSpacing: "0.02em",
              color: "var(--white)",
              backgroundColor: "var(--black)",
              border: "2.5px solid var(--black)",
              borderRadius: "var(--radius-pill)",
              textDecoration: "none",
            }}
          >
            Launch Interactive Prototype →
          </Link>
          <p
            className="text-sm mt-4"
            style={{
              color: "var(--mid)",
              fontFamily: "var(--font-body)",
              fontSize: "0.7rem",
              fontWeight: 600,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            Interactive prototype
          </p>
        </section>
      </div>
    </ProjectLayout>
  );
}
