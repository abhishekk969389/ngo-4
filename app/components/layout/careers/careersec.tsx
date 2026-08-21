"use client";
import { site, SectionProps, SiteData } from "@/app/data";

import React from "react";
import Link from "next/link";
import {
  Briefcase,
  Building2,
  MapPin,
  Clock,
  ShieldCheck,
  UserCheck,
  Heart,
  TrendingUp,
  Users,
  Scale,
  Sprout,
} from "lucide-react";
import {
  IconBrandLinkedin,
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandWhatsapp,
} from "@tabler/icons-react";
import type {
  NgoData,
  NgoCareersSection,
  NgoCareerOfferItem,
  NgoCareerJobDetailItem,
  NgoCareerShareLink,
} from "@/app/data";



const offerIconMap: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  heart: Heart,
  growth: TrendingUp,
  users: Users,
  shield: ShieldCheck,
  balance: Scale,
};

const detailIconMap: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  briefcase: Briefcase,
  building: Building2,
  "map-pin": MapPin,
  clock: Clock,
  shield: ShieldCheck,
  "user-check": UserCheck,
};

const shareIconMap: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  linkedin: IconBrandLinkedin,
  facebook: IconBrandFacebook,
  twitter: IconBrandTwitter,
  whatsapp: IconBrandWhatsapp,
};

export default function CareerSec({ data: propData, className }: SectionProps<SiteData> = {}) {
  const data = propData || site;
  const careersData = data.careersSection as NgoCareersSection | undefined;

  if (!careersData) return null;

  const {
    aboutRole,
    keyResponsibilities,
    qualifications,
    whatWeOffer,
    callout,
    sidebar,
  } = careersData;

  return (
    <section className="bg-[#fcfdfc] mt-6 sm:mt-8 md:mt-10 lg:mt-14 pb-12">
      <div className="mx-auto max-w-[1350px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="rounded-2xl border border-[#e6ebe5] bg-white p-6 shadow-sm sm:p-8 lg:p-10">
              <div>
                <h2 className=" text-xl sm:text-2xl font-bold text-[#0d3319]">
                  {aboutRole.title}
                </h2>
                <p className="mt-3 text-xs sm:text-sm md:text-base leading-relaxed text-gray-600 font-sans">
                  {aboutRole.description}
                </p>
              </div>

              <hr className="my-8 border-[#eef2ed]" />

              <div>
                <h3 className=" text-xl sm:text-2xl font-bold text-[#16351d]">
                  {keyResponsibilities.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {keyResponsibilities.items.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-sm leading-relaxed text-[#48564a] sm:text-base"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1d5e2d]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <hr className="my-8 border-[#eef2ed]" />

              <div>
                <h3 className=" text-xl sm:text-2xl font-bold text-[#16351d]">
                  {qualifications.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {qualifications.items.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-sm leading-relaxed text-[#48564a] sm:text-base"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1d5e2d]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <hr className="my-8 border-[#eef2ed]" />

              <div>
                <h3 className=" text-xl sm:text-2xl font-bold text-[#16351d]">
                  {whatWeOffer.title}
                </h3>
                <div className="mt-6 grid grid-cols-2 gap-4 text-center sm:grid-cols-5 sm:gap-2">
                  {whatWeOffer.items.map(
                    (offer: NgoCareerOfferItem, index: number) => {
                      const IconComponent = offerIconMap[offer.icon] || Heart;
                      return (
                        <div
                          key={offer.id}
                          className={`flex flex-col items-center px-2 ${index > 0 ? "sm:border-l sm:border-[#e6ebe5]" : ""
                            }`}
                        >
                          <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-[#f4f7f3] text-[#1d5e2d]">
                            <IconComponent className="h-6 w-6 text-[#1d5e2d]" />
                          </div>
                          <span className=" text-xs font-bold leading-tight text-[#16351d] sm:text-sm">
                            {offer.title}
                          </span>
                        </div>
                      );
                    },
                  )}
                </div>
              </div>

              <div className="mt-10 flex flex-col items-center gap-4 rounded-xl border border-[#e0e8de] bg-[#f2f6f1] p-5 sm:flex-row sm:gap-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-white/80 text-[#1d5e2d] shadow-sm">
                  <Sprout className="h-8 w-8 text-[#1d5e2d]" />
                </div>
                <div>
                  <p className="font-bold text-[#16351d] text-sm sm:text-base">
                    {callout.line1}
                  </p>
                  <p className="font-bold text-[#1d5e2d] text-sm sm:text-base">
                    {callout.line2}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="sticky top-8 space-y-6 rounded-2xl border border-[#e6ebe5] bg-white p-6 shadow-sm sm:p-8">
              <div>
                <h3 className=" text-xl sm:text-2xl font-bold text-[#16351d]">
                  {sidebar.title}
                </h3>
                <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-[#59665b]">
                  {sidebar.subtitle}
                </p>
              </div>

              <Link
                href={sidebar.applyButton.href}
                className="block w-full rounded-xl bg-[#0d4019] py-3.5 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-[#16351d]"
              >
                {sidebar.applyButton.label}
              </Link>

              <hr className="border-[#eef2ed]" />

              <div className="space-y-4">
                {sidebar.jobDetails.map((detail: NgoCareerJobDetailItem) => {
                  const DetailIcon = detailIconMap[detail.icon] || Briefcase;
                  return (
                    <div key={detail.id} className="flex items-start gap-3.5">
                      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#f4f7f3] text-[#1d5e2d]">
                        <DetailIcon className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-[#718073]">
                          {detail.label}
                        </p>
                        <p className="text-sm font-bold text-[#16351d]">
                          {detail.value}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 rounded-xl bg-[#f4f7f3] p-4 text-center">
                <p className=" text-xs font-bold text-[#16351d] sm:text-sm">
                  {sidebar.share.title}
                </p>
                <div className="mt-3 flex items-center justify-center gap-3">
                  {sidebar.share.links.map(
                    (shareLink: NgoCareerShareLink, idx: number) => {
                      const ShareIcon =
                        shareIconMap[shareLink.icon] || IconBrandLinkedin;
                      return (
                        <a
                          key={idx}
                          href={shareLink.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-9 w-9 items-center justify-center rounded-full border border-[#1d5e2d]/40 text-[#1d5e2d] transition hover:bg-[#1d5e2d] hover:text-white"
                          aria-label={shareLink.platform}
                        >
                          <ShareIcon className="h-4 w-4" />
                        </a>
                      );
                    },
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
