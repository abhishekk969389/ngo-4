"use client";

import {
  FileText,
  GraduationCap,
  ShieldCheck,
  Sprout,
  Users,
  HeartPulse,
  Building2,
  Clock,
} from "lucide-react";
import type { CaseStudyOverview } from "@/app/data";

const iconMap = {
  graduationCap: GraduationCap,
  shield: ShieldCheck,
  sprout: Sprout,
  users: Users,
  heartPulse: HeartPulse,
  building: Building2,
  clock: Clock,
  default: FileText,
};

interface CaseStudyOverviewProps {
  data: CaseStudyOverview;
}

export default function CaseStudyOverviewSection({
  data,
}: CaseStudyOverviewProps) {
  if (!data) return null;

  return (
    <section className="mt-6 sm:mt-8 md:mt-10 lg:mt-14 bg-white font-sans">
      <div className="mx-auto max-w-[1350px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {/* Left Column: Overview Box */}
          <div className="lg:col-span-6 bg-[#f7faf6] border border-[#e2ebd9] rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#1b4d25] flex items-center justify-center text-white shadow-xs">
                  <FileText className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold font-serif text-[#0d3319]">
                  {data.title}
                </h2>
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-[#4b584d] font-sans">
                {data.description}
              </p>
            </div>
          </div>

          {/* Right Column: Key Features List */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-4">
            {data.features?.map((feature) => {
              const IconComponent =
                iconMap[feature.icon as keyof typeof iconMap] ||
                iconMap.default;

              return (
                <div
                  key={feature.id}
                  className="bg-[#f7faf6] border border-[#e2ebd9] rounded-2xl p-4 sm:p-5 flex items-start gap-4 transition-all duration-200 hover:border-[#1b4d25]/40 hover:shadow-xs"
                >
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#e2ebd9] flex-shrink-0 flex items-center justify-center text-[#1b4d25]">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold font-serif text-[#0d3319]">
                      {feature.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#4b584d] mt-1 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
