import { site, SectionProps, NGOaboutStorySectionData } from "@/app/data";
import Image from "next/image";
import { Sprout, HandHeart } from "lucide-react";



export default function AboutSection({ data, className }: SectionProps<NGOaboutStorySectionData> = {}) {
  const storyData = data || site.aboutstorysection;

  if (!storyData) return null;

  return (
    <section className="mt-6 sm:mt-8 md:mt-10 lg:mt-14 overflow-hidden pb-8 sm:pb-12">
      <div className="mx-auto max-w-[1350px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12 items-center">
          <div className="relative flex justify-center lg:justify-start lg:col-span-5 pb-6 sm:pb-8 lg:pb-0">
            <div className="absolute top-6 sm:top-9 -right-2 sm:-right-6 md:-right-8 lg:-right-10 z-0 grid grid-cols-4 gap-1.5 sm:gap-2 opacity-35 hidden sm:grid">
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#8ca891]"
                />
              ))}
            </div>

            <div className="absolute -left-4 sm:-left-6 top-1/2 -translate-y-1/2 z-20 hidden md:block text-[#2c7a3f]">
              <Sprout className="w-5 h-5 sm:w-6 sm:h-6 -rotate-45 stroke-[2]" />
            </div>

            <div className="absolute -bottom-4 sm:-bottom-6 left-4 sm:left-8 w-44 sm:w-60 h-24 sm:h-32 bg-[#edf4ee] rounded-[1.5rem] sm:rounded-[2rem] -z-10 hidden sm:block" />

            <div className="absolute -bottom-8 sm:-bottom-10 -left-4 sm:-left-6 z-10 hidden sm:block">
              <svg
                className="w-16 h-16 sm:w-24 sm:h-24 text-[#2c7a3f] opacity-85"
                viewBox="0 0 100 100"
                fill="none"
              >
                <path
                  d="M10,80 Q30,10 80,60"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeDasharray="4 4"
                />
                <path
                  d="M78,58 Q85,55 82,65 Q75,68 78,58 Z"
                  fill="currentColor"
                />
              </svg>
            </div>

            <div className="relative z-10">
              <div className="relative mt-1.5 md:mt-0 w-[280px] h-[330px] xs:w-[320px] xs:h-[360px] sm:w-[420px] sm:h-[460px] md:w-[440px] md:h-[480px] lg:w-[380px] lg:h-[420px] xl:w-[460px] xl:h-[490px] rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-xs">
                <Image
                  src={storyData.images.main}
                  alt="Smiling child - Our Story"
                  fill
                  sizes="(max-width: 640px) 320px, (max-width: 1024px) 440px, 460px"
                  className="object-cover object-center"
                  priority
                />

                {/* Top-Left Green Stroke Heart Doodle */}
                <div className="absolute top-3 left-3 sm:top-5 sm:left-5 z-20">
                  <svg
                    className="w-7 h-7 sm:w-9 sm:h-9 text-[#133d20] -rotate-12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                </div>
              </div>

              {/* Overlapping Bottom-Right Circle Image */}
              <div className="absolute -bottom-6 -right-2 xs:-right-4 sm:-bottom-10 sm:-right-6 w-[140px] h-[140px] xs:w-[160px] xs:h-[160px] sm:w-[200px] sm:h-[200px] lg:w-[180px] lg:h-[180px] xl:w-[210px] xl:h-[210px] rounded-full overflow-hidden border-[4px] sm:border-[5px] border-white shadow-lg z-20">
                <Image
                  src={storyData.images.circle}
                  alt="Children sharing meals"
                  fill
                  sizes="(max-width: 640px) 160px, 210px"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-2">
                <Sprout className="w-4 h-4 sm:w-5 sm:h-5 text-[#2c7a3f] stroke-[2]" />
                <span className="text-xs sm:text-sm font-extrabold text-[#0d3319] tracking-widest uppercase font-sans">
                  {storyData.badge}
                </span>
              </div>
              <div className="w-10 sm:w-12 h-[2.5px] bg-[#2c7a3f] rounded-full mt-1 sm:mt-1.5 ml-0.5" />
            </div>

            <h2 className="mt-3 sm:mt-4 text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0d3319] font-serif leading-[1.2] sm:leading-[1.18] tracking-tight max-w-xl">
              {storyData.heading}
            </h2>

            <div className="mt-4 sm:mt-6 flex items-center gap-3 sm:gap-4">
              <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-[#e2efe4] flex items-center justify-center text-[#0d3319] shrink-0">
                <HandHeart className="w-5 h-5 sm:w-7 sm:h-7 text-[#2c7a3f] stroke-[1.8]" />
              </div>
              <div className="flex flex-col text-[#0d3319] font-bold text-sm sm:text-base md:text-lg leading-snug font-sans">
                <span>{storyData.highlight.title}</span>
                <span>{storyData.highlight.subtitle}</span>
              </div>
            </div>

            <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-4 text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed font-sans max-w-xl">
              {storyData.paragraphs.map((paragraph: any, index: any) => (
                <p key={index} className="text-left sm:text-justify">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
