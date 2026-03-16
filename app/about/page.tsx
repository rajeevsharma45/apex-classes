import type { Metadata } from "next";
import Link  from "next/link";
import Image from "next/image";
import PageLayout from "@/components/layout/PageLayout";
import s from "./about.module.css";

export const metadata: Metadata = {
  title: "About Us | Apex Classes Jodhpur",
  description:
    "31+ years of shaping Rajasthan's brightest minds. Meet the founders, faculty, and team behind Apex Classes — Jodhpur's most trusted coaching institute.",
};

/* ── Data ─────────────────────────────────────────────────── */
const leaders = [
  {
    name:    "Dr. Ramniwas Choudhary",
    role:    "Founder & CEO",
    image:   "/faculty/ramniwas-choudhary.jpg",
    bio:     "Our vast experience has given us the strength of understanding a child's ability — what he or she deserves and for where he or she should be moulded. While moulding we must keep in mind that a child should never lose his or her identities. Here we flourish all those along with having the zeal to achieve for what has been chosen.",
    quote:   "Every child carries a seed of greatness. Our job is to blossom it.",
    reverse: false,
  },
  {
    name:    "P.K. Sir (Praveen Kumar)",
    role:    "Managing Director",
    image:   "/faculty/praveen-kumar.jpeg",
    bio:     "Every parent dreams of putting his child at a right locus beyond himself. We can, this hour, assure that we shall be the better associate of yours to serve your expectations. With 31 years of Apex behind us, we have built a system that transforms raw potential into national-level results.",
    quote:   "We don't just prepare students for exams — we prepare them for life.",
    reverse: true,
  },
];

const pillars = [
  {
    name:  "Vinita Choudhary",
    role:  "Director",
    org:   "Apex Sen. Sec. School, Kudi",
    image: "/faculty/vinita-choudhary.jpg",
  },
  {
    name:  "R.K. Khanna",
    role:  "Principal",
    org:   "Apex Sen. Sec. School, Kudi",
    image: "/faculty/rk-khanna.jpg",
  },
  {
    name:  "Kishor Choudhary",
    role:  "Administrator",
    org:   "Apex Sen. Sec. School, Kudi",
    image: "/faculty/kishor-choudhary.jpg",
  },
];

const advantages = [
  "Best result in coaching industry",
  "Proven result-oriented teaching methodology",
  "Dual advantage — guidance for board exams along with competitive exam preparation",
  "Regular tests for board & competitive exam pattern",
  "Detailed analysis of test results",
  "Daily practice sheets for regular analysis through exercise",
  "Newly constructed campus with all amenities",
  "Highly ventilated, sound-proof & AC class rooms",
  "Class rooms equipped with audio visual & smart board for better understanding of content",
  "Canteen facilities for refreshing students",
  "Hostel & mess facilities",
  "Extensive experienced faculty who understand & care for this age group of students",
  "Individual content-wise doubt solution sessions with experts",
];

const stats = [
  { val: "31+",   lbl: "Years of Excellence" },
  { val: "10k+",  lbl: "Alumni Nationwide"   },
  { val: "54",    lbl: "Selections in 2024"  },
  { val: "98%",   lbl: "Students Recommend"  },
];

const values = [
  {
    icon: "🎯",
    title: "Result-Oriented",
    desc:  "Every class, every DPP, every test is designed with one goal — your rank on exam day.",
  },
  {
    icon: "🤝",
    title: "Student-First",
    desc:  "Small batches, 1:1 mentorship, and open-door faculty sessions ensure no student is left behind.",
  },
  {
    icon: "📚",
    title: "Deep Curriculum",
    desc:  "We go far beyond NCERT and textbooks — building the conceptual depth competitive exams demand.",
  },
  {
    icon: "🌱",
    title: "Holistic Growth",
    desc:  "Stress management, career counselling, and motivational sessions — because rank is built on mindset.",
  },
];

/* ── Page ─────────────────────────────────────────────────── */
export default function AboutPage() {
  return (
    <PageLayout>

      {/* ══════════════════════════════════════════════════════════
          1. HERO BANNER
      ══════════════════════════════════════════════════════════ */}
      <section
        style={{ backgroundColor: "#0f3b27", position: "relative", overflow: "hidden", padding: "72px 0 60px" }}
      >
        <div className="hero-pattern" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />
        <div className="hero-grid"   style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />

        <div style={{ position: "relative", zIndex: 10, maxWidth: 1240, margin: "0 auto", padding: "0 24px" }}>
          {/* Breadcrumb */}
          <div className="jee-breadcrumb" style={{ marginBottom: 20 }}>
            <Link href="/" className="jee-breadcrumb-link">Home</Link>
            <span>›</span>
            <span>About Us</span>
          </div>

          <div style={{ maxWidth: 680 }}>
            <div className="jee-tag" style={{
              display: "inline-flex", alignItems: "center", gap: 7,
              padding: "5px 14px", borderRadius: 100,
              border: "1px solid rgba(25,87,58,0.5)",
              background: "rgba(25,87,58,0.2)",
              fontSize: 11, fontWeight: 700,
              textTransform: "uppercase", letterSpacing: "0.1em",
              color: "#a8f0c8", marginBottom: 18,
            }}>
              🏫 Since 1993
            </div>

            <h1 className="jee-title">
              About
              <span style={{ display: "block", fontStyle: "italic", color: "#ed3237" }}>
                Apex Classes
              </span>
            </h1>

            <p className="jee-desc" style={{ maxWidth: 580 }}>
              For over three decades, Apex Classes has been Jodhpur's most
              trusted coaching institute — shaping the brightest minds of
              Rajasthan for IIT-JEE, NEET-UG, NDA, Olympiads and more.
              Rooted in the belief that every child deserves the best.
            </p>

            {/* Stats row */}
            <div className="jee-stats">
              {stats.map((s2) => (
                <div key={s2.lbl} className="jee-stat-pill">
                  <span style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 22, fontWeight: 700, color: "#ed3237", lineHeight: 1 }}>
                    {s2.val}
                  </span>
                  <span className="jee-stat-lbl">{s2.lbl}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          2. LEADERSHIP PROFILES
      ══════════════════════════════════════════════════════════ */}
      <section className="jee-section-light">
        <div className="jee-inner">
          <div className="reveal">
            <div className={s.sectionLabel}>Our Leadership</div>
            <h2 className="jee-section-title">The Minds Behind<br />Apex Classes</h2>
            <p className="jee-section-desc">
              Three decades of Apex is the story of two visionaries who believed
              that every child in Rajasthan deserves world-class coaching.
            </p>
          </div>

          <div className={s.leaderGrid}>
            {leaders.map((leader, i) => (
              <div
                key={i}
                className={`reveal ${i === 1 ? "delay-1" : ""} ${s.leaderCard} ${leader.reverse ? s.leaderCardReverse : ""}`}
              >
                {/* Text */}
                <div>
                  <div className={s.leaderRole}>{leader.role}</div>
                  <h2 className={s.leaderName}>{leader.name}</h2>
                  <div className={s.leaderDivider} />
                  <p className={s.leaderBio}>{leader.bio}</p>
                  <blockquote className={s.leaderQuote}>
                    &ldquo;{leader.quote}&rdquo;
                  </blockquote>
                </div>

                {/* Photo */}
                <div className={s.leaderImgWrap}>
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    width={280}
                    height={360}
                    className={s.leaderImg}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          3. OUR PILLARS
      ══════════════════════════════════════════════════════════ */}
      <section className={s.pillarsSection}>
        <div className="numbers-bg" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />
        <div className="jee-inner jee-inner-z">
          <div className="reveal jee-text-center">
            <div className={`${s.sectionLabelDark} ${s.sectionLabelCenter}`}>Our Team</div>
            <h2 className="jee-section-title-dark">Our Pillars</h2>
            <p className="jee-section-desc-dark" style={{ margin: "0 auto", maxWidth: 480 }}>
              The dedicated educators and administrators who keep Apex
              running with excellence every single day.
            </p>
          </div>

          <div className={s.pillarsGrid}>
            {pillars.map((p, i) => (
              <div key={i} className={`reveal ${i === 1 ? "delay-1" : i === 2 ? "delay-2" : ""} ${s.pillarCard}`}>
                <div className={s.pillarImgWrap}>
                  <Image
                    src={p.image}
                    alt={p.name}
                    width={90}
                    height={90}
                    className={s.pillarImg}
                  />
                </div>
                <div className={s.pillarName}>{p.name}</div>
                <div className={s.pillarRole}>{p.role}</div>
                <div className={s.pillarOrg}>{p.org}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          4. MISSION & ADVANTAGES
      ══════════════════════════════════════════════════════════ */}
      <section className="jee-section-cream">
        <div className="jee-inner">
          <div className="reveal">
            <div className={s.sectionLabel}>Apex Mission & Advantage</div>
            <h2 className="jee-section-title">
              Legend in the Field of<br />Education Since 1993
            </h2>
          </div>

          <div className={s.missionGrid}>
            {/* Left — advantages list */}
            <div className="reveal">
              <div className={s.advantagesList}>
                {advantages.map((adv, i) => (
                  <div key={i} className={s.advantageItem}>
                    <div className={s.advantageDot}>✓</div>
                    <span>{adv}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className={s.readMoreBtn}>
                Get in Touch →
              </Link>
            </div>

            {/* Right — photo */}
            <div className={`reveal delay-1 ${s.missionImgWrap}`}>
              <Image
                src="/about/campus-students.jpg"
                alt="Apex Classes students"
                width={600}
                height={450}
                className={s.missionImg}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          5. CORE VALUES — dark bg
      ══════════════════════════════════════════════════════════ */}
      <section className="jee-section-dark">
        <div className="numbers-bg" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />
        <div className="jee-inner jee-inner-z">
          <div className="reveal jee-text-center">
            <div className={`${s.sectionLabelDark} ${s.sectionLabelCenter}`}>
              What We Stand For
            </div>
            <h2 className="jee-section-title-dark">Our Core Values</h2>
            <p className="jee-section-desc-dark" style={{ margin: "0 auto", maxWidth: 480 }}>
              Every decision at Apex — from curriculum design to classroom
              culture — is guided by these four principles.
            </p>
          </div>

          <div className={s.valuesGrid}>
            {values.map((v, i) => (
              <div key={i} className={`reveal ${i === 1 ? "delay-1" : i === 2 ? "delay-2" : i === 3 ? "delay-3" : ""} ${s.valueCard}`}>
                <div className={s.valueIcon}>{v.icon}</div>
                <div className={s.valueTitle}>{v.title}</div>
                <div className={s.valueDesc}>{v.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          6. CTA
      ══════════════════════════════════════════════════════════ */}
      <section className="jee-section-light">
        <div className="jee-inner">
          <div className={`${s.ctaBand} reveal`}>
            <div>
              <h2 className={s.ctaTitle}>
                Be Part of the<br />Apex Legacy.
              </h2>
              <p className={s.ctaSub}>
                Admissions open for Session 2025–26. Limited seats per batch.
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
