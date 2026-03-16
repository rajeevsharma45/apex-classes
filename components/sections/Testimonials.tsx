import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="section-inner">

        <div className="testimonials-header reveal">
          <div className="section-label" style={{ justifyContent: "center" }}>Success Stories</div>
          <h2 className="font-display" style={{ fontSize: "clamp(32px,4vw,52px)", fontWeight: 700, lineHeight: 1.12, letterSpacing: "-0.8px", color: "var(--text-main)" }}>
            Heard From Our<br />Toppers
          </h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`testi-card reveal ${i === 1 ? "delay-1" : i === 2 ? "delay-2" : ""}`}
            >
              <div className="testi-quote-mark">&ldquo;</div>
              <p className="testi-text">{t.quote}</p>
              <div className="testi-divider" />
              <div className="testi-name">{t.name}</div>
              <div className="testi-meta">{t.meta}</div>
              <div className="testi-rank">{t.rank}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
