/* global React, Container, Eyebrow, Button, Pill, Icon */

// ---- HERO ----
function Hero() {
  return (
    <section id="top" style={{ background: "var(--white)", paddingTop: "var(--space-9)", paddingBottom: "var(--space-9)", position: "relative", overflow: "hidden" }}>
      <Container>
        <div style={{ maxWidth: 760 }}>
          <Eyebrow>Enterprise Data Transformation</Eyebrow>
          <h1 className="ft-display" style={{ marginTop: 20, marginBottom: 0 }}>
            Your data, governed and <span style={{ color: "var(--persian-green)" }}>decision-ready.</span>
          </h1>
          <p className="ft-lead" style={{ marginTop: 26, maxWidth: 600 }}>
            Forward Thinkers helps enterprise IT and data leaders in healthcare-adjacent
            organizations modernize fragmented data into a single, compliant, decision-grade foundation.
          </p>
          <div style={{ display: "flex", gap: 14, marginTop: 36, flexWrap: "wrap" }}>
            <Button variant="primary" size="lg" href="contact.html" iconRight="arrow-right">Book a data assessment</Button>
            <Button variant="secondary" size="lg" href="#services">Explore our services</Button>
          </div>
        </div>
      </Container>
      <img src="assets/mark-teal.jpg" alt="" aria-hidden="true" style={{
        position: "absolute", right: -90, top: 40, width: 420, height: 420, borderRadius: 28,
        opacity: 0.06, transform: "rotate(-8deg)", pointerEvents: "none",
      }} className="ft-hero-mark" />
    </section>
  );
}

// ---- TRUST BAR (certifications / credentials — not client logos) ----
function TrustBar() {
  // PLACEHOLDER credential slots — swap for the firm's actual certifications.
  const creds = ["[ MICROSOFT CERTIFIED ]", "[ CLOUD PARTNER ]", "[ SECURITY / HIPAA ]", "[ DATA CREDENTIAL ]"];
  return (
    <section style={{ background: "var(--gray-100)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "var(--space-6) 0" }}>
      <Container style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 24 }}>
        <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--fg3)" }}>Certifications &amp; credentials</span>
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
          {creds.map((l) => (
            <span key={l} style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 12.5, letterSpacing: "0.06em", color: "var(--gray-400)", border: "1px dashed var(--border-strong)", borderRadius: "var(--radius-md)", padding: "9px 16px" }}>{l}</span>
          ))}
        </div>
      </Container>
    </section>
  );
}

// ---- SERVICES GRID (5 service lines) ----
const SERVICES = [
  { icon: "gauge", name: "SQL Server Performance", desc: "Tuning, indexing, and query optimization that make slow SQL Server estates fast and predictable." },
  { icon: "git-merge", name: "ETL Modernization", desc: "Re-platform brittle, legacy ETL into resilient, observable pipelines built for scale." },
  { icon: "arrow-left-right", name: "EDI / X12 Integration", desc: "Reliable EDI and X12 transaction processing for claims, eligibility, and partner exchange." },
  { icon: "sparkles", name: "AI Data Cleansing", desc: "AI-assisted de-duplication, matching, and standardization for trustworthy source data." },
  { icon: "cloud", name: "Cloud Migration", desc: "Migrate data estates to a secure, cost-efficient cloud platform with zero-surprise cutovers." },
];

function ServiceCard({ s }) {
  const ref = React.useRef(null);
  return (
    <div ref={ref} style={{
      background: "var(--white)", border: "1px solid var(--border)", borderTop: "2px solid transparent",
      borderRadius: "var(--radius-lg)", padding: "var(--space-6)", boxShadow: "var(--shadow-sm)",
      transition: "all var(--dur) var(--ease-out)", cursor: "pointer",
    }}
      onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "var(--shadow-md)"; e.currentTarget.style.borderTopColor = "var(--persian-green)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "var(--shadow-sm)"; e.currentTarget.style.borderTopColor = "transparent"; e.currentTarget.style.transform = "translateY(0)"; }}
    >
      <div style={{ width: 50, height: 50, borderRadius: 12, background: "var(--teal-50)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
        <Icon name={s.icon} size={26} color="var(--persian-green)" />
      </div>
      <h3 className="ft-h4" style={{ marginBottom: 10 }}>{s.name}</h3>
      <p className="ft-small">{s.desc}</p>
      <div style={{ marginTop: 18, fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 13, color: "var(--persian-green)", display: "inline-flex", alignItems: "center", gap: 6 }}>Learn more <Icon name="arrow-right" size={15} /></div>
    </div>
  );
}

function ServicesGrid() {
  return (
    <section id="services" style={{ padding: "var(--space-9) 0", background: "var(--white)" }}>
      <Container>
        <div style={{ maxWidth: 620, marginBottom: "var(--space-7)" }}>
          <Eyebrow>What We Do</Eyebrow>
          <h2 className="ft-h1" style={{ marginTop: 16, marginBottom: 16 }}>Five service lines, one decision-ready foundation.</h2>
          <p className="ft-lead">Each engagement is scoped to ship measurable outcomes — not just recommendations.</p>
        </div>
        <div className="ft-services-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--space-5)" }}>
          {SERVICES.map((s) => <ServiceCard key={s.name} s={s} />)}
          <div style={{ background: "var(--japan-indigo)", borderRadius: "var(--radius-lg)", padding: "var(--space-6)", display: "flex", flexDirection: "column", justifyContent: "space-between", color: "#fff" }}>
            <div>
              <h3 className="ft-h4" style={{ color: "#fff", marginBottom: 10 }}>Not sure where to start?</h3>
              <p className="ft-small" style={{ color: "rgba(255,255,255,0.72)" }}>A two-week data assessment maps your estate and the fastest path to value.</p>
            </div>
            <div style={{ marginTop: 20 }}><Button variant="onDark" href="contact.html" iconRight="arrow-right">Book assessment</Button></div>
          </div>
        </div>
      </Container>
    </section>
  );
}

Object.assign(window, { Hero, TrustBar, ServicesGrid });
