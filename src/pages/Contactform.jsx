// src/pages/Contactform.jsx
import React, { useState } from "react";
import { supabase } from "../supabaseClient";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    description: "",
  });
  const [status, setStatus] = useState("idle"); // "idle" | "loading" | "success" | "error"
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.description) return;

    setStatus("loading");
    setErrorMsg("");

    try {
      const { error } = await supabase.from("contact_messages").insert({
        name: form.name,
        email: form.email,
        description: form.description,
        user_agent: window.navigator.userAgent || null,
      });

      if (error) throw error;

      setStatus("success");
      setForm({ name: "", email: "", description: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMsg(
        "Could not send the message. Please try again or use email directly."
      );
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label className="field">
        <span>Name</span>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your name"
          required
        />
      </label>

      <label className="field">
        <span>Email</span>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="you@example.com"
          required
        />
      </label>

      <label className="field">
        <span>What do you want to build?</span>
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Short description of your idea, project or question."
          rows={4}
          required
        />
      </label>

      <button
        className="btn btn-large"
        type="submit"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Sending..." : "Send message"}
      </button>

      {status === "success" && (
        <p className="tiny contact-success">
          Message stored. I’ll follow up by email.
        </p>
      )}
      {status === "error" && (
        <p className="tiny contact-error">{errorMsg}</p>
      )}
    </form>
  );
}
