import type { Metadata } from "next";
import Link  from "next/link";
import Image from "next/image";
import PageLayout   from "@/components/layout/PageLayout";
import FaqAccordion from "@/components/ui/FaqAccordion";
import {
  neetOverview,
  neetSubjects,
  neetProgrammeStructure,
  neetToppers,
  neetFAQs,
  neetHighlights,
  neetCourseDetails,
} from "@/lib/neet-data";

export const metadata: Metadata = {
  title: "NEET-UG (Pre-Medical) | Apex Classes Jodhpur",
  description:
    "Join Apex Classes for India's best NEET-UG coaching. 31+ years of excellence, expert faculty, small batches and a proven track record of MBBS selections.",
};

export default function NEETPage() {
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
              {/* Breadcrumb */}
              <div className="jee-breadcrumb">
                <Link href="/" className="jee-breadcrumb-link">Home</Link>
                <span>›</span>
                <span>NEET-UG</span>
              </div>

              {/* Tag — on its own line, block display */}
              <div className="neet-tag">🧬 Medical Entrance</div>

              {/* Title */}
              <h1 className="jee-title">
                NEET-UG
                <span className="neet-title-accent">Pre-Medical</span>
              </h1>

              <p className="jee-tagline">Blossom the Seeds…</p>

              <p className="jee-desc">
                Apex Classes' comprehensive 2-year programme preparing Class XI & XII
                students for NEET-UG. NCERT-focused teaching, Biology-first approach,
                rigorous mock tests — your MBBS dream starts here.
              </p>

              {/* CTAs */}
              <div className="jee-actions">
                <Link href="#admission" className="btn-primary">Enrol for 2025–26 →</Link>
                <Link href="#syllabus"  className="jee-btn-ghost">View Syllabus</Link>
              </div>

              {/* Stat pills */}
              <div className="jee-stats">
                {neetHighlights.map((h) => (
                  <div key={h.lbl} className="jee-stat-pill">
                    <span className="neet-stat-val">{h.val}</span>
                    <span className="jee-stat-lbl">{h.lbl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right card ── */}
            <div className="jee-card">
              <p className="jee-card-title">Course at a Glance</p>
              {neetCourseDetails.map((row) => (
                <div key={row.label} className="jee-card-row">
                  <span className="jee-card-label">{row.label}</span>
                  <span className={row.accent ? "neet-card-value-accent" : "jee-card-value"}>
                    {row.value}
                  </span>
                </div>
              ))}
              <div style={{ marginTop: 20 }}>
                <Link href="#admission" className="neet-apply-btn">Apply Now →</Link>
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
            <div className="neet-section-label">About the Programme</div>
            <h2 className="jee-section-title">Why Choose Apex for NEET?</h2>
            <p className="jee-section-desc">
              Three decades of medical entrance coaching distilled into a
              curriculum built around NCERT mastery — the foundation of
              every NEET question.
            </p>
          </div>

          <div className="jee-3col-grid">
            {neetOverview.map((item, i) => (
              <div
                key={i}
                className={`jee-white-card reveal ${i === 1 ? "delay-1" : i === 2 ? "delay-2" : ""}`}
              >
                <div className="neet-icon-box">{item.icon}</div>
                <div className="jee-card-heading">{item.title}</div>
                <div className="jee-card-body">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          3. SUBJECTS
      ══════════════════════════════════════════════════════════ */}
      <section className="jee-section-dark" id="syllabus">
        <div className="numbers-bg" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />
        <div className="jee-inner jee-inner-z">
          <div className="reveal">
            <div className="jee-label-dark">Subjects Covered</div>
            <h2 className="jee-section-title-dark">Three Subjects.<br />One Goal.</h2>
            <p className="jee-section-desc-dark">
              Biology takes centre stage — but our Chemistry and Physics
              teaching ensures you score maximally across all 720 marks.
            </p>
          </div>

          <div className="jee-3col-grid">
            {neetSubjects.map((sub, i) => (
              <div
                key={i}
                className={`jee-dark-card reveal ${i === 1 ? "delay-1" : i === 2 ? "delay-2" : ""}`}
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
                <ul className="jee-topics">
                  {sub.topics.map((t, ti) => (
                    <li key={ti} className="jee-topic">
                      <span className="neet-dot" />{t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Biology weightage callout */}
          <div className="neet-weightage-box reveal">
            <div className="neet-weightage-inner">
              <div className="neet-weightage-title">Biology Weightage</div>
              <div className="neet-weightage-desc">
                Biology (Botany + Zoology) accounts for{" "}
                <strong>360 out of 720 marks</strong> in NEET. Our curriculum
                dedicates proportionally more time to Biology without
                compromising Chemistry and Physics.
              </div>
            </div>
            <div className="neet-weightage-pills">
              <div className="neet-wp neet-wp-bio">
                <span>Biology</span>
                <span>360 marks</span>
              </div>
              <div className="neet-wp neet-wp-chem">
                <span>Chemistry</span>
                <span>180 marks</span>
              </div>
              <div className="neet-wp neet-wp-phy">
                <span>Physics</span>
                <span>180 marks</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          4. PROGRAMME STRUCTURE
      ══════════════════════════════════════════════════════════ */}
      <section className="jee-section-cream">
        <div className="jee-inner">
          <div className="reveal">
            <div className="neet-section-label">How It Works</div>
            <h2 className="jee-section-title">2 Years. 4 Phases.<br />1 MBBS Seat.</h2>
            <p className="jee-section-desc">
              A structured, phase-wise approach that takes you from NCERT
              foundations all the way to exam-day confidence.
            </p>
          </div>

          <div className="jee-4col-grid">
            {neetProgrammeStructure.map((phase, i) => (
              <div
                key={i}
                className={`jee-white-card reveal ${i === 1 ? "delay-1" : i === 2 ? "delay-2" : i === 3 ? "delay-3" : ""}`}
              >
                <div className="neet-phase-num">{phase.num}</div>
                <div className="neet-phase-sub">{phase.sub}</div>
                <div className="jee-card-heading">{phase.title}</div>
                <div className="jee-card-body">{phase.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          5. TOPPERS
      ══════════════════════════════════════════════════════════ */}
      <section className="jee-section-light">
        <div className="jee-inner">
          <div className="reveal jee-text-center">
            <div className="neet-section-label jee-label-center">Results</div>
            <h2 className="jee-section-title">Medical Batch Toppers</h2>
            <p className="jee-section-desc jee-desc-center">
              Every year our students crack NEET-UG and secure seats in
              top medical colleges across India.
            </p>
          </div>

          <div className="jee-4col-grid jee-toppers-grid">
            {neetToppers.map((t, i) => (
              <div
                key={i}
                className={`jee-topper-card reveal ${
                  i % 4 === 1 ? "delay-1" : i % 4 === 2 ? "delay-2" : i % 4 === 3 ? "delay-3" : ""
                }`}
              >
                <div className="neet-topper-img-wrap">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={100}
                    height={100}
                    className="jee-topper-img"
                  />
                </div>
                <div className="jee-topper-name">{t.name}</div>
                <div className="neet-topper-rank">{t.rank}</div>
                <div className="jee-topper-college">{t.college}</div>
              </div>
            ))}
          </div>

          <div className="jee-text-center jee-mt-lg">
            <Link href="/results" className="neet-btn-results">View All Results →</Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          6. FAQ
      ══════════════════════════════════════════════════════════ */}
      <section className="jee-section-cream">
        <div className="jee-inner">
          <div className="reveal jee-text-center">
            <div className="neet-section-label jee-label-center">FAQs</div>
            <h2 className="jee-section-title">Common Questions</h2>
          </div>
          <FaqAccordion faqs={neetFAQs} />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          7. ADMISSION CTA
      ══════════════════════════════════════════════════════════ */}
      <section className="jee-section-light" id="admission">
        <div className="jee-inner">
          <div className="neet-cta-band reveal">
            <div>
              <h2 className="neet-cta-title">
                Ready to Begin Your<br />NEET Journey?
              </h2>
              <p className="jee-cta-sub">
                Limited seats. Admissions open for Session 2025–26.
              </p>
            </div>
            <div className="jee-cta-btns">
              <Link href="tel:+919414132063" className="neet-cta-btn-white">
                📞 Call Us Now
              </Link>
              <Link href="/#admission" className="neet-cta-btn-ghost">
                Request Callback
              </Link>
            </div>
          </div>
        </div>
      </section>

    </PageLayout>
  );
}
