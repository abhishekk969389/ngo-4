import { site, SectionProps, NGOteamSectionData } from "@/app/data";
import Image from "next/image";
import Link from "next/link";
import { Mail, Heart, Sprout, ArrowRight } from "lucide-react";
import { IconBrandLinkedin, IconBrandTwitter } from "@tabler/icons-react";



export default function TeamSection({ data, className }: SectionProps<NGOteamSectionData> = {}) {
  const teamData = data || site.teamsection;

  if (!teamData) return null;

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case "linkedin":
        return <IconBrandLinkedin className="w-4 h-4" />;
      case "twitter":
        return <IconBrandTwitter className="w-4 h-4" />;
      case "email":
        return <Mail className="w-4 h-4" />;
      default:
        return <Mail className="w-4 h-4" />;
    }
  };

  return (
    <section className="bg-white mt-6 sm:mt-8 md:mt-10 lg:mt-14 overflow-hidden">
      <div className="mx-auto max-w-[1350px] px-4 sm:px-6 lg:px-8 mb-10 sm:mb-14">
        {/* Header Block */}
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center justify-center gap-2 mb-1">
            <span className="text-gray-300 font-light text-sm">——</span>
            <span className="text-xs sm:text-sm font-extrabold text-[#1f5e2e] tracking-widest uppercase font-sans flex items-center gap-1.5">
              {teamData.badge}
              <Sprout className="w-3.5 h-3.5 text-[#1f5e2e] fill-current inline-block" />
            </span>
            <span className="text-gray-300 font-light text-sm">——</span>
          </div>

          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0d3319] font-serif leading-[1.2] sm:leading-[1.18] tracking-tight">
            {teamData.heading}
          </h2>

          <div className="flex items-center justify-center gap-2 my-2.5">
            <span className="w-8 h-[1px] bg-gray-300" />
            <Heart className="w-4 h-4 text-[#2c7a3f] stroke-[2] fill-none" />
            <span className="w-8 h-[1px] bg-gray-300" />
          </div>

          <p className="text-gray-600 text-xs sm:text-sm md:text-base max-w-xl mx-auto font-sans leading-relaxed">
            {teamData.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mt-8 sm:mt-12">
          {teamData.members.map((member: any) => (
            <div
              key={member.id}
              className="group relative flex flex-col justify-between rounded-2xl border border-gray-100/90 bg-white p-5 sm:p-6 shadow-xs transition-shadow hover:shadow-md"
            >
              <Link
                href={`/ourteam/${member.id}`}
                className="block flex-1 cursor-pointer"
              >
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="relative w-22 h-22 sm:w-26 sm:h-26 rounded-full overflow-hidden shrink-0 bg-[#e8f2ea]">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 640px) 88px, 104px"
                      className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex flex-col justify-between h-full min-w-0 flex-1">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-[#0d3319] font-sans tracking-tight group-hover:text-[#1f5e2e] transition-colors">
                        {member.name}
                      </h3>

                      <div className="flex flex-col items-start mt-0.5 mb-2">
                        <p className="text-sm sm:text-base font-bold text-[#1f5e2e] font-sans">
                          {member.role}
                        </p>
                        <div className="w-10 h-[2.5px] bg-[#1f5e2e] rounded-full mt-1" />
                      </div>

                      <p className="text-xs sm:text-sm text-gray-600 font-sans leading-relaxed line-clamp-3">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>

              <div className="relative z-10 flex items-center gap-2 mt-4">
                {member.socials.map((social: any, index: any) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-[#e8f2ea] text-[#1f5e2e] hover:bg-[#1f5e2e] hover:text-white transition-colors flex items-center justify-center shrink-0"
                    aria-label={`${member.name} ${social.platform}`}
                  >
                    {getSocialIcon(social.platform)}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        {teamData.ctaBanner && (
          <div className="mt-10 sm:mt-12 p-5 sm:p-7 rounded-2xl bg-[#edf4ee] border border-[#e0eee3] flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
            {/* Left Block */}
            <div className="flex items-center gap-4 text-center md:text-left flex-1">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#e8f2ea] text-[#1f5e2e] flex items-center justify-center shrink-0">
                <Heart className="w-7 h-7 sm:w-8 sm:h-8 text-[#1f5e2e] stroke-[1.8] fill-none" />
              </div>
              <div>
                <h4 className="text-base sm:text-xl font-bold text-[#0d3319] font-sans">
                  {teamData.ctaBanner.title}
                </h4>
                <p className="text-xs sm:text-sm lg:text-base text-gray-600 font-sans max-w-md mt-0.5">
                  {teamData.ctaBanner.description}
                </p>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-4 shrink-0 px-2">
              <div className="h-10 w-[1px] bg-gray-300/80" />
              <Sprout className="w-6 h-6 text-[#1f5e2e]/70" />
            </div>

            {/* Right Action Block */}
            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <span className="text-xs sm:text-sm lg:text-base font-bold text-gray-800 font-sans">
                {teamData.ctaBanner.ctaTitle}
              </span>
              <Link
                href={teamData.ctaBanner.button.href}
                className="bg-[#2c7a3f] hover:bg-[#1f5e2e] text-white font-bold text-xs sm:text-sm lg:text-base px-6 py-3 rounded-lg flex items-center gap-2 transition-colors font-sans shadow-xs"
              >
                <span>{teamData.ctaBanner.button.label}</span>
                <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
