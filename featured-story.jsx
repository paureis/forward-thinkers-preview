/* global React, Container, Pill, Button, Icon */
// Featured Success Story section for the homepage.
// The Claude Design export referenced <FeaturedStory /> in index.html but did
// not ship its definition, so this supplies it using the shared UI primitives.
function FeaturedStory() {
  const goToCaseStudies = () => { window.location.href = "case-studies.html"; };

  const highlights = [
    { icon: "database", text: "Epic Clarity integration" },
    { icon: "list-checks", text: "100+ validation rules" },
    { icon: "file-check-2", text: "AHCA Provider Network Verification compliance" },
    { icon: "shield-check", text: "HIPAA-conscious audit and security controls" },
    { icon: "send", text: "Automated file generation and submission workflow" },
  ];

  return (
    <section style={{ background: "var(--bright-gray, #EBEBED)", padding: "var(--space-10, 96px) 0" }}>
      <Container>
        <h2 style={{
          fontFamily: "var(--font-display)", color: "var(--japan-indigo, #1C4357)",
          fontSize: "clamp(32px, 4vw, 48px)", lineHeight: 1.1, fontWeight: 600,
          letterSpacing: "-0.01em", margin: "0 0 14px",
        }}>
          Featured Success Story
        </h2>
        <p style={{ color: "#51636d", fontSize: 18, lineHeight: 1.5, maxWidth: 640, margin: "0 0 40px" }}>
          Proven healthcare data modernization, compliance automation, and enterprise integration experience.
        </p>

        <div
          onClick={goToCaseStudies}
          className="ft-fstory-grid"
          style={{
            cursor: "pointer", background: "var(--white, #ffffff)",
            borderRadius: "var(--radius-lg, 16px)", borderTop: "4px solid var(--persian-green, #07A397)",
            boxShadow: "0 18px 50px rgba(28,67,87,0.10)", overflow: "hidden",
            display: "grid", gridTemplateColumns: "1.5fr 1fr",
          }}
        >
          <div style={{ padding: 40 }}>
            <Pill variant="teal">Featured Healthcare Project</Pill>
            <h3 style={{
              fontFamily: "var(--font-display)", color: "var(--japan-indigo, #1C4357)",
              fontSize: "clamp(24px, 2.6vw, 34px)", lineHeight: 1.15, fontWeight: 600, margin: "18px 0 10px",
            }}>
              Epic-Powered Provider Network Verification (PNV) Modernization &amp; Compliance Automation
            </h3>
            <div style={{
              fontFamily: "var(--font-display)", color: "var(--persian-green, #07A397)", fontWeight: 600,
              fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 18px",
            }}>
              Healthcare Payer • AHCA Compliance • Epic Clarity • SQL Server ETL
            </div>
            <p style={{ color: "#51636d", fontSize: 16, lineHeight: 1.6, margin: "0 0 28px" }}>
              Replaced a vendor-managed AHCA Provider Network Verification process with an automated Epic
              Clarity and SQL Server solution featuring ETL, validation rules, audit controls, exception
              tracking, and secure submission workflows.
            </p>
            <Button variant="primary" href="case-studies.html" iconRight="arrow-right"
              onClick={(e) => e.stopPropagation()}>
              Read Case Study
            </Button>
          </div>

          <div style={{ background: "var(--teal-50, #e6f7f5)", padding: 40 }}>
            <div style={{
              fontFamily: "var(--font-display)", color: "var(--teal-700, #057e78)", fontWeight: 600,
              fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", margin: "0 0 20px",
            }}>
              Highlights
            </div>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 18 }}>
              {highlights.map((h, i) => (
                <li key={i} style={{
                  display: "flex", gap: 12, alignItems: "flex-start",
                  color: "var(--japan-indigo, #1C4357)", fontSize: 15, lineHeight: 1.4,
                }}>
                  <span style={{ color: "var(--persian-green, #07A397)", flexShrink: 0, marginTop: 2 }}>
                    <Icon name={h.icon} size={18} />
                  </span>
                  <span>{h.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
Object.assign(window, { FeaturedStory });
