/* global React, Container, Eyebrow, Button, Pill, Icon */

/* ============================================================
   TEAM — authority page.
   GUARDRAIL: no real names/photos/bios/credentials. Every person
   detail is a clearly-labeled placeholder; avatars are placeholder
   glyphs only (no stock or AI headshots). Team size is TBD.
   ============================================================ */

// ---- HERO (light) ----
function TeamHero() {
  return (
    <section id="top" style={{ background: "var(--gray-100)", borderBottom: "1px solid var(--border)", paddingTop: "var(--space-9)", paddingBottom: "var(--space-8)" }}>
      <Container>
        <div style={{ maxWidth: 720 }}>
          <Eyebrow>Team</Eyebrow>
          <h1 className="ft-h1" style={{ marginTop: 16, marginBottom: 0, fontSize: "clamp(36px, 4.4vw, 52px)" }}>The experts behind your data transformation.</h1>
          <p className="ft-lead" style={{ marginTop: 22, maxWidth: 620 }}>
            [Placeholder] Forward Thinkers pairs deep healthcare-data domain knowledge with senior,
            hands-on engineering — the people who scope your work are the people who deliver it.
          </p>
        </div>
      </Container>
    </section>
  );
}

// ---- LEADERSHIP / FOUNDER (prominent, two-column) ----
function Leadership() {
  const creds = ["[X]+ years in enterprise data", "[Domain expertise — e.g., healthcare / claims / EDI]", "[Notable background — e.g., AHCA / CMS environments]"];
  return (
    <section style={{ background: "var(--white)", padding: "var(--space-10) 0" }}>
      <Container>
        <Eyebrow>Leadership</Eyebrow>
        <div className="ft-leader-grid" style={{ display: "grid", gridTemplateColumns: "0.85fr 1.15fr", gap: "var(--space-8)", alignItems: "start", marginTop: "var(--space-6)" }}>
          {/* Placeholder portrait */}
          <div style={{
            aspectRatio: "4 / 5", borderRadius: "var(--radius-lg)", border: "1px dashed var(--border-strong)",
            background: "linear-gradient(160deg, var(--teal-50), var(--gray-100))", display: "flex",
            flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16, textAlign: "center", padding: 24,
          }}>
            <span style={{ width: 92, height: 92, borderRadius: "50%", background: "var(--white)", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Icon name="user" size={44} color="var(--gray-400)" strokeWidth={1.5} />
            </span>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 13, letterSpacing: "0.04em", color: "var(--fg3)" }}>[Founder photo — pending]</span>
          </div>
          {/* Bio */}
          <div>
            <h2 className="ft-h2" style={{ margin: "0 0 4px" }}>[Founder name]</h2>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 15, letterSpacing: "0.04em", color: "var(--persian-green)", textTransform: "uppercase", marginBottom: 22 }}>[Title — e.g., Principal Consultant]</div>
            <p className="ft-body" style={{ maxWidth: 580 }}>
              [Placeholder bio] A senior consultant with a background spanning enterprise and healthcare
              data — SQL Server, ETL, EDI / X12, and AHCA / CMS reporting environments. [Swap for the
              founder's real authority bio: where they've worked, the kinds of data estates they've
              transformed, and why regulated-data work is their focus.]
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: "24px 0 0", display: "flex", flexDirection: "column", gap: 14 }}>
              {creds.map((c) => (
                <li key={c} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <span style={{ marginTop: 1, color: "var(--persian-green)", flexShrink: 0 }}><Icon name="check" size={18} /></span>
                  <span className="ft-small" style={{ fontSize: 15.5 }}>{c}</span>
                </li>
              ))}
            </ul>
            <figure style={{ margin: "30px 0 0", borderLeft: "3px solid var(--persian-green)", paddingLeft: 22 }}>
              <blockquote style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 20, lineHeight: 1.4, color: "var(--gray-400)", fontStyle: "italic" }}>
                "[Placeholder — founder quote on the firm's mission.]"
              </blockquote>
            </figure>
          </div>
        </div>
      </Container>
    </section>
  );
}

// ---- OUR EXPERTS GRID (flexible placeholder slots) ----
function ExpertsGrid() {
  const slots = [1, 2, 3];
  return (
    <section style={{ background: "var(--gray-100)", padding: "var(--space-10) 0" }}>
      <Container>
        <div style={{ maxWidth: 620, marginBottom: "var(--space-7)" }}>
          <Eyebrow>Our experts</Eyebrow>
          <h2 className="ft-h2" style={{ marginTop: 16 }}>Senior specialists across the data stack.</h2>
        </div>
        <div className="ft-experts-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--space-5)" }}>
          {slots.map((n) => (
            <div key={n} style={{ background: "var(--white)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "var(--space-6)", boxShadow: "var(--shadow-sm)" }}>
              <span style={{ width: 72, height: 72, borderRadius: "50%", background: "var(--teal-50)", border: "1px dashed var(--border-strong)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                <Icon name="user" size={34} color="var(--gray-400)" strokeWidth={1.5} />
              </span>
              <h3 className="ft-h4" style={{ margin: "0 0 4px" }}>[Team member name]</h3>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 13, letterSpacing: "0.03em", color: "var(--persian-green)", textTransform: "uppercase", marginBottom: 16 }}>[Title / role]</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <div className="ft-caption" style={{ color: "var(--fg2)" }}><strong style={{ color: "var(--fg1)", fontWeight: 600 }}>Specialties:</strong> [Placeholder]</div>
                <div className="ft-caption" style={{ color: "var(--fg2)" }}><strong style={{ color: "var(--fg1)", fontWeight: 600 }}>Certifications:</strong> [Placeholder]</div>
              </div>
            </div>
          ))}
        </div>
        <p className="ft-caption" style={{ marginTop: "var(--space-5)", color: "var(--fg3)" }}>[Number of team members to be confirmed — these are flexible placeholder slots, not a fixed roster.]</p>
      </Container>
    </section>
  );
}

// ---- HOW WE WORK (teal band) ----
function HowWeWork() {
  const points = [
    { icon: "user-check", t: "Senior people on every engagement" },
    { icon: "heart-pulse", t: "Healthcare-data domain depth" },
    { icon: "shield-check", t: "Built around your compliance requirements" },
    { icon: "target", t: "Measurable outcomes, not just recommendations" },
  ];
  return (
    <section style={{ background: "var(--persian-green)", padding: "var(--space-9) 0", position: "relative", overflow: "hidden" }}>
      <img src="assets/mark-teal.jpg" alt="" aria-hidden="true" style={{ position: "absolute", right: -120, bottom: -120, width: 400, height: 400, borderRadius: 32, opacity: 0.10, pointerEvents: "none" }} />
      <Container style={{ position: "relative" }}>
        <div style={{ maxWidth: 620, marginBottom: "var(--space-7)" }}>
          <Eyebrow onDark style={{ color: "rgba(255,255,255,0.75)" }}>How we work</Eyebrow>
          <h2 className="ft-h2" style={{ color: "#fff", marginTop: 14 }}>What you get with our team.</h2>
        </div>
        <div className="ft-how-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "var(--space-5)" }}>
          {points.map((p) => (
            <div key={p.t}>
              <span style={{ width: 50, height: 50, borderRadius: 12, background: "rgba(255,255,255,0.14)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
                <Icon name={p.icon} size={26} color="#fff" />
              </span>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 17, lineHeight: 1.35, color: "#fff" }}>{p.t}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// ---- CERTIFICATIONS & PARTNERSHIPS STRIP ----
function CertStrip() {
  const chips = ["[ MICROSOFT CERTIFIED ]", "[ CLOUD PARTNER ]", "[ SECURITY / HIPAA ]", "[ DATA CREDENTIAL ]"];
  return (
    <section style={{ background: "var(--white)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "var(--space-7) 0" }}>
      <Container style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 24 }}>
        <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--fg3)" }}>Certifications &amp; partnerships</span>
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
          {chips.map((l) => (
            <span key={l} style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 12.5, letterSpacing: "0.06em", color: "var(--gray-400)", border: "1px dashed var(--border-strong)", borderRadius: "var(--radius-md)", padding: "9px 16px" }}>{l}</span>
          ))}
        </div>
      </Container>
    </section>
  );
}

// ---- NAVY CTA BAND ----
function TeamCTA() {
  return (
    <section style={{ background: "var(--gray-100)", padding: "var(--space-9) 0" }}>
      <Container>
        <div style={{ background: "linear-gradient(120deg, var(--japan-indigo), var(--navy-700))", borderRadius: "var(--radius-lg)", padding: "var(--space-9) var(--space-8)", textAlign: "center", position: "relative", overflow: "hidden" }}>
          <img src="assets/mark-teal.jpg" alt="" aria-hidden="true" style={{ position: "absolute", right: -60, top: -60, width: 280, height: 280, borderRadius: 24, opacity: 0.12 }} />
          <div style={{ position: "relative" }}>
            <Eyebrow onDark>Start the conversation</Eyebrow>
            <h2 className="ft-h1" style={{ color: "#fff", margin: "16px auto 18px", maxWidth: 640 }}>Want senior experts on your data?</h2>
            <p className="ft-lead" style={{ color: "rgba(255,255,255,0.74)", maxWidth: 520, margin: "0 auto 34px" }}>
              The people who scope your work are the people who deliver it. Let's talk about what you're trying to achieve.
            </p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <Button variant="primary" size="lg" href="contact.html" iconRight="arrow-right">Talk to our team</Button>
              <Button variant="onDark" size="lg" href="contact.html">Book a data assessment</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

Object.assign(window, { TeamHero, Leadership, ExpertsGrid, HowWeWork, CertStrip, TeamCTA });
