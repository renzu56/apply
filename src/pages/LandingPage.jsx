import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="center-container">
      <div className="card">
        <h1>Grow With Us. Share. Earn. Succeed.</h1>
        <button className="button" onClick={() => navigate("/apply")}>
          Apply to Become an Affiliate
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
