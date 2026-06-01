/* global React, Container, Eyebrow, Button, Pill, Icon */
const { useState } = React;

/* ============================================================
   HEALTHCARE & REGULATED DATA SOLUTIONS — Flagship page (part 2)
   ============================================================ */

// ---- HOW WE HANDLE REGULATED DATA (teal band) ----
function RegulatedApproach() {
  const items = [
    { icon: "lock", t: "Controls & access", d: "[Placeholder] PHI-aware handling with least-privilege access controls across the flow." },
    { icon: "scroll-text", t: "Auditability & lineage", d: "[Placeholder] Audit trails and data lineage so every transformation is traceable." },
    { icon: "check-check", t: "Standards alignment", d: "[Placeholder] Environments and pipelines aligned to AHCA / CMS reporting requirements." },
  ];
  return (
    <section style={{ background: "var(--persian-green)", padding: "var(--space-10) 0", position: "relative", overflow: "hidden" }}>
      <img src="assets/mark-teal.jpg" alt="" aria-hidden="true" style={{ position: "absolute", left: -120, bottom: -120, width: 420, height: 420, borderRadius: 32, opacity: 0.10, pointerEvents: "none" }} />
      <Container style={{ position: "relative" }}>
        <div className="reveal" style={{ maxWidth: 720, marginBottom: "var(--space-7)" }}>
          <Eyebrow onDark style={{ color: "rgba(255,255,255,0.75)" }}>How we handle regulated data</Eyebrow>
          <h2 className="ft-h1" style={{ color: "#fff", marginTop: 16 }}>Compliance-conscious by design, from intake to operation.</h2>
          <p className="ft-lead" style={{ color: "rgba(255,255,255,0.85)", marginTop: 18, maxWidth: 620 }}>
            [Placeholder] Every engagement is scoped to your compliance requirements — with PHI-aware
            handling, access controls, auditability, and environments aligned to AHCA / CMS reporting.
          </p>
        </div>
        <div className="ft-reg-grid reveal" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--space-5)" }}>
          {items.map((it) => (
            <div key={it.t} style={{ background: "#fff", borderRadius: "var(--radius-lg)", padding: "var(--space-6)", boxShadow: "var(--shadow-md)" }}>
              <div style={{ width: 50, height: 50, borderRadius: 12, background: "var(--teal-50)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
                <Icon name={it.icon} size={26} color="var(--persian-green)" />
              </div>
              <h3 className="ft-h4" style={{ marginBottom: 10 }}>{it.t}</h3>
              <p className="ft-small">{it.d}</p>
            </div>
          ))}
        </div>
        <div className="reveal" style={{ marginTop: "var(--space-6)", display: "flex" }}>
          <span style={{ fontFamily: "var(--font-body)", fontSize: 13.5, lineHeight: 1.5, color: "#fff", background: "rgba(255,255,255,0.12)", border: "1px dashed rgba(255,255,255,0.55)", borderRadius: "var(--radius-md)", padding: "12px 18px", maxWidth: 760 }}>
            [Placeholder — compliance-posture statement: describes Forward Thinkers' approach; not a certification or guarantee.]
          </span>
        </div>
      </Container>
    </section>
  );
}

// ---- ENGAGEMENT APPROACH (vertical numbered timeline) ----
const TIMELINE = [
  { n: "01", t: "Assess & map regulated data", d: "[Placeholder] We inventory your regulated data, sources, and reporting obligations to map the terrain." },
  { n: "02", t: "Design HIPAA-conscious pipelines", d: "[Placeholder] We design PHI-aware pipelines with access controls and auditability built in." },
  { n: "03", t: "Validate & audit", d: "[Placeholder] We validate outputs and trace lineage so the data — and its handling — stand up to scrutiny." },
  { n: "04", t: "Operate & govern", d: "[Placeholder] We hand over monitoring and governance so regulated data stays clean and compliant over time." },
];

function EngagementTimeline() {
  return (
    <section style={{ background: "var(--white)", padding: "var(--space-10) 0" }}>
      <Container>
        <div className="reveal" style={{ maxWidth: 720, marginBottom: "var(--space-8)" }}>
          <Eyebrow>Engagement approach</Eyebrow>
          <h2 className="ft-h1" style={{ marginTop: 16 }}>How a regulated-data engagement runs.</h2>
        </div>
        <div className="ft-timeline" style={{ position: "relative", maxWidth: 820 }}>
          <div aria-hidden="true" className="ft-timeline-spine" style={{ position: "absolute", left: 27, top: 8, bottom: 8, width: 2, background: "var(--border)" }} />
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-7)" }}>
            {TIMELINE.map((s) => (
              <div key={s.n} className="reveal" style={{ display: "grid", gridTemplateColumns: "56px 1fr", gap: "var(--space-5)", alignItems: "start" }}>
                <div style={{ width: 56, height: 56, borderRadius: "50%", background: "var(--japan-indigo)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 18, position: "relative", zIndex: 1, boxShadow: "0 0 0 6px var(--white)" }}>{s.n}</div>
                <div style={{ paddingTop: 6 }}>
                  <h3 className="ft-h3" style={{ margin: "0 0 8px" }}>{s.t}</h3>
                  <p className="ft-body" style={{ margin: 0, maxWidth: 560 }}>{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

// ---- ENVIRONMENTS + OUTCOMES (navy band) ----
function EnvironmentsStats() {
  const envs = ["Payers", "Providers", "Claims", "AHCA", "CMS", "EDI / X12"];
  const slots = ["Reporting accuracy", "Time-to-submission", "Reconciliation coverage", "Pipeline reliability"];
  return (
    <section style={{ background: "linear-gradient(160deg, var(--navy-800), var(--japan-indigo))", padding: "var(--space-10) 0", position: "relative", overflow: "hidden" }}>
      <img src="assets/mark-teal.jpg" alt="" aria-hidden="true" style={{ position: "absolute", right: -130, top: -90, width: 420, height: 420, borderRadius: 32, opacity: 0.10, transform: "rotate(-8deg)", pointerEvents: "none" }} />
      <Container style={{ position: "relative" }}>
        <div className="reveal" style={{ maxWidth: 720, marginBottom: "var(--space-6)" }}>
          <Eyebrow onDark>Built for the environments you operate in</Eyebrow>
          <h2 className="ft-h2" style={{ color: "#fff", marginTop: 14 }}>The regulated environments we work in.</h2>
        </div>
        <div className="reveal" style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: "var(--space-9)" }}>
          {envs.map((e) => (
            <span key={e} style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 14, letterSpacing: "0.04em", color: "#fff", border: "1px solid rgba(255,255,255,0.28)", background: "rgba(255,255,255,0.04)", borderRadius: "var(--radius-pill)", padding: "10px 20px" }}>{e}</span>
          ))}
        </div>
        <div className="reveal" style={{ display: "flex", alignItems: "flex-end", flexWrap: "wrap", gap: 16, marginBottom: "var(--space-6)" }}>
          <Eyebrow onDark style={{ color: "rgba(255,255,255,0.7)" }}>Outcomes</Eyebrow>
          <span style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "#fff", background: "rgba(255,255,255,0.12)", border: "1px dashed rgba(255,255,255,0.5)", borderRadius: "var(--radius-pill)", padding: "6px 14px" }}>[PLACEHOLDER — pending verified client metrics]</span>
        </div>
        <div className="ft-flag-stats reveal" style={{ display: "flex", gap: "var(--space-7)", flexWrap: "wrap" }}>
          {slots.map((s) => (
            <div key={s} style={{ flex: 1, minWidth: 170 }}>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 54, lineHeight: 1, color: "rgba(255,255,255,0.45)", letterSpacing: "-0.01em" }}>&mdash;&mdash;</div>
              <div style={{ fontFamily: "var(--font-body)", fontSize: 14.5, color: "rgba(255,255,255,0.82)", marginTop: 12, lineHeight: 1.4 }}>{s}<br /><span style={{ fontSize: 12, color: "rgba(255,255,255,0.6)" }}>[pending client metric]</span></div>
              <div style={{ width: 36, height: 3, background: "var(--accent-bright)", marginTop: 14 }} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// ---- FAQ (accordion) ----
const FAQS = [
  { q: "Do you work with PHI and HIPAA-regulated data?", a: "[Placeholder] Yes. We work with PHI and HIPAA-regulated data, with PHI-aware handling and access controls built into every engagement." },
  { q: "How do you approach HIPAA compliance?", a: "[Placeholder] We take a HIPAA-conscious approach — least-privilege access, auditability, and engagements scoped to your compliance requirements. This describes our methodology, not a certification." },
  { q: "Can you work within our AHCA / CMS reporting requirements?", a: "[Placeholder] Yes. We design pipelines and environments aligned to AHCA / CMS reporting needs and your organization's specific obligations." },
  { q: "How do you handle EDI / X12 transactions?", a: "[Placeholder] We process the core healthcare transaction sets (837 / 835 / 270 / 271) with standards-based exchange and healthcare-grade ETL." },
  { q: "What does a healthcare engagement look like?", a: "[Placeholder] Engagements typically run Assess → Design → Validate → Operate, scoped to your data, environments, and compliance requirements." },
];

function FaqItem({ item, open, onToggle }) {
  return (
    <div style={{ borderBottom: "1px solid var(--border)" }}>
      <button onClick={onToggle} aria-expanded={open} style={{
        width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20,
        background: "none", border: "none", cursor: "pointer", textAlign: "left", padding: "24px 0",
      }}>
        <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 19, color: "var(--fg1)", lineHeight: 1.3 }}>{item.q}</span>
        <span style={{ flexShrink: 0, color: "var(--persian-green)", display: "inline-flex", transform: open ? "rotate(45deg)" : "none", transition: "transform var(--dur) var(--ease-out)" }}>
          <Icon name="plus" size={24} />
        </span>
      </button>
      <div style={{ overflow: "hidden", maxHeight: open ? 240 : 0, transition: "max-height var(--dur) var(--ease-out)" }}>
        <p className="ft-body" style={{ margin: 0, paddingBottom: 24, maxWidth: 720 }}>{item.a}</p>
      </div>
    </div>
  );
}

function FlagFAQ() {
  const [openIdx, setOpenIdx] = useState(0);
  return (
    <section style={{ background: "var(--white)", padding: "var(--space-10) 0" }}>
      <Container narrow>
        <div className="reveal" style={{ marginBottom: "var(--space-7)" }}>
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="ft-h1" style={{ marginTop: 16 }}>For healthcare data leaders.</h2>
        </div>
        <div className="reveal">
          {FAQS.map((f, i) => (
            <FaqItem key={f.q} item={f} open={openIdx === i} onToggle={() => setOpenIdx(openIdx === i ? -1 : i)} />
          ))}
        </div>
      </Container>
    </section>
  );
}

// ---- IMMERSIVE NAVY FINAL CTA ----
function FlagCTA() {
  return (
    <section id="contact" style={{ background: "linear-gradient(150deg, var(--navy-800), var(--japan-indigo) 55%, var(--navy-700))", padding: "var(--space-10) 0", position: "relative", overflow: "hidden" }}>
      <img src="assets/mark-teal.jpg" alt="" aria-hidden="true" style={{ position: "absolute", right: -90, bottom: -90, width: 420, height: 420, borderRadius: 32, opacity: 0.12, transform: "rotate(-8deg)", pointerEvents: "none" }} />
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "radial-gradient(720px 360px at 20% 0%, rgba(2,191,181,0.16), transparent 60%)", pointerEvents: "none" }} />
      <Container style={{ position: "relative", textAlign: "center" }}>
        <div className="reveal" style={{ maxWidth: 760, margin: "0 auto" }}>
          <Eyebrow onDark>Start the conversation</Eyebrow>
          <h2 className="ft-display" style={{ color: "#fff", margin: "18px auto 18px", fontSize: "clamp(36px, 4.6vw, 56px)" }}>Ready to make your healthcare data governed and decision-ready?</h2>
          <p className="ft-lead" style={{ color: "rgba(255,255,255,0.78)", maxWidth: 560, margin: "0 auto 36px" }}>
            Book a data assessment and we'll map the fastest path to a governed, compliant, decision-grade foundation.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <Button variant="primary" size="lg" href="contact.html" iconRight="arrow-right">Talk to our team</Button>
            <Button variant="onDark" size="lg" href="contact.html">Book a data assessment</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

Object.assign(window, { RegulatedApproach, EngagementTimeline, EnvironmentsStats, FlagFAQ, FlagCTA });
