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
import type { CaseStudyImpact, CaseStudyStory } from "@/app/type/ngo";

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
    <section className="py-10 sm:py-14 bg-white font-sans space-y-16 sm:space-y-20">
      {impact && (
        <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center gap-3 text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#0d3319] font-sans">
              <span className="h-px w-10 bg-[#2c7a3f]/30" />
              <span className="flex items-center gap-1.5">
                <Sprout className="h-4 w-4 fill-[#2c7a3f] text-[#2c7a3f]" />
                {impact.badge}
              </span>
              <span className="h-px w-10 bg-[#2c7a3f]/30" />
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0d3319] font-serif leading-tight mt-2">
              {impact.title}
            </h2>

            <div className="mt-3 flex justify-center">
              <span className="h-[2.5px] w-12 rounded-full bg-[#2c7a3f]" />
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {impact.stats?.map((stat) => {
              const IconComponent =
                statIconMap[stat.icon as keyof typeof statIconMap] ||
                statIconMap.default;

              return (
                <div
                  key={stat.id}
                  className="bg-[#f7faf6] border border-[#e2ebd9] rounded-2xl p-6 text-center flex flex-col items-center justify-between transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                >
                  <div className="w-14 h-14 rounded-full bg-[#e2ebd9] flex items-center justify-center text-[#1b4d25] mb-4">
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <span className="text-3xl sm:text-4xl font-extrabold font-serif text-[#0d3319]">
                    {stat.value}
                  </span>
                  <h3 className="text-base font-bold font-serif text-[#0d3319] mt-1">
                    {stat.label}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#59665b] mt-2 leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {story && (
        <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center gap-3 text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#0d3319] font-sans">
              <span className="h-px w-10 bg-[#2c7a3f]/30" />
              <span className="flex items-center gap-1.5">
                <Sprout className="h-4 w-4 fill-[#2c7a3f] text-[#2c7a3f]" />
                {story.badge}
              </span>
              <span className="h-px w-10 bg-[#2c7a3f]/30" />
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0d3319] font-serif leading-tight mt-2">
              {story.title}
            </h2>

            <div className="mt-3 flex justify-center">
              <span className="h-[2.5px] w-12 rounded-full bg-[#2c7a3f]" />
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
                <div className="bg-[#f7faf6] border-l-4 border-[#1b4d25] border-y border-r border-[#e2ebd9] p-5 sm:p-6 rounded-r-2xl space-y-3 shadow-2xs">
                  <Quote className="w-8 h-8 text-[#1b4d25] fill-[#1b4d25]/20" />
                  <p className="text-base sm:text-lg text-[#0d3319] font-serif font-bold italic leading-snug">
                    &ldquo;{story.quote.text}&rdquo;
                  </p>
                  {story.quote.author && (
                    <p className="text-xs sm:text-sm font-semibold text-[#2c7a3f] uppercase tracking-wider">
                      — {story.quote.author}
                    </p>
                  )}
                </div>
              )}
            </div>
            <div className="lg:col-span-6">
              <div className="relative h-[320px] sm:h-[400px] lg:h-[440px] w-full rounded-3xl overflow-hidden border border-[#e2ebd9] shadow-md">
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
