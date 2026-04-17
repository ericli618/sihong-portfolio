export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Contact section — name card */}
      <section
        id="contact"
        style={{ borderTop: "2.5px solid var(--black)" }}
      >
        <div className="mx-auto max-w-5xl px-6 md:px-8 py-16 md:py-24">
          <h2 className="mb-12">Contact</h2>

          <div
            className="bg-white p-8 md:p-10"
            style={{
              border: "2.5px solid var(--black)",
              borderRadius: "var(--radius)",
              maxWidth: "560px",
            }}
          >
            <p
              className="text-2xl mb-1"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Eric Sihong Li
            </p>
            <p
              className="text-sm mb-6"
              style={{ color: "var(--mid)" }}
            >
              Product Designer · UX Designer · Business Analyst
            </p>

            <div className="flex flex-col gap-4">
              <div>
                <p className="label mb-2">Email</p>
                <p className="text-base font-medium">
                  SihongDesign@gmail.com
                </p>
              </div>
              <div>
                <p className="label mb-2">Location</p>
                <p className="text-base" style={{ color: "var(--secondary)" }}>
                  Vancouver, BC
                </p>
              </div>
              <div>
                <p className="label mb-2">LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/eric-sihong-li-/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-medium"
                  style={{ textDecoration: "underline", textUnderlineOffset: "3px" }}
                >
                  linkedin.com/in/eric-sihong-li
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Minimal footer */}
      <footer
        style={{
          borderTop: "1px solid var(--pale)",
        }}
      >
        <div
          className="mx-auto max-w-5xl px-6 md:px-8 py-6 text-xs"
          style={{ color: "var(--mid)" }}
        >
          <p>&copy; {currentYear} Eric Sihong Li</p>
        </div>
      </footer>
    </>
  );
}
