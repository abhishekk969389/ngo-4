"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { ReactLenis, useLenis } from "lenis/react";
import "lenis/dist/lenis.css";

function ScrollToTopOnNavigate() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    lenis?.scrollTo(0, { immediate: true });
  }, [pathname, lenis]);

  return null;
}

function GlobalScrollEffects() {
  const pathname = usePathname();

  useEffect(() => {
    // Select elements that should animate based on our CSS rules
    const elements = document.querySelectorAll(
      "section h1, section h2, section h3, section h4, section p, section img, section .group, section button, .scroll-reveal, .animate-section"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -50px 0px", // Trigger slightly before it comes fully into view
      }
    );

    elements.forEach((el, index) => {
      const rect = el.getBoundingClientRect();

      // Add stagger delay based on DOM order loosely, for elements close together
      const staggerIndex = index % 5;
      if (staggerIndex === 1) el.classList.add("delay-100");
      if (staggerIndex === 2) el.classList.add("delay-200");
      if (staggerIndex === 3) el.classList.add("delay-300");
      if (staggerIndex === 4) el.classList.add("delay-400");

      if (rect.top < window.innerHeight && rect.bottom > 0) {
        // If already in viewport on load, show it
        setTimeout(() => {
          el.classList.add("is-visible");
        }, 50);
      } else {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}

export function AnchorOffsetHandler() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!anchor) return;

      const hash = anchor.getAttribute("href") || "";
      if (!hash || hash === "#") return;

      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (!el) return;

      e.preventDefault();

      const header = document.querySelector("header.sticky");
      const offset = header ? (header as HTMLElement).offsetHeight : 0;
      const top = el.getBoundingClientRect().top + window.scrollY - offset - 8;

      lenis.scrollTo(top, { immediate: false });
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [lenis]);

  return null;
}

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08,
        duration: 1.25,
        smoothWheel: true,
        wheelMultiplier: 0.9,
        touchMultiplier: 1.5,
        anchors: true,
        autoRaf: true,
      }}
    >
      <ScrollToTopOnNavigate />
      <GlobalScrollEffects />
      <AnchorOffsetHandler />
      {children}
    </ReactLenis>
  );
}
