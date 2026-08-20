import { site, SectionProps, NGOvisionPageSectionData } from "@/app/data";
import Image from "next/image";
import {
  Globe,
  BookOpen,
  HandHeart,
  Mountain,
  Heart,
  Eye,
  Sprout,
} from "lucide-react";



export default function OurVision({ data, className }: SectionProps<NGOvisionPageSectionData> = {}) {
  const visionData = data || site.visionpagesection;

  if (!visionData) return null;

  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case "inclusive":
        return (
          <Globe className="w-6 h-6 lg:w-7 lg:h-7 text-[#1f5e2e] stroke-[1.8]" />
        );
      case "opportunities":
        return (
          <BookOpen className="w-6 h-6 lg:w-7 lg:h-7 text-[#1f5e2e] stroke-[1.8]" />
        );
      case "healthy":
        return (
          <HandHeart className="w-6 h-6 lg:w-7 lg:h-7 text-[#1f5e2e] stroke-[1.8]" />
        );
      case "stronger":
        return (
          <Mountain className="w-6 h-6 lg:w-7 lg:h-7 text-[#1f5e2e] stroke-[1.8]" />
        );
      default:
        return (
          <Globe className="w-6 h-6 lg:w-7 lg:h-7 text-[#1f5e2e] stroke-[1.8]" />
        );
    }
  };

  return (
    <section className="mt-6 sm:mt-8 md:mt-10 lg:mt-14 overflow-hidden">
      <div className="mx-auto max-w-[1350px] px-4 sm:px-6 lg:px-8 mb-10 sm:mb-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8 xl:gap-12 items-center">
          {/* Left Column: Content & 4 Pillars Grid & Quote Box */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Badge Pill Row */}
            <div className="flex items-center gap-2 mb-2">
              <div className="px-1 py-1 inline-flex items-center justify-center">
                <span className="text-xs sm:text-sm font-extrabold text-[#2c7a3f] tracking-wider uppercase font-sans relative pb-0.5">
                  {visionData.badge}
                  <span className="absolute bottom-0 left-0 w-8 lg:w-10 h-[2.5px] bg-[#2c7a3f] rounded-full" />
                </span>
              </div>
            </div>

            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold font-serif leading-[1.2] sm:leading-[1.18] tracking-tight mt-1">
              <div className="text-[#0d3319]">{visionData.heading.line1}</div>
              <div className="inline-block relative text-[#2c7a3f] font-serif mt-0.5">
                {visionData.heading.line2}

                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-[#2c7a3f]/60"
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
              </div>
            </h2>

            <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed font-sans mt-4 max-w-2xl">
              {visionData.description}
            </p>

            {/* 4 Pillars Grid (Responsive 1/2/4 Columns) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-0 mt-6 sm:mt-8 pt-2">
              {visionData.pillars.map((pillar: any, index: any) => (
                <div
                  key={pillar.id}
                  className={`lg:border-r lg:border-gray-200/80 lg:last:border-r-0 lg:px-3 xl:px-4 first:lg:pl-0 last:lg:pr-0 flex flex-col items-center text-center ${
                    index < 3
                      ? "pb-4 sm:pb-0 border-b sm:border-b-0 border-gray-100"
                      : ""
                  }`}
                >
                  <div className="w-12 h-12 sm:w-13 sm:h-13 lg:w-15 lg:h-15 rounded-full bg-[#e6f4ea] text-[#1F5E2E] flex items-center justify-center mb-2.5 sm:mb-3 shadow-2xs shrink-0">
                    {getPillarIcon(pillar.icon)}
                  </div>

                  <h3 className="font-sans font-bold text-sm lg:text-base text-[#1F5E2E] mb-1 leading-snug">
                    {pillar.title}
                  </h3>

                  <p className="text-[11px] sm:text-xs lg:text-sm text-gray-500 font-sans leading-relaxed max-w-[180px]">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 sm:mt-8 p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-[#edf4ee] border border-[#e0eee3] flex items-center justify-between gap-3 sm:gap-4 max-w-2xl">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black text-[#1f5e2e] shrink-0 leading-none pl-1">
                  “
                </div>
                <div className="h-8 sm:h-10 lg:h-12 w-[1.5px] bg-[#1f5e2e]/20 shrink-0" />

                <p className="text-xs sm:text-sm lg:text-base text-gray-700 font-sans leading-relaxed">
                  <span>{visionData.quote.prefix}</span>
                  <span className="font-serif italic font-bold text-[#1f5e2e]">
                    {visionData.quote.italicText}
                  </span>
                </p>
              </div>

              {/* Heart Doodle Icon on Right */}
              <div className="relative shrink-0 pr-1">
                <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-[#1f5e2e] stroke-[1.8] fill-none -rotate-6" />
              </div>
            </div>
          </div>

          {/* Right Column: Circular Main Image + Outer Ring + Vision Card */}
          <div className="relative lg:col-span-5 flex justify-center lg:justify-end mt-4 lg:mt-0">
            {/* Top-Right Decorative Polka Dots Grid */}
            <div className="absolute right-1 sm:right-4 top-0 z-0 grid grid-cols-4 gap-2 opacity-35 hidden sm:grid">
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className="w-2.5 h-2.5 rounded-full bg-[#8ca891]"
                />
              ))}
            </div>

            <div className="relative w-full max-w-[320px] xs:max-w-[360px] sm:max-w-[440px] lg:max-w-[460px] pb-12 sm:pb-16">
              <div className="relative w-full aspect-square max-w-[300px] xs:max-w-[340px] sm:max-w-[410px] lg:max-w-[430px] mx-auto rounded-full border-[2px] border-[#1f5e2e]/40 p-2 sm:p-2.5">
                {/* Top-Left Small Dark Green Leaf Badge */}
                <div className="absolute top-2 left-2 sm:top-5 sm:left-5 z-20 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-[#0a7c20] flex items-center justify-center text-white shadow-md">
                  <Sprout className="w-4 h-4 sm:w-6 sm:h-6 stroke-[2]" />
                </div>

                <div className="relative w-full h-full rounded-full overflow-hidden shadow-lg bg-gray-100">
                  <Image
                    src={visionData.images.main}
                    alt="Smiling children - Our Vision"
                    fill
                    sizes="(max-width: 640px) 300px, (max-width: 1024px) 410px, 430px"
                    className="object-cover object-center"
                    priority
                  />
                </div>
              </div>

              {/* Overlapping Dark Green Vision Circle Card (Bottom Right) */}
              <div className="absolute -bottom-6 -right-1 sm:-bottom-12 lg:-bottom-14 sm:-right-2 z-20 w-[200px] h-[200px] xs:w-[220px] xs:h-[220px] sm:w-[270px] sm:h-[270px] lg:w-[280px] lg:h-[280px] rounded-full bg-[#0a7c20] text-white p-4 xs:p-5 sm:p-7 lg:p-8 shadow-2xl flex flex-col items-center justify-center text-center">
                <Eye className="w-6 h-6 sm:w-8 sm:h-8 text-[#a3d9b1] mb-1 stroke-[1.8]" />

                <h3 className="font-serif italic font-bold text-lg sm:text-2xl lg:text-3xl text-white relative pb-1 mb-1.5 sm:mb-2">
                  {visionData.visionCard.title}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-white/40 rounded-full" />
                </h3>

                <p className="text-[10px] xs:text-[11px] sm:text-xs lg:text-sm text-gray-200 font-sans leading-relaxed max-w-[170px] sm:max-w-[210px] lg:max-w-[220px]">
                  {visionData.visionCard.description}
                </p>

                {/* Leaf Flourish Decor Bottom Right */}
                <div className="absolute bottom-2.5 right-3 sm:bottom-4 sm:right-5 text-white/30 pointer-events-none">
                  <svg
                    className="w-5 h-5 sm:w-7 sm:h-7"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17 8C8 10 59 16.5 4.5 20c.5-1.5 1.5-3 3-4 2-1.5 4-1.5 6.5-1.5 3 0 5-1 6-2.5z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
