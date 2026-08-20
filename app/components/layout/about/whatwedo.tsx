import { site, SectionProps, NGOwhatWeDoSectionData } from "@/app/data";
import Image from "next/image";
import {
  Sprout,
  HandHeart,
  Droplets,
  GraduationCap,
  PlusSquare,
  Users,
  Utensils,
} from "lucide-react";



export default function WhatWeDo({ data, className }: SectionProps<NGOwhatWeDoSectionData> = {}) {
  const whatWeDoData = data || site.whatwedosection;

  if (!whatWeDoData) return null;

  const getItemIcon = (iconName: string) => {
    switch (iconName) {
      case "heart-hand":
        return (
          <HandHeart className="w-5 h-5 sm:w-6 sm:h-6 text-[#2c7a3f] stroke-[1.8]" />
        );
      case "droplets":
        return (
          <Droplets className="w-5 h-5 sm:w-6 sm:h-6 text-[#2c7a3f] stroke-[1.8]" />
        );
      case "graduation":
        return (
          <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-[#2c7a3f] stroke-[1.8]" />
        );
      case "medical":
        return (
          <PlusSquare className="w-5 h-5 sm:w-6 sm:h-6 text-[#2c7a3f] stroke-[1.8]" />
        );
      case "users":
        return (
          <Users className="w-5 h-5 sm:w-6 sm:h-6 text-[#2c7a3f] stroke-[1.8]" />
        );
      case "food":
        return (
          <Utensils className="w-5 h-5 sm:w-6 sm:h-6 text-[#2c7a3f] stroke-[1.8]" />
        );
      default:
        return (
          <HandHeart className="w-5 h-5 sm:w-6 sm:h-6 text-[#2c7a3f] stroke-[1.8]" />
        );
    }
  };

  return (
    <section className="bg-white mt-6 sm:mt-8 md:mt-10 lg:mt-14 overflow-hidden mb-8 sm:mb-10 lg:mb-12">
      <div className="mx-auto max-w-[1350px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-2 xl:gap-4 items-center">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#e2efe4] flex items-center justify-center text-[#2c7a3f] shrink-0">
                  <Sprout className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2]" />
                </div>
                <span className="text-xs sm:text-sm font-extrabold text-[#0d3319] tracking-widest uppercase font-sans">
                  {whatWeDoData.badge}
                </span>
              </div>
              <div className="w-10 sm:w-12 h-[2.5px] bg-[#2c7a3f] rounded-full mt-1.5 ml-0.5" />
            </div>

            <div className="mt-3 sm:mt-4">
              <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0d3319] font-serif leading-[1.2] sm:leading-[1.18] tracking-tight max-w-2xl">
                {whatWeDoData.headingPrefix}
                <span className="text-[#2c7a3f]">
                  {whatWeDoData.headingHighlight}
                </span>
              </h2>
              <div className="w-10 sm:w-12 h-[2.5px] bg-[#2c7a3f] rounded-full mt-2.5 sm:mt-3 ml-0.5" />
            </div>

            <p className="mt-3 sm:mt-4 text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed font-sans max-w-xl">
              {whatWeDoData.description}
            </p>

            <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-0 border-t border-b border-gray-200/80 py-2 sm:py-4 max-w-2xl">
              {whatWeDoData.items.map((item: any, index: any) => {
                const IconComp = getItemIcon(item.icon);
                const isBorderRight = (index + 1) % 3 !== 0;
                const isBorderBottom = index < 3;
                const isMobileBorderBottom =
                  index < whatWeDoData.items.length - 1;

                return (
                  <div
                    key={item.id}
                    className={`flex flex-col items-center text-center p-3.5 sm:p-4 ${
                      isBorderRight ? "sm:border-r sm:border-gray-200/70" : ""
                    } ${
                      isBorderBottom ? "sm:border-b sm:border-gray-200/70" : ""
                    } ${
                      isMobileBorderBottom
                        ? "border-b sm:border-b-0 border-gray-100"
                        : ""
                    }`}
                  >
                    <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-[#e8f2ea] flex items-center justify-center text-[#2c7a3f] mb-2 sm:mb-3 shrink-0">
                      {IconComp}
                    </div>
                    <h3 className="text-xs sm:text-base font-bold text-[#0d3319] font-sans tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-gray-500 font-sans mt-0.5 sm:mt-1 leading-relaxed max-w-[170px]">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center items-center lg:justify-start py-2 sm:py-4">
            <div className="relative w-[290px] h-[410px] xs:w-[320px] xs:h-[450px] sm:w-[500px] sm:h-[620px] lg:w-[520px] lg:h-[640px]">
              <div className="absolute top-0 left-1 sm:left-4 w-[180px] h-[180px] xs:w-[200px] xs:h-[200px] sm:w-[320px] sm:h-[320px] lg:w-[340px] lg:h-[340px] z-10 filter drop-shadow-lg">
                <div
                  className="w-full h-full p-1 sm:p-1.5 bg-white"
                  style={{ borderRadius: "170px 0px 0px 170px" }}
                >
                  <div
                    className="relative w-full h-full overflow-hidden"
                    style={{ borderRadius: "165px 0px 0px 165px" }}
                  >
                    <Image
                      src={whatWeDoData.images.girl}
                      alt="Smiling girl"
                      fill
                      sizes="(max-width: 640px) 200px, (max-width: 1024px) 320px, 340px"
                      className="object-cover object-center"
                      priority
                    />
                  </div>
                </div>
              </div>

              <div className="absolute top-20 right-0 xs:top-24 sm:top-36 sm:right-0 w-[130px] h-[130px] xs:w-[150px] xs:h-[150px] sm:w-[240px] sm:h-[240px] lg:w-[250px] lg:h-[250px] z-20 filter drop-shadow-xl">
                <div className="w-full h-full p-1 sm:p-1.5 bg-white rounded-full">
                  <div className="relative w-full h-full overflow-hidden rounded-full">
                    <Image
                      src={whatWeDoData.images.education}
                      alt="Boy studying"
                      fill
                      sizes="(max-width: 640px) 150px, (max-width: 1024px) 240px, 250px"
                      className="object-cover object-center"
                    />
                  </div>
                </div>
              </div>

              <div className="absolute top-36 left-0 xs:top-40 sm:top-60 sm:left-0 w-[140px] h-[140px] xs:w-[160px] xs:h-[160px] sm:w-[250px] sm:h-[250px] lg:w-[260px] lg:h-[260px] z-20 filter drop-shadow-xl">
                <div
                  className="w-full h-full p-1 sm:p-1.5 bg-white"
                  style={{ borderRadius: "130px 130px 10px 130px" }}
                >
                  <div
                    className="relative w-full h-full overflow-hidden"
                    style={{ borderRadius: "125px 125px 5px 125px" }}
                  >
                    <Image
                      src={whatWeDoData.images.food}
                      alt="Food support"
                      fill
                      sizes="(max-width: 640px) 160px, (max-width: 1024px) 250px, 260px"
                      className="object-cover object-center"
                    />
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 right-1 sm:right-4 w-[170px] h-[170px] xs:w-[190px] xs:h-[190px] sm:w-[300px] sm:h-[300px] lg:w-[320px] lg:h-[320px] z-10 filter drop-shadow-xl">
                <div
                  className="w-full h-full p-1 sm:p-1.5 bg-white"
                  style={{ borderRadius: "10px 160px 160px 160px" }}
                >
                  <div
                    className="relative w-full h-full overflow-hidden"
                    style={{ borderRadius: "5px 155px 155px 155px" }}
                  >
                    <Image
                      src={whatWeDoData.images.planting}
                      alt="Planting sapling"
                      fill
                      sizes="(max-width: 640px) 190px, (max-width: 1024px) 300px, 320px"
                      className="object-cover object-center"
                    />
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
