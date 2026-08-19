'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  HelpCircle,
  Mail,
  Phone,
  Clock,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Heart,
} from 'lucide-react';
import ngoDataJson from '@/app/data/ngoData_structured.json';
import type {
  NgoData,
  NgoFaqSection,
  NgoFaqItem,
  NgoFaqSidebarItem,
} from '@/app/type/ngo';

const data = new Proxy(ngoDataJson as any, {
  get(target, prop: string) {
    if (prop === '$$typeof') return undefined;
    return target.NGO?.sections?.[prop]?.variants?.["Legacy_" + prop];
  }
});

const sidebarIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  mail: Mail,
  phone: Phone,
  clock: Clock,
};

export default function FaqSec() {
  const faqData = data.faqSection as NgoFaqSection | undefined;

  // Open first item by default matching the screenshot
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!faqData) return null;

  const { heading, description, sidebar, faqs } = faqData;

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#fcfdfc] mt-6 sm:mt-8 md:mt-10 lg:mt-14 pb-12">
      <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center">
          <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0d3319] leading-[1.2] sm:leading-[1.18]">
            {heading}
          </h2>

          {/* Heart Divider */}
          <div className="my-4 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-[#d3e0d1]" />
            <Heart className="h-3.5 w-3.5 fill-[#2c7a3f] text-[#2c7a3f]" />
            <span className="h-px w-12 bg-[#d3e0d1]" />
          </div>

          <p className="mx-auto max-w-xl text-center text-xs sm:text-sm md:text-base leading-relaxed text-gray-600 font-sans whitespace-pre-line">
            {description}
          </p>
        </div>

        {/* 2-Column Grid Layout */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12 sm:mt-16">
          
          {/* Left Column (Sidebar Support Box) */}
          <div className="lg:col-span-4">
            <div className="rounded-3xl border border-[#e5eae2] bg-[#f5f8f4] p-6 text-center shadow-sm sm:p-8">
              
              {/* Top Badge Icon */}
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e2ede0] text-[#1d5e2d]">
                <HelpCircle className="h-7 w-7 stroke-[1.75]" />
              </div>

              {/* Title & Subtitle */}
              <h3 className="font-serif text-2xl font-bold text-[#16351d]">
                {sidebar.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-[#59665b] sm:text-sm">
                {sidebar.description}
              </p>

              <hr className="my-6 border-[#e2e8e0]" />

              {/* Support Details List */}
              <div className="space-y-4 text-left">
                {sidebar.items.map((item: NgoFaqSidebarItem) => {
                  const ItemIcon = sidebarIconMap[item.icon] || Mail;

                  return (
                    <div key={item.id} className="flex items-start gap-3.5">
                      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#e2ede0] text-[#1d5e2d]">
                        <ItemIcon className="h-4 w-4 stroke-[2]" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-[#59665b]">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a href={item.href} className="text-xs font-bold text-[#16351d] hover:underline sm:text-sm">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-xs font-bold text-[#16351d] sm:text-sm">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Contact Us Button */}
              <div className="mt-8">
                <Link
                  href={sidebar.button.href || '/contactus'}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0c401a] px-6 py-3.5 text-xs font-semibold text-white shadow-sm transition hover:bg-[#16351d] sm:text-sm"
                >
                  <span>{sidebar.button.label}</span>
                  <ArrowRight className="h-4 w-4 text-white" />
                </Link>
              </div>

            </div>
          </div>

          {/* Right Column (Accordion List) */}
          <div className="lg:col-span-8">
            <div className="space-y-3.5">
              {faqs.map((faq: NgoFaqItem, index: number) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={faq.id}
                    className="group overflow-hidden rounded-2xl border border-[#e5eae2] bg-white shadow-sm transition-all duration-200 hover:border-[#1d5e2d]/40"
                  >
                    {/* Header Button */}
                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      className="flex w-full items-center justify-between px-6 py-4.5 text-left font-serif text-base font-bold text-[#16351d] transition-colors group-hover:text-[#1d5e2d] sm:text-lg"
                    >
                      <span className="pr-4">
                        {index + 1}. {faq.question}
                      </span>
                      {isOpen ? (
                        <ChevronUp className="h-5 w-5 shrink-0 text-[#1d5e2d]" />
                      ) : (
                        <ChevronDown className="h-5 w-5 shrink-0 text-[#8a998c] group-hover:text-[#1d5e2d]" />
                      )}
                    </button>

                    {/* Expandable Body */}
                    {isOpen && (
                      <div className="border-t border-[#f0f4ef] px-6 pt-2 pb-5 text-xs leading-relaxed text-[#59665b] sm:text-sm">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
