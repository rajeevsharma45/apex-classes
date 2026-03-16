import Image from "next/image";
import Link  from "next/link";

interface FooterLink { label: string; href: string; }

const programmes: FooterLink[] = [
  { label: "IIT-JEE (Main + Adv.)", href: "/jee"        },
  { label: "NEET-UG",               href: "/neet"       },
  { label: "Pre-Foundation IX & X", href: "/foundation" },
  { label: "NDA / Defence",         href: "/nda"        },
  { label: "Olympiad",              href: "/olympiad"   },
  { label: "Crash Courses",         href: "/crash"      },
];

const resources: FooterLink[] = [
  { label: "Free Study Material",  href: "/study-material" },
  { label: "Online Test Series",   href: "/test-series"    },
  { label: "Previous Year Papers", href: "/pyp"            },
  { label: "Knowledge Blog",       href: "/blog"           },
  { label: "Student Zone",         href: "/student-zone"   },
];

const institute: FooterLink[] = [
  { label: "About Apex",        href: "/about"   },
  { label: "Our Faculty",       href: "/faculty" },
  { label: "Results & Toppers", href: "/results" },
  { label: "Gallery",           href: "/gallery" },
  { label: "Careers",           href: "/careers" },
  { label: "Contact Us",        href: "/contact" },
];

function FooterCol({ title, links }: { title: string; links: FooterLink[] }) {
  return (
    <div className="footer-col">
      <div className="footer-col-title">{title}</div>
      {links.map((l) => (
        <Link key={l.href} href={l.href}>{l.label}</Link>
      ))}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">

          {/* Brand */}
          <div>
            <Image
              src="/logo.png"
              alt="Apex Classes"
              width={140}
              height={56}
              style={{ height: 52, width: "auto", objectFit: "contain", marginBottom: 16, filter: "brightness(0) invert(1)", opacity: 0.75 }}
            />
            <p className="footer-brand-desc">
              Jodhpur's premier coaching institute for IIT-JEE, NEET-UG, and
              national competitive exams. Established 1993.{" "}
              <em style={{ color: "rgba(255,255,255,0.3)" }}>Blossom the Seeds.</em>
            </p>
            <p className="footer-contact-line">📍 3/9, K.B.H. Road, Jodhpur — 342001</p>
            <p className="footer-contact-line">📞 +91 94141 32063 · +91 79765 81910</p>
            <p className="footer-contact-line">✉ apexclassesjdh@gmail.com</p>
          </div>

          <FooterCol title="Programmes" links={programmes} />
          <FooterCol title="Resources"  links={resources}  />
          <FooterCol title="Institute"  links={institute}  />
        </div>

        <div className="footer-bottom">
          <span>© 2025 Apex Classes, Jodhpur. All Rights Reserved.</span>
          <span>Privacy Policy · Terms of Service · Help &amp; Support</span>
        </div>
      </div>
    </footer>
  );
}
