import Link from "next/link";
import { courses } from "@/lib/data";
import type { CardAccent } from "@/types";

const tagClass: Record<CardAccent, string> = {
  green:  "tag-green",
  red:    "tag-red",
  gold:   "tag-gold",
  navy:   "tag-navy",
  purple: "tag-purple",
  slate:  "tag-slate",
};

const checkClass: Record<CardAccent, string> = {
  green:  "check-green",
  red:    "check-red",
  gold:   "check-gold",
  navy:   "check-navy",
  purple: "check-purple",
  slate:  "check-slate",
};

const delayClass: Record<number, string> = { 0: "", 1: "delay-1", 2: "delay-2" };

export default function Courses() {
  return (
    <section className="courses-section" id="courses">
      <div className="section-inner">

        {/* Header */}
        <div className="courses-header reveal">
          <div>
            <div className="section-label">Programmes</div>
            <h2 className="font-display" style={{ fontSize: "clamp(32px,4vw,52px)", fontWeight: 700, lineHeight: 1.12, letterSpacing: "-0.8px", color: "var(--text-main)" }}>
              Every Path to the Top<br />Starts Here
            </h2>
          </div>
          <Link href="/courses" className="btn-primary" style={{ flexShrink: 0, background: "var(--green)" }}>
            View All Courses →
          </Link>
        </div>

        {/* Grid */}
        <div className="courses-grid">
          {courses.map((course, i) => (
            <div
              key={course.id}
              className={`c-card c-card-${course.accent} reveal ${delayClass[i % 3]}`}
            >
              <span className={`c-tag ${tagClass[course.accent]}`}>{course.tag}</span>

              <h3 className="c-card-title">{course.title}</h3>
              <p className="c-card-subtitle">{course.subtitle}</p>

              <ul className="c-features">
                {course.features.map((feat, fi) => (
                  <li key={fi} className="c-feature-item">
                    <span className={`c-check ${checkClass[course.accent]}`}>✓</span>
                    {feat}
                  </li>
                ))}
              </ul>

              <Link href={course.href} className="c-explore-link">
                Explore Programme →
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
