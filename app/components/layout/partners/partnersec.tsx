'use client';

import React from 'react';
import Image from 'next/image';
import ngoDataJson from '@/app/data/ngoData_structured.json';
import type { NgoData } from '@/app/type/ngo';

const data = new Proxy(ngoDataJson as any, {
  get(target, prop: string) {
    if (prop === '$$typeof') return undefined;
    return target.NGO?.sections?.[prop]?.variants?.["Legacy_" + prop];
  }
});

export default function PartnerSec() {
  const partnersData = data.partnersSection as any;

  if (!partnersData) return null;

  // Dynamically split heading to highlight specified text or the last word
  const headingText = partnersData.heading;
  const highlightWord = partnersData.highlightedText || 'Partners';
  
  const headingParts = headingText.split(new RegExp(`(${highlightWord})`, 'gi'));

  return (
    <section className="bg-[#fcfdfc] mt-6 sm:mt-8 md:mt-10 lg:mt-14">
      <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center">
          <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0d3319] leading-[1.2] sm:leading-[1.18]">
            {headingParts.map((part: any, index: any) =>
              part.toLowerCase() === highlightWord.toLowerCase() ? (
                <span key={index} className="text-[#2c7a3f]">
                  {part}
                </span>
              ) : (
                <span key={index}>{part}</span>
              )
            )}
          </h2>

          {/* Underline Bar */}
          <div className="my-4 flex justify-center">
            <span className="h-[2.5px] w-12 rounded-full bg-[#2c7a3f]" />
          </div>

          <p className="mx-auto max-w-xl text-center text-xs sm:text-sm md:text-base leading-relaxed text-gray-600 font-sans">
            {partnersData.description}
          </p>
        </div>

        {/* 5-Column Logo Cards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 sm:mt-16 lg:gap-5">
          {partnersData.partners.map((partner: any) => (
            <a
              key={partner.id}
              href={partner.href || '#'}
              className="group flex h-24 items-center justify-center rounded-2xl border border-[#e5eae2] bg-white p-4 transition-all duration-300 hover:border-[#1d5e2d]/40 hover:shadow-md"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={140}
                height={50}
                className="max-h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
