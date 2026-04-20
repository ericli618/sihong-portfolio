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
        {/* Opening Scene */}
        <section>
          <h2 className="font-semibold mb-6">TL;DR — One Timeline to Rule Them All</h2>
          <p className="text-base text-gray-700 italic mb-4">
            Imagine an attorney at 9 p.m., deep in an insider-trading
            investigation. Slack exports in UTC locked inside JSON files.
            iMessage chats in PST split across multiple archives. Phone-call
            logs as bare CSVs with no timezone or labels. The partner wants
            answers by dawn, and the story is buried under a mountain of
            mismatched files.
          </p>
          <p className="text-base text-gray-700 mb-4">
            I designed a unified conversation viewer that merges Slack, SMS,
            Teams, Bloomberg, email, and voicemail into a single
            chronological timeline — with every message retaining its
            legal-grade metadata. Demoed to Am Law 100 firms and federal
            agencies. 100% of attendees opted into beta immediately.
          </p>
          <p className="text-sm text-gray-500 italic">
            Note: All case-study content has been redacted or AI-generated for
            confidentiality.
          </p>
        </section>

        {/* Hero Screenshot */}
        <section>
          <Image
            src="/images/message-viewer/ediscovery-app.png"
            alt="Modern Message Viewer — unified conversation interface showing merged Slack, SMS, and email messages in chronological order with platform indicators and legal metadata"
            width={900}
            height={600}
            className="w-full"
            style={{ borderRadius: "8px", border: "1px solid var(--pale)" }}
          />
          <p
            className="text-sm mt-3 text-center"
            style={{ color: "var(--mid)", fontStyle: "italic" }}
          >
            Unified timeline — messages from every platform, one scrollable
            narrative
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
              { stat: "~30% faster", label: "Review time in mixed-data cases" },
              { stat: "6+ platforms", label: "Unified in one timeline" },
              { stat: "100% opt-in", label: "Beta adoption at demo" },
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

        {/* Problem Section */}
        <section>
          <h2 className="font-semibold mb-6">The Fragmentation Problem</h2>

          <Image
            src="/images/message-viewer/unified-timeline.svg"
            alt="Diagram showing fragmented communication sources (Slack, iMessage, Teams, Bloomberg, Voicemail) funneling into a single unified chronological timeline"
            width={900}
            height={350}
            className="w-full mb-6"
            style={{ borderRadius: "8px", border: "1px solid var(--pale)", backgroundColor: "var(--faint)", padding: "20px" }}
          />
          <p
            className="text-sm mb-8 text-center"
            style={{ color: "var(--mid)", fontStyle: "italic" }}
          >
            Five fragmented sources → one chronological timeline with
            platform-origin tracking
          </p>

          <p className="text-base text-gray-700 mb-4">
            Electronic evidence now spans Slack, SMS, Teams, Bloomberg chat,
            and more — but legacy review tools were built for email. Reviewers
            manually reconstruct timelines across applications, copy-pasting
            timestamps into Excel, guessing at timezone conversions. Context
            gaps mean missed signals: coded language goes undetected, timing
            subtleties between platforms disappear.
          </p>
          <p className="text-base text-gray-700">
            The goal: make reviewing Slack and text messages as natural as
            reviewing email — one coherent, chronologically ordered narrative
            that preserves every piece of legal metadata.
          </p>
        </section>

        {/* Competitive Landscape */}
        <section>
          <h2 className="font-semibold mb-6">What Already Existed (and What Didn&apos;t)</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "12px",
            }}
          >
            {[
              {
                name: "eDiscovery Tools",
                desc: "Relativity, Everlaw, DISCO — handle Slack after RSMF conversion but collapse entire days into flat views. Cross-platform context is lost.",
              },
              {
                name: "Omni-Inboxes",
                desc: "Front, Shift, Trillian — merge Slack, email, SMS for live support. Conversation-centric, but ignore legal metadata requirements entirely.",
              },
              {
                name: "The White Space",
                desc: "No existing tool balanced omni-channel conversation merging with legal-grade metadata preservation. That was the opening.",
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

        {/* Insight Section */}
        <section>
          <h2 className="font-semibold mb-6">&ldquo;What if every message was a document?&rdquo;</h2>
          <p className="text-base text-gray-700 mb-4">
            The breakthrough was flipping the axis. Instead of building
            platform-specific viewers, treat every timestamped item — a Slack
            message, a Teams emoji reaction, a voicemail transcription — as a
            first-class document in the existing review table. One row per
            message. Metadata preserved. Sorted by time.
          </p>
          <p className="text-base text-gray-700">
            This meant zero database restructuring — the viewer plugs into the
            existing schema. And it made the system extensible: adding Bloomberg
            or Discord support is a new parser, not a new product.
          </p>
        </section>

        {/* LLM Analysis */}
        <section>
          <Image
            src="/images/message-viewer/llm-mock.png"
            alt="LLM-assisted conversation analysis showing AI-generated thread summaries, sentiment indicators, and flagged coded language alongside the unified message timeline"
            width={900}
            height={600}
            className="w-full"
            style={{ borderRadius: "8px", border: "1px solid var(--pale)" }}
          />
          <p
            className="text-sm mt-3 text-center"
            style={{ color: "var(--mid)", fontStyle: "italic" }}
          >
            LLM-assisted analysis layer — AI summaries and sentiment alongside
            the human-readable timeline
          </p>
        </section>

        {/* Research & Listening */}
        <section>
          <h2 className="font-semibold mb-6">Listening Tour</h2>
          <p className="text-base text-gray-700">
            I interviewed litigation partners, corporate investigators, and
            expert reviewers across multiple firms. Mapped their data
            collection types (Slack, WhatsApp, Bloomberg, Cellebrite), the
            tools they were already using (Relativity, Concordance, Excel
            timelines), and where things broke: manual thread merging and
            timestamp coordination errors. The same pain points, every firm.
          </p>
        </section>

        {/* Design Synthesis Section */}
        <section>
          <h2 className="font-semibold mb-6">Design Process</h2>
          <p className="text-base text-gray-700 mb-4">
            Started with a taxonomy card-sort — reviewers and engineers
            clustered 50 real Slack, SMS, and email records into natural
            groupings. Three mental buckets emerged: Context, Evidence,
            Forensics. That hierarchy anchored the UI: conversation flow first,
            evidence markers second, forensic metadata on demand.
          </p>
          <p className="text-base text-gray-700 mb-4">
            The design principle became &ldquo;Context First, Details on
            Demand&rdquo; — each line shows sender, platform styling, and date
            banners at a glance. Hover reveals configurable metadata: IP
            addresses for fraud analysts, privilege flags for litigation
            reviewers. Different investigators see different layers of the
            same timeline.
          </p>
          <p className="text-base text-gray-700">
            After the Figma prototype demoed to Am Law 100 firms, global-bank
            compliance teams, and federal agencies, the feedback was specific
            and actionable: stronger visual breaks between conversations,
            a toggle between chronological and conversation-grouped views,
            and a V2 deduplication workflow for overlapping exports.
          </p>
        </section>

        {/* Outcomes Section */}
        <section>
          <h2 className="font-semibold mb-6">What Shipped</h2>
          <p className="text-base text-gray-700 mb-4">
            Released as part of a major platform update. Review time in
            mixed-data investigations dropped up to 30%. Tagging and timeline
            errors fell significantly. Audit trails became export-ready — a
            scrollable narrative instead of a reconstructed spreadsheet.
          </p>
          <p className="text-base text-gray-700">
            The deeper win was comprehension. Analysts could finally see
            cross-platform timing patterns — the Slack message sent 30 seconds
            before the Bloomberg trade, the iMessage that disappeared from
            one archive but persisted in another. The story was always there.
            It just needed one timeline to become visible.
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
