import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function AffiliateSupport() {
  return (
    <>
      <AeroBackground />

      <main className="page">
        <SiteNav />

        {/* HERO */}
        <section id="top" className="section hero-section">
          <div className="shell">
            <Reveal variant="left" className="hero-layout">
              <div className="hero-copy">
                <p className="eyebrow">DZ RENZU · DIGITAL SYSTEMS STUDIO</p>
                <h1 className="hero-title">
                  Infrastructure for creative business.
                </h1>
                <p className="hero-lede">
                  DZ Renzu builds products, networks and data rails for brands,
                  creators and companies. Less chaos, more structure.
                </p>

                <div className="hero-goals">
                  <div>
                    <p className="hero-goal-label">Core idea</p>
                    <p className="hero-goal">
                      Turn loose ideas into one connected system for people,
                      content and money.
                    </p>
                  </div>
                  <div className="hero-pill-row">
                    <span>Studio</span>
                    <span>Network</span>
                    <span>Lab</span>
                  </div>
                </div>

                <div className="hero-cta-row">
                  <a href="#services" className="btn">
                    View services
                  </a>
                  <a href="#contact" className="btn-outline">
                    Contact DZ Renzu
                  </a>
                </div>
              </div>

              {/* visual side instead of snapshot card */}
              <div className="hero-visual">
                <div className="hero-orbit">
                  <div className="hero-orbit-core">DZ Renzu</div>
                  <div className="hero-orbit-pill hero-orbit-pill--studio">
                    Software & Web
                  </div>
                  <div className="hero-orbit-pill hero-orbit-pill--network">
                    Network & Forums
                  </div>
                  <div className="hero-orbit-pill hero-orbit-pill--lab">
                    Aesthetic + Innovation
                  </div>
                </div>
                <div className="hero-badges">
                  
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* THREE PILLARS */}
        <section id="pillars" className="section">
          <div className="shell">
            <Reveal variant="up" className="section-header">
              <p className="eyebrow">THREE PILLARS</p>
              <h2 className="section-title">How DZ Renzu is split</h2>
              <p className="section-intro">
                One brand with three clear roles. Studio builds. Network connects. Lab
                experiments.
              </p>
            </Reveal>

            <div className="pillars-grid">
              <Reveal variant="up">
                <div className="pillar pillar-studio">
                  <p className="pillar-label">Studio</p>
                  <h3>Product, web and automation</h3>
                  <p className="small">
                    Digital products, platforms and brand sites for companies,
                    creators and startups. Built for clarity and performance.
                  </p>
                </div>
              </Reveal>

              <Reveal variant="up">
                <div className="pillar pillar-network">
                  <p className="pillar-label">Network</p>
                  <h3>Forums, hubs and deal flow</h3>
                  <p className="small">
                    Environments where projects reach out to the right profiles. Used
                    for hiring, collabs and client work.
                  </p>
                </div>
              </Reveal>

              <Reveal variant="up">
                <div className="pillar pillar-lab">
                  <p className="pillar-label">Lab</p>
                  <h3>Signals, tokens and identity</h3>
                  <p className="small">
                    Curation engines, token ideas and wallet profiles. Things that can
                    later become full products.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* SIGNATURE CONCEPTS – alt background to break monotony */}
        <section id="concepts" className="section section-alt">
          <div className="shell">
            <Reveal variant="up" className="section-header">
              <p className="eyebrow">SIGNATURE CONCEPTS</p>
              <h2 className="section-title">Concepts that belong to DZ Renzu</h2>
            </Reveal>

            <div className="concepts-grid">
              <Reveal variant="up">
                <div className="concept-card concept-accent">
                  <p className="concept-name">Algorithm Zero</p>
                  <p className="small">
                    Manual first curation. Content goes into packs that users choose
                    instead of chasing a feed.
                  </p>
                </div>
              </Reveal>

              <Reveal variant="up">
                <div className="concept-card">
                  <p className="concept-name">DZ Bridging</p>
                  <p className="small">
                    Forum pattern where clients open slots and invite services into one
                    focused thread.
                  </p>
                </div>
              </Reveal>

              <Reveal variant="up">
                <div className="concept-card">
                  <p className="concept-name">GigHaven</p>
                  <p className="small">
                    Job radar for creative and tech work. Profiles stay steady, gigs
                    ping you when the match fits.
                  </p>
                </div>
              </Reveal>

              <Reveal variant="up">
                <div className="concept-card">
                  <p className="concept-name">Networking Hubs</p>
                  <p className="small">
                    Rooms for specific scenes. Used for warm intros between founders,
                    artists, devs and companies.
                  </p>
                </div>
              </Reveal>

              <Reveal variant="up">
                <div className="concept-card concept-soft">
                  <p className="concept-name">Chain Linked Profiles</p>
                  <p className="small">
                    Profile layer that connects wallet activity with a human view.
                    Better way to read on-chain behaviour.
                  </p>
                </div>
              </Reveal>

              <Reveal variant="up">
                <div className="concept-card concept-soft">
                  <p className="concept-name">JOULESIC</p>
                  <p className="small">
                    Marketplace idea for producers and sound designers. Uses its own
                    token and ranking logic to keep quality high.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="section">
          <div className="shell">
            <Reveal variant="up" className="section-header">
              <p className="eyebrow">SERVICES</p>
              <h2 className="section-title">Things you can book with DZ Renzu</h2>
            </Reveal>

            <div className="services-layout">
              {/* BUILD SIDE */}
              <Reveal variant="left" className="services-col">
                <p className="services-label">Build</p>

                <div className="service-card service-accent">
                  <h3>🎁 Drop sites and launches</h3>
                  <p className="small">
                    Short lived sites or mini apps for releases, events or product
                    drops. Codes, waitlists, small games and sponsor slots.
                  </p>
                </div>

                <div className="service-card">
                  <h3>💻 Platforms and web tools</h3>
                  <p className="small">
                    Custom web apps, dashboards and portals for teams, com or
                    creator collectives.
                  </p>
                </div>

                <div className="service-card">
                  <h3>🛒 Ecommerce and funnels</h3>
                  <p className="small">
                    Stores for digital goods, subscriptions or education. Simple flows
                    and tracking so you can see what works.
                  </p>
                </div>

                <div className="service-card">
                  <h3>📦 Brand and portfolio builds</h3>
                  <p className="small">
                    Architecture and messaging so sponsors, investors and clients
                    understand your work fast.
                  </p>
                </div>
              </Reveal>

              {/* GROWTH SIDE */}
              <Reveal variant="right" className="services-col">
                <p className="services-label">Growth</p>

                <div className="service-card">
                  <h3>📲 Social and content systems</h3>
                  <p className="small">
                    Content formats and posting rhythm for your main channels. Designed
                    so you can keep it running.
                  </p>
                </div>

                <div className="service-card">
                  <h3>🤖 AI helpers and automations</h3>
                  <p className="small">
                    Chat tools, content copilots and small scripts inside your stack.
                    For support, research or content prep.
                  </p>
                </div>

                <div className="service-card">
                  <h3>🎨 Designification</h3>
                  <p className="small">
                    Typography, color tokens and micro interactions that make your
                    product and back office feel premium.
                  </p>
                </div>

                <div className="service-card">
                  <h3>🌍 Cult Manager</h3>
                  <p className="small">
                    Roles, rituals and access logic around your brand so a real
                    community can form and stay.
                  </p>
                </div>

                <div className="service-card service-soft">
                  <h3>🤝 Affiliate product stacks</h3>
                  <p className="small">
                    Digital products produced inside DZ Renzu. Guides, templates and
                    tools partners can promote.
                  </p>
                </div>
              </Reveal>
            </div>

            
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section section-alt">
          <div className="shell">
            <Reveal variant="up" className="section-header">
              <p className="eyebrow">CURRENT PROJECTS</p>
              <h2 className="section-title">What is live or in motion</h2>
            </Reveal>

            <div className="projects-grid">
              <Reveal variant="up">
                <article className="project-card project-dark">
                  <p className="project-tag">JOULESIC</p>
                  <h3>Marketplace for producers</h3>
                  <p className="small">
                    Token based beat and sound market. Focus on curated entry, clear
                    payouts and long term careers.
                  </p>
                </article>
              </Reveal>

              <Reveal variant="up">
                <article className="project-card">
                  <p className="project-tag">GigHaven</p>
                  <h3>Job environment</h3>
                  <p className="small">
                    Space where gig offers move to the right profiles. A different
                    angle on freelance work in creative and tech fields.
                  </p>
                </article>
              </Reveal>

              <Reveal variant="up">
                <article className="project-card">
                  <p className="project-tag">Networking hubs</p>
                  <h3>Rooms for scenes</h3>
                  <p className="small">
                    Structured hubs for music, design and product people. Used for
                    intros, deals and small events.
                  </p>
                </article>
              </Reveal>

              <Reveal variant="up">
                <article className="project-card project-soft">
                  <p className="project-tag">Chain linked profiles</p>
                  <h3>Wallet identity view</h3>
                  <p className="small">
                    Interface that shows wallet activity together with a person
                    profile. Easier for normal users and institutions.
                  </p>
                </article>
              </Reveal>

              <Reveal variant="up">
                <article className="project-card">
                  <p className="project-tag">Ecommerce builds</p>
                  <h3>Stores for digital goods</h3>
                  <p className="small">
                    Storefronts and funnels for music, learning products and creator
                    tools. Ready for partners and bundles.
                  </p>
                </article>
              </Reveal>

              <Reveal variant="up">
                <article className="project-card">
                  <p className="project-tag">Affiliate product line</p>
                  <h3>DZ Renzu stack</h3>
                  <p className="small">
                    PDFs, templates and utilities developed in the studio and
                    distributed through partner networks.
                  </p>
                </article>
              </Reveal>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION WITH FORM */}
        <section id="contact" className="section">
          <div className="shell">
            <Reveal variant="up" className="contact-layout">
              <div className="contact-copy">
                <p className="eyebrow">CONTACT</p>
                <h2 className="section-title">Work with DZ Renzu</h2>
                <p className="section-intro">
                  Based in Frankfurt. Open for brands, creators, agencies, freelancers and
                  other studios.
                </p>
                <p className="tiny">
                  Or write directly:{" "}
                  <a href="mailto:lennardfeist@gmail.com">
                    lennardfeist@gmail.com
                  </a>
                </p>
              </div>

              <ContactForm />
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="legal-footer">
        <div className="legal-buttons">
          <Link className="btn-outline tiny" to="/rechtliches#imprint">
            Imprint
          </Link>
          <Link className="btn-outline tiny" to="/rechtliches#privacy">
            Privacy Policy
          </Link>
        </div>
      </footer>

      <GlobalStyles />
    </>
  );
}

/* CONTACT FORM (Supabase, using Vite env) */
function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    description: "",
  });
  const [status, setStatus] = useState("idle"); // "idle" | "loading" | "success" | "error"
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.description) return;

    setStatus("loading");
    setErrorMsg("");

    try {
      const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
      const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

      if (!SUPABASE_URL || !SUPABASE_KEY) {
        throw new Error("Supabase env vars missing");
      }

      const res = await fetch(`${SUPABASE_URL}/rest/v1/contact_messages`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: SUPABASE_KEY,
          Authorization: `Bearer ${SUPABASE_KEY}`,
          Prefer: "return=representation",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          description: form.description,
          user_agent: window.navigator.userAgent || null,
        }),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "Failed to send");
      }

      setStatus("success");
      setForm({ name: "", email: "", description: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMsg(
        "Something went wrong. Please use email if this keeps happening."
      );
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label className="field">
        <span>Name</span>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your name"
          required
        />
      </label>
      <label className="field">
        <span>Email</span>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="you@example.com"
          required
        />
      </label>
      <label className="field">
        <span>What do you want to build?</span>
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Short description of your idea, project or question."
          rows={4}
          required
        />
      </label>

      <button
        className="btn btn-large"
        type="submit"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Sending..." : "Send message"}
      </button>

      {status === "success" && (
        <p className="tiny contact-success">
          Thank you. Message stored in the system.
        </p>
      )}
      {status === "error" && (
        <p className="tiny contact-error">{errorMsg}</p>
      )}
    </form>
  );
}

/* NAVBAR */
function SiteNav() {
  return (
    <header className="nav-wrap">
      <div className="shell">
        <div className="nav-inner">
          <a href="#top" className="logo">
            <span className="logo-mark">DZ</span>
            <span className="logo-text">Renzu</span>
          </a>

          <nav className="nav-links">
            <a href="#pillars">Pillars</a>
            <a href="#concepts">Concepts</a>
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
          </nav>

          <a href="#contact" className="btn nav-cta">
            Connect
          </a>
        </div>
      </div>
    </header>
  );
}

/* REVEAL ANIMATIONS */
function useRevealOnScroll(delay = 0) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    let timeoutId;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timeoutId = window.setTimeout(() => {
            el.classList.add("is-visible");
          }, delay * 1000);
          observer.unobserve(el);
        }
      },
      { threshold: 0.18 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, [delay]);

  return ref;
}

function Reveal({
  children,
  as: Tag = "div",
  variant = "up",
  delay = 0,
  className = "",
}) {
  const ref = useRevealOnScroll(delay);
  return (
    <Tag
      ref={ref}
      className={`reveal reveal-${variant} ${className}`.trim()}
    >
      {children}
    </Tag>
  );
}

/* BACKGROUND CUBES */
function AeroBackground() {
  const ref = useRef(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const isMobile = window.matchMedia?.("(max-width:900px)")?.matches || false;
    const n = isMobile ? 2 : 6;

    const mk = (cls, count) => {
      for (let i = 0; i < count; i++) {
        const el = document.createElement("span");
        el.className = cls;
        el.style.left = Math.random() * 100 + "vw";
        el.style.top = Math.random() * 100 + "vh";
        el.style.width = (isMobile ? 50 : 100) + "px";
        el.style.height = el.style.width;
        root.appendChild(el);
      }
    };

    mk("fx-cube", n);
    mk("fx-bokeh", n);

    return () => {
      while (root.firstChild) root.removeChild(root.firstChild);
    };
  }, []);

  return (
    <>
      <div id="fx-bg" ref={ref} />
      <style>{`
        #fx-bg{
          position:fixed;
          inset:0;
          z-index:0;
          pointer-events:none;
          overflow:hidden;
        }
        .fx-cube{
          position:absolute;
          border-radius:20px;
          background:#2de2ff44;
          box-shadow:0 8px 42px #85e4ff55;
        }
        .fx-bokeh{
          position:absolute;
          border-radius:50%;
          background:#3ffcf744;
          box-shadow:0 0 18px #fff6;
        }
      `}</style>
    </>
  );
}

/* GLOBAL STYLES */
function GlobalStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap');

      :root{
        --bg-start:#f6fbff;
        --bg-mid:#d6f2ff;
        --bg-end:#f3fcff;
        --ink:#020617;
        --card-border:#bce3fa;
        --accent:#2ad0ff;
        --accent-2:#57c4ff;
      }

      *{
        box-sizing:border-box;
      }

      body{
        margin:0;
        font-family:'Inter','Segoe UI',system-ui,-apple-system,BlinkMacSystemFont,sans-serif;
        color:var(--ink);
        background:radial-gradient(circle at top left,var(--bg-mid) 0%,var(--bg-start) 45%,var(--bg-end) 100%);
        overflow-x:hidden;
      }

      .page{
        position:relative;
        z-index:2;
        padding:18px 0 72px;
      }

      .shell{
        width:100%;
        max-width:1120px;
        margin:0 auto;
        padding:0 18px;
      }

      .section{
        position:relative;
        padding:52px 0;
      }

      .section-alt{
        background:radial-gradient(circle at top,#e0f2ff 0%,#f7fbff 40%,#edf5ff 100%);
      }

      /* NAVBAR */
      .nav-wrap{
        position:sticky;
        top:10px;
        z-index:20;
      }

      .nav-inner{
        display:flex;
        align-items:center;
        justify-content:space-between;
        gap:18px;
        padding:10px 18px;
        border-radius:999px;
        background:rgba(246,252,255,0.92);
        border:1px solid rgba(184,224,246,0.9);
        backdrop-filter:blur(18px);
        box-shadow:0 18px 40px rgba(160,208,240,0.35);
      }

      .logo{
        display:flex;
        align-items:center;
        gap:8px;
        text-decoration:none;
        color:inherit;
      }

      .logo-mark{
        width:30px;
        height:30px;
        border-radius:10px;
        background:linear-gradient(135deg,var(--accent),var(--accent-2));
        display:flex;
        align-items:center;
        justify-content:center;
        font-size:.9rem;
        font-weight:800;
        color:#fff;
      }

      .logo-text{
        font-weight:800;
        letter-spacing:.08em;
        font-size:.85rem;
        text-transform:uppercase;
      }

      .nav-links{
        display:flex;
        gap:14px;
        font-size:.86rem;
      }

      .nav-links a{
        text-decoration:none;
        color:#1e293b;
        padding:4px 8px;
        border-radius:999px;
        transition:background .18s ease, transform .18s ease;
      }

      .nav-links a:hover{
        background:rgba(192,231,255,0.9);
        transform:translateY(-1px);
      }

      .nav-cta{
        font-size:.86rem;
        padding:9px 18px;
      }

      /* HERO */
      .hero-section{
        padding-top:62px;
      }

      .hero-layout{
        display:grid;
        grid-template-columns:minmax(0,1.5fr) minmax(0,1fr);
        gap:32px;
        align-items:center;
      }

      .hero-copy{
        max-width:640px;
      }

      .eyebrow{
        font-size:.78rem;
        letter-spacing:.18em;
        text-transform:uppercase;
        color:#60a5fa;
        font-weight:700;
        margin:0 0 12px;
      }

      .hero-title{
        margin:0 0 14px;
        font-size:clamp(2.4rem,4.4vw,3.4rem);
        line-height:1.05;
        font-weight:800;
        background:linear-gradient(135deg,var(--accent) 0%, var(--accent-2) 50%, #e9f7ff 100%);
        -webkit-background-clip:text;
        background-clip:text;
        color:transparent;
      }

      .hero-lede{
        margin:0 0 18px;
        font-size:1rem;
        max-width:62ch;
      }

      .hero-goals{
        display:flex;
        flex-direction:column;
        gap:10px;
        margin-bottom:18px;
      }

      .hero-goal-label{
        font-size:.8rem;
        text-transform:uppercase;
        letter-spacing:.14em;
        color:#64748b;
        margin:0 0 3px;
      }

      .hero-goal{
        margin:0;
        font-size:.96rem;
      }

      .hero-pill-row{
        display:flex;
        flex-wrap:wrap;
        gap:8px;
        font-size:.8rem;
        text-transform:uppercase;
        letter-spacing:.12em;
        color:#64748b;
      }

      .hero-pill-row span{
        padding:5px 10px;
        border-radius:999px;
        border:1px solid #d2e9ff;
        background:#f3fbff;
      }

      .hero-cta-row{
        display:flex;
        flex-wrap:wrap;
        gap:10px;
      }

      .hero-visual{
        display:flex;
        flex-direction:column;
        gap:14px;
        align-items:center;
      }

      .hero-orbit{
        position:relative;
        width:260px;
        aspect-ratio:1/1;
        border-radius:50%;
        background:radial-gradient(circle at 20% 0,var(--accent-2),#0f172a);
        box-shadow:0 22px 60px rgba(15,23,42,0.7);
        border:1.5px solid rgba(148,197,255,0.9);
        display:flex;
        align-items:center;
        justify-content:center;
      }

      .hero-orbit-core{
        padding:10px 16px;
        border-radius:999px;
        background:#020617;
        color:#e5f3ff;
        font-size:.85rem;
        font-weight:700;
        letter-spacing:.08em;
        text-transform:uppercase;
      }

      .hero-orbit-pill{
        position:absolute;
        padding:6px 11px;
        border-radius:999px;
        background:rgba(15,23,42,0.9);
        color:#e5f3ff;
        font-size:.78rem;
        border:1px solid rgba(148,197,255,0.9);
        backdrop-filter:blur(14px);
      }

      .hero-orbit-pill--studio{
        top:16px;
        left:50%;
        transform:translateX(-50%);
      }

      .hero-orbit-pill--network{
        bottom:22px;
        left:14px;
      }

      .hero-orbit-pill--lab{
        bottom:22px;
        right:14px;
      }

      .hero-badges{
        display:flex;
        flex-wrap:wrap;
        gap:8px;
        justify-content:center;
        font-size:.78rem;
      }

      .hero-badge{
        padding:4px 10px;
        border-radius:999px;
        border:1px solid #c4e1ff;
        background:#f5fbff;
      }

      .section-header{
        max-width:760px;
        margin-bottom:26px;
      }

      .section-title{
        margin:0 0 10px;
        font-size:1.8rem;
      }

      .section-intro{
        margin:0;
        font-size:.96rem;
        max-width:60ch;
      }

      .small{
        font-size:.92rem;
        opacity:.95;
      }

      .tiny{
        font-size:.8rem;
        opacity:.9;
      }

      /* PILLARS */
      .pillars-grid{
        display:grid;
        grid-template-columns:repeat(3,minmax(0,1fr));
        gap:20px;
      }

      .pillar{
        border-radius:22px;
        padding:18px 18px 16px;
        background:#ffffffcc;
        border:1.5px solid #d3ebff;
        box-shadow:0 14px 40px rgba(179,223,255,0.6);
      }

      .pillar-label{
        font-size:.8rem;
        text-transform:uppercase;
        letter-spacing:.14em;
        margin:0 0 4px;
      }

      .pillar-studio .pillar-label{ color:#2563eb; }
      .pillar-network .pillar-label{ color:#0f766e; }
      .pillar-lab .pillar-label{ color:#7c3aed; }

      .pillar h3{
        margin:0 0 6px;
        font-size:1.02rem;
      }

      /* CONCEPTS */
      .concepts-grid{
        display:grid;
        grid-template-columns:repeat(3,minmax(0,1fr));
        gap:18px;
      }

      .concept-card{
        border-radius:20px;
        padding:14px 14px 12px;
        background:#ffffff;
        border:1.5px solid #d3ebff;
        box-shadow:0 10px 30px rgba(179,223,255,0.55);
      }

      .concept-accent{
        background:linear-gradient(135deg,#e0f4ff,#ffffff);
      }

      .concept-soft{
        background:linear-gradient(135deg,#f8f5ff,#ffffff);
      }

      .concept-name{
        font-size:.94rem;
        font-weight:600;
        margin:0 0 6px;
      }

      /* SERVICES */
      .services-layout{
        display:grid;
        grid-template-columns:minmax(0,1.2fr) minmax(0,1.2fr);
        gap:24px;
      }

      .services-col{
        display:flex;
        flex-direction:column;
        gap:10px;
      }

      .services-label{
        font-size:.8rem;
        text-transform:uppercase;
        letter-spacing:.12em;
        color:#64748b;
        margin:0 0 4px;
      }

      .service-card{
        border-radius:20px;
        padding:14px 14px 12px;
        background:#ffffff;
        border:1.5px solid #d3ebff;
        box-shadow:0 10px 28px rgba(179,223,255,0.55);
      }

      .service-card h3{
        margin:0 0 6px;
        font-size:1.02rem;
      }

      .service-accent{
        background:linear-gradient(135deg,#e0f4ff,#ffffff);
      }

      .service-soft{
        background:linear-gradient(135deg,#fdf5ff,#ffffff);
      }

      .fos-note{
        margin-top:26px;
      }

      .fos-card{
        border-radius:20px;
        padding:14px 14px 12px;
        background:#0f172a;
        color:#e5f3ff;
        border:1.5px solid #4f9bff;
        box-shadow:0 16px 40px rgba(15,23,42,0.75);
      }

      .fos-card h3{
        margin:0 0 6px;
        font-size:1.02rem;
      }

      /* PROJECTS */
      .projects-grid{
        display:grid;
        grid-template-columns:repeat(3,minmax(0,1fr));
        gap:18px;
      }

      .project-card{
        border-radius:20px;
        padding:14px 14px 12px;
        background:#ffffff;
        border:1.5px solid #d3ebff;
        box-shadow:0 10px 28px rgba(179,223,255,0.6);
      }

      .project-dark{
        background:linear-gradient(135deg,#020617,#0b1120);
        color:#e5f3ff;
        border-color:#4f9bff;
      }

      .project-soft{
        background:linear-gradient(135deg,#f9f5ff,#ffffff);
      }

      .project-tag{
        font-size:.8rem;
        text-transform:uppercase;
        letter-spacing:.14em;
        color:#60a5fa;
        margin:0 0 4px;
      }

      .project-dark .project-tag{
        color:#93c5fd;
      }

      .project-card h3{
        margin:0 0 6px;
        font-size:1.02rem;
      }

      /* CONTACT */
      .contact-layout{
        display:flex;
        flex-wrap:wrap;
        gap:24px;
        align-items:flex-start;
      }

      .contact-copy{
        flex:1.2;
        min-width:240px;
      }

      .contact-form{
        flex:1.2;
        min-width:260px;
        display:flex;
        flex-direction:column;
        gap:10px;
        padding:16px 16px 14px;
        border-radius:20px;
        background:#ffffff;
        border:1.5px solid #d3ebff;
        box-shadow:0 12px 34px rgba(179,223,255,0.65);
      }

      .field{
        display:flex;
        flex-direction:column;
        gap:4px;
        font-size:.86rem;
      }

      .field span{
        color:#4b5563;
      }

      .field input,
      .field textarea{
        padding:10px 11px;
        border-radius:10px;
        border:1.5px solid #cfe5ff;
        font:inherit;
        outline:none;
        background:#f9fcff;
      }

      .field textarea{
        resize:vertical;
      }

      .contact-success{
        color:#16a34a;
      }

      .contact-error{
        color:#b91c1c;
      }

      .btn{
        padding:12px 20px;
        border-radius:999px;
        background:#020617;
        color:#fff;
        font-weight:800;
        text-decoration:none;
        border:none;
        cursor:pointer;
        font-size:.9rem;
        display:inline-flex;
        align-items:center;
        justify-content:center;
        gap:6px;
        box-shadow:0 14px 35px rgba(15,23,42,0.45);
        transform:translateY(0);
        transition:transform .18s ease, box-shadow .18s ease, background .18s ease;
      }

      .btn:hover{
        transform:translateY(-1px);
        box-shadow:0 20px 45px rgba(15,23,42,0.55);
        background:#02040c;
      }

      .btn-large{
        padding:14px 24px;
      }

      .btn-outline{
        padding:11px 16px;
        border-radius:999px;
        border:1.5px solid #020617;
        color:#020617;
        font-weight:700;
        text-decoration:none;
        font-size:.86rem;
        background:transparent;
        transition:background .18s ease,color .18s ease,transform .18s ease;
        display:inline-flex;
        align-items:center;
        justify-content:center;
      }

      .btn-outline:hover{
        background:#020617;
        color:#fff;
        transform:translateY(-1px);
      }

      /* FOOTER */
      .legal-footer{
        display:flex;
        justify-content:center;
        margin:8px 0 40px;
      }

      .legal-buttons{
        display:flex;
        gap:10px;
      }

      /* REVEAL ANIMATION */
      .reveal{
        opacity:0;
        transform:translateY(20px);
        filter:blur(10px);
        transition:
          opacity .7s cubic-bezier(.21,.72,.21,1),
          transform .7s cubic-bezier(.21,.72,.21,1),
          filter .7s ease;
        will-change:opacity,transform,filter;
      }

      .reveal-left{
        transform:translateX(-32px);
      }
      .reveal-right{
        transform:translateX(32px);
      }

      .reveal.is-visible{
        opacity:1;
        transform:translate3d(0,0,0);
        filter:blur(0);
      }

      /* RESPONSIVE */
      @media(max-width:900px){
        .nav-links{ display:none; }
        .nav-inner{ border-radius:20px; }
        .hero-layout{ grid-template-columns:1fr; }
        .hero-visual{ margin-top:18px; }
        .pillars-grid{ grid-template-columns:1fr; }
        .concepts-grid{ grid-template-columns:1fr; }
        .services-layout{ grid-template-columns:1fr; }
        .projects-grid{ grid-template-columns:1fr; }
        .contact-layout{ flex-direction:column; }
      }
    `}</style>
  );
}

export default AffiliateSupport;
