/* global React, Container, Eyebrow, Button, Icon */
const { useState } = React;

/* ============================================================
   CONTACT — conversion destination. Clean & simple.
   Standard business contact form ONLY (no PHI / health-data intake).
   Form is visual-only for now: shows a confirmation state on submit,
   does not send email yet. Business details are placeholders.
   ============================================================ */

const fieldBase = {
  width: "100%", boxSizing: "border-box", fontFamily: "var(--font-body)", fontSize: 15,
  color: "var(--fg1)", background: "var(--white)", border: "1px solid var(--border-strong)",
  borderRadius: "var(--radius-md)", padding: "12px 14px", transition: "all var(--dur) var(--ease-out)",
};
const labelStyle = {
  fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 12, letterSpacing: "0.04em",
  color: "var(--fg1)", textTransform: "uppercase", marginBottom: 7, display: "block",
};

function Field({ id, label, type = "text", placeholder, optional, value, onChange, textarea, children, required }) {
  const [focus, setFocus] = useState(false);
  const focusStyle = focus ? { borderColor: "var(--persian-green)", outline: "none", boxShadow: "0 0 0 3px rgba(7,163,151,.16)" } : {};
  const common = {
    id, value, onChange,
    onFocus: () => setFocus(true), onBlur: () => setFocus(false),
    style: { ...fieldBase, ...focusStyle, ...(textarea ? { minHeight: 132, resize: "vertical" } : {}) },
    placeholder, required,
  };
  return (
    <div>
      <label htmlFor={id} style={labelStyle}>
        {label}{optional && <span style={{ color: "var(--fg3)", fontWeight: 400, textTransform: "none", letterSpacing: 0, marginLeft: 6 }}>(optional)</span>}
      </label>
      {children
        ? React.cloneElement(children, common)
        : textarea
          ? <textarea {...common} />
          : <input type={type} {...common} />}
    </div>
  );
}

// ---- HERO (light) ----
function ContactHero() {
  return (
    <section id="top" style={{ background: "var(--gray-100)", borderBottom: "1px solid var(--border)", paddingTop: "var(--space-9)", paddingBottom: "var(--space-8)" }}>
      <Container>
        <div style={{ maxWidth: 680 }}>
          <Eyebrow>Contact</Eyebrow>
          <h1 className="ft-h1" style={{ marginTop: 16, marginBottom: 0, fontSize: "clamp(36px, 4.4vw, 52px)" }}>Let's talk about your data.</h1>
          <p className="ft-lead" style={{ marginTop: 22, maxWidth: 580 }}>
            Tell us where your data is today and where you need it to go — we'll map the fastest path
            to a governed, decision-ready foundation.
          </p>
        </div>
      </Container>
    </section>
  );
}

// ---- FORM ----
function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", phone: "", help: "General inquiry", message: "" });
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  if (sent) {
    return (
      <div style={{ border: "1px solid var(--border)", borderTop: "3px solid var(--persian-green)", borderRadius: "var(--radius-lg)", background: "var(--white)", boxShadow: "var(--shadow-md)", padding: "var(--space-7)", textAlign: "center" }}>
        <div style={{ width: 60, height: 60, borderRadius: "50%", background: "var(--teal-50)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 22px" }}>
          <Icon name="check" size={30} color="var(--persian-green)" />
        </div>
        <h3 className="ft-h3" style={{ margin: "0 0 10px" }}>Thanks — your message is ready to send.</h3>
        <p className="ft-body" style={{ margin: "0 auto", maxWidth: 420 }}>
          [Placeholder confirmation] We'll be in touch shortly. Live submission and email routing are wired up at the build stage.
        </p>
        <div style={{ marginTop: 24 }}>
          <button onClick={() => setSent(false)} style={primaryBtn}
            onMouseEnter={(e) => { e.currentTarget.style.background = "var(--teal-700)"; e.currentTarget.style.boxShadow = "var(--shadow-teal)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "var(--persian-green)"; e.currentTarget.style.boxShadow = "none"; }}
          >Send another message</button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
      <div className="ft-form-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-5)" }}>
        <Field id="cf-name" label="Full name" placeholder="Jordan Avery" value={form.name} onChange={set("name")} required />
        <Field id="cf-email" label="Work email" type="email" placeholder="jordan@yourcompany.com" value={form.email} onChange={set("email")} required />
        <Field id="cf-company" label="Company" placeholder="Acme Health" value={form.company} onChange={set("company")} required />
        <Field id="cf-phone" label="Phone" type="tel" optional placeholder="(555) 000-0000" value={form.phone} onChange={set("phone")} />
      </div>
      <Field id="cf-help" label="How can we help?" value={form.help} onChange={set("help")}>
        <select style={{ ...fieldBase, appearance: "none", cursor: "pointer", backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='%231C4357' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'/></svg>\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 12px center", paddingRight: 42 }}>
          {["General inquiry", "SQL Server Performance", "ETL Modernization", "EDI / X12 Integration", "AI Data Cleansing", "Cloud Migration", "Healthcare & Regulated Data"].map((o) => <option key={o}>{o}</option>)}
        </select>
      </Field>
      <Field id="cf-message" label="Message" textarea placeholder="A few lines on your data estate and what you're trying to achieve." value={form.message} onChange={set("message")} required />
      <div>
        <button type="submit" style={primaryBtn}
          onMouseEnter={(e) => { e.currentTarget.style.background = "var(--teal-700)"; e.currentTarget.style.boxShadow = "var(--shadow-teal)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "var(--persian-green)"; e.currentTarget.style.boxShadow = "none"; }}
        >Send message <Icon name="arrow-right" size={18} /></button>
      </div>
      <p className="ft-caption" style={{ margin: 0, color: "var(--fg3)" }}>
        Please don't include patient data, PHI, or other sensitive health information in this form.
      </p>
    </form>
  );
}

const primaryBtn = {
  fontFamily: "var(--font-display)", fontWeight: 600, letterSpacing: "0.01em", fontSize: 15,
  background: "var(--persian-green)", color: "#fff", border: "1.5px solid transparent",
  borderRadius: "var(--radius-md)", cursor: "pointer", display: "inline-flex", alignItems: "center",
  gap: 8, padding: "15px 28px", transition: "all var(--dur) var(--ease-out)",
};

// ---- RIGHT COLUMN: business info + what's next ----
function ContactAside() {
  const info = [
    { icon: "mail", label: "Email", value: "[business email — to confirm]" },
    { icon: "phone", label: "Phone", value: "[phone — to confirm]" },
    { icon: "map-pin", label: "Location", value: "Miramar, FL", sub: "[full address — to confirm]" },
    { icon: "linkedin", label: "LinkedIn", value: "Forward Thinkers Consulting", link: true },
  ];
  const steps = [
    "We review your message",
    "We schedule a short intro call",
    "We scope a data assessment",
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
      <div style={{ background: "var(--gray-100)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "var(--space-6)" }}>
        <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 22 }}>Get in touch</div>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 20 }}>
          {info.map((it) => (
            <li key={it.label} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
              <span style={{ width: 40, height: 40, borderRadius: 10, background: "var(--teal-50)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Icon name={it.icon} size={20} color="var(--persian-green)" />
              </span>
              <div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--fg3)", marginBottom: 3 }}>{it.label}</div>
                {it.link
                  ? <a href="#" style={{ fontFamily: "var(--font-body)", fontSize: 15.5, color: "var(--persian-green)", textDecoration: "none" }}>{it.value}</a>
                  : <div style={{ fontFamily: "var(--font-body)", fontSize: 15.5, color: "var(--fg1)" }}>{it.value}</div>}
                {it.sub && <div style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--fg3)", marginTop: 2 }}>{it.sub}</div>}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div style={{ background: "var(--white)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "var(--space-6)" }}>
        <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 22 }}>What happens next</div>
        <ol style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 18, counterReset: "step" }}>
          {steps.map((s, i) => (
            <li key={s} style={{ display: "flex", gap: 14, alignItems: "center" }}>
              <span style={{ width: 30, height: 30, borderRadius: "50%", background: "var(--japan-indigo)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 13 }}>{i + 1}</span>
              <span className="ft-body" style={{ margin: 0 }}>{s}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

// ---- MAIN SECTION ----
function ContactMain() {
  return (
    <section style={{ background: "var(--white)", padding: "var(--space-9) 0" }}>
      <Container>
        <div className="ft-contact-grid" style={{ display: "grid", gridTemplateColumns: "1.35fr 1fr", gap: "var(--space-8)", alignItems: "start" }}>
          <ContactForm />
          <ContactAside />
        </div>
        <p className="ft-small" style={{ marginTop: "var(--space-8)", color: "var(--fg2)", textAlign: "center" }}>
          Prefer email? Reach us at <span style={{ color: "var(--persian-green)", fontWeight: 500 }}>[business email — to confirm]</span>.
        </p>
      </Container>
    </section>
  );
}

Object.assign(window, { ContactHero, ContactMain });
