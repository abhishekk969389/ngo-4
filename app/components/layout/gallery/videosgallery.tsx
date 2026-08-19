'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Video as VideoIcon, Play, X } from 'lucide-react';
import ngoDataJson from '@/app/data/ngoData_structured.json';
import type {
  NgoData,
  NgoVideoGallerySection,
  NgoVideoCategory,
  NgoVideoItem,
} from '@/app/type/ngo';

const data = new Proxy(ngoDataJson as any, {
  get(target, prop: string) {
    if (prop === '$$typeof') return undefined;
    return target.NGO?.sections?.[prop]?.variants?.["Legacy_" + prop];
  }
});

export default function VideosGallery() {
  const videoGalleryData = data.videoGallerySection as NgoVideoGallerySection | undefined;

  const [activeCategory, setActiveCategory] = useState<string>(
    videoGalleryData?.categories[0]?.id || 'all'
  );
  const [selectedVideo, setSelectedVideo] = useState<NgoVideoItem | null>(null);

  if (!videoGalleryData) return null;

  const { header, categories, videos } = videoGalleryData;

  const filteredVideos =
    activeCategory === 'all'
      ? videos
      : videos.filter((video) => video.category === activeCategory);

  return (
    <section className="bg-[#fcfdfc] mt-6 sm:mt-8 md:mt-10 lg:mt-12 pb-12">
      <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="mb-8 flex items-center gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#f0f6ef] text-[#2c7a3f]">
            <VideoIcon className="h-7 w-7 stroke-[1.75]" />
          </div>
          <div>
            <h2 className="font-serif text-2xl xs:text-3xl font-bold tracking-tight text-[#0d3319] leading-[1.2] sm:leading-[1.18]">
              {header.title}
            </h2>
            <div className="mt-1 mb-1.5 h-[2.5px] w-10 rounded-full bg-[#2c7a3f]" />
            <p className="text-xs sm:text-sm md:text-base leading-relaxed text-gray-600 font-sans">
              {header.subtitle}
            </p>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="mb-10 flex flex-wrap items-center gap-3">
          {categories.map((cat: NgoVideoCategory) => {
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`rounded-xl px-5 py-2.5 text-xs font-semibold shadow-sm transition-all duration-200 sm:text-sm ${
                  isActive
                    ? 'bg-[#0c401a] text-white shadow-md'
                    : 'border border-[#e2e8e0] bg-white text-[#1d5e2d] hover:bg-[#f0f6ef]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Video Cards Grid Layout */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {filteredVideos.map((video: NgoVideoItem) => (
            <div
              key={video.id}
              onClick={() => setSelectedVideo(video)}
              className="group cursor-pointer flex flex-col overflow-hidden rounded-2xl bg-white p-3 shadow-xs border border-[#eef2ed] transition-all duration-300 hover:shadow-md"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-[#f0f4ef]">
                <Image
                  src={video.thumbnail}
                  alt={video.alt || video.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors group-hover:bg-black/20">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-[#16351d] shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:bg-white">
                    <Play className="h-5 w-5 fill-[#16351d] translate-x-0.5" />
                  </div>
                </div>

                {/* Video Duration Badge */}
                <div className="absolute bottom-3 right-3 rounded-md bg-black/80 px-2 py-0.5 text-[11px] font-semibold tracking-wide text-white backdrop-blur-sm">
                  {video.duration}
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="mt-3.5 px-1 pb-2">
                <h3 className="font-serif text-lg font-bold tracking-tight text-[#16351d] transition-colors group-hover:text-[#1d5e2d]">
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

        {/* Video Player Modal */}
        {selectedVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-xs">
            <div className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-black shadow-2xl">
              {/* Modal Header */}
              <div className="flex items-center justify-between border-b border-white/10 bg-[#16351d] px-6 py-4 text-white">
                <div>
                  <h4 className="font-serif text-lg font-bold">{selectedVideo.title}</h4>
                  <p className="text-xs text-white/70">{selectedVideo.description}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedVideo(null)}
                  className="rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Video Embed / Player Container */}
              <div className="relative aspect-[16/9] w-full bg-black">
                {selectedVideo.videoUrl ? (
                  <iframe
                    src={selectedVideo.videoUrl}
                    title={selectedVideo.title}
                    className="h-full w-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div className="relative flex h-full w-full items-center justify-center bg-[#0d2112]">
                    <Image
                      src={selectedVideo.thumbnail}
                      alt={selectedVideo.title}
                      fill
                      className="object-cover opacity-40"
                    />
                    <div className="relative z-10 text-center p-6 bg-black/60 rounded-2xl backdrop-blur-md max-w-md mx-4">
                      <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-[#1d5e2d] text-white">
                        <Play className="h-6 w-6 fill-white translate-x-0.5" />
                      </div>
                      <h5 className="text-white font-bold text-base">{selectedVideo.title}</h5>
                      <p className="text-xs text-gray-300 mt-1">{selectedVideo.duration}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
