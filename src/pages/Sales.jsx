// src/pages/Sales.jsx
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import DigistoreBadge from "../components/DigistoreBadge";


const CHECKOUT_URL = "https://www.digistore24.com/product/629295"; // real checkout link



export default function Sales() {
  const heroImageSrc = "/unnamed.jpg"; // swap to a proper Slito EX visual when ready

  return (
    <>
      <AeroBackground />

      <main className="page">
        {/* HERO */}
        <section className="hero container">
          <div className="hero-left">
            <h1 className="title">
              <span className="label">SLITO EX</span>
              <span className="name">
                Your hub for captions & smart photo curation, Tiktok Sounds and Journaling
              </span>
            </h1>
            <p className="subtitle">
              Built for musicians • Automated captions • Tinder-like photo swipe • Tiktok Remix Tool • Journaling
            </p>

            <p className="lede">
              Slito EX lets you auto-generate and edit captions for your photos, connect phone ↔ PC with
              <strong> Generate </strong> to ship content that grows your socials.
              Software-Purchase with many features!
                </p>
            <p>
              <strong> 60-Day Money-Back Guarantee:   

              </strong>
                <p>We want you to be completely satisfied with your purchase.
               If for any reason you’re not happy, simply contact our support team 
               within 60 days of your purchase, and we’ll issue a full refund.

               <strong>For german users we will guarantee a 14-Day Money-Back service!</strong>
</p>
            </p>

            <div className="cta-row">
              <a className="btn" href={CHECKOUT_URL} target="_blank" rel="noopener">
                
                Buy Slito EX now!
                 <span className="price"> 30&nbsp;€</span>
              </a>
            </div>

            

            {/* feature chips */}
            <ul className="chips">
              <li>Automated captions & phrases</li>
              <li>DIY social journaling</li>
              <li>Daily To-Do’s</li>
              <li>Lyrics extractor</li>
              <li>Image editing tools</li>
              <li>TikTok Remix maker</li>
              <li>Slito Swipe (Tinder-like)</li>
              <li>Local web server / phone use</li>
            </ul>
          </div>

          <div className="hero-right">
            <div className="hero-image-wrap">
              <img src={heroImageSrc} alt="Slito EX preview" />
              <div className="img-glow" />
            </div>
          </div>
        </section>
      </main>

      <DigistoreBadge />




      {/* FOOTER LEGAL LINKS */}
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

      

      {/* PAGE CSS */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap');
        :root {
          --bg-start:#f6fbff; --bg-mid:#d6f2ff; --bg-end:#f3fcff;
          --ink:#234; --muted:#7cb8e5;
          --card-start:#fafdff; --card-end:#ecf7fc; --card-border:#bce3fa;
          --accent:#2ad0ff; --accent-2:#57c4ff;
        }
        * { box-sizing:border-box }
        body {
          margin:0; font-family:'Inter','Segoe UI',Arial,sans-serif; color:var(--ink);
          background:linear-gradient(140deg,var(--bg-start) 0%,var(--bg-mid) 50%,var(--bg-end) 100%);
          overflow-x:hidden;
        }
        .page{ position:relative; z-index:2; padding:28px 16px 72px }
        .container{ max-width:1100px; margin:28px auto; padding:34px 28px; border-radius:32px;
          background:linear-gradient(120deg,var(--card-start) 75%,var(--card-end) 100%);
          box-shadow:0 8px 40px 8px #beeaff2c, 0 2px 24px #b0e4ff20;
          border:1.5px solid #b7e2fd7a; }

        .title{ margin:0 0 8px; line-height:1.06 }
        .title .label{ display:block; font-size:1rem; color:#6bbdf4; letter-spacing:.18em; font-weight:800; text-shadow:0 2px 12px #b6e9ff88 }
        .title .name{ display:block; font-size:clamp(2.2rem,6vw,4rem); font-weight:800;
          background:linear-gradient(135deg,var(--accent) 0%, var(--accent-2) 55%, #e9f7ff 100%);
          -webkit-background-clip:text; background-clip:text; color:transparent; text-shadow:0 6px 26px #55cdfd66; }
        .subtitle{ margin:6px 0 10px; color:#2993c7; font-weight:700 }
        .lede{ margin:10px 0 14px; max-width:62ch }

        .hero{ display:grid; grid-template-columns:1.3fr .9fr; gap:22px; align-items:center }
        .hero-right{ display:flex; justify-content:center }
        .hero-image-wrap{ position:relative; width:min(360px,42vw); aspect-ratio:1/1; border-radius:28px;
          background:linear-gradient(145deg,#e6f7ff 40%,#e7fcff 100%);
          border:2.5px dashed var(--card-border); overflow:hidden; box-shadow:0 12px 48px #31c7ff22 }
        .hero-image-wrap img{ width:100%; height:100%; object-fit:cover; display:block; filter:saturate(1.05) }
        .img-glow{ position:absolute; inset:auto -18% -18% -18%; height:60%; border-radius:40px; filter:blur(28px); opacity:.55;
          background:radial-gradient(circle at 50% 0, #a6f1ff 0%, #24c2ff 80%) }

        .cta-row{ display:flex; gap:12px; align-items:center; flex-wrap:wrap; margin:6px 0 10px }
        .btn{ display:inline-block; padding:14px 22px; border-radius:12px; background:#111; color:#fff; text-decoration:none; font-weight:800 }
        .btn:hover{ filter:brightness(1.06) }
        .tiny{ font-size:.82rem }

        /* LEGAL FOOTER */
        .legal-footer{ text-align:center; margin:40px 0 20px; }
        .legal-buttons{ display:flex; gap:12px; justify-content:center; flex-wrap:wrap }
        .btn-outline{ display:inline-block; padding:10px 14px; border-radius:10px; border:2px solid #111; color:#111;
          text-decoration:none; font-weight:700; background:transparent; font-size:.82rem }
        .btn-outline:hover{ background:#111; color:#fff }

        .chips{ display:flex; gap:10px; padding:0; margin:10px 0 0; list-style:none; flex-wrap:wrap }
        .chips li{ padding:8px 12px; border-radius:12px; border:2px solid #bceafd;
          background:linear-gradient(120deg,#eafdff 60%,#caeaff 100%); font-weight:600; font-size:.9rem }

        @media (max-width:900px){
          .hero{ grid-template-columns:1fr; gap:16px }
          .hero-right{ order:-1 }
          .title .name{ font-size:clamp(2rem,9vw,3.2rem) }
          .hero-image-wrap{ width:min(86vw,520px); border-radius:22px; border-width:2px }
          .container{ padding:18px 14px; border-radius:20px }
        }
      `}</style>
    </>
  );
}

/* ===== Background (soft) – reused from your style ===== */
function AeroBackground() {
  const containerRef = useRef(null);
  useEffect(() => {
    const root = containerRef.current; if (!root) return;
    const prefersReduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches || false;
    const isMobile = window.matchMedia?.('(max-width: 900px)').matches || false;
    const cubeCount = prefersReduced ? 0 : (isMobile ? 2 : 6);
    const bokehCount = prefersReduced ? 0 : (isMobile ? 2 : 6);
    const make = (cls, count) => {
      for (let i = 0; i < count; i++) {
        const el = document.createElement('span');
        el.className = cls+(Math.random()>0.66?' teal':Math.random()>0.5?' green':'');
        const base = cls.includes('bokeh') ? 90+Math.random()*140 : 36+Math.random()*90;
        const size = isMobile ? base*0.55 : base;
        el.style.width = size+'px';
        el.style.height = size+(cls.includes('cube')?0.6*size:size)+'px';
        el.style.left = Math.round(Math.random()*100)+'vw';
        el.style.top = Math.round(Math.random()*100)+'vh';
        el.style.animationDelay = (Math.random()*4).toFixed(2)+'s';
        el.style.opacity = (0.14+Math.random()*0.28).toFixed(2);
        root.appendChild(el);
      }
    };
    make('fx-cube', cubeCount);
    make('fx-bokeh', bokehCount);
    return () => { while(root.firstChild) root.removeChild(root.firstChild); };
  }, []);

  return (
    <>
      <div id="fx-bg-cubes" ref={containerRef} aria-hidden />
      <div id="fx-glass-overlay" aria-hidden />
      <style>{`
        #fx-bg-cubes{ position:fixed; inset:0; width:100vw; height:100vh; z-index:0; pointer-events:none; overflow:hidden }
        #fx-glass-overlay{ position:fixed; inset:0; pointer-events:none; background:linear-gradient(135deg,#eefcffef 0%,#d9f3ff55 60%,#a7f3ff22 100%); mix-blend-mode:lighten; opacity:.08; z-index:1 }
        .fx-cube{ position:absolute; border-radius:20px; box-shadow:0 8px 42px #85e4ff55, 0 0 18px #fff6;
          background:linear-gradient(135deg,#c2f4ff 40%,#2de2ff 100%); filter:blur(.4px) brightness(1.1);
          transform:rotate3d(1,1,0,20deg) scale(1); animation:floatCube 9s infinite alternate cubic-bezier(.54,0,.24,1); }
        .fx-cube.green{ background:linear-gradient(133deg,#cfffc2 10%,#51ffb8 80%) }
        .fx-cube.teal{ background:linear-gradient(140deg,#beffe9 40%,#25fff8 100%) }
        @keyframes floatCube{ 0%{transform:translateY(0) rotate3d(1,1,0,16deg) scale(1)} 100%{transform:translateY(-44px) rotate3d(1,1,0,30deg) scale(1.12)} }
        .fx-bokeh{ position:absolute; border-radius:50%; background:radial-gradient(circle at 35% 30%, #fff8 70%, #3ffcf7 110%);
          filter:blur(3px) brightness(1.08); opacity:.26; animation:fadeInFloat 1.6s cubic-bezier(.32,0,.22,1), floatBubble 11s infinite alternate cubic-bezier(.32,0,.22,1); }
        .fx-bokeh.green{ background:radial-gradient(circle at 45% 40%, #fff6 60%, #76ff7e 120%); opacity:.28 }
        .fx-bokeh.teal{ background:radial-gradient(circle at 42% 35%, #fff6 60%, #45fff2 120%); opacity:.28 }
        @keyframes floatBubble{ 0%{transform:translateY(0) scale(1)} 100%{transform:translateY(-40px) scale(1.1)} }
        @keyframes fadeInFloat{ 0%{opacity:0} 18%{opacity:1} 100%{opacity:1} }
        @media (max-width:900px){ #fx-glass-overlay{ opacity:.05 } }
        @media (prefers-reduced-motion: reduce){ .fx-cube,.fx-bokeh{ animation:none !important } }
      `}</style>
    </>
  );
}
