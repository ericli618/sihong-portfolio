import Link from "next/link";
import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DisplacementCanvas from "./components/DisplacementCanvas";

const projects = [
  {
    title: "Review Pipeline Canvas",
    description:
      "Canvas-based AI agent orchestration for eDiscovery — designing how humans and agents collaborate on document review workflows.",
    href: "/projects/review-pipeline-canvas",
    tags: ["AI Agents", "Canvas UI", "React Flow"],
    thumbnail: "/images/home/canvas-thumb.png",
  },
  {
    title: "SmartAction Builder",
    description:
      "No-code rules engine automating VA mail processing — $70.4M federal modernization converting paper workflows to intelligent digital routing.",
    href: "/projects/smartaction-builder",
    tags: ["Federal Gov", "No-Code", "AI Integration"],
    thumbnail: "/images/home/smartaction-thumb.jpg",
  },
  {
    title: "Modern Message Viewer",
    description:
      "Unified conversation viewer consolidating Slack, email, SMS, and call transcripts into a single reviewable narrative for legal investigations.",
    href: "/projects/modern-message-viewer",
    tags: ["eDiscovery", "Data Viz", "Enterprise"],
    thumbnail: "/images/home/message-viewer-thumb.png",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-14">
        {/* Hero — 2/3 viewport, displacement canvas, name + role only */}
        <section id="hero" className="relative" style={{ height: "66vh", minHeight: "400px" }}>
          <DisplacementCanvas
            className="hidden md:block"
            style={{ position: "absolute", inset: 0, zIndex: 0 }}
          />
          <div
            className="md:hidden canvas-grid"
            style={{ position: "absolute", inset: 0, zIndex: 0 }}
          />
          <div
            className="relative z-10 mx-auto max-w-5xl px-6 md:px-8 h-full flex flex-col justify-center"
            style={{ pointerEvents: "none" }}
          >
            <h1 className="fade-up">Eric Sihong Li</h1>
            <p
              className="mt-5 fade-up"
              style={{
                animationDelay: "0.08s",
                fontSize: "1.1rem",
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "var(--dark)",
              }}
            >
              Product Designer — Enterprise UX & AI Workflows
            </p>
            <p
              className="mt-6 fade-up"
              style={{
                animationDelay: "0.16s",
                color: "var(--dark)",
                fontSize: "1.15rem",
                lineHeight: 1.7,
                maxWidth: "560px",
              }}
            >
              I design systems where complex business logic, security constraints,
              and AI confidence thresholds meet real users — enterprise workflows
              where getting it wrong costs money or breaks compliance.
            </p>
          </div>
        </section>

        {/* Divider */}
        <div style={{ borderTop: "2.5px solid var(--black)" }} />

        {/* Projects */}
        <section
          id="work"
          className="mx-auto max-w-5xl px-6 md:px-8 py-16 md:py-24"
        >
          <h2 className="mb-12">Example Work</h2>

          <div className="flex flex-col gap-6">
            {projects.map((project, i) => (
              <Link
                key={project.title}
                href={project.href}
                className="block group"
              >
                <div
                  className="card-enter interactive-lift bg-white cursor-pointer overflow-hidden"
                  style={{
                    border: "2.5px solid var(--black)",
                    borderRadius: "var(--radius)",
                    animationDelay: `${i * 0.07}s`,
                  }}
                >
                  {/* Thumbnail */}
                  {project.thumbnail && (
                    <div
                      className="relative w-full"
                      style={{
                        height: "240px",
                        borderBottom: "2.5px solid var(--black)",
                        backgroundColor: "var(--faint)",
                      }}
                    >
                      <Image
                        src={project.thumbnail}
                        alt={`${project.title} preview`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  {/* Text content */}
                  <div className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                      <div className="flex-1">
                        <h3 className="mb-2">{project.title}</h3>
                        <p
                          className="text-base max-w-xl"
                          style={{ color: "var(--secondary)" }}
                        >
                          {project.description}
                        </p>
                      </div>
                      <span
                        className="text-sm font-semibold whitespace-nowrap self-start md:self-center"
                        style={{ color: "var(--black)" }}
                      >
                        Read case study →
                      </span>
                    </div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium px-3 py-1"
                          style={{
                            border: "1.5px solid var(--pale)",
                            borderRadius: "var(--radius-pill)",
                            color: "var(--mid)",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          style={{ borderTop: "2.5px solid var(--black)" }}
        >
          <div className="mx-auto max-w-5xl px-6 md:px-8 py-16 md:py-24">
            <h2 className="mb-12">About</h2>

            <div className="flex flex-col gap-14 max-w-3xl">
              {/* What I do */}
              <div>
                <p className="label mb-4">What I do</p>
                <p
                  className="text-base"
                  style={{ color: "var(--secondary)", lineHeight: 1.8 }}
                >
                  I work at the intersection of complex business logic and user
                  experience — the kind of problems where a wrong workflow costs
                  real money or breaks compliance. Permission hierarchies,
                  security-sensitive document handling, multi-step approval
                  chains, AI confidence thresholds that determine whether a human
                  needs to intervene.
                </p>
              </div>

              {/* How I work */}
              <div>
                <p className="label mb-4">How I work</p>
                <div
                  className="flex flex-col gap-4"
                  style={{ color: "var(--secondary)", lineHeight: 1.8 }}
                >
                  <p className="text-base">
                    Business logic first, design tools second. I research how
                    the problem is solved today, take what works, and push it
                    further.
                  </p>
                  <p className="text-base">
                    Figma is the foundation — design systems, component
                    libraries, low-fi prototypes until the structure is right.
                    Pouring the concrete. Then I connect Figma to agentic IDEs
                    through MCP so AI agents can read the specs and generate
                    code-ready replicas. The agents handle the drywall and
                    paint.
                  </p>
                  <p className="text-base">
                    Stakeholders get research, decision rationale, and effort
                    estimates — not just pixels. I write requirement docs
                    structured so both humans and LLMs can consume them.
                  </p>
                  <p className="text-base">
                    When the logic gets dense — permission hierarchies,
                    conditional routing, confidence thresholds — I put on my
                    hoodie, close my eyes, and walk in circles until the whole
                    system maps out conceptually. Looks ridiculous. But works.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
