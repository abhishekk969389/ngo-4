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
    <section className="overflow-hidden bg-white">
      <div className="mx-auto max-w-[1350px] px-4 sm:px-6 lg:px-8 mt-6 sm:mt-8 md:mt-10 lg:mt-14">
        <div className="rounded-[2rem] mb-6">
          <div className="grid items-center gap-6 sm:gap-8 lg:grid-cols-[1fr_0.9fr] lg:gap-10">
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
                    className={`flex flex-col items-center text-center px-2 ${idx !== 0 ? "sm:border-l sm:border-[#e2e8de]" : ""
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
            <div className="relative mx-auto w-full max-w-[580px] flex items-center justify-center mt-1 sm:mt-0">
              <div className="relative w-full h-[270px] xs:h-[310px] sm:h-[380px] md:h-[450px] lg:h-[480px]">
                <Image
                  src={impactData?.showcase?.mainImage || "/ourimpact.svg"}
                  alt="Our Impact"
                  fill
                  priority
                  className="object-contain scale-125 xs:scale-125 sm:scale-115 md:scale-120 lg:scale-125"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
