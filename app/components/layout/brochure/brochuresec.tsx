"use client";
import { site, SectionProps, SiteData } from "@/app/data";

import React from "react";
import {
  Building2,
  TrendingUp,
  GraduationCap,
  Leaf,
  Users,
  HandHeart,
  Download,
} from "lucide-react";
import type {
  NgoData,
  NgoBrochureSection,
  NgoBrochureItem,
} from "@/app/data";



const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  building: Building2,
  chart: TrendingUp,
  "graduation-cap": GraduationCap,
  leaf: Leaf,
  users: Users,
  "heart-hand": HandHeart,
};

export default function BrochureSec({ data: propData, className }: SectionProps<SiteData> = {}) {
  const data = propData || site;
  const brochureData = data.brochureSection as NgoBrochureSection | undefined;

  if (!brochureData) return null;

  const headingText = brochureData.heading;
  const highlightWord = brochureData.highlightedText || "Brochures";
  const headingParts = headingText.split(
    new RegExp(`(${highlightWord})`, "gi"),
  );

  return (
    <section className="bg-[#fcfdfc] mt-6 sm:mt-8 md:mt-10 lg:mt-14 pb-12">
      <div className="mx-auto max-w-[1350px] px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0d3319] leading-[1.2] sm:leading-[1.18]">
            {headingParts.map((part, index) =>
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
            {brochureData.description}
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl space-y-4 sm:mt-16">
          {brochureData.items.map((item: NgoBrochureItem) => {
            const IconComponent = iconMap[item.icon] || Building2;

            return (
              <div
                key={item.id}
                className="group flex flex-col justify-between gap-4 rounded-2xl border border-[#e5eae2] bg-white p-5 shadow-sm transition-all duration-300 hover:border-[#1d5e2d]/40 hover:shadow-md sm:flex-row sm:items-center sm:p-6"
              >
                <div className="flex items-start gap-4 sm:items-center">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#f0f6ef] text-[#1d5e2d]">
                    <IconComponent className="h-7 w-7 stroke-[1.75]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#16351d] transition-colors group-hover:text-[#1d5e2d] sm:text-xl">
                      {item.title}
                    </h3>
                    <p className="mt-1 max-w-lg text-xs leading-relaxed text-[#59665b] sm:text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="flex shrink-0 flex-col items-start gap-1.5 sm:items-end">
                  <a
                    href={item.downloadUrl}
                    download
                    className="inline-flex items-center gap-2 rounded-xl border border-[#1d5e2d] px-5 py-2.5 text-xs font-bold text-[#1d5e2d] shadow-sm transition-all hover:bg-[#1d5e2d] hover:text-white sm:text-sm"
                  >
                    <Download className="h-4 w-4 stroke-[2.2]" />
                    <span>{item.buttonLabel || "Download"}</span>
                  </a>
                  <span className="text-[11px] font-semibold tracking-wider text-[#8a998c] uppercase">
                    {item.fileType} • {item.fileSize}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
