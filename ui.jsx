/* global React */
const { useEffect, useRef } = React;

// ---- Icon (Lucide via CDN) ----
function Icon({ name, size = 22, color, strokeWidth = 1.75, style = {} }) {
  const ref = useRef(null);
  useEffect(() => {
    if (window.lucide && ref.current) {
      ref.current.innerHTML = "";
      const el = document.createElement("i");
      el.setAttribute("data-lucide", name);
      ref.current.appendChild(el);
      window.lucide.createIcons({
        attrs: { width: size, height: size, "stroke-width": strokeWidth },
        nameAttr: "data-lucide",
      });
      const svg = ref.current.querySelector("svg");
      if (svg && color) svg.style.color = color;
    }
  }, [name, size, color, strokeWidth]);
  return <span ref={ref} style={{ display: "inline-flex", lineHeight: 0, ...style }} />;
}

// ---- Container ----
function Container({ children, narrow, style = {} }) {
  return (
    <div style={{
      maxWidth: narrow ? "var(--container-narrow)" : "var(--container)",
      margin: "0 auto", padding: "0 var(--gutter)", ...style,
    }}>{children}</div>
  );
}

// ---- Eyebrow ----
function Eyebrow({ children, onDark, style = {} }) {
  return (
    <div style={{
      fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "var(--text-eyebrow)",
      letterSpacing: "0.18em", textTransform: "uppercase",
      color: onDark ? "var(--accent-bright)" : "var(--accent)", ...style,
    }}>{children}</div>
  );
}

// ---- Logo ----
function Logo({ variant = "indigo", height = 30 }) {
  const src = variant === "white"
    ? "assets/logo-white.png"
    : "assets/logo-indigo.png";
  return <img src={src} alt="Forward Thinkers Consulting" style={{ height, display: "block" }} />;
}

// ---- Button ----
function Button({ children, variant = "primary", size = "md", href = "#", iconRight, onClick, style = {} }) {
  const base = {
    fontFamily: "var(--font-display)", fontWeight: 600, letterSpacing: "0.01em",
    borderRadius: "var(--radius-md)", border: "1.5px solid transparent", cursor: "pointer",
    display: "inline-flex", alignItems: "center", gap: 8, textDecoration: "none",
    transition: "all var(--dur) var(--ease-out)", whiteSpace: "nowrap",
    fontSize: size === "lg" ? 16 : 14,
    padding: size === "lg" ? "16px 30px" : "13px 24px",
  };
  const variants = {
    primary:   { background: "var(--persian-green)", color: "#fff" },
    secondary: { background: "var(--white)", color: "var(--japan-indigo)", borderColor: "var(--border-strong)" },
    navy:      { background: "var(--japan-indigo)", color: "#fff" },
    ghost:     { background: "transparent", color: "var(--persian-green)", padding: size === "lg" ? "16px 8px" : "13px 8px" },
    onDark:    { background: "var(--white)", color: "var(--japan-indigo)" },
  };
  const hovers = {
    primary:   { background: "var(--teal-700)", boxShadow: "var(--shadow-teal)" },
    secondary: { borderColor: "var(--persian-green)", color: "var(--persian-green)" },
    navy:      { background: "var(--navy-700)" },
    ghost:     { background: "var(--teal-50)" },
    onDark:    { background: "var(--bright-gray)" },
  };
  const ref = useRef(null);
  return (
    <a href={href} onClick={onClick} ref={ref} style={{ ...base, ...variants[variant], ...style }}
      onMouseEnter={(e) => Object.assign(e.currentTarget.style, hovers[variant])}
      onMouseLeave={(e) => Object.assign(e.currentTarget.style, variants[variant])}
      onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.98)")}
      onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      {children}
      {iconRight && <Icon name={iconRight} size={18} />}
    </a>
  );
}

// ---- Pill ----
function Pill({ children, variant = "teal" }) {
  const v = {
    teal: { background: "var(--teal-50)", color: "var(--teal-700)" },
    navy: { background: "var(--japan-indigo)", color: "#fff" },
    outline: { background: "transparent", color: "var(--persian-green)", border: "1.5px solid var(--persian-green)" },
    gray: { background: "var(--bright-gray)", color: "var(--charcoal)" },
  }[variant];
  return (
    <span style={{
      fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 12, letterSpacing: "0.08em",
      textTransform: "uppercase", borderRadius: "var(--radius-pill)", padding: "7px 15px",
      display: "inline-block", ...v,
    }}>{children}</span>
  );
}

Object.assign(window, { Icon, Container, Eyebrow, Logo, Button, Pill });
