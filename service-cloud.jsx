/* global React, Container, Eyebrow, Button, Pill, Icon */

/* Cloud Migration — forked from the SQL Server Performance template.
   All body copy is PLACEHOLDER, pending client direction. */

const SERVICE = {
  eyebrow: "Services — Cloud Migration",
  title: "Migrate to the cloud without the surprises.",
  subhead: "Move data estates to a secure, cost-efficient cloud platform with zero-surprise cutovers.",
};

function ServiceHero() {
  return (
    <section id="top" style={{ background: "var(--gray-100)", borderBottom: "1px solid var(--border)", paddingTop: "var(--space-8)", paddingBottom: "var(--space-8)" }}>
      <Container>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 22, fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 12.5, letterSpacing: "0.04em", color: "var(--fg3)" }}>
          <a href="index.html" style={{ color: "var(--fg3)", textDecoration: "none" }}>Home</a>
          <Icon name="chevron-right" size={14} />
          <a href="index.html#services" style={{ color: "var(--fg3)", textDecoration: "none" }}>Services</a>
          <Icon name="chevron-right" size={14} />
          <span style={{ color: "var(--persian-green)" }}>Cloud Migration</span>
        </div>
        <div style={{ maxWidth: 720 }}>
          <Eyebrow>{SERVICE.eyebrow}</Eyebrow>
          <h1 className="ft-h1" style={{ marginTop: 16, marginBottom: 0, fontSize: "clamp(36px, 4.4vw, 52px)" }}>{SERVICE.title}</h1>
          <p className="ft-lead" style={{ marginTop: 22, maxWidth: 600 }}>{SERVICE.subhead}</p>
          <div style={{ display: "flex", gap: 14, marginTop: 32, flexWrap: "wrap" }}>
            <Button variant="primary" size="lg" href="contact.html" iconRight="arrow-right">Book a data assessment</Button>
            <Button variant="secondary" size="lg" href="contact.html">Talk to our team</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ServiceOverview() {
  return (
    <section style={{ background: "var(--white)", padding: "var(--space-9) 0" }}>
      <Container>
        <div className="ft-overview-grid" style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: "var(--space-8)", alignItems: "start" }}>
          <div>
            <Eyebrow>The problem we solve</Eyebrow>
            <h2 className="ft-h2" style={{ marginTop: 16, marginBottom: 18 }}>When a migration goes wrong, the surprises are expensive and public.</h2>
            <p className="ft-body" style={{ maxWidth: 560 }}>
              [Placeholder] Risky cutovers, runaway cost, and compliance gaps turn cloud migrations
              into headlines. We plan and execute migrations in validated waves — secure, cost-aware,
              and rehearsed before every cutover.
            </p>
            <p className="ft-body" style={{ maxWidth: 560, marginTop: 14 }}>
              [Placeholder] The result is a move you can stand behind: minimal downtime, predictable
              cost, and security and compliance intact from start to finish.
            </p>
          </div>
          <aside style={{ background: "var(--gray-100)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "var(--space-6)" }}>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 16 }}>Who it's for</div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                "Data & IT leaders planning a cloud migration",
                "Teams worried about cutover risk and downtime",
                "Organizations managing cloud cost and compliance",
              ].map((t) => (
                <li key={t} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <span style={{ marginTop: 2, color: "var(--persian-green)", flexShrink: 0 }}><Icon name="check" size={18} /></span>
                  <span className="ft-small">{t}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </Container>
    </section>
  );
}

const TACKLE = [
  { icon: "shield-alert", t: "Risky, high-stakes cutovers", d: "[Placeholder] De-risk cutovers with rehearsal, validation, and clear rollback plans." },
  { icon: "wallet", t: "Runaway cloud cost", d: "[Placeholder] Right-size and architect for cost so the cloud bill stays predictable." },
  { icon: "shield-check", t: "Security & compliance in transit", d: "[Placeholder] Protect data in transit and at rest, with the controls regulators expect." },
  { icon: "clock", t: "Minimizing downtime during migration", d: "[Placeholder] Sequence the migration to keep systems available throughout." },
];

function TackleCard({ s }) {
  return (
    <div style={{
      background: "var(--white)", border: "1px solid var(--border)", borderTop: "2px solid transparent",
      borderRadius: "var(--radius-lg)", padding: "var(--space-6)", boxShadow: "var(--shadow-sm)",
      transition: "all var(--dur) var(--ease-out)",
    }}
      onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "var(--shadow-md)"; e.currentTarget.style.borderTopColor = "var(--persian-green)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "var(--shadow-sm)"; e.currentTarget.style.borderTopColor = "transparent"; e.currentTarget.style.transform = "translateY(0)"; }}
    >
      <div style={{ width: 50, height: 50, borderRadius: 12, background: "var(--teal-50)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
        <Icon name={s.icon} size={26} color="var(--persian-green)" />
      </div>
      <h3 className="ft-h4" style={{ marginBottom: 10 }}>{s.t}</h3>
      <p className="ft-small">{s.d}</p>
    </div>
  );
}

function ServiceTackle() {
  return (
    <section style={{ background: "var(--gray-100)", padding: "var(--space-9) 0" }}>
      <Container>
        <div style={{ maxWidth: 620, marginBottom: "var(--space-7)" }}>
          <Eyebrow>What we tackle</Eyebrow>
          <h2 className="ft-h2" style={{ marginTop: 16 }}>The migration risks we're brought in to manage.</h2>
        </div>
        <div className="ft-tackle-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "var(--space-5)" }}>
          {TACKLE.map((s) => <TackleCard key={s.t} s={s} />)}
        </div>
      </Container>
    </section>
  );
}

const STEPS = [
  { n: "01", t: "Assess", d: "[Placeholder] We inventory the estate, dependencies, and risks to design the right migration path." },
  { n: "02", t: "Optimize", d: "[Placeholder] We migrate in validated waves — secure, cost-aware, and rehearsed before each cutover." },
  { n: "03", t: "Sustain", d: "[Placeholder] We hand over cost, security, and monitoring guardrails so the new platform stays healthy." },
];

function ServiceApproach() {
  return (
    <section style={{ background: "var(--white)", padding: "var(--space-9) 0" }}>
      <Container>
        <div style={{ maxWidth: 620, marginBottom: "var(--space-7)" }}>
          <Eyebrow>Our approach</Eyebrow>
          <h2 className="ft-h2" style={{ marginTop: 16 }}>A disciplined path from diagnosis to durable results.</h2>
        </div>
        <div className="ft-steps-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--space-6)" }}>
          {STEPS.map((s) => (
            <div key={s.t} style={{ position: "relative", paddingTop: 26, borderTop: "2px solid var(--border)" }}>
              <div style={{ position: "absolute", top: -2, left: 0, width: 64, height: 2, background: "var(--persian-green)" }} />
              <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 14 }}>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 15, color: "var(--persian-green)", letterSpacing: "0.06em" }}>{s.n}</span>
                <h3 className="ft-h3" style={{ margin: 0 }}>{s.t}</h3>
              </div>
              <p className="ft-small" style={{ maxWidth: 320 }}>{s.d}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Stat({ label }) {
  return (
    <div style={{ flex: 1, minWidth: 160 }}>
      <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 54, lineHeight: 1, color: "rgba(255,255,255,0.45)", letterSpacing: "-0.01em" }}>&mdash;&mdash;</div>
      <div style={{ fontFamily: "var(--font-body)", fontSize: 14.5, color: "rgba(255,255,255,0.82)", marginTop: 12, lineHeight: 1.4 }}>
        {label}<br /><span style={{ fontSize: 12, color: "rgba(255,255,255,0.6)" }}>[pending client metric]</span>
      </div>
      <div style={{ width: 36, height: 3, background: "var(--persian-green)", marginTop: 14 }} />
    </div>
  );
}

function ServiceOutcomes() {
  const slots = [
    "Migration delivered on plan",
    "Cloud cost optimized",
    "Downtime during cutover",
    "Security & compliance maintained",
  ];
  return (
    <section style={{ background: "var(--japan-indigo)", padding: "var(--space-8) 0", position: "relative", overflow: "hidden" }}>
      <img src="assets/mark-teal.jpg" alt="" aria-hidden="true" style={{ position: "absolute", right: -110, top: -110, width: 360, height: 360, borderRadius: 28, opacity: 0.1, pointerEvents: "none" }} />
      <Container style={{ position: "relative" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 20, marginBottom: "var(--space-7)" }}>
          <div>
            <Eyebrow onDark>Outcomes</Eyebrow>
            <h2 className="ft-h2" style={{ color: "#fff", marginTop: 14 }}>The results we engineer toward.</h2>
            <span style={{ display: "inline-block", marginTop: 14, fontFamily: "var(--font-body)", fontSize: 13, color: "#fff", background: "rgba(255,255,255,0.12)", border: "1px dashed rgba(255,255,255,0.5)", borderRadius: "var(--radius-pill)", padding: "6px 14px" }}>[PLACEHOLDER — pending verified client metrics]</span>
          </div>
        </div>
        <div className="ft-outcomes-grid" style={{ display: "flex", gap: "var(--space-7)", flexWrap: "wrap" }}>
          {slots.map((s) => <Stat key={s} label={s} />)}
        </div>
      </Container>
    </section>
  );
}

function RelatedCaseStudy() {
  return (
    <section style={{ background: "var(--white)", padding: "var(--space-9) 0" }}>
      <Container>
        <div style={{ border: "1px dashed var(--border-strong)", borderRadius: "var(--radius-lg)", background: "var(--gray-100)", padding: "var(--space-7)", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 24 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
            <div style={{ width: 56, height: 56, borderRadius: "var(--radius-md)", background: "var(--teal-50)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <Icon name="file-text" size={26} color="var(--persian-green)" />
            </div>
            <div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--fg3)", marginBottom: 8 }}>Related case study</div>
              <p style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 19, color: "var(--gray-400)", margin: 0, maxWidth: 560, lineHeight: 1.35 }}>[PLACEHOLDER — related case study, pending client content]</p>
            </div>
          </div>
          <Button variant="secondary" href="case-studies.html" iconRight="arrow-right">View case studies</Button>
        </div>
      </Container>
    </section>
  );
}

function ServiceCTA() {
  return (
    <section id="contact" style={{ background: "var(--gray-100)", padding: "var(--space-9) 0" }}>
      <Container>
        <div style={{ background: "linear-gradient(120deg, var(--japan-indigo), var(--navy-700))", borderRadius: "var(--radius-lg)", padding: "var(--space-9) var(--space-8)", textAlign: "center", position: "relative", overflow: "hidden" }}>
          <img src="assets/mark-teal.jpg" alt="" aria-hidden="true" style={{ position: "absolute", right: -60, top: -60, width: 280, height: 280, borderRadius: 24, opacity: 0.12 }} />
          <div style={{ position: "relative" }}>
            <Eyebrow onDark>Start the conversation</Eyebrow>
            <h2 className="ft-h1" style={{ color: "#fff", margin: "16px auto 18px", maxWidth: 640 }}>Ready to plan your cloud migration?</h2>
            <p className="ft-lead" style={{ color: "rgba(255,255,255,0.74)", maxWidth: 520, margin: "0 auto 34px" }}>
              Book a data assessment and we'll map the fastest path to a secure, cost-efficient cloud platform with zero-surprise cutovers.
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

Object.assign(window, { ServiceHero, ServiceOverview, ServiceTackle, ServiceApproach, ServiceOutcomes, RelatedCaseStudy, ServiceCTA });
