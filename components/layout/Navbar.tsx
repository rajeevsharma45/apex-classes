"use client";

import Image from "next/image";
import Link  from "next/link";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  function openMenu() {
    document.getElementById("mobileMenu")?.classList.add("mobile-menu-open");
    document.body.style.overflow = "hidden";
  }

  return (
    <nav className="navbar">
      <div className="navbar-inner">

        {/* Logo */}
        <Link href="/" style={{ flexShrink: 0 }}>
          <Image
            src="/logo.png"
            alt="Apex Classes"
            width={52}
            height={52}
            priority
            style={{ height: 52, width: "auto", objectFit: "contain", display: "block" }}
          />
        </Link>

        {/* Desktop nav */}
        <div className="desktop-nav-links" style={{ display: "flex", alignItems: "center", gap: 2 }}>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link">
              {link.label}
            </Link>
          ))}
          <Link href="#admission" className="nav-link nav-cta">
            Enrol Now →
          </Link>
        </div>

        {/* Hamburger */}
        <button
          aria-label="Open menu"
          onClick={openMenu}
          className="hamburger-btn"
          style={{ background: "none", border: "none", cursor: "pointer", padding: 8 }}
        >
          <span style={{ display: "block", width: 24, height: 2, borderRadius: 2, background: "var(--green)", marginBottom: 5 }} />
          <span style={{ display: "block", width: 24, height: 2, borderRadius: 2, background: "var(--green)", marginBottom: 5 }} />
          <span style={{ display: "block", width: 24, height: 2, borderRadius: 2, background: "var(--green)" }} />
        </button>

      </div>
    </nav>
  );
}
