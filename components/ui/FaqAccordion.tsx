"use client";

import { useState } from "react";

interface FAQ { q: string; a: string; }

export default function FaqAccordion({ faqs }: { faqs: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="faq-list">
      {faqs.map((faq, i) => (
        <div key={i} className={`faq-item${open === i ? " open" : ""}`}>
          <button
            className="faq-question"
            onClick={() => setOpen(open === i ? null : i)}
          >
            {faq.q}
            <span className="faq-icon">+</span>
          </button>
          <div className="faq-answer">{faq.a}</div>
        </div>
      ))}
    </div>
  );
}
