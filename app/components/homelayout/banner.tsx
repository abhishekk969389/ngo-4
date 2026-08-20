import { site, SectionProps, NGObannerData } from "@/app/data";
import Image from "next/image";
import Link from "next/link";
import { Heart, Users } from "lucide-react";

export default function Banner({ data, className }: SectionProps<NGObannerData> = {}) {
  const banner = data || site.banner;

  const getStatIcon = (iconName: string) => {
    switch (iconName) {
      case "smiley":
        return (
          <div className="w-10 h-10 flex items-center justify-center">
            <svg
              className="w-9 h-9 text-[#2d6939]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M8 14s1.5 2.5 4 2.5 4-2.5 4-2.5" />
              <circle cx="9" cy="9" r="1" fill="currentColor" />
              <circle cx="15" cy="9" r="1" fill="currentColor" />
            </svg>
          </div>
        );
      case "heart":
        return (
          <div className="w-10 h-10 flex items-center justify-center">
            <svg className="w-9 h-9 fill-[#2d6939]" viewBox="0 0 24 24">
              <path d="M12 3.5c-1.8-1.8-4.7-1.8-6.5 0-1.8 1.8-1.8 4.7 0 6.5l6.5 6.5 6.5-6.5c1.8-1.8 1.8-4.7 0-6.5-1.8-1.8-4.7-1.8-6.5 0z" />
              <path
                d="M4 14.5c1.2 2 3.8 4 8 4s6.8-2 8-4c-1.5 2.5-4.5 4.5-8 4.5s-6.5-2-8-4.5z"
                opacity="0.9"
              />
            </svg>
          </div>
        );
      case "projects":
        return (
          <div className="w-10 h-10 flex items-center justify-center">
            <svg className="w-9 h-9 fill-[#2d6939]" viewBox="0 0 24 24">
              <circle cx="12" cy="6" r="2.5" />
              <path d="M12 9.5c-2.7 0-5 1.5-5 3.5v3h10v-3c0-2-2.3-3.5-5-3.5z" />
              <circle cx="6" cy="8" r="2" />
              <path d="M6 11c-1.8 0-3.3 1.2-3.3 2.7v2.3h3v-2.2c0-.9.5-1.7 1.3-2.1-.3-.4-.6-.6-1-.6z" />
              <circle cx="18" cy="8" r="2" />
              <path d="M18 11c-.4 0-.7.2-1 .6.8.4 1.3 1.2 1.3 2.1v2.2h3v-2.3c0-1.5-1.5-2.7-3.3-2.7z" />
            </svg>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative bg-[#f7f8f2] overflow-hidden">
      <div className="relative h-80 sm:h-[380px] mx-auto max-w-[1350px] lg:hidden">
        <Image
          src={banner.backgroundImage}
          alt="People planting sapling"
          fill
          className="object-cover object-center"
          priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#f7f8f2] to-transparent pointer-events-none" />
      </div>

      {/* Desktop background image - Fully visible with soft left edge fade */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[65%] xl:w-[60%] hidden lg:block">
        <div className="relative h-full w-full">
          <Image
            src={banner.backgroundImage}
            alt="People planting sapling"
            fill
            className="object-cover object-center"
            priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />

          <div className="absolute inset-y-0 left-0 w-28 lg:w-35 xl:w-50 bg-gradient-to-r from-[#f7f8f2] via-[#f7f8f2]/60 to-transparent pointer-events-none" />
        </div>
      </div>

      <div className="relative mx-auto max-w-[1350px] px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 xl:col-span-6 flex flex-col justify-center z-10">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider text-[#256131] uppercase font-sans">
              {banner.taglineIcon === "three-leaves" ? (
                <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.5 15.5C7 15.5 3.5 11.5 3.5 6.5C3.5 6.5 6.5 6.5 9 9C11.5 11.5 11.5 15.5 11.5 15.5Z" fill="#9CCC65"/>
                  <path d="M12.5 15.5C17 15.5 20.5 11.5 20.5 6.5C20.5 6.5 17.5 6.5 15 9C12.5 11.5 12.5 15.5 12.5 15.5Z" fill="#7CB342"/>
                  <path d="M12 13C9 13 8 8.5 8 4.5C8 4.5 12 3.5 14 5.5C16 7.5 15.5 11 14 12C13.5 12.5 12 13 12 13Z" fill="#558B2F"/>
                  <path d="M12 14.5V21" stroke="#9CCC65" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              ) : (
                <svg className="w-5 h-5 fill-[#37b350]" viewBox="0 0 24 24">
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1 15v-3.1c-1.9-.4-3.4-1.8-3.8-3.6-.2-.7.3-1.3 1-1.3.5 0 1 .4 1.1.9.3 1.4 1.5 2.5 2.9 2.6V7.5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v3.2c2-.4 3.5-2.2 3.5-4.3 0-.3.2-.5.5-.5s.5.2.5.5c0 2.9-2.1 5.3-4.9 5.8v4.4c0 .5-.4 1-1 1s-1-.5-1-1z" />
                </svg>
              )}
              <span>{banner.tagline}</span>
            </div>

            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-[3.6rem] font-bold tracking-tight text-[#1b4d25] font-serif leading-[1.12] whitespace-pre-line">
              {banner.heading}
            </h1>

            <div className="w-14 h-[3px] bg-[#689e73] mt-4 mb-6 rounded-full" />

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-100 font-sans">
              {banner.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-4 items-center">
              <Link
                href={banner.buttons.donate.href}
                className="inline-flex items-center gap-2.5 rounded-full bg-[#2d6939] px-7 py-3 text-sm font-semibold text-white shadow-md hover:bg-[#133e1d] hover:shadow-lg transition-all duration-200 font-sans"
              >
                <Heart className="h-4 w-4 fill-white text-white" />
                <span>{banner.buttons.donate.label}</span>
              </Link>

              <Link
                href={banner.buttons.volunteer.href}
                className="inline-flex items-center gap-2.5 rounded-full border-2 border-[#1b4e25] bg-transparent px-7 py-3 text-sm font-semibold text-[#1b4e25] hover:bg-[#1b4e25] hover:text-white transition-all duration-200 font-sans"
              >
                <Users className="h-4 w-4" />
                <span>{banner.buttons.volunteer.label}</span>
              </Link>
            </div>

            <div className="mt-10 pt-2 grid grid-cols-3 gap-0 max-w-lg">
              {banner.stats.map((stat: any, index: any) => {
                const StatIcon = getStatIcon(stat.icon);
                return (
                  <div
                    key={stat.id}
                    className={`flex flex-col items-center text-center px-4 sm:px-6 lg:px-8 ${index > 0 ? "border-l border-[#2c7a3f]/50" : ""
                      }`}
                  >
                    <div className="mb-3 flex items-center justify-center h-6 w-6">
                      {StatIcon}
                    </div>
                    <span className="text-2xl sm:text-3xl lg:text-[30px] font-bold text-[#2d6939  ] tracking-tight font-sans leading-none">
                      {stat.value}
                    </span>
                    <span className="text-[11px] sm:text-xs text-gray-700 font-sans mt-2 leading-tight font-medium">
                      {stat.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
