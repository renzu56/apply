import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="center-container" style={{ position: "relative", minHeight: "100vh" }}>
      <div className="card">
        <h1>Grow With Us. Share. Earn. Succeed.</h1>
        <button className="button" onClick={() => navigate("/apply")}>
          Apply to Become an Affiliate
        </button>
      </div>

      {/* Small circular Portfolio button in bottom left */}
      <button
        onClick={() => navigate("/about")}
        style={{
          position: "fixed",
          bottom: "18px",
          left: "18px",
          width: "42px",
          height: "42px",
          borderRadius: "50%",
          background: "#2946ff",
          color: "#fff",
          border: "none",
          cursor: "pointer",
          fontSize: "0.65rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          zIndex: 100
        }}
        title="Portfolio"
      >
        P
      </button>
    </div>
  );
};

export default LandingPage;
