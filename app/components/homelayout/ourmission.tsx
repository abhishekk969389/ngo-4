import { site, SectionProps, NGOourMissionData } from "@/app/data";
import Link from "next/link";
import { Sprout, Heart, Home, BookOpen, ArrowRight } from "lucide-react";



export default function OurMission({ data, className }: SectionProps<NGOourMissionData> = {}) {
  const ourMission = data || site.ourmission;

  const getCardIcon = (iconName: string) => {
    switch (iconName) {
      case "child":
        return (
          <svg
            viewBox="0 0 24 24"
            className="w-8 h-8 text-[#1f5e2e] fill-none stroke-current stroke-2"
          >
            <path
              d="M12 7c-1.5-2-4-2-5.5-.5S6 10.5 12 16c6-5.5 7-7.5 5.5-9.5S13.5 5 12 7z"
              className="fill-[#1f5e2e]/10"
            />
            <path d="M4 19c1.5-2.5 3.5-3.5 8-3.5s6.5 1 8 3.5" />
            <circle cx="12" cy="11" r="2" />
          </svg>
        );
      case "shelter":
        return (
          <div className="relative flex items-center justify-center">
            <Home className="w-8 h-8 text-[#1f5e2e]" />
            <Heart className="absolute inset-0 m-auto w-3 h-3 text-[#1f5e2e] fill-[#1f5e2e]" />
          </div>
        );
      case "education":
        return <BookOpen className="w-8 h-8 text-[#1f5e2e]" />;
      case "food":
        return (
          <svg
            viewBox="0 0 24 24"
            className="w-8 h-8 text-[#1f5e2e] fill-none stroke-current stroke-2"
          >
            <path
              d="M4 11h16a1 1 0 0 1 1 1c0 4.4-3.6 8-8 8s-8-3.6-8-8a1 1 0 0 1 1-1z"
              className="fill-[#1f5e2e]/10"
            />
            <path d="M12 11c0-3-1.5-5.5-4-5.5" />
            <path d="M12 11c0-3 1.5-5.5 4-5.5" />
            <path d="M12 5.5c1-1 2-1 2 0" />
            <path d="M12 5.5c-1-1-2-1-2 0" />
          </svg>
        );
      default:
        return <Sprout className="w-8 h-8 text-[#1f5e2e]" />;
    }
  };

  return (
    <section className="relative bg-[#f7f9f5] py-8 mt-16 overflow-hidden border-t border-gray-100">
      <div className="absolute top-5 right-6 sm:top-8 sm:right-12 md:right-20 lg:right-28 hidden md:block pointer-events-none">
        <svg
          width="240"
          height="130"
          viewBox="0 0 240 130"
          fill="none"
          className="overflow-visible"
        >
          <path
            d="M 10 115 C 70 130, 140 45, 215 22"
            stroke="#2c7a3f"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            strokeOpacity="0.3"
            strokeLinecap="round"
          />

          <g transform="translate(205, 2) rotate(12)">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#1f5e2e"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 2L11 13" />
              <path d="M22 2L15 22L11 13L2 9L22 2Z" />
            </svg>
          </g>
        </svg>
      </div>

      <div className="mx-auto max-w-[1350px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center gap-3 text-xs sm:text-sm font-extrabold tracking-widest text-[#2c7a3f] uppercase font-sans">
            <div className="w-10 h-[1.5px] bg-[#2c7a3f]/30"></div>
            <Sprout className="h-4 w-4 text-[#2c7a3f] fill-current" />
            <span>{ourMission.badge}</span>
            <div className="w-10 h-[1.5px] bg-[#2c7a3f]/30"></div>
          </div>

          <h2 className="mt-2 text-center text-3xl sm:text-5xl font-black text-[#04240d] font-serif leading-tight">
            {ourMission.heading.prefix}
            <br />
            <span className="text-[#2c7a3f]">{ourMission.heading.highlight}</span>
            {ourMission.heading.suffix}
          </h2>

          <div className="w-14 h-[3px] bg-[#2c7a3f] mt-4 mb-6"></div>

          <p className="text-center sm:text-md text-gray-600 leading-relaxed max-w-xl font-sans">
            {ourMission.description}
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
          {ourMission.cards.map((card: any, index: any) => {
            const CardIcon = getCardIcon(card.icon);
            const isLast = index === ourMission.cards.length - 1;

            return (
              <div
                key={card.id}
                className={`relative group flex flex-col items-center text-center px-6 py-4 transition-all duration-300 ${!isLast
                    ? "after:hidden lg:after:block after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:h-[60%] after:w-[2px] after:bg-gray-300/80 after:rounded-full"
                    : ""
                  }`}
              >
                <div className="relative mb-6 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-[#e8f2e8] flex items-center justify-center z-10">
                    {CardIcon}
                  </div>
                  <div className="absolute -bottom-2 w-24 h-12 border-b-[3px] border-[#1f5e2e] rounded-b-full pointer-events-none" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#083815] mb-3 tracking-tight">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-600 font-sans leading-relaxed mb-6 max-w-[260px]">
                  {card.description}
                </p>

                <Link
                  href={card.href}
                  className="mt-auto w-10 h-10 rounded-full border border-[#1f5e2e] flex items-center justify-center text-[#1f5e2e] hover:bg-[#1f5e2e] hover:text-white transition-colors duration-200"
                  aria-label={`Learn more about ${card.title}`}
                >
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
