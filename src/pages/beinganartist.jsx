import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

// ✅ Digistore24 checkout for the EBOOK (ID 632899)
const CHECKOUT_URL = "https://www.digistore24.com/product/632899";

// Put your ebook cover into /public (e.g. /being-artist.jpg)
const HERO_IMAGE = "beaiete.jpeg";

export default function BeingAnArtist() {
  return (
    <>
      <AeroBackground />

      <main className="page">
        <section className="hero container">
          <div className="hero-left">
            <h1 className="title">
              <span className="label">EBOOK</span>
              <span className="name">
                BEING AN ARTIST IS EASIER THAN EVER — GUIDE FOR MUSICIANS
              </span>
            </h1>

            <p className="subtitle">The official PDF to lift and guide your artist career.</p>

            <p className="lede">
              <strong>BEING AN ARTIST IS EASIER THAN EVER</strong> is a practical guide for modern
              musicians who want to grow their audience and build a thriving music career—without
              constantly selling, spamming, or pouring money into ads. In this book, you’ll get
              actionable strategies to help you plan content, build consistency, tell better
              stories, and convert fans into real supporters.  
                   </p>
            <p>
              <strong> 60-Day Money-Back Guarantee:   

              </strong>
                <p>We want you to be completely satisfied with your purchase.
               If for any reason you’re not happy, simply contact our support team 
               within 60 days of your purchase, and we’ll issue a full refund.
</p>
            </p>

            <div className="cta-row">
              <a className="btn" href={CHECKOUT_URL} target="_blank" rel="noopener">
                Buy the eBook for 18€
              </a>
             
            </div>

            <ul className="chips">
              <li>Step-by-step advice for different categories</li>
              <li>Content systems that stick</li>
              <li>Fan → Superfan frameworks</li>
              <li>Release & campaign timelines</li>
              <li>Branding & storytelling</li>
              <li>Monetization playbook</li>
            </ul>
          </div>

          <div className="hero-right">
            <div className="hero-image-wrap">
              <img src={HERO_IMAGE} alt="Ebook cover" />
              <div className="img-glow" />
            </div>
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

      {/* PAGE CSS (scoped to this component) */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap');
        :root{
          --bg-start:#f6fbff; --bg-mid:#d6f2ff; --bg-end:#f3fcff;
          --ink:#234;
          --card-start:#fafdff; --card-end:#ecf7fc; --card-border:#bce3fa;
          --accent:#2ad0ff; --accent-2:#57c4ff;
        }
        *{ box-sizing:border-box }
        body{ margin:0;font-family:'Inter','Segoe UI',Arial,sans-serif;color:var(--ink);
          background:linear-gradient(140deg,var(--bg-start) 0%,var(--bg-mid) 50%,var(--bg-end) 100%);
          overflow-x:hidden;
        }
        .page{ position:relative; z-index:2; padding:28px 16px 72px }
        .container{ max-width:1100px; margin:28px auto; padding:34px 28px; border-radius:32px;
          background:linear-gradient(120deg,var(--card-start) 75%,var(--card-end) 100%);
          box-shadow:0 8px 40px 8px #beeaff2c, 0 2px 24px #b0e4ff20;
          border:1.5px solid #b7e2fd7a;
        }

        .title{ margin:0 0 8px; line-height:1.06 }
        .title .label{ display:block; font-size:1rem; color:#6bbdf4; letter-spacing:.18em; font-weight:800 }
        .title .name{ display:block; font-size:clamp(2.2rem,6vw,4rem); font-weight:800;
          background:linear-gradient(135deg,var(--accent) 0%, var(--accent-2) 55%, #e9f7ff 100%);
          -webkit-background-clip:text; background-clip:text; color:transparent;
        }
        .subtitle{ margin:6px 0 10px; color:#2993c7; font-weight:700 }
        .lede{ margin:10px 0 14px; max-width:62ch }

        .hero{ display:grid; grid-template-columns:1.3fr .9fr; gap:22px; align-items:center }
        .hero-right{ display:flex; justify-content:center }
        .hero-image-wrap{ position:relative; width:min(360px,42vw); aspect-ratio:1/1; border-radius:28px;
          background:linear-gradient(145deg,#e6f7ff 40%,#e7fcff 100%);
          border:2.5px dashed var(--card-border); overflow:hidden; box-shadow:0 12px 48px #31c7ff22;
        }
        .hero-image-wrap img{ width:100%; height:100%; object-fit:cover }
        .img-glow{ position:absolute; inset:auto -18% -18% -18%; height:60%; border-radius:40px; filter:blur(28px); opacity:.55;
          background:radial-gradient(circle at 50% 0, #a6f1ff 0%, #24c2ff 80%);
        }

        .cta-row{ display:flex; gap:12px; flex-wrap:wrap; margin:6px 0 10px }
        .btn{ padding:14px 22px; border-radius:12px; background:#111; color:#fff; font-weight:800; text-decoration:none }
        .btn-outline{ padding:10px 14px; border-radius:10px; border:2px solid #111; color:#111; font-weight:700; text-decoration:none; font-size:.82rem }
        .btn-outline:hover{ background:#111; color:#fff }
        .chips{ display:flex; gap:10px; flex-wrap:wrap; margin-top:12px; padding:0; list-style:none }
        .chips li{ padding:8px 12px; border-radius:12px; border:2px solid #bceafd;
          background:linear-gradient(120deg,#eafdff 60%,#caeaff 100%); font-weight:600; font-size:.9rem }
        @media(max-width:900px){
          .hero{ grid-template-columns:1fr; }
          .hero-right{ order:-1 }
          .title .name{ font-size:clamp(2rem,9vw,3.2rem) }
          .hero-image-wrap{ width:min(86vw,520px); border-radius:22px; }
          .container{ padding:18px 14px; border-radius:20px }
        }
      `}</style>
    </>
  );
}

/* Background */
function AeroBackground() {
  const ref = useRef(null);
  useEffect(() => {
    const root = ref.current; if (!root) return;
    const isMobile = window.matchMedia?.("(max-width:900px)").matches || false;
    const n = isMobile ? 2 : 6;
    const mk = (cls, count) => {
      for (let i=0;i<count;i++){
        const el=document.createElement("span");
        el.className=cls;
        el.style.left=Math.random()*100+"vw";
        el.style.top=Math.random()*100+"vh";
        el.style.width=(isMobile?50:100)+"px";
        el.style.height=el.style.width;
        root.appendChild(el);
      }
    };
    mk("fx-cube",n);
    mk("fx-bokeh",n);
    return ()=>{while(root.firstChild) root.removeChild(root.firstChild)};
  },[]);
  return (
    <>
      <div id="fx-bg" ref={ref}/>
      <style>{`
        #fx-bg{position:fixed;inset:0;z-index:0;pointer-events:none;overflow:hidden}
        .fx-cube{position:absolute;border-radius:20px;background:#2de2ff44;box-shadow:0 8px 42px #85e4ff55}
        .fx-bokeh{position:absolute;border-radius:50%;background:#3ffcf744;box-shadow:0 0 18px #fff6}
      `}</style>
    </>
  );
}
