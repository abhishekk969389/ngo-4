import type { NgoImpactStat } from "@/app/data";
import { site, SectionProps, NGOimpactSectionData } from "@/app/data";
import Image from "next/image";
import { BookOpenText, HeartPulse, Users, Leaf, Sparkles } from "lucide-react";



const statIconMap = {
  users: Users,
  book: BookOpenText,
  heart: HeartPulse,
  leaf: Leaf,
};

export default function OurImpact({ data, className }: SectionProps<NGOimpactSectionData> = {}) {
  const impactData = data || site.impactsection;

  if (!impactData) return null;

  const getStatIcon = (icon: string) => {
    const IconComponent =
      statIconMap[icon as keyof typeof statIconMap] ?? Sparkles;
    return <IconComponent className="h-5 w-5 text-[#1b5e2d] sm:h-6 sm:w-6" />;
  };

  return (
    <section className="overflow-hidden bg-white ">
      <svg className="absolute h-0 w-0" aria-hidden="true" focusable="false">
        <defs>
          <mask
            id="brush-stroke-mask"
            maskUnits="objectBoundingBox"
            maskContentUnits="objectBoundingBox"
          >
            <path
              d="M 0.1 0.15 C 0.05 0.2, 0.02 0.35, 0.08 0.42 C 0.01 0.48, 0.03 0.65, 0.07 0.72 C 0.02 0.8, 0.08 0.9, 0.15 0.95 C 0.25 0.98, 0.4 0.92, 0.55 0.97 C 0.7 0.93, 0.85 0.98, 0.93 0.88 C 0.99 0.8, 0.94 0.65, 0.98 0.55 C 0.92 0.45, 0.97 0.3, 0.92 0.18 C 0.85 0.08, 0.7 0.12, 0.55 0.05 C 0.4 0.08, 0.25 0.02, 0.1 0.15 Z"
              fill="#ffffff"
            />
            <circle cx="0.04" cy="0.25" r="0.02" fill="#ffffff" />
            <circle cx="0.02" cy="0.45" r="0.015" fill="#ffffff" />
            <circle cx="0.05" cy="0.65" r="0.025" fill="#ffffff" />
            <circle cx="0.03" cy="0.82" r="0.018" fill="#ffffff" />
            <circle cx="0.96" cy="0.2" r="0.02" fill="#ffffff" />
            <circle cx="0.98" cy="0.4" r="0.012" fill="#ffffff" />
            <circle cx="0.95" cy="0.7" r="0.02" fill="#ffffff" />
          </mask>
        </defs>
      </svg>

      <div className="mx-auto max-w-[1350px] px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] p-6 sm:p-8 lg:p-12 mb-6">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
            {/* Left Content Column */}
            <div className="relative z-10">
              <div className="mb-4 flex items-center gap-2">
                <span className="h-[2px] w-8 bg-[#1d5e2d]" />
                <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#1d5e2d]">
                  {impactData.badge}
                </span>
                <svg
                  className="h-5 w-5 text-[#1d5e2d]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                  <path d="M2 21c0-3 1.85-5.36 5.08-6 C9.5 14.52 12 13 13 12" />
                </svg>
              </div>

              <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0d3319] font-serif leading-[1.2] sm:leading-[1.18] tracking-tight mt-1">
                <span className="block">{impactData.heading.line1}</span>
                <span className="block">{impactData.heading.line2}</span>
                <span className="inline-block relative text-[#2c7a3f] italic font-serif">
                  {impactData.heading.line3}

                  <svg
                    className="absolute -bottom-2 left-0 w-full h-3 text-[#2c7a3f]/75"
                    viewBox="0 0 300 12"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M 5 8 Q 150 2, 295 7"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h2>

              <p className="mt-4 max-w-[500px] text-xs sm:text-sm md:text-base leading-relaxed text-gray-600 font-sans">
                {impactData.description}
              </p>

              {/* 4 Stats Cards in 1 Row */}
              <div className="mt-8 grid grid-cols-2 gap-4 border-t border-[#e2e8de] pt-6 sm:grid-cols-4 sm:gap-2">
                {impactData.stats.map((stat: NgoImpactStat, idx: number) => (
                  <div
                    key={stat.id}
                    className={`flex flex-col items-center text-center px-2 ${
                      idx !== 0 ? "sm:border-l sm:border-[#e2e8de]" : ""
                    }`}
                  >
                    <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#edf5ee]">
                      {getStatIcon(stat.icon)}
                    </div>
                    <div className="text-xl font-black leading-none tracking-tight text-[#1c7742] sm:text-2xl">
                      {stat.value}
                    </div>
                    <div className="mt-1.5 text-[13px] font-bold text-[#2f3d36]">
                      {stat.label}
                    </div>
                    <div className="mt-1 text-[12px] leading-4 text-[#666f68] ">
                      {stat.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Showcase Column */}
            <div className="relative mx-auto w-full max-w-[480px]">
              <div className="pointer-events-none absolute -right-2 -top-4 z-20 h-28 w-28 sm:-right-4 sm:-top-6 sm:h-36 sm:w-36">
                <svg
                  viewBox="0 0 100 100"
                  fill="none"
                  className="h-full w-full"
                >
                  <path
                    d="M 10 70 C 30 70, 45 35, 25 30 C 5 25, 20 60, 60 40 C 70 35, 75 22, 82 12"
                    stroke="#2e7d32"
                    strokeWidth="1.5"
                    strokeDasharray="2.5 3.5"
                    fill="none"
                  />
                  <g transform="translate(78, 4) rotate(15) scale(0.75)">
                    <path
                      d="M 0 12 L 18 0 L 10 18 L 7 11 Z M 18 0 L 7 11"
                      stroke="#2e7d32"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </g>
                </svg>
              </div>

              <div className="relative aspect-[1/0.85] w-full">
                <div
                  className="relative h-full w-full"
                  style={{
                    maskImage: "url(#brush-stroke-mask)",
                    WebkitMaskImage: "url(#brush-stroke-mask)",
                  }}
                >
                  <Image
                    src={impactData.showcase.mainImage}
                    alt="Main showcase"
                    fill
                    priority
                    className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                </div>
              </div>

              {/* Bottom Overlapping Section */}
              <div className="relative z-10 -mt-16 sm:-mt-20">
                <div className="relative z-20 -mb-10 flex items-center justify-center gap-2 px-2 sm:-mb-12 sm:gap-3">
                  {impactData.showcase.secondaryImages
                    .slice(0, 3)
                    .map((imgSrc: any, index: any) => (
                      <div
                        key={index}
                        className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border-4 border-white bg-white shadow-md sm:h-24 sm:w-24 sm:border-[5px]"
                      >
                        <Image
                          src={imgSrc}
                          alt={`Thumbnail ${index + 1}`}
                          fill
                          className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                      </div>
                    ))}
                </div>

                {/* Bottom Dark Green Card */}
                <div className="relative overflow-hidden rounded-[2rem] bg-[#143d18] px-6 pb-6 pt-14 text-white shadow-2xl sm:rounded-[2.5rem] sm:px-8 sm:pb-8 sm:pt-16">
                  <div className="flex flex-col items-start gap-4 pt-2 sm:flex-row sm:items-center sm:gap-6">
                    <div className="hidden shrink-0 grid-cols-5 gap-1.5 opacity-40 sm:grid">
                      {[...Array(10)].map((_, i) => (
                        <div
                          key={i}
                          className="h-1.5 w-1.5 rounded-full bg-emerald-200"
                        />
                      ))}
                    </div>

                    <div className="flex items-center gap-3.5 sm:gap-4">
                      <div className="shrink-0">
                        <svg
                          className="h-9 w-9 text-[#8ce280] sm:h-11 sm:w-11"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                          <path d="M7 11.5c1 1.5 3 2.5 5 2.5s4-1 5-2.5" />
                        </svg>
                      </div>

                      <div>
                        <h3 className="text-base font-bold text-white sm:text-lg">
                          {impactData.showcase.quote.title}
                        </h3>
                        <p className="mt-1 text-xs leading-relaxed text-emerald-100/80">
                          {impactData.showcase.quote.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
