import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";
import DisplacementCanvas from "./DisplacementCanvas";

interface ProjectLayoutProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

export default function ProjectLayout({
  title,
  subtitle,
  children,
}: ProjectLayoutProps) {
  return (
    <>
      <Header />
      <main className="pt-14">
        {/* Hero banner with displacement canvas */}
        <div className="relative" style={{ borderBottom: "2.5px solid var(--black)" }}>
          <DisplacementCanvas
            className="hidden md:block"
            style={{ position: "absolute", inset: 0, zIndex: 0 }}
          />
          <div
            className="md:hidden canvas-grid"
            style={{ position: "absolute", inset: 0, zIndex: 0 }}
          />
          <div className="relative z-10 mx-auto max-w-4xl px-6 md:px-8 py-14 md:py-20">
            <Link
              href="/"
              className="text-sm font-medium mb-8 inline-flex items-center gap-1.5"
              style={{ color: "var(--mid)" }}
            >
              ← Back to work
            </Link>

            <h1 className="mb-3 fade-up">{title}</h1>
            <p
              className="text-base md:text-lg font-medium fade-up"
              style={{
                color: "var(--secondary)",
                lineHeight: 1.6,
                animationDelay: "0.1s",
              }}
            >
              {subtitle}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="mx-auto max-w-4xl px-6 md:px-8 py-14 md:py-20">
          <div className="space-y-10">{children}</div>
        </div>
      </main>
      <Footer />
    </>
  );
}
