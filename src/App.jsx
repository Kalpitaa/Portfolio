import { useState, useEffect, useRef } from "react";

// ─── DATA ────────────────────────────────────────────────────────────────────
const NAV = ["Home", "About", "Skills", "Projects", "Contact"];

const SKILLS = [
  { name: "React", icon: "⚛️", color: "#61dafb" },
  { name: "Node.js", icon: "🟢", color: "#68a063" },
  { name: "MongoDB", icon: "🍃", color: "#4db33d" },
  { name: "Express", icon: "🚂", color: "#888" },
  { name: "JavaScript", icon: "𝐉𝐒", color: "#f7df1e" },
  // { name: "TypeScript", icon: "𝐓𝐒", color: "#3178c6" },
  { name: "Tailwind", icon: "🌊", color: "#38bdf8" },
  { name: "Git", icon: "🔀", color: "#f05032" },
  { name: "REST APIs", icon: "🔌", color: "#a78bfa" },
  // { name: "Redux", icon: "🔄", color: "#764abc" },
  // { name: "Docker", icon: "🐳", color: "#2496ed" },
  // { name: "Figma", icon: "🎨", color: "#f24e1e" },
];

const PROJECTS = [
  {
    title: "Buddha Art Gallery",
    desc: "Developed an e-commerce platform for browsing and purchasing Buddha statues, using React for a responsive UI and Node.js/Express for RESTful APIs. Implemented authentication and managed products, users, and orders with MongoDB.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind"],
    color: "#14b8a6",
    // icon: "🛒",
    github: "https://github.com/Kalpitaa/Art_gallery",
    live: "#",
  },
  {
    title: "WorkZen",
    desc: "Developed a project tracking tool to streamline team collaboration and improve workflow visibility. Implemented role-based access, Kanban board functionality, and task status updates, along with RESTful APIs and secure authentication using MongoDB for efficient data management.",
    tech: ["React", "Express", "Node.js", "MongoDB"],
    color: "#f59e0b",
    // icon: "⚡",
    // github: "#",
    // live: "#",
  },
   {
    title: "Aararo 360",
    desc: "Developed a responsive pregnancy and parenting companion app to support users throughout their journey. Implemented features such as pregnancy tracking, milestone logging, and educational modules, along with secure REST APIs using Spring Boot and MySQL for reliable data management.",
    tech: ["React", "Java Springboot", "MySQL"],
    color: "#06b6d4",
    // icon: "🌤️",
    github: "https://github.com/Kalpitaa/Aararo360",
    // live: "#",
   },
  {
    title: "Skill Cycle",
    desc: "Developed a responsive peer-to-peer skill exchange platform that enables users to learn and teach skills through a non-monetary system. Built core features including authentication, interactive dashboard, profile management, and skill discovery, along with reusable UI components to ensure a consistent user experience.",
    tech: ["HTML5", "CSS3", "Tailwind", "React"],
    color: "#8b5cf6",
    // icon: "✍️",
    github: "https://github.com/Kalpitaa/Skillcycle_project",
    // live: "#",
  },
  // {
  //   title: "WeatherNow",
  //   desc: "Beautiful weather dashboard with 7-day forecasts, location search, and animated conditions.",
  //   tech: ["React", "OpenWeather API", "Chart.js"],
  //   color: "#06b6d4",
  //   // icon: "🌤️",
  //   // github: "#",
  //   // live: "#",
  // },
  // {
  //   title: "AuthKit",
  //   desc: "Production-ready authentication boilerplate with JWT, OAuth, refresh tokens, and role-based access.",
  //   tech: ["Node.js", "Express", "MongoDB", "JWT"],
  //   color: "#f43f5e",
  //   icon: "🔐",
  //   github: "#",
  //   live: "#",
  // },
];

const EXPERIENCE = [
  {
    type: "work",
    title: "MERN Stack Devlopment",
    org: "Softlogic",
    period: "Nov 2025 ",
    desc: "Completed MERN Stack training at SLA with hands-on experience in building full-stack applications and gained practical experience in API development, database management, and responsive UI design using modern web technologies.",
    color: "#14b8a6",
  },
  // {
  //   type: "work",
  //   title: "Frontend Developer (Freelance)",
  //   org: "Self-employed",
  //   period: "Jun 2023 – Dec 2023",
  //   desc: "Delivered 6+ client websites with React, custom animations, and CMS integrations.",
  //   color: "#f59e0b",
  // },
  {
    type: "edu",
    title: "BCA - Bachelor of Computer Applications",
    org: "Anna Adarsh College for Women",
    period: "2022 – 2025",
    desc: "Graduated with 7.9 CGPA",
    color: "#8b5cf6",
  },
  // {
  //   type: "edu",
  //   title: "12 Grade",
  //   org: "Velammal Vidhyashram Surapet",
  //   period: "2021 – 2022",
  //   // desc: "76.6 CGPA",
  //   color: "#06b6d4",
  // },
];

// ─── HOOKS ───────────────────────────────────────────────────────────────────
function useActiveSection() {
  const [active, setActive] = useState("Home");
  useEffect(() => {
    const handler = () => {
      const sections = NAV.map(n => document.getElementById(n));
      for (let i = sections.length - 1; i >= 0; i--) {
        const s = sections[i];
        if (s && s.getBoundingClientRect().top <= 120) {
          setActive(NAV[i]);
          return;
        }
      }
      setActive("Home");
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return active;
}

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

// ─── ANIMATED BACKGROUND ─────────────────────────────────────────────────────
function MeshBg() {
  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 0, overflow: "hidden", pointerEvents: "none"
    }}>
      <div style={{
        position: "absolute", width: 700, height: 700, borderRadius: "50%",
        background: "radial-gradient(circle, #14b8a620 0%, transparent 70%)",
        top: -200, left: -200,
        animation: "drift1 18s ease-in-out infinite alternate",
      }} />
      <div style={{
        position: "absolute", width: 500, height: 500, borderRadius: "50%",
        background: "radial-gradient(circle, #f59e0b12 0%, transparent 70%)",
        bottom: -100, right: -100,
        animation: "drift2 22s ease-in-out infinite alternate",
      }} />
      <div style={{
        position: "absolute", width: 400, height: 400, borderRadius: "50%",
        background: "radial-gradient(circle, #8b5cf615 0%, transparent 70%)",
        top: "40%", left: "50%",
        animation: "drift3 26s ease-in-out infinite alternate",
      }} />
      {/* Grid overlay */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }} />
    </div>
  );
}

// ─── NAVBAR ──────────────────────────────────────────────────────────────────
function Navbar({ dark, setDark }) {
  const active = useActiveSection();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      padding: "0 24px",
      background: scrolled
        ? "rgba(8,8,16,0.85)"
        : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      transition: "all 0.4s ease",
    }}>
      <div style={{
        maxWidth: 1100, margin: "0 auto",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: 64,
      }}>
        {/* Logo */}
        <div style={{
          fontFamily: "'Courier New', monospace",
          fontWeight: 900, fontSize: 22,
          background: "linear-gradient(135deg, #14b8a6, #f59e0b)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          letterSpacing: -1,
        }}>
          &lt;Dev/&gt;
        </div>

        {/* Desktop nav */}
        <div style={{ display: "flex", gap: 4, alignItems: "center" }}
          className="hide-mobile">
          {NAV.map(n => (
            <button key={n} onClick={() => scrollTo(n)} style={{
              background: "transparent", border: "none",
              padding: "6px 14px", borderRadius: 8,
              color: active === n ? "#14b8a6" : "rgba(255,255,255,0.55)",
              fontFamily: "'Courier New', monospace",
              fontSize: 13, fontWeight: active === n ? 700 : 400,
              cursor: "pointer", transition: "all 0.2s",
              borderBottom: active === n ? "2px solid #14b8a6" : "2px solid transparent",
            }}>{n}</button>
          ))}
          <button onClick={() => setDark(d => !d)} style={{
            marginLeft: 8, background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 8, padding: "6px 10px",
            color: "#fff", cursor: "pointer", fontSize: 16,
          }}>{dark ? "☀️" : "🌙"}</button>
        </div>

        {/* Mobile menu button */}
        <button onClick={() => setMenuOpen(m => !m)}
          className="show-mobile"
          style={{
            background: "transparent", border: "none",
            color: "#fff", fontSize: 22, cursor: "pointer",
          }}>
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          background: "rgba(8,8,20,0.97)", backdropFilter: "blur(20px)",
          padding: "16px 0", borderTop: "1px solid rgba(255,255,255,0.06)",
        }}>
          {NAV.map(n => (
            <button key={n} onClick={() => scrollTo(n)} style={{
              display: "block", width: "100%", textAlign: "left",
              background: "transparent", border: "none",
              padding: "12px 24px", color: active === n ? "#14b8a6" : "#aaa",
              fontFamily: "'Courier New', monospace", fontSize: 14,
              cursor: "pointer",
            }}>{n}</button>
          ))}
        </div>
      )}
    </nav>
  );
}

// ─── HERO ────────────────────────────────────────────────────────────────────
function Hero() {
  const [blink, setBlink] = useState(true);
  const roles = ["MERN Stack Developer", "React Enthusiast", "Problem Solver", "Scalable Web Applications"];
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => setBlink(b => !b), 530);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const role = roles[roleIdx];
    let i = 0;
    setDisplayed("");
    setTyping(true);
    const t = setInterval(() => {
      setDisplayed(role.slice(0, i + 1));
      i++;
      if (i >= role.length) {
        clearInterval(t);
        setTyping(false);
        setTimeout(() => setRoleIdx(r => (r + 1) % roles.length), 1800);
      }
    }, 60);
    return () => clearInterval(t);
  }, [roleIdx]);

  return (
    <section id="Home" style={{
      minHeight: "100vh", display: "flex", alignItems: "center",
      justifyContent: "center", padding: "80px 24px 40px",
      position: "relative",
    }}>
      <div style={{ textAlign: "center", maxWidth: 760, animation: "fadeUp 0.8s ease both" }}>
        {/* Avatar */}
        <div style={{
          width: 110, height: 110, borderRadius: "50%",
          background: "linear-gradient(135deg, #14b8a6, #f59e0b)",
          margin: "0 auto 28px",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 48,
          boxShadow: "0 0 40px rgba(20,184,166,0.35)",
          animation: "pulse 3s ease-in-out infinite",
        }}>
          👨‍💻
        </div>

        <div style={{
          display: "inline-block", padding: "4px 16px", borderRadius: 999,
          background: "rgba(20,184,166,0.1)", border: "1px solid rgba(20,184,166,0.3)",
          color: "#14b8a6", fontSize: 12, fontFamily: "monospace",
          letterSpacing: 3, textTransform: "uppercase", marginBottom: 20,
        }}>
          Available for Hire
        </div>

        <h1 style={{
          fontSize: "clamp(2.4rem, 6vw, 4.2rem)",
          fontWeight: 900, lineHeight: 1.1,
          letterSpacing: "-0.03em", marginBottom: 16,
          fontFamily: "'Georgia', serif",
        }}>
          Hi, I'm{" "}
          <span style={{
            background: "linear-gradient(135deg, #14b8a6 30%, #f59e0b)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>
            Kalpitaa
          </span>
        </h1>

        <div style={{
          fontSize: "clamp(1.1rem, 3vw, 1.5rem)",
          color: "rgba(255,255,255,0.7)",
          fontFamily: "monospace", marginBottom: 20,
          minHeight: "2em",
        }}>
          <span style={{ color: "#f59e0b" }}>&gt; </span>
          {displayed}
          <span style={{ opacity: blink ? 1 : 0, color: "#14b8a6" }}>█</span>
        </div>

        <p style={{
          fontSize: 17, color: "rgba(255,255,255,0.45)",
          maxWidth: 520, margin: "0 auto 36px", lineHeight: 1.7,
        }}>
          I build fast, beautiful, and scalable web applications.
          Passionate about clean code, great UX, and learning in public.
        </p>

        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <button onClick={() => document.getElementById("Projects")?.scrollIntoView({ behavior: "smooth" })}
            style={{
              padding: "14px 32px", borderRadius: 12,
              background: "linear-gradient(135deg, #14b8a6, #0d9488)",
              border: "none", color: "#000",
              fontWeight: 700, fontSize: 15, cursor: "pointer",
              boxShadow: "0 4px 24px rgba(20,184,166,0.35)",
              transition: "transform 0.2s, box-shadow 0.2s",
              fontFamily: "monospace",
            }}
            onMouseEnter={e => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 8px 32px rgba(20,184,166,0.5)"; }}
            onMouseLeave={e => { e.target.style.transform = ""; e.target.style.boxShadow = "0 4px 24px rgba(20,184,166,0.35)"; }}
          >
            View Projects →
          </button>
          <button onClick={() => document.getElementById("Contact")?.scrollIntoView({ behavior: "smooth" })}
            style={{
              padding: "14px 32px", borderRadius: 12,
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.15)", color: "#fff",
              fontWeight: 600, fontSize: 15, cursor: "pointer",
              transition: "all 0.2s", fontFamily: "monospace",
              backdropFilter: "blur(10px)",
            }}
            onMouseEnter={e => { e.target.style.borderColor = "#14b8a6"; e.target.style.color = "#14b8a6"; }}
            onMouseLeave={e => { e.target.style.borderColor = "rgba(255,255,255,0.15)"; e.target.style.color = "#fff"; }}
          >
            Contact Me
          </button>
        </div>

        {/* Social links */}
        <div style={{ display: "flex", gap: 16, justifyContent: "center", marginTop: 40 }}>
          {[
            { label: "GitHub", icon: "⌥", href: "https://github.com/kalpitaa" },
            { label: "LinkedIn", icon: "in", href: "https://linkedin.com/in/kalpitaa-mg" },
            // { label: "Twitter", icon: "𝕏", href: "#" },
          ].map(s => (
            <a key={s.label} href={s.href} style={{
              width: 42, height: 42, borderRadius: 10,
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "rgba(255,255,255,0.5)", fontSize: 14, fontWeight: 700,
              textDecoration: "none", transition: "all 0.2s",
              fontFamily: "monospace",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#14b8a6"; e.currentTarget.style.color = "#14b8a6"; e.currentTarget.style.background = "rgba(20,184,166,0.1)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.color = "rgba(255,255,255,0.5)"; e.currentTarget.style.background = "rgba(255,255,255,0.05)"; }}
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* Scroll cue */}
        <div style={{
          marginTop: 60, color: "rgba(255,255,255,0.2)",
          fontSize: 12, fontFamily: "monospace", letterSpacing: 3,
          animation: "bounce 2s ease-in-out infinite",
        }}>
          ↓ SCROLL
        </div>
      </div>
    </section>
  );
}

// ─── SECTION WRAPPER ─────────────────────────────────────────────────────────
function Section({ id, children, style = {} }) {
  const [ref, visible] = useInView();
  return (
    <section id={id} ref={ref} style={{
      padding: "90px 24px", maxWidth: 1100, margin: "0 auto",
      opacity: visible ? 1 : 0,
      transform: visible ? "none" : "translateY(40px)",
      transition: "opacity 0.7s ease, transform 0.7s ease",
      ...style,
    }}>
      {children}
    </section>
  );
}

function SectionHeader({ label, title, subtitle }) {
  return (
    <div style={{ marginBottom: 56, textAlign: "center" }}>
      <div style={{
        display: "inline-block", padding: "4px 14px", borderRadius: 999,
        background: "rgba(20,184,166,0.1)", border: "1px solid rgba(20,184,166,0.25)",
        color: "#14b8a6", fontSize: 11, fontFamily: "monospace",
        letterSpacing: 4, textTransform: "uppercase", marginBottom: 14,
      }}>{label}</div>
      <h2 style={{
        fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
        fontWeight: 900, letterSpacing: "-0.02em",
        fontFamily: "'Georgia', serif", marginBottom: 12,
      }}>{title}</h2>
      {subtitle && <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 16, maxWidth: 500, margin: "0 auto" }}>{subtitle}</p>}
    </div>
  );
}

// ─── ABOUT ───────────────────────────────────────────────────────────────────
function About() {
  return (
    <Section id="About">
      <SectionHeader label="Who I Am" title="About Me" />
      <div style={{ maxWidth: 680, margin: "0 auto" }}>
        <div style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: 20, padding: 32,
          backdropFilter: "blur(10px)",
        }}>
          <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.85, fontSize: 16, marginBottom: 20 }}>
            Enthusiastic <span style={{ color: "#14b8a6", fontWeight: 700 }}>MERN Stack Developer</span> with hands-on experience building dynamic applications using modern technologies. Passionate about solving complex problems, writing clean and maintainable code, and collaborating effectively within teams.
          </p>
          <p style={{ color: "rgba(255,255,255,0.45)", lineHeight: 1.85, fontSize: 15 }}>
            Driven to contribute to innovative solutions while continuously growing in a forward-thinking environment. I believe great software is a craft — every line of code matters.
          </p>
          <div style={{ marginTop: 24, display: "flex", gap: 10, flexWrap: "wrap" }}>
            {["Chennai, India ", "Open to Remote ", "Full-time Ready "].map(t => (
              <span key={t} style={{
                padding: "4px 12px", borderRadius: 999,
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                fontSize: 12, color: "rgba(255,255,255,0.5)",
                fontFamily: "monospace",
              }}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

// ─── SKILLS ──────────────────────────────────────────────────────────────────
function Skills() {
  return (
    <Section id="Skills">
      <SectionHeader label="Tech Stack" title="Skills & Tools" subtitle="Technologies I work with daily" />
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))",
        gap: 14,
      }}>
        {SKILLS.map((s, i) => (
          <div key={i} style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: 14, padding: "18px 14px",
            textAlign: "center", cursor: "default",
            transition: "all 0.25s",
            animationDelay: `${i * 0.05}s`,
          }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = s.color + "60";
              e.currentTarget.style.background = s.color + "10";
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = `0 8px 24px ${s.color}20`;
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
              e.currentTarget.style.background = "rgba(255,255,255,0.03)";
              e.currentTarget.style.transform = "";
              e.currentTarget.style.boxShadow = "";
            }}
          >
            <div style={{ fontSize: 26, marginBottom: 8 }}>{s.icon}</div>
            <div style={{ fontSize: 12, fontWeight: 700, fontFamily: "monospace", color: "rgba(255,255,255,0.7)", letterSpacing: 0.5 }}>{s.name}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

// ─── PROJECTS ────────────────────────────────────────────────────────────────
function Projects() {
  const [hovered, setHovered] = useState(null);

  return (
    <Section id="Projects">
      <SectionHeader label="My Work" title="Featured Projects" subtitle="Things I've built and shipped" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
        {PROJECTS.map((p, i) => (
          <div key={i}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{
              background: "rgba(255,255,255,0.03)",
              border: `1px solid ${hovered === i ? p.color + "50" : "rgba(255,255,255,0.07)"}`,
              borderRadius: 18, padding: 24,
              transition: "all 0.3s",
              transform: hovered === i ? "translateY(-6px)" : "none",
              boxShadow: hovered === i ? `0 16px 40px ${p.color}15` : "none",
              backdropFilter: "blur(10px)",
              display: "flex", flexDirection: "column",
            }}>
            {/* Icon + title */}
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
              <div style={{
                width: 44, height: 44, borderRadius: 12,
                background: p.color + "20",
                border: `1px solid ${p.color}40`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 20,
              }}>{p.icon}</div>
              <h3 style={{ fontWeight: 800, fontSize: 17, fontFamily: "'Georgia', serif" }}>{p.title}</h3>
            </div>

            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 14, lineHeight: 1.7, flex: 1, marginBottom: 16 }}>
              {p.desc}
            </p>

            {/* Tech badges */}
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 18 }}>
              {p.tech.map(t => (
                <span key={t} style={{
                  padding: "3px 10px", borderRadius: 999,
                  background: p.color + "15",
                  border: `1px solid ${p.color}30`,
                  color: p.color, fontSize: 11, fontFamily: "monospace", fontWeight: 600,
                }}>{t}</span>
              ))}
            </div>

            {/* Links */}
            <div style={{ display: "flex", gap: 10 }}>
              {[{ label: "GitHub ↗", href: p.github }, { label: "Live ↗", href: p.live }].map(l => (
                <a key={l.label} href={l.href} style={{
                  flex: 1, textAlign: "center",
                  padding: "8px", borderRadius: 8,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "rgba(255,255,255,0.55)", fontSize: 12,
                  textDecoration: "none", fontFamily: "monospace",
                  transition: "all 0.2s",
                }}
                  onMouseEnter={e => { e.currentTarget.style.color = p.color; e.currentTarget.style.borderColor = p.color + "50"; }}
                  onMouseLeave={e => { e.currentTarget.style.color = "rgba(255,255,255,0.55)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}
                >{l.label}</a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

// ─── EXPERIENCE ──────────────────────────────────────────────────────────────
function Experience() {
  return (
    <Section id="Experience">
      <SectionHeader label="Journey" title="Experience & Education" />
      <div style={{ position: "relative", maxWidth: 720, margin: "0 auto" }}>
        {/* Timeline line */}
        <div style={{
          position: "absolute", left: 20, top: 0, bottom: 0, width: 1,
          background: "linear-gradient(to bottom, #14b8a6, #8b5cf6, transparent)",
          opacity: 0.3,
        }} />

        {EXPERIENCE.map((e, i) => (
          <div key={i} style={{
            display: "flex", gap: 24, marginBottom: 32,
            animation: `fadeUp 0.5s ease ${i * 0.1}s both`,
          }}>
            {/* Dot */}
            <div style={{ position: "relative", flexShrink: 0 }}>
              <div style={{
                width: 40, height: 40, borderRadius: "50%",
                background: e.color + "20",
                border: `2px solid ${e.color}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 16,
                boxShadow: `0 0 16px ${e.color}30`,
              }}>
                {e.type === "work" ? "💼" : "🎓"}
              </div>
            </div>

            {/* Card */}
            <div style={{
              flex: 1,
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 14, padding: "18px 22px",
              transition: "border-color 0.2s",
            }}
              onMouseEnter={e => e.currentTarget.style.borderColor = e.currentTarget.closest ? "rgba(20,184,166,0.3)" : "rgba(20,184,166,0.3)"}
              onMouseLeave={ev => ev.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"}
            >
              <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8, marginBottom: 6 }}>
                <div>
                  <div style={{ fontWeight: 800, fontSize: 15 }}>{e.title}</div>
                  <div style={{ color: e.color, fontSize: 13, fontFamily: "monospace", fontWeight: 600 }}>{e.org}</div>
                </div>
                <span style={{
                  padding: "3px 10px", borderRadius: 999, height: "fit-content",
                  background: e.color + "15", border: `1px solid ${e.color}30`,
                  color: e.color, fontSize: 11, fontFamily: "monospace",
                }}>{e.period}</span>
              </div>
              <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 14, lineHeight: 1.65, margin: 0 }}>{e.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

// ─── CONTACT ─────────────────────────────────────────────────────────────────
function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handle = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const submit = () => {
    if (form.name && form.email && form.message) {
      setSent(true);
      setTimeout(() => setSent(false), 3000);
      setForm({ name: "", email: "", message: "" });
    }
  };

  const inputStyle = {
    width: "100%", padding: "12px 16px", borderRadius: 10,
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.1)",
    color: "#fff", fontSize: 14, outline: "none",
    fontFamily: "monospace", boxSizing: "border-box",
    transition: "border-color 0.2s",
  };

  return (
    <Section id="Contact">
      <SectionHeader label="Say Hello" title="Get In Touch" subtitle="Open to opportunities, collabs, or just a chat." />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 32, maxWidth: 900, margin: "0 auto" }}>

        {/* Info */}
        <div>
          <div style={{ marginBottom: 24 }}>
            <p style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.8, fontSize: 15 }}>
              Currently open to full-time roles and freelance projects.
              Drop me a message and I'll get back within 24 hours.
            </p>
          </div>
          {[
            { icon: "📧", label: "Email", value: "mgkalpitaa@gmail.com", href: "mailto:mgkalpitaa@gmail.com" },
            { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/mgkalpitaa", href: "https://linkedin.com/in/kalpitaa-mg" },
            { icon: "🐙", label: "GitHub", value: "github.com/mgkalpitaa", href: "https://github.com/kalpitaa" },
          ].map(c => (
            <a key={c.label} href={c.href} style={{
              display: "flex", alignItems: "center", gap: 14,
              padding: "14px 16px", borderRadius: 12, marginBottom: 10,
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
              textDecoration: "none", transition: "all 0.2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(20,184,166,0.4)"; e.currentTarget.style.background = "rgba(20,184,166,0.05)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; e.currentTarget.style.background = "rgba(255,255,255,0.03)"; }}
            >
              <span style={{ fontSize: 20 }}>{c.icon}</span>
              <div>
                <div style={{ fontSize: 11, color: "#14b8a6", fontFamily: "monospace", letterSpacing: 1 }}>{c.label}</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}>{c.value}</div>
              </div>
            </a>
          ))}
        </div>

        {/* Form */}
        <div style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: 18, padding: 28,
        }}>
          <div style={{ marginBottom: 14 }}>
            <input name="name" value={form.name} onChange={handle}
              placeholder="Your Name" style={inputStyle}
              onFocus={e => e.target.style.borderColor = "#14b8a6"}
              onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
            />
          </div>
          <div style={{ marginBottom: 14 }}>
            <input name="email" value={form.email} onChange={handle}
              placeholder="Your Email" style={inputStyle}
              onFocus={e => e.target.style.borderColor = "#14b8a6"}
              onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
            />
          </div>
          <div style={{ marginBottom: 20 }}>
            <textarea name="message" value={form.message} onChange={handle}
              placeholder="Your Message" rows={5}
              style={{ ...inputStyle, resize: "vertical" }}
              onFocus={e => e.target.style.borderColor = "#14b8a6"}
              onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
            />
          </div>
          <button onClick={submit} style={{
            width: "100%", padding: "13px",
            background: sent
              ? "linear-gradient(135deg, #10b981, #059669)"
              : "linear-gradient(135deg, #14b8a6, #0d9488)",
            border: "none", borderRadius: 10,
            color: "#000", fontWeight: 800, fontSize: 15,
            cursor: "pointer", fontFamily: "monospace",
            transition: "all 0.3s",
            boxShadow: "0 4px 20px rgba(20,184,166,0.3)",
          }}>
            {sent ? "✓ Message Sent!" : "Send Message →"}
          </button>
        </div>
      </div>
    </Section>
  );
}

// ─── FOOTER ──────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{
      textAlign: "center", padding: "32px 24px",
      borderTop: "1px solid rgba(255,255,255,0.05)",
      color: "rgba(255,255,255,0.25)", fontSize: 13,
      fontFamily: "monospace",
    }}>
      <span style={{ color: "#14b8a6" }}>&lt;/&gt;</span> Built with React + ❤️ by Kalpitaa · {new Date().getFullYear()}
    </footer>
  );
}

// ─── APP ─────────────────────────────────────────────────────────────────────
export default function App() {
  const [dark, setDark] = useState(true);

  return (
    <div style={{
      background: dark ? "#08080f" : "#f8f7f4",
      color: dark ? "#e8e6df" : "#111",
      minHeight: "100vh",
      position: "relative",
      transition: "background 0.4s, color 0.4s",
    }}>
      <MeshBg />
      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar dark={dark} setDark={setDark} />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 30px rgba(20,184,166,0.3); }
          50% { box-shadow: 0 0 60px rgba(20,184,166,0.6); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }
        @keyframes drift1 {
          from { transform: translate(0,0) scale(1); }
          to { transform: translate(80px, 60px) scale(1.15); }
        }
        @keyframes drift2 {
          from { transform: translate(0,0) scale(1); }
          to { transform: translate(-60px, -80px) scale(1.1); }
        }
        @keyframes drift3 {
          from { transform: translate(-50%, 0) scale(1); }
          to { transform: translate(-60%, -40px) scale(1.2); }
        }
        .hide-mobile { display: flex; }
        .show-mobile { display: none; }
        @media (max-width: 640px) {
          .hide-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        input::placeholder, textarea::placeholder { color: rgba(255,255,255,0.2); }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #08080f; }
        ::-webkit-scrollbar-thumb { background: #14b8a6; border-radius: 2px; }
      `}</style>
    </div>
  );
}