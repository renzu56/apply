import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import DigistoreBadge from "../components/DigistoreBadge";

// ✅ Digistore24 settings
const PRODUCT_ID = "632899"; // your product id
const CHECKOUT_URL = "https://www.digistore24.com/product/632899"; // optional test-buy link

// Put your ebook cover into /public (e.g. /being-artist.jpg)
const HERO_IMAGE = "beaiete.jpeg";

export default function AffiliateSupport() {
  return (
    <>
      <AeroBackground />

      <main className="page">
        {/* HERO */}
        <section className="hero container">
          <div className="hero-left">
            <h1 className="title">
              <span className="label">AFFILIATE SUPPORT</span>
              <span className="name">BEING AN ARTIST IS EASIER THAN EVER — GUIDE FOR MUSICIANS</span>
            </h1>

            <p className="subtitle">Earn 80% commission on a $25 PDF — ~ $20 per sale.</p>

            <p className="lede">
              <strong>BEING AN ARTIST IS EASIER THAN EVER</strong> is a practical guide for modern
              musicians who want to grow their audience and build a thriving music career—without
              constantly selling, spamming, or pouring money into ads. Use this page to grab your
              promo link, estimate earnings, and copy ready‑to‑use creatives.
            </p>

            <ul className="chips">
              <li>80% commission per sale</li>
              <li>Price: $25</li>
              <li>60‑day money‑back guarantee</li>
              <li>Evergreen creator niche</li>
              <li>Plug‑and‑play swipe copy</li>
              <li>Reliable Digistore24 tracking</li>
            </ul>

            <div className="cta-row">
              <a className="btn" href="#promo">Get your promo link</a>
              <a className="btn-outline" href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">Test checkout</a>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-image-wrap">
              <img src={HERO_IMAGE} alt="Ebook cover" />
              <div className="img-glow" />
            </div>
          </div>
        </section>

        {/* PRODUCT SNAPSHOT */}
        <section className="container">
          <h2 className="h2">Product at a glance</h2>
          <p>
            The official PDF to lift and guide your artist career. Inside, readers get actionable
            strategies for: step‑by‑step advice for different categories, content systems that stick,
            fan → superfan frameworks, release & campaign timelines, and branding & storytelling.
          </p>
          <p className="small mt8">
            <strong>60‑Day Money‑Back Guarantee:</strong> If buyers aren’t happy, they can contact us within
            60 days for a full refund. Support: <a href="mailto:lennardfeist@gmail.com">lennardfeist@gmail.com</a>
          </p>
        </section>

        {/* BENEFITS */}
        <section className="container">
          <h2 className="h2">Why affiliates love this offer</h2>
          <div className="grid-3">
            <Benefit title="High Payout">80% commission (~$20 per sale) on a low‑friction $25 price point.</Benefit>
            <Benefit title="Strong Conversion">Affordable, niche‑relevant, and covered by a 60‑day guarantee.</Benefit>
            <Benefit title="Easy Promotion">Swipe copy + angles included below. No guesswork.</Benefit>
            <Benefit title="Reliable Tracking">Standard Digistore24 tracking & transparent reporting.</Benefit>
            <Benefit title="Responsive Support">Email help for approvals, custom creatives, or co‑branded ideas.</Benefit>
            <Benefit title="Evergreen Niche">Musicians & creators: a constantly renewing, worldwide audience.</Benefit>
          </div>
        </section>

        {/* PROMO LINK GENERATOR */}
        <PromoLinkBox />

        {/* EARNINGS CALCULATOR */}
        <Calculator />

        {/* SWIPE COPY */}
        <section className="container">
          <h2 className="h2">Promo assets & swipe copy</h2>
          <div className="grid-2 mt8">
            <div className="card">
              <h3>Short social caption</h3>
              <pre className="pre">
{`Stop guessing your music strategy. This $25 PDF shows how to grow fans without ads or spam.
60‑day guarantee. Get it here: YOUR_PROMO_LINK`}
              </pre>
            </div>
            <div className="card">
              <h3>Email swipe (plain text)</h3>
              <pre className="pre">
{`Subject: A practical guide to grow your music career (no ads required)

Hey {{first_name}},

If you want a clear plan for building a real audience without paying for ads, this PDF breaks it down step‑by‑step: content systems that stick, fan→superfan, release timelines, branding & more.

It’s only $25 and comes with a 60‑day money‑back guarantee. Grab it here: YOUR_PROMO_LINK

— {{sender_name}}`}
              </pre>
            </div>
          </div>
        </section>

        {/* CONTACT / LEGAL */}
        <section className="container">
          <div className="card flex-between">
            <div>
              <h3>Questions?</h3>
              <p>Email us: <a href="mailto:lennardfeist@gmail.com">lennardfeist@gmail.com</a></p>
              <p className="small">We’re happy to help with approvals, custom creatives, or co‑branded campaigns.</p>
            </div>
            <a className="btn" href="mailto:lennardfeist@gmail.com">Contact Support</a>
          </div>
          <p className="tiny mt8">Earnings and examples are illustrative and not guarantees. All payments and tracking are handled by Digistore24. Refunds possible within 60 days of purchase as stated above.</p>
        </section>
      </main>

      <DigistoreBadge />

      <footer className="legal-footer">
        <div className="legal-buttons">
          <Link className="btn-outline tiny" to="/rechtliches#imprint">Imprint</Link>
          <Link className="btn-outline tiny" to="/rechtliches#privacy">Privacy Policy</Link>
        </div>
      </footer>

      {/* PAGE CSS */}
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
        .card{ background:linear-gradient(120deg,#ffffff 50%, #f3fbff 100%); border:1.5px solid #bfe7ff; border-radius:20px; padding:18px; box-shadow:0 8px 30px #bfe7ff33 }
        .h2{ margin:0 0 10px; font-size:1.6rem }
        .small{ font-size:.92rem; opacity:.9 }
        .tiny{ font-size:.8rem; opacity:.9 }
        .mt8{ margin-top:8px }

        .title{ margin:0 0 8px; line-height:1.06 }
        .title .label{ display:block; font-size:1rem; color:#6bbdf4; letter-spacing:.18em; font-weight:800 }
        .title .name{ display:block; font-size:clamp(2rem,6vw,3.2rem); font-weight:800;
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

        .cta-row{ display:flex; gap:12px; flex-wrap:wrap; margin:12px 0 10px }
        .btn{ padding:14px 22px; border-radius:12px; background:#111; color:#fff; font-weight:800; text-decoration:none }
        .btn-outline{ padding:10px 14px; border-radius:10px; border:2px solid #111; color:#111; font-weight:700; text-decoration:none; font-size:.86rem }
        .btn-outline:hover{ background:#111; color:#fff }
        .chips{ display:flex; gap:10px; flex-wrap:wrap; margin-top:12px; padding:0; list-style:none }
        .chips li{ padding:8px 12px; border-radius:12px; border:2px solid #bceafd;
          background:linear-gradient(120deg,#eafdff 60%,#caeaff 100%); font-weight:600; font-size:.9rem }

        .grid-2{ display:grid; grid-template-columns:1fr 1fr; gap:16px }
        .grid-3{ display:grid; grid-template-columns:repeat(3,1fr); gap:16px }
        .flex-between{ display:flex; align-items:center; justify-content:space-between; gap:16px }

        .field{ display:flex; flex-direction:column; gap:6px }
        .field input{ padding:12px 12px; border-radius:12px; border:2px solid #bfe7ff; background:#fff }
        .row{ display:grid; grid-template-columns:1fr 1fr 1fr; gap:12px }

        .pre{ margin:0; white-space:pre-wrap; word-break:break-word; font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace; font-size:.92rem; background:#f7fdff; border:1.5px solid #bfe7ff; padding:12px; border-radius:12px }

        .metric{ background:#fff; border:1.5px solid #bfe7ff; border-radius:14px; padding:12px }
        .metric .k{ font-size:1.4rem; font-weight:800 }

        .legal-footer{ display:flex; justify-content:center; margin:10px 0 40px }
        .legal-buttons{ display:flex; gap:10px }

        @media(max-width:900px){
          .hero{ grid-template-columns:1fr; }
          .hero-right{ order:-1 }
          .title .name{ font-size:clamp(1.9rem,9vw,3rem) }
          .hero-image-wrap{ width:min(86vw,520px); border-radius:22px; }
          .container{ padding:18px 14px; border-radius:20px }
          .grid-2{ grid-template-columns:1fr }
          .grid-3{ grid-template-columns:1fr }
          .row{ grid-template-columns:1fr 1fr }
        }
      `}</style>
    </>
  );
}

function Benefit({ title, children }) {
  return (
    <div className="card">
      <strong>{title}</strong>
      <p className="mt8 small" style={{marginTop:6}}>{children}</p>
    </div>
  );
}

function PromoLinkBox(){
  const [aff, setAff] = useState("");
  const [sid, setSid] = useState("");
  const baseUrl = useMemo(()=>`https://www.digistore24.com/redir/${PRODUCT_ID}`,[]);
  const link = useMemo(()=>{
    if(!aff) return "";
    return `${baseUrl}/${encodeURIComponent(aff)}${sid?`?sid=${encodeURIComponent(sid)}`:``}`;
  },[aff,sid,baseUrl]);
  const copy = async () => { if(!link) return; try{ await navigator.clipboard.writeText(link);}catch(e){} };

  return (
    <section id="promo" className="container">
      <h2 className="h2">Your promo link</h2>
      <p className="small">Enter your Digistore24 affiliate ID and optional SID (sub‑ID) to generate a tracking link.</p>
      <div className="row mt8">
        <label className="field">
          <span>Affiliate ID (required)</span>
          <input value={aff} onChange={e=>setAff(e.target.value)} placeholder="your_affiliate" />
        </label>
        <label className="field">
          <span>SID / Sub‑ID (optional)</span>
          <input value={sid} onChange={e=>setSid(e.target.value)} placeholder="campaign-or-adset" />
        </label>
        <div className="field">
          <span>&nbsp;</span>
          <button className="btn" onClick={copy} disabled={!link}>Copy link</button>
        </div>
      </div>
      <div className="card mt8">
        <div className="small" style={{opacity:.75}}>Preview</div>
        <div className="pre">{link || `https://www.digistore24.com/redir/${PRODUCT_ID}/YOUR_AFFILIATE?sid=optional`}</div>
      </div>
    </section>
  );
}

function Calculator(){
  const PRICE = 25; const COMMISSION = 0.8; const payout = PRICE*COMMISSION;
  const [clicks,setClicks] = useState(1000);
  const [cr,setCr] = useState(2);
  const sales = Math.floor(clicks*(cr/100));
  const revenue = (sales*payout).toFixed(2);

  return (
    <section className="container">
      <h2 className="h2">Earnings calculator</h2>
      <p className="small">Estimate potential earnings. Adjust clicks and average conversion rate (CR%).</p>
      <div className="row mt8">
        <label className="field">
          <span>Clicks</span>
          <input type="number" min={0} value={clicks} onChange={e=>setClicks(parseInt(e.target.value||"0",10))} />
        </label>
        <label className="field">
          <span>CR %</span>
          <input type="number" min={0} step="0.1" value={cr} onChange={e=>setCr(parseFloat(e.target.value||"0"))} />
        </label>
        <div className="metric">
          <div className="small">Payout per sale</div>
          <div className="k">${payout.toFixed(2)}</div>
        </div>
      </div>
      <div className="row mt8">
        <div className="metric">
          <div className="small">Estimated sales</div>
          <div className="k">{sales}</div>
        </div>
        <div className="metric">
          <div className="small">Estimated commission</div>
          <div className="k">${revenue}</div>
        </div>
        <div className="metric">
          <div className="small">Product price</div>
          <div className="k">$25</div>
        </div>
      </div>
      <p className="tiny mt8">This is a simple estimate for illustration only; actual results vary by traffic quality and audience fit.</p>
    </section>
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
