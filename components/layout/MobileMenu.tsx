"use client";

import Link from "next/link";
import { navLinks } from "@/lib/data";

export default function MobileMenu() {

  function close() {
    document.getElementById("mobileMenu")?.classList.remove("mobile-menu-open");
    document.body.style.overflow = "";
  }

  return (
    <div
      id="mobileMenu"
      className="mobile-overlay"
      onClick={(e) => { if (e.target === e.currentTarget) close(); }}
    >
      <div className="mobile-panel">

        {/* Close button */}
        <button
          aria-label="Close menu"
          onClick={close}
          className="mobile-close-btn"
        >
          ✕
        </button>

        {/* Nav links */}
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={close}
            className="mobile-nav-link"
          >
            {link.label}
          </Link>
        ))}

        {/* CTA */}
        <Link
          href="#admission"
          onClick={close}
          className="mobile-cta-link"
        >
          Enrol Now →
        </Link>

      </div>
    </div>
  );
}
