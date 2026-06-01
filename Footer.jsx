/* global React, Logo, Container, Icon, Eyebrow */

function Footer() {
  const cols = [
    { h: "Services", items: [
      { label: "SQL Server Performance", href: "#services" },
      { label: "ETL Modernization", href: "#services" },
      { label: "EDI / X12 Integration", href: "#services" },
      { label: "AI Data Cleansing", href: "#services" },
      { label: "Cloud Migration", href: "#services" },
    ] },
    { h: "Company", items: [
      { label: "Healthcare & Regulated Data Solutions", href: "Healthcare & Regulated Data Solutions.html" },
      { label: "Case Studies", href: "Case Studies.html" },
      { label: "Team", href: "Team.html" },
      { label: "Contact", href: "Contact.html" },
    ] },
  ];
  return (
    <footer style={{ background: "var(--japan-indigo)", color: "var(--white)", paddingTop: "var(--space-9)" }}>
      <Container>
        <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1.2fr", gap: "var(--space-7)", paddingBottom: "var(--space-8)" }} className="ft-footer-grid">
          <div>
            <Logo variant="white" height={28} />
            <p style={{ fontFamily: "var(--font-body)", fontSize: 14.5, lineHeight: 1.65, color: "rgba(255,255,255,0.72)", marginTop: 20, maxWidth: 320 }}>
              We turn fragmented enterprise and health data into a governed, decision-ready foundation.
            </p>
            <div style={{ display: "flex", gap: 14, marginTop: 24 }}>
              {["linkedin"].map((s) => (
                <a key={s} href="#" aria-label={s} style={{ width: 38, height: 38, borderRadius: "var(--radius-md)", border: "1px solid rgba(255,255,255,0.18)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.8)", transition: "all var(--dur) var(--ease-out)" }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--accent-bright)"; e.currentTarget.style.color = "#fff"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)"; e.currentTarget.style.color = "rgba(255,255,255,0.8)"; }}
                >
                  <Icon name={s} size={18} />
                </a>
              ))}
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.h}>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--accent-bright)", marginBottom: 18 }}>{c.h}</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                {c.items.map((i) => (
                  <li key={i.label}><a href={i.href} style={{ fontFamily: "var(--font-body)", fontSize: 14.5, color: "rgba(255,255,255,0.78)", textDecoration: "none", transition: "color var(--dur)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.78)")}
                  >{i.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.14)", padding: "26px 0 40px", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <span style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "rgba(255,255,255,0.6)" }}>© 2026 Forward Thinkers Consulting. All rights reserved.</span>
          <div style={{ display: "flex", gap: 26 }}>
            <a href="#privacy" style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Privacy</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

Object.assign(window, { Footer });
