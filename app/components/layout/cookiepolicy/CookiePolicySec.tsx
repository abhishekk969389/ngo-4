"use client";

import type { NgoCookiePolicySection } from "@/app/data";
import { site, SectionProps, SiteData } from "@/app/data";

import React from "react";
import { ShieldCheck, FileCheck } from "lucide-react";

export default function CookiePolicySec({ data: propData, className }: SectionProps<SiteData> = {}) {
  const data = propData || site;
  const policyData = ((data as any).cookiePolicySection || (data as any).cookiepolicysection) as NgoCookiePolicySection | undefined;

  if (!policyData) return null;

  const { sections, callout } = policyData;

  return (
    <section className="bg-[#fcfdfc] mt-6 sm:mt-8 md:mt-10 lg:mt-14 pb-12">
      <div className="mx-auto max-w-[1350px] px-4 sm:px-6 lg:px-8">
        <div className="divide-y divide-[#eef2ed] space-y-8">
          {sections.map((item: any, idx: number) => (
            <div key={item.id} className={`${idx > 0 ? "pt-8" : ""}`}>
              <h3 className="font-serif text-xl font-bold text-[#0d3319] sm:text-2xl mb-3">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 font-sans leading-relaxed">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
