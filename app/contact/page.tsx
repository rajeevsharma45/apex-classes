import type { Metadata } from "next";
import Link from "next/link";
import PageLayout  from "@/components/layout/PageLayout";
import ContactForm from "./ContactForm";
import s from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact Us | Apex Classes Jodhpur",
  description:
    "Get in touch with Apex Classes Jodhpur. Call us, email us, or fill the form for admission enquiries, batch details, and fee information.",
};

const infoCards = [
  {
    icon:  "📍",
    title: "Address",
    lines: ["3/9 K.B.H. Road,", "Jodhpur, Rajasthan — 342001"],
    href:  "https://maps.google.com/?q=Apex+Classes+Jodhpur",
    cta:   "Get Directions →",
  },
  {
    icon:  "📞",
    title: "Phone",
    lines: ["+91 94141 32063", "+91 79765 81910"],
    href:  "tel:+919414132063",
    cta:   "Call Now →",
  },
  {
    icon:  "✉️",
    title: "Email Address",
    lines: ["apexclassesjdh@gmail.com"],
    href:  "mailto:apexclassesjdh@gmail.com",
    cta:   "Send Email →",
  },
];

const whyCards = [
  { icon: "⚡", title: "Quick Response",  desc: "We respond to all enquiries within 24 hours — usually within the hour." },
  { icon: "🎯", title: "Expert Advice",   desc: "Speak directly with faculty who can guide your course selection and preparation strategy." },
  { icon: "📅", title: "Flexible Visits", desc: "Visit us Monday–Saturday 8 AM–8 PM. No appointment needed for a walk-in counselling session." },
  { icon: "🤝", title: "Free Counselling", desc: "First counselling session is completely free — for students and parents both." },
];

export default function ContactPage() {
  return (
    <PageLayout>

      {/* ══════════════════════════════════════════════════════════
          1. HERO
      ══════════════════════════════════════════════════════════ */}
      <section
        style={{ backgroundColor: "#0f3b27", position: "relative", overflow: "hidden", padding: "72px 0 60px" }}
      >
        <div className="hero-pattern" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />
        <div className="hero-grid"   style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />

        <div style={{ position: "relative", zIndex: 10, maxWidth: 1240, margin: "0 auto", padding: "0 24px" }}>
          <div className="jee-breadcrumb" style={{ marginBottom: 20 }}>
            <Link href="/" className="jee-breadcrumb-link">Home</Link>
            <span>›</span>
            <span>Contact Us</span>
          </div>

          <div style={{ maxWidth: 640 }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 7,
              padding: "5px 14px", borderRadius: 100,
              border: "1px solid rgba(25,87,58,0.5)",
              background: "rgba(25,87,58,0.2)",
              fontSize: 11, fontWeight: 700,
              textTransform: "uppercase", letterSpacing: "0.1em",
              color: "#a8f0c8", marginBottom: 18,
              fontFamily: "var(--font-outfit), sans-serif",
            }}>
              📬 We Reply Within 24 Hours
            </div>

            <h1 className="jee-title">
              Contact Us
              <span style={{ display: "block", fontStyle: "italic", color: "#ed3237" }}>
                Let&apos;s Talk
              </span>
            </h1>

            <p className="jee-desc" style={{ maxWidth: 540 }}>
              Have questions about admissions, fees, or batch schedules?
              Reach out — our counselling team is here to help you choose
              the right programme for your goals.
            </p>

            {/* Quick contact pills */}
            <div className="jee-actions">
              <a href="tel:+919414132063" className="btn-primary">
                📞 Call Now
              </a>
              <a href="https://wa.me/919414132063" target="_blank" rel="noopener noreferrer"
                className="jee-btn-ghost">
                💬 WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          2. INFO CARDS
      ══════════════════════════════════════════════════════════ */}
      <section className="jee-section-light">
        <div className="jee-inner">
          <div className={s.infoGrid}>
            {infoCards.map((card, i) => (
              <div key={i} className={`${s.infoCard} reveal ${i === 1 ? "delay-1" : i === 2 ? "delay-2" : ""}`}>
                <div className={s.infoIconWrap}>{card.icon}</div>
                <div className={s.infoTitle}>{card.title}</div>
                <div className={s.infoText}>
                  {card.lines.map((line, li) => (
                    <span key={li} style={{ display: "block" }}>{line}</span>
                  ))}
                </div>
                <a href={card.href} target="_blank" rel="noopener noreferrer"
                  className={s.infoLink} style={{ marginTop: 12, fontWeight: 600, fontSize: 13.5 }}>
                  {card.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          3. MAP + FORM
      ══════════════════════════════════════════════════════════ */}
      <section className="jee-section-cream">
        <div className="jee-inner">
          <div className="reveal">
            <div className={s.sectionLabel}>Find Us & Write to Us</div>
            <h2 className="jee-section-title">Visit or Send a Message</h2>
            <p className="jee-section-desc">
              Come visit our campus in Jodhpur or fill the form — whichever
              works best for you.
            </p>
          </div>

          <div className={s.mainGrid}>

            {/* Left — map + address */}
            <div className={`${s.mapBlock} reveal`}>
              {/* Google Maps embed */}
              <div className={s.mapEmbed}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d14317.178635730434!2d73.0289384!3d26.2196137!3m2!1i1024!2i768!4f13.1!2m1!1sapex%20classes%20jodhpur!5e0!3m2!1sen!2skr!4v1773656128679!5m2!1sen!2skr"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Apex Classes Jodhpur Location"
                />
              </div>

              {/* Address detail card */}
              <div className={s.addressCard}>
                <div className={s.addressRow}>
                  <div className={s.addressIcon}>📍</div>
                  <div>
                    <div className={s.addressLabel}>Address</div>
                    <div className={s.addressValue}>
                      3/9 K.B.H. Road, Jodhpur, Rajasthan — 342001
                    </div>
                  </div>
                </div>

                <div className={s.addressRow}>
                  <div className={s.addressIcon}>📞</div>
                  <div>
                    <div className={s.addressLabel}>Phone</div>
                    <div className={s.addressValue}>
                      <a href="tel:+919414132063">+91 94141 32063</a>
                      <a href="tel:+917976581910">+91 79765 81910</a>
                    </div>
                  </div>
                </div>

                <div className={s.addressRow}>
                  <div className={s.addressIcon}>✉️</div>
                  <div>
                    <div className={s.addressLabel}>Email</div>
                    <div className={s.addressValue}>
                      <a href="mailto:apexclassesjdh@gmail.com">apexclassesjdh@gmail.com</a>
                    </div>
                  </div>
                </div>

                {/* Office hours */}
                <div className={s.hoursStrip}>
                  <div className={s.hoursItem}>
                    <div className={s.hoursDay}>Mon – Sat</div>
                    <div className={s.hoursTime}>8:00 AM – 8:00 PM</div>
                  </div>
                  <div className={s.hoursDivider} />
                  <div className={s.hoursItem}>
                    <div className={s.hoursDay}>Sunday</div>
                    <div className={s.hoursTime}>10:00 AM – 2:00 PM</div>
                  </div>
                  <div className={s.hoursDivider} />
                  <div className={s.hoursItem}>
                    <div className={s.hoursDay}>Walk-ins</div>
                    <div className={s.hoursTime}>Welcome</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — contact form */}
            <div className="reveal delay-1">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          4. WHY CONTACT US — dark bg
      ══════════════════════════════════════════════════════════ */}
      <section className="jee-section-dark">
        <div className="numbers-bg" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />
        <div className="jee-inner jee-inner-z">
          <div className="reveal jee-text-center">
            <div className="jee-label-dark" style={{ justifyContent: "center" }}>
              Why Reach Out
            </div>
            <h2 className="jee-section-title-dark">We're Here to Help</h2>
            <p className="jee-section-desc-dark" style={{ margin: "0 auto", maxWidth: 460 }}>
              No pressure, no hard sell — just honest guidance to help you
              make the right decision for your child.
            </p>
          </div>

          <div className={s.whyGrid}>
            {whyCards.map((card, i) => (
              <div key={i} className={`${s.whyCard} reveal ${i === 1 ? "delay-1" : i === 2 ? "delay-2" : i === 3 ? "delay-3" : ""}`}>
                <div className={s.whyIcon}>{card.icon}</div>
                <div className={s.whyTitle}>{card.title}</div>
                <div className={s.whyDesc}>{card.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          5. CTA STRIP
      ══════════════════════════════════════════════════════════ */}
      <section className="jee-section-light">
        <div className="jee-inner">
          <div style={{
            background: "#19573a", borderRadius: 24,
            padding: "48px 40px",
            display: "flex", flexWrap: "wrap",
            alignItems: "center", justifyContent: "space-between", gap: 28,
          }} className="reveal">
            <div>
              <h2 style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: "clamp(26px, 3vw, 38px)",
                fontWeight: 700, color: "#ffffff",
                lineHeight: 1.2, marginBottom: 8,
              }}>
                Ready to Start Your Journey?
              </h2>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.65)", fontFamily: "var(--font-outfit), sans-serif" }}>
                Admissions open for Session 2025–26. Limited seats per batch.
              </p>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <a href="tel:+919414132063"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 7,
                  padding: "13px 24px", borderRadius: 8,
                  background: "#ffffff", color: "#19573a",
                  fontSize: 15, fontWeight: 700, textDecoration: "none",
                  fontFamily: "var(--font-outfit), sans-serif",
                }}>
                📞 Call Us Now
              </a>
              <a href="https://wa.me/919414132063" target="_blank" rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 7,
                  padding: "12px 22px", borderRadius: 8,
                  border: "1px solid rgba(255,255,255,0.35)",
                  background: "transparent", color: "rgba(255,255,255,0.85)",
                  fontSize: 15, fontWeight: 500, textDecoration: "none",
                  fontFamily: "var(--font-outfit), sans-serif",
                }}>
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

    </PageLayout>
  );
}
