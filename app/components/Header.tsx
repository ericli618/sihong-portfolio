"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Work", href: "/#work", sectionId: "work" },
  { label: "About", href: "/#about", sectionId: "about" },
  { label: "Contact", href: "/#contact", sectionId: "contact" },
];

const HERO_ID = "hero";

export default function Header() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  /* ── Scroll spy via scroll position ── */
  useEffect(() => {
    // Ordered top to bottom — hero first, contact last
    const orderedIds = [HERO_ID, "work", "about", "contact"];
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        // Near bottom of page → contact wins, no contest
        const nearBottom =
          window.innerHeight + window.scrollY >= document.body.scrollHeight - 150;
        if (nearBottom) {
          setActiveSection("contact");
          ticking = false;
          return;
        }

        // Walk the list in reverse — first section whose top is above
        // the trigger line (56px header + 1px buffer) wins
        const trigger = window.scrollY + window.innerHeight * 0.45;
        let found: string | null = null;
        for (let i = orderedIds.length - 1; i >= 0; i--) {
          const el = document.getElementById(orderedIds[i]);
          if (el && el.offsetTop <= trigger) {
            found = orderedIds[i];
            break;
          }
        }

        setActiveSection(found);
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ── Close mobile menu on resize to desktop ── */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const linkStyle = (sectionId: string | null) => {
    const isActive = sectionId && activeSection === sectionId;
    return {
      backgroundColor: isActive ? "var(--black)" : "transparent",
      color: isActive ? "var(--white)" : "var(--secondary)",
      padding: "6px 14px",
      borderRadius: "var(--radius-pill)",
      transition: "all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)",
      fontSize: "0.875rem",
      fontWeight: 500,
    } as React.CSSProperties;
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white"
      style={{ borderBottom: "2.5px solid var(--black)" }}
    >
      <nav className="mx-auto max-w-5xl px-6 md:px-8 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="text-lg"
          style={{ fontFamily: "var(--font-display)", color: "var(--black)" }}
        >
          Eric Sihong Li
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-2 items-center">
          {navLinks.map(({ label, href, sectionId }) => (
            <Link key={label} href={href} style={linkStyle(sectionId)}>
              {label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          style={{ background: "none", border: "none" }}
        >
          <span
            style={{
              display: "block",
              width: "22px",
              height: "2.5px",
              backgroundColor: "var(--black)",
              transition: "all 0.25s ease",
              transform: mobileOpen
                ? "rotate(45deg) translate(4px, 4px)"
                : "none",
            }}
          />
          <span
            style={{
              display: "block",
              width: "22px",
              height: "2.5px",
              backgroundColor: "var(--black)",
              margin: "5px 0",
              transition: "all 0.25s ease",
              opacity: mobileOpen ? 0 : 1,
            }}
          />
          <span
            style={{
              display: "block",
              width: "22px",
              height: "2.5px",
              backgroundColor: "var(--black)",
              transition: "all 0.25s ease",
              transform: mobileOpen
                ? "rotate(-45deg) translate(4px, -4px)"
                : "none",
            }}
          />
        </button>
      </nav>

      {/* Mobile menu dropdown */}
      <div
        style={{
          maxHeight: mobileOpen ? "300px" : "0",
          overflow: "hidden",
          transition: "max-height 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
          borderTop: mobileOpen ? "1px solid var(--pale)" : "none",
          backgroundColor: "var(--white)",
        }}
        className="md:hidden"
      >
        <div className="flex flex-col px-6 py-4 gap-2">
          {navLinks.map(({ label, href, sectionId }) => (
            <Link
              key={label}
              href={href}
              onClick={() => setMobileOpen(false)}
              style={{
                ...linkStyle(sectionId),
                display: "block",
                padding: "10px 16px",
                fontSize: "1rem",
              }}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
