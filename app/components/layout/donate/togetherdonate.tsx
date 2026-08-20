"use client";
import { site, SectionProps, SiteData } from "@/app/data";

import React from "react";
import Link from "next/link";
import {
  Heart,
  Users,
  HandHeart,
  Globe,
  Calendar,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import type {
  NgoData,
  NgoTogetherDonateSection,
  NgoTogetherDonateStat,
} from "@/app/data";



const statIconMap: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  heart: Heart,
  users: Users,
  "heart-hand": HandHeart,
  globe: Globe,
};

export default function TogetherDonate({ data: propData, className }: SectionProps<SiteData> = {}) {
  const data = propData || site;
  const togetherData = data.togetherDonateSection as
    NgoTogetherDonateSection | undefined;

  if (!togetherData) return null;

  const { heading, stats, generosityBanner, securityFooter } = togetherData;

  return (
    <section className="bg-[#fcfdfc] mt-12 mb-12">
      <div className="mx-auto max-w-[1350px] px-4 sm:px-6 lg:px-8">
        {/* Top Card (Stats / Impact Grid) */}
        <div className="mx-auto max-w-[1280px] rounded-3xl border border-[#e5eae2] bg-[#f8faf7] p-8 text-center shadow-sm sm:p-10">
          <h2 className="font-serif text-2xl font-bold text-[#16351d] sm:text-3xl lg:text-4xl">
            {heading}
          </h2>

          <div className="mx-auto mt-2 mb-8 h-[3px] w-12 rounded-full bg-[#1d5e2d] sm:mb-10" />

          {/* 4-Column Stats Grid */}
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-0">
            {stats.map((stat: NgoTogetherDonateStat) => {
              const StatIcon = statIconMap[stat.icon] || Heart;

              return (
                <div
                  key={stat.id}
                  className="px-4 lg:border-r lg:border-[#e2e8e0] lg:last:border-r-0"
                >
                  <div className="mx-auto mb-3.5 flex h-14 w-14 items-center justify-center rounded-full bg-[#e2ede0] text-[#1d5e2d]">
                    <StatIcon className="h-6 w-6 stroke-[1.75]" />
                  </div>
                  <p className="text-2xl font-bold text-[#16351d] sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-[#59665b] sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mx-auto  mt-12 flex max-w-[1280px] flex-col items-start justify-between gap-6 rounded-3xl border border-[#f0e8e0] bg-[#fbf7f4] p-6 shadow-sm sm:flex-row sm:items-center sm:p-8">
          <div className=" mx-10 flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#eae3dc] text-[#1d5e2d]">
              <HandHeart className="h-7 w-7 stroke-[1.75]" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-[#16351d] sm:text-2xl">
                {generosityBanner.title}
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-[#59665b] whitespace-pre-line sm:text-sm">
                {generosityBanner.description}
              </p>
            </div>
          </div>

          <Link
            href={generosityBanner.button.href}
            className="inline-flex shrink-0  mx-10 items-center gap-2 rounded-2xl border border-[#1d5e2d] bg-white px-6 py-3 text-xs font-semibold text-[#1d5e2d] shadow-sm transition hover:bg-[#1d5e2d] hover:text-white sm:text-sm"
          >
            <span>{generosityBanner.button.label}</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Bottom Trust Footer */}
        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-[#59665b] sm:text-sm">
          <ShieldCheck className="h-4 w-4 stroke-[2] text-[#1d5e2d]" />
          <span>{securityFooter.text}</span>
        </div>
      </div>
    </section>
  );
}
