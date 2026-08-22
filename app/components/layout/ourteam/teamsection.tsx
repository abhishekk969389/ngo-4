"use client";
import { site, SectionProps, NGOteamSectionData, slugify } from "@/app/data";
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
        return (
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
          </svg>
        );
      case "twitter":
        return (
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.9 2H22L14.4 10.7L23.3 22H16.3L10.8 14.8L4.5 22H1.4L9.5 12.8L1 2H7.9L12.9 8.6L18.9 2Z" />
          </svg>
        );
      case "email":
      default:
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M0 7.33l12 7.33 12-7.33v-1.33c0-.552-.448-1-1-1h-22c-.552 0-1 .448-1 1v1.33zm24 2.67l-12 7.33-12-7.33v8.33c0 .552.448 1 1 1h22c.552 0 1-.448 1-1v-8.33z" />
          </svg>
        );
    }
  };

  return (
    <section className={`bg-white mt-6 sm:mt-8 md:mt-10 lg:mt-14 overflow-hidden ${className || ""}`}>
      <div className="mx-auto max-w-[1350px] px-4 sm:px-6 lg:px-8 mb-10 sm:mb-14">

        {/* Header Block */}
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <span className="text-xs sm:text-sm font-extrabold text-[#34783c] tracking-[0.3em] uppercase font-sans mb-1">
            {teamData.badge}
          </span>

          {/* Leaf with green lines */}
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="w-6 h-[1.5px] bg-[#34783c]" />
            <Sprout className="w-3.5 h-3.5 text-[#34783c] fill-current" />
            <span className="w-6 h-[1.5px] bg-[#34783c]" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl xs:text-4xl sm:text-5xl lg:text-[52px] font-bold text-[#093517] font-serif leading-[1.15] tracking-tight">
            {teamData.heading}
          </h2>

          {/* Heart with green lines */}
          <div className="flex items-center justify-center gap-2 my-3">
            <span className="w-6 h-[1.5px] bg-[#34783c]" />
            <Heart className="w-4 h-4 text-[#34783c] stroke-[2] fill-none" />
            <span className="w-6 h-[1.5px] bg-[#34783c]" />
          </div>

          {/* Description */}
          <p className="text-gray-600 text-xs sm:text-sm md:text-base max-w-xl mx-auto font-sans leading-relaxed">
            {teamData.description}
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mt-8 sm:mt-12">
          {teamData.members.map((member: any) => {
            const memberSlug = member.slug || slugify(member.name) || member.id;
            return (
              <Link
                key={member.id}
                href={`/ourteam/${memberSlug}`}
                className="group relative flex items-center sm:items-start rounded-2xl border border-gray-100 bg-white p-5 sm:p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] transition-all hover:shadow-[0_8px_25px_-5px_rgba(0,0,0,0.1)] gap-5 sm:gap-6 cursor-pointer"
              >
              {/* Left Image */}
              <div className="relative w-28 h-28 sm:w-[140px] sm:h-[140px] shrink-0 rounded-full overflow-hidden bg-[#f4f7f4] z-10">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 112px, 140px"
                  className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Right Content */}
              <div className="flex flex-col flex-1 h-full justify-center z-10">
                <h3 className="text-lg sm:text-[21px] font-bold text-[#093517] font-sans tracking-tight leading-tight group-hover:text-[#2c7a3f] transition-colors">
                  {member.name}
                </h3>

                <p className="text-[13px] sm:text-[14.5px] font-bold text-[#34783c] font-sans mt-1">
                  {member.role}
                </p>

                <div className="w-8 sm:w-10 h-[2px] bg-[#34783c] rounded-full mt-2.5 mb-3" />

                <p className="text-[13px] sm:text-[14px] text-gray-600 font-sans leading-[1.6] line-clamp-3 sm:line-clamp-4">
                  {member.bio}
                </p>

                {/* Socials */}
                <div className="flex items-center gap-2.5 mt-4">
                  {member.socials.slice(0, 3).map((social: any, index: any) => (
                    <span
                      key={index}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        window.open(social.href, "_blank");
                      }}
                      className="w-[34px] h-[34px] sm:w-[36px] sm:h-[36px] rounded-full bg-[#f4f7f4] text-[#255f26] hover:bg-[#255f26] hover:text-white transition-colors flex items-center justify-center shrink-0 z-20"
                      aria-label={`${member.name} ${social.platform}`}
                    >
                      {getSocialIcon(social.platform)}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          );
        })}
        </div>

        {/* Bottom CTA Banner */}
        {teamData.ctaBanner && (
          <div className="mt-8 sm:mt-12 py-5 px-5 sm:px-8 lg:px-10 rounded-[20px] bg-[#f4f7f2] border border-[#e5eee4] flex flex-col lg:flex-row items-center justify-between relative overflow-hidden">

            {/* Right Background Leaf Watermark */}
            <div className="absolute right-0 top-0 bottom-0 h-full w-44 sm:w-56 pointer-events-none select-none opacity-40 text-[#427a4e] flex items-center justify-end z-0">
              <svg
                viewBox="0 0 200 300"
                className="h-full w-auto object-cover translate-x-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M160 290 Q 130 180 80 50" />
                <path d="M80 50 Q 85 20 70 15 Q 55 20 80 50" fill="currentColor" fillOpacity="0.08" />
                <path d="M95 90 Q 140 70 150 95 Q 120 115 95 90" fill="currentColor" fillOpacity="0.08" />
                <path d="M115 150 Q 170 140 175 170 Q 140 185 115 150" fill="currentColor" fillOpacity="0.08" />
                <path d="M135 220 Q 190 220 190 250 Q 155 260 135 220" fill="currentColor" fillOpacity="0.08" />
                <path d="M85 70 Q 40 50 35 75 Q 65 90 85 70" fill="currentColor" fillOpacity="0.08" />
                <path d="M100 120 Q 45 110 40 140 Q 75 150 100 120" fill="currentColor" fillOpacity="0.08" />
                <path d="M120 180 Q 60 180 60 210 Q 95 220 120 180" fill="currentColor" fillOpacity="0.08" />
              </svg>
            </div>

            <div className="flex flex-col lg:flex-row items-center w-full relative z-10 gap-6 sm:gap-8 lg:gap-0">

              {/* 1. Left Content Block */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 sm:gap-5 flex-1">
                {/* Icon */}
                <div className="w-14 h-14 sm:w-[68px] sm:h-[68px] rounded-full bg-[#e3ece2] flex items-center justify-center shrink-0">
                  <svg
                    className="w-8 h-8 sm:w-10 sm:h-10 text-[#255f26]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 7.5c-1.5-2.5-4.5-2-5.2.8-.6 2 2 3.5 5.2 5.2 3.2-1.7 5.8-3.2 5.2-5.2-.7-2.8-3.7-3.3-5.2-.8z" />
                    <circle cx="12" cy="15.5" r="2.2" />
                    <path d="M8.5 22v-1.5a3.5 3.5 0 0 1 7 0v1.5" />
                    <circle cx="5.5" cy="17" r="1.8" />
                    <path d="M2 22v-1a3 3 0 0 1 5-2" />
                    <circle cx="18.5" cy="17" r="1.8" />
                    <path d="M22 22v-1a3 3 0 0 0-5-2" />
                  </svg>
                </div>

                {/* Heading & Subtitle */}
                <div className="flex flex-col pt-0.5 sm:pt-1">
                  <h4 className="text-lg sm:text-[21px] font-bold text-[#093517] font-sans tracking-tight mb-1">
                    {teamData.ctaBanner.title}
                  </h4>
                  <p className="text-xs sm:text-[14px] text-[#445b48] font-sans max-w-[420px] leading-relaxed">
                    {teamData.ctaBanner.description}
                  </p>
                </div>
              </div>

              {/* 2. Middle & Right Groups */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-8 lg:gap-10 shrink-0 w-full lg:w-auto md:mx-30 lg:mx-40">

                {/* Divider & Plant */}
                <div className="hidden lg:flex items-center gap-6 h-16">
                  <div className="h-full border-l border-dashed border-[#c2d3c2]"></div>
                  <svg
                    className="w-[34px] h-[52px] text-[#528751]"
                    viewBox="0 0 48 64"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M24 56V12" />
                    <path d="M24 14c-4.5-8 4.5-11 4.5-11s9 3 4.5 11c-4.5 8-9 0-9 0z" />
                    <path d="M24 30c-10-3.5-13 6-13 6s8 9 13-6z" />
                    <path d="M24 30c10-3.5 13 6 13 6s-8 9-13-6z" />
                    <path d="M14 56c4 0 6-3 10-3s6 3 10 3" />
                  </svg>
                </div>

                {/* 3. Action Block */}
                <div className="flex flex-col items-center sm:items-start gap-2">
                  <span className="text-xs sm:text-[15px] font-bold text-[#0d3319] font-sans">
                    {teamData.ctaBanner.ctaTitle}
                  </span>
                  <Link
                    href={teamData.ctaBanner.button.href}
                    className="bg-[#2d6b24] hover:bg-[#23561c] text-white font-semibold text-xs sm:text-[14px] px-5 sm:px-6 py-2.5 rounded-lg flex items-center gap-2 transition-all font-sans shadow-sm hover:shadow-md active:scale-[0.98]"
                  >
                    <span>{teamData.ctaBanner.button.label}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}