/* global React, Container, Eyebrow, Button, Pill, Icon */

/* ============================================================
   HEALTHCARE & REGULATED DATA SOLUTIONS — Flagship page (part 1)
   Distinct layout from the service-page template.
   All body copy is PLACEHOLDER, clearly swappable.
   Positioning only — no certification / compliance-result claims.
   ============================================================ */

// ---- IMMERSIVE NAVY HERO ----
function FlagHero() {
  return (
    <section id="top" style={{
      background: "linear-gradient(150deg, var(--navy-800), var(--japan-indigo) 55%, var(--navy-700))",
      color: "#fff", position: "relative", overflow: "hidden",
      paddingTop: "var(--space-10)", paddingBottom: "var(--space-10)",
    }}>
      <img src="assets/mark-teal.jpg" alt="" aria-hidden="true" style={{ position: "absolute", right: -140, top: -60, width: 560, height: 560, borderRadius: 40, opacity: 0.12, transform: "rotate(-8deg)", pointerEvents: "none" }} />
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "radial-gradient(820px 420px at 78% 8%, rgba(2,191,181,0.16), transparent 60%)", pointerEvents: "none" }} />
      <Container style={{ position: "relative" }}>
        <div className="reveal" style={{ maxWidth: 860 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24, flexWrap: "wrap" }}>
            <Eyebrow onDark>Our core differentiator</Eyebrow>
            <Pill variant="outline">HIPAA-conscious</Pill>
          </div>
          <h1 className="ft-display" style={{ color: "#fff", margin: 0, fontSize: "clamp(44px, 6vw, 76px)", lineHeight: 1.0 }}>
            Enterprise healthcare &amp; <span style={{ color: "var(--accent-bright)" }}>regulated-data</span> transformation.
          </h1>
          <p className="ft-lead" style={{ color: "rgba(255,255,255,0.80)", marginTop: 28, maxWidth: 680 }}>
            The work most consultancies won't touch: payer–provider data, claims, and AHCA / CMS
            environments — moved through HIPAA-conscious pipelines, EDI / X12, and healthcare-grade
            ETL, governed and decision-ready.
          </p>
          <div style={{ display: "flex", gap: 14, marginTop: 38, flexWrap: "wrap" }}>
            <Button variant="primary" size="lg" href="contact.html" iconRight="arrow-right">Talk to our team</Button>
            <Button variant="onDark" size="lg" href="#capabilities">Explore our capabilities</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

// ---- WHY WE'RE DIFFERENT (white, two-column contrast) ----
function WhyDifferent() {
  const generalist = [
    "Treat healthcare like any other vertical",
    "Steer around regulated and PHI-bearing data",
    "Leave compliance risk sitting with your team",
  ];
  const ftways = [
    "Built around payer–provider, claims, and AHCA / CMS data",
    "HIPAA-conscious handling by default, not as an add-on",
    "EDI / X12 and healthcare-grade ETL as core competencies",
  ];
  return (
    <section style={{ background: "var(--white)", padding: "var(--space-10) 0" }}>
      <Container>
        <div className="reveal" style={{ maxWidth: 760, marginBottom: "var(--space-8)" }}>
          <Eyebrow>Why we're different</Eyebrow>
          <h2 className="ft-h1" style={{ marginTop: 16 }}>Most data consultancies stop at the edge of regulated data. We start there.</h2>
        </div>
        <div className="ft-contrast-grid reveal" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-6)", alignItems: "stretch" }}>
          {/* Generalist */}
          <div style={{ background: "var(--gray-100)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "var(--space-7)" }}>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--fg3)", marginBottom: 22 }}>Generalist data shops</div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 18 }}>
              {generalist.map((t) => (
                <li key={t} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <span style={{ marginTop: 1, color: "var(--gray-400)", flexShrink: 0 }}><Icon name="x" size={20} /></span>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: 16, lineHeight: 1.5, color: "var(--gray-600)" }}>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Forward Thinkers */}
          <div style={{ background: "var(--white)", border: "1px solid var(--border)", borderTop: "3px solid var(--persian-green)", borderRadius: "var(--radius-lg)", padding: "var(--space-7)", boxShadow: "var(--shadow-md)" }}>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 22 }}>Forward Thinkers</div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 18 }}>
              {ftways.map((t) => (
                <li key={t} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <span style={{ marginTop: 1, color: "var(--persian-green)", flexShrink: 0 }}><Icon name="check" size={20} /></span>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: 16, lineHeight: 1.5, color: "var(--fg1)" }}>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

// ---- CAPABILITY PILLARS (alternating full-width feature rows) ----
const PILLARS = [
  {
    icon: "git-merge", kicker: "Interoperability",
    t: "Payer–provider data interoperability",
    d: "[Placeholder] Unify and reconcile data across payers, providers, and partners.",
    points: ["Reconcile records across systems and partners", "A single, governed source of truth", "Consistent identifiers and mappings"],
  },
  {
    icon: "file-check", kicker: "Reporting",
    t: "Claims, AHCA & CMS reporting",
    d: "[Placeholder] Pipelines built for claims and AHCA / CMS reporting environments.",
    points: ["Aligned to AHCA / CMS reporting needs", "Claims data prepared for submission", "Repeatable, auditable reporting flows"],
  },
  {
    icon: "shield-check", kicker: "Compliance posture",
    t: "HIPAA-conscious data pipelines",
    d: "[Placeholder] PHI-aware handling, access controls, and auditability across the flow.",
    points: ["PHI-aware handling end to end", "Least-privilege access controls", "Audit trails and data lineage"],
  },
  {
    icon: "arrow-left-right", kicker: "Exchange & ETL",
    t: "EDI / X12 + healthcare-grade ETL",
    d: "[Placeholder] Standards-based exchange (837 / 835 / 270 / 271) and healthcare ETL at scale.",
    points: ["Core transaction sets handled reliably", "Standards-based partner exchange", "Healthcare ETL built for scale"],
  },
];

function PillarGraphic({ icon, kicker }) {
  return (
    <div style={{
      position: "relative", borderRadius: "var(--radius-lg)", overflow: "hidden",
      background: "linear-gradient(150deg, var(--teal-50), #fff 70%)", border: "1px solid var(--border)",
      minHeight: 280, display: "flex", alignItems: "center", justifyContent: "center",
    }}>
      <img src="assets/mark-teal.jpg" alt="" aria-hidden="true" style={{ position: "absolute", right: -50, bottom: -50, width: 200, height: 200, borderRadius: 20, opacity: 0.10, transform: "rotate(-8deg)" }} />
      <div aria-hidden="true" style={{ position: "absolute", left: 28, top: 28, fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--accent)" }}>{kicker}</div>
      <div style={{ width: 104, height: 104, borderRadius: 24, background: "#fff", border: "1px solid var(--border)", boxShadow: "var(--shadow-md)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Icon name={icon} size={46} color="var(--persian-green)" strokeWidth={1.5} />
      </div>
    </div>
  );
}

function PillarRow({ p, i }) {
  const flip = i % 2 === 1;
  return (
    <div className="ft-pillar-row reveal" style={{
      display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-8)", alignItems: "center",
    }}>
      <div style={{ order: flip ? 2 : 1 }}>
        <PillarGraphic icon={p.icon} kicker={p.kicker} />
      </div>
      <div style={{ order: flip ? 1 : 2 }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 14 }}>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 15, color: "var(--persian-green)", letterSpacing: "0.06em" }}>{String(i + 1).padStart(2, "0")}</span>
          <h3 className="ft-h2" style={{ margin: 0 }}>{p.t}</h3>
        </div>
        <p className="ft-lead" style={{ marginBottom: 22, maxWidth: 480 }}>{p.d}</p>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
          {p.points.map((pt) => (
            <li key={pt} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <span style={{ marginTop: 2, color: "var(--persian-green)", flexShrink: 0 }}><Icon name="check" size={18} /></span>
              <span className="ft-body" style={{ margin: 0 }}>{pt}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function CapabilityPillars() {
  return (
    <section id="capabilities" style={{ background: "var(--gray-100)", padding: "var(--space-10) 0" }}>
      <Container>
        <div className="reveal" style={{ maxWidth: 720, marginBottom: "var(--space-9)" }}>
          <Eyebrow>Our capabilities</Eyebrow>
          <h2 className="ft-h1" style={{ marginTop: 16 }}>Four pillars of regulated-data work.</h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-9)" }}>
          {PILLARS.map((p, i) => <PillarRow key={p.t} p={p} i={i} />)}
        </div>
      </Container>
    </section>
  );
}

Object.assign(window, { FlagHero, WhyDifferent, CapabilityPillars });
