/* global React, Container, Eyebrow, Button, Pill, Icon */

// ---- HERO (credStyle / backdrop are tweakable from index.html) ----
const HERO_CREDS = ["200+ Enterprise Initiatives Delivered", "Healthcare & Regulated Data Experts", "SQL Server • ETL • EDI • AI"];

function HeroCreds({ style: credStyle, dark }) {
  if (credStyle === "chips") {
    return (
      <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 40 }}>
        {HERO_CREDS.map((t) => (
          <span key={t} style={{
            fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase",
            borderRadius: "var(--radius-pill)", padding: "9px 16px",
            background: dark ? "rgba(255,255,255,0.08)" : "var(--teal-50)",
            border: dark ? "1px solid rgba(255,255,255,0.25)" : "1px solid transparent",
            color: dark ? "rgba(255,255,255,0.88)" : "var(--teal-700)",
          }}>{t}</span>
        ))}
      </div>
    );
  }
  if (credStyle === "columns") {
    return (
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "20px 28px", marginTop: 44, maxWidth: 640 }}>
        {HERO_CREDS.map((t) => (
          <div key={t}>
            <div style={{ width: 28, height: 3, background: dark ? "var(--accent-bright)" : "var(--persian-green)", marginBottom: 12 }}></div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 12.5, letterSpacing: "0.08em", textTransform: "uppercase", lineHeight: 1.7, color: dark ? "rgba(255,255,255,0.78)" : "var(--fg3)" }}>{t}</div>
          </div>
        ))}
      </div>
    );
  }
  // default: "hairline" divider row
  return (
    <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "12px 18px", marginTop: 44, paddingTop: 24, borderTop: dark ? "1px solid rgba(255,255,255,0.2)" : "1px solid var(--border)" }}>
      {HERO_CREDS.map((t, i) => (
        <React.Fragment key={t}>
          {i > 0 && <span aria-hidden="true" style={{ width: 1, height: 16, background: dark ? "rgba(255,255,255,0.3)" : "var(--border-strong)" }}></span>}
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 12.5, letterSpacing: "0.08em", textTransform: "uppercase", color: dark ? "rgba(255,255,255,0.72)" : "var(--fg3)" }}>{t}</span>
        </React.Fragment>
      ))}
    </div>
  );
}

function Hero({ credStyle = "columns", backdrop = "white" }) {
  const dark = backdrop === "navy";
  const bg = dark
    ? "linear-gradient(150deg, var(--navy-800), var(--japan-indigo) 60%, var(--navy-700))"
    : backdrop === "tinted" ? "var(--gray-100)" : "var(--white)";
  return (
    <section id="top" style={{ background: bg, paddingTop: "var(--space-9)", paddingBottom: "var(--space-9)", position: "relative", overflow: "hidden", borderBottom: backdrop === "tinted" ? "1px solid var(--border)" : "none" }}>
      <Container>
        <div style={{ maxWidth: 760 }}>
          <h1 className="ft-display" style={{ marginTop: 0, marginBottom: 0, color: dark ? "#fff" : undefined }}>
            Healthcare Data, SQL Server &amp; <span style={{ color: dark ? "var(--accent-bright)" : "var(--persian-green)" }}>Integration Experts</span>
          </h1>
          <p className="ft-lead" style={{ marginTop: 26, maxWidth: 600, color: dark ? "rgba(255,255,255,0.78)" : undefined }}>
            We help healthcare organizations modernize SQL Server, ETL, EDI/X12, analytics,
            cloud platforms, and AI-powered data quality solutions.
          </p>
          <div style={{ display: "flex", gap: 14, marginTop: 36, flexWrap: "wrap" }}>
            <Button variant="primary" size="lg" href="contact.html" iconRight="arrow-right">Schedule a Strategy Call</Button>
            <Button variant={dark ? "onDark" : "secondary"} size="lg" href="case-studies.html">View Case Studies</Button>
          </div>
          <HeroCreds style={credStyle} dark={dark} />
        </div>
      </Container>
      <img src="assets/mark-teal.jpg" alt="" aria-hidden="true" style={{
        position: "absolute", right: -90, top: 40, width: 420, height: 420, borderRadius: 28,
        opacity: dark ? 0.12 : 0.06, transform: "rotate(-8deg)", pointerEvents: "none",
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

// ---- FEATURED SUCCESS STORY (real client-supplied case study) ----
function FeaturedStory() {
  const highlights = [
    { icon: "database", t: "Epic Clarity integration" },
    { icon: "list-checks", t: "100+ validation rules" },
    { icon: "file-check", t: "AHCA Provider Network Verification compliance" },
    { icon: "shield-check", t: "HIPAA-conscious audit and security controls" },
    { icon: "send", t: "Automated file generation and submission workflow" },
  ];
  const go = () => { window.location.href = "case-studies.html"; };
  return (
    <section id="featured-story" style={{ background: "var(--gray-100)", padding: "var(--space-9) 0", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
      <Container>
        <div style={{ maxWidth: 680, marginBottom: "var(--space-7)" }}>
          <h2 className="ft-h1" style={{ marginTop: 0, marginBottom: 16 }}>Featured Success Story</h2>
          <p className="ft-lead">Proven healthcare data modernization, compliance automation, and enterprise integration experience.</p>
        </div>
        <div role="link" tabIndex={0} aria-label="Read the featured case study"
          onClick={go}
          onKeyDown={(e) => { if (e.key === "Enter") go(); }}
          style={{ background: "var(--white)", border: "1px solid var(--border)", borderTop: "3px solid var(--persian-green)", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-sm)", overflow: "hidden", cursor: "pointer", transition: "all var(--dur) var(--ease-out)" }}
          onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "var(--shadow-md)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "var(--shadow-sm)"; e.currentTarget.style.transform = "translateY(0)"; }}
        >
          <div className="ft-fstory-grid" style={{ display: "grid", gridTemplateColumns: "1.45fr 1fr", alignItems: "stretch" }}>
            {/* Left: narrative */}
            <div style={{ padding: "var(--space-7)" }}>
              <Pill variant="teal">Featured Healthcare Project</Pill>
              <h3 className="ft-h2" style={{ margin: "20px 0 12px" }}>Epic-Powered Provider Network Verification (PNV) Modernization &amp; Compliance Automation</h3>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--persian-green)", marginBottom: 18 }}>Healthcare Payer &bull; AHCA Compliance &bull; Epic Clarity &bull; SQL Server ETL</div>
              <p className="ft-body" style={{ margin: 0, maxWidth: 560 }}>
                Replaced a vendor-managed AHCA Provider Network Verification process with an
                automated Epic Clarity and SQL Server solution featuring ETL, validation rules,
                audit controls, exception tracking, and secure submission workflows.
              </p>
              <div style={{ marginTop: 28 }}>
                <Button variant="primary" href="case-studies.html" iconRight="arrow-right">Read Case Study</Button>
              </div>
            </div>
            {/* Right: highlights */}
            <div style={{ background: "var(--teal-50)", borderLeft: "1px solid var(--border)", padding: "var(--space-6) var(--space-6)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--teal-700)", marginBottom: 18 }}>Highlights</div>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 14 }}>
                {highlights.map((h) => (
                  <li key={h.t} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                    <span style={{ flexShrink: 0, width: 30, height: 30, borderRadius: 8, background: "var(--white)", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Icon name={h.icon} size={16} color="var(--persian-green)" />
                    </span>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: 14.5, lineHeight: 1.5, color: "var(--fg2)", paddingTop: 4 }}>{h.t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

Object.assign(window, { Hero, TrustBar, ServicesGrid, FeaturedStory });
