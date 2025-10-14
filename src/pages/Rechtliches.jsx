// src/pages/Rechtliches.jsx
import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

export default function RechtlichesPage() {
  const [lang, setLang] = useState("de"); // default: German
  const location = useLocation();

  useEffect(() => {
    const id = decodeURIComponent((location.hash || "").replace("#", ""));
    if (!id) return;
    const el = document.getElementById(id);
    if (el) {
      setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 0);
    }
  }, [location.hash]);

  return (
    <>
      <AeroBackground />

      <main className="page">
        <section className="container">
          {/* HEADER */}
          <header className="mb-8">
            <h1 className="title">
              {lang === "en" ? "Legal Information" : "Rechtliche Informationen"}
            </h1>
            <p className="subtitle">
              {lang === "en" ? "Imprint & Privacy Policy" : "Impressum & Datenschutzerklärung"}
            </p>

            <div className="cta-row">
              <a className="btn-outline tiny" href="#impressum">
                {lang === "en" ? "Imprint" : "Zum Impressum"}
              </a>
              <a className="btn-outline tiny" href="#datenschutz">
                {lang === "en" ? "Privacy Policy" : "Zur Datenschutzerklärung"}
              </a>

              <div className="ml-auto flex gap-2">
                <button
                  onClick={() => setLang("en")}
                  className={`btn-outline tiny ${lang === "en" ? "active" : ""}`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLang("de")}
                  className={`btn-outline tiny ${lang === "de" ? "active" : ""}`}
                >
                  DE
                </button>
              </div>
            </div>
          </header>

          {lang === "en" ? <ContentEN /> : <ContentDE />}
        </section>
      </main>

      <style>{`
        .page{ position:relative; z-index:2; padding:28px 16px 72px }
        .container{ max-width:1100px; margin:28px auto; padding:34px 28px; border-radius:32px;
          background:linear-gradient(120deg,#fafdff 75%,#ecf7fc 100%);
          box-shadow:0 8px 40px 8px #beeaff2c,0 2px 24px #b0e4ff20;
          border:1.5px solid #b7e2fd7a; }

        .title{ font-size:clamp(2rem,6vw,3.2rem); font-weight:800;
          background:linear-gradient(135deg,#2ad0ff 0%,#57c4ff 55%,#e9f7ff 100%);
          -webkit-background-clip:text; background-clip:text; color:transparent;
          text-shadow:0 6px 26px #55cdfd66; margin:0 0 8px; }
        .subtitle{ margin:4px 0 12px; color:#2993c7; font-weight:700 }
        .cta-row{ display:flex; gap:12px; align-items:center; flex-wrap:wrap; margin:10px 0 20px }

        .btn-outline{ padding:10px 16px; border-radius:10px; border:2px solid #111;
          background:transparent; color:#111; font-weight:700; text-decoration:none; font-size:.85rem }
        .btn-outline:hover{ background:#111; color:#fff }
        .btn-outline.active{ background:#111; color:#fff }
        .tiny{ font-size:.82rem }

        section h2{ font-size:1.6rem; font-weight:700; margin-top:24px }
        section h3{ font-size:1.1rem; font-weight:600; margin-top:18px }
        section p, section li{ line-height:1.6; margin-top:8px }
        section ul{ margin-top:8px; padding-left:20px; list-style:disc }

        hr{ border:none; border-top:1.5px solid #b7e2fd7a; margin:32px 0 }
      `}</style>
    </>
  );
}

/* ---- ENGLISH ---- */
function ContentEN() {
  return (
    <>
      <section id="impressum">
        <h2>Imprint (Legal Notice)</h2>
        <p>
          <strong>Lennard Feist</strong><br />
          Renettenstraße 27<br />
          60435 Frankfurt am Main, Germany
        </p>
        <p>
          E-mail: <a href="mailto:lennardfeist@gmail.com">lennardfeist@gmail.com</a>
        </p>
        <p>
          Registered sole proprietor (Einzelunternehmer, Gewerbe).<br />
          VAT ID (if applicable): [insert here or state Kleinunternehmerregelung].
        </p>
        <p>
          Sales & payment are handled via Digistore24 Inc.
            360 Central Avenue, Suite 800
St. Petersburg, FL 33701
USA.
        </p>

        <h3>Liability for content</h3>
        <p>
          I am responsible for my own content according to §7(1) DDG under general laws. According to §§8–10 DDG, I am
          not obliged to monitor transmitted or stored external information or to investigate circumstances indicating
          illegal activity.
        </p>

        <h3>Liability for links</h3>
        <p>
          This site contains links to external websites. I have no influence over their content. The respective provider
          is responsible. Illegal content was not recognizable at the time of linking. If I become aware of violations, I
          will remove such links immediately.
        </p>

        <h3>Copyright</h3>
        <p>
          Content created by me is subject to German copyright law. Duplication, editing, distribution outside copyright
          requires my written consent. Downloads and copies are only permitted for private, non-commercial use.
        </p>

        <h3>Dispute Resolution / ODR</h3>
        <p>
          The EU Commission provides a platform for online dispute resolution (ODR):{" "}
          <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noreferrer">
            https://ec.europa.eu/consumers/odr
          </a>
          . I am neither obliged nor willing to participate in dispute resolution proceedings before a consumer
          arbitration board.
        </p>
      </section>

      <hr />

      <section id="datenschutz">
        <h2>Privacy Policy</h2>
        <h3>1. Controller</h3>
        <p>
          Lennard Feist, Renettenstraße 27, 60435 Frankfurt am Main, Germany.<br />
          E-mail: <a href="mailto:lennardfeist@gmail.com">lennardfeist@gmail.com</a>
        </p>

        <h3>2. Purposes & Legal Basis</h3>
        <ul>
          <li>Website provision (server logs) – Art. 6(1)(f) GDPR</li>
          <li>Communication via e-mail – Art. 6(1)(b)/(f) GDPR</li>
          <li>Sales & payment via Digistore24 – Art. 6(1)(b)/(c) GDPR</li>
        </ul>

        <h3>3. Hosting</h3>
        <p>
          This website is hosted by <strong>Netlify</strong>. Personal data is processed on Netlify’s servers. A Data
          Processing Agreement (Art. 28 GDPR) has been concluded with Netlify.
        </p>

        <h3>4. Server Logfiles</h3>
        <p>
          Netlify automatically collects and stores server log files (browser, OS, referrer, host name, time of access,
          IP). They are used for security and deleted afterwards.
        </p>

        <h3>5. Orders via Digistore24</h3>
        <p>
          Orders and payments are handled by <strong>Digistore24 GmbH</strong>. Digistore24 is the controller for data
          processing during order/payment. I only receive the data required to provide the product (e.g. product,
          license, email address). See{" "}
          <a href="https://www.digistore24.com/page/privacy" target="_blank" rel="noreferrer">
            Digistore24 Privacy Policy
          </a>
          .
        </p>

        <h3>6. Cookies / Analytics</h3>
        <p>
          This site currently does not use analytics or tracking. If cookies are used (e.g. consent banner), processing
          is based on Art. 6(1)(a) GDPR.
        </p>

        <h3>7. Your Rights</h3>
        <ul>
          <li>Access, rectification, erasure, restriction, portability, objection (Art. 15–21 GDPR)</li>
          <li>Withdraw consent (Art. 7(3) GDPR)</li>
          <li>Lodge complaint with a supervisory authority (e.g. Landesdatenschutzbehörde Hessen)</li>
        </ul>
      </section>
    </>
  );
}

/* ---- DEUTSCH ---- */
function ContentDE() {
  return (
    <>
      <section id="impressum">
        <h2>Impressum</h2>
        <p>
          <strong>Lennard Feist</strong><br />
          Renettenstraße 27<br />
          60435 Frankfurt am Main, Deutschland
        </p>
        <p>
          E-Mail: <a href="mailto:lennardfeist@gmail.com">lennardfeist@gmail.com</a>
        </p>
        <p>
          Einzelunternehmer, angemeldetes Gewerbe (sonstiges Gewerbe).<br />
          USt-IdNr. (falls vorhanden): [hier eintragen oder angeben, dass Kleinunternehmerregelung gilt].
        </p>
        <p>
          Verkauf & Zahlungsabwicklung über <strong>Digistore24 GmbH</strong>, St.-Godehard-Str. 32, 31139 Hildesheim,
          Deutschland.
        </p>

        <h3>Haftung für Inhalte</h3>
        <p>
          Als Diensteanbieter bin ich gemäß §7 Abs.1 DDG für eigene Inhalte verantwortlich. Nach §§8–10 DDG bin ich
          jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach
          Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
        </p>

        <h3>Haftung für Links</h3>
        <p>
          Diese Website enthält Links zu externen Websites. Auf deren Inhalte habe ich keinen Einfluss. Für Inhalte der
          verlinkten Seiten ist stets der jeweilige Anbieter verantwortlich. Bei Bekanntwerden von Rechtsverletzungen
          werden derartige Links entfernt.
        </p>

        <h3>Urheberrecht</h3>
        <p>
          Die durch mich erstellten Inhalte und Werke unterliegen dem deutschen Urheberrecht. Vervielfältigung,
          Bearbeitung, Verbreitung außerhalb der Grenzen des Urheberrechts bedürfen meiner Zustimmung. Downloads/Kopien
          nur für privaten Gebrauch erlaubt.
        </p>

        <h3>Verbraucherstreitbeilegung / ODR</h3>
        <p>
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung bereit:{" "}
          <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noreferrer">
            https://ec.europa.eu/consumers/odr
          </a>
          . Ich bin weder verpflichtet noch bereit, an Streitbeilegungsverfahren teilzunehmen.
        </p>
      </section>

      <hr />

      <section id="datenschutz">
        <h2>Datenschutzerklärung</h2>
        <h3>1. Verantwortlicher</h3>
        <p>
          Lennard Feist, Renettenstraße 27, 60435 Frankfurt am Main, Deutschland.<br />
          E-Mail: <a href="mailto:lennardfeist@gmail.com">lennardfeist@gmail.com</a>
        </p>

        <h3>2. Zwecke & Rechtsgrundlagen</h3>
        <ul>
          <li>Website-Bereitstellung (Server-Logs) – Art. 6 Abs. 1 lit. f DSGVO</li>
          <li>Kommunikation (E-Mail) – Art. 6 Abs. 1 lit. b/f DSGVO</li>
          <li>Verkauf & Zahlung via Digistore24 – Art. 6 Abs. 1 lit. b/c DSGVO</li>
        </ul>

        <h3>3. Hosting</h3>
        <p>
          Diese Website wird bei <strong>Netlify</strong> gehostet. Personenbezogene Daten werden auf Netlify-Servern
          verarbeitet. Ein Auftragsverarbeitungsvertrag nach Art. 28 DSGVO besteht.
        </p>

        <h3>4. Server-Logfiles</h3>
        <p>
          Netlify erhebt automatisch Server-Logfiles (Browsertyp, Betriebssystem, Referrer, Hostname, Uhrzeit, IP). Diese
          Daten dienen der Sicherheit und werden danach gelöscht.
        </p>

        <h3>5. Bestellungen über Digistore24</h3>
        <p>
          Für Käufe ist die <strong>Digistore24 GmbH</strong> Verantwortlicher im Sinne der DSGVO. Ich erhalte nur die
          Daten, die zur Bereitstellung des Produkts erforderlich sind (z. B. Produkt, Lizenz, E-Mail-Adresse). Weitere
          Infos:{" "}
          <a href="https://www.digistore24.com/page/privacy" target="_blank" rel="noreferrer">
            Datenschutzerklärung Digistore24
          </a>
          .
        </p>

        <h3>6. Cookies / Tracking</h3>
        <p>
          Diese Website setzt aktuell keine Tracking-Tools ein. Falls Cookies (z. B. Consent-Banner) genutzt werden,
          erfolgt die Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO.
        </p>

        <h3>7. Ihre Rechte</h3>
        <ul>
          <li>Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerspruch (Art. 15–21 DSGVO)</li>
          <li>Widerruf erteilter Einwilligungen (Art. 7 Abs. 3 DSGVO)</li>
          <li>Beschwerderecht bei einer Aufsichtsbehörde (z. B. Landesdatenschutzbehörde Hessen)</li>
        </ul>
      </section>
    </>
  );
}

/* ---- Background ---- */
function AeroBackground() {
  const containerRef = useRef(null);
  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;
    const isMobile = window.matchMedia?.("(max-width:900px)").matches || false;
    const make = (cls, count) => {
      for (let i = 0; i < count; i++) {
        const el = document.createElement("span");
        el.className = cls;
        el.style.left = Math.round(Math.random() * 100) + "vw";
        el.style.top = Math.round(Math.random() * 100) + "vh";
        el.style.opacity = 0.2 + Math.random() * 0.3;
        root.appendChild(el);
      }
    };
    make("fx-cube", isMobile ? 2 : 6);
    make("fx-bokeh", isMobile ? 2 : 6);
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
        #fx-glass-overlay{ position:fixed; inset:0; pointer-events:none; background:linear-gradient(135deg,#eefcffef 0%,#d9f3ff55 60%,#a7f3ff22 100%); mix-blend-mode:lighten; opacity:.08; z-index:1 }
      `}</style>
    </>
  );
}
