import { site, SectionProps, NGOhomeCtaData } from "@/app/data";
import Link from "next/link";
import { HandHeart, Heart, Users, ArrowRight } from "lucide-react";

export default function HomeCta({ data, className }: SectionProps<NGOhomeCtaData> = {}) {
  const homeCta = data || site.homecta;

  const getButtonIcon = (iconName: string) => {
    switch (iconName) {
      case "heart":
        return <Heart className="w-4 h-4 text-white stroke-[2] shrink-0" />;
      case "user":
        return <Users className="w-4 h-4 text-white stroke-[2] shrink-0" />;
      default:
        return null;
    }
  };

  return (
    <section className={`my-6 overflow-hidden ${className || ""}`}>
      <div className="mx-auto max-w-[1350px] px-4 sm:px-6 lg:px-8">
        <div className="relative bg-[#102719] rounded-2xl py-8 sm:py-10 px-6 sm:px-10 lg:px-14 shadow-2xl overflow-hidden">
          {/* Main Layout Container */}
          <div className="relative z-10 mx-4 flex flex-col lg:flex-row items-center justify-between gap-8">
            
      
            <div className="flex shrink-0 justify-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-[#2d7d3e]/50 flex items-center justify-center text-[#2d7d3e] transition-transform duration-300 hover:scale-105 shrink-0 bg-[#2d7d3e]/10">
                <HandHeart className="w-8 h-8 sm:w-10 sm:h-10 text-white stroke-[1.5]" />
              </div>
            </div>

            <div className="flex-1 flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
              
              <h2 className="text-2xl sm:text-3xl lg:text-[1.95rem] font-bold text-white font-serif leading-tight tracking-tight max-w-sm shrink-0">
                {homeCta.heading.replace("Yourself", "")}
                <span className="text-[#2d7d3e]">Yourself</span>
              </h2>

              <div className="hidden md:block w-px h-24 bg-white/20 shrink-0 md:-ml-2 md:mr-1" />

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans max-w-sm">
                {homeCta.description}
              </p>
            </div>

            {/* 3. Right Action Buttons */}
            <div className="shrink-0 flex flex-col sm:flex-row md:flex-col gap-3 w-full max-w-xs sm:max-w-md md:max-w-[240px] mx-auto md:mx-0 lg:ml-auto">
              <Link
                href={homeCta.buttons.donate.href}
                className="w-full flex items-center justify-between bg-[#2d7d3e] text-white text-xs sm:text-sm font-semibold py-3 px-5 rounded-lg hover:bg-[#236632] transition-all font-sans shadow-md group/btn1 active:scale-[0.98]"
              >
                <div className="flex items-center gap-2.5">
                  {getButtonIcon(homeCta.buttons.donate.icon)}
                  <span className="whitespace-nowrap">
                    {homeCta.buttons.donate.label}
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn1:translate-x-1 shrink-0" />
              </Link>

              <Link
                href={homeCta.buttons.volunteer.href}
                className="w-full flex items-center justify-between border border-[#2d7d3e] bg-transparent text-white text-xs sm:text-sm font-semibold py-3 px-5 rounded-lg hover:bg-[#2d7d3e]/10 transition-all font-sans group/btn2 active:scale-[0.98]"
              >
                <div className="flex items-center gap-2.5">
                  {getButtonIcon(homeCta.buttons.volunteer.icon)}
                  <span className="whitespace-nowrap">
                    {homeCta.buttons.volunteer.label}
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn2:translate-x-1 shrink-0" />
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}