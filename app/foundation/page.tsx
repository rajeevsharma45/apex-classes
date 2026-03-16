import type { Metadata } from "next";
import Link from "next/link";
import PageLayout   from "@/components/layout/PageLayout";
import FaqAccordion from "@/components/ui/FaqAccordion";
import s from "./foundation.module.css";
import {
  foundationOverview,
  foundationSubjects,
  foundationProgrammeStructure,
  foundationExams,
  foundationFAQs,
  foundationHighlights,
  foundationCourseDetails,
} from "@/lib/foundation-data";

export const metadata: Metadata = {
  title: "Pre-Foundation IX & X | Apex Classes Jodhpur",
  description:
    "Apex Classes Foundation programme for Class IX & X — covering 9 subjects with dual advantage for board exams and competitive tests like STSE, NTSE and Olympiads.",
};

export default function FoundationPage() {
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

            {/* ── Left ── */}
            <div>
              <div className="jee-breadcrumb">
                <Link href="/" className="jee-breadcrumb-link">Home</Link>
                <span>›</span>
                <span>Foundation</span>
              </div>

              <div className={s.heroTag}>🎓 Class IX & X</div>

              <h1 className="jee-title">
                Pre-Foundation
                <span className={s.titleAccent}>IX & X</span>
              </h1>

              <p className="jee-tagline">Blossom the Seeds…</p>

              <p className="jee-desc">
                Apex Classes' comprehensive foundation programme for Class IX &
                X — covering 9 subjects with a unique dual advantage: complete
                board exam preparation AND competitive exam readiness for STSE,
                NTSE, NSO and Olympiads.
              </p>

              <div className="jee-actions">
                <Link href="#admission" className="btn-primary">Enrol for 2025–26 →</Link>
                <Link href="#subjects"  className="jee-btn-ghost">View Subjects</Link>
              </div>

              <div className="jee-stats">
                {foundationHighlights.map((h) => (
                  <div key={h.lbl} className="jee-stat-pill">
                    <span className={s.statVal}>{h.val}</span>
                    <span className="jee-stat-lbl">{h.lbl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right card ── */}
            <div className="jee-card">
              <p className="jee-card-title">Course at a Glance</p>
              {foundationCourseDetails.map((row) => (
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
            <div className={s.sectionLabel}>About the Programme</div>
            <h2 className="jee-section-title">Why Start at Foundation?</h2>
            <p className="jee-section-desc">
              Students who start competitive exam preparation from Class IX have
              a 2-year head start. Our Foundation programme builds the conceptual
              depth that makes JEE and NEET preparation dramatically easier.
            </p>
          </div>

          <div className="jee-3col-grid">
            {foundationOverview.map((item, i) => (
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
          3. SUBJECTS — dark bg, 3-col grid
      ══════════════════════════════════════════════════════════ */}
      <section className="jee-section-dark" id="subjects">
        <div className="numbers-bg" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />
        <div className="jee-inner jee-inner-z">
          <div className="reveal">
            <div className="jee-label-dark">Subjects Covered</div>
            <h2 className="jee-section-title-dark">
              9 Subjects.<br />One Programme.
            </h2>
            <p className="jee-section-desc-dark">
              Every subject from the Class IX & X curriculum covered in depth —
              from Science and Maths to Languages and Social Studies.
            </p>
          </div>

          <div className={s.subjectsGrid}>
            {foundationSubjects.map((sub, i) => (
              <div
                key={i}
                className={`reveal ${i % 3 === 1 ? "delay-1" : i % 3 === 2 ? "delay-2" : ""} ${s.subjectCard}`}
              >
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

                <ul style={{ listStyle: "none", marginTop: 4 }}>
                  {sub.topics.map((t, ti) => (
                    <li key={ti} className={s.topicItem}>
                      <span className={s.subDot} />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Dual advantage callout */}
          <div className={`${s.dualBox} reveal`}>
            <div className={s.dualLeft}>
              <div className={s.dualTitle}>Dual Advantage — Board + Competitive</div>
              <div className={s.dualDesc}>
                Our unique approach simultaneously prepares students for their
                Class X board exams AND national competitive tests. One curriculum,
                two powerful outcomes — so students don't need to split their time.
              </div>
            </div>
            <div className={s.dualPills}>
              <div className={`${s.dualPill} ${s.dualPillBoard}`}>
                <span>🎓</span>
                <span>Board Excellence — RBSE / CBSE</span>
              </div>
              <div className={`${s.dualPill} ${s.dualPillComp}`}>
                <span>🏆</span>
                <span>STSE · NTSE · NSO · IMO</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          4. EXAMS TARGETED — light bg
      ══════════════════════════════════════════════════════════ */}
      <section className="jee-section-light">
        <div className="jee-inner">
          <div className="reveal">
            <div className={s.sectionLabel}>Exams We Prepare For</div>
            <h2 className="jee-section-title">STSE | NTSE | Olympiads</h2>
            <p className="jee-section-desc">
              Our Foundation students consistently qualify for national and
              state-level competitive exams — winning scholarships and gaining
              a critical edge before Class XI.
            </p>
          </div>

          <div className={s.examsGrid}>
            {foundationExams.map((exam, i) => (
              <div key={i} className={`reveal ${i === 1 ? "delay-1" : i === 2 ? "delay-2" : i === 3 ? "delay-3" : ""} ${s.examCard}`}>
                <div className={s.examIcon}>{exam.icon}</div>
                <div className={s.examName}>{exam.name}</div>
                <div className={s.examFull}>{exam.full}</div>
                <div className={s.examDesc}>{exam.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          5. PROGRAMME STRUCTURE — cream bg
      ══════════════════════════════════════════════════════════ */}
      <section className="jee-section-cream">
        <div className="jee-inner">
          <div className="reveal">
            <div className={s.sectionLabel}>How It Works</div>
            <h2 className="jee-section-title">2 Years. 4 Phases.<br />Board + Competitive.</h2>
            <p className="jee-section-desc">
              A structured, phase-wise approach taking students from board
              foundations all the way to national competitive exam readiness.
            </p>
          </div>

          <div className="jee-4col-grid">
            {foundationProgrammeStructure.map((phase, i) => (
              <div
                key={i}
                className={`jee-white-card reveal ${i === 1 ? "delay-1" : i === 2 ? "delay-2" : i === 3 ? "delay-3" : ""}`}
              >
                <div className={s.phaseNum}>{phase.num}</div>
                <div className={s.phaseSub}>{phase.sub}</div>
                <div className="jee-card-heading">{phase.title}</div>
                <div className="jee-card-body">{phase.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          6. FAQ — cream bg
      ══════════════════════════════════════════════════════════ */}
      <section className="jee-section-light">
        <div className="jee-inner">
          <div className="reveal jee-text-center">
            <div className={`${s.sectionLabel} ${s.sectionLabelCenter}`}>FAQs</div>
            <h2 className="jee-section-title">Common Questions</h2>
          </div>
          <FaqAccordion faqs={foundationFAQs} />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          7. ADMISSION CTA
      ══════════════════════════════════════════════════════════ */}
      <section className="jee-section-cream" id="admission">
        <div className="jee-inner">
          <div className={`${s.ctaBand} reveal`}>
            <div>
              <h2 className={s.ctaTitle}>
                Give Your Child the<br />Foundation Advantage.
              </h2>
              <p className={s.ctaSub}>
                Admissions open for Class IX & X — Session 2025–26.
              </p>
            </div>
            <div className={s.ctaBtns}>
              <Link href="tel:+919414132063" className={s.ctaBtnWhite}>
                📞 Call Us Now
              </Link>
              <Link href="/#admission" className={s.ctaBtnGhost}>
                Request Callback
              </Link>
            </div>
          </div>
        </div>
      </section>

    </PageLayout>
  );
}
