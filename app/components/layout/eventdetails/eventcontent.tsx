"use client";

import Image from "next/image";
import {
  CheckCircle2,
  Calendar,
  Clock3,
  MapPin,
  User,
  Phone,
  Droplet,
  Shirt,
  Hand,
  Smile,
  Heart,
  ExternalLink,
} from "lucide-react";
import type { EventDetailItem } from "@/app/type/ngo";

const detailIconMap = {
  calendar: Calendar,
  clock: Clock3,
  mapPin: MapPin,
  user: User,
  phone: Phone,
  default: Calendar,
};

const bringIconMap = {
  bottle: Droplet,
  shirt: Shirt,
  hand: Hand,
  smile: Smile,
  default: Smile,
};

interface EventContentProps {
  data: EventDetailItem;
}

export default function EventContent({ data }: EventContentProps) {
  if (!data) return null;

  const aboutWords = (data.aboutTitle || "").split(" ");
  const primaryAbout = aboutWords.slice(0, -1).join(" ");
  const highlightAbout =
    aboutWords.length > 0 ? aboutWords[aboutWords.length - 1] : "";

  return (
    <div className="space-y-8 font-sans">
      {data.aboutContent && (
        <div className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-[#0d3319]">
            {primaryAbout && <span>{primaryAbout} </span>}
            {highlightAbout && (
              <span className="text-[#2c7a3f]">{highlightAbout}</span>
            )}
          </h2>
          <p className="text-xs sm:text-sm md:text-base leading-relaxed text-[#4b584d]">
            {data.aboutContent}
          </p>
        </div>
      )}

      {data.expectations && data.expectations.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-[#0d3319]">
            {data.expectationsTitle}
          </h2>
          <ul className="space-y-3">
            {data.expectations.map((item) => (
              <li
                key={item.id}
                className="flex items-center gap-3 text-xs sm:text-sm text-[#0d3319]"
              >
                <CheckCircle2 className="w-4.5 h-4.5 text-[#2c7a3f] shrink-0" />
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {data.detailsRows && data.detailsRows.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-[#0d3319]">
            {data.detailsTitle}
          </h2>

          <div className="bg-[#f7faf6] border border-[#e2ebd9] rounded-2xl overflow-hidden divide-y divide-[#e2ebd9]">
            {data.detailsRows.map((row) => {
              const IconComponent =
                detailIconMap[row.icon as keyof typeof detailIconMap] ||
                detailIconMap.default;

              return (
                <div
                  key={row.id}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:px-6 gap-2 text-xs sm:text-sm"
                >
                  <div className="flex items-center gap-3 w-36 shrink-0 font-bold text-[#0d3319]">
                    <IconComponent className="w-4 h-4 text-[#2c7a3f]" />
                    <span>{row.label}</span>
                  </div>

                  <div className="flex-1 text-[#4b584d] flex items-center gap-2 flex-wrap">
                    <span>{row.value}</span>
                    {row.linkText && row.linkHref && (
                      <a
                        href={row.linkHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-bold text-[#2c7a3f] hover:underline"
                      >
                        <span>{row.linkText}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {data.bringItems && data.bringItems.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-[#0d3319]">
            {data.bringTitle}
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
            {data.bringItems.map((item) => {
              const IconComponent =
                bringIconMap[item.icon as keyof typeof bringIconMap] ||
                bringIconMap.default;

              return (
                <div
                  key={item.id}
                  className="bg-[#f7faf6] border border-[#e2ebd9] rounded-2xl p-4 text-center flex flex-col items-center justify-center gap-2"
                >
                  <div className="w-10 h-10 rounded-full bg-[#e2ebd9] flex items-center justify-center text-[#1b4d25]">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-[#0d3319]">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {data.gallery && data.gallery.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-[#0d3319]">
            {data.galleryTitle}
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {data.gallery.map((img) => (
              <div
                key={img.id}
                className="relative h-24 sm:h-28 rounded-xl overflow-hidden border border-[#e2ebd9] shadow-2xs group"
              >
                <Image
                  src={img.image}
                  alt={img.alt || ""}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, 20vw"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {data.impactCallout && (
        <div className="bg-[#f4f8f4] border border-[#e2ebd9] rounded-2xl p-5 flex items-center gap-4">
          <div className="w-11 h-11 rounded-full bg-[#e2ebd9] flex-shrink-0 flex items-center justify-center text-[#1b4d25]">
            <Heart className="w-5 h-5 fill-[#1b4d25]/20" />
          </div>
          <div>
            <h3 className="text-sm sm:text-base font-bold font-serif text-[#0d3319]">
              {data.impactCallout.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#4b584d] mt-0.5">
              {data.impactCallout.subtitle}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
