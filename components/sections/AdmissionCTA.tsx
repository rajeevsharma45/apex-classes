"use client";

import { useState } from "react";

export default function AdmissionCTA() {
  const [phone, setPhone] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert(`Thank you! We will call ${phone} shortly.`);
    setPhone("");
  }

  return (
    <section className="admission-section" id="admission">
      <div className="admission-inner">

        <div>
          <h2 className="admission-title">
            Start Your Journey<br />With Apex Today.
          </h2>
          <p className="admission-sub">
            Limited seats per batch. Scholarships available for meritorious students.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="admission-form">
          <input
            type="tel"
            required
            maxLength={10}
            pattern="[0-9]{10}"
            placeholder="Your 10-digit mobile number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="admission-input"
          />
          <button type="submit" className="btn-white">
            Get a Callback →
          </button>
        </form>

      </div>
    </section>
  );
}
