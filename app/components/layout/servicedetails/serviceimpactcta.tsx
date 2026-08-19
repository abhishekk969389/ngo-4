import React from "react";
import Link from "next/link";
import {
  Users,
  GraduationCap,
  ShoppingBag,
  Presentation,
  HeartHandshake,
  ArrowRight,
  Heart,
  ShieldCheck,
  Sprout,
  LucideIcon,
} from "lucide-react";
import type { ServiceImpactCtaData } from "@/app/type/ngo";

const iconMap: Record<string, LucideIcon> = {
  users: Users,
  gradCap: GraduationCap,
  bag: ShoppingBag,
  presentation: Presentation,
  heartHandshake: HeartHandshake,
  heart: Heart,
  shieldCheck: ShieldCheck,
  sprout: Sprout,
};

interface ServiceImpactCtaProps {
  data: ServiceImpactCtaData;
}

export default function ServiceImpactCta({ data }: ServiceImpactCtaProps) {
  if (!data) return null;

  const CtaIcon = data.cta?.icon
    ? iconMap[data.cta.icon] || HeartHandshake
    : HeartHandshake;

  return (
    <section className="font-sans px-4 sm:px-6 lg:px-8 max-w-[1350px] mx-auto mt-10 sm:mt-14 lg:mt-16 mb-12 sm:mb-16">
      {data.impact && (
        <div className="rounded-3xl bg-[#1c4d25] text-white p-6 sm:p-8 lg:p-10 shadow-xl overflow-hidden relative">
          {/* Header */}
          <div className="text-center mb-4">
            <h2 className="text-2xl font-bold font-serif tracking-tight">
              {data.impact.title}
            </h2>
            <div className="mx-auto mt-2 h-0.5 w-12 bg-white/40 rounded-full" />
          </div>

          {data?.impact?.stats && data.impact.stats.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0">
              {data.impact.stats.map((stat, idx) => {
                const StatIcon = iconMap[stat.icon] || Users;
                return (
                  <div
                    key={stat.id ?? idx}
                    className={`flex items-center gap-4 py-2 px-4 lg:px-6 ${
                      idx > 0
                        ? "lg:border-l lg:border-dashed lg:border-white/40"
                        : ""
                    }`}
                  >
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#f4f7f2] text-[#1c4d25] shadow-sm">
                      <StatIcon className="w-8 h-8 stroke-[1.75]" />
                    </div>

                    <div className="flex flex-col text-left">
                      <span className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight">
                        {stat.value}
                      </span>

                      <h3 className="text-xs sm:text-sm font-semibold text-white/95 mt-0.5">
                        {stat.title}
                      </h3>

                      <p className="text-[11px] sm:text-xs text-white/70 leading-snug mt-1 max-w-[170px]">
                        {stat.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* 2. Bottom CTA Banner */}
      {data.cta && (
        <div className="mt-8 sm:mt-10 p-6 sm:p-8 rounded-3xl bg-[#f4f8f4] border border-[#e2ede2] flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          {/* Left Side: Icon & Content */}
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#e3f0e4] text-[#1c4d25] shadow-xs">
              <CtaIcon className="w-7 h-7 stroke-[2]" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold font-serif text-[#0d3319]">
                {data.cta.title}
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-gray-600 leading-relaxed max-w-xl">
                {data.cta.description}
              </p>
            </div>
          </div>

          {/* Right Side: CTA Button */}
          {data.cta.button && (
            <Link
              href={data.cta.button.href || "/donate"}
              className="shrink-0 inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#1c4d25] hover:bg-[#143d1c] text-white text-sm font-bold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <span>{data.cta.button.label}</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </Link>
          )}

          <div className="absolute top-2 right-2 text-[#1c4d25]/10 pointer-events-none">
            <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.8 2.8C11.4 3 6.3 8.1 6.1 14.5c-.1 2.9 1 5.7 3 7.8l.9.9 2-2c3.9-3.9 4.8-9.8 2.2-14.7.7.7 1.4 1.5 2 2.4.9 1.4 1.4 3 1.5 4.6l2-.3c-.2-2.1-.9-4.1-2-5.9 1.1-1.3 2.1-2.9 2.1-4.5h-2z" />
            </svg>
          </div>
        </div>
      )}
    </section>
  );
}
