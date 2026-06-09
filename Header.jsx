/* global React, Logo, Button, Container, Icon */
const { useState, useEffect, useRef } = React;

// Per-service detail pages (the SQL Server Performance page is the template).
const SERVICE_PAGES = [
  { label: "SQL Server Performance", href: "sql-server-performance.html" },
  { label: "ETL Modernization", href: "etl-modernization.html" },
  { label: "EDI / X12 Integration", href: "edi-x12-integration.html" },
  { label: "AI Data Cleansing", href: "ai-data-cleansing.html" },
  { label: "Cloud Migration", href: "cloud-migration.html" },
];

// Section anchors live on the Homepage. From any other page, prefix with index.html
// so the link still resolves; on the Homepage itself use the bare anchor for smooth scroll.
const onHome = /(^|\/)index\.html$/.test(location.pathname) || /\/$/.test(location.pathname);
const homeAnchor = (a) => (onHome ? a : "index.html" + a);

const NAV = [
  { label: "Healthcare & Regulated Data", href: "healthcare.html" },
  { label: "Services", href: homeAnchor("#services"), children: SERVICE_PAGES },
  { label: "Case Studies", href: "case-studies.html" },
  { label: "Team", href: "team.html" },
];

function ServicesDropdown({ item }) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef(null);

  const show = () => { clearTimeout(closeTimer.current); setOpen(true); };
  const hide = () => { closeTimer.current = setTimeout(() => setOpen(false), 120); };

  return (
    <div style={{ position: "relative" }} onMouseEnter={show} onMouseLeave={hide}>
      <a href={item.href} style={{
        fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 13.5,
        letterSpacing: "0.02em", color: open ? "var(--persian-green)" : "var(--fg1)", textDecoration: "none",
        transition: "color var(--dur) var(--ease-out)", display: "inline-flex", alignItems: "center", gap: 5,
      }}>
        {item.label}
        <span style={{ display: "inline-flex", transform: open ? "rotate(180deg)" : "none", transition: "transform var(--dur) var(--ease-out)" }}>
          <Icon name="chevron-down" size={15} />
        </span>
      </a>
      <div style={{
        position: "absolute", top: "calc(100% + 14px)", left: -16, minWidth: 264,
        background: "var(--white)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)",
        boxShadow: "var(--shadow-lg)", padding: "var(--space-3)", zIndex: 60,
        opacity: open ? 1 : 0, transform: open ? "translateY(0)" : "translateY(-6px)",
        pointerEvents: open ? "auto" : "none", transition: "opacity var(--dur) var(--ease-out), transform var(--dur) var(--ease-out)",
      }}>
        <div style={{ position: "absolute", top: -14, left: 0, right: 0, height: 14 }} />
        {item.children.map((c) => (
          <a key={c.label} href={c.href} style={{
            display: "block", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 14,
            color: "var(--fg1)", textDecoration: "none", padding: "11px 14px", borderRadius: "var(--radius-md)",
            transition: "all var(--dur-fast) var(--ease-out)",
          }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "var(--teal-50)"; e.currentTarget.style.color = "var(--teal-700)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--fg1)"; }}
          >{c.label}</a>
        ))}
      </div>
    </div>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 50,
      background: scrolled ? "rgba(255,255,255,0.86)" : "var(--white)",
      backdropFilter: scrolled ? "blur(10px)" : "none",
      borderBottom: `1px solid ${scrolled ? "var(--border)" : "transparent"}`,
      transition: "all var(--dur) var(--ease-out)",
    }}>
      <Container style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 76 }}>
        <a href={onHome ? "#top" : "index.html"} aria-label="Forward Thinkers Consulting — home" style={{ display: "flex", alignItems: "center" }}><Logo height={38} /></a>

        <nav className="ft-desktop-nav" style={{ display: "flex", alignItems: "center", gap: 30 }}>
          {NAV.map((n) => (
            n.children
              ? <ServicesDropdown key={n.label} item={n} />
              : <a key={n.label} href={n.href} style={{
                  fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 13.5,
                  letterSpacing: "0.02em", color: "var(--fg1)", textDecoration: "none",
                  transition: "color var(--dur) var(--ease-out)",
                }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--persian-green)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--fg1)")}
                >{n.label}</a>
          ))}
        </nav>

        <div className="ft-desktop-nav" style={{ display: "flex", alignItems: "center" }}>
          <Button variant="primary" href="contact.html" iconRight="arrow-right">Talk to our team</Button>
        </div>

        <button className="ft-mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu" style={{
          display: "none", background: "none", border: "none", cursor: "pointer", color: "var(--japan-indigo)",
        }}><Icon name={mobileOpen ? "x" : "menu"} size={26} /></button>
      </Container>

      {mobileOpen && (
        <div style={{ borderTop: "1px solid var(--border)", background: "var(--white)" }}>
          <Container style={{ padding: "16px var(--gutter) 24px", display: "flex", flexDirection: "column", gap: 4 }}>
            {NAV.map((n) => (
              n.children ? (
                <div key={n.label}>
                  <button onClick={() => setMobileServices(!mobileServices)} style={{
                    width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
                    background: "none", border: "none", cursor: "pointer", textAlign: "left",
                    fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 16, color: "var(--fg1)",
                    padding: "12px 0", borderBottom: "1px solid var(--border)",
                  }}>
                    {n.label}
                    <span style={{ display: "inline-flex", transform: mobileServices ? "rotate(180deg)" : "none", transition: "transform var(--dur)" }}><Icon name="chevron-down" size={18} /></span>
                  </button>
                  {mobileServices && (
                    <div style={{ display: "flex", flexDirection: "column", paddingLeft: 14 }}>
                      {n.children.map((c) => (
                        <a key={c.label} href={c.href} onClick={() => setMobileOpen(false)} style={{
                          fontFamily: "var(--font-body)", fontSize: 14.5, color: "var(--fg2)",
                          textDecoration: "none", padding: "11px 0", borderBottom: "1px solid var(--border)",
                        }}>{c.label}</a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a key={n.label} href={n.href} onClick={() => setMobileOpen(false)} style={{
                  fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 16, color: "var(--fg1)",
                  textDecoration: "none", padding: "12px 0", borderBottom: "1px solid var(--border)",
                }}>{n.label}</a>
              )
            ))}
            <div style={{ marginTop: 16 }}><Button variant="primary" href="contact.html" iconRight="arrow-right" style={{ width: "100%", justifyContent: "center" }}>Talk to our team</Button></div>
          </Container>
        </div>
      )}
    </header>
  );
}

Object.assign(window, { Header });
