import type { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "olympiad | Apex Classes Jodhpur",
};

export default function Page() {
  return (
    <PageLayout>
      <section className="page-hero">
        <div className="page-hero-pattern" />
        <div className="page-hero-grid" />
        <div className="page-hero-inner">
          <div>
            <div className="page-hero-breadcrumb">
              <Link href="/">Home</Link>
              <span>›</span>
              <span style={{ color: "rgba(255,255,255,0.65)", textTransform: "capitalize" }}>olympiad</span>
            </div>
            <h1 className="page-hero-title" style={{ textTransform: "capitalize" }}>olympiad</h1>
            <p className="page-hero-desc">This page is being built. Call us for details.</p>
            <div className="page-hero-actions">
              <Link href="/" className="btn-primary">← Back to Home</Link>
              <Link href="tel:+919414132063" className="btn-outline">📞 Call Us</Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
