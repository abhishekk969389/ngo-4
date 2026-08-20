import Image from "next/image";
import Link from "next/link";
import {
  Sprout,
  MapPin,
  Calendar,
  Users,
  Handshake,
  GraduationCap,
  ArrowLeft,
  BookOpen,
  Lightbulb,
} from "lucide-react";
import type { PortfolioDetailHeaderData } from "@/app/data";

const iconMap = {
  leaf: Sprout,
  mapPin: MapPin,
  calendar: Calendar,
  users: Users,
  handshake: Handshake,
  category: GraduationCap,
  lightbulb: Lightbulb,
  default: BookOpen,
};

interface PortfolioDetailHeaderProps {
  data: PortfolioDetailHeaderData;
}

export default function PortfolioDetailHeader({
  data,
}: PortfolioDetailHeaderProps) {
  if (!data) return null;

  const getMetaIcon = (iconName: string) => {
    const IconComponent =
      iconMap[iconName as keyof typeof iconMap] || iconMap.default;
    return (
      <IconComponent
        className="w-5 h-5 text-[#2c7a3f] shrink-0 stroke-[1.8]"
        aria-hidden="true"
      />
    );
  };

  return (
    <section className="font-sans px-4 sm:px-6 lg:px-8 max-w-[1350px] mx-auto mt-6 sm:mt-8 md:mt-10 lg:mt-14 mb-10 sm:mb-14 relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        {/* Left Column - Header Details */}
        <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center space-y-4 sm:space-y-5 relative z-10">
          {/* Badge Row with Green Underline & Leaf Doodle */}
          <div className="flex items-center gap-2">
            <span className="text-xs sm:text-sm font-extrabold text-[#2c7a3f] tracking-wider uppercase font-sans relative pb-1">
              {data.badge || "OUR PORTFOLIO"}
              <span className="absolute bottom-0 left-0 w-8 h-[2.5px] bg-[#2c7a3f] rounded-full" />
            </span>
            <Sprout className="w-5 h-5 text-[#2c7a3f] fill-current shrink-0 -rotate-12 ml-0.5" />
          </div>

          {/* Heading & Location */}
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-[#0d3319] tracking-tight leading-[1.18]">
              {data.title}
            </h1>
            {data.location && (
              <div className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#2c7a3f] font-sans pt-0.5">
                <MapPin className="w-4 h-4 text-[#2c7a3f] fill-current shrink-0" />
                <span>{data.location}</span>
              </div>
            )}
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed font-sans max-w-xl">
            {data.description}
          </p>

          {/* Meta Info 4-Item Horizontal Row */}
          {data.metaInfo && data.metaInfo.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-0 border-t border-b border-gray-100 sm:border-t-0 sm:border-b-0 py-3 sm:py-0 mt-4 sm:mt-6 pt-2">
              {data.metaInfo.map((item, index) => (
                <div
                  key={item.id || index}
                  className={`flex items-center gap-2.5 ${index > 0 ? "sm:pl-3 lg:pl-4" : ""
                    } ${index < data.metaInfo.length - 1
                      ? "sm:border-r sm:border-gray-200/80"
                      : ""
                    }`}
                >
                  <div className="w-10 h-10 rounded-full bg-[#e6f4ea] text-[#2c7a3f] flex items-center justify-center shrink-0 shadow-2xs">
                    {getMetaIcon(item.icon)}
                  </div>
                  <div className="min-w-0 flex flex-col justify-center">
                    <span className="text-[10px] sm:text-[11px] font-bold text-gray-500 font-sans leading-tight">
                      {item.label}
                    </span>
                    <span className="text-xs sm:text-[13px] font-bold text-[#0d3319] font-sans truncate leading-tight mt-0.5">
                      {item.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Back to Portfolio Button */}
          <div className="pt-2">
            <Link
              href={data.backButtonHref || "/portfolio"}
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#0d3319] hover:bg-[#1f5e2e] text-white text-xs sm:text-sm font-bold transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              <ArrowLeft className="w-4 h-4 stroke-[2.5]" />
              <span>{data.backButtonLabel || "Back to Portfolio"}</span>
            </Link>
          </div>
        </div>

        {/* Right Column - Main Image with Floating Overlapping Quote Card */}
        <div className="relative lg:col-span-6 xl:col-span-6 flex justify-center lg:justify-end mt-6 lg:mt-0 z-10">
          {/* Faint Decorative Background Watermark Leaf (Middle) */}
          <div className="absolute -left-10 top-1/3 pointer-events-none opacity-20 hidden xl:block text-[#2c7a3f] z-0">
            <svg className="w-36 h-36" viewBox="0 0 100 100" fill="currentColor">
              <path d="M50 10 C65 30 85 45 85 70 C85 85 70 95 50 90 C30 85 15 70 15 50 C15 30 35 10 50 10 Z" />
            </svg>
          </div>

          <div className="relative w-full max-w-[580px] pb-10 sm:pb-14">
            {/* Hero Main Image Box */}
            <div className="relative w-full aspect-[4/3] sm:aspect-[1.3/1] rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-xl border border-gray-100 bg-gray-100">
              <Image
                src={data.heroImage || "/about_main.png"}
                alt={data.heroAlt || data.title}
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 1024px) 100vw, 580px"
              />
            </div>

            {/* Overlapping Floating Quote Card (Bottom Left) */}
            {data.heroQuote && (
              <div className="absolute -bottom-4 left-2 sm:-bottom-6 sm:left-4 z-20 w-[280px] xs:w-[320px] sm:w-[390px] p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#f7f9f6] shadow-xl border border-[#e2ebd9] flex flex-col justify-between">
                <div className="flex items-start gap-2.5">
                  <div className="text-4xl sm:text-5xl font-serif font-black text-[#88cb39] leading-none shrink-0 -mt-1 pl-1 select-none">
                    “
                  </div>
                  <p className="text-xs sm:text-[13.5px] text-gray-700 font-sans italic leading-relaxed pt-0.5 font-medium">
                    {data.heroQuote.quote}
                  </p>
                </div>
                <p className="mt-3 text-xs sm:text-sm font-bold text-[#2c7a3f] font-sans pl-7">
                  &mdash; {data.heroQuote.author}
                  {data.heroQuote.role ? `, ${data.heroQuote.role}` : ""}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

