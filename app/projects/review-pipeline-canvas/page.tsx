import ProjectLayout from "../../components/ProjectLayout";
import Link from "next/link";

export const metadata = {
  title: "Review Pipeline Canvas — Eric Sihong Li",
  description: "Canvas-based AI agent orchestration for eDiscovery workflows",
};

export default function ReviewPipelineCanvasPage() {
  return (
    <ProjectLayout
      title="Review Pipeline Canvas"
      subtitle="AI Agent Orchestration for Document Review"
    >
      <div className="space-y-20 my-16">
        {/* TL;DR Section */}
        <section>
          <h2 className="font-semibold mb-6">TL;DR — AI Agent Orchestration</h2>
          <p className="text-base text-gray-700 mb-4">
            Built a canvas-based visual workflow builder where compliance teams
            drag AI agents onto a spatial canvas, wire conditional routing
            between them, and run multi-agent pipelines with real-time
            monitoring. Internal demo presented to CPO, CTO, and board—now under
            feasibility evaluation for production.
          </p>
          <p className="text-base text-gray-700 font-medium mb-4">
            Early prototype metrics:
          </p>
          <ul className="space-y-2 text-base text-gray-700 mb-4">
            <li>
              • Pipeline configuration time: hours → minutes (drag-and-drop vs.
              engineering tickets)
            </li>
            <li>
              • Human review routing: automatic confidence-based triage
              replacing manual assignment
            </li>
            <li>
              • Template coverage: Standard (6-node, ~94% automation) and
              Advanced (8-node, ~98% with multi-gate validation)
            </li>
          </ul>
        </section>

        {/* Setting the Stage Section */}
        <section>
          <h2 className="font-semibold mb-6">Setting the Stage — The Orchestration Gap</h2>
          <p className="text-base text-gray-700 mb-4">
            eDiscovery teams processing breach notifications run a four-stage
            pipeline: scoping affected data, extracting PII from documents,
            deduplicating records, and generating notification lists. At
            iCONECT, each stage had tooling. Extraction models existed.
            Deduplication logic existed. A review interface existed. What didn't
            exist was a way to compose these capabilities into a single,
            visible, end-to-end workflow. Every new project required engineering
            to configure the pipeline. Every routing change meant a ticket and a
            sprint cycle. Compliance teams could see individual tools but not
            the pipeline connecting them.
          </p>
        </section>

        {/* The Insight Section */}
        <section>
          <h2 className="font-semibold mb-6">"What if the pipeline was the interface?"</h2>
          <p className="text-base text-gray-700 mb-4">
            The insight: treat each AI capability as a node on a canvas. Let
            users wire them together visually, the same way Monday.com lets
            users build automations with WHEN→IF→THEN blocks. The canvas
            becomes both the configuration tool and the monitoring dashboard.
          </p>
          <p className="text-base text-gray-700 mb-4">
            The design borrows from node-based tools (n8n, Retool, Unreal
            Engine blueprints) but adapts the pattern for a non-technical
            audience. No code. No JSON. Just drag, connect, configure, deploy.
          </p>
        </section>

        {/* Agent Types Section */}
        <section>
          <h2 className="font-semibold mb-6">Six Agent Types, One Canvas</h2>
          <p className="text-base text-gray-700 mb-6">
            Each node represents a stage with its own behavior and
            configuration:
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-base mb-2">Database</h3>
              <p className="text-base text-gray-700">
                Data ingestion. Upload, connect to existing project, or pull
                from prior analysis. Displays record count, field count,
                detected PII types.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-base mb-2">Extractor</h3>
              <p className="text-base text-gray-700 mb-2">
                LLM-powered field extraction. Users select a model (Claude Opus,
                Sonnet, Haiku, or GPT-4o), define target fields with types
                (SSN, email, phone, address, date), and set confidence
                thresholds—global and per-field. A domain knowledge field
                accepts context: "Healthcare breach. SSN may appear as
                XXX-XX-XXXX." Compliance flags: HIPAA, PCI-DSS, GDPR, CCPA.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-base mb-2">QC Agent</h3>
              <p className="text-base text-gray-700">
                Validates extraction accuracy. Full review or configurable
                sampling rate. Custom validation rules: SSN format, date format,
                required fields.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-base mb-2">Dedupe Agent</h3>
              <p className="text-base text-gray-700">
                Three strategies: exact match on primary keys, fuzzy match with
                per-field similarity thresholds, or LLM-based semantic entity
                resolution.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-base mb-2">Human Review</h3>
              <p className="text-base text-gray-700 mb-2">
                The human-in-the-loop gate. Routes low-confidence records to
                reviewers inside iCONECT. Displays original text alongside
                extracted data with per-field confidence scores. Reviewer
                actions: Approve, Reject, Escalate. Each action triggers
                conditional routing downstream.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-base mb-2">Output</h3>
              <p className="text-base text-gray-700">
                Export as XLSX, CSV, or JSON. Optional audit report tracing each
                record's path through the pipeline.
              </p>
            </div>
          </div>
        </section>

        {/* Conditional Routing Section */}
        <section>
          <h2 className="font-semibold mb-6">Conditional Routing — Confidence as the Decision Primitive</h2>
          <p className="text-base text-gray-700 mb-4">
            Edges between nodes carry routing logic. A typical split: records
            with confidence ≥ 0.80 flow to QC Agent for automated validation.
            Records below 0.80 flow to Human Review.
          </p>
          <p className="text-base text-gray-700 mb-4">
            Each edge supports multi-operator conditions (AND/OR), priority
            levels, and a reasoning field—because when a compliance officer
            opens a workflow someone else built, they need to understand not
            just what the routing does but why.
          </p>
          <p className="text-base text-gray-700">
            The Advanced template adds agent disagreement detection: when the QC
            Agent disagrees with the Extractor, the record routes to Human
            Triage rather than proceeding automatically. Two AI agents
            disagree? A human decides.
          </p>
        </section>

        {/* Human Oversight Section */}
        <section>
          <h2 className="font-semibold mb-6">Human Oversight — Not Optional</h2>
          <p className="text-base text-gray-700 mb-4">
            The Human Review node was the most important design decision. The
            system never makes a final call on a record if confidence falls
            below threshold. Agents handle volume. Humans handle judgment.
          </p>
          <p className="text-base text-gray-700">
            Reviewers see original text, extracted data, and confidence scores
            side by side. Low-confidence fields are highlighted. The
            approve/reject/escalate model mirrors existing legal review
            workflows—no new mental model required.
          </p>
        </section>

        {/* Code-First Prototyping Section */}
        <section>
          <h2 className="font-semibold mb-6">Code-First Prototyping</h2>
          <p className="text-base text-gray-700 mb-4">
            Built in React 19 with TypeScript using Cursor IDE and Claude.
            React Flow for the spatial canvas, Zustand for state management,
            Tailwind for styling, Radix UI for accessible components. The
            prototype runs—nodes execute in topological order, progress bars
            fill in real time, individual nodes can be paused and resumed
            mid-pipeline.
          </p>
          <p className="text-base text-gray-700 mb-4">
            Code-first because the core interactions (drag-and-drop
            composition, conditional edge routing, live execution feedback)
            don't survive static mockups. Figma came after, for refinement and
            documentation—not as the starting point for design thinking.
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
            Explore the working prototype — drag agents, wire pipelines,
            and run executions in real time.
          </p>
          <Link
            href="/demo/canvas"
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

        {/* Confidentiality Note */}
        <section>
          <p className="text-sm text-gray-500 italic border-l-4 border-gray-300 pl-4">
            Note: This prototype was initiated as a personal product concept.
            All case-study content reflects the prototype scope, not production
            features.
          </p>
        </section>

        {/* Tech Stack */}
        <section>
          <h3 className="font-semibold text-base mb-3">Tech</h3>
          <p className="text-base text-gray-700">
            React 19, TypeScript, React Flow, Zustand, Tailwind CSS, Radix UI.
            Built with Cursor IDE + Claude.
          </p>
        </section>
      </div>
    </ProjectLayout>
  );
}
