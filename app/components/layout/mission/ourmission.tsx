import type { MissionPageSection } from "@/app/data";
import { site, SectionProps, SiteData } from "@/app/data";
import Image from "next/image";
import { BookOpen, HeartPulse, Users, Sprout } from "lucide-react";



export default function OurMission({ data: propData, className }: SectionProps<SiteData> = {}) {
  const data = propData || site;
  const missionData: MissionPageSection = data.missionPageSection || {
    badge: "OUR MISSION",
    heading: {
      line1: "Building Stronger Communities.",
      line2: "Creating Brighter Futures.",
    },
    description:
      "Our mission is to empower individuals and uplift communities by providing access to education, healthcare, and essential resources. We are committed to creating opportunities that inspire hope, restore dignity, and drive lasting change.",
    pillars: [
      {
        id: 1,
        title: "Educate",
        description:
          "We provide quality education and learning opportunities that help children break barriers and build a better tomorrow.",
        icon: "educate",
        themeColor: "#2c7a3f",
        bgColor: "#e6f4ea",
      },
      {
        id: 2,
        title: "Heal",
        description:
          "We promote good health and well-being by ensuring access to healthcare and spreading awareness in communities.",
        icon: "heal",
        themeColor: "#e06d2d",
        bgColor: "#fde9d9",
      },
      {
        id: 3,
        title: "Support",
        description:
          "We stand beside those in need with compassion, providing essential resources and emotional support to help them move forward.",
        icon: "support",
        themeColor: "#3b7bc4",
        bgColor: "#dcebfd",
      },
      {
        id: 4,
        title: "Empower",
        description:
          "We empower individuals and communities to become self-reliant and create lasting change for a better future.",
        icon: "empower",
        themeColor: "#8a4bb8",
        bgColor: "#ebdcf8",
      },
    ],
    badgeTagline: "Small\nSteps.\nBig Change.",
    images: {
      main: "/about_main.png",
      circle: "/about_circle.png",
    },
  };

  const getPillarIcon = (iconName: string, themeColor: string) => {
    switch (iconName) {
      case "educate":
        return (
          <BookOpen
            className="w-6 h-6 sm:w-7 sm:h-7"
            style={{ color: themeColor }}
          />
        );
      case "heal":
        return (
          <HeartPulse
            className="w-6 h-6 sm:w-7 sm:h-7"
            style={{ color: themeColor }}
          />
        );
      case "support":
        return (
          <Users
            className="w-6 h-6 sm:w-7 sm:h-7"
            style={{ color: themeColor }}
          />
        );
      case "empower":
        return (
          <Sprout
            className="w-6 h-6 sm:w-7 sm:h-7"
            style={{ color: themeColor }}
          />
        );
      default:
        return (
          <BookOpen
            className="w-6 h-6 sm:w-7 sm:h-7"
            style={{ color: themeColor }}
          />
        );
    }
  };

  return (
    <section className="overflow-hidden mt-6 sm:mt-8 md:mt-10 lg:mt-14">
      <div className="mx-auto max-w-[1350px] px-4 sm:px-6 lg:px-8 mt-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-10 xl:gap-14 items-center">
          {/* Left Column: Text Content & 4 Pillars */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Badge Row with Underline & Green Heart Doodle */}
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs sm:text-sm font-extrabold text-[#2c7a3f] tracking-widest uppercase font-sans relative pb-1">
                {missionData.badge}
                <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#2c7a3f] rounded-full" />
              </span>

              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-[#2c7a3f] stroke-[2.2] fill-none -rotate-6 ml-1"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>

            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0d3319] font-serif leading-[1.2] sm:leading-[1.18] tracking-tight mt-1">
              <div>{missionData.heading.line1}</div>
              <div className="inline-block relative text-[#2c7a3f] italic font-serif mt-0.5">
                {missionData.heading.line2}

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
              </div>
            </h2>

            <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed font-sans mt-4 sm:mt-5 max-w-2xl">
              {missionData.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 mt-6 sm:mt-10 pt-2 border-t sm:border-t-0 border-gray-100">
              {missionData.pillars.map((pillar) => (
                <div
                  key={pillar.id}
                  className="lg:border-r lg:border-gray-200/80 lg:last:border-r-0 lg:px-4 xl:px-5 first:lg:pl-0 last:lg:pr-0 flex flex-col items-start"
                >
                  <div
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-[40%_60%_60%_40%/50%_50%_50%_50%] flex items-center justify-center mb-2.5 sm:mb-3 shadow-xs shrink-0"
                    style={{ backgroundColor: pillar.bgColor }}
                  >
                    {getPillarIcon(pillar.icon, pillar.themeColor)}
                  </div>

                  <h3
                    className="font-serif italic font-bold text-base sm:text-xl mb-1 sm:mb-1.5"
                    style={{ color: pillar.themeColor }}
                  >
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-[0.8125rem] text-gray-500 font-sans leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Simple Image Container */}
          <div className="relative lg:col-span-6 flex justify-center lg:justify-end mt-4 lg:mt-0 w-full">
            <div className="relative w-full max-w-[450px] xs:max-w-[540px] sm:max-w-[680px] lg:max-w-[750px] h-[420px] xs:h-[500px] sm:h-[620px] lg:h-[720px]">
              <Image
                src={missionData.images.main}
                alt="Our Mission"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 750px"
                className="object-contain object-center"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
