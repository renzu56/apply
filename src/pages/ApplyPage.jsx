// src/pages/ApplyPage.jsx
import React, { useState } from "react";

// Make sure you have a .env file in your project root with:
// VITE_SUPABASE_FUNCTION_URL="https://jjcyzarilxcccmhvnzhy.functions.supabase.co/applyAffiliate"
// VITE_SUPABASE_ANON_KEY="your-supabase-anon-key"
const APPLY_URL = import.meta.env.VITE_SUPABASE_FUNCTION_URL;
const ANON_KEY  = import.meta.env.VITE_SUPABASE_ANON_KEY;

const ApplyPage = () => {
  const [sent, setSent]       = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      name:      e.target.name.value,
      instagram: e.target.instagram.value,
      email:     e.target.email.value,
    };

    try {
      const res = await fetch(APPLY_URL, {
        method:  "POST",
        headers: {
          "Content-Type":  "application/json",
          "apikey":         ANON_KEY,
          "Authorization":  `Bearer ${ANON_KEY}`,
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error(`Server responded with ${res.status}`);
      }
      setSent(true);
    } catch (err) {
      console.error("Submission error:", err);
      alert("There was an error submitting your application. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    return (
      <div className="center-container">
        <div className="card">
          <h2>Thank you!</h2>
          <p>Check your inbox for your affiliate credentials.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="center-container">
      <form className="card" onSubmit={handleSubmit}>
        <h2>Affiliate Application</h2>
        <input
          name="name"
          type="text"
          required
          placeholder="Your Name"
          style={inputStyle}
        />
        <input
          name="instagram"
          type="text"
          required
          placeholder="Instagram Username"
          style={inputStyle}
        />
        <input
          name="email"
          type="email"
          required
          placeholder="Your Email"
          style={inputStyle}
        />
        <button type="submit" className="button" disabled={loading}>
          {loading ? "Submitting..." : "Submit Application"}
        </button>
      </form>
    </div>
  );
};

const inputStyle = {
  display:      "block",
  width:        "100%",
  margin:       "1rem 0",
  padding:      "0.5rem",
  borderRadius: "8px",
  border:       "1px solid #ddd",
};

export default ApplyPage;
