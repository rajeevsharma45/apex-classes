import Topbar     from "@/components/layout/Topbar";
import Navbar     from "@/components/layout/Navbar";
import MobileMenu from "@/components/layout/MobileMenu";
import Footer     from "@/components/layout/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Topbar />
      <Navbar />
      <MobileMenu />
      <main>{children}</main>
      <Footer />
      <ScrollReveal />
    </>
  );
}
