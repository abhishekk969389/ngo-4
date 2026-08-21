"use client";

import Image from "next/image";
import {
  Sprout,
  Users,
  Building2,
  Presentation,
  Clock,
  Quote,
} from "lucide-react";
import type { CaseStudyImpact, CaseStudyStory } from "@/app/data";

const statIconMap = {
  users: Users,
  building: Building2,
  presentation: Presentation,
  clock: Clock,
  default: Users,
};

interface CaseStudyImpactStoryProps {
  impact: CaseStudyImpact;
  story: CaseStudyStory;
}

export default function CaseStudyImpactStory({
  impact,
  story,
}: CaseStudyImpactStoryProps) {
  return (
    <section className="mt-6 sm:mt-8 md:mt-10 lg:mt-14 bg-white font-sans">
      {impact && (
        <div className="mx-auto max-w-[1350px] px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#1b4d25] font-sans">
              <Sprout className="h-5 w-5 text-[#1b4d25]" />
              <span>{impact.badge}</span>
              <span className="h-px w-10 bg-[#1b4d25]/30 ml-1" />
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0d3319] font-serif leading-tight mt-2">
              {impact.title}
            </h2>

            <div className="mt-3.5 flex justify-center">
              <span className="h-[3px] w-12 rounded-full bg-[#1b4d25]" />
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-[#d6e4ce] bg-white p-6 sm:p-8 shadow-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-y-8 lg:gap-0">
              {impact.stats?.map((stat, idx) => {
                const IconComponent =
                  statIconMap[stat.icon as keyof typeof statIconMap] ||
                  statIconMap.default;

                return (
                  <div
                    key={stat.id || idx}
                    className={`flex items-center gap-4 pb-6 sm:pb-6 lg:pb-0 ${
                      idx !== (impact.stats?.length ?? 0) - 1
                        ? "border-b lg:border-b-0 border-[#e2ebd9]"
                        : ""
                    } ${
                      idx % 2 === 0
                        ? "sm:border-r sm:border-[#e2ebd9] sm:pr-6"
                        : "sm:pl-6"
                    } lg:border-r lg:last:border-r-0 lg:px-6 first:lg:pl-0 last:lg:pr-0`}
                  >
                    <div className="w-16 h-16 rounded-full bg-[#e8f1e6] flex-shrink-0 flex items-center justify-center text-[#1b4d25]">
                      <IconComponent className="w-7 h-7 stroke-[1.75]" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-3xl font-extrabold text-[#0d3319] leading-none mb-1.5">
                        {stat.value}
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-[#0d3319] leading-tight">
                        {stat.label}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#59665b] mt-1 leading-snug">
                        {stat.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {story && (
        <div className="mx-auto max-w-[1350px] px-4 sm:px-6 lg:px-8 mt-6 sm:mt-8 md:mt-10 lg:mt-14">
          <div className="text-center">
            <div className="inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#1b4d25] font-sans">
              <Sprout className="h-5 w-5 text-[#1b4d25]" />
              <span>{story.badge}</span>
              <span className="h-px w-10 bg-[#1b4d25]/30 ml-1" />
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0d3319] font-serif leading-tight mt-2">
              {story.title}
            </h2>

            <div className="mt-3.5 flex justify-center">
              <span className="h-[3px] w-12 rounded-full bg-[#1b4d25]" />
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              {story.paragraphs?.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-sm sm:text-base leading-relaxed text-[#4b584d]"
                >
                  {paragraph}
                </p>
              ))}

              {story.quote && (
                <div className="bg-[#f2f6f1] rounded-2xl p-5 sm:p-6 flex items-start gap-4">
                  <div className="flex-shrink-0 text-[#1b4d25] pt-0.5">
                    <Quote className="w-6 h-6 stroke-[2.5] fill-[#1b4d25]/20 text-[#1b4d25]" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm sm:text-base text-[#0d3319] font-bold leading-relaxed">
                      &ldquo;{story.quote.text}&rdquo;
                    </p>
                    {story.quote.author && (
                      <p className="text-xs sm:text-sm font-semibold text-[#1b4d25]">
                        &mdash; {story.quote.author}
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
            <div className="lg:col-span-6">
              <div className="relative h-[320px] sm:h-[400px] lg:h-[440px] w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-[#d6e4ce] shadow-xs">
                <Image
                  src={story.image || "/banner_bg.png"}
                  alt={story.imageAlt || story.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
