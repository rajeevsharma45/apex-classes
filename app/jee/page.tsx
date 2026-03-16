import type { Metadata } from "next";
import Link  from "next/link";
import Image from "next/image";
import PageLayout   from "@/components/layout/PageLayout";
import FaqAccordion from "@/components/ui/FaqAccordion";
import {
  jeeOverview,
  jeeSubjects,
  jeeProgrammeStructure,
  jeeToppers,
  jeeFAQs,
  jeeHighlights,
  jeeCourseDetails,
} from "@/lib/jee-data";

export const metadata: Metadata = {
  title: "IIT-JEE (Main + Advanced) | Apex Classes Jodhpur",
  description:
    "Join Apex Classes for India's best IIT-JEE coaching. 31+ years of excellence, expert faculty, small batches and a proven track record of selections.",
};

export default function JEEPage() {
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
                <span>JEE (Main + Advanced)</span>
              </div>

              <div className="jee-tag">⚛️ Engineering Entrance</div>

              <h1 className="jee-title">
                IIT-JEE
                <span className="jee-title-accent">Main + Advanced</span>
              </h1>

              <p className="jee-tagline">Blossom the Seeds…</p>

              <p className="jee-desc">
                Apex Classes' flagship 2-year programme preparing Class XI & XII
                students for IIT-JEE Main and Advanced. Expert faculty, small
                batches, rigorous practice — your rank starts here.
              </p>

              <div className="jee-actions">
                <Link href="#admission" className="btn-primary">Enrol for 2025–26 →</Link>
                <Link href="#syllabus"  className="jee-btn-ghost">View Syllabus</Link>
              </div>

              <div className="jee-stats">
                {jeeHighlights.map((h) => (
                  <div key={h.lbl} className="jee-stat-pill">
                    <span className="jee-stat-val">{h.val}</span>
                    <span className="jee-stat-lbl">{h.lbl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right card ── */}
            <div className="jee-card">
              <p className="jee-card-title">Course at a Glance</p>
              {jeeCourseDetails.map((row) => (
                <div key={row.label} className="jee-card-row">
                  <span className="jee-card-label">{row.label}</span>
                  <span className={row.accent ? "jee-card-value-accent" : "jee-card-value"}>
                    {row.value}
                  </span>
                </div>
              ))}
              <div style={{ marginTop: 20 }}>
                <Link href="#admission" className="btn-primary jee-apply-btn">Apply Now →</Link>
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
            <div className="section-label">About the Programme</div>
            <h2 className="jee-section-title">Why Choose Apex for JEE?</h2>
            <p className="jee-section-desc">
              Thirty-one years of coaching experience distilled into a curriculum
              that goes far beyond rote learning — building the problem-solving
              instinct that JEE demands.
            </p>
          </div>
          <div className="jee-3col-grid">
            {jeeOverview.map((item, i) => (
              <div key={i} className={`jee-white-card reveal ${i === 1 ? "delay-1" : i === 2 ? "delay-2" : ""}`}>
                <div className="jee-icon-box">{item.icon}</div>
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
              Our faculty covers every topic in the JEE syllabus with the
              depth and approach the exam actually requires.
            </p>
          </div>
          <div className="jee-3col-grid">
            {jeeSubjects.map((sub, i) => (
              <div key={i} className={`jee-dark-card reveal ${i === 1 ? "delay-1" : i === 2 ? "delay-2" : ""}`}>
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
                      <span className="jee-dot" />{t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          4. PROGRAMME STRUCTURE
      ══════════════════════════════════════════════════════════ */}
      <section className="jee-section-cream">
        <div className="jee-inner">
          <div className="reveal">
            <div className="section-label">How It Works</div>
            <h2 className="jee-section-title">2 Years. 4 Phases.<br />1 Rank.</h2>
            <p className="jee-section-desc">
              A structured, phase-wise approach that takes you from foundations
              all the way to exam-day confidence.
            </p>
          </div>
          <div className="jee-4col-grid">
            {jeeProgrammeStructure.map((phase, i) => (
              <div key={i} className={`jee-white-card reveal ${i === 1 ? "delay-1" : i === 2 ? "delay-2" : i === 3 ? "delay-3" : ""}`}>
                <div className="jee-phase-num">{phase.num}</div>
                <div className="jee-phase-sub">{phase.sub}</div>
                <div className="jee-card-heading">{phase.title}</div>
                <div className="jee-card-body">{phase.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          5. TOPPERS — student photos
      ══════════════════════════════════════════════════════════ */}
      <section className="jee-section-light">
        <div className="jee-inner">
          <div className="reveal jee-text-center">
            <div className="section-label jee-label-center">Results</div>
            <h2 className="jee-section-title">Engineering Batch Toppers</h2>
            <p className="jee-section-desc jee-desc-center">
              Every year our students crack JEE and land seats in India's
              top engineering institutions.
            </p>
          </div>

          <div className="jee-4col-grid jee-toppers-grid">
            {jeeToppers.map((t, i) => (
              <div
                key={i}
                className={`jee-topper-card reveal ${
                  i % 4 === 1 ? "delay-1" : i % 4 === 2 ? "delay-2" : i % 4 === 3 ? "delay-3" : ""
                }`}
              >
                {/* Student photo */}
<div style={{ display: "flex", justifyContent: "center", marginBottom: 12 }}>
  <div className="jee-topper-img-wrap" style={{ margin: 0 }}>
    <Image
      src={t.image}
      alt={t.name}
      width={100}
      height={100}
      className="jee-topper-img"
    />
  </div>
</div>

                <div className="jee-topper-name">{t.name}</div>
                <div className="jee-topper-rank">{t.rank}</div>
                <div className="jee-topper-college">{t.college}</div>
              </div>
            ))}
          </div>

          <div className="jee-text-center jee-mt-lg">
            <Link href="/results" className="jee-btn-green">View All Results →</Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          6. FAQ
      ══════════════════════════════════════════════════════════ */}
      <section className="jee-section-cream">
        <div className="jee-inner">
          <div className="reveal jee-text-center">
            <div className="section-label jee-label-center">FAQs</div>
            <h2 className="jee-section-title">Common Questions</h2>
          </div>
          <FaqAccordion faqs={jeeFAQs} />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          7. ADMISSION CTA
      ══════════════════════════════════════════════════════════ */}
      <section className="jee-section-light" id="admission">
        <div className="jee-inner">
          <div className="jee-cta-band reveal">
            <div>
              <h2 className="jee-cta-title">Ready to Begin Your<br />JEE Journey?</h2>
              <p className="jee-cta-sub">Limited seats. Admissions open for Session 2025–26.</p>
            </div>
            <div className="jee-cta-btns">
              <Link href="tel:+919414132063" className="jee-btn-white">📞 Call Us Now</Link>
              <Link href="/#admission"       className="jee-btn-ghost-light">Request Callback</Link>
            </div>
          </div>
        </div>
      </section>

    </PageLayout>
  );
}
