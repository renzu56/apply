import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import ApplyPage from "./pages/ApplyPage";

// Gumroad cover image URLs
const COVER_URLS = [
  "https://public-files.gumroad.com/v3sv7shg4ylkw7d25593t94su50o",
  "https://public-files.gumroad.com/agj78oacqss5tre9xdrr59o4rdyv"
];
const GUMROAD_URL = "https://lennardfeist.gumroad.com/l/slitoex";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 650);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 650);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Responsive style for the product box
  const productBoxStyle = isMobile
    ? {
        position: "static",
        width: "100vw",
        maxWidth: "100vw",
        left: 0,
        right: 0,
        top: 0,
        transform: "none",
        background: "rgba(255,255,255,0.95)",
        padding: "14px 6vw 14px 6vw",
        borderRadius: "0 0 18px 18px",
        alignItems: "center",
        minWidth: 0,
        boxShadow: "0 2px 12px 0 rgba(76,110,255,0.11)",
        display: "flex",
        flexDirection: "column",
        gap: "0.7rem",
        cursor: "pointer",
        marginBottom: "16px",
        border: "none",
        overflow: "hidden",
        backdropFilter: "blur(7px)",
        zIndex: 12,
      }
    : {
        position: "absolute",
        left: 20,
        top: "50%",
        transform: "translateY(-50%)",
        background: "rgba(255,255,255,0.65)",
        padding: "20px 28px 22px 28px",
        borderRadius: "20px",
        boxShadow: "0 16px 48px 0 rgba(76,110,255,0.17), 0 3px 16px 0 rgba(30,30,90,0.10)",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "0.7rem",
        cursor: "pointer",
        minWidth: "240px",
        backdropFilter: "blur(14px)",
        border: "2px solid rgba(255,255,255,0.31)",
        overflow: "hidden",
        transition: "box-shadow 0.21s, background 0.17s",
        zIndex: 11,
      };

  // Responsive highlight style
  const highlightStyle = isMobile
    ? {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "24%",
        background:
          "linear-gradient(110deg,rgba(255,255,255,0.19) 0%,rgba(255,255,255,0.07) 98%)",
        borderRadius: "0 0 68px 68px / 15% 15% 85% 85%",
        pointerEvents: "none",
        zIndex: 1
      }
    : {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "50%",
        background:
          "linear-gradient(110deg,rgba(255,255,255,0.19) 0%,rgba(255,255,255,0.04) 98%)",
        borderRadius: "20px 20px 68px 68px / 18% 18% 85% 85%",
        pointerEvents: "none",
        zIndex: 1
      };

  return (
    <Router>
      <Navbar />
      <div style={{ position: "relative", minHeight: "100vh" }}>
        {/* Glassy Floating Product Box */}
        <div
          onClick={() => window.open(GUMROAD_URL, "_blank")}
          style={productBoxStyle}
          onMouseOver={e => {
            if (!isMobile) {
              e.currentTarget.style.boxShadow =
                "0 24px 60px 0 rgba(76,110,255,0.28), 0 5px 20px 0 rgba(30,30,90,0.16)";
              e.currentTarget.style.background = "rgba(255,255,255,0.82)";
            }
          }}
          onMouseOut={e => {
            if (!isMobile) {
              e.currentTarget.style.boxShadow =
                "0 16px 48px 0 rgba(76,110,255,0.17), 0 3px 16px 0 rgba(30,30,90,0.10)";
              e.currentTarget.style.background = "rgba(255,255,255,0.65)";
            }
          }}
        >
          {/* Glossy highlight */}
          <div style={highlightStyle} />
          {/* Titles */}
          <span style={{
            color: "#2946ff",
            fontWeight: 600,
            fontSize: "1.09rem",
            zIndex: 2
          }}>
            Current Products
          </span>
          <span style={{
            color: "#555",
            fontSize: "1.01rem",
            marginBottom: 4,
            zIndex: 2
          }}>
            Slito EX
          </span>
          <div style={{ display: "flex", gap: "0.5rem", zIndex: 2 }}>
            {COVER_URLS.map((url, idx) => (
              <img
                key={idx}
                src={url}
                alt={`Slito EX cover ${idx + 1}`}
                style={{
                  width: "92px",
                  height: "auto",
                  borderRadius: "10px",
                  boxShadow: "0 3px 12px 0 rgba(50,80,200,0.10)"
                }}
              />
            ))}
          </div>
        </div>
        {/* Main content routes */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/apply" element={<ApplyPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
