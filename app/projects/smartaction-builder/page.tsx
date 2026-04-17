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
          <h2 className="font-semibold mb-6">TL;DR — Re-engineering VA Mail at Federal Scale</h2>

          <div className="mb-8 flex justify-center">
            <Image
              src="/images/smartaction/va-logo.png"
              alt="U.S. Department of Veterans Affairs logo"
              width={500}
              height={500}
              className="w-full"
              style={{ borderRadius: "8px", maxWidth: "500px", objectFit: "contain" }}
            />
          </div>

          <p className="text-base text-gray-700 mb-4">
            The U.S. Department of Veterans Affairs undertook a multi-year
            digitization initiative to convert paper mail workflows. As Lead
            Product Designer & Business Analyst at iCONECT, the role involved
            transforming the VA&apos;s multi-tier, paper-heavy routing maze into a
            no-code, rules-driven e-delivery service that integrates with
            existing OCR and AI analytics infrastructure.
          </p>
          <p className="text-base text-gray-700 font-medium mb-4">
            Early pilot metrics (1,700 users, ~1 million packets/year):
          </p>
          <ul className="space-y-2 text-base text-gray-700 mb-4">
            <li>
              • Packet-to-first-action time: 90% faster (days to minutes)
            </li>
            <li>• Manual hand-offs reduced by 50%</li>
            <li>
              • Reviewer throughput: single packets processed in minutes vs.
              1–2 per day previously
            </li>
          </ul>
        </section>

        {/* Setting the Stage Section */}
        <section>
          <h2 className="font-semibold mb-6">Setting the Stage – Volume & Variety</h2>
          <p className="text-base text-gray-700 mb-4">
            <span className="font-medium">Scale context:</span> Approximately 14
            million packets annually across multiple VA sectors (Veterans
            Benefits, Veterans Health, National Cemeteries).
          </p>
          <p className="text-base text-gray-700 mb-4">
            <span className="font-medium">Processing complexity:</span> Packets
            traverse 3–6 departments with different specialists and approval
            requirements. Multiple hidden loops exist due to business rules
            (e.g., Health redaction before Benefits release, QA sign-offs
            before payment). Status tracking historically occurred via email
            chains and spreadsheets, making packet location and deadlines
            invisible.
          </p>
          <p className="text-base text-gray-700">
            <span className="font-medium">Challenge:</span> Codify invisible
            departmental detours so any sector could model its own rules
            (redaction, approval, QA, archival, reopening) without custom code.
          </p>
        </section>

        {/* Processing Layer Section */}
        <section>
          <h2 className="font-semibold mb-6">Processing Layer Breakdown — Three-tier Structure</h2>

          <Image
            src="/images/smartaction/workflow-example.png"
            alt="Example of one of the workflow diagrams"
            width={900}
            height={500}
            className="mb-8 w-full"
            style={{ borderRadius: "8px", border: "1px solid var(--pale)" }}
          />

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-base mb-2">1. Sector</h3>
              <p className="text-base text-gray-700">
                High-level domain (Veterans Benefits, Veterans Health, National
                Cemeteries)
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-base mb-2">2. Department</h3>
              <p className="text-base text-gray-700">
                Specialized workflows within each sector; requires domain-specific
                rules and work-order creation
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-base mb-2">3. Processing Layer</h3>
              <p className="text-base text-gray-700">
                Re-routing logic, specialized work, reviewer approval, and
                quality control
              </p>
            </div>
          </div>
        </section>

        {/* Gap Analysis Section */}
        <section>
          <h2 className="font-semibold mb-6">Gap Analysis & Infrastructure Architecture</h2>

          <Image
            src="/images/smartaction/folder-record.png"
            alt="Folder and record structure diagram"
            width={900}
            height={500}
            className="mb-8 w-full"
            style={{ borderRadius: "8px", border: "1px solid var(--pale)" }}
          />

          <p className="text-base text-gray-700 mb-4">
            <span className="font-medium">Key finding:</span> The existing folder
            hierarchy could mirror VA departmental structure, but critical
            metadata fields were missing (User Assigned, Packet Status).
          </p>
          <p className="text-base text-gray-700 mb-4">
            <span className="font-medium">Solution:</span> New metadata fields for
            lifecycle tracking (status labels, owner assignment, action dates).
            Reuse of existing folder taxonomies as routing lanes. Folder
            standardization as logic triggers.
          </p>

          <Image
            src="/images/smartaction/assign.png"
            alt="Assignment interface design"
            width={900}
            height={500}
            className="mt-8 w-full"
            style={{ borderRadius: "8px", border: "1px solid var(--pale)" }}
          />
        </section>

        {/* Design Approach Section */}
        <section>
          <h2 className="font-semibold mb-6">From Static Rails to Living Workflow</h2>
          <p className="text-base text-gray-700 mb-4">
            End-to-end journey mapping (post-mark → scanning → intake →
            analysis → QA → archive). Service blueprints and RACI matrix to
            expose decision gates and stall points. Design constraint: Each
            sector revises business rules frequently; waiting on development
            sprints would bottleneck the entire programme.
          </p>
        </section>

        {/* Doc Rule Canvas Section */}
        <section>
          <h2 className="font-semibold mb-6">Doc Rule Canvas (No-Code Solution)</h2>

          <Image
            src="/images/smartaction/screenshot-1.png"
            alt="Doc Rule Canvas interface — rule configuration"
            width={900}
            height={500}
            className="mb-8 w-full"
            style={{ borderRadius: "8px", border: "1px solid var(--pale)" }}
          />

          <p className="text-base text-gray-700 mb-4">
            Users construct rules using a WHEN → IF → THEN block structure
            mirroring the service blueprint. Example: When Status = Empty AND
            Form Classification = &quot;10-10D&quot; → Then Run AI Prompt &quot;Classify
            Attachments&quot; → write result to Form Classification → Move packet to
            CHAMPVA/10-10D folder → Notify Queue Supervisor.
          </p>
        </section>

        {/* AI Integration Section */}
        <section>
          <h2 className="font-semibold mb-6">AI Integration – Human-in-the-Loop Design (five steps)</h2>

          <Image
            src="/images/smartaction/screenshot-2.png"
            alt="AI integration interface — confidence-aware routing"
            width={900}
            height={500}
            className="mb-8 w-full"
            style={{ borderRadius: "8px", border: "1px solid var(--pale)" }}
          />

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-base mb-2">1. Scan-quality model</h3>
              <p className="text-base text-gray-700">
                Flags bad scans (skew, low OCR confidence &lt;85%) for manual
                rescan queue
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-base mb-2">2. Form & entity classification</h3>
              <p className="text-base text-gray-700">
                LLM classifies document form, extracts anchor entities (SSN,
                Claim ID, Date of Service), returns confidence score per field
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-base mb-2">3. Confidence-aware routing</h3>
              <p className="text-base text-gray-700">
                Doc Rule pivots on extraction confidence: High confidence
                (≥0.90) → automatic folder assignment; Low confidence (&lt;0.90)
                → escalation to senior analyst
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-base mb-2">4. Continuous feedback loop</h3>
              <p className="text-base text-gray-700">
                QA corrections logged as ground truth; nightly model retraining
                closes precision gaps by ~5 percentage points every two weeks
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-base mb-2">5. Transparent controls</h3>
              <p className="text-base text-gray-700">
                Each sector authors its own prompt sets and tunes risk
                thresholds via Doc Rule interface, no code required
              </p>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section>
          <h2 className="font-semibold mb-6">Results & Reflection</h2>
          <p className="text-base text-gray-700 mb-4">
            <span className="font-medium">Before:</span> Packet-to-action time
            2–3 days, 8–10 manual touches per case
          </p>
          <p className="text-base text-gray-700 mb-4">
            <span className="font-medium">After:</span> Most packets routed within
            4 hours or less, often automatically in minutes. Manual touches
            reduced by ~80%. Consistent FOIA mandate compliance (20 working day
            requirement beaten by wide margin).
          </p>
          <p className="text-base text-gray-700 mb-4">
            <span className="font-medium">Scaling:</span> Initial pilot ~7,000 VA
            staff. Full rollout target ~400,000 VHA employees. Part of ~$345M
            enterprise workflow modernization contract.
          </p>
          <p className="text-base text-gray-700">
            <span className="font-medium">Methodology:</span> Ran stakeholder
            walkthroughs with clickable prototypes before development sprints.
            Translated messy cross-agency business rules into interfaces
            suitable for non-technical users. Designed AI as &quot;another verb&quot; in
            the workflow grammar, honoring users&apos; existing mental model (folders
            and fields) while delivering machine speed.
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
