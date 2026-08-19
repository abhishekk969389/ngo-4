"use client";

import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ngoDataJson from "@/app/data/ngoData_structured.json";
import type {
  NgoData,
  NgoBranchesSection,
  NgoBranchItem,
} from "@/app/type/ngo";

const data = new Proxy(ngoDataJson as any, {
  get(target, prop: string) {
    if (prop === "$$typeof") return undefined;
    return target.NGO?.sections?.[prop]?.variants?.["Legacy_" + prop];
  },
});

interface BranchSectionProps {
  sectionData?: NgoBranchesSection;
}

export default function BranchSection({ sectionData }: BranchSectionProps) {
  const branchesData = sectionData || data.branchesSection;

  if (!branchesData || !branchesData.branches?.length) {
    return null;
  }

  const { heading, description, branches } = branchesData;

  return (
    <section className="bg-[#fcfdfc] mt-6 sm:mt-8 md:mt-10 lg:mt-14 pb-12">
      <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0d3319] leading-[1.2]">
            {heading}
          </h2>

          <div className="mx-auto my-3.5 h-1 w-12 rounded-full bg-[#2c7a3f]" />

          {description && (
            <p className="text-sm sm:text-base text-[#4a5568] leading-relaxed whitespace-pre-line">
              {description}
            </p>
          )}
        </div>

        <div className="mt-10 sm:mt-12 lg:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {branches.map((branch: NgoBranchItem) => (
            <div
              key={branch.id}
              className="group bg-white rounded-2xl border border-[#e5e7eb] p-6 sm:p-7 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-11 h-11 rounded-full bg-[#eef6f0] border border-[#dcecdc] flex items-center justify-center text-[#2c7a3f] group-hover:scale-105 transition-transform duration-300">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-[#0d3319] leading-snug">
                      {branch.title}
                    </h3>
                    <p className="text-sm font-medium text-[#2c7a3f] mt-0.5">
                      {branch.city}
                    </p>
                  </div>
                </div>

                <div className="my-5 border-t border-gray-100" />

                <div className="space-y-4">
                  {branch.address && (
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-[#2c7a3f] flex-shrink-0 mt-1" />
                      <p className="text-sm text-[#4a5568] leading-relaxed whitespace-pre-line">
                        {branch.address}
                      </p>
                    </div>
                  )}

                  {branch.phone && (
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-[#2c7a3f] flex-shrink-0" />
                      <a
                        href={`tel:${branch.phone.replace(/[^+\d]/g, "")}`}
                        className="text-sm text-[#4a5568] hover:text-[#2c7a3f] transition-colors"
                      >
                        {branch.phone}
                      </a>
                    </div>
                  )}

                  {branch.email && (
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-[#2c7a3f] flex-shrink-0" />
                      <a
                        href={`mailto:${branch.email}`}
                        className="text-sm text-[#4a5568] hover:text-[#2c7a3f] transition-colors break-all"
                      >
                        {branch.email}
                      </a>
                    </div>
                  )}

                  {branch.hours && (
                    <div className="flex items-center gap-3">
                      <Clock className="w-4 h-4 text-[#2c7a3f] flex-shrink-0" />
                      <p className="text-sm text-[#4a5568]">{branch.hours}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
