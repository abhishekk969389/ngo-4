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
    // Sirf un elements ko select karein jo animate hone chahiye
    const elements = document.querySelectorAll(
      "section, article, .scroll-reveal"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            // Ek baar visible hone ke baad unobserve kar dein taaki bar-bar hide/show flicker na ho
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px 80px 0px", // Scroll aane se thoda pehle hi trigger hoga
      }
    );

    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      
      // Agar element already screen (above the fold) me hai toh use turant visible karein
      if (rect.top < window.innerHeight) {
        el.classList.add("is-visible");
      } else {
        el.classList.add("reveal-init");
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
