"use client";
import type { NgoMediaSection, NgoMediaOutlet } from "@/app/data";
import { site, SectionProps, SiteData } from "@/app/data";

import React from "react";
import Image from "next/image";

export default function MediaSection({ data: propData, className }: SectionProps<SiteData> = {}) {
  const data = propData || site;
  const mediaData = data.mediaSection as NgoMediaSection | undefined;

  if (!mediaData) return null;

  return (
    <section className="bg-[#fcfdfc] mt-6 sm:mt-8 md:mt-10 lg:mt-14 pb-12">
      <div className="mx-auto max-w-[1350px] px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center">
          <p className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] text-[#0d3319] font-sans">
            {mediaData.badge}
          </p>

          <h2 className="mt-2 font-serif text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0d3319] leading-[1.2] sm:leading-[1.18]">
            {mediaData.heading}
          </h2>

          <div className="my-4 flex justify-center">
            <span className="h-[2.5px] w-12 rounded-full bg-[#2c7a3f]" />
          </div>

          <p className="mx-auto max-w-xl text-center text-xs sm:text-sm md:text-base leading-relaxed text-gray-600 font-sans">
            {mediaData.description}
          </p>
        </div>

        {/* Media Mentions Outlet Grid (5 columns on desktop) */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-5">
          {mediaData.outlets.map((outlet: NgoMediaOutlet) => (
            <div
              key={outlet.id}
              className="flex min-h-[92px] items-center gap-3.5 rounded-xl border border-[#e5eae2] bg-white p-4 shadow-2xs transition-all duration-300"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center relative">
                <Image
                  src={outlet.icon}
                  alt={outlet.name}
                  fill
                  sizes="44px"
                  className="object-contain"
                />
              </div>

              <span className="text-xs font-bold uppercase leading-tight tracking-wider text-[#1a331e] sm:text-sm">
                {outlet.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
