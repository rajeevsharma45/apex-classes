"use client";

import { useEffect } from "react";

/**
 * ScrollReveal
 * ─────────────────────────────────────────────────────────────────────────────
 * A thin client component that registers an IntersectionObserver once on mount.
 * Any element in the DOM with class `reveal` will receive class `visible` when
 * it scrolls into view, triggering the CSS transition defined in globals.css.
 *
 * Import this once in your root page — no props needed.
 */
export default function ScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe every element that has the `reveal` class at mount time.
    document.querySelectorAll<HTMLElement>(".reveal").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Renders nothing — purely behavioural.
  return null;
}
