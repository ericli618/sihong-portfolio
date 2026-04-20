import Image from "next/image";
import Link from "next/link";
import ProjectLayout from "../../components/ProjectLayout";

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
          <h2 className="font-semibold mb-6">TL;DR — A Pipeline You Can See</h2>
          <p className="text-base text-gray-700 mb-4">
            Compliance teams running breach-notification reviews had every AI tool
            they needed — extraction models, deduplication logic, a review
            interface — but no way to see how they connected. Every new project
            meant an engineering ticket. Every routing change meant a sprint
            cycle. The pipeline was invisible.
          </p>
          <p className="text-base text-gray-700 mb-4">
            I built a canvas-based visual workflow builder where teams drag AI
            agents onto a spatial canvas, wire conditional routing between them,
            and run multi-agent pipelines with real-time monitoring. Internal
            demo presented to CPO, CTO, and board — now under feasibility
            evaluation for production.
          </p>
        </section>

        {/* Hero Screenshot */}
        <section>
          <Image
            src="/images/home/canvas-thumb.png"
            alt="Review Pipeline Canvas — 8-node AI agent workflow with conditional routing, showing Data Input, Extractor, QC Agent, Human Review, Dedupe, and Output nodes connected on a spatial canvas"
            width={1200}
            height={900}
            className="w-full"
            style={{ borderRadius: "8px", border: "1px solid var(--pale)" }}
            priority
          />
          <p
            className="text-sm mt-3 text-center"
            style={{ color: "var(--mid)", fontStyle: "italic" }}
          >
            Advanced template — 8 nodes, 10 connections, conditional routing on
            confidence scores and QC decisions
          </p>
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
              { stat: "Hours → Minutes", label: "Pipeline configuration time" },
              { stat: "~94% automation", label: "Standard template (6-node)" },
              { stat: "~98% coverage", label: "Advanced template (8-node)" },
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
          <h2 className="font-semibold mb-6">The Orchestration Gap</h2>
          <p className="text-base text-gray-700 mb-4">
            eDiscovery teams processing breach notifications run a four-stage
            pipeline: scoping affected data, extracting PII from documents,
            deduplicating records, and generating notification lists. At iCONECT,
            each stage had tooling. What didn&apos;t exist was a way to compose
            these capabilities into a single, visible, end-to-end workflow.
          </p>
          <p className="text-base text-gray-700">
            Every new project required engineering to configure the pipeline.
            Every routing change meant a ticket and a sprint cycle. Compliance
            teams could see individual tools but not the pipeline connecting
            them. The question I kept returning to: what if the pipeline itself
            was the interface?
          </p>
        </section>

        {/* Pipeline Diagram */}
        <section>
          <Image
            src="/images/canvas/pipeline-overview.svg"
            alt="Pipeline flow diagram — Database Input → Extractor splits by confidence: high goes to QC Agent → Dedupe → Output, low goes to Human Review then merges back"
            width={900}
            height={340}
            className="w-full"
            style={{ borderRadius: "8px", border: "1px solid var(--pale)", backgroundColor: "var(--faint)", padding: "20px" }}
          />
          <p
            className="text-sm mt-3 text-center"
            style={{ color: "var(--mid)", fontStyle: "italic" }}
          >
            Core pipeline architecture — confidence scores determine whether
            records flow to automated QC or human review
          </p>
        </section>

        {/* The Insight Section */}
        <section>
          <h2 className="font-semibold mb-6">&ldquo;What if the pipeline was the interface?&rdquo;</h2>
          <p className="text-base text-gray-700 mb-4">
            The design borrows from node-based tools — n8n, Retool, Unreal
            Engine blueprints — but adapts the pattern for a non-technical
            audience. No code. No JSON. Drag, connect, configure, deploy. The
            canvas becomes both the configuration tool and the monitoring
            dashboard. You build the workflow and you watch it run, in the same
            place.
          </p>
        </section>

        {/* Agent Types Section */}
        <section>
          <h2 className="font-semibold mb-6">Six Agent Types, One Canvas</h2>
          <p className="text-base text-gray-700 mb-6">
            Each node on the canvas represents a stage with its own behavior and
            configuration panel:
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
                name: "Database Input",
                desc: "Upload data, connect to existing projects, or pull from prior analysis. Shows record count, field count, detected PII types.",
              },
              {
                name: "Extractor",
                desc: "LLM-powered field extraction. Pick a model (Claude, GPT-4o), define target fields with types, set per-field confidence thresholds. Accepts domain context and compliance flags (HIPAA, PCI-DSS, GDPR).",
              },
              {
                name: "QC Agent",
                desc: "Validates extraction accuracy. Full review or configurable sampling rate. Custom validation rules: SSN format, date format, required fields.",
              },
              {
                name: "Dedupe Agent",
                desc: "Three strategies: exact match on primary keys, fuzzy match with per-field similarity thresholds, or LLM-based semantic entity resolution.",
              },
              {
                name: "Human Review",
                desc: "The human-in-the-loop gate. Routes low-confidence records to reviewers. Original text alongside extracted data with per-field scores. Actions: Approve, Reject, Escalate.",
              },
              {
                name: "Output",
                desc: "Export as XLSX, CSV, or JSON. Optional audit report tracing each record's path through the pipeline.",
              },
            ].map((agent, i) => (
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
                  {agent.name}
                </h3>
                <p className="text-sm text-gray-600" style={{ lineHeight: 1.6 }}>
                  {agent.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Conditional Routing Section */}
        <section>
          <h2 className="font-semibold mb-6">Confidence as the Decision Primitive</h2>

          <Image
            src="/images/canvas/conditional-routing.svg"
            alt="Conditional routing diagram — Extractor splits by confidence threshold: high confidence flows to QC Agent and Dedupe, low confidence flows to Human Review with approve/reject/escalate paths"
            width={900}
            height={300}
            className="w-full mb-6"
            style={{ borderRadius: "8px", border: "1px solid var(--pale)", backgroundColor: "var(--faint)", padding: "20px" }}
          />

          <p className="text-base text-gray-700 mb-4">
            Edges between nodes carry routing logic. A typical split: records
            with confidence above 0.80 flow to the QC Agent for automated
            validation. Records below 0.80 flow to Human Review. Each edge
            supports multi-operator conditions (AND/OR), priority levels, and a
            reasoning field — because when a compliance officer opens a workflow
            someone else built, they need to understand not just what the
            routing does, but why.
          </p>
          <p className="text-base text-gray-700">
            The Advanced template adds agent disagreement detection: when the QC
            Agent disagrees with the Extractor, the record routes to Human
            Triage rather than proceeding automatically. Two AI agents disagree?
            A human decides.
          </p>
        </section>

        {/* Human Oversight Section */}
        <section>
          <h2 className="font-semibold mb-6">Human Oversight — Not Optional</h2>
          <p className="text-base text-gray-700 mb-4">
            The Human Review node was the most important design decision. The
            system never makes a final call on a record when confidence falls
            below threshold. Agents handle volume. Humans handle judgment.
          </p>
          <p className="text-base text-gray-700">
            Reviewers see original text, extracted data, and confidence scores
            side by side. Low-confidence fields are highlighted. The
            approve/reject/escalate model mirrors existing legal review
            workflows — no new mental model required.
          </p>
        </section>

        {/* Code-First Prototyping Section */}
        <section>
          <h2 className="font-semibold mb-6">Code-First, Figma Second</h2>
          <p className="text-base text-gray-700 mb-4">
            Built in React 19 with TypeScript using Cursor IDE and Claude. React
            Flow for the spatial canvas, Zustand for state, Tailwind for styling,
            Radix UI for accessible components. The prototype runs — nodes
            execute in topological order, progress bars fill in real time,
            individual nodes can be paused and resumed mid-pipeline.
          </p>
          <p className="text-base text-gray-700">
            Code-first because the core interactions — drag-and-drop
            composition, conditional edge routing, live execution feedback —
            don&apos;t survive static mockups. Figma came after, for refinement
            and documentation. Not as the starting point for design thinking.
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
