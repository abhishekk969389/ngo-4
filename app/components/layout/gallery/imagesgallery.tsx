'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Image as ImageIcon } from 'lucide-react';
import ngoDataJson from '@/app/data/ngoData_structured.json';
import type {
  NgoData,
  NgoGallerySection,
  NgoGalleryCategory,
  NgoGalleryImageItem,
} from '@/app/type/ngo';

const data = new Proxy(ngoDataJson as any, {
  get(target, prop: string) {
    if (prop === '$$typeof') return undefined;
    return target.NGO?.sections?.[prop]?.variants?.["Legacy_" + prop];
  }
});

export default function ImagesGallery() {
  const galleryData = data.gallerySection as NgoGallerySection | undefined;

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [visibleCount, setVisibleCount] = useState<number>(7);

  if (!galleryData) return null;

  const { header, categories, images, loadMoreButton } = galleryData;

  const filteredImages =
    activeCategory === 'all'
      ? images
      : images.filter((img) => img.category === activeCategory);

  const displayedImages = filteredImages.slice(0, visibleCount);

  return (
    <section className="bg-[#fcfdfc] mt-6 sm:mt-8 md:mt-10 lg:mt-14">
      <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="mb-8 flex items-center gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#f0f6ef] text-[#2c7a3f]">
            <ImageIcon className="h-7 w-7 stroke-[1.75]" />
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

        {/* Gallery Image Grid Layout */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {displayedImages.map((img: NgoGalleryImageItem, idx: number) => {
            const isFeatured = img.isFeatured || idx === 0;

            return (
              <div
                key={img.id}
                className={`group relative overflow-hidden rounded-2xl bg-[#f0f4ef] shadow-sm transition-all duration-300 hover:shadow-lg ${
                  isFeatured ? 'lg:col-span-1 lg:row-span-2 min-h-[380px]' : 'min-h-[220px]'
                }`}
              >
                <Image
                  src={img.image}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Hover Caption Overlay */}
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/20 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="font-serif text-sm font-semibold text-white sm:text-base">
                    {img.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Load More Button */}
        <div className="mt-12 flex justify-center">
          <button
            type="button"
            onClick={() =>
              setVisibleCount((prev) =>
                prev >= filteredImages.length ? 7 : prev + 4
              )
            }
            className="inline-flex items-center gap-2 rounded-xl border border-[#1d5e2d] bg-white px-6 py-3 text-xs font-bold text-[#1d5e2d] shadow-sm transition-all hover:bg-[#1d5e2d] hover:text-white sm:text-sm"
          >
            <ImageIcon className="h-4 w-4 stroke-[2]" />
            <span>{loadMoreButton.label}</span>
          </button>
        </div>

      </div>
    </section>
  );
}
