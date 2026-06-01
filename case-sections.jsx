/* global React, Container, Eyebrow, Button, Pill, Icon */

/* ============================================================
   CASE STUDIES — proof page.
   GUARDRAIL: no invented client names/logos/metrics/outcomes/quotes.
   Sector tags are generic descriptors, never named clients.
   Aggregate stats stay labeled placeholders — no invented totals.
   Cards are self-contained (no detail pages).
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
            [Placeholder] Real transformations across payer–provider data, claims, ETL, and cloud —
            with outcomes leaders can take to the board.
          </p>
        </div>
      </Container>
    </section>
  );
}

// ---- FEATURED CASE STUDY (large, clearly placeholder) ----
function FeaturedCase() {
  const blocks = [
    { label: "Challenge", body: "[Placeholder] The business problem the client came to us with — the data pain, its cost, and why it mattered." },
    { label: "Solution", body: "[Placeholder] What we built and how — the approach, the pipelines, and the decisions that made it work." },
    { label: "Outcome", body: "[Placeholder] The measurable result the client walked away with, in their own terms." },
  ];
  return (
    <section style={{ background: "var(--white)", padding: "var(--space-9) 0" }}>
      <Container>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "var(--space-5)" }}>
          <Pill variant="teal">Featured</Pill>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--fg3)" }}>[Sector — e.g., Payer / Provider]</span>
        </div>
        <div style={{ border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-sm)", overflow: "hidden" }}>
          <div className="ft-featured-grid" style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", alignItems: "stretch" }}>
            {/* Left: narrative */}
            <div style={{ padding: "var(--space-7)" }}>
              <h2 className="ft-h2" style={{ margin: "0 0 var(--space-6)" }}>[Featured case study title — pending client content]</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
                {blocks.map((b) => (
                  <div key={b.label} style={{ borderLeft: "2px solid var(--teal-50)", paddingLeft: 18 }}>
                    <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--persian-green)", marginBottom: 7 }}>{b.label}</div>
                    <p className="ft-body" style={{ margin: 0, maxWidth: 520 }}>{b.body}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Right: hero metric */}
            <div style={{ background: "linear-gradient(160deg, var(--navy-800), var(--japan-indigo))", padding: "var(--space-7)", display: "flex", flexDirection: "column", justifyContent: "center", position: "relative", overflow: "hidden" }}>
              <img src="assets/mark-teal.jpg" alt="" aria-hidden="true" style={{ position: "absolute", right: -60, bottom: -60, width: 220, height: 220, borderRadius: 22, opacity: 0.12 }} />
              <div style={{ position: "relative" }}>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--accent-bright)", marginBottom: 16 }}>Headline result</div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 72, lineHeight: 0.95, color: "rgba(255,255,255,0.5)", letterSpacing: "-0.02em" }}>&mdash;&mdash;</div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 14.5, color: "rgba(255,255,255,0.82)", marginTop: 16 }}>[pending client metric]</div>
                <div style={{ width: 40, height: 3, background: "var(--accent-bright)", marginTop: 18 }} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

// ---- CASE STUDY GRID (3 compact placeholder cards) ----
function CaseGrid() {
  const cards = [1, 2, 3];
  return (
    <section style={{ background: "var(--gray-100)", padding: "var(--space-9) 0" }}>
      <Container>
        <div style={{ maxWidth: 620, marginBottom: "var(--space-7)" }}>
          <Eyebrow>More results</Eyebrow>
          <h2 className="ft-h2" style={{ marginTop: 16 }}>Across sectors and service lines.</h2>
        </div>
        <div className="ft-case-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--space-5)" }}>
          {cards.map((n) => (
            <div key={n} style={{ background: "var(--white)", border: "1px solid var(--border)", borderTop: "2px solid transparent", borderRadius: "var(--radius-lg)", padding: "var(--space-6)", boxShadow: "var(--shadow-sm)", transition: "all var(--dur) var(--ease-out)", display: "flex", flexDirection: "column" }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "var(--shadow-md)"; e.currentTarget.style.borderTopColor = "var(--persian-green)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "var(--shadow-sm)"; e.currentTarget.style.borderTopColor = "transparent"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              <span style={{ alignSelf: "flex-start", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--teal-700)", background: "var(--teal-50)", borderRadius: "var(--radius-pill)", padding: "6px 13px", marginBottom: 18 }}>[Sector]</span>
              <h3 className="ft-h4" style={{ margin: "0 0 10px" }}>[Case study title]</h3>
              <p className="ft-small" style={{ flexGrow: 1 }}>[Placeholder] One line on the transformation and the result it delivered.</p>
              <div style={{ marginTop: 20, paddingTop: 18, borderTop: "1px dashed var(--border-strong)" }}>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 34, lineHeight: 1, color: "var(--gray-400)" }}>&mdash;&mdash;</div>
                <div className="ft-caption" style={{ marginTop: 8, color: "var(--fg3)" }}>[pending client metric]</div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// ---- BY THE NUMBERS (navy stat band) ----
function ByNumbers() {
  const slots = ["Projects delivered", "Average reporting speed-up", "Records reconciled", "Pipeline reliability"];
  return (
    <section style={{ background: "linear-gradient(160deg, var(--navy-800), var(--japan-indigo))", padding: "var(--space-9) 0", position: "relative", overflow: "hidden" }}>
      <img src="assets/mark-teal.jpg" alt="" aria-hidden="true" style={{ position: "absolute", left: -120, top: -90, width: 400, height: 400, borderRadius: 32, opacity: 0.10, transform: "rotate(-8deg)", pointerEvents: "none" }} />
      <Container style={{ position: "relative" }}>
        <div style={{ display: "flex", alignItems: "flex-end", flexWrap: "wrap", gap: 18, marginBottom: "var(--space-7)" }}>
          <div>
            <Eyebrow onDark>By the numbers</Eyebrow>
            <h2 className="ft-h2" style={{ color: "#fff", marginTop: 14 }}>The aggregate picture.</h2>
          </div>
          <span style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "#fff", background: "rgba(255,255,255,0.12)", border: "1px dashed rgba(255,255,255,0.5)", borderRadius: "var(--radius-pill)", padding: "6px 14px" }}>[PLACEHOLDER — pending verified totals]</span>
        </div>
        <div className="ft-bynumbers-grid" style={{ display: "flex", gap: "var(--space-7)", flexWrap: "wrap" }}>
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
