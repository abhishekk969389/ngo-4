"use client";
import { site, SectionProps, SiteData } from "@/app/data";

import React, { useState } from "react";
import Image from "next/image";
import { Image as ImageIcon, X, ChevronLeft, ChevronRight } from "lucide-react";
import type {
  NgoData,
  NgoGallerySection,
  NgoGalleryCategory,
  NgoGalleryImageItem,
} from "@/app/data";



export default function ImagesGallery({ data: propData, className }: SectionProps<SiteData> = {}) {
  const data = propData || site;
  const galleryData = data.gallerySection as NgoGallerySection | undefined;

  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [visibleCount, setVisibleCount] = useState<number>(7);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  if (!galleryData) return null;

  const { header, categories, images, loadMoreButton } = galleryData;

  const filteredImages =
    activeCategory === "all"
      ? images
      : images.filter((img) => img.category === activeCategory);

  const displayedImages = filteredImages.slice(0, visibleCount);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowLeft") {
        setSelectedIndex((prev) => (prev !== null ? (prev - 1 + displayedImages.length) % displayedImages.length : null));
      }
      if (e.key === "ArrowRight") {
        setSelectedIndex((prev) => (prev !== null ? (prev + 1) % displayedImages.length : null));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, displayedImages.length]);

  return (
    <section className="bg-[#fcfdfc] mt-6 sm:mt-8 md:mt-10 lg:mt-14">
      <div className="mx-auto max-w-[1350px] px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-8 flex items-center gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#f0f6ef] text-[#2c7a3f]">
            <ImageIcon className="h-7 w-7 stroke-[1.75]" />
          </div>
          <div>
            <h2 className=" text-2xl xs:text-3xl font-bold tracking-tight text-[#0d3319] leading-[1.2] sm:leading-[1.18]">
              {header.title}
            </h2>
            <div className="mt-1 mb-1.5 h-[2.5px] w-10 rounded-full bg-[#2c7a3f]" />
            <p className="text-xs sm:text-sm md:text-base leading-relaxed text-gray-600 font-sans">
              {header.subtitle}
            </p>
          </div>
        </div>

        <div className="mb-10 flex flex-wrap items-center gap-3">
          {categories.map((cat: NgoGalleryCategory) => {
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  setActiveCategory(cat.id);
                  setVisibleCount(7);
                }}
                className={`rounded-xl px-5 py-2.5 text-xs font-semibold shadow-sm transition-all duration-200 sm:text-sm ${isActive
                  ? "bg-[#0c401a] text-white shadow-md"
                  : "border border-[#e2e8e0] bg-white text-[#1d5e2d] hover:bg-[#f0f6ef]"
                  }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {displayedImages.map((img: NgoGalleryImageItem, idx: number) => {
            const isFeatured = img.isFeatured || idx === 0;

            return (
              <div
                key={img.id}
                onClick={() => setSelectedIndex(idx)}
                className={`cursor-pointer group relative overflow-hidden rounded-2xl bg-[#f0f4ef] shadow-sm transition-all duration-300 hover:shadow-lg ${isFeatured
                  ? "lg:col-span-1 lg:row-span-2 min-h-[380px]"
                  : "min-h-[220px]"
                  }`}
              >
                <Image
                  src={img.image}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/20 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className=" text-sm font-semibold text-white sm:text-base">
                    {img.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <button
            type="button"
            onClick={() =>
              setVisibleCount((prev) =>
                prev >= filteredImages.length ? 7 : prev + 4,
              )
            }
            className="inline-flex items-center gap-2 rounded-xl border border-[#1d5e2d] bg-white px-6 py-3 text-xs font-bold text-[#1d5e2d] shadow-sm transition-all hover:bg-[#1d5e2d] hover:text-white sm:text-sm"
          >
            <ImageIcon className="h-4 w-4 stroke-[2]" />
            <span>{loadMoreButton.label}</span>
          </button>
        </div>

        {selectedIndex !== null && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#07090e]/95 backdrop-blur-md p-4 sm:p-6"
            onClick={() => setSelectedIndex(null)}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex(null);
              }}
              className="fixed top-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white/25 hover:scale-105 active:scale-95"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Left arrow */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex(
                  (selectedIndex - 1 + displayedImages.length) % displayedImages.length
                );
              }}
              className="fixed left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white/25 hover:scale-105 active:scale-95"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Right arrow */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex((selectedIndex + 1) % displayedImages.length);
              }}
              className="fixed right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white/25 hover:scale-105 active:scale-95"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Main Image */}
            <div
              className="relative h-[82vh] w-[88vw] max-w-5xl overflow-hidden flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={displayedImages[selectedIndex].image}
                alt={displayedImages[selectedIndex].alt || displayedImages[selectedIndex].title || "Gallery image"}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />

              {/* Title overlay */}
              {displayedImages[selectedIndex]?.title && (
                <div className="absolute bottom-4 inset-x-0 p-4 text-center pointer-events-none z-10 flex justify-center items-center">
                  <h3 className="text-base sm:text-xl md:text-2xl font-bold text-white tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-sans text-center">
                    {displayedImages[selectedIndex].title}
                  </h3>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
