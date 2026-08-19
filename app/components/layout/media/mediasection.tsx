"use client";

import React from "react";
import ngoDataJson from "@/app/data/ngoData_structured.json";
import type { NgoData, NgoMediaSection, NgoMediaOutlet } from "@/app/type/ngo";

const data = new Proxy(ngoDataJson as any, {
  get(target, prop: string) {
    if (prop === "$$typeof") return undefined;
    return target.NGO?.sections?.[prop]?.variants?.["Legacy_" + prop];
  },
});

const renderIcon = (iconName: string) => {
  const colorClass = "text-[#1a3520]";

  switch (iconName) {
    case "feather":
      return (
        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center ${colorClass}`}
        >
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L3 13.5V21h7.5L20.24 12.24z" />
            <line x1="16" y1="8" x2="2" y2="22" />
            <line x1="17.5" y1="15" x2="9" y2="15" />
          </svg>
        </div>
      );

    case "landmark":
      return (
        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center ${colorClass}`}
        >
          <svg
            className="h-9 w-9"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2L3 7v2h18V7l-9-5z" />
            <path d="M5 11v8" />
            <path d="M9 11v8" />
            <path d="M13 11v8" />
            <path d="M17 11v8" />
            <path d="M3 21h18" />
            <path
              d="M12 2L2 9h20L12 2z"
              fill="currentColor"
              fillOpacity="0.1"
            />
          </svg>
        </div>
      );

    case "sunrise":
      return (
        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center ${colorClass}`}
        >
          <svg
            className="h-9 w-9"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2v4M4.93 10.93l2.83 2.83M2 18h20M20 18a8 8 0 0 0-16 0" />
            <path d="M19.07 10.93l-2.83 2.83" />
            <path d="M22 18H2" />
            <line x1="8" y1="6" x2="10" y2="8" />
            <line x1="16" y1="6" x2="14" y2="8" />
          </svg>
        </div>
      );

    case "message-square":
      return (
        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center ${colorClass}`}
        >
          <svg className="h-9 w-9" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.04 2 11c0 2.87 1.5 5.42 3.84 7.08L5 22l4.34-1.45C10.22 20.85 11.1 21 12 21c5.52 0 10-4.04 10-9s-4.48-9-10-9zm-1 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
          </svg>
        </div>
      );

    case "tree":
      return (
        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center ${colorClass}`}
        >
          <svg
            className="h-9 w-9"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 19v3" />
            <path
              d="M12 19c-4 0-7-2.5-7-6a7 7 0 0 1 14 0c0 3.5-3 6-7 6z"
              fill="currentColor"
              fillOpacity="0.15"
            />
            <path d="M12 15c-2.5 0-4-1.5-4-3.5a4 4 0 0 1 8 0c0 2-1.5 3.5-4 3.5z" />
            <path d="M9 21h6" />
          </svg>
        </div>
      );

    case "building-2":
      return (
        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center ${colorClass}`}
        >
          <svg className="h-9 w-9" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 21V9l-5-4-5 4v12H3v2h18v-2h-2zm-8-2H9v-2h2v2zm0-4H9v-2h2v2zm0-4H9V9h2v2zm4 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V9h2v2z" />
          </svg>
        </div>
      );

    case "chart":
      return (
        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center ${colorClass}`}
        >
          <svg
            className="h-9 w-9"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
            <line x1="8" y1="13" x2="8" y2="11" />
            <line x1="11" y1="13" x2="11" y2="9" />
            <line x1="14" y1="13" x2="14" y2="7" />
          </svg>
        </div>
      );

    case "globe":
      return (
        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center ${colorClass}`}
        >
          <svg
            className="h-9 w-9"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
        </div>
      );

    case "users":
      return (
        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center ${colorClass}`}
        >
          <svg className="h-9 w-9" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
          </svg>
        </div>
      );

    case "metro":
      return (
        <div className="flex h-10 w-11 shrink-0 items-center justify-center rounded-sm bg-[#1a3520] text-white font-serif font-bold text-sm tracking-tighter shadow-sm">
          MR
        </div>
      );

    case "viewpoint":
      return (
        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center ${colorClass}`}
        >
          <svg className="h-9 w-9" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 22h5l5-10 5 10h5L12 2zm0 6l3.5 7h-7L12 8z" />
          </svg>
        </div>
      );

    case "columns":
      return (
        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center ${colorClass}`}
        >
          <svg
            className="h-9 w-9"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="4" y1="4" x2="20" y2="4" />
            <line x1="4" y1="20" x2="20" y2="20" />
            <line x1="6" y1="4" x2="6" y2="20" />
            <line x1="10" y1="4" x2="10" y2="20" />
            <line x1="14" y1="4" x2="14" y2="20" />
            <line x1="18" y1="4" x2="18" y2="20" />
          </svg>
        </div>
      );

    case "mountain":
      return (
        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center ${colorClass}`}
        >
          <svg className="h-9 w-9" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14 6l-3.8 5.7 1.8 2.7H20L14 6zM8 2L1 14h14L8 2zm0 4.2l3.2 5.8H4.8L8 6.2z" />
          </svg>
        </div>
      );

    case "pen-nib":
      return (
        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-[#1a3520] p-1.5 ${colorClass}`}
        >
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L8.5 8.5 12 22l3.5-13.5L12 2zm0 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
          </svg>
        </div>
      );

    case "newspaper":
      return (
        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center ${colorClass}`}
        >
          <svg
            className="h-9 w-9"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="4" y="3" width="16" height="18" rx="2" strokeWidth="2" />
            <line x1="8" y1="7" x2="12" y2="7" strokeWidth="2.5" />
            <line x1="8" y1="11" x2="16" y2="11" />
            <line x1="8" y1="14" x2="16" y2="14" />
            <line x1="8" y1="17" x2="13" y2="17" />
          </svg>
        </div>
      );

    default:
      return (
        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center ${colorClass}`}
        >
          <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="8" />
          </svg>
        </div>
      );
  }
};

export default function MediaSection() {
  const mediaData = data.mediaSection as NgoMediaSection | undefined;

  if (!mediaData) return null;

  return (
    <section className="bg-[#fcfdfc] mt-6 sm:mt-8 md:mt-10 lg:mt-14 pb-12">
      <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center">
          <p className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] text-[#0d3319] font-sans">
            {mediaData.badge}
          </p>

          <h2 className="mt-2 font-serif text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0d3319] leading-[1.2] sm:leading-[1.18]">
            {mediaData.heading}
          </h2>

          <div className="my-4 flex justify-center">
            <span className="h-[2.5px] w-12 rounded-full bg-[#2c7a3f]" />
          </div>

          <p className="mx-auto max-w-xl text-center text-xs sm:text-sm md:text-base leading-relaxed text-gray-600 font-sans">
            {mediaData.description}
          </p>
        </div>

        {/* Media Mentions Outlet Grid (5 columns on desktop) */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-5">
          {mediaData.outlets.map((outlet: NgoMediaOutlet) => (
            <a
              key={outlet.id}
              href={outlet.href || "#"}
              className="group flex min-h-[92px] items-center gap-3.5 rounded-xl border border-[#e5eae2] bg-white p-4 transition-all duration-300 hover:border-[#1b3d22]/40 hover:shadow-md"
            >
              {renderIcon(outlet.icon)}

              <span className="text-xs font-bold uppercase leading-tight tracking-wider text-[#1a331e] sm:text-sm group-hover:text-[#2c5832]">
                {outlet.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
