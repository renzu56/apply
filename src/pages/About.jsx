// src/pages/About.jsx
import { useEffect, useMemo, useRef, useState } from "react";

export default function About() {
  const heroImageSrc = "/dzrenzu.jpg"; // public/dzrenzu.jpg, change if needed

  const experiences = useMemo(
    () => [
      {
        title: "DZ Renzu, Web Presence for Brands and Businesses",
        img: "/image.png",
        desc:
          "High-performance websites designed to convert, built for brands, shops, restaurants, and service providers.",
      },
      {
        title: "Shop and Product Experiences",
        img: "/blanko.png",
        desc:
          "E-commerce builds and optimizations, fast pages, clean UX, conversion-focused flows from landing to checkout.",
      },
      {
        title: "Custom Web Apps and Software",
        img: "/frufru.png",
        desc:
          "Tailored web apps and integrations that simplify operations, dashboards, automations, booking systems, and more.",
      },
      {
        title: "Campaign Drops and Interactive Builds",
        img: "/armada.jpg",
        desc:
          "Limited-time launches with gamified mechanics, sponsor tie-ins, galleries, interactive experiences.",
      },
      {
        title: "UGC and Creator Connections",
        noImg: true,
        desc:
          "Connecting brands with creators for authentic UGC, content pipelines, coordination, scalable delivery.",
      },
    ],
    []
  );

  return (
    <>
      <AeroBackground />

      <main className="page">
        {/* HERO */}
        <section className="hero container">
          <div className="hero-left">
            <h1 className="title">
              <span className="label">ABOUT:</span>
              <span className="name">DZ RENZU</span>
            </h1>
            <p className="subtitle">
              Digital studio for websites, web apps, online presence, built to deliver measurable results.
            </p>
          </div>

          <div className="hero-right">
            <div className="hero-image-wrap">
              <img src={heroImageSrc} alt="DZ Renzu studio visual" />
              <div className="img-glow" />
            </div>
          </div>
        </section>

        {/* EXPERIENCES SLIDER */}
        <section className="container experiences">
          <header className="section-head">
            <h2>Selected Work, Experience</h2>
            <p className="muted">Swipe to explore</p>
          </header>
          <CubeCarousel items={experiences} />
        </section>

        {/* SERVICES */}
        <section className="container what-i-do">
          <header className="section-head">
            <h2>Services</h2>
          </header>

          <div className="tri-grid">
            <div className="card editable" suppressContentEditableWarning>
              <h3>Special Drop Development 🎁</h3>
              <p>
                Limited-time sites, software with gamified mechanics (e.g., Arcade Box to win pre-order codes),
                sponsor tie-ins, galleries, exclusive items (stickers, music playlists, NFTs).
              </p>
            </div>

            <div className="card editable" suppressContentEditableWarning>
              <h3>Portfolio Building for Your Brand 💼</h3>
              <p>
                Make your brand structured, outstanding, lucrative for sponsors, and eye-catching for customers.
              </p>
            </div>

            <div className="card editable" suppressContentEditableWarning>
              <h3>Social Media Management and Creation 👨‍💼</h3>
              <p>
                Content creation, posting across platforms, ongoing management, consistent growth, algorithm-fit.
              </p>
            </div>

            <div className="card editable" suppressContentEditableWarning>
              <h3>AI for Your Brand ֎</h3>
              <p>
                Chat assistants, content copilots, ops automations wired into your tools, practical AI that ships and drives results.
              </p>
            </div>

            <div className="card editable" suppressContentEditableWarning>
              <h3>Designification of Store and Brand 🎨</h3>
              <p>
                Typography, color tokens, UX/UI polish for product, checkout, navigation, micro-interactions that feel premium and boost trust.
              </p>
            </div>

            <div className="card editable" suppressContentEditableWarning>
              <h3>Cult Manager 🌎</h3>
              <p>
                Build the world of your brand, guidelines, structure, community systems that turn customers into fans.
              </p>
            </div>

            <div className="card editable" suppressContentEditableWarning>
              <h3>Web and App Development 🌐📱</h3>
              <p>
                Modern websites, web apps, mobile-ready experiences, fast, responsive, built with scalable architecture.
              </p>
            </div>

            <div className="card editable" suppressContentEditableWarning>
              <h3>Personalized Customer Experience ✨</h3>
              <p>
                Personalized flows, funnels, on-site experiences, segmentation, smart content, UX built around your customers.
              </p>
            </div>

            <div className="card editable" suppressContentEditableWarning>
              <h3>UGC Network and Creator Connections 🎥</h3>
              <p>
                Access to a creator network for UGC, matching, coordination, content direction, delivery pipelines for brands.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* PAGE CSS */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap');

        :root{
          --bg-start:#f6fbff; --bg-mid:#d6f2ff; --bg-end:#f3fcff;
          --ink:#234; --muted:#7cb8e5;
          --card-start:#fafdff; --card-end:#ecf7fc; --card-border:#bce3fa;
          --accent:#2ad0ff; --accent-2:#57c4ff; --accent-3:#11adff;
        }
        *{ box-sizing:border-box }
        body{
          margin:0; font-family:'Inter','Segoe UI',Arial,sans-serif; color:var(--ink);
          background:linear-gradient(140deg,var(--bg-start) 0%,var(--bg-mid) 50%,var(--bg-end) 100%);
          overflow-x:hidden;
        }
        body::after{ content:none; }

        .page{ position:relative; z-index:2; padding:28px 16px 72px }
        .container{
          max-width:1100px; margin:28px auto; padding:34px 28px; border-radius:32px;
          background:linear-gradient(120deg, var(--card-start) 75%, var(--card-end) 100%);
          box-shadow:0 8px 40px 8px #beeaff2c, 0 2px 24px #b0e4ff20;
          border:1.5px solid #b7e2fd7a;
        }
        .section-head{ display:flex; align-items:baseline; gap:14px; margin-bottom:18px }
        .section-head h2{ margin:0; font-size:1.35rem; color:#1596c5; letter-spacing:.02em }
        .muted{ color:var(--muted); font-weight:600; font-size:.95rem }

        /* HERO */
        .hero{ display:grid; grid-template-columns:1.3fr .9fr; gap:22px; align-items:center }
        .title{ margin:0 0 6px 0; line-height:1.06 }
        .title .label{ display:block; font-size:1rem; color:#6bbdf4; letter-spacing:.18em; font-weight:800; text-shadow:0 2px 12px #b6e9ff88 }
        .title .name{
          display:block; font-size:clamp(2.4rem,6vw,4.4rem); font-weight:800;
          background:linear-gradient(135deg,var(--accent) 0%, var(--accent-2) 55%, #e9f7ff 100%);
          -webkit-background-clip:text; background-clip:text; color:transparent; text-shadow:0 6px 26px #55cdfd66;
        }
        .subtitle{ margin:6px 0 0 0; color:#2993c7; font-weight:700 }
        .hero-right{ display:flex; justify-content:center }
        .hero-image-wrap{
          position:relative; width:min(360px,42vw); aspect-ratio:1/1; border-radius:28px;
          background:linear-gradient(145deg,#e6f7ff 40%,#e7fcff 100%);
          border:2.5px dashed var(--card-border); overflow:hidden; box-shadow:0 12px 48px #31c7ff22
        }
        .hero-image-wrap img{ width:100%; height:100%; object-fit:cover; display:block; filter:saturate(1.05) }
        .img-glow{
          position:absolute; inset:auto -18% -18% -18%; height:60%; border-radius:40px; filter:blur(28px); opacity:.55;
          background:radial-gradient(circle at 50% 0, #a6f1ff 0%, #24c2ff 80%)
        }
        @media (max-width:900px){
          .hero{ grid-template-columns:1fr; gap:16px }
          .hero-right{ order:-1 }
          .title .name{ font-size: clamp(2rem, 9vw, 3.2rem) }
          .hero-image-wrap{ width:min(86vw,520px); border-radius:22px; border-width:2px }
          .container{ padding:18px 14px; border-radius:20px }
          .section-head h2{ font-size:1.15rem }
        }

        /* SERVICES GRID */
        .tri-grid{ display:grid; gap:18px; grid-template-columns:repeat(3,1fr) }
        .card{ background:linear-gradient(120deg,#eafdff 60%,#caeaff 100%); border:2px solid #bceafd; border-radius:18px; padding:18px; box-shadow:0 3px 16px #b7eafd1a }
        .editable{ outline:none }
        .editable:focus{ box-shadow:0 0 0 3px #53e2ff66 }
        @media (max-width:900px){
          .tri-grid{ grid-template-columns:1fr; gap:14px }
          .card{ padding:14px; border-radius:16px }
        }

        /* PHONE FIXES */
        @media (max-width: 900px), (pointer: coarse) {
          .controls { display: none !important; }
          .container { padding: 16px 12px !important; border-radius: 18px !important; }
          .experiences .viewport { padding: 4px 0 !important; }
          .experiences .track {
            --card: min(64vw, 300px) !important;
            --gap: 8px !important;
          }
          .experiences .cube-card {
            border-radius: 14px !important;
            box-shadow: 0 6px 20px #00000012 !important;
            transform: none !important;
            opacity: 1 !important;
            filter: none !important;
          }
          .experiences .cube-card.left,
          .experiences .cube-card.right {
            transform: scale(.98) !important;
            opacity: .92 !important;
          }
          .experiences .cube-card .img-wrap { height: min(36vw, 180px) !important; }
          .experiences .cube-card h3 { font-size: .92rem !important; }
          .experiences .cube-card p  { font-size: .86rem !important; }
        }

        body::after { content: none !important; }
      `}</style>
    </>
  );
}

/* ========= Carousel ========= */
function CubeCarousel({ items }) {
  const [index, setIndex] = useState(0);
  const wrapRef = useRef(null);
  const liveRef = useRef(null);
  const clamp = (v) => (v + items.length) % items.length;

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!wrapRef.current) return;
    let startX = 0;
    let down = false;

    const onDown = (e) => {
      down = true;
      startX = e.touches ? e.touches[0].clientX : e.clientX;
    };
    const onMove = (e) => {
      if (!down) return;
      const x = e.touches ? e.touches[0].clientX : e.clientX;
      const dx = x - startX;
      if (Math.abs(dx) > 48) {
        dx < 0 ? next() : prev();
        down = false;
      }
    };
    const onUp = () => (down = false);

    const el = wrapRef.current;
    el.addEventListener("mousedown", onDown);
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseup", onUp);
    el.addEventListener("mouseleave", onUp);
    el.addEventListener("touchstart", onDown, { passive: true });
    el.addEventListener("touchmove", onMove, { passive: true });
    el.addEventListener("touchend", onUp);

    return () => {
      el.removeEventListener("mousedown", onDown);
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseup", onUp);
      el.removeEventListener("mouseleave", onUp);
      el.removeEventListener("touchstart", onDown);
      el.removeEventListener("touchmove", onMove);
      el.removeEventListener("touchend", onUp);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  const next = () => setIndex((i) => clamp(i + 1));
  const prev = () => setIndex((i) => clamp(i - 1));

  useEffect(() => {
    if (liveRef.current) liveRef.current.textContent = `${items[index].title}`;
  }, [index, items]);

  return (
    <div className="carousel-root">
      <div className="controls">
        <button className="nav" aria-label="Previous" onClick={prev}>
          <ArrowLeft />
        </button>
        <button className="nav" aria-label="Next" onClick={next}>
          <ArrowRight />
        </button>
      </div>

      <div className="viewport" ref={wrapRef}>
        <ul className="track" style={{ ["--i"]: index }}>
          {items.map((it, i) => {
            const offset = (i - index + items.length) % items.length;
            const isCenter = i === index;
            const isLeft = offset === items.length - 1;
            const isRight = offset === 1;

            const showImg = !!it.img && !it.noImg;

            return (
              <li
                key={i}
                className={
                  "cube-card" +
                  (isCenter ? " center" : "") +
                  (isLeft ? " left" : "") +
                  (isRight ? " right" : "") +
                  (!showImg ? " no-img" : "")
                }
                onClick={() => setIndex(i)}
              >
                {showImg && (
                  <div className="img-wrap">
                    <img src={it.img} alt={it.title} />
                  </div>
                )}

                <div className="info">
                  <h3>{it.title}</h3>
                  <p>{it.desc}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="sr" aria-live="polite" aria-atomic="true" ref={liveRef} />

      <style>{`
        .carousel-root{ position:relative }
        .controls{ position:absolute; inset:auto 10px -22px auto; display:flex; gap:12px }
        .nav{
          display:inline-flex; align-items:center; justify-content:center; width:46px; height:46px; border-radius:12px; border:none; cursor:pointer; font-size:18px;
          background:linear-gradient(130deg,#32cfff 60%,#6ee0ff 100%); color:#fff; box-shadow:0 6px 22px #55cdfd66
        }
        .nav:hover{ filter:brightness(1.06) }

        .viewport{ position:relative; overflow:hidden; padding:10px 6px }
        .track{
          --card: 310px; --gap: 22px;
          display:grid; grid-auto-flow:column; grid-auto-columns:var(--card); gap:var(--gap);
          transform:translateX(calc( 50% - var(--card)/2 - (var(--i) * (var(--card) + var(--gap))) ));
          transition:transform .65s cubic-bezier(.45,0,.16,1); will-change:transform; padding:10px 8px;
        }

        .cube-card{
          list-style:none; background:linear-gradient(120deg,#fafdff 75%,#ecf7fc 100%); border:2px solid #bce3fa; border-radius:26px; overflow:hidden;
          box-shadow:0 10px 44px #beeaff2c, 0 2px 24px #b0e4ff20; cursor:pointer; transform-style:preserve-3d; position:relative;
          transition: transform .55s cubic-bezier(.32,0,.22,1), box-shadow .4s, filter .35s, opacity .35s;
          opacity:.66; filter:grayscale(.12) brightness(.96); transform:perspective(1200px) translateZ(-60px) rotateY(-8deg);
          display:flex; flex-direction:column;
        }
        .cube-card.right{ transform:perspective(1200px) translateZ(-60px) rotateY(8deg) }
        .cube-card.center{
          opacity:1; filter:none; transform:perspective(1200px) translateZ(0) rotateY(0) scale(1.04); box-shadow:0 16px 60px #55cdfd55;
        }

        .cube-card .img-wrap{ height:180px; overflow:hidden; position:relative }
        .cube-card img{ width:100%; height:100%; object-fit:cover; display:block; filter:saturate(1.03) }
        .cube-card .info{ padding:14px 14px 18px }
        .cube-card h3{ margin:2px 0 8px 0; font-size:1.05rem; color:#1596c5 }
        .cube-card p{ margin:0; color:#33566e }

        /* Text-only cards */
        .cube-card.no-img{ justify-content:center; }
        .cube-card.no-img .info{ padding:22px 16px 22px; }
        .cube-card.no-img h3{ font-size:1.12rem; }
        .cube-card.no-img p{ margin-top:10px; }

        @media (max-width:900px){
          .viewport{ padding:6px 0 44px; }
          .track{ --card: 72vw; --gap: 10px; }
          .cube-card{
            border-radius:16px; box-shadow:0 8px 28px #55cdfd33;
            opacity:.92; filter:none; transform:perspective(1000px) translateZ(0) rotateY(0);
          }
          .cube-card.left, .cube-card.right{
            transform:perspective(1000px) translateZ(-8px) rotateY(0) scale(.98); opacity:.88;
          }
          .cube-card .img-wrap{ height: min(42vw, 220px); }
          .cube-card h3{ font-size:.95rem; }
          .cube-card p{ font-size:.9rem; }

          .cube-card.no-img .info{ padding:18px 14px 18px; }
        }
        @media (max-width:420px){
          .track{ --card: 86vw; --gap: 10px; }
          .cube-card .img-wrap{ height: min(50vw, 210px); }
        }

        .sr{ position:absolute; left:-9999px; top:auto; width:1px; height:1px; overflow:hidden }
      `}</style>
    </div>
  );
}

/* ========= Background FX ========= */
function AeroBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const prefersReduced =
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches || false;
    const isMobile = window.matchMedia?.("(max-width: 900px)").matches || false;

    const cubeCount = prefersReduced ? 0 : isMobile ? 2 : 6;
    const bokehCount = prefersReduced ? 0 : isMobile ? 2 : 6;

    const make = (cls, count) => {
      for (let i = 0; i < count; i++) {
        const el = document.createElement("span");
        el.className =
          cls + (Math.random() > 0.66 ? " teal" : Math.random() > 0.5 ? " green" : "");
        const base = cls.includes("bokeh") ? 90 + Math.random() * 140 : 36 + Math.random() * 90;
        const size = isMobile ? base * 0.55 : base;
        el.style.width = size + "px";
        el.style.height = size + (cls.includes("cube") ? 0.6 * size : size) + "px";
        el.style.left = Math.round(Math.random() * 100) + "vw";
        el.style.top = Math.round(Math.random() * 100) + "vh";
        el.style.animationDelay = (Math.random() * 4).toFixed(2) + "s";
        el.style.opacity = (0.14 + Math.random() * 0.28).toFixed(2);
        root.appendChild(el);
      }
    };

    make("fx-cube", cubeCount);
    make("fx-bokeh", bokehCount);

    return () => {
      while (root.firstChild) root.removeChild(root.firstChild);
    };
  }, []);

  return (
    <>
      <div id="fx-bg-cubes" ref={containerRef} aria-hidden />
      <div id="fx-glass-overlay" aria-hidden />

      <style>{`
        #fx-bg-cubes{ position:fixed; inset:0; width:100vw; height:100vh; z-index:0; pointer-events:none; overflow:hidden }
        #fx-glass-overlay{
          position:fixed; inset:0; pointer-events:none;
          background:linear-gradient(135deg,#eefcffef 0%,#d9f3ff55 60%,#a7f3ff22 100%);
          mix-blend-mode:lighten; opacity:.08; z-index:1
        }

        .fx-cube{
          position:absolute; border-radius:20px; box-shadow:0 8px 42px #85e4ff55, 0 0 18px #fff6;
          background:linear-gradient(135deg,#c2f4ff 40%,#2de2ff 100%);
          filter:blur(.4px) brightness(1.1);
          transform:rotate3d(1,1,0,20deg) scale(1);
          animation:floatCube 9s infinite alternate cubic-bezier(.54,0,.24,1);
          will-change:transform,opacity;
        }
        .fx-cube.green{ background:linear-gradient(133deg,#cfffc2 10%,#51ffb8 80%) }
        .fx-cube.teal{ background:linear-gradient(140deg,#beffe9 40%,#25fff8 100%) }
        @keyframes floatCube{
          0%{transform:translateY(0) rotate3d(1,1,0,16deg) scale(1)}
          100%{transform:translateY(-44px) rotate3d(1,1,0,30deg) scale(1.12)}
        }

        .fx-bokeh{
          position:absolute; border-radius:50%;
          background:radial-gradient(circle at 35% 30%, #fff8 70%, #3ffcf7 110%);
          filter:blur(3px) brightness(1.08); opacity:.26;
          animation:fadeInFloat 1.6s cubic-bezier(.32,0,.22,1), floatBubble 11s infinite alternate cubic-bezier(.32,0,.22,1);
        }
        .fx-bokeh.green{
          background:radial-gradient(circle at 45% 40%, #fff6 60%, #76ff7e 120%);
          opacity:.28
        }
        .fx-bokeh.teal{
          background:radial-gradient(circle at 42% 35%, #fff6 60%, #45fff2 120%);
          opacity:.28
        }
        @keyframes floatBubble{
          0%{transform:translateY(0) scale(1)}
          100%{transform:translateY(-40px) scale(1.1)}
        }
        @keyframes fadeInFloat{
          0%{opacity:0}
          18%{opacity:1}
          100%{opacity:1}
        }

        @media (max-width:900px){ #fx-glass-overlay{ opacity:.05 } }
        @media (prefers-reduced-motion: reduce){ .fx-cube,.fx-bokeh{ animation:none !important } }
      `}</style>
    </>
  );
}

function ArrowLeft() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M15 18l-6-6 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M9 6l6 6-6 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
