import { site, SectionProps, NGOhomeCtaData } from "@/app/data";
import Link from "next/link";
import { HandHeart, Heart, Users, ArrowRight } from "lucide-react";

export default function HomeCta({ data, className }: SectionProps<NGOhomeCtaData> = {}) {
  const homeCta = data || site.homecta;

  const getButtonIcon = (iconName: string, isOutline?: boolean) => {
    switch (iconName) {
      case "heart":
        return <Heart className="w-5 h-5 sm:w-[22px] sm:h-[22px] text-white stroke-[1.8] shrink-0" />;
      case "user":
        return (
          <Users
            className={`w-5 h-5 sm:w-[22px] sm:h-[22px] ${isOutline ? "text-[#a3c737]" : "text-white"
              } stroke-[1.8] shrink-0`}
          />
        );
      default:
        return null;
    }
  };

  return (
    <section className={`my-6 overflow-hidden ${className || ""}`}>
      <div className="mx-auto max-w-[1350px] px-4 sm:px-6 lg:px-8">
        <div className="relative bg-[#102719] rounded-2xl py-8 sm:py-10 px-6 sm:px-8 lg:px-14 shadow-2xl overflow-hidden">

          {/* Main Layout Container */}
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:mx-4">

            {/* 1. Left Icon */}
            <div className="flex shrink-0 justify-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-[#2d7d3e]/50 flex items-center justify-center text-[#2d7d3e] transition-transform duration-300 hover:scale-105 shrink-0 bg-[#2d7d3e]/10">
                <HandHeart className="w-8 h-8 sm:w-10 sm:h-10 text-white stroke-[1.5]" />
              </div>
            </div>

            {/* 2. Center: Heading + Divider + Description */}
            <div className="flex-1 flex flex-col lg:flex-row items-center justify-center gap-4 text-center lg:text-left w-full lg:w-auto">

              {/* Heading */}
              <h2 className="text-2xl sm:text-3xl lg:text-[1.95rem] font-bold text-white font-serif leading-tight tracking-tight max-w-sm shrink-0">
                {(() => {
                  const parts = (homeCta.heading || "").trim().split(" ");
                  if (parts.length < 2) return homeCta.heading;
                  const lastWord = parts.pop();
                  return (
                    <>
                      {parts.join(" ")}{" "}
                      <span className="text-[#2d7d3e]">{lastWord}</span>
                    </>
                  );
                })()}
              </h2>

              {/* Vertical Divider Line (Sirf Large Screens par visible rahega) */}
              <div className="hidden lg:block w-px h-24 bg-white/20 shrink-0 lg:-ml-2 lg:mr-1" />

              {/* Description */}
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans max-w-md lg:max-w-sm">
                {homeCta.description}
              </p>
            </div>

            {/* 3. Right Action Buttons */}
            <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3.5 w-full sm:w-auto sm:min-w-[240px] lg:w-[245px] justify-center lg:ml-auto">
              <Link
                href={homeCta.buttons.donate.href}
                className="w-full h-[50px] flex items-center justify-between bg-[#427926] hover:bg-[#396920] text-white text-sm sm:text-[15px] font-medium px-4 sm:px-5 rounded-[14px] transition-all font-sans shadow-md group/btn1 active:scale-[0.98]"
              >
                <div className="flex items-center gap-3">
                  {getButtonIcon(homeCta.buttons.donate.icon, false)}
                  <span className="whitespace-nowrap font-medium tracking-tight">
                    {homeCta.buttons.donate.label}
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-white transition-transform group-hover/btn1:translate-x-1 shrink-0" />
              </Link>

              <Link
                href={homeCta.buttons.volunteer.href}
                className="w-full h-[50px] flex items-center justify-between border border-[#a3c737] bg-transparent text-white text-sm sm:text-[15px] font-medium px-4 sm:px-5 rounded-[14px] hover:bg-[#a3c737]/10 transition-all font-sans group/btn2 active:scale-[0.98]"
              >
                <div className="flex items-center gap-3">
                  {getButtonIcon(homeCta.buttons.volunteer.icon, true)}
                  <span className="whitespace-nowrap font-medium tracking-tight">
                    {homeCta.buttons.volunteer.label}
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-[#a3c737] transition-transform group-hover/btn2:translate-x-1 shrink-0" />
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}