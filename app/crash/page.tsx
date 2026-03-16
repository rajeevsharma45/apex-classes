import type { Metadata } from "next";
import Link from "next/link";
import PageLayout   from "@/components/layout/PageLayout";
import FaqAccordion from "@/components/ui/FaqAccordion";
import s from "./crash.module.css";
import {
  crashOverview,
  crashSubjects,
  crashProgrammeTypes,
  crashFAQs,
  crashHighlights,
  crashCourseDetails,
} from "@/lib/crash-data";

export const metadata: Metadata = {
  title: "Crash Course (JEE & NEET) | Apex Classes Jodhpur",
  description:
    "30–60 day intensive crash courses for JEE Main, JEE Advanced and NEET-UG. High-yield revision, daily mocks, expert faculty. Limited seats.",
};

export default function CrashPage() {
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
          <div className="jee-hero-grid">

            {/* Left */}
            <div>
              <div className="jee-breadcrumb">
                <Link href="/" className="jee-breadcrumb-link">Home</Link>
                <span>›</span>
                <span>Crash Course</span>
              </div>

              <div className={s.crashTag}>⚡ Intensive Revision</div>

              <h1 className="jee-title">
                Crash Course
                <span className={s.titleAccent}>JEE & NEET</span>
              </h1>

              <p className="jee-tagline">Blossom the Seeds…</p>

              <p className="jee-desc">
                30 to 60 days of high-intensity, high-yield revision for JEE Main,
                JEE Advanced and NEET-UG. Expert faculty, daily mocks, and
                laser-focused exam strategy — because every day counts now.
              </p>

              <div className="jee-actions">
                <Link href="#admission" className="btn-primary">Enrol Now →</Link>
                <Link href="#courses"   className="jee-btn-ghost">View Courses</Link>
              </div>

              <div className="jee-stats">
                {crashHighlights.map((h) => (
                  <div key={h.lbl} className="jee-stat-pill">
                    <span className={s.statVal}>{h.val}</span>
                    <span className="jee-stat-lbl">{h.lbl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right card */}
            <div className="jee-card">
              <p className="jee-card-title">Course at a Glance</p>
              {crashCourseDetails.map((row) => (
                <div key={row.label} className="jee-card-row">
                  <span className="jee-card-label">{row.label}</span>
                  <span className={row.accent ? s.cardValueAccent : "jee-card-value"}>
                    {row.value}
                  </span>
                </div>
              ))}
              <div style={{ marginTop: 20 }}>
                <Link href="#admission" className={s.applyBtn}>Apply Now →</Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          2. OVERVIEW
      ══════════════════════════════════════════════════════════ */}
      <section className="jee-section-light">
        <div className="jee-inner">
          <div className="reveal">
            <div className={s.sectionLabel}>Why Apex Crash Course</div>
            <h2 className="jee-section-title">Speed. Focus. Results.</h2>
            <p className="jee-section-desc">
              When time is short, strategy matters more than hours. Our crash
              courses are built for students who want maximum output in minimum
              time — without cutting corners.
            </p>
          </div>

          <div className="jee-3col-grid">
            {crashOverview.map((item, i) => (
              <div key={i} className={`jee-white-card reveal ${i === 1 ? "delay-1" : i === 2 ? "delay-2" : ""}`}>
                <div className={s.iconBox}>{item.icon}</div>
                <div className="jee-card-heading">{item.title}</div>
                <div className="jee-card-body">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          3. PROGRAMME TYPES
      ══════════════════════════════════════════════════════════ */}
      <section className="jee-section-cream" id="courses">
        <div className="jee-inner">
          <div className="reveal">
            <div className={s.sectionLabel}>Choose Your Duration</div>
            <h2 className="jee-section-title">Pick Your Intensity.</h2>
            <p className="jee-section-desc">
              Three course lengths designed around where you are in your preparation journey.
            </p>
          </div>

          <div className="jee-3col-grid">
            {crashProgrammeTypes.map((prog, i) => (
              <div
                key={i}
                className={`reveal ${i === 1 ? "delay-1" : i === 2 ? "delay-2" : ""} ${s.progCard} ${i === 1 ? s.progFeatured : ""}`}
              >
                {i === 1 && <div className={s.popularBadge}>Most Popular</div>}
                <div className={s.progDuration}>{prog.duration}</div>
                <div className={s.progIcon}>{prog.icon}</div>
                <div className={s.progTag}>{prog.tag}</div>
                <div className={s.progTitle}>{prog.title}</div>
                <div className={s.progDesc}>{prog.desc}</div>
                <ul className={s.progFeatures}>
                  {prog.features.map((f, fi) => (
                    <li key={fi} className={s.progFeature}>
                      <span className={s.check}>✓</span>{f}
                    </li>
                  ))}
                </ul>
                <Link href="#admission" className={i === 1 ? s.progBtnPrimary : s.progBtn}>
                  Enquire Now →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          4. SUBJECTS
      ══════════════════════════════════════════════════════════ */}
      <section className="jee-section-dark" id="syllabus">
        <div className="numbers-bg" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />
        <div className="jee-inner jee-inner-z">
          <div className="reveal">
            <div className="jee-label-dark">Subjects Available</div>
            <h2 className="jee-section-title-dark">Four Subjects.<br />One Mission.</h2>
            <p className="jee-section-desc-dark">
              Join for a single subject or the full package — each subject
              crash course is a standalone intensive programme.
            </p>
          </div>

          <div className={s.subjectsGrid}>
            {crashSubjects.map((sub, i) => (
              <div key={i} className={`reveal ${i === 1 ? "delay-1" : i === 2 ? "delay-2" : i === 3 ? "delay-3" : ""} ${s.subjectCard}`}>
                {/* Subject header — reuse jee globals classes */}
                <div className="jee-sub-header">
                  <div className={`jee-sub-icon ${
                    sub.iconClass === "sub-icon-green" ? "jee-icon-green" :
                    sub.iconClass === "sub-icon-red"   ? "jee-icon-red"   : "jee-icon-amber"
                  }`}>
                    {sub.icon}
                  </div>
                  <div>
                    <div className="jee-sub-name">{sub.name}</div>
                    <div className="jee-sub-tag">{sub.tag}</div>
                  </div>
                </div>

                <p className={s.subjectAbout}>{sub.about}</p>

                <div className={s.topicsLabel}>Key Topics</div>
                <ul className="jee-topics">
                  {sub.topics.map((t, ti) => (
                    <li key={ti} style={{ display: "flex", alignItems: "center", gap: 9, fontSize: 13, color: "rgba(255,255,255,0.6)", marginBottom: 6 }}>
                      <span className={s.dot} />
                      {t}
                    </li>
                  ))}
                </ul>

                <Link href="#admission" className={s.subjectCta}>
                  Join This Subject →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          5. URGENCY STRIP
      ══════════════════════════════════════════════════════════ */}
      <section className="jee-section-light">
        <div className="jee-inner">
          <div className={`${s.urgencyStrip} reveal`}>
            <div className={s.urgencyLeft}>
              <div className={s.urgencyIcon}>⏰</div>
              <div>
                <div className={s.urgencyTitle}>Seats Fill Up Fast</div>
                <div className={s.urgencyDesc}>
                  Crash course batches are small by design — max 30 students.
                  Once a batch fills, the next one starts only after the exam cycle.
                </div>
              </div>
            </div>
            <Link href="tel:+919414132063" className={s.urgencyBtn}>
              📞 Call to Reserve Your Seat
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          6. FAQ
      ══════════════════════════════════════════════════════════ */}
      <section className="jee-section-cream">
        <div className="jee-inner">
          <div className="reveal jee-text-center">
            <div className={`${s.sectionLabel} ${s.sectionLabelCenter}`}>FAQs</div>
            <h2 className="jee-section-title">Common Questions</h2>
          </div>
          <FaqAccordion faqs={crashFAQs} />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          7. ADMISSION CTA
      ══════════════════════════════════════════════════════════ */}
      <section className="jee-section-light" id="admission">
        <div className="jee-inner">
          <div className={`${s.ctaBand} reveal`}>
            <div>
              <h2 className={s.ctaTitle}>Exams Are Close.<br />Don't Wait.</h2>
              <p className={s.ctaSub}>Limited seats per batch. Call us now to confirm availability.</p>
            </div>
            <div className={s.ctaBtns}>
              <Link href="tel:+919414132063" className={s.ctaBtnOrange}>📞 Call Us Now</Link>
              <Link href="/#admission"       className={s.ctaBtnGhost}>Request Callback</Link>
            </div>
          </div>
        </div>
      </section>

    </PageLayout>
  );
}
