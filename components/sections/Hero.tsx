import Link from "next/link";
import { heroStats, coursePanels } from "@/lib/data";

const iconBgMap: Record<string, string> = {
  "bg-[#19573a]/30": "icon-bg-green",
  "bg-[#ed3237]/20": "icon-bg-red",
  "bg-amber-500/20": "icon-bg-amber",
  "bg-blue-600/20":  "icon-bg-blue",
};

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-pattern" />
      <div className="hero-grid" />

      <div className="hero-inner">

        {/* ── Left content ── */}
        <div>
          {/* Badge */}
          <div className="hero-badge anim-fade-up">
            <span className="hero-badge-dot" />
            Admissions Open — Session 2025–26
          </div>

          {/* Headline */}
          <h1 className="hero-title anim-fade-up anim-d1">
            Where Potential
            <span className="hero-title-accent">Becomes Rank.</span>
          </h1>

          {/* Tagline */}
          <p className="hero-tagline anim-fade-up anim-d2">
            Blossom the Seeds…
          </p>

          {/* Description */}
          <p className="hero-desc anim-fade-up anim-d3">
            Over three decades of shaping Rajasthan's brightest minds for
            IIT-JEE, NEET-UG, and national competitive examinations.
            Rooted in Jodhpur. Proven across India.
          </p>

          {/* CTAs */}
          <div className="hero-actions anim-fade-up anim-d4">
            <Link href="#admission" className="btn-primary">
              Begin Your Journey →
            </Link>
            <Link href="#courses" className="btn-outline">
              Explore Courses
            </Link>
          </div>

          {/* Stats */}
          <div className="hero-stats anim-fade-up anim-d4">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <div className="hero-stat-value">{stat.value}</div>
                <div className="hero-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right panel ── */}
        <div className="hero-panel anim-fade-in">
          <p className="hero-panel-label">Our Programmes</p>

          {coursePanels.map((panel, i) => (
            <Link
              key={i}
              href="#courses"
              className={`course-pill${panel.active ? " active" : ""}`}
            >
              <div className={`course-pill-icon ${iconBgMap[panel.iconBg] ?? "icon-bg-green"}`}>
                {panel.icon}
              </div>
              <div>
                <div className="course-pill-name">{panel.name}</div>
                <div className="course-pill-sub">{panel.sub}</div>
              </div>
              <div className="course-pill-arrow">›</div>
            </Link>
          ))}

          <div className="panel-notice">
            <span className="panel-notice-dot" />
            <p>Early bird scholarships available for registrations before 31 March 2025.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
