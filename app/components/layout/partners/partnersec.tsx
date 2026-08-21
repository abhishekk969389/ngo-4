"use client";
import { site, SectionProps, SiteData } from "@/app/data";

import React from "react";
import Image from "next/image";



export default function PartnerSec({ data: propData, className }: SectionProps<SiteData> = {}) {
  const data = propData || site;
  const partnersData = data.partnersSection as any;

  if (!partnersData) return null;

  // Dynamically split heading to highlight specified text or the last word
  const headingText = partnersData.heading;
  const highlightWord = partnersData.highlightedText || "Partners";

  const headingParts = headingText.split(
    new RegExp(`(${highlightWord})`, "gi"),
  );

  return (
    <section className="bg-[#fcfdfc] mt-6 sm:mt-8 md:mt-10 lg:mt-14">
      <div className="mx-auto max-w-[1350px] px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center">
          <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0d3319] leading-[1.2] sm:leading-[1.18]">
            {headingParts.map((part: any, index: any) =>
              part.toLowerCase() === highlightWord.toLowerCase() ? (
                <span key={index} className="text-[#2c7a3f]">
                  {part}
                </span>
              ) : (
                <span key={index}>{part}</span>
              ),
            )}
          </h2>

          <div className="my-4 flex justify-center">
            <span className="h-[2.5px] w-12 rounded-full bg-[#2c7a3f]" />
          </div>

          <p className="mx-auto max-w-xl text-center text-xs sm:text-sm md:text-base leading-relaxed text-gray-600 font-sans">
            {partnersData.description}
          </p>
        </div>

        {/* 5-Column Logo Cards Grid */}
        <div className="mt-12 grid justify-between grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 sm:mt-16 lg:gap-5">
          {partnersData.partners.map((partner: any) => (
            <div
              key={partner.id}
              className="group flex h-24 sm:h-28 items-center justify-center rounded-2xl border border-[#e5eae2] bg-white p-1 sm:p-1.5 shadow-2xs transition-all duration-300"
            >
              <div className="relative flex h-full w-full items-center justify-center">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={280}
                  height={100}
                  className="max-h-[85%] max-w-[90%] w-auto h-auto object-contain mx-auto transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
