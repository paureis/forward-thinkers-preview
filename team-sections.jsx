/* global React, Container, Eyebrow, Button, Pill, Icon */

/* ============================================================
   TEAM — authority page. Real people, real bios (client-supplied
   June 2026). Founder + two experts live now; grid is data-driven
   so the remaining members drop in as their profiles + photos land.
   Firm-level certifications strip stays as dashed placeholders.
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
            Forward Thinkers pairs deep healthcare-data domain knowledge with senior, hands-on
            delivery. The people who scope your work are the people who deliver it.
          </p>
        </div>
      </Container>
    </section>
  );
}

// ---- LEADERSHIP / FOUNDER (prominent, two-column) ----
function Leadership() {
  const creds = [
    "200+ enterprise data and modernization initiatives",
    "Healthcare, claims, provider and EDI/X12 expertise",
    "SQL Server, Azure, AWS, Databricks, .NET, Python, SSIS and analytics",
    "Security, compliance and data governance focus",
  ];
  return (
    <section style={{ background: "var(--white)", padding: "var(--space-10) 0" }}>
      <Container>
        <Eyebrow>Leadership</Eyebrow>
        <div className="ft-leader-grid" style={{ display: "grid", gridTemplateColumns: "0.85fr 1.15fr", gap: "var(--space-8)", alignItems: "start", marginTop: "var(--space-6)" }}>
          {/* Founder portrait */}
          <div style={{ position: "relative" }}>
            <img
              src="assets/team-ysaias.png"
              alt="Ysaias Portes, Founder and Principal Data Platform Architect"
              style={{ width: "100%", aspectRatio: "4 / 5", objectFit: "cover", objectPosition: "center top", borderRadius: "var(--radius-lg)", border: "1px solid var(--border)", boxShadow: "var(--shadow-sm)", display: "block" }}
            />
          </div>
          {/* Bio */}
          <div>
            <h2 className="ft-h2" style={{ margin: "0 0 4px" }}>Ysaias Portes</h2>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 15, letterSpacing: "0.04em", color: "var(--persian-green)", textTransform: "uppercase", marginBottom: 22 }}>Founder &amp; Principal Data Platform Architect</div>
            <p className="ft-body" style={{ maxWidth: 600 }}>
              With more than two decades of experience designing, modernizing, and securing
              enterprise data platforms, Ysaias specializes in healthcare data ecosystems, SQL
              Server architecture, ETL modernization, EDI/X12 integration, cloud transformation,
              analytics, and regulatory compliance. He has led complex initiatives across
              healthcare, insurance, government, and SaaS organizations, helping clients turn
              fragmented data into trusted, scalable, and business-ready information assets.
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: "24px 0 0", display: "flex", flexDirection: "column", gap: 14 }}>
              {creds.map((c) => (
                <li key={c} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <span style={{ marginTop: 1, color: "var(--persian-green)", flexShrink: 0 }}><Icon name="check" size={18} /></span>
                  <span className="ft-small" style={{ fontSize: 15.5 }}>{c}</span>
                </li>
              ))}
            </ul>
            <div style={{ marginTop: 24, fontFamily: "var(--font-body)", fontSize: 13, letterSpacing: "0.02em", color: "var(--fg3)" }}>
              MCDBA &middot; MCITP &middot; MCSA &middot; MCSE &middot; Cloud &middot; AI &middot; B.S. Information Technology
            </div>
            <figure style={{ margin: "30px 0 0", borderLeft: "3px solid var(--persian-green)", paddingLeft: 22 }}>
              <blockquote style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 20, lineHeight: 1.45, color: "var(--japan-indigo)", fontStyle: "italic" }}>
                &ldquo;Technology should simplify complexity, not create it. Our mission is to
                transform fragmented data and complex processes into trusted, scalable, and
                future-ready solutions that drive confident decisions.&rdquo;
              </blockquote>
            </figure>
          </div>
        </div>
      </Container>
    </section>
  );
}

// ---- OUR EXPERTS GRID (data-driven; flows to more cards as added) ----
const TEAM_EXPERTS = [
  {
    photo: "assets/team-daniela.png",
    name: "Daniela Gonz\u00e1lez",
    title: "Project Manager & Client Success Lead",
    bio: "Daniela is the operational bridge between clients, project teams, and delivery leadership, keeping complex initiatives organized, transparent, and on schedule. Her background spans international business, logistics coordination, customer operations, and client relationship management.",
    bullets: [
      "Client success and stakeholder management",
      "Project coordination and delivery oversight",
      "Azure DevOps, Jira, Agile delivery, Teams and process management",
      "Requirements management, UAT and business process coordination",
    ],
    education: "MBA, Project Management (PMP Track), AI Applications, Client Success and Delivery Leadership",
  },
  {
    photo: "assets/team-carolina.png",
    name: "Carolina Beltran",
    title: "Business Process Optimization Consultant",
    bio: "Carolina helps organizations streamline operations and turn complex processes into scalable, measurable workflows. Working closely with business and technology teams, she reduces operational friction, strengthens process governance, and aligns business goals with technology-driven solutions.",
    bullets: [
      "Business process analysis and optimization",
      "Workflow automation and operational efficiency",
      "Process intelligence, KPI optimization and continuous improvement",
      "Business analysis and data-driven decision making",
    ],
    education: "MBA, Business Operations, Process Improvement, Change Management",
  },
];

function ExpertCard({ person }) {
  return (
    <article style={{ background: "var(--white)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", overflow: "hidden", boxShadow: "var(--shadow-sm)", display: "flex", flexDirection: "column" }}>
      <img
        src={person.photo}
        alt={person.name + ", " + person.title}
        style={{ width: "100%", aspectRatio: "4 / 5", objectFit: "cover", objectPosition: "center top", display: "block", borderBottom: "1px solid var(--border)" }}
      />
      <div style={{ padding: "var(--space-6)", display: "flex", flexDirection: "column", flex: 1 }}>
        <h3 className="ft-h4" style={{ margin: "0 0 4px" }}>{person.name}</h3>
        <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 13, letterSpacing: "0.03em", color: "var(--persian-green)", textTransform: "uppercase", marginBottom: 16 }}>{person.title}</div>
        <p className="ft-body" style={{ margin: 0, fontSize: 15.5 }}>{person.bio}</p>
        <ul style={{ listStyle: "none", padding: 0, margin: "20px 0 0", display: "flex", flexDirection: "column", gap: 11 }}>
          {person.bullets.map((b) => (
            <li key={b} style={{ display: "flex", gap: 11, alignItems: "flex-start" }}>
              <span style={{ marginTop: 1, color: "var(--persian-green)", flexShrink: 0 }}><Icon name="check" size={17} /></span>
              <span className="ft-small" style={{ fontSize: 14.5 }}>{b}</span>
            </li>
          ))}
        </ul>
        <div style={{ marginTop: "auto", paddingTop: 20 }}>
          <div className="ft-caption" style={{ color: "var(--fg2)", lineHeight: 1.55 }}>
            <strong style={{ color: "var(--fg1)", fontWeight: 600 }}>Education:</strong> {person.education}
          </div>
        </div>
      </div>
    </article>
  );
}

function ExpertsGrid() {
  return (
    <section style={{ background: "var(--gray-100)", padding: "var(--space-10) 0" }}>
      <Container>
        <div style={{ maxWidth: 620, marginBottom: "var(--space-7)" }}>
          <Eyebrow>Our experts</Eyebrow>
          <h2 className="ft-h2" style={{ marginTop: 16 }}>Senior specialists across the data stack.</h2>
        </div>
        <div className="ft-experts-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "var(--space-6)", maxWidth: 920, margin: "0 auto" }}>
          {TEAM_EXPERTS.map((p) => <ExpertCard key={p.name} person={p} />)}
        </div>
        <p className="ft-caption" style={{ marginTop: "var(--space-6)", color: "var(--fg3)", textAlign: "center" }}>More of the team will be added here as additional profiles are finalized.</p>
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

// ---- CERTIFICATIONS & PARTNERSHIPS STRIP (firm-level placeholders) ----
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
