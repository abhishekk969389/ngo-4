"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Clock3,
  MapPin,
  Users,
  Share2,
  ExternalLink,
} from "lucide-react";
import type { EventDetailItem } from "@/app/type/ngo";

interface EventHeaderProps {
  data: EventDetailItem;
}

export default function EventHeader({ data }: EventHeaderProps) {
  if (!data) return null;

  // Split title to highlight words
  const titleWords = data.title ? data.title.split(" ") : [];
  const primaryTitle = titleWords.slice(0, -2).join(" ");
  const highlightedTitle = titleWords.slice(-2).join(" ");

  return (
    <section className="font-sans px-4 sm:px-6 lg:px-8 max-w-[1380px] mx-auto mt-6 sm:mt-10">
      <div className="bg-white border border-[#e2ebd9] rounded-3xl p-6 sm:p-8 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center">
          {/* Left Column: Image with Date Badge & Tag */}
          <div className="lg:col-span-6 flex flex-col gap-3">
            <div className="relative h-64 sm:h-80 lg:h-96 w-full rounded-2xl overflow-hidden border border-[#e2ebd9] shadow-xs">
              <Image
                src={data.image || "/banner_bg.png"}
                alt={data.title}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              {/* Overlapping Date Badge (Bottom Left) */}
              <div className="absolute bottom-4 left-4 z-10 bg-[#1b4d25] text-white px-4 py-2.5 rounded-xl shadow-md flex flex-col items-center justify-center min-w-[60px]">
                <span className="text-xl sm:text-2xl font-bold font-serif leading-none">
                  {data.date?.day}
                </span>
                <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-wider mt-0.5 opacity-90">
                  {data.date?.month}
                </span>
              </div>
            </div>

            {data.categoryTag && (
              <div>
                <span className="inline-block bg-[#eaf3eb] text-[#1b4d25] text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
                  {data.categoryTag}
                </span>
              </div>
            )}
          </div>

          {/* Right Column: Event Details & Action Buttons */}
          <div className="lg:col-span-6 space-y-5">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif text-[#0d3319] leading-tight">
              {primaryTitle && <span>{primaryTitle} </span>}
              {highlightedTitle && (
                <span className="text-[#2c7a3f]">{highlightedTitle}</span>
              )}
            </h1>

            <p className="text-xs sm:text-sm md:text-base leading-relaxed text-[#4b584d]">
              {data.description}
            </p>

            <div className="space-y-3 pt-2 text-xs sm:text-sm text-[#0d3319]">
              {data.date?.fullDate && (
                <div className="flex items-center gap-3">
                  <Calendar className="w-4.5 h-4.5 text-[#2c7a3f] shrink-0" />
                  <span>{data.date.fullDate}</span>
                </div>
              )}

              {data.time && (
                <div className="flex items-center gap-3">
                  <Clock3 className="w-4.5 h-4.5 text-[#2c7a3f] shrink-0" />
                  <span>{data.time}</span>
                </div>
              )}

              {data.location && (
                <div className="flex items-center gap-3">
                  <MapPin className="w-4.5 h-4.5 text-[#2c7a3f] shrink-0" />
                  <span>{data.location}</span>
                  {data.locationMapUrl && (
                    <a
                      href={data.locationMapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#2c7a3f] hover:underline ml-1"
                    >
                      <span>{data.viewOnMapLabel}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              )}

              {data.volunteersRegistered && (
                <div className="flex items-center gap-3">
                  <Users className="w-4.5 h-4.5 text-[#2c7a3f] shrink-0" />
                  <span>{data.volunteersRegistered}</span>
                </div>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-3.5 pt-4">
              {data.registrationCard && (
                <Link
                  href={data.registrationCard.buttonHref}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1b4d25] px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-sm transition-all duration-200 hover:bg-[#153e1e]"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{data.registrationCard.buttonLabel}</span>
                </Link>
              )}

              {data.shareEventLabel && (
                <button
                  type="button"
                  onClick={() => {
                    if (navigator.share) {
                      navigator
                        .share({
                          title: data.title,
                          text: data.description,
                          url: window.location.href,
                        })
                        .catch(() => {});
                    } else {
                      navigator.clipboard?.writeText(window.location.href);
                    }
                  }}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#e2ebd9] bg-white px-5 py-3 text-xs sm:text-sm font-bold text-[#0d3319] transition-all duration-200 hover:bg-[#f7faf6]"
                >
                  <Share2 className="w-4 h-4 text-[#2c7a3f]" />
                  <span>{data.shareEventLabel}</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
