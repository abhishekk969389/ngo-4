"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpenText,
  Building2,
  HeartPulse,
  Leaf,
  Sprout,
  GraduationCap,
  LayoutGrid,
} from "lucide-react";
import ngoDataJson from "@/app/data/ngoData_structured.json";
import type {
  NgoData,
  NgoCaseStudySection,
  NgoCaseStudyCard,
} from "@/app/type/ngo";

const data = new Proxy(ngoDataJson as any, {
  get(target, prop: string) {
    if (prop === "$$typeof") return undefined;
    return target.NGO?.sections?.[prop]?.variants?.["Legacy_" + prop];
  },
});

const iconMap = {
  all: LayoutGrid,
  education: GraduationCap,
  healthcare: HeartPulse,
  environment: Leaf,
  community: Building2,
  default: BookOpenText,
};

export default function CaseStudySection() {
  const caseStudyData = data.caseStudySection as
    NgoCaseStudySection | undefined;

  const [activeFilter, setActiveFilter] = useState<string>("all");

  if (!caseStudyData) return null;

  // Safely filter cards based on active category tab
  const filteredCards =
    activeFilter === "all"
      ? caseStudyData.cards
      : caseStudyData.cards.filter(
          (card: NgoCaseStudyCard) =>
            card.category.toLowerCase() === activeFilter.toLowerCase(),
        );

  const getIcon = (iconName: string, className = "h-4 w-4 text-[#1d5e2d]") => {
    const IconComponent =
      iconMap[iconName as keyof typeof iconMap] ?? iconMap.default;
    return <IconComponent className={className} />;
  };

  // Heading highlight logic
  const headingText = caseStudyData.heading || "Real Stories. Real Impact.";
  const headingWords = headingText.split(" ");
  const primaryHeading = headingWords.slice(0, -2).join(" ");
  const highlightedHeading = headingWords.slice(-2).join(" ");

  return (
    <section className="mt-6 sm:mt-8 md:mt-10 lg:mt-14">
      <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8 pb-6">
        <div className="text-center">
          <div className="inline-flex items-center justify-center gap-3 text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#0d3319] font-sans">
            <span className="h-px w-10 bg-[#2c7a3f]/30" />
            <span className="flex items-center gap-1.5">
              <Sprout className="h-4 w-4 fill-[#2c7a3f] text-[#2c7a3f]" />
              {caseStudyData.badge || "OUR CASE STUDIES"}
            </span>
            <span className="h-px w-10 bg-[#2c7a3f]/30" />
          </div>

          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0d3319] font-serif leading-[1.2] sm:leading-[1.18] tracking-tight mt-2 sm:mt-1">
            {primaryHeading && <span>{primaryHeading} </span>}
            <span className="inline-block relative text-[#2c7a3f] font-serif">
              {highlightedHeading}
            </span>
          </h2>

          <div className="mt-4 flex justify-center">
            <span className="h-[2.5px] w-12 rounded-full bg-[#2c7a3f]" />
          </div>

          <p className="mx-auto mt-4 max-w-2xl text-xs sm:text-sm md:text-base leading-relaxed text-gray-600 font-sans">
            {caseStudyData.description}
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          {caseStudyData.categories.map((category) => {
            const isActive = activeFilter === category.value;
            const CategoryIcon =
              iconMap[category.value as keyof typeof iconMap] ?? LayoutGrid;

            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveFilter(category.value)}
                className={`inline-flex items-center gap-2 rounded-lg border px-4 py-2.5 text-xs font-semibold transition sm:text-sm ${
                  isActive
                    ? "border-[#1a4325] bg-[#1a4325] text-white shadow-sm"
                    : "border-[#e2e8e0] bg-white text-[#234b2c] hover:border-[#1a4325] hover:bg-[#f4f7f2]"
                }`}
              >
                <CategoryIcon
                  className={`h-4 w-4 ${isActive ? "text-white" : "text-[#234b2c]"}`}
                />
                <span>{category.label}</span>
              </button>
            );
          })}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCards.map((card: NgoCaseStudyCard) => (
            <article
              key={card.id}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-[#edf1ea] bg-white transition-all duration-300 hover:shadow-md"
            >
              <div>
                <div className="relative h-52 w-full overflow-hidden rounded-t-2xl">
                  <Image
                    src={card.image || "/banner_bg.png"}
                    alt={card.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-[#1d5e2d] shadow-sm backdrop-blur-sm">
                    {getIcon(card.icon, "h-5 w-5 text-[#1d5e2d]")}
                  </div>
                </div>

                <div className="p-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1d5e2d]">
                    {card.category}
                  </span>

                  <h3 className="mt-2 font-serif text-xl font-bold leading-snug text-[#16351d] sm:text-2xl">
                    {card.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#59665b]">
                    {card.description}
                  </p>
                </div>
              </div>

              {/* Bottom "Read Full Story" Link */}
              <div className="p-6 pt-0">
                <Link
                  href={card.href || "#"}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1d5e2d] transition hover:text-[#16351d] sm:text-sm"
                >
                  <span>{card.buttonLabel || "Read Full Story"}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
