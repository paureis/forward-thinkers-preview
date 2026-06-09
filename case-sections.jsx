/* global React, Container, Eyebrow, Button, Pill, Icon */

/* ============================================================
   CASE STUDIES — proof page.
   Content below is REAL, client-supplied (June 2026):
   A) Epic-Powered PNV Modernization & Compliance Automation
   B) Fragile Data Platform → High-Performance Intelligence Engine
   No client names are disclosed; sector lines are descriptors.
   ============================================================ */

// ---- HERO (light) ----
function CaseHero() {
  return (
    <section id="top" style={{ background: "var(--gray-100)", borderBottom: "1px solid var(--border)", paddingTop: "var(--space-9)", paddingBottom: "var(--space-8)" }}>
      <Container>
        <div style={{ maxWidth: 720 }}>
          <Eyebrow>Case Studies</Eyebrow>
          <h1 className="ft-h1" style={{ marginTop: 16, marginBottom: 0, fontSize: "clamp(36px, 4.4vw, 52px)" }}>Measurable results for enterprise data teams.</h1>
          <p className="ft-lead" style={{ marginTop: 22, maxWidth: 620 }}>
            Proven healthcare data modernization, compliance automation, and enterprise
            integration experience — with outcomes leaders can take to the board.
          </p>
        </div>
      </Container>
    </section>
  );
}

// ---- SHARED CASE CARD (narrative + headline-metric panel) ----
function CaseCard({ pill, sector, title, blocks, metric, metricLabel }) {
  return (
    <div style={{ border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-sm)", overflow: "hidden", background: "var(--white)" }}>
      <div className="ft-featured-grid" style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", alignItems: "stretch" }}>
        {/* Left: narrative */}
        <div style={{ padding: "var(--space-7)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20, flexWrap: "wrap" }}>
            {pill}
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--fg3)" }}>{sector}</span>
          </div>
          <h2 className="ft-h2" style={{ margin: "0 0 var(--space-6)" }}>{title}</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
            {blocks.map((b) => (
              <div key={b.label} style={{ borderLeft: "2px solid var(--teal-50)", paddingLeft: 18 }}>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--persian-green)", marginBottom: 7 }}>{b.label}</div>
                <p className="ft-body" style={{ margin: 0, maxWidth: 560 }}>{b.body}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Right: headline metric */}
        <div style={{ background: "linear-gradient(160deg, var(--navy-800), var(--japan-indigo))", padding: "var(--space-7)", display: "flex", flexDirection: "column", justifyContent: "center", position: "relative", overflow: "hidden" }}>
          <img src="assets/mark-teal.jpg" alt="" aria-hidden="true" style={{ position: "absolute", right: -60, bottom: -60, width: 220, height: 220, borderRadius: 22, opacity: 0.12 }} />
          <div style={{ position: "relative" }}>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--accent-bright)", marginBottom: 16 }}>Headline result</div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 72, lineHeight: 0.95, color: "#fff", letterSpacing: "-0.02em" }}>{metric}</div>
            <div style={{ fontFamily: "var(--font-body)", fontSize: 14.5, color: "rgba(255,255,255,0.82)", marginTop: 16 }}>{metricLabel}</div>
            <div style={{ width: 40, height: 3, background: "var(--accent-bright)", marginTop: 18 }} />
          </div>
        </div>
      </div>
    </div>
  );
}

// ---- CASE STUDY A — FEATURED ----
function FeaturedCase() {
  const blocks = [
    { label: "Challenge", body: "A leading Florida healthcare organization depended on a third-party vendor to produce and submit the Provider Network Verification files required by AHCA. The arrangement meant limited visibility into provider data quality, reliance on an outside vendor for critical compliance reporting, and exposure to AHCA penalties of up to $1,000 per day for late or inaccurate submissions." },
    { label: "Solution", body: "Forward Thinkers built an end-to-end PNV platform with Epic Clarity as the system of record and SQL Server as the integration foundation. It included custom Clarity extraction, enterprise ETL pipelines (SSIS), automated AHCA-compliant file generation (Provider Group, Service Location, and End-of-Transmission files), a validation engine with more than 100 automated rules, HIPAA-compliant security and audit controls (encryption in transit and at rest, secure SFTP, role-based access, audit logging), and an operational dashboard for submission status and exception management." },
    { label: "Outcome", body: "A fully automated, auditable PNV workflow that eliminated the third-party dependency, sharply reduced compliance risk, and improved provider data quality and AHCA readiness." },
  ];
  return (
    <section style={{ background: "var(--white)", padding: "var(--space-9) 0" }}>
      <Container>
        <CaseCard
          pill={<Pill variant="teal">Featured</Pill>}
          sector={"Healthcare Payer \u2022 AHCA Compliance \u2022 Epic Clarity \u2022 SQL Server ETL"}
          title={"Epic-Powered Provider Network Verification (PNV) Modernization & Compliance Automation"}
          blocks={blocks}
          metric="100+"
          metricLabel="automated validation rules"
        />
      </Container>
    </section>
  );
}

// ---- CASE STUDY B — SECOND ----
function CaseGrid() {
  const blocks = [
    { label: "Challenge", body: "A leading healthcare organization replicated cloud-hosted Epic Clarity data into on-prem SQL Server through a legacy ETL process that failed frequently, required constant manual intervention, and did not deliver reporting data until 8 to 10 AM. The team spent more than 100 hours over a year, and 30+ hours in a single month, recovering from failures." },
    { label: "Solution", body: "Forward Thinkers redesigned it into a self-healing, enterprise-grade integration platform: intelligent Clarity replication with governance and filtering, automatic recovery from common failures, automated schema adaptation for Epic upgrades, intelligent load prioritization, advanced monitoring and alerting (email, SMS, Teams), and an incremental change framework." },
    { label: "Outcome", body: "Reliable, early-morning data delivery with far less manual effort, faster reporting for finance, operations, and analytics teams, and a platform that absorbs Epic schema changes automatically." },
  ];
  return (
    <section style={{ background: "var(--gray-100)", padding: "var(--space-9) 0" }}>
      <Container>
        <CaseCard
          pill={<Pill variant="navy">Case Study</Pill>}
          sector={"Healthcare \u2022 Epic Clarity \u2022 SQL Server \u2022 Enterprise ETL & Analytics"}
          title={"Transforming a Fragile Data Platform into a High-Performance Healthcare Intelligence Engine"}
          blocks={blocks}
          metric="99%"
          metricLabel="ETL success rate"
        />
      </Container>
    </section>
  );
}

// ---- BY THE NUMBERS (navy stat band — real, client-supplied figures) ----
function ByNumbers() {
  const stats = [
    { n: "99%", label: "ETL success rate" },
    { n: "100+", label: "Automated validation rules" },
    { n: "200+", label: "Enterprise initiatives delivered" },
    { n: "~4 AM", label: "Reporting data delivered (previously 8\u201310 AM)" },
  ];
  return (
    <section style={{ background: "linear-gradient(160deg, var(--navy-800), var(--japan-indigo))", padding: "var(--space-9) 0", position: "relative", overflow: "hidden" }}>
      <img src="assets/mark-teal.jpg" alt="" aria-hidden="true" style={{ position: "absolute", left: -120, top: -90, width: 400, height: 400, borderRadius: 32, opacity: 0.10, transform: "rotate(-8deg)", pointerEvents: "none" }} />
      <Container style={{ position: "relative" }}>
        <div style={{ marginBottom: "var(--space-7)" }}>
          <Eyebrow onDark>By the numbers</Eyebrow>
          <h2 className="ft-h2" style={{ color: "#fff", marginTop: 14 }}>The aggregate picture.</h2>
        </div>
        <div className="ft-bynumbers-grid" style={{ display: "flex", gap: "var(--space-7)", flexWrap: "wrap" }}>
          {stats.map((s) => (
            <div key={s.label} style={{ flex: 1, minWidth: 170 }}>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 54, lineHeight: 1, color: "#fff", letterSpacing: "-0.01em" }}>{s.n}</div>
              <div style={{ fontFamily: "var(--font-body)", fontSize: 14.5, color: "rgba(255,255,255,0.82)", marginTop: 12, lineHeight: 1.4 }}>{s.label}</div>
              <div style={{ width: 36, height: 3, background: "var(--accent-bright)", marginTop: 14 }} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// ---- NAVY CTA BAND ----
function CaseCTA() {
  return (
    <section style={{ background: "var(--white)", padding: "var(--space-9) 0" }}>
      <Container>
        <div style={{ background: "linear-gradient(120deg, var(--japan-indigo), var(--navy-700))", borderRadius: "var(--radius-lg)", padding: "var(--space-9) var(--space-8)", textAlign: "center", position: "relative", overflow: "hidden" }}>
          <img src="assets/mark-teal.jpg" alt="" aria-hidden="true" style={{ position: "absolute", right: -60, top: -60, width: 280, height: 280, borderRadius: 24, opacity: 0.12 }} />
          <div style={{ position: "relative" }}>
            <Eyebrow onDark>Start the conversation</Eyebrow>
            <h2 className="ft-h1" style={{ color: "#fff", margin: "16px auto 18px", maxWidth: 640 }}>Want results like these?</h2>
            <p className="ft-lead" style={{ color: "rgba(255,255,255,0.74)", maxWidth: 520, margin: "0 auto 34px" }}>
              Book a data assessment and we'll map the fastest path to outcomes you can take to the board.
            </p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <Button variant="primary" size="lg" href="contact.html" iconRight="arrow-right">Book a data assessment</Button>
              <Button variant="onDark" size="lg" href="contact.html">Talk to our team</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

Object.assign(window, { CaseHero, FeaturedCase, CaseGrid, ByNumbers, CaseCTA });
