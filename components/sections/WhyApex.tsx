import { features, timeline } from "@/lib/data";

export default function WhyApex() {
  return (
    <section className="why-section">
      <div className="section-inner">

        {/* Heading */}
        <div className="reveal">
          <div className="section-label">Why Apex Classes</div>
          <h2 className="font-display" style={{ fontSize: "clamp(32px,4vw,52px)", fontWeight: 700, lineHeight: 1.12, letterSpacing: "-0.8px", color: "var(--text-main)", marginBottom: 14 }}>
            Built Different,<br />by Design
          </h2>
          <p style={{ fontSize: 16.5, lineHeight: 1.72, color: "var(--text-muted)", maxWidth: 540 }}>
            More than a coaching institute — a complete learning ecosystem
            refined over thirty-one years of mentoring Rajasthan's best.
          </p>
        </div>

        <div className="why-grid">

          {/* Feature cards */}
          <div className="feature-list">
            {features.map((feat, i) => (
              <div
                key={i}
                className={`feature-card reveal ${i === 1 ? "delay-1" : i === 2 ? "delay-2" : i === 3 ? "delay-3" : ""}`}
              >
                <div className="feature-icon">{feat.icon}</div>
                <div>
                  <div className="feature-title">{feat.title}</div>
                  <div className="feature-desc">{feat.description}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Timeline card */}
          <div className="timeline-card reveal delay-2">
            <h3 className="timeline-card-title">Our Journey</h3>
            <p className="timeline-card-sub">Three decades of milestones</p>

            <div className="timeline-wrap">
              {timeline.map((item, i) => (
                <div key={i} className="timeline-item">
                  <div className="timeline-year">{item.year}</div>
                  <div className="timeline-text">{item.text}</div>
                </div>
              ))}
            </div>

            <div className="trust-badge">
              <span className="trust-badge-icon">🏆</span>
              <div>
                <div className="trust-badge-title">31 Years of Trust</div>
                <div className="trust-badge-sub">10,000+ students mentored across Rajasthan</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
