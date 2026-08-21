"use client";
import { site, SectionProps, NGOsmileCausesData } from "@/app/data";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  GraduationCap,
  BookOpen,
  Users,
  HandHeart,
  Sprout,
  ArrowLeft,
  ArrowRight,
  Activity,
} from "lucide-react";



export default function SmileCauses({ data, className }: SectionProps<NGOsmileCausesData> = {}) {
  const smileCauses = data || site.smilecauses;
  const scrollRef = useRef<HTMLDivElement>(null);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "health":
        return <Activity className="w-3.5 h-3.5 stroke-[2.5]" />;
      case "graduation":
      case "education":
        return <GraduationCap className="w-3.5 h-3.5 fill-current" />;
      case "book":
        return <BookOpen className="w-3.5 h-3.5 fill-current" />;
      case "food":
        return (
          <svg
            viewBox="0 0 24 24"
            className="w-3.5 h-3.5 fill-current stroke-none"
          >
            <path d="M2 12h20a1 1 0 0 1 1 1 8 8 0 0 1-8 8H9a8 8 0 0 1-8-8 1 1 0 0 1 1-1z" />
            <path d="M6 7c0-2 1.5-3 1.5-3s1.5 1 1.5 3S7.5 9 7.5 9 6 8 6 7z" />
            <path d="M10.5 7c0-2 1.5-3 1.5-3s1.5 1 1.5 3S12 9 12 9s-1.5-1-1.5-3z" />
            <path d="M15 7c0-2 1.5-3 1.5-3s1.5 1 1.5 3S16.5 9 16.5 9s-1.5-1-1.5-3z" />
          </svg>
        );
      default:
        return <Heart className="w-3.5 h-3.5 fill-current" />;
    }
  };

  const getCenterIcon = (iconName: string) => {
    switch (iconName) {
      case "heart-hand":
      case "hand-heart":
      case "health":
      case "heart":
        return <HandHeart className="w-6 h-6 text-[#31a813]" />;
      case "book":
      case "education":
        return <BookOpen className="w-6 h-6 text-[#31a813]" />;
      case "users":
      case "group":
        return <Users className="w-6 h-6 text-[#31a813]" />;
      case "food-bowl":
      case "food":
        return (
          <svg
            viewBox="0 0 24 24"
            className="w-6 h-6 text-[#31a813] fill-none stroke-current stroke-2"
          >
            <path
              d="M3 12h18a1 1 0 0 1 1 1c0 4.4-3.6 8-8 8H10c-4.4 0-8-3.6-8-8a1 1 0 0 1 1-1z"
              className="fill-[#1f5e2e]/10"
            />
            <path d="M7 8c0-1.5 1-2.5 1-2.5s1 1 1 2.5" />
            <path d="M11 8c0-1.5 1-2.5 1-2.5s1 1 1 2.5" />
            <path d="M15 8c0-1.5 1-2.5 1-2.5s1 1 1 2.5" />
          </svg>
        );
      default:
        return <HandHeart className="w-6 h-6 text-[#1f5e2e]" />;
    }
  };

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const autoScrollInterval = setInterval(() => {
      if (window.innerWidth < 640 && scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          // Scroll to the next card
          scrollRef.current.scrollBy({ left: 260, behavior: "smooth" });
        }
      }
    }, 3500);

    return () => clearInterval(autoScrollInterval);
  }, []);

  return (
    <section className="py-10 border-t border-gray-100 overflow-hidden">
      <div className="mx-auto max-w-[1350px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <h2 className="text-center text-3xl sm:text-5xl font-black text-[#04240d] font-serif leading-tight">
            {smileCauses.heading.prefix}
            <br />
            <span className="text-[#04240d]">{smileCauses.heading.highlight}</span>
            {smileCauses.heading.suffix}
          </h2>

          <div className="flex items-center justify-center gap-3 text-xs sm:text-sm font-extrabold tracking-widest text-[#2c7a3f] uppercase font-sans mt-4">
            <div className="w-10 h-[1.5px] bg-[#2c7a3f]/30"></div>
            <Sprout className="h-4 w-4 text-[#2c7a3f] fill-current" />
            <div className="w-10 h-[1.5px] bg-[#2c7a3f]/30"></div>
          </div>

          <p className="text-center text-sm sm:text-base text-gray-600 leading-relaxed max-w-xl font-sans mt-2">
            {smileCauses.description}
          </p>
        </div>

        <div className="relative mt-6 px-0 sm:px-12 lg:px-14">
          <button
            onClick={() => handleScroll("left")}
            className="absolute left-0 lg:left-1 top-1/2 -translate-y-1/2 z-40 w-10 h-10 rounded-full bg-[#15421d] text-white hidden sm:flex items-center justify-center shadow-md hover:bg-[#1f5e2e] transition-all cursor-pointer"
            aria-label="Scroll left"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>

          <button
            onClick={() => handleScroll("right")}
            className="absolute right-0 lg:right-1 top-1/2 -translate-y-1/2 z-40 w-10 h-10 rounded-full bg-[#15421d] text-white hidden sm:flex items-center justify-center shadow-md hover:bg-[#1f5e2e] transition-all cursor-pointer"
            aria-label="Scroll right"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
          <div
            ref={scrollRef}
            className="flex gap-4 lg:gap-5 overflow-x-auto scrollbar-none snap-x snap-mandatory scroll-smooth pb-4 pt-2 justify-start"
          >
            {smileCauses.cards.map((card: any) => {
              const CategoryIcon = getCategoryIcon(card.categoryIcon);
              const CenterIcon = getCenterIcon(card.centerIcon);
              return (
                <div
                  key={card.id}
                  className="group flex-shrink-0 w-full sm:w-[calc(50%-8px)] md:w-[calc(33.333%-11px)] lg:w-[calc(25%-15px)] bg-white rounded-2xl overflow-hidden border border-gray-100/80 shadow-sm hover:shadow-md transition-all snap-start flex flex-col justify-between"
                >
                  <div className="relative h-48 w-full">
                    <div className="relative w-full h-full rounded-t-2xl overflow-hidden">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                    </div>

                    <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 bg-[#15421d] text-white text-[10px] font-semibold px-2.5 py-1 rounded-full shadow-sm font-sans">
                      {CategoryIcon}
                      <span>{card.category}</span>
                    </div>
                  </div>

                  <div className="relative pt-8 pb-5 px-4 flex flex-col items-center text-center flex-grow justify-between bg-white">
                    <div className="absolute -top-7 left-1/2 -translate-x-1/2 z-30 w-14 h-14 rounded-full bg-[#e8f3e8] flex items-center justify-center shadow-md">
                      {CenterIcon}
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-[#0c3b18] font-serif leading-snug mt-1">
                        {card.title}
                      </h3>

                      <p className="mt-2 text-xs text-gray-600 leading-relaxed font-sans min-h-[36px]">
                        {card.description}
                      </p>
                    </div>

                    {/* <Link dfs
                      href={card.href}
                      className="inline-flex items-center gap-1.5 rounded-full border border-[#1f5e2e] bg-white px-4 py-1.5 text-xs font-semibold text-[#0c3b18] hover:bg-[#1f5e2e] hover:text-white transition-all font-sans cursor-pointer mt-5"
                    >
                      <span>
                        {card.ctaText || smileCauses.ctaText || "Learn More"}
                      </span>
                      <ArrowRight className="w-3 h-3" />
                    </Link> */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
