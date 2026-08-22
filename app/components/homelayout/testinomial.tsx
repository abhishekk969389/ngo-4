"use client";
import { site, SectionProps, NGOtestimonialsData } from "@/app/data";

import { useState, useEffect } from "react";
import Image from "next/image";
import { IconQuote, IconStarFilled } from "@tabler/icons-react";
import { Heart, ChevronLeft, ChevronRight } from "lucide-react";



interface TestimonialProps extends SectionProps<NGOtestimonialsData> {
  isSlider?: boolean;
}

export default function Testinomial({ data, className, isSlider = true }: TestimonialProps = {}) {
  const testimonials = data || site.testimonials;
  const cards = testimonials?.cards || [];

  // Tripled list for continuous smooth sliding when in slider mode
  const allCards = isSlider ? [...cards, ...cards, ...cards] : cards;

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!isSlider || isPaused || cards.length === 0) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cards.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [isSlider, isPaused, cards.length]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % cards.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  return (
    <section className="bg-white overflow-hidden">
      <div className="mx-auto max-w-[1350px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <h2 className="text-center text-3xl sm:text-5xl font-black text-[#04240d] font-serif leading-tight">
            {testimonials?.heading?.prefix}{" "}
            <span className="text-[#2c7a3f]">
              {testimonials?.heading?.highlight}
            </span>
            <br />
            {testimonials?.heading?.suffix}
          </h2>

          <div className="flex items-center justify-center gap-3 text-xs sm:text-sm font-extrabold tracking-widest text-[#2c7a3f] uppercase font-sans mt-3">
            <div className="w-10 h-[1.5px] bg-[#2c7a3f]/30"></div>
            <Heart className="h-4 w-4 text-[#2c7a3f] fill-current" />
            <div className="w-10 h-[1.5px] bg-[#2c7a3f]/30"></div>
          </div>
        </div>

        {isSlider ? (
          /* SLIDER MODE (Home Page) */
          <div
            className="relative mt-8 px-0 sm:px-12 lg:px-14"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Left Button (Hidden on mobile, matching smilecauses.tsx layout) */}
            <button
              onClick={handlePrev}
              className="absolute left-0 lg:left-1 top-1/2 -translate-y-1/2 z-20 hidden sm:flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white shadow-lg border border-gray-100 text-[#0c4d1e] hover:bg-[#0c4d1e] hover:text-white transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>

            {/* Right Button (Hidden on mobile, matching smilecauses.tsx layout) */}
            <button
              onClick={handleNext}
              className="absolute right-0 lg:right-1 top-1/2 -translate-y-1/2 z-20 hidden sm:flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white shadow-lg border border-gray-100 text-[#0c4d1e] hover:bg-[#0c4d1e] hover:text-white transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>

            {/* Carousel Track */}
            <div className="mx-auto max-w-[1068px] overflow-hidden mb-4 sm:mb-8">
              <div
                className="flex gap-6 transition-transform duration-700 ease-in-out"
                style={{
                  transform: isMobile
                    ? `translateX(calc(-${activeIndex} * (100% + 24px)))`
                    : `translateX(-${activeIndex * 364}px)`,
                }}
              >
                {allCards.map((card, idx) => {
                  const isCenter = isMobile
                    ? idx % cards.length === activeIndex % cards.length
                    : idx === activeIndex + 1;
                  const activeThemeColor = isCenter ? "#f59e0b" : "#174324";

                  return (
                    <div
                      key={`${card.id}-${idx}`}
                      className="flex-shrink-0 w-full sm:w-[340px] bg-white rounded-2xl p-6 sm:p-8 pt-0 flex flex-col transition-all duration-500 ease-in-out shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-100 relative"
                      style={{
                        borderBottomWidth: "4px",
                        borderBottomColor: activeThemeColor,
                      }}
                    >
                      <div className="flex flex-col flex-grow">
                        <div className="relative flex items-center justify-center pt-8 mb-6">
                          <div
                            className="absolute h-[1.5px] w-[85%] transition-colors duration-500"
                            style={{ backgroundColor: activeThemeColor }}
                          ></div>
                          <div className="relative bg-white px-5 z-10">
                            <div
                              className="w-[52px] h-[52px] rounded-full flex items-center justify-center text-white transition-all duration-500"
                              style={{ backgroundColor: activeThemeColor }}
                            >
                              <svg className="w-[22px] h-[22px] text-white" viewBox="0 0 448 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64h-64c-35.3 0-64-28.7-64-64V216z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-center gap-1.5 mb-5">
                          {Array.from({ length: card.rating }).map((_, i) => (
                            <IconStarFilled
                              key={i}
                              className="w-4 h-4 text-[#f59e0b]"
                            />
                          ))}
                        </div>
                        <p className="text-[14px] text-gray-600 leading-[1.8] text-center font-sans tracking-wide mb-3">
                          {card.feedback}
                        </p>
                      </div>
                      <div className="flex items-center gap-4 justify-center mt-auto">
                        <div
                          className="relative w-[64px] h-[64px] rounded-full overflow-hidden border-[2px] transition-colors duration-500 flex-shrink-0"
                          style={{ borderColor: activeThemeColor }}
                        >
                          <Image
                            src={card.image}
                            alt={card.name}
                            fill
                            className="object-cover p-0.5 rounded-full"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                        </div>
                        <div className="flex flex-col text-left">
                          <span className="text-[17px] font-bold text-gray-900 font-sans leading-tight">
                            {card.name}
                          </span>
                          <span className="text-[13px] text-gray-500 font-sans mt-1">
                            {card.designation}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Mobile Dots Pagination */}
            <div className="flex justify-center items-center gap-2 pb-4 sm:hidden">
              {cards.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeIndex % cards.length === idx
                      ? "w-6 bg-[#2c7a3f]"
                      : "w-2 bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        ) : (
          /* GRID / LIST MODE (Testimonial Page) */
          <div className="mt-10 mb-12 max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cards.map((card, idx) => {
              const activeThemeColor = "#174324";
              return (
                <div
                  key={`${card.id}-${idx}`}
                  className="bg-white rounded-2xl p-8 pt-0 flex flex-col shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-100 relative hover:shadow-xl transition-shadow duration-300"
                  style={{
                    borderBottomWidth: "4px",
                    borderBottomColor: activeThemeColor,
                  }}
                >
                  <div className="flex flex-col flex-grow">
                    <div className="relative flex items-center justify-center pt-8 mb-6">
                      <div
                        className="absolute h-[1.5px] w-[85%]"
                        style={{ backgroundColor: activeThemeColor }}
                      ></div>
                      <div className="relative bg-white px-5 z-10">
                        <div
                          className="w-[52px] h-[52px] rounded-full flex items-center justify-center text-white"
                          style={{ backgroundColor: activeThemeColor }}
                        >
                          <svg className="w-[22px] h-[22px] text-white" viewBox="0 0 448 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64h-64c-35.3 0-64-28.7-64-64V216z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center gap-1.5 mb-5">
                      {Array.from({ length: card.rating }).map((_, i) => (
                        <IconStarFilled
                          key={i}
                          className="w-4 h-4 text-[#f59e0b]"
                        />
                      ))}
                    </div>
                    <p className="text-[14px] text-gray-600 leading-[1.8] text-center font-sans tracking-wide mb-6">
                      {card.feedback}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 justify-center mt-auto">
                    <div
                      className="relative w-[64px] h-[64px] rounded-full overflow-hidden border-[2px] flex-shrink-0"
                      style={{ borderColor: activeThemeColor }}
                    >
                      <Image
                        src={card.image}
                        alt={card.name}
                        fill
                        className="object-cover p-0.5 rounded-full"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-[17px] font-bold text-gray-900 font-sans leading-tight">
                        {card.name}
                      </span>
                      <span className="text-[13px] text-gray-500 font-sans mt-1">
                        {card.designation}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

