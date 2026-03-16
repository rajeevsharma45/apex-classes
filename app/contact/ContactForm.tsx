"use client";

import { useState } from "react";
import s from "./contact.module.css";

export default function ContactForm() {
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "",
    phone: "", subject: "", message: "",
  });
  const [sent, setSent]       = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // TODO: wire to your backend / email service
    await new Promise((r) => setTimeout(r, 900));
    setSent(true);
    setLoading(false);
  }

  if (sent) {
    return (
      <div className={s.formCard}>
        <div className={s.successMsg}>
          <span className={s.successIcon}>✅</span>
          <div>
            <strong>Message sent!</strong> Thank you {form.firstName}. We'll get back to you within 24 hours.
          </div>
        </div>
        <button
          onClick={() => { setSent(false); setForm({ firstName: "", lastName: "", email: "", phone: "", subject: "", message: "" }); }}
          style={{ marginTop: 16, background: "none", border: "none", color: "#19573a", fontWeight: 600, cursor: "pointer", fontSize: 14, fontFamily: "var(--font-outfit), sans-serif" }}
        >
          ← Send another message
        </button>
      </div>
    );
  }

  return (
    <div className={s.formCard}>
      <h2 className={s.formTitle}>Get in Touch</h2>
      <p className={s.formSubtitle}>
        Fill the form below and our team will call you back within 24 hours.
      </p>

      <form onSubmit={handleSubmit}>
        {/* Name row */}
        <div className={s.formRow}>
          <div className={s.formGroup} style={{ marginBottom: 0 }}>
            <label className={s.formLabel}>First Name *</label>
            <input
              name="firstName" required
              value={form.firstName} onChange={handleChange}
              placeholder="Rahul"
              className={s.formInput}
            />
          </div>
          <div className={s.formGroup} style={{ marginBottom: 0 }}>
            <label className={s.formLabel}>Last Name *</label>
            <input
              name="lastName" required
              value={form.lastName} onChange={handleChange}
              placeholder="Sharma"
              className={s.formInput}
            />
          </div>
        </div>

        {/* Email */}
        <div className={s.formGroup}>
          <label className={s.formLabel}>Email Address *</label>
          <input
            type="email" name="email" required
            value={form.email} onChange={handleChange}
            placeholder="rahul@example.com"
            className={s.formInput}
          />
        </div>

        {/* Phone */}
        <div className={s.formGroup}>
          <label className={s.formLabel}>Phone Number</label>
          <input
            type="tel" name="phone" maxLength={10}
            value={form.phone} onChange={handleChange}
            placeholder="10-digit mobile number"
            className={s.formInput}
          />
        </div>

        {/* Subject */}
        <div className={s.formGroup}>
          <label className={s.formLabel}>Subject *</label>
          <input
            name="subject" required
            value={form.subject} onChange={handleChange}
            placeholder="e.g. Admission enquiry for JEE 2025–26"
            className={s.formInput}
          />
        </div>

        {/* Message */}
        <div className={s.formGroup}>
          <label className={s.formLabel}>Message</label>
          <textarea
            name="message"
            value={form.message} onChange={handleChange}
            placeholder="Write your notes or questions here…"
            className={s.formTextarea}
          />
        </div>

        <button type="submit" className={s.submitBtn} disabled={loading}>
          {loading ? "Sending…" : "Send Message →"}
        </button>
      </form>
    </div>
  );
}
