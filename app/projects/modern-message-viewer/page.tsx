import Image from "next/image";
import Link from "next/link";
import ProjectLayout from "../../components/ProjectLayout";

export const metadata = {
  title: "Modern Message Viewer — Eric Sihong Li",
  description:
    "Unified conversation viewer consolidating Slack, email, SMS, and call transcripts for legal investigations",
};

export default function ModernMessageViewerPage() {
  return (
    <ProjectLayout
      title="Modern Message Viewer"
      subtitle="Unified Communication Review for Legal Investigations"
    >
      <div className="space-y-20 my-16">
        {/* Hero Section */}
        <section>
          <h2 className="font-semibold mb-6">Hero — "Imagine for a second"</h2>
          <p className="text-base text-gray-700 italic">
            An attorney at 9 p.m. in a war-room pursuing an insider-trading
            investigation. Slack exports in UTC timestamps locked in JSON.
            iMessage chats in PST across multiple files. Phone-call logs as
            bare CSV files without timezone or labels. Discord threads with
            hidden communications behind emoji reactions. Cryptic emails
            scattered across folders. The caffeine crash is coming, the partner
            wants answers by dawn, and the story you need is buried under a
            mountain of mismatched files.
          </p>
          <p className="text-sm text-gray-500 italic mt-4">
            Note: All case-study content has been redacted or AI-generated for
            confidentiality.
          </p>
        </section>

        {/* Problem Section */}
        <section>
          <Image
            src="/images/message-viewer/ediscovery-app.png"
            alt="Modern Message Viewer — unified conversation interface"
            width={900}
            height={500}
            className="mb-8 w-full"
            style={{ borderRadius: "8px", border: "1px solid var(--pale)" }}
          />

          <h2 className="font-semibold mb-6">Problem — Fragmented Communications in Investigations</h2>
          <p className="text-base text-gray-700 mb-4">
            Electronic evidence now spans Slack, text messages, Teams chats, and
            more—yet legacy review tools weren't designed for these modern
            formats. Reviewers manually reconstruct timelines across multiple
            applications. Without specialized tooling, reviewing conversations
            across platforms is complex and time-consuming. Context gaps risk
            overlooking critical details or misinterpreting coded language.
          </p>
        </section>

        {/* Vision Section */}
        <section>
          <h2 className="font-semibold mb-6">Vision — All in One Modern Viewer</h2>
          <p className="text-base text-gray-700 mb-4">
            Original goal: Make reviewing Slack chats and text messages as
            straightforward as reviewing emails—unifying fragmented
            communications into one coherent, chronologically ordered narrative.
            Challenge: Transform a broad vision into practical, intuitive
            functionality meeting heavily regulated industry requirements.
          </p>
        </section>

        {/* Research Section */}
        <section>
          <h2 className="font-semibold mb-6">Dispel Blindspots and Internal Assumptions</h2>

          <div className="mb-6">
            <h3 className="font-semibold text-base mb-4">Competitive landscape analysis:</h3>
            <div className="space-y-3 text-base text-gray-700">
              <p>
                <span className="font-medium">Relativity Short-Message Viewer:</span>{" "}
                Displays Slack threads after RSMF conversion; platform-specific
              </p>
              <p>
                <span className="font-medium">Everlaw, Logikcull, DISCO:</span>{" "}
                Promise chat review but collapse entire days; cross-platform
                context lost
              </p>
              <p>
                <span className="font-medium">Front, Shift, Trillian:</span> Omni-inboxes
                merging Slack, email, SMS for live support—conversation-centric
                but ignore legal metadata
              </p>
            </div>
          </div>

          <p className="text-base text-gray-700 font-medium">
            White Space: No existing solution balanced omni-channel conversation
            merging with legal-grade metadata preservation.
          </p>
        </section>

        {/* Insight Section */}
        <section>
          <Image
            src="/images/message-viewer/llm-mock.png"
            alt="LLM-assisted analysis mock-up for conversation review"
            width={900}
            height={500}
            className="mb-8 w-full"
            style={{ borderRadius: "8px", border: "1px solid var(--pale)" }}
          />

          <h2 className="font-semibold mb-6">The AHA! Moment</h2>
          <p className="text-base text-gray-700 mb-4">
            <span className="italic">"What if we flip the axis—treat every single line as a document?"</span>
          </p>
          <p className="text-base text-gray-700 mb-4">
            <span className="font-medium">Benefits:</span> Thread any timestamped
            item (Slack message, Teams emoji, phone note) into one scrollable
            narrative. Integrate directly into existing table schema—no database
            restructuring. Enable future source additions (Bloomberg, Discord,
            voicemail) through parser expansion.
          </p>
        </section>

        {/* Research Listening Tour Section */}
        <section>
          <h2 className="font-semibold mb-6">Client Listening Tour</h2>
          <p className="text-base text-gray-700">
            Conducted interviews with litigation partners, corporate
            investigators, and expert reviewers across multiple firms. Mapped
            data collection types (Slack, WhatsApp, Bloomberg, Cellebrite),
            active tools (Relativity, Concordance, Excel timelines), and failure
            points: manual thread merging and timestamp coordination errors.
          </p>
        </section>

        {/* Design Synthesis Section */}
        <section>
          <h2 className="font-semibold mb-6">Design Synthesis</h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-base mb-2">Empathize → Define</h3>
              <p className="text-base text-gray-700">
                Taxonomy card-sort with reviewers and engineers clustering 50
                real Slack, SMS, and email records. Surfaced mental buckets:
                Context → Evidence → Forensics. Anchored UI hierarchy to natural
                scan patterns.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-base mb-2">Ideate</h3>
              <p className="text-base text-gray-700">
                "Context First, Details on Demand"—each line displays sender
                avatar, original platform styling, and date banners. Hover
                states reveal configurable metadata (IP addresses for fraud
                analysts, privilege flags for litigation reviewers).
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-base mb-2">Prototype & Demo</h3>
              <p className="text-base text-gray-700">
                Built interactive Figma prototype. Demoed to Am Law 100 firms,
                global-bank compliance groups, federal agencies. 100% of
                attendees opted into beta immediately.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-base mb-2">Feedback</h3>
              <p className="text-base text-gray-700">
                Stronger visual breaks between conversations. Toggle between
                chronological and conversation views. Documented V2 deduplication
                workflow.
              </p>
            </div>
          </div>
        </section>

        {/* Outcomes Section */}
        <section>
          <h2 className="font-semibold mb-6">Outcomes</h2>
          <p className="text-base text-gray-700 mb-4">
            Released as part of major platform update. Up to 30% faster review
            time in mixed-data investigations. Reduced tagging and timeline
            errors. Clearer audit trails with export-ready narrative flow.
            Higher analyst comprehension enabling detection of coded language
            and timing subtleties.
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
            Explore the interactive Figma prototype — browse conversations,
            review metadata, and experience the unified viewer.
          </p>
          <Link
            href="/demo/message-viewer"
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
