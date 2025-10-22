// @ts-nocheck
import React, { useEffect, useMemo, useState } from "react";
import {
  SuiClientProvider,
  createNetworkConfig,
  WalletProvider,
  ConnectButton,
  useCurrentAccount,
} from "@mysten/dapp-kit";
import "@mysten/dapp-kit/dist/index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import coinbaseLogo from "../assets/coinbase-v2-svgrepo-com.svg";
import binanceLogo from "../assets/binance.svg";
import okxLogo from "../assets/okx.svg";
import krakenLogo from "../assets/kraken.svg";

const TOKEN_ADDRESS =
  "0x2a09f92856aeb4fb4d4c595d8939b26a213d860dfba8045e386f6bfa6b5b025f::jule::JULE";
const CETUS_APP_URL = "https://app.cetus.zone/swap";

const EXCHANGES = [
  { name: "Coinbase", url: "https://www.coinbase.com/price/sui", logo: coinbaseLogo },
  { name: "Binance",  url: "https://www.binance.com/en/trade/SUI_USDT", logo: binanceLogo },
  { name: "OKX",      url: "https://www.okx.com/markets/prices/sui", logo: okxLogo },
  { name: "Kraken",   url: "https://www.kraken.com/prices/sui", logo: krakenLogo },
];

const WALLETS = [
  { name: "Sui Wallet", url: "https://wallet.sui.io/" },
  { name: "Ethos", url: "https://ethoswallet.xyz/" },
  { name: "Surf", url: "https://surfwallet.io/" },
  { name: "Suiet", url: "https://suiet.app/" },
];

const { networkConfig } = createNetworkConfig({
  mainnet: { url: "https://fullnode.mainnet.sui.io:443" },
});
const queryClient = new QueryClient();

export default function JouleOnboarding() {
  return (
    <QueryClientProvider client={queryClient}>
      <SuiClientProvider networks={networkConfig} defaultNetwork="mainnet">
        <WalletProvider autoConnect>
          <Page />
        </WalletProvider>
      </SuiClientProvider>
    </QueryClientProvider>
  );
}

function Page() {
  const [step, setStep] = useState(1);
  const [manualAddr, setManualAddr] = useState("");
  const [copiedKey, setCopiedKey] = useState("");
  const [embedOk, setEmbedOk] = useState(true);
  const [embedLoaded, setEmbedLoaded] = useState(false);
  const account = useCurrentAccount();

  const addr = account?.address || manualAddr;
  const progress = useMemo(() => (step === 1 ? 33 : step === 2 ? 66 : 100), [step]);

  useEffect(() => {
    if (step !== 3) return;
    setEmbedLoaded(false);
    setEmbedOk(true);
    const t = setTimeout(() => { if (!embedLoaded) setEmbedOk(false); }, 5000);
    return () => clearTimeout(t);
  }, [step, embedLoaded]);

  const openNew = (url) => window.open(url, "_blank", "noopener,noreferrer");
  const copy = async (text, key) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(""), 1200);
    } catch {}
  };

  return (
    <div className="aero-wrap">
      <StyleTag />

      <main className="container">
        <header className="hero">
          <h1 className="title">JOULE Onboarding</h1>

          <nav className="steps" aria-label="Progress">
            <span className={`pill ${step === 1 ? "current" : ""} ${step > 1 ? "done" : ""}`}>1. Buy SUI</span>
            <span className={`pill ${step === 2 ? "current" : ""} ${step > 2 ? "done" : ""}`}>2. Wallet</span>
            <span className={`pill ${step === 3 ? "current" : ""}`}>3. Swap</span>
          </nav>

          <div
            className="progress"
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={progress}
          >
            <div className="bar" style={{ width: `${progress}%` }} />
          </div>

          <div className="cta">
            <span className="net">Sui Mainnet</span>
            <ConnectButton />
          </div>
        </header>

        <section className="stage">
          {step === 1 && (
            <div className="panel">
              <div className="grid markets">
                {EXCHANGES.map((ex, i) => (
                  <button
                    key={ex.name}
                    className="card glass selectable floating"
                    style={{ animationDelay: `${i * 0.25}s` }}
                    onClick={() => openNew(ex.url)}
                    aria-label={`Open ${ex.name}`}
                  >
                    <div className="row">
                      <div className="icon">
                        <img
                          src={ex.logo}
                          alt={ex.name}
                          onError={(e) => (e.currentTarget.style.display = "none")}
                        />
                      </div>
                      <div className="txt">
                        <strong>{ex.name}</strong>
                        <span>Buy SUI — withdraw</span>
                      </div>
                      <div className="arrow" aria-hidden>
                        ↗
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              <div className="panel-footer">
                <button className="btn ghost glow" onClick={() => setStep(2)}>
                  I already have SUI
                </button>
                <button className="btn primary glow" onClick={() => setStep(2)}>
                  Continue
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="panel">
              <div className="grid two">
                <div className="card glass lg floating" style={{ animationDelay: "0s" }}>
                  <h3>Connect Wallet</h3>
                  <p className="muted">Use the Connect button above. Your address appears below.</p>
                  <label className="lbl">Your Sui Address</label>
                  <div className="field">
                    <input
                      className="input"
                      value={addr || ""}
                      onChange={(e) => !account && setManualAddr(e.target.value)}
                      readOnly={!!account}
                      placeholder="Not connected — paste manually"
                    />
                    <button
                      className="btn tiny ghost glow"
                      disabled={!addr}
                      onClick={() => copy(addr, "addr")}
                    >
                      {copiedKey === "addr" ? "Copied ✓" : "Copy"}
                    </button>
                  </div>
                  <p className="hint">
                    {account?.address ? "Auto-filled from wallet" : "Manual paste works"}
                  </p>
                </div>

                <div className="card glass lg floating" style={{ animationDelay: ".25s" }}>
                  <h3>Need a Wallet?</h3>
                  <p className="muted">Install one, then come back and connect.</p>
                  <div className="chips list">
                    {WALLETS.map((w, i) => (
                      <a
                        key={w.name}
                        className="chip link glow-min"
                        href={w.url}
                        target="_blank"
                        rel="noreferrer"
                        style={{ animationDelay: `${i * 0.05}s` }}
                      >
                        {w.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="panel-footer">
                <button className="btn ghost glow" onClick={() => setStep(1)}>
                  Back
                </button>
                <button className="btn primary glow" onClick={() => setStep(3)}>
                  Continue
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="panel">
              <div className="grid two">
                <div className="card glass lg floating" style={{ animationDelay: "0s" }}>
                  <h3>Official JOULE Token</h3>
                  <div className="field">
                    <input className="input" readOnly value={TOKEN_ADDRESS} />
                    <button
                      className="btn tiny ghost glow"
                      onClick={() => copy(TOKEN_ADDRESS, "token")}
                    >
                      {copiedKey === "token" ? "Copied ✓" : "Copy"}
                    </button>
                  </div>
                  <ul className="tips">
                    <li>Input: SUI (or USDC) → Output: JOULE</li>
                    <li>Slippage: start at 0.5–1%</li>
                    <li>Keep a little SUI for gas</li>
                  </ul>
                </div>

                <div className="card glass lg floating" style={{ animationDelay: ".25s" }}>
                  <h3>Cetus — Swap</h3>
                  {embedOk ? (
                    <iframe
                      className="dex"
                      src={CETUS_APP_URL}
                      onLoad={() => setEmbedLoaded(true)}
                      allow="clipboard-read; clipboard-write; accelerometer; gyroscope"
                      title="Cetus Swap"
                    />
                  ) : (
                    <div className="fallback">
                      <p className="muted">Some wallets block embedded windows.</p>
                      <button className="btn primary glow" onClick={() => openNew(CETUS_APP_URL)}>
                        Open Cetus ↗
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <div className="panel-footer">
                <button className="btn ghost glow" onClick={() => setStep(2)}>
                  Back
                </button>
              </div>
            </div>
          )}
        </section>

        <footer className="links">
          <strong>Official links</strong>
          <ul>
            <li>
              Token: <code>{TOKEN_ADDRESS}</code>
            </li>
            <li>
              Cetus:{" "}
              <a href="https://app.cetus.zone/swap" target="_blank" rel="noreferrer">
                app.cetus.zone
              </a>
            </li>
            <li>
              Sui Wallet:{" "}
              <a href="https://wallet.sui.io/" target="_blank" rel="noreferrer">
                wallet.sui.io
              </a>
            </li>
            <li>
              Ethos:{" "}
              <a href="https://ethoswallet.xyz/" target="_blank" rel="noreferrer">
                ethoswallet.xyz
              </a>
            </li>
            <li>
              Suiet:{" "}
              <a href="https://suiet.app/" target="_blank" rel="noreferrer">
                suiet.app
              </a>
            </li>
            <li>
              Surf:{" "}
              <a href="https://surfwallet.io/" target="_blank" rel="noreferrer">
                surfwallet.io
              </a>
            </li>
          </ul>
        </footer>
      </main>
    </div>
  );
}

/* -------------------- STYLES -------------------- */
function StyleTag() {
  return (
    <style>{`
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;700;800&family=Space+Grotesk:wght@700;800&display=swap');
*{box-sizing:border-box} html,body,#root{height:100%;margin:0}
:root{
  --heroShiftX: 0px; /* keep everything on the same center line */
  --ink:#072a40; --muted:#5d7f98;
  --glassThin: rgba(255,255,255,.10);
  --glassStroke: rgba(255,255,255,.66);
  --glassSolid: rgba(255,255,255,.94);
  --accent:#2fc1ff; --accent2:#1fe0c2; --done:#11cf8c;
  --r:26px;
  --pagePad: clamp(28px, 6vw, 100px);
  --skyTop:#5fb2ff; --skyMid:#bfe5ff; --skyBottom:#eef8ff;
}
body{font-family:'Plus Jakarta Sans',ui-sans-serif;color:var(--ink);background:#e9fbff;}
.aero-wrap{position:relative;min-height:100vh;overflow-x:hidden}

/* dreamy blue sky ambience */
.aero-wrap::before{
  content:""; position:fixed; inset:0; z-index:0; pointer-events:none;
  background:
    radial-gradient(900px 520px at 80% -10%, rgba(255,255,255,.95) 0%, rgba(255,255,255,.4) 38%, rgba(255,255,255,0) 62%),
    radial-gradient(1100px 580px at 10% 0%, rgba(255,255,255,.7) 0%, rgba(255,255,255,0) 70%),
    linear-gradient(180deg, var(--skyTop) 0%, var(--skyMid) 44%, var(--skyBottom) 100%);
  filter:saturate(115%) contrast(103%);
}
.aero-wrap::after{
  content:""; position:fixed; inset:-10% -10% -10% -10%; z-index:0; pointer-events:none; opacity:.62;
  background:
    radial-gradient(140px 80px at 12% 18%, rgba(255,255,255,.95) 40%, rgba(255,255,255,0) 62%),
    radial-gradient(180px 100px at 34% 30%, rgba(255,255,255,.95) 40%, rgba(255,255,255,0) 62%),
    radial-gradient(160px 90px at 58% 22%, rgba(255,255,255,.95) 40%, rgba(255,255,255,0) 62%),
    radial-gradient(180px 100px at 80% 26%, rgba(255,255,255,.95) 40%, rgba(255,255,255,0) 62%),
    radial-gradient(140px 80px at 18% 58%, rgba(255,255,255,.95) 40%, rgba(255,255,255,0) 62%),
    radial-gradient(180px 100px at 46% 60%, rgba(255,255,255,.95) 40%, rgba(255,255,255,0) 62%),
    radial-gradient(140px 80px at 76% 60%, rgba(255,255,255,.95) 40%, rgba(255,255,255,0) 62%);
  filter: blur(18px);
  animation: cloudDrift 160s linear infinite;
}
@keyframes cloudDrift{from{transform:translateX(0)}to{transform:translateX(-600px)}}

/* layout scaffolding */
.container{position:relative;z-index:2;max-width:1200px;margin:0 auto;padding:28px 0 68px}
.hero{display:flex;flex-direction:column;align-items:center;text-align:center;margin-top:36px;margin-bottom:6px;width:min(1200px,94%);margin-left:auto;margin-right:auto;padding-inline:0}
.title{margin:0;font-family:'Space Grotesk',sans-serif;font-weight:800;line-height:1.06;font-size:clamp(50px,7vw,94px);background:linear-gradient(90deg,#20b7ff,#12e0c9 60%,#aaf6ff);-webkit-background-clip:text;background-clip:text;color:transparent;text-shadow:0 10px 40px rgba(32,183,255,.26)}
.sub{margin:6px 0 18px;color:var(--muted);font-weight:700}
.steps{display:flex;justify-content:center;gap:14px;flex-wrap:wrap;width:min(1200px,94%);margin-left:auto;margin-right:auto;padding-inline:0}
.pill{padding:14px 16px;border-radius:16px;background:rgba(255,255,255,.9);border:1px solid rgba(255,255,255,.96);font-weight:900;color:#0b416a;box-shadow:0 8px 18px rgba(120,200,255,.18);transition:background .25s ease, box-shadow .25s ease, color .25s ease}
.pill.current{background:#fff; box-shadow:0 10px 22px rgba(120,200,255,.24)}
.pill.done{background:linear-gradient(180deg,#9dffd6,#58e7b8); color:#064a36; box-shadow:0 10px 26px rgba(17,207,140,.30), inset 0 0 0 1px rgba(255,255,255,.65)}
.progress{width:min(820px,100%);height:12px;margin:12px auto;border-radius:999px;background:rgba(255,255,255,.55);overflow:hidden;box-shadow:inset 0 1px 0 rgba(255,255,255,.6)}
.progress .bar{height:100%;background:linear-gradient(90deg,var(--accent),var(--accent2),var(--done));transition:width .6s ease;}
.cta{display:flex;justify-content:center;align-items:center;gap:12px;margin-top:12px;width:min(1200px,94%);margin-left:auto;margin-right:auto;padding-inline:0}
.net{background:linear-gradient(90deg,#2fc1ff,#46e7c6);color:#063a5c;padding:8px 12px;border-radius:999px;font-weight:900;box-shadow:0 12px 26px rgba(67,182,255,.30)}
.stage{position:relative;margin-top:44px;min-height:74vh;display:grid;align-items:end;justify-items:center}
.panel{display:flex;flex-direction:column;align-items:center;gap:44px;margin-bottom:30px}
.links{margin:44px 0 12px;text-align:center;color:#214a6e;width:min(1200px,94%);margin-left:auto;margin-right:auto;padding-inline:0}
.links ul{list-style:none;padding:0;margin:8px 0 0}
.links li{margin:6px 0}
.links a{color:#0d4a7a;font-weight:800;text-decoration:underline}
.links code{background:#fff;padding:3px 6px;border-radius:6px}

/* GRIDS — centered and aligned */
.grid.markets{
  display:grid;
  grid-template-columns: repeat(2, minmax(380px, 1fr));
  grid-auto-rows: 1fr;
  gap: clamp(56px, 6vw, 128px);
  width: min(1200px, 94%);
  margin: 0 auto;
  padding-inline: 0;
  align-items: stretch;
  justify-items: stretch;
}
.grid.markets .card{min-height: 164px; padding: 42px 36px}
@media (max-width: 860px){
  .grid.markets{
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
    gap: 28px;
    width: min(760px, 96%);
    padding-inline: clamp(16px, 6vw, 44px);
  }
}

.grid.two{
  display:grid;
  grid-template-columns:repeat(2, minmax(380px, 1fr));
  grid-auto-rows: minmax(0,1fr);
  gap: clamp(36px, 5.6vw, 96px);
  width: min(1200px, 94%);
  margin: 0 auto;
  padding-inline: 0;
  align-items: stretch;
  justify-items: stretch;
}
@media (max-width: 980px){
  .grid.two{
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
    gap: 28px;
    width: min(760px, 96%);
    padding-inline: clamp(16px, 6vw, 44px);
  }
}

/* CARD look */
.card{
  height: 100%;
  border-radius: var(--r);
  padding: 34px 32px;
  border: 1px solid var(--glassStroke);
  background:
    linear-gradient(180deg, rgba(255,255,255,.24), rgba(255,255,255,.12)),
    var(--glassThin);
  backdrop-filter: blur(24px) saturate(160%) brightness(1.06);
  -webkit-backdrop-filter: blur(24px) saturate(160%) brightness(1.06);
  box-shadow:
    0 22px 64px rgba(60,180,255,.18),
    0 14px 44px rgba(40,190,220,.12),
    inset 0 1px 0 rgba(255,255,255,.55);
}
.card.lg{min-height: 440px}

/* gentle fade-in */
.floating{animation: fadeSlideIn .7s ease both}
@keyframes fadeSlideIn{from{opacity:0; transform:translateY(6px)}to{opacity:1; transform:translateY(0)}}

/* selectable hover */
.selectable{transition:box-shadow .25s ease, filter .2s ease, transform .2s ease; will-change: box-shadow, filter}
.selectable:hover{
  box-shadow:
    0 36px 96px rgba(48,210,240,.34),
    0 0 0 3px rgba(47,193,255,.22) inset,
    inset 0 1px 0 rgba(255,255,255,.88);
  filter:brightness(1.03);
}

/* internal row alignment */
.row{
  display:grid;
  grid-template-columns: 88px 1fr 32px;
  align-items:center;
  gap: 24px;
  min-height: 128px;
}
.icon{
  width: 88px; height: 88px;
  border-radius: 22px;
  display:grid; place-items:center;
  background: var(--glassSolid);
  border: 1px solid rgba(255,255,255,.98);
  box-shadow: 0 12px 28px rgba(120,200,255,.22);
}
.icon img{width:36px;height:36px;display:block;object-fit:contain;}

.txt{min-width:0;display:flex;flex-direction:column;justify-content:center;}
.txt strong{font-weight:900;font-size:1.32rem;line-height:1.1}
.txt span{color:var(--muted)}

.arrow{
  width: 32px;
  text-align:center;
  font-weight:900; font-size:1.42rem; color:#0d4d7d;
  line-height:1; display:flex; align-items:center; justify-content:center;
  justify-self:end;
}

/* inputs, chips, buttons */
.muted{color:var(--muted)}
.lbl{font-weight:900;color:#0b3f66;margin:10px 0 6px}
.field{display:flex;align-items:center;gap:12px}
.input{
  flex:1;
  padding:13px 14px;
  border-radius:14px;
  border:1px solid rgba(255,255,255,.98);
  background:rgba(255,255,255,.95);
  font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation Mono',monospace;
  color:#0c3556;
}
.hint{color:#6c8aa4;font-size:.86rem;margin-top:6px}
.chips.list{display:flex;gap:14px;flex-wrap:wrap}
.chip.link{padding:10px 14px;border-radius:999px;border:1px solid rgba(255,255,255,.96);background:#fff;color:#0c3f67;font-weight:800;text-decoration:none}
.glow-min:hover{box-shadow:0 12px 28px rgba(46,208,255,.25)}
.btn{padding:14px 22px;border-radius:999px;border:1px solid rgba(255,255,255,.98);cursor:pointer;font-weight:900;transition:transform .15s ease, box-shadow .25s ease, filter .2s ease}
.btn:active{transform:translateY(1px)}
.btn.primary{
  background: linear-gradient(180deg,var(--accent) 0%, var(--accent2) 60%, #b9ffe8 100%);
  color:#063a5c;
  box-shadow:0 14px 36px rgba(47,196,255,.26);
}
.btn.primary.glow:hover{box-shadow:0 20px 56px rgba(47,196,255,.45), 0 0 0 6px rgba(47,196,255,.22), inset 0 1px 0 rgba(255,255,255,.9); filter:brightness(1.06)}
.btn.ghost{
  background:rgba(255,255,255,.94);
  color:#0a3d64;
  box-shadow:0 10px 26px rgba(120,200,255,.18);
}
.btn.ghost.glow:hover{box-shadow:0 18px 46px rgba(46,208,255,.35), 0 0 0 6px rgba(46,208,255,.18), inset 0 1px 0 rgba(255,255,255,.9); filter:brightness(1.03)}
.btn.tiny{padding:8px 12px;font-size:.85rem}

/* footer buttons: stacked & centered */
.panel-footer{
  margin-top:auto;
  display:flex;
  flex-direction: column;   /* stack the buttons */
  align-items: center;      /* center horizontally */
  gap:18px;
  width:min(1200px,94%);
  margin-left:auto;
  margin-right:auto;
  padding-inline:0;
}
.panel-footer .btn{
  width: min(360px, 100%);  /* equal width */
}

/* iframe */
.dex{display:block;width:100%;height:440px;border:0;border-radius:18px;background:rgba(255,255,255,.22)}

/* reduced motion */
@media (prefers-reduced-motion: reduce){
  .floating{animation:none}
  .chip.link,.btn{transition:none}
  .aero-wrap::after{animation:none}
}

/* === ALIGNMENT FIX PACK — keeps everything on one center line === */
/* 1) Kill any residual shifts */
:root { --heroShiftX: 0px; }
.title, .steps, .progress, .input { transform: none !important; }

/* 2) Shared side padding so all sections align to the same left/right */
.container { padding: 28px var(--pagePad) 68px !important; }

/* 3) Make major sections use the container's width and center line */
.hero,
.steps,
.progress,
.cta,
.links,
.panel-footer,
.grid.markets,
.grid.two {
  width: 100% !important;
  margin-left: 0 !important;
  margin-right: 0 !important;
}

/* 4) Center the card grids as a group and cap their content width */
.grid.markets,
.grid.two {
  max-width: 1100px;
  margin-inline: auto !important;  /* hard center within container */
  justify-content: center;          /* center columns inside the grid */
}

/* 5) Ensure the stage/panel centers its child perfectly */
.stage { justify-items: center !important; }
.panel { width: 100%; }
`}</style>
  );
}
