import Image from "next/image";
import Link from "next/link";
import { Heart, HandHeart, Users, Sprout, ArrowRight } from "lucide-react";
import ngoDataJson from "@/app/data/ngoData_structured.json";
import type { NgoData } from "@/app/type/ngo";
import { IconQuote } from "@tabler/icons-react";

const data = new Proxy(ngoDataJson as any, {
  get(target, prop: string) {
    if (prop === "$typeof") return undefined;
    return target.NGO?.sections?.[prop]?.variants?.["Legacy_" + prop];
  },
});

export default function About() {
  const { aboutSection } = data;

  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case "heart-hand":
        return <HandHeart className="w-4 h-4 text-[#2c7a3f]" />;
      case "heart-sprout":
        return <Heart className="w-4 h-4 text-[#2c7a3f] fill-[#2c7a3f]" />;
      case "users":
        return <Users className="w-4 h-4 text-[#2c7a3f]" />;
      case "sprout":
        return <Sprout className="w-4 h-4 text-[#2c7a3f]" />;
      case "heart":
        return <Heart className="w-4 h-4 text-[#2c7a3f]" />;
      case "hands":
        return <HandHeart className="w-4 h-4 text-[#2c7a3f]" />;
      default:
        return <Sprout className="w-4 h-4 text-[#2c7a3f]" />;
    }
  };

  return (
    <section className="bg-white overflow-hidden mt-8 py-4">
      <div className="mx-auto max-w-[1350px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-12 items-center">
          <div className="relative flex justify-center lg:justify-start lg:col-span-5">
            <div className="absolute top-4 left-4 z-10 text-[#2c7a3f]/70">
              <Heart className="w-10 h-10 sm:w-12 sm:h-12 stroke-[1.5] -rotate-12 text-[#2c7a3f]" />
            </div>

            <div className="relative inline-block">
              <div className="relative w-[290px] h-[360px] sm:w-[420px] sm:h-[500px] lg:w-[370px] lg:h-[450px] xl:w-[460px] xl:h-[540px] rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-lg">
                <Image
                  src={aboutSection.images.main}
                  alt="Main smiling child"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="absolute -bottom-5 -right-3 sm:-bottom-5 sm:-right-5 lg:-bottom-4 lg:-right-4 xl:-bottom-6 xl:-right-6 w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] lg:w-[160px] lg:h-[160px] xl:w-[210px] xl:h-[210px] rounded-full overflow-hidden border-4 sm:border-[5px] border-white shadow-xl z-20">
                <Image
                  src={aboutSection.images.circle}
                  alt="Children eating meals"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 mt-8 lg:mt-0 flex flex-col justify-center">
            <div className="flex items-center gap-2 text-base sm:text-lg font-bold text-[#2c7a3f]">
              <HandHeart className="w-8 h-8 sm:w-10 sm:h-10 text-[#2c7a3f]" />
              <span className="font-serif italic tracking-wide">
                {aboutSection.tagline}
              </span>
            </div>

            <h2 className="mt-2 text-2xl sm:text-4xl lg:text-3xl xl:text-5xl font-black text-[#0c4d1e] font-serif leading-tight max-w-[600px]">
              {aboutSection.heading}
            </h2>

            <p className="mt-3 text-sm sm:text-base lg:text-sm xl:text-base text-gray-600 leading-relaxed font-sans">
              {aboutSection.description}
            </p>

            <div className="mt-5 flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white border-l-4 border-[#2c7a3f] shadow-sm">
              <IconQuote className="w-7 h-7 sm:w-8 sm:h-8 text-[#2c7a3f] flex-shrink-0 transform rotate-180 fill-[#e8f5e9]/60" />
              <p className="text-xs sm:text-sm xl:text-base text-gray-700 italic font-serif leading-relaxed">
                &quot;{aboutSection.quote}&quot;
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5">
              {aboutSection.features.map((feature: any) => {
                const IconComponent = getFeatureIcon(feature.icon);
                return (
                  <div key={feature.id} className="flex items-center gap-2.5">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#e8f5e9] flex items-center justify-center text-[#054918] flex-shrink-0">
                      {IconComponent}
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-gray-800 font-sans">
                      {feature.text}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 sm:mt-8">
              <Link
                href={aboutSection.button.href}
                className="inline-flex items-center gap-2 rounded-[18px] bg-[#2b641a] px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-[#0c4d1e] transition-all font-sans"
              >
                <span>{aboutSection.button.label}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
