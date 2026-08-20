import React from "react";
import Image from "next/image";
import {
  Users,
  BookOpen,
  Monitor,
  School,
  ShieldCheck,
  CheckCircle2,
  Quote,
  Baby,
  Heart,
  ShoppingBag,
  Presentation,
  LucideIcon,
} from "lucide-react";
import type { ServiceFeaturesApproachData } from "@/app/data";

const iconMap: Record<string, LucideIcon> = {
  users: Users,
  book: BookOpen,
  laptop: Monitor,
  school: School,
  shieldCheck: ShieldCheck,
  baby: Baby,
  heart: Heart,
  bag: ShoppingBag,
  presentation: Presentation,
};

interface ServiceFeaturesApproachProps {
  data: ServiceFeaturesApproachData;
}

export default function ServiceFeaturesApproach({
  data,
}: ServiceFeaturesApproachProps) {
  if (!data) return null;

  return (
    <section className="font-sans px-4 sm:px-6 lg:px-8 max-w-[1350px] mx-auto mt-10 sm:mt-14 lg:mt-16">
      <div className="rounded-3xl bg-[#f4f8f4] border border-[#e2ede2] p-4 sm:p-6 lg:p-8">
        <div className="text-center flex items-center justify-center gap-2 sm:gap-4 mb-6 sm:mb-8">
          {data.topBannerIcon && (
            <span className="text-[#2c7a3f] text-lg sm:text-xl">
              {data.topBannerIcon}
            </span>
          )}
          <h2 className="text-base sm:text-xl lg:text-2xl font-bold font-serif text-[#1b4d25] tracking-tight">
            {data.topBannerTitle}
          </h2>
          {data.topBannerIcon && (
            <span className="text-[#2c7a3f] text-lg sm:text-xl">
              {data.topBannerIcon}
            </span>
          )}
        </div>

        {data.featureCards && data.featureCards.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-4 divide-y sm:divide-y-0 lg:divide-x divide-[#d8ebd9]">
            {data.featureCards.map((card, idx) => {
              const CardIcon = iconMap[card.icon] || BookOpen;
              return (
                <div
                  key={card.id ?? idx}
                  className={`flex flex-col items-center text-center p-3 sm:p-4 ${
                    idx > 0 ? "lg:pl-6" : ""
                  }`}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e3f0e4] text-[#2c7a3f] mb-3 shadow-xs">
                    <CardIcon className="w-6 h-6 stroke-[2]" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-[#0d3319] leading-snug">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-xs text-gray-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* 2. 3-Column Layout: Our Approach | Center Image | What We Provide & Quote */}
      <div className="mt-10 sm:mt-14 lg:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Our Approach */}
        <div className="lg:col-span-4 space-y-4">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-[#0d3319]">
              {data.approach?.title}
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
              {data.approach?.description}
            </p>
          </div>

          {data.approach?.steps && data.approach.steps.length > 0 && (
            <div className="mt-4 space-y-4">
              {data.approach.steps.map((step, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3.5 p-2 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1b4d25] text-white text-xs font-bold font-mono shadow-xs">
                    {step.stepNumber}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0d3319]">
                      {step.title}
                    </h4>
                    <p className="mt-0.5 text-xs text-gray-600 leading-snug">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Center Column: Center Image */}
        <div className="lg:col-span-4 flex justify-center">
          <div className="relative w-full max-w-[380px] aspect-[4/5] rounded-3xl overflow-hidden shadow-md border-4 border-white">
            <Image
              src={data.centerImage}
              alt={data.centerImageAlt || "Service detail photo"}
              fill
              className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
          </div>
        </div>

        {/* Right Column: What We Provide & Quote */}
        <div className="lg:col-span-4 space-y-5">
          <div className="p-5 sm:p-6 rounded-2xl bg-[#f4f8f4] border border-[#e2ede2]">
            <h3 className="text-lg sm:text-xl font-bold font-serif text-[#0d3319] mb-4">
              {data.whatWeProvide?.title}
            </h3>

            {data.whatWeProvide?.items && (
              <ul className="space-y-3">
                {data.whatWeProvide.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#2c7a3f] shrink-0 mt-0.5 stroke-[2.5]" />
                    <span className="text-xs sm:text-sm text-gray-700 font-medium leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {data.whatWeProvide?.quoteBox && (
            <div className="relative p-5 sm:p-6 rounded-2xl bg-[#edf5ee] border border-[#d6ebd9] overflow-hidden">
              <Quote className="w-8 h-8 text-[#2c7a3f]/30 mb-2 rotate-180" />
              <blockquote className="text-xs sm:text-sm font-serif italic text-[#0d3319] leading-relaxed relative z-10">
                &ldquo;{data.whatWeProvide.quoteBox.quote}&rdquo;
              </blockquote>
              <p className="mt-3 text-xs font-bold text-[#2c7a3f] uppercase tracking-wider font-sans">
                &mdash; {data.whatWeProvide.quoteBox.author}
              </p>

              <div className="absolute bottom-2 right-2 text-[#2c7a3f]/15 pointer-events-none">
                <svg
                  className="w-10 h-10"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.8 2.8C11.4 3 6.3 8.1 6.1 14.5c-.1 2.9 1 5.7 3 7.8l.9.9 2-2c3.9-3.9 4.8-9.8 2.2-14.7.7.7 1.4 1.5 2 2.4.9 1.4 1.4 3 1.5 4.6l2-.3c-.2-2.1-.9-4.1-2-5.9 1.1-1.3 2.1-2.9 2.1-4.5h-2z" />
                </svg>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
