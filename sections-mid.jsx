/* global React, Container, Eyebrow, Button, Pill, Icon */

// ---- FLAGSHIP: Healthcare & Regulated Data Solutions ----
function Flagship() {
  const features = [
    { icon: "git-merge", t: "Payer–provider data", d: "Unify and reconcile data across payers, providers, and partners." },
    { icon: "file-check", t: "Claims, AHCA & CMS", d: "Pipelines built for claims and AHCA / CMS reporting environments." },
    { icon: "lock", t: "HIPAA-conscious pipelines", d: "PHI-aware handling, controls, and auditability across the flow." },
    { icon: "arrow-left-right", t: "EDI / X12 + healthcare ETL", d: "Standards-based exchange and healthcare-grade ETL at scale." },
  ];
  return (
    <section id="flagship" style={{ background: "linear-gradient(150deg, var(--navy-800), var(--japan-indigo) 55%, var(--navy-700))", padding: "var(--space-10) 0", position: "relative", overflow: "hidden" }}>
      <img src="assets/mark-teal.jpg" alt="" aria-hidden="true" style={{ position: "absolute", left: -120, bottom: -120, width: 480, height: 480, borderRadius: 32, opacity: 0.12, pointerEvents: "none" }} />
      <Container style={{ position: "relative" }}>
        <div className="ft-flagship-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-8)", alignItems: "center" }}>
          <div>
            <div style={{ display: "flex", gap: 10, marginBottom: 22 }}>
              <Pill variant="navy">Our core differentiator</Pill>
              <Pill variant="outline">HIPAA-conscious</Pill>
            </div>
            <Eyebrow onDark>Healthcare &amp; Regulated Data Solutions</Eyebrow>
            <h2 className="ft-display" style={{ color: "#fff", marginTop: 18, marginBottom: 20, fontSize: "clamp(40px, 5vw, 60px)" }}>Enterprise healthcare &amp; regulated-data transformation.</h2>
            <p className="ft-lead" style={{ color: "rgba(255,255,255,0.78)", marginBottom: 34, maxWidth: 520 }}>
              The work most consultancies won't touch: payer–provider data, claims, and
              AHCA / CMS environments, moved through HIPAA-conscious pipelines, EDI / X12,
              and healthcare-grade ETL — governed and decision-ready.
            </p>
            <Button variant="primary" size="lg" href="healthcare.html" iconRight="arrow-right">Explore the practice</Button>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-4)" }}>
            {features.map((f) => (
              <div key={f.t} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "var(--radius-lg)", padding: "var(--space-5)" }}>
                <Icon name={f.icon} size={24} color="var(--accent-bright)" />
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 16, color: "#fff", margin: "14px 0 6px" }}>{f.t}</div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 13.5, lineHeight: 1.55, color: "rgba(255,255,255,0.66)" }}>{f.d}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

// ---- RESULTS / STATS BAND (placeholders — awaiting verified client metrics) ----
function Results() {
  // Metric slots: category hints only. NO invented numbers — swap in verified data pre-launch.
  const slots = [
    "Reporting / query speed-up",
    "Revenue or cost recovered",
    "Migration / delivery timeline",
    "Pipeline reliability",
  ];
  return (
    <section id="results" style={{ background: "var(--persian-green)", padding: "var(--space-8) 0" }}>
      <Container>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 20, marginBottom: "var(--space-7)" }}>
          <div>
            <Eyebrow style={{ color: "rgba(255,255,255,0.7)" }}>Measurable Results</Eyebrow>
            <h2 className="ft-h2" style={{ color: "#fff", marginTop: 14 }}>Outcomes our clients can put in a board deck.</h2>
            <span style={{ display: "inline-block", marginTop: 14, fontFamily: "var(--font-body)", fontSize: 13, color: "#fff", background: "rgba(255,255,255,0.16)", border: "1px dashed rgba(255,255,255,0.5)", borderRadius: "var(--radius-pill)", padding: "6px 14px" }}>[PLACEHOLDER — pending verified client metrics]</span>
          </div>
          <Button variant="onDark" href="case-studies.html" iconRight="arrow-right">Read case studies</Button>
        </div>
        <div className="ft-stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "var(--space-6)" }}>
          {slots.map((s) => (
            <div key={s} style={{ borderTop: "2px dashed rgba(255,255,255,0.45)", paddingTop: 18 }}>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 50, lineHeight: 1, color: "rgba(255,255,255,0.55)", letterSpacing: "-0.01em" }}>&mdash;&mdash;</div>
              <div style={{ fontFamily: "var(--font-body)", fontSize: 14.5, color: "rgba(255,255,255,0.82)", marginTop: 12, lineHeight: 1.4 }}>{s}<br /><span style={{ fontSize: 12, color: "rgba(255,255,255,0.62)" }}>[pending client metric]</span></div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// ---- CASE STUDY / QUOTE (placeholder testimonial) ----
function CaseStudy() {
  return (
    <section style={{ background: "var(--gray-100)", padding: "var(--space-9) 0" }}>
      <Container narrow style={{ textAlign: "center" }}>
        <Icon name="quote" size={40} color="var(--persian-green)" />
        <p style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 28, lineHeight: 1.32, color: "var(--gray-400)", margin: "24px 0 18px", textWrap: "balance" }}>
          “[PLACEHOLDER TESTIMONIAL — pending client approval. A two-to-three line client
          quote about the engagement and its outcome will live here.]”
        </p>
        <span style={{ display: "inline-block", marginBottom: 28, fontFamily: "var(--font-body)", fontSize: 12.5, color: "var(--fg3)", background: "var(--white)", border: "1px dashed var(--border-strong)", borderRadius: "var(--radius-pill)", padding: "6px 14px" }}>[PLACEHOLDER TESTIMONIAL]</span>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14 }}>
          <div style={{ width: 48, height: 48, borderRadius: "50%", background: "var(--border-strong)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 16, color: "var(--white)" }}>&mdash;</div>
          <div style={{ textAlign: "left" }}>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 15, color: "var(--fg2)" }}>[Client name]</div>
            <div style={{ fontFamily: "var(--font-body)", fontSize: 13.5, color: "var(--fg3)" }}>[Title, Organization]</div>
          </div>
        </div>
      </Container>
    </section>
  );
}

// ---- FINAL CTA ----
function CTA() {
  return (
    <section id="contact" style={{ background: "var(--white)", padding: "var(--space-9) 0" }}>
      <Container>
        <div style={{ background: "linear-gradient(120deg, var(--japan-indigo), var(--navy-700))", borderRadius: "var(--radius-lg)", padding: "var(--space-9) var(--space-8)", textAlign: "center", position: "relative", overflow: "hidden" }}>
          <img src="assets/mark-teal.jpg" alt="" aria-hidden="true" style={{ position: "absolute", right: -60, top: -60, width: 280, height: 280, borderRadius: 24, opacity: 0.12 }} />
          <div style={{ position: "relative" }}>
            <Eyebrow onDark>Start the conversation</Eyebrow>
            <h2 className="ft-h1" style={{ color: "#fff", margin: "16px auto 18px", maxWidth: 640 }}>Ready to make your data decision-ready?</h2>
            <p className="ft-lead" style={{ color: "rgba(255,255,255,0.74)", maxWidth: 520, margin: "0 auto 34px" }}>
              Book a data assessment and we'll map the fastest path from where you are to a governed, decision-grade foundation.
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

Object.assign(window, { Flagship, Results, CaseStudy, CTA });
