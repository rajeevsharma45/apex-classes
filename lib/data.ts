import type {
  NavLink,
  HeroStat,
  CoursePanel,
  TrustItem,
  Course,
  StatCard,
  ResultRow,
  Feature,
  TimelineItem,
  Testimonial,
} from "@/types";

// ─── Navigation ───────────────────────────────────────────────────────────────
export const navLinks: NavLink[] = [
  { label: "Home",            href: "/"           },
  { label: "JEE (Main+Adv)", href: "/jee"        },
  { label: "NEET-UG",         href: "/neet"       },
   { label: "Crash Coursh",      href: "/crash" },
  { label: "Foundation",      href: "/foundation" },
  // { label: "Results",         href: "/results"    },
  { label: "About",           href: "/about"      },
  { label: "Contact",         href: "/contact"    },
];

// ─── Hero ─────────────────────────────────────────────────────────────────────
export const heroStats: HeroStat[] = [
  { value: "31+",  label: "Years of Excellence"      },
  { value: "54",   label: "IIT/NEET Selections '24"  },
  { value: "10k+", label: "Alumni Nationwide"        },
];

export const coursePanels: CoursePanel[] = [
  {
    icon:   "⚛️",
    iconBg: "bg-[#19573a]/30",
    name:   "IIT-JEE (Main + Adv.)",
    sub:    "Class XI & XII · 2-Year Programme",
    active: true,
  },
  {
    icon:   "🧬",
    iconBg: "bg-[#ed3237]/20",
    name:   "NEET-UG",
    sub:    "Medical Entrance · Bio Focus",
  },
  {
    icon:   "📐",
    iconBg: "bg-amber-500/20",
    name:   "Pre-Foundation IX & X",
    sub:    "Olympiad & Entrance Prep",
  },
  {
    icon:   "🎖️",
    iconBg: "bg-blue-600/20",
    name:   "NDA / Defence",
    sub:    "Armed Forces Entrance",
  },
];

// ─── Trust Strip ──────────────────────────────────────────────────────────────
export const trustItems: TrustItem[] = [
  { icon: "🏆", label: "31 Years of Proven Results"   },
  { icon: "👨‍🏫", label: "IIT & AIIMS Alumni Faculty"  },
  { icon: "📊", label: "1:1 Live Mentorship"           },
  { icon: "📚", label: "Full Syllabus + DPP + Tests"   },
  { icon: "🎯", label: "54 Selections — 2024"          },
];

// ─── Courses ──────────────────────────────────────────────────────────────────
export const courses: Course[] = [
  {
    id:       "jee",
    tag:      "JEE",
    accent:   "green",
    title:    "IIT-JEE\nMain + Advanced",
    subtitle: "2-Year Classroom · Class XI–XII",
    features: [
      "Complete Physics, Chemistry & Maths",
      "Daily Practice Problems (DPP)",
      "Weekly Mock Tests — JEE Pattern",
      "1:1 Mentorship & Doubt Sessions",
    ],
    href: "/jee",
  },
  {
    id:       "neet",
    tag:      "NEET-UG",
    accent:   "red",
    title:    "Pre-Medical\nNEET-UG",
    subtitle: "2-Year Programme · Class XI–XII",
    features: [
      "Biology, Physics & Chemistry",
      "NCERT-Based Deep Dive",
      "Full-Length Mock Tests",
      "Personalised Study Plan",
    ],
    href: "/neet",
  },
  {
    id:       "foundation",
    tag:      "Foundation",
    accent:   "gold",
    title:    "Pre-Foundation\nIX & X",
    subtitle: "Olympiads, NTSE & Entrance Prep",
    features: [
      "NTSE / STSE Preparation",
      "Science Olympiad Training",
      "Board Exam Excellence",
      "Conceptual Foundation Building",
    ],
    href: "/foundation",
  },
  {
    id:       "nda",
    tag:      "Defence",
    accent:   "navy",
    title:    "NDA / Armed\nForces Entrance",
    subtitle: "National Defence Academy Prep",
    features: [
      "Maths + General Ability",
      "GAT & English Proficiency",
      "SSB Interview Guidance",
      "Physical Fitness Counselling",
    ],
    href: "/nda",
  },
  {
    id:       "olympiad",
    tag:      "Olympiad",
    accent:   "purple",
    title:    "Olympiad\nExcellence",
    subtitle: "NSO, IMO, HBCSE Tracks",
    features: [
      "RMO / INMO / IMO Track",
      "Science Olympiads (NSO, NSEJS)",
      "KVPY Preparation",
      "Personalised Study Plan",
    ],
    href: "/olympiad",
  },
  {
    id:       "crash",
    tag:      "Crash Course",
    accent:   "slate",
    title:    "Intensive Crash\nCourses",
    subtitle: "Short-Term Pre-Exam Revision",
    features: [
      "Focused Revision in 30–60 Days",
      "High-Yield Topic Focus",
      "Past Paper Mastery",
      "Last-Mile Strategy Sessions",
    ],
    href: "/crash",
  },
];

// ─── Numbers ──────────────────────────────────────────────────────────────────
export const numbersStats: StatCard[] = [
  { value: "31+",  label: "Years in Jodhpur"       },
  { value: "10k+", label: "Students Mentored"      },
  { value: "54",   label: "IIT/NEET Selections"    },
  { value: "98%",  label: "Students Recommend Us"  },
];

export const resultRows: ResultRow[] = [
  { exam: "IIT-JEE Advanced",  year: "2024", count: "12", unit: "Selections" },
  { exam: "IIT-JEE Main",      year: "2024", count: "34", unit: "Qualifiers" },
  { exam: "NEET-UG",           year: "2024", count: "8",  unit: "MBBS Seats" },
  { exam: "NTSE / Olympiads",  year: "2024", count: "21", unit: "Qualifiers" },
];

// ─── Why Apex ─────────────────────────────────────────────────────────────────
export const features: Feature[] = [
  {
    icon:        "🎯",
    title:       "Research-Backed Study Material",
    description: "Every chapter, DPP and module developed by our IIT and AIIMS alumni faculty through years of iterative refinement specific to JEE/NEET patterns.",
  },
  {
    icon:        "🧑‍💻",
    title:       "1:1 Live Mentorship",
    description: "Personalised sessions to track progress, resolve doubts, and guide each student's strategy from enrolment day through to exam day.",
  },
  {
    icon:        "📊",
    title:       "Rigorous Test Series",
    description: "Weekly and monthly mock tests modelled on the exact JEE/NEET pattern, with detailed performance analytics after every attempt.",
  },
  {
    icon:        "🌱",
    title:       "Holistic Development",
    description: "Stress management workshops, career counselling, and motivational sessions — because rank is built on mindset, not just marks.",
  },
];

export const timeline: TimelineItem[] = [
  { year: "1993 — Founded",     text: "Apex Classes established in Jodhpur with a mission to provide world-class coaching for national competitive exams." },
  { year: "2002 — NEET Wing",   text: "Launched Pre-Medical programme, expanding to serve aspiring doctors across Rajasthan." },
  { year: "2010 — Foundation",  text: "Introduced IX & X Foundation courses, nurturing talent from Class 9 onwards for Olympiads and NTSE." },
  { year: "2020 — Digital Leap",text: "Integrated online learning with live classes, recorded lectures, and digital test series." },
  { year: "2024 — Record Year", text: "54 students selected in IIT-JEE and NEET — the highest in our history." },
];

// ─── Testimonials ─────────────────────────────────────────────────────────────
export const testimonials: Testimonial[] = [
  {
    quote: "The faculty at Apex don't just teach concepts — they build thinking. The way Physics was explained here, I've never experienced elsewhere. My JEE Advanced rank is proof.",
    name:  "Arjun Mehta",
    meta:  "Batch 2024 · IIT Bombay (CSE)",
    rank:  "🎯 AIR 312 — JEE Advanced 2024",
  },
  {
    quote: "Structured DPPs and weekly tests made sure I was always exam-ready. NEET felt like just another practice test by the end.",
    name:  "Priya Sharma",
    meta:  "Batch 2024 · AIIMS Jodhpur",
    rank:  "🎯 Score 710/720 — NEET 2024",
  },
  {
    quote: "The 1:1 mentorship made all the difference. My mentor knew exactly where I was struggling and customised my schedule accordingly.",
    name:  "Rohan Bishnoi",
    meta:  "Batch 2023 · IIT Delhi (EE)",
    rank:  "🎯 AIR 156 — JEE Advanced 2023",
  },
];
