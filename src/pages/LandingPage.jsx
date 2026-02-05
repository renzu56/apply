import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

// ✅ CHANGE THIS IMPORT PATH to YOUR existing supabase client file.
// Example paths people use:
//   import { supabase } from "../lib/supabaseClient";
//   import { supabase } from "../supabaseClient";
import { supabase } from "../supabaseClient";

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
                <p className="eyebrow">DZ RENZU · EVENT & LOYALTY SYSTEMS FOR SHOPS</p>
                <h1 className="hero-title">Event pages & loyalty mini-apps for local businesses.</h1>
                <p className="hero-lede">
                  We build event-based online experiences and task/reward loyalty flows for
                  fashion stores, restaurants, cafés, and spas — designed to drive visits,
                  redemptions, and repeat customers.
                </p>

                <div className="hero-goals">
                  <div>
                    <p className="hero-goal-label">What it does</p>
                    <p className="hero-goal">
                      Turn campaigns into a simple mobile flow: promote → participate → redeem →
                      return.
                    </p>
                  </div>
                  <div className="hero-pill-row">
                    <span>Events</span>
                    <span>Loyalty</span>
                    <span>Rewards</span>
                  </div>
                </div>

                <div className="hero-cta-row">
                  <a href="#services" className="btn">
                    See solutions
                  </a>
                  <a href="#contact" className="btn-outline">
                    Contact us
                  </a>
                </div>
              </div>

              {/* visual side */}
              <div className="hero-visual">
                <div className="hero-orbit">
                  <div className="hero-orbit-core">Shop Flow</div>
                  <div className="hero-orbit-pill hero-orbit-pill--studio">
                    Event Landing
                  </div>
                  <div className="hero-orbit-pill hero-orbit-pill--network">
                    Tasks & Streaks
                  </div>
                  <div className="hero-orbit-pill hero-orbit-pill--lab">
                    Rewards & Codes
                  </div>
                </div>
                <div className="hero-badges">
                  <span className="hero-badge">QR / Code Redeem</span>
                  <span className="hero-badge">Mobile first</span>
                  <span className="hero-badge">Fast launch</span>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* THREE PILLARS -> SOLUTIONS */}
        <section id="pillars" className="section">
          <div className="shell">
            <Reveal variant="up" className="section-header">
              <p className="eyebrow">CORE SYSTEM</p>
              <h2 className="section-title">Three parts that always work</h2>
              <p className="section-intro">
                Every shop campaign becomes a clean flow: a timed event, a loyalty loop, and
                a reward mechanism that customers understand instantly.
              </p>
            </Reveal>

            <div className="pillars-grid">
              <Reveal variant="up">
                <div className="pillar pillar-studio">
                  <p className="pillar-label">Events</p>
                  <h3>Timed campaigns that feel alive</h3>
                  <p className="small">
                    Drop pages, menu weeks, seasonal promos, “today only” offers — with
                    countdowns, clear CTAs and redemption built in.
                  </p>
                </div>
              </Reveal>

              <Reveal variant="up">
                <div className="pillar pillar-network">
                  <p className="pillar-label">Loyalty</p>
                  <h3>Tasks that create repeat visits</h3>
                  <p className="small">
                    Streaks, punch cards, missions (e.g. 3 visits → reward), referrals and
                    “bring a friend” flows.
                  </p>
                </div>
              </Reveal>

              <Reveal variant="up">
                <div className="pillar pillar-lab">
                  <p className="pillar-label">Rewards</p>
                  <h3>Redeem codes, unlock perks</h3>
                  <p className="small">
                    Discounts, freebies, VIP unlocks — delivered via code/QR redemption with
                    simple tracking.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* SIGNATURE CONCEPTS */}
        <section id="concepts" className="section section-alt">
          <div className="shell">
            <Reveal variant="up" className="section-header">
              <p className="eyebrow">CONCEPTS</p>
              <h2 className="section-title">Patterns we build for shops</h2>
            </Reveal>

            <div className="concepts-grid">
              <Reveal variant="up">
                <div className="concept-card concept-accent">
                  <p className="concept-name">Event Landing + Countdown</p>
                  <p className="small">
                    A campaign page with “live / upcoming”, clear CTA, and a timer that drives action.
                  </p>
                </div>
              </Reveal>

              <Reveal variant="up">
                <div className="concept-card">
                  <p className="concept-name">Code / QR Redemption</p>
                  <p className="small">
                    Customers redeem in seconds. Codes can be limited, timed, or tied to tasks.
                  </p>
                </div>
              </Reveal>

              <Reveal variant="up">
                <div className="concept-card">
                  <p className="concept-name">Punch Card Missions</p>
                  <p className="small">
                    “Buy 5 coffees → 6th free”, “3 lunch visits → dessert”, “2 treatments → upgrade”.
                  </p>
                </div>
              </Reveal>

              <Reveal variant="up">
                <div className="concept-card">
                  <p className="concept-name">Streaks & Weekly Challenges</p>
                  <p className="small">
                    Keep customers coming back with simple streak logic and weekly goals.
                  </p>
                </div>
              </Reveal>

              <Reveal variant="up">
                <div className="concept-card concept-soft">
                  <p className="concept-name">VIP Unlocks</p>
                  <p className="small">
                    Tiered rewards: bronze/silver/gold perks based on tasks, points, or redemption history.
                  </p>
                </div>
              </Reveal>

              <Reveal variant="up">
                <div className="concept-card concept-soft">
                  <p className="concept-name">Partner Drops</p>
                  <p className="small">
                    Co-branded campaigns (fashion x café, spa x restaurant) with shared rewards and tracking.
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
              <h2 className="section-title">What you can book</h2>
            </Reveal>

            <div className="services-layout">
              {/* BUILD SIDE */}
              <Reveal variant="left" className="services-col">
                <p className="services-label">Build</p>

                <div className="service-card service-accent">
                  <h3>🎉 Event mini-sites</h3>
                  <p className="small">
                    “Now live / next event” landing pages, countdowns, CTAs, and redemption flows.
                  </p>
                </div>

                <div className="service-card">
                  <h3>🎯 Loyalty task/reward flows</h3>
                  <p className="small">
                    Missions, streaks, punch cards, referrals, VIP tiers — simple UX, strong retention.
                  </p>
                </div>

                <div className="service-card">
                  <h3>🔑 Code / QR redemption systems</h3>
                  <p className="small">
                    Generate, redeem, limit, and track codes. Works for staff scanning or customer input.
                  </p>
                </div>

                <div className="service-card">
                  <h3>📊 Admin dashboard</h3>
                  <p className="small">
                    Manage events, rewards, and codes. See what’s working. Keep it lightweight.
                  </p>
                </div>
              </Reveal>

              {/* GROWTH SIDE */}
              <Reveal variant="right" className="services-col">
                <p className="services-label">Campaign</p>

                <div className="service-card">
                  <h3>🧠 Campaign structure</h3>
                  <p className="small">
                    Offer design, reward math, timing, and a plan that fits your shop’s reality.
                  </p>
                </div>

                <div className="service-card">
                  <h3>📲 Shop-ready content prompts</h3>
                  <p className="small">
                    Social formats and posting rhythm to drive people into the event/loyalty flow.
                  </p>
                </div>

                <div className="service-card">
                  <h3>⚙️ Integrations</h3>
                  <p className="small">
                    Track results and connect to your tools (newsletter, CRM, booking links, etc.).
                  </p>
                </div>

                <div className="service-card service-soft">
                  <h3>🤝 Multi-shop concepts</h3>
                  <p className="small">
                    City drops, partner rewards, collab campaigns — shared incentives across shops.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* USE CASES (was PROJECTS) */}
        <section id="projects" className="section section-alt">
          <div className="shell">
            <Reveal variant="up" className="section-header">
              <p className="eyebrow">USE CASES</p>
              <h2 className="section-title">Examples for different shop types</h2>
            </Reveal>

            <div className="projects-grid">
              <Reveal variant="up">
                <article className="project-card project-dark">
                  <p className="project-tag">FASHION</p>
                  <h3>Drop weekend + VIP unlock</h3>
                  <p className="small">
                    Timed landing page + redeem code for early access; repeat visits unlock VIP perks.
                  </p>
                </article>
              </Reveal>

              <Reveal variant="up">
                <article className="project-card">
                  <p className="project-tag">RESTAURANT</p>
                  <h3>Menu week stamp mission</h3>
                  <p className="small">
                    3 visits during campaign → dessert code. Optional “bring a friend” bonus.
                  </p>
                </article>
              </Reveal>

              <Reveal variant="up">
                <article className="project-card">
                  <p className="project-tag">CAFÉ</p>
                  <h3>Streak rewards</h3>
                  <p className="small">
                    Visit streaks (2x / 4x / 6x) unlock escalating rewards and keep people returning.
                  </p>
                </article>
              </Reveal>

              <Reveal variant="up">
                <article className="project-card project-soft">
                  <p className="project-tag">SPA</p>
                  <h3>Challenge: 2 sessions → upgrade</h3>
                  <p className="small">
                    Simple task ladder that nudges bookings and creates predictable return behavior.
                  </p>
                </article>
              </Reveal>

              <Reveal variant="up">
                <article className="project-card">
                  <p className="project-tag">MULTI-SHOP</p>
                  <h3>Partner campaign</h3>
                  <p className="small">
                    Fashion x café collab: redeem across both shops, shared incentive, shared tracking.
                  </p>
                </article>
              </Reveal>

              <Reveal variant="up">
                <article className="project-card">
                  <p className="project-tag">LOYALTY</p>
                  <h3>Tiered VIP access</h3>
                  <p className="small">
                    Bronze/Silver/Gold perks based on tasks completed — simple, addictive, clear.
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
                <h2 className="section-title">Let’s build your shop flow</h2>
                <p className="section-intro">
                  Tell us your shop type, what you want to run (event or loyalty), and what a “win” looks like
                  (more visits, more bookings, more redemptions).
                </p>

                <p className="tiny">
                  Or write directly:{" "}
                  <a href="mailto:lennardfeist@gmail.com">lennardfeist@gmail.com</a>
                </p>
              </div>

              <ContactForm />
            </Reveal>
          </div>
        </section>
      </main>

      {/* Footer: includes a direct contact anchor + mail (the “item down under”) */}
      <footer className="legal-footer">
        <div className="legal-buttons">
          <a className="btn-outline tiny" href="#contact">
            Contact
          </a>
          <a className="btn-outline tiny" href="mailto:lennardfeist@gmail.com">
            Email
          </a>
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

/* CONTACT FORM (Supabase insert -> contact_messages) */
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
      // ✅ Inserts exactly matching your table columns
      const { error } = await supabase.from("contact_messages").insert({
        name: form.name,
        email: form.email,
        description: form.description,
        user_agent: window.navigator.userAgent || null,
      });

      if (error) throw error;

      setStatus("success");
      setForm({ name: "", email: "", description: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMsg("Something went wrong. Please use email if this keeps happening.");
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
          placeholder="you@shop.com"
          required
        />
      </label>

      <label className="field">
        <span>What do you want to run?</span>
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Example: 10-day café campaign with redeem codes + a 3-visit reward mission. Goal: +20% repeat visits."
          rows={4}
          required
        />
      </label>

      <button className="btn btn-large" type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Sending..." : "Send message"}
      </button>

      {status === "success" && (
        <p className="tiny contact-success">Thanks — message saved. We’ll reply by email.</p>
      )}
      {status === "error" && <p className="tiny contact-error">{errorMsg}</p>}
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
            <a href="#pillars">Solutions</a>
            <a href="#concepts">Concepts</a>
            <a href="#services">Services</a>
            <a href="#projects">Use cases</a>
          </nav>

          <a href="#contact" className="btn nav-cta">
            Contact
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

function Reveal({ children, as: Tag = "div", variant = "up", delay = 0, className = "" }) {
  const ref = useRevealOnScroll(delay);
  return (
    <Tag ref={ref} className={`reveal reveal-${variant} ${className}`.trim()}>
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

/* GLOBAL STYLES (unchanged) */
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

      *{ box-sizing:border-box; }

      body{
        margin:0;
        font-family:'Inter','Segoe UI',system-ui,-apple-system,BlinkMacSystemFont,sans-serif;
        color:var(--ink);
        background:radial-gradient(circle at top left,var(--bg-mid) 0%,var(--bg-start) 45%,var(--bg-end) 100%);
        overflow-x:hidden;
      }

      .page{ position:relative; z-index:2; padding:18px 0 72px; }
      .shell{ width:100%; max-width:1120px; margin:0 auto; padding:0 18px; }
      .section{ position:relative; padding:52px 0; }
      .section-alt{ background:radial-gradient(circle at top,#e0f2ff 0%,#f7fbff 40%,#edf5ff 100%); }

      .nav-wrap{ position:sticky; top:10px; z-index:20; }
      .nav-inner{
        display:flex; align-items:center; justify-content:space-between; gap:18px;
        padding:10px 18px; border-radius:999px; background:rgba(246,252,255,0.92);
        border:1px solid rgba(184,224,246,0.9); backdrop-filter:blur(18px);
        box-shadow:0 18px 40px rgba(160,208,240,0.35);
      }
      .logo{ display:flex; align-items:center; gap:8px; text-decoration:none; color:inherit; }
      .logo-mark{
        width:30px; height:30px; border-radius:10px;
        background:linear-gradient(135deg,var(--accent),var(--accent-2));
        display:flex; align-items:center; justify-content:center;
        font-size:.9rem; font-weight:800; color:#fff;
      }
      .logo-text{ font-weight:800; letter-spacing:.08em; font-size:.85rem; text-transform:uppercase; }

      .nav-links{ display:flex; gap:14px; font-size:.86rem; }
      .nav-links a{
        text-decoration:none; color:#1e293b; padding:4px 8px;
        border-radius:999px; transition:background .18s ease, transform .18s ease;
      }
      .nav-links a:hover{ background:rgba(192,231,255,0.9); transform:translateY(-1px); }
      .nav-cta{ font-size:.86rem; padding:9px 18px; }

      .hero-section{ padding-top:62px; }
      .hero-layout{ display:grid; grid-template-columns:minmax(0,1.5fr) minmax(0,1fr); gap:32px; align-items:center; }
      .hero-copy{ max-width:640px; }

      .eyebrow{
        font-size:.78rem; letter-spacing:.18em; text-transform:uppercase;
        color:#60a5fa; font-weight:700; margin:0 0 12px;
      }
      .hero-title{
        margin:0 0 14px; font-size:clamp(2.4rem,4.4vw,3.4rem); line-height:1.05; font-weight:800;
        background:linear-gradient(135deg,var(--accent) 0%, var(--accent-2) 50%, #e9f7ff 100%);
        -webkit-background-clip:text; background-clip:text; color:transparent;
      }
      .hero-lede{ margin:0 0 18px; font-size:1rem; max-width:62ch; }
      .hero-goals{ display:flex; flex-direction:column; gap:10px; margin-bottom:18px; }
      .hero-goal-label{
        font-size:.8rem; text-transform:uppercase; letter-spacing:.14em; color:#64748b;
        margin:0 0 3px;
      }
      .hero-goal{ margin:0; font-size:.96rem; }
      .hero-pill-row{
        display:flex; flex-wrap:wrap; gap:8px; font-size:.8rem;
        text-transform:uppercase; letter-spacing:.12em; color:#64748b;
      }
      .hero-pill-row span{ padding:5px 10px; border-radius:999px; border:1px solid #d2e9ff; background:#f3fbff; }

      .hero-cta-row{ display:flex; flex-wrap:wrap; gap:10px; }

      .hero-visual{ display:flex; flex-direction:column; gap:14px; align-items:center; }
      .hero-orbit{
        position:relative; width:260px; aspect-ratio:1/1; border-radius:50%;
        background:radial-gradient(circle at 20% 0,var(--accent-2),#0f172a);
        box-shadow:0 22px 60px rgba(15,23,42,0.7);
        border:1.5px solid rgba(148,197,255,0.9);
        display:flex; align-items:center; justify-content:center;
      }
      .hero-orbit-core{
        padding:10px 16px; border-radius:999px; background:#020617; color:#e5f3ff;
        font-size:.85rem; font-weight:700; letter-spacing:.08em; text-transform:uppercase;
      }
      .hero-orbit-pill{
        position:absolute; padding:6px 11px; border-radius:999px; background:rgba(15,23,42,0.9);
        color:#e5f3ff; font-size:.78rem; border:1px solid rgba(148,197,255,0.9); backdrop-filter:blur(14px);
      }
      .hero-orbit-pill--studio{ top:16px; left:50%; transform:translateX(-50%); }
      .hero-orbit-pill--network{ bottom:22px; left:14px; }
      .hero-orbit-pill--lab{ bottom:22px; right:14px; }

      .hero-badges{ display:flex; flex-wrap:wrap; gap:8px; justify-content:center; font-size:.78rem; }
      .hero-badge{ padding:4px 10px; border-radius:999px; border:1px solid #c4e1ff; background:#f5fbff; }

      .section-header{ max-width:760px; margin-bottom:26px; }
      .section-title{ margin:0 0 10px; font-size:1.8rem; }
      .section-intro{ margin:0; font-size:.96rem; max-width:60ch; }

      .small{ font-size:.92rem; opacity:.95; }
      .tiny{ font-size:.8rem; opacity:.9; }

      .pillars-grid{ display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:20px; }
      .pillar{
        border-radius:22px; padding:18px 18px 16px; background:#ffffffcc;
        border:1.5px solid #d3ebff; box-shadow:0 14px 40px rgba(179,223,255,0.6);
      }
      .pillar-label{ font-size:.8rem; text-transform:uppercase; letter-spacing:.14em; margin:0 0 4px; }
      .pillar-studio .pillar-label{ color:#2563eb; }
      .pillar-network .pillar-label{ color:#0f766e; }
      .pillar-lab .pillar-label{ color:#7c3aed; }
      .pillar h3{ margin:0 0 6px; font-size:1.02rem; }

      .concepts-grid{ display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:18px; }
      .concept-card{
        border-radius:20px; padding:14px 14px 12px; background:#ffffff;
        border:1.5px solid #d3ebff; box-shadow:0 10px 30px rgba(179,223,255,0.55);
      }
      .concept-accent{ background:linear-gradient(135deg,#e0f4ff,#ffffff); }
      .concept-soft{ background:linear-gradient(135deg,#f8f5ff,#ffffff); }
      .concept-name{ font-size:.94rem; font-weight:600; margin:0 0 6px; }

      .services-layout{ display:grid; grid-template-columns:minmax(0,1.2fr) minmax(0,1.2fr); gap:24px; }
      .services-col{ display:flex; flex-direction:column; gap:10px; }
      .services-label{ font-size:.8rem; text-transform:uppercase; letter-spacing:.12em; color:#64748b; margin:0 0 4px; }
      .service-card{
        border-radius:20px; padding:14px 14px 12px; background:#ffffff;
        border:1.5px solid #d3ebff; box-shadow:0 10px 28px rgba(179,223,255,0.55);
      }
      .service-card h3{ margin:0 0 6px; font-size:1.02rem; }
      .service-accent{ background:linear-gradient(135deg,#e0f4ff,#ffffff); }
      .service-soft{ background:linear-gradient(135deg,#fdf5ff,#ffffff); }

      .projects-grid{ display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:18px; }
      .project-card{
        border-radius:20px; padding:14px 14px 12px; background:#ffffff;
        border:1.5px solid #d3ebff; box-shadow:0 10px 28px rgba(179,223,255,0.6);
      }
      .project-dark{
        background:linear-gradient(135deg,#020617,#0b1120);
        color:#e5f3ff; border-color:#4f9bff;
      }
      .project-soft{ background:linear-gradient(135deg,#f9f5ff,#ffffff); }
      .project-tag{
        font-size:.8rem; text-transform:uppercase; letter-spacing:.14em;
        color:#60a5fa; margin:0 0 4px;
      }
      .project-dark .project-tag{ color:#93c5fd; }
      .project-card h3{ margin:0 0 6px; font-size:1.02rem; }

      .contact-layout{ display:flex; flex-wrap:wrap; gap:24px; align-items:flex-start; }
      .contact-copy{ flex:1.2; min-width:240px; }
      .contact-form{
        flex:1.2; min-width:260px; display:flex; flex-direction:column; gap:10px;
        padding:16px 16px 14px; border-radius:20px; background:#ffffff;
        border:1.5px solid #d3ebff; box-shadow:0 12px 34px rgba(179,223,255,0.65);
      }
      .field{ display:flex; flex-direction:column; gap:4px; font-size:.86rem; }
      .field span{ color:#4b5563; }
      .field input, .field textarea{
        padding:10px 11px; border-radius:10px; border:1.5px solid #cfe5ff;
        font:inherit; outline:none; background:#f9fcff;
      }
      .field textarea{ resize:vertical; }

      .contact-success{ color:#16a34a; }
      .contact-error{ color:#b91c1c; }

      .btn{
        padding:12px 20px; border-radius:999px; background:#020617; color:#fff;
        font-weight:800; text-decoration:none; border:none; cursor:pointer; font-size:.9rem;
        display:inline-flex; align-items:center; justify-content:center; gap:6px;
        box-shadow:0 14px 35px rgba(15,23,42,0.45);
        transform:translateY(0);
        transition:transform .18s ease, box-shadow .18s ease, background .18s ease;
      }
      .btn:hover{ transform:translateY(-1px); box-shadow:0 20px 45px rgba(15,23,42,0.55); background:#02040c; }
      .btn-large{ padding:14px 24px; }
      .btn-outline{
        padding:11px 16px; border-radius:999px; border:1.5px solid #020617;
        color:#020617; font-weight:700; text-decoration:none; font-size:.86rem;
        background:transparent;
        transition:background .18s ease,color .18s ease,transform .18s ease;
        display:inline-flex; align-items:center; justify-content:center;
      }
      .btn-outline:hover{ background:#020617; color:#fff; transform:translateY(-1px); }

      .legal-footer{ display:flex; justify-content:center; margin:8px 0 40px; }
      .legal-buttons{ display:flex; gap:10px; flex-wrap:wrap; justify-content:center; }

      .reveal{
        opacity:0; transform:translateY(20px); filter:blur(10px);
        transition: opacity .7s cubic-bezier(.21,.72,.21,1),
                    transform .7s cubic-bezier(.21,.72,.21,1),
                    filter .7s ease;
        will-change:opacity,transform,filter;
      }
      .reveal-left{ transform:translateX(-32px); }
      .reveal-right{ transform:translateX(32px); }
      .reveal.is-visible{ opacity:1; transform:translate3d(0,0,0); filter:blur(0); }

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
