"use client";
import { site, SectionProps, SiteData, slugify } from "@/app/data";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock3, MapPin } from "lucide-react";
import type {
  NgoEventSection,
  NgoUpcomingEventCard,
} from "@/app/data";

export default function UpcomingEvent({ data: propData, className }: SectionProps<SiteData> = {}) {
  const data = propData || site;
  const eventData = data.eventSection as NgoEventSection | undefined;

  const [showAll, setShowAll] = useState(false);

  if (!eventData) return null;

  // Dynamically split heading to highlight the last word in green (e.g., "All Upcoming Events")
  const titleWords = eventData.upcomingTitle
    ? eventData.upcomingTitle.split(" ")
    : [];
  const primaryTitle = titleWords.slice(0, -1).join(" ");
  const highlightedWord =
    titleWords.length > 1 ? titleWords[titleWords.length - 1] : "";

  const visibleCards = showAll
    ? eventData.upcomingCards
    : eventData.upcomingCards.slice(0, 3);

  return (
    <section className="bg-[#fafbf9] py-12">
      <div className="mx-auto max-w-[1350px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="font-serif text-xl font-bold tracking-tight text-[#16351d] sm:text-2xl">
            {primaryTitle}{" "}
            {highlightedWord && (
              <span className="text-[#234b2c]">{highlightedWord}</span>
            )}
          </h2>
          <div className="mt-2.5 h-[3px] w-10 rounded-full bg-[#3b6043]" />
        </div>

        {/* Events List (Horizontal Row Layout) */}
        <div className="space-y-4">
          {visibleCards.map((card: NgoUpcomingEventCard) => (
            <article
              key={card.id}
              className="flex flex-col gap-4 rounded-2xl border border-[#edf1ea] bg-white p-4 shadow-sm transition-all duration-200 hover:shadow-md lg:flex-row lg:items-center lg:justify-between lg:p-5"
            >
              {/* Left Group: Date + Image + Title & Description */}
              <div className="flex flex-1 flex-col gap-4 sm:flex-row sm:items-center">
                <div className="flex h-20 w-16 shrink-0 flex-col items-center justify-center rounded-xl bg-[#f2f6f1] text-center sm:h-22 sm:w-20">
                  <span className=" text-xl font-bold text-[#16351d] sm:text-2xl">
                    {card.date.day}
                  </span>
                  <span className="mt-0.5 text-xs font-semibold uppercase tracking-wider text-[#4a5e50]">
                    {card.date.month}
                  </span>
                </div>

                <div className="relative h-28 w-full shrink-0 overflow-hidden rounded-xl sm:h-22 sm:w-36">
                  <Image
                    src={card.image || "/banner_bg.png"}
                    alt={card.title}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 640px) 100vw, 150px"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className=" text-base font-bold text-[#16351d] sm:text-lg">
                    {card.title}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-[#59665b] sm:text-sm">
                    {card.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-3 border-t border-[#edf1ea] pt-3 sm:flex-row sm:items-center sm:gap-6 lg:border-t-0 lg:pt-0">
                <div className="flex items-start gap-2 text-xs text-[#59665b] sm:text-sm lg:w-48">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#234b2c] stroke-[1.8]" />
                  <span className="leading-tight">{card.location}</span>
                </div>

                <div className="flex items-center gap-2 text-xs text-[#59665b] sm:text-sm lg:w-44">
                  <Clock3 className="h-4 w-4 shrink-0 text-[#234b2c] stroke-[1.8]" />
                  <span>{card.time}</span>
                </div>
              </div>

              {/* Right Group: Action Button */}
              <div className="shrink-0 pt-2 lg:pt-0">
                <Link
                  href={`/events/${slugify(card.title) || (card as any).slug || card.id}`}
                  className="inline-flex w-full items-center justify-center rounded-lg border border-[#234b2c] bg-transparent px-5 py-2.5 text-xs font-semibold text-[#234b2c] transition duration-200 hover:bg-[#234b2c] hover:text-white sm:text-sm lg:w-auto"
                >
                  {card.buttonLabel || "View Details"}
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Centered "View More Events" Button */}
        {eventData.upcomingCards && eventData.upcomingCards.length > 3 && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="inline-flex items-center justify-center rounded-lg border border-[#234b2c] bg-white px-8 py-3 text-xs font-semibold text-[#234b2c] transition duration-200 hover:bg-[#234b2c] hover:text-white sm:text-sm cursor-pointer active:scale-[0.98]"
            >
              {showAll ? "Show Less Events" : (eventData.viewMoreLabel || "View More Events")}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
