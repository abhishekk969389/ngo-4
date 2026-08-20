"use client";
import { site, SectionProps } from "@/app/data";

import { useState } from "react";
import Image from "next/image";
import { Sprout, ChevronLeft, ChevronRight } from "lucide-react";
import type { CaseStudyGallery } from "@/app/data";

interface CaseStudyGalleryProps {
  gallery: CaseStudyGallery;
}

export default function CaseStudyGallerySection({
  gallery,
}: CaseStudyGalleryProps) {
  const [startIndex, setStartIndex] = useState<number>(0);

  if (!gallery || !gallery.items || gallery.items.length === 0) return null;

  const items = gallery.items;

  const handlePrev = () => {
    setStartIndex((prev) =>
      prev === 0 ? Math.max(0, items.length - 4) : prev - 1,
    );
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev >= items.length - 4 ? 0 : prev + 1));
  };

  return (
    <section className="py-10 sm:py-14 bg-[#f9faf7] font-sans border-t border-[#e2ebd9]">
      <div className="mx-auto max-w-[1350px] px-4 sm:px-6 lg:px-8">
        {/* Badge & Header */}
        <div className="text-center">
          <div className="inline-flex items-center justify-center gap-3 text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#0d3319] font-sans">
            <span className="h-px w-10 bg-[#2c7a3f]/30" />
            <span className="flex items-center gap-1.5">
              <Sprout className="h-4 w-4 fill-[#2c7a3f] text-[#2c7a3f]" />
              {gallery.badge}
            </span>
            <span className="h-px w-10 bg-[#2c7a3f]/30" />
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0d3319] font-serif leading-tight mt-2">
            {gallery.title}
          </h2>

          <div className="mt-3 flex justify-center">
            <span className="h-[2.5px] w-12 rounded-full bg-[#2c7a3f]" />
          </div>
        </div>

        <div className="relative mt-10">
          {/* Navigation Arrows */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous images"
            className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-[#e2ebd9] text-[#1b4d25] shadow-md flex items-center justify-center hover:bg-[#1b4d25] hover:text-white transition-all duration-200"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next images"
            className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-[#e2ebd9] text-[#1b4d25] shadow-md flex items-center justify-center hover:bg-[#1b4d25] hover:text-white transition-all duration-200"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 px-2">
            {items.slice(startIndex, startIndex + 4).map((item) => (
              <div
                key={item.id}
                className="group relative h-56 sm:h-64 rounded-2xl overflow-hidden border border-[#e2ebd9] shadow-xs bg-white"
              >
                <Image
                  src={item.image}
                  alt={item.alt || "Gallery photo"}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  {item.alt && (
                    <p className="text-white text-xs sm:text-sm font-semibold truncate font-sans">
                      {item.alt}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
