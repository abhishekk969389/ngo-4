"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Sprout,
  Users,
  BookMarked,
  GraduationCap,
  Shield,
  CheckCircle2,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import type { PortfolioDetailSidebarData } from "@/app/data";

const iconMap = {
  users: Users,
  books: BookMarked,
  graduation: GraduationCap,
  shield: Shield,
  default: CheckCircle2,
};

interface PortfolioDetailSidebarProps {
  data: PortfolioDetailSidebarData;
}

export default function PortfolioDetailSidebar({
  data,
}: PortfolioDetailSidebarProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (!data) return null;

  const { highlightsTitle, highlights, galleryTitle, gallery, sidebarQuote } =
    data;

  const handleNext = () => {
    if (lightboxIndex === null || !gallery) return;
    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % gallery.length : 0));
  };

  const handlePrev = () => {
    if (lightboxIndex === null || !gallery) return;
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + gallery.length) % gallery.length : 0
    );
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, gallery]);

  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxIndex]);

  const getIcon = (iconName?: string) => {
    if (!iconName) return null;
    const IconComponent =
      iconMap[iconName as keyof typeof iconMap] || iconMap.default;
    return (
      <IconComponent
        className="w-8 h-8 sm:w-9 sm:h-9 text-[#1c4d25] shrink-0 stroke-[1.75]"
        aria-hidden="true"
      />
    );
  };

  return (
    <aside className="space-y-8">
      {/* 1. Highlights */}
      {highlights && highlights.length > 0 && (
        <div className="p-5 sm:p-6 rounded-3xl bg-white border border-gray-100 shadow-xs space-y-5">
          <div className="flex items-center gap-2 border-b border-gray-100 pb-3">
            <div className="w-1.5 h-5 bg-[#2c7a3f] rounded-full" />
            <h3 className="text-lg font-bold font-serif text-[#0d3319]">
              {highlightsTitle || "Project Highlights"}
            </h3>
          </div>

          <div className="space-y-4 sm:space-y-5">
            {highlights.map((item, idx) => {
              const isDarkBadge = Boolean(item.badgeNumber);
              return (
                <div key={item.id ?? idx} className="flex items-start gap-4 group">
                  <div
                    className={`flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-full shadow-xs group-hover:scale-105 transition-transform ${
                      isDarkBadge
                        ? "bg-[#1c4d25] text-white font-extrabold text-lg sm:text-xl"
                        : "bg-[#edf5ee] border border-[#d8eadb] text-[#1c4d25]"
                    }`}
                  >
                    {item.badgeNumber ? (
                      <span>{item.badgeNumber}</span>
                    ) : (
                      getIcon(item.icon)
                    )}
                  </div>

                  <div className="space-y-1 min-w-0 pt-1">
                    <h4 className="text-xs sm:text-sm font-bold text-[#0d3319] leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-gray-500 leading-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 2. Gallery Section */}
      {gallery && gallery.length > 0 && (
        <div className="p-5 sm:p-6 rounded-3xl bg-[#f4f8f3] border border-[#e2ebd9] space-y-4">
          <div className="flex items-center gap-2">
            <h3 className="text-base sm:text-lg font-bold font-serif text-[#0d3319]">
              {galleryTitle || "Project Gallery"}
            </h3>
            <Sprout className="w-4 h-4 text-[#2c7a3f] fill-[#2c7a3f]" />
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            {gallery.map((item, idx) => (
              <button
                type="button"
                key={item.id ?? idx}
                onClick={() => setLightboxIndex(idx)}
                className="relative h-28 sm:h-32 rounded-2xl overflow-hidden shadow-xs border border-white/80 group cursor-pointer text-left focus:outline-none"
              >
                <Image
                  src={item.image}
                  alt={item.alt || "Gallery photo"}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 1024px) 50vw, 20vw"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white text-xs font-bold bg-black/40 px-2.5 py-1 rounded-full backdrop-blur-xs">
                    View
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* 3. Sidebar Quote Callout */}
      {sidebarQuote && (
        <div className="p-5 sm:p-6 rounded-3xl bg-[#f7f9f6] border border-[#e2ebd9] space-y-3 shadow-xs">
          <div className="flex items-start gap-2.5">
            <div className="text-4xl sm:text-5xl font-serif font-black text-[#88cb39] leading-none shrink-0 -mt-1 pl-1 select-none">
              “
            </div>
            <p className="text-xs sm:text-[13.5px] text-gray-700 font-sans italic leading-relaxed pt-0.5 font-medium">
              {sidebarQuote.quote}
            </p>
          </div>
          <p className="text-xs sm:text-sm font-bold text-[#2c7a3f] font-sans pl-7">
            &mdash; {sidebarQuote.author}
          </p>
        </div>
      )}

      {/* 4. Lightbox Modal Overlay (Matching Screenshot) */}
      {lightboxIndex !== null && gallery && gallery[lightboxIndex] && (
        <div
          data-lenis-prevent
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 sm:p-8 transition-opacity animate-in fade-in duration-200"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(null);
            }}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-all cursor-pointer"
            aria-label="Close image modal"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Left Arrow Button */}
          {gallery.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-4 sm:left-6 z-50 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-all cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          )}

          {/* Right Arrow Button */}
          {gallery.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 sm:right-6 z-50 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-all cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          )}

          {/* Main Modal Image Container */}
          <div
            className="relative max-w-[90vw] max-h-[85vh] w-auto h-auto flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={gallery[lightboxIndex].image}
              alt={gallery[lightboxIndex].alt || "Enlarged gallery photo"}
              className="max-w-full max-h-[85vh] rounded-lg object-contain shadow-2xl select-none"
            />
          </div>
        </div>
      )}
    </aside>
  );
}
