import Topbar      from "@/components/layout/Topbar";
import Navbar      from "@/components/layout/Navbar";
import MobileMenu  from "@/components/layout/MobileMenu";
import Footer      from "@/components/layout/Footer";

import Hero        from "@/components/sections/Hero";
import TrustStrip  from "@/components/sections/TrustStrip";
import Courses     from "@/components/sections/Courses";
import Numbers     from "@/components/sections/Numbers";
import WhyApex     from "@/components/sections/WhyApex";
import Testimonials from "@/components/sections/Testimonials";
import AdmissionCTA from "@/components/sections/AdmissionCTA";

import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Home() {
  return (
    <>
      <Topbar />
      <Navbar />
      <MobileMenu />

      <main>
        <Hero />
        <TrustStrip />
        <Courses />
        <Numbers />
        <WhyApex />
        <Testimonials />
        <AdmissionCTA />
      </main>

      <Footer />

      {/* Activates .reveal scroll animations — client-side only */}
      <ScrollReveal />
    </>
  );
}
