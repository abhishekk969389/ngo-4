"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Heart } from "lucide-react";
import { IconQuote, IconStarFilled } from "@tabler/icons-react";
import ngoDataJson from "@/app/data/ngoData_structured.json";
import type { NgoData } from "@/app/type/ngo";

const data = new Proxy(ngoDataJson as any, {
  get(target, prop: string) {
    if (prop === "$typeof") return undefined;
    return target.NGO?.sections?.[prop]?.variants?.["Legacy_" + prop];
  },
});

export default function Testinomial() {
  const { testimonials } = data;
  const cards = testimonials.cards;

  // Tripled list for continuous smooth sliding
  const allCards = [...cards, ...cards, ...cards];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll logic: advances activeIndex every 3 seconds (pauses on hover)
  useEffect(() => {
    if (isPaused || cards.length === 0) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cards.length);
    }, 1000);

    return () => clearInterval(timer);
  }, [isPaused, cards.length]);

  return (
    <section className="bg-white overflow-hidden">
      <div className="mx-auto max-w-[1140px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <h2 className="text-center text-3xl sm:text-5xl font-black text-[#04240d] font-serif leading-tight">
            {testimonials.heading.prefix}{" "}
            <span className="text-[#2c7a3f]">
              {testimonials.heading.highlight}
            </span>
            <br />
            {testimonials.heading.suffix}
          </h2>

          <div className="flex items-center justify-center gap-3 text-xs sm:text-sm font-extrabold tracking-widest text-[#2c7a3f] uppercase font-sans mt-3">
            <div className="w-10 h-[1.5px] bg-[#2c7a3f]/30"></div>
            <Heart className="h-4 w-4 text-[#2c7a3f] fill-current" />
            <div className="w-10 h-[1.5px] bg-[#2c7a3f]/30"></div>
          </div>
        </div>
        <div
          className="mt-6 overflow-hidden py-8 px-2"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="flex gap-6 transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${activeIndex * 364}px)`,
            }}
          >
            {allCards.map((card, idx) => {
              // The card in the center position among the 3 visible cards is (activeIndex + 1)
              const isCenter = idx === activeIndex + 1;
              const activeThemeColor = isCenter ? "#f59e0b" : "#0c4d1e";

              return (
                <div
                  key={`${card.id}-${idx}`}
                  className={`flex-shrink-0 w-[340px] bg-white rounded-[1.75rem] p-6 pt-0 flex flex-col justify-between transition-all duration-500 ease-in-out border ${isCenter
                      ? "shadow-xl scale-105 border-amber-300 z-10"
                      : "shadow-sm scale-95 border-gray-100 opacity-85"
                    }`}
                  style={{
                    borderBottomWidth: "4px",
                    borderBottomColor: activeThemeColor,
                  }}
                >
                  <div className="flex flex-col">
                    <div className="relative flex items-center justify-center -mt-5 mb-4">
                      <div
                        className="absolute inset-x-0 h-[2px] transition-colors duration-500"
                        style={{
                          backgroundColor: activeThemeColor,
                          opacity: 0.3,
                        }}
                      ></div>
                      <div
                        className="relative w-10 h-10 rounded-full flex items-center justify-center text-white z-10 transition-all duration-500 shadow-md"
                        style={{ backgroundColor: activeThemeColor }}
                      >
                        <IconQuote className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <div className="flex justify-center gap-1 mb-4">
                      {Array.from({ length: card.rating }).map((_, i) => (
                        <IconStarFilled
                          key={i}
                          className="w-3.5 h-3.5 text-[#f59e0b]"
                        />
                      ))}
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed text-center font-sans tracking-wide">
                      {card.feedback}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 mt-6 border-t border-gray-50 pt-4 justify-center">
                    <div
                      className="relative w-10 h-10 rounded-full overflow-hidden border-2 transition-colors duration-500"
                      style={{ borderColor: activeThemeColor }}
                    >
                      <Image
                        src={card.image}
                        alt={card.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-sm font-bold text-gray-900 font-sans leading-tight">
                        {card.name}
                      </span>
                      <span className="text-[11px] text-gray-500 font-sans mt-0.5">
                        {card.designation}
                      </span>
                    </div>
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
