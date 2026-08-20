"use client";
import type { TeamSectionData, TeamMember } from "@/app/data";
import { site, SectionProps } from "@/app/data";

import React from "react";
import Image from "next/image";
import {
  Calendar,
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  HandHeart,
  UserCheck,
  Award,
} from "lucide-react";
import {
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBrandFacebook,
  IconQuote,
} from "@tabler/icons-react";



interface TeamDetailsProps {
  memberId: string | number;
}

export default function TeamDetails({ memberId }: TeamDetailsProps) {
  const teamData = site.teamSection as TeamSectionData | undefined;

  if (!teamData) return null;

  const { detailLabels, members } = teamData;

  const currentMember =
    members.find((m: TeamMember) => String(m.id) === String(memberId)) ||
    members[0];

  const getSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "linkedin":
        return <IconBrandLinkedin className="h-4 w-4" />;
      case "twitter":
        return <IconBrandTwitter className="h-4 w-4" />;
      case "facebook":
        return <IconBrandFacebook className="h-4 w-4" />;
      case "email":
      case "mail":
        return <Mail className="h-4 w-4" />;
      default:
        return <Mail className="h-4 w-4" />;
    }
  };

  return (
    <section className="bg-[#fcfdfc] mt-6 sm:mt-8 md:mt-10 lg:mt-14 pb-12">
      <div className="mx-auto max-w-[1350px] px-4 sm:px-6 lg:px-8">
        {/* Top Profile Card */}
        <div className="rounded-3xl border border-[#e8eee7] bg-white p-6 shadow-xs sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-8 xl:gap-10 items-center">
            {/* Left Column: Avatar & Socials */}
            <div className="flex flex-col items-center justify-center lg:col-span-4">
              <div className="relative">
                <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-white bg-[#e8f2ea] shadow-md sm:h-56 sm:w-56">
                  <Image
                    src={currentMember.image}
                    alt={currentMember.name}
                    fill
                    priority
                    sizes="(max-width: 640px) 192px, 224px"
                    className="object-cover object-top"
                  />
                </div>
              </div>

              {/* Social Links Row */}
              <div className="mt-5 flex items-center gap-3">
                {currentMember.socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f0f6ef] text-[#1d5e2d] shadow-xs transition-all hover:bg-[#1d5e2d] hover:text-white"
                    aria-label={`${currentMember.name} ${social.platform}`}
                  >
                    {getSocialIcon(social.platform)}
                  </a>
                ))}
              </div>
            </div>

            {/* Middle Column: Member Bio & Key Details */}
            <div className="flex flex-col justify-center lg:col-span-5">
              <h1 className="font-serif text-3xl font-bold tracking-tight text-[#16351d] sm:text-4xl">
                {currentMember.name}
              </h1>

              <div className="mt-1">
                <p className="text-base font-bold text-[#1d5e2d] sm:text-lg">
                  {currentMember.role}
                </p>
                <div className="mt-1 mb-4 h-[2.5px] w-10 rounded-full bg-[#1d5e2d]" />
              </div>

              <p className="text-xs leading-relaxed text-[#59665b] sm:text-sm">
                {currentMember.bio}
              </p>

              <div className="mt-6 flex flex-col space-y-2.5">
                <div className="flex items-center gap-3 text-xs sm:text-sm">
                  <Calendar className="h-4 w-4 shrink-0 text-[#1d5e2d]" />
                  <span className="w-24 shrink-0 font-bold text-[#16351d]">
                    {detailLabels.experience}
                  </span>
                  <span className="text-[#59665b]">:</span>
                  <span className="text-[#59665b] font-medium">
                    {currentMember.experience}
                  </span>
                </div>

                <div className="flex items-center gap-3 text-xs sm:text-sm">
                  <GraduationCap className="h-4 w-4 shrink-0 text-[#1d5e2d]" />
                  <span className="w-24 shrink-0 font-bold text-[#16351d]">
                    {detailLabels.education}
                  </span>
                  <span className="text-[#59665b]">:</span>
                  <span className="text-[#59665b] font-medium">
                    {currentMember.education}
                  </span>
                </div>

                <div className="flex items-center gap-3 text-xs sm:text-sm">
                  <Mail className="h-4 w-4 shrink-0 text-[#1d5e2d]" />
                  <span className="w-24 shrink-0 font-bold text-[#16351d]">
                    {detailLabels.email}
                  </span>
                  <span className="text-[#59665b]">:</span>
                  <a
                    href={`mailto:${currentMember.email}`}
                    className="text-[#59665b] font-medium hover:text-[#1d5e2d] transition-colors truncate"
                  >
                    {currentMember.email}
                  </a>
                </div>

                <div className="flex items-center gap-3 text-xs sm:text-sm">
                  <Phone className="h-4 w-4 shrink-0 text-[#1d5e2d]" />
                  <span className="w-24 shrink-0 font-bold text-[#16351d]">
                    {detailLabels.phone}
                  </span>
                  <span className="text-[#59665b]">:</span>
                  <a
                    href={`tel:${currentMember.phone}`}
                    className="text-[#59665b] font-medium hover:text-[#1d5e2d] transition-colors"
                  >
                    {currentMember.phone}
                  </a>
                </div>

                <div className="flex items-center gap-3 text-xs sm:text-sm">
                  <MapPin className="h-4 w-4 shrink-0 text-[#1d5e2d]" />
                  <span className="w-24 shrink-0 font-bold text-[#16351d]">
                    {detailLabels.location}
                  </span>
                  <span className="text-[#59665b]">:</span>
                  <span className="text-[#59665b] font-medium">
                    {currentMember.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Quote & Joined Badge */}
            <div className="lg:col-span-3">
              <div className="flex flex-col justify-between rounded-2xl border border-[#e5ece3] bg-[#f4f7f2] p-6 sm:p-7">
                <div>
                  <IconQuote className="h-8 w-8 rotate-180 fill-[#1d5e2d] text-[#1d5e2d]" />
                  <p className="mt-3 font-serif text-xs leading-relaxed text-[#16351d] italic sm:text-sm font-medium">
                    &ldquo;{currentMember.quote}&rdquo;
                  </p>
                </div>

                <div className="mt-6 border-t border-[#dde6dc] pt-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#1d5e2d] shadow-2xs">
                      <HandHeart className="h-5 w-5 stroke-[1.8]" />
                    </div>
                    <div>
                      <p className="text-[11px] font-medium text-[#59665b]">
                        {detailLabels.joinedTitle || "Joined Bless Foundation"}
                      </p>
                      <p className="text-xs font-bold text-[#16351d] sm:text-sm">
                        {currentMember.joined}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom 3 Feature Detail Cards */}
        <div className="mt-6 rounded-3xl border border-[#e8eee7] bg-white p-6 shadow-xs sm:mt-8 sm:p-8">
          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3 md:divide-x md:divide-[#e8eee7]">
            <div className="flex items-start gap-4 md:pr-6">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#f0f6ef] text-[#1d5e2d]">
                <UserCheck className="h-7 w-7 stroke-[1.8]" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#16351d]">
                  {detailLabels.expertise}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-[#59665b] sm:text-sm">
                  {currentMember.expertise.join(", ")}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 md:px-6">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#f0f6ef] text-[#1d5e2d]">
                <HandHeart className="h-7 w-7 stroke-[1.8]" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#16351d]">
                  {detailLabels.coreValues}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-[#59665b] sm:text-sm">
                  {currentMember.coreValues.join(", ")}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 md:pl-6">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#f0f6ef] text-[#1d5e2d]">
                <Award className="h-7 w-7 stroke-[1.8]" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#16351d]">
                  {detailLabels.achievements}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-[#59665b] sm:text-sm">
                  {currentMember.achievements}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
