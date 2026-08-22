"use client";
import { site, SectionProps, SiteData } from "@/app/data";

import React, { useState } from "react";
import Image from "next/image";
import { Video as VideoIcon, Play, X, ChevronLeft, ChevronRight } from "lucide-react";
import type {
  NgoData,
  NgoVideoGallerySection,
  NgoVideoCategory,
  NgoVideoItem,
} from "@/app/data";



export default function VideosGallery({ data: propData, className }: SectionProps<SiteData> = {}) {
  const data = propData || site;
  const videoGalleryData = data.videoGallerySection as
    NgoVideoGallerySection | undefined;

  const [activeCategory, setActiveCategory] = useState<string>(
    videoGalleryData?.categories[0]?.id || "all",
  );
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  if (!videoGalleryData) return null;

  const { header, categories, videos } = videoGalleryData;

  const filteredVideos =
    activeCategory === "all"
      ? videos
      : videos.filter((video) => video.category === activeCategory);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowLeft") {
        setSelectedIndex((prev) => (prev !== null ? (prev - 1 + filteredVideos.length) % filteredVideos.length : null));
      }
      if (e.key === "ArrowRight") {
        setSelectedIndex((prev) => (prev !== null ? (prev + 1) % filteredVideos.length : null));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, filteredVideos.length]);

  return (
    <section className="bg-[#fcfdfc] mt-6 sm:mt-8 md:mt-10 lg:mt-12 pb-12">
      <div className="mx-auto max-w-[1350px] px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-8 flex items-center gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#f0f6ef] text-[#2c7a3f]">
            <VideoIcon className="h-7 w-7 stroke-[1.75]" />
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
          {categories.map((cat: NgoVideoCategory) => {
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`no-animate rounded-xl px-5 py-2.5 text-xs font-semibold shadow-sm transition-all duration-200 sm:text-sm ${isActive
                  ? "bg-[#0c401a] text-white shadow-md"
                  : "border border-[#e2e8e0] bg-white text-[#1d5e2d] hover:bg-[#f0f6ef]"
                  }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {filteredVideos.map((video: NgoVideoItem, idx: number) => (
            <div
              key={video.id}
              onClick={() => setSelectedIndex(idx)}
              className="no-animate group cursor-pointer flex flex-col overflow-hidden rounded-2xl bg-white p-3 shadow-xs border border-[#eef2ed] transition-all duration-300 hover:shadow-md"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-[#f0f4ef]">
                <Image
                  src={video.thumbnail}
                  alt={video.alt || video.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors group-hover:bg-black/20">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-[#16351d] shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:bg-white">
                    <Play className="h-5 w-5 fill-[#16351d] translate-x-0.5" />
                  </div>
                </div>

                <div className="absolute bottom-3 right-3 rounded-md bg-black/80 px-2 py-0.5 text-[11px] font-semibold tracking-wide text-white backdrop-blur-sm">
                  {video.duration}
                </div>
              </div>

              <div className="mt-3.5 px-1 pb-2">
                <h3 className=" text-lg font-bold tracking-tight text-[#16351d] transition-colors group-hover:text-[#1d5e2d]">
                  {video.title}
                </h3>
                <p className="mt-1 text-xs text-[#59665b] line-clamp-2 sm:text-sm">
                  {video.description}
                </p>
                <div className="mt-2.5 h-[2.5px] w-8 rounded-full bg-[#1d5e2d]" />
              </div>
            </div>
          ))}
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
              className="fixed top-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white/25 hover:scale-105 active:scale-95 no-animate"
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
                  (selectedIndex - 1 + filteredVideos.length) % filteredVideos.length
                );
              }}
              className="fixed left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white/25 hover:scale-105 active:scale-95 no-animate"
              aria-label="Previous video"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Right arrow */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex((selectedIndex + 1) % filteredVideos.length);
              }}
              className="fixed right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white/25 hover:scale-105 active:scale-95 no-animate"
              aria-label="Next video"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Main Video / Content */}
            <div
              className="relative h-[82vh] w-[88vw] max-w-5xl overflow-hidden flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {filteredVideos[selectedIndex].videoUrl ? (
                <iframe
                  src={filteredVideos[selectedIndex].videoUrl.includes('autoplay') ? filteredVideos[selectedIndex].videoUrl : `${filteredVideos[selectedIndex].videoUrl}?autoplay=1`}
                  title={filteredVideos[selectedIndex].title}
                  className="w-full h-full border-0 rounded-2xl"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={filteredVideos[selectedIndex].thumbnail}
                    alt={filteredVideos[selectedIndex].title}
                    fill
                    className="object-contain no-animate"
                    sizes="100vw"
                    priority
                  />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-black/60 text-white shadow-2xl backdrop-blur-sm border border-white/20">
                      <Play className="h-8 w-8 sm:h-10 sm:w-10 fill-white translate-x-0.5" />
                    </div>
                  </div>
                </div>
              )}

              {/* Title overlay */}
              {filteredVideos[selectedIndex]?.title && (
                <div className="absolute bottom-4 inset-x-0 p-4 text-center pointer-events-none z-10 flex justify-center items-center">
                  <p className="no-animate text-base sm:text-lg md:text-xl font-bold text-white bg-black/60 px-5 py-2.5 rounded-full backdrop-blur-md tracking-wide shadow-lg font-sans text-center max-w-2xl">
                    {filteredVideos[selectedIndex].title}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

      </div >
    </section >
  );
}
