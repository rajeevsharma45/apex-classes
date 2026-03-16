// ─── Navigation ───────────────────────────────────────────────────────────────
export interface NavLink {
  label: string;
  href: string;
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
export interface HeroStat {
  value: string;
  label: string;
}

export interface CoursePanel {
  icon: string;
  iconBg: string;
  name: string;
  sub: string;
  active?: boolean;
}

// ─── Trust Strip ──────────────────────────────────────────────────────────────
export interface TrustItem {
  icon: string;
  label: string;
}

// ─── Courses ──────────────────────────────────────────────────────────────────
export type CardAccent =
  | "green"
  | "red"
  | "gold"
  | "navy"
  | "purple"
  | "slate";

export interface Course {
  id: string;
  tag: string;
  accent: CardAccent;
  title: string;
  subtitle: string;
  features: string[];
  href: string;
}

// ─── Numbers ──────────────────────────────────────────────────────────────────
export interface StatCard {
  value: string;
  label: string;
}

export interface ResultRow {
  exam: string;
  year: string;
  count: string;
  unit: string;
}

// ─── Why Apex ─────────────────────────────────────────────────────────────────
export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface TimelineItem {
  year: string;
  text: string;
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
export interface Testimonial {
  quote: string;
  name: string;
  meta: string;
  rank: string;
}
