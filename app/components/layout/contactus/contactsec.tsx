"use client";
import { site, SectionProps, SiteData } from "@/app/data";

import React, { useState } from "react";
import {
  User,
  Mail,
  Phone,
  MessageSquare,
  Pencil,
  ArrowRight,
  MapPin,
  Heart,
} from "lucide-react";
import type {
  NgoData,
  NgoContactUsSection,
  NgoContactInfoDetailItem,
} from "@/app/data";



const infoIconMap: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  phone: Phone,
  mail: Mail,
  "map-pin": MapPin,
};

export default function ContactSec({ data: propData, className }: SectionProps<SiteData> = {}) {
  const data = propData || site;
  const contactData = data.contactUsSection as NgoContactUsSection | undefined;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  if (!contactData) return null;

  const { heading, description, form, info } = contactData;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="bg-[#fcfdfc] mt-6 sm:mt-8 md:mt-10 lg:mt-14 pb-12">
      <div className="mx-auto max-w-[1350px] px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0d3319] leading-[1.2] sm:leading-[1.18]">
            {heading}
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-center text-xs sm:text-sm md:text-base leading-relaxed text-gray-600 font-sans whitespace-pre-line">
            {description}
          </p>

          <div className="my-6 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-[#d3e0d1]" />
            <Heart className="h-3.5 w-3.5 fill-[#2c7a3f] text-[#2c7a3f]" />
            <span className="h-px w-12 bg-[#d3e0d1]" />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-[#e5eae2] bg-white p-6 shadow-sm sm:p-8 lg:p-10">
              <h3 className="font-serif text-2xl font-bold text-[#16351d] sm:text-3xl">
                {form.title}
              </h3>
              <p className="mt-1 mb-6 text-xs text-[#59665b] sm:text-sm">
                {form.subtitle}
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="relative flex items-center">
                    <User className="absolute left-3.5 h-4 w-4 text-[#8a998c] pointer-events-none" />
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder={form.placeholders.name}
                      className="w-full rounded-2xl border border-[#e2e8e0] bg-[#fafcf9] pl-10 pr-4 py-3 text-sm text-[#16351d] placeholder-[#9ca89e] transition focus:border-[#1d5e2d] focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div className="relative flex items-center">
                    <Mail className="absolute left-3.5 h-4 w-4 text-[#8a998c] pointer-events-none" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder={form.placeholders.email}
                      className="w-full rounded-2xl border border-[#e2e8e0] bg-[#fafcf9] pl-10 pr-4 py-3 text-sm text-[#16351d] placeholder-[#9ca89e] transition focus:border-[#1d5e2d] focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                {/* 2-Column Fields Row 2 */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="relative flex items-center">
                    <Phone className="absolute left-3.5 h-4 w-4 text-[#8a998c] pointer-events-none" />
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder={form.placeholders.phone}
                      className="w-full rounded-2xl border border-[#e2e8e0] bg-[#fafcf9] pl-10 pr-4 py-3 text-sm text-[#16351d] placeholder-[#9ca89e] transition focus:border-[#1d5e2d] focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div className="relative flex items-center">
                    <MessageSquare className="absolute left-3.5 h-4 w-4 text-[#8a998c] pointer-events-none" />
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      placeholder={form.placeholders.subject}
                      className="w-full rounded-2xl border border-[#e2e8e0] bg-[#fafcf9] pl-10 pr-4 py-3 text-sm text-[#16351d] placeholder-[#9ca89e] transition focus:border-[#1d5e2d] focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                <div className="relative">
                  <Pencil className="absolute left-3.5 top-3.5 h-4 w-4 text-[#8a998c] pointer-events-none" />
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder={form.placeholders.message}
                    className="w-full min-h-[140px] rounded-2xl border border-[#e2e8e0] bg-[#fafcf9] pl-10 pr-4 pt-3 pb-3 text-sm text-[#16351d] placeholder-[#9ca89e] transition focus:border-[#1d5e2d] focus:bg-white focus:outline-none resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-full bg-[#0c401a] px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#16351d]"
                  >
                    <span>{form.submitButton.label}</span>
                    <ArrowRight className="h-4 w-4 text-white" />
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-[#e5eae2] bg-[#f5f8f4] p-6 shadow-sm sm:p-8 lg:p-10">
              <h3 className="font-serif text-2xl font-bold text-[#16351d] sm:text-3xl">
                {info.title}
              </h3>
              <div className="mt-2 mb-6 h-[2.5px] w-10 rounded-full bg-[#1d5e2d]" />

              <div className="space-y-6">
                {info.items.map(
                  (item: NgoContactInfoDetailItem, idx: number) => {
                    const InfoIcon = infoIconMap[item.icon] || Phone;

                    return (
                      <div
                        key={item.id}
                        className={`flex items-start gap-4 ${idx < info.items.length - 1
                            ? "border-b border-[#e2e8e0] pb-6"
                            : ""
                          }`}
                      >
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#e2ede0] text-[#1d5e2d]">
                          <InfoIcon className="h-5 w-5 stroke-[1.75]" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-[#59665b]">
                            {item.label}
                          </p>
                          <p className="mt-0.5 text-base font-bold text-[#1d5e2d]">
                            {item.value}
                          </p>
                          <p className="mt-0.5 text-xs text-[#59665b]">
                            {item.subtext}
                          </p>
                        </div>
                      </div>
                    );
                  },
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 md:mt-10 lg:mt-14">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224356.85923192592!2d77.23701088488971!3d28.522404036526275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1786345160037!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            className="rounded-[20px] "
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
