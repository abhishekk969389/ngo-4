"use client";
import type { NgoEventSection, NgoEventCard } from "@/app/data";
import { site, SectionProps, SiteData, slugify } from "@/app/data";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, MapPin, Clock3 } from "lucide-react";



export default function EventSection({ data: propData, className }: SectionProps<SiteData> = {}) {
  const data = propData || site;
  const eventData = data.eventSection as NgoEventSection | undefined;

  if (!eventData) return null;

  // Splits heading to highlight the last word in green (e.g., "Events")
  const headingWords = eventData.heading ? eventData.heading.split(" ") : [];
  const primaryHeading = headingWords.slice(0, -1).join(" ");
  const highlightedHeading =
    headingWords.length > 0 ? headingWords[headingWords.length - 1] : "";

  // Splits featured title to highlight "Events" in green
  const featuredWords = eventData.featuredTitle
    ? eventData.featuredTitle.split(" ")
    : [];
  const primaryFeatured = featuredWords.slice(0, -1).join(" ");
  const highlightedFeatured =
    featuredWords.length > 0 ? featuredWords[featuredWords.length - 1] : "";

  return (
    <section className="mt-6 sm:mt-8 md:mt-10 lg:mt-14">
      <div className="mx-auto max-w-[1350px] px-4 sm:px-6 lg:px-8">
        {/* Main Section Header */}
        <div className="text-center">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0d3319] font-serif leading-[1.2] sm:leading-[1.18] tracking-tight mt-2 sm:mt-1">
            {primaryHeading && <span>{primaryHeading} </span>}
            {highlightedHeading && (
              <span className="mt-2 font-serif text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0d3319] leading-[1.2] sm:leading-[1.18]">
                {highlightedHeading}
              </span>
            )}
          </h1>

          <div className="mt-3 flex justify-center">
            <span className="h-[2.5px] w-10 rounded-full bg-[#2c7a3f]" />
          </div>

          <p className="mx-auto mt-4 max-w-xl text-xs sm:text-sm md:text-base leading-relaxed text-gray-600 font-sans">
            {eventData.subheading}
          </p>
        </div>

        {/* Featured Events Title Row & Slider Controls */}
        <div className="mt-6 flex items-center justify-between gap-4">
          <h2 className="font-serif text-xl font-bold tracking-tight text-[#16351d] sm:text-2xl">
            {primaryFeatured && <span>{primaryFeatured} </span>}
            {highlightedFeatured && (
              <span className="text-[#1d5e2d]">{highlightedFeatured}</span>
            )}
          </h2>

          {/* Slider Arrow Buttons */}
          {/* <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label={eventData.arrowButtons?.prev || "Previous"}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 transition hover:border-gray-400 hover:text-black"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
            </button>
            <button
              type="button"
              aria-label={eventData.arrowButtons?.next || "Next"}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 transition hover:border-gray-400 hover:text-black"
            >
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div> */}
        </div>

        {/* 3-Column Event Cards Grid */}
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {eventData.cards.map((card: NgoEventCard) => (
            <article
              key={card.id}
              className="group flex flex-col justify-between rounded-2xl border border-[#edf1ea] bg-white transition-all duration-300 hover:shadow-md"
            >
              <div>
                <div className="relative">
                  <div className="relative h-48 w-full overflow-hidden rounded-t-2xl">
                    <Image
                      src={card.image || "/banner_bg.png"}
                      alt={card.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>

                  <div className="absolute -bottom-4 left-4 z-20 flex min-w-[52px] flex-col items-center justify-center rounded-lg bg-[#1a4325] px-3 py-1.5 text-center text-white shadow-md">
                    <span className="font-serif text-base font-bold leading-none">
                      {card.date.day}
                    </span>
                    <span className="mt-1 text-[9px] font-bold uppercase tracking-wider opacity-90">
                      {card.date.month}
                    </span>
                  </div>
                </div>

                <div className="p-5 pt-7">
                  <h3 className="font-serif text-base font-bold text-[#16351d] sm:text-lg">
                    {card.title}
                  </h3>

                  <div className="mt-3 space-y-2 text-xs text-[#59665b]">
                    <div className="flex items-start gap-2">
                      <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gray-500 stroke-[1.8]" />
                      <span className="leading-tight">{card.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock3 className="h-3.5 w-3.5 shrink-0 text-gray-500 stroke-[1.8]" />
                      <span>{card.time}</span>
                    </div>
                  </div>

                  <p className="mt-3.5 text-xs leading-relaxed text-[#59665b]">
                    {card.description}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <Link
                  href={`/events/${slugify(card.title) || (card as any).slug || card.id}`}
                  className="inline-flex rounded-xl bg-[#1a4325] cursor-pointer px-6 py-3 text-sm font-bold text-white transition-all duration-200 hover:bg-[#13351d] hover:shadow-md active:scale-[0.98]"
                >
                  {card.buttonLabel || "Register Now"}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
