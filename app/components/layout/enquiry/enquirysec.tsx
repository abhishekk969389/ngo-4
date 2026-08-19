"use client";

import React, { useState } from "react";
import {
  Headset,
  Users,
  ShieldCheck,
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  User,
  Building2,
  FileText,
  ChevronDown,
  Info,
  Send,
} from "lucide-react";
import ngoDataJson from "@/app/data/ngoData_structured.json";
import type {
  NgoData,
  NgoEnquirySection,
  NgoEnquiryFeature,
} from "@/app/type/ngo";

const data = new Proxy(ngoDataJson as any, {
  get(target, prop: string) {
    if (prop === "$$typeof") return undefined;
    return target.NGO?.sections?.[prop]?.variants?.["Legacy_" + prop];
  },
});

const featureIconMap: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  headset: Headset,
  users: Users,
  shield: ShieldCheck,
};

export default function EnquirySec() {
  const enquiryData = data.enquirySection as NgoEnquirySection | undefined;

  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    company: "",
  });

  if (!enquiryData) return null;

  const { badge, heading, description, features, getInTouch, form } =
    enquiryData;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="bg-[#fcfdfc] mt-6 sm:mt-8 md:mt-10 lg:mt-14 pb-12">
      <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column (Info, Features & Get In Touch Card) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <p className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#0d3319] font-sans mb-3">
                {badge}
              </p>

              <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0d3319] leading-[1.2] sm:leading-[1.18] mb-4">
                {heading}
              </h2>

              <p className="text-xs sm:text-sm md:text-base leading-relaxed text-gray-600 font-sans whitespace-pre-line mb-8">
                {description}
              </p>

              <div className="space-y-6 mb-10">
                {features.map((feature: NgoEnquiryFeature) => {
                  const FeatureIcon = featureIconMap[feature.icon] || Headset;
                  return (
                    <div key={feature.id} className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#f0f6ef] text-[#1d5e2d]">
                        <FeatureIcon className="h-6 w-6 stroke-[1.75]" />
                      </div>
                      <div>
                        <h3 className="font-serif text-base font-bold text-[#16351d]">
                          {feature.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#59665b] leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-2xl border border-[#e2ece0] bg-[#f0f6ef] p-6 shadow-sm max-w-sm">
              <h3 className="font-serif text-lg font-bold text-[#16351d] mb-4">
                {getInTouch.title}
              </h3>
              <div className="space-y-3 text-xs sm:text-sm text-[#16351d]">
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-[#1d5e2d] shrink-0" />
                  <a
                    href={`tel:${getInTouch.phone}`}
                    className="font-semibold hover:underline"
                  >
                    {getInTouch.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-[#1d5e2d] shrink-0" />
                  <a
                    href={`mailto:${getInTouch.email}`}
                    className="font-semibold hover:underline"
                  >
                    {getInTouch.email}
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-[#1d5e2d] shrink-0 mt-0.5" />
                  <span className="font-semibold whitespace-pre-line">
                    {getInTouch.address}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Enquiry Form Card) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-[#e2ece0] bg-white p-6 sm:p-8 lg:p-10 shadow-sm border-t-4 border-t-[#0d4019] sm:rounded-3xl">
              {/* Form Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#f0f6ef] text-[#1d5e2d]">
                  <MessageSquare className="h-6 w-6 stroke-[1.75]" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#16351d] sm:text-3xl">
                    {form.header.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#59665b]">
                    {form.header.subtitle}
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* 2-Column Inputs Row 1 */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold text-[#16351d] mb-2">
                      {form.labels.fullName}
                    </label>
                    <div className="relative flex items-center">
                      <User className="absolute left-3.5 h-4 w-4 text-[#8a998c] pointer-events-none" />
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        placeholder={form.placeholders.fullName}
                        className="w-full rounded-xl border border-[#e2e8e0] bg-[#fafcf9] pl-10 pr-4 py-3 text-sm text-[#16351d] placeholder-[#9ca89e] transition focus:border-[#1d5e2d] focus:bg-white focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#16351d] mb-2">
                      {form.labels.email}
                    </label>
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
                        className="w-full rounded-xl border border-[#e2e8e0] bg-[#fafcf9] pl-10 pr-4 py-3 text-sm text-[#16351d] placeholder-[#9ca89e] transition focus:border-[#1d5e2d] focus:bg-white focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* 2-Column Inputs Row 2 */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold text-[#16351d] mb-2">
                      {form.labels.phone}
                    </label>
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
                        className="w-full rounded-xl border border-[#e2e8e0] bg-[#fafcf9] pl-10 pr-4 py-3 text-sm text-[#16351d] placeholder-[#9ca89e] transition focus:border-[#1d5e2d] focus:bg-white focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#16351d] mb-2">
                      {form.labels.subject}
                    </label>
                    <div className="relative flex items-center">
                      <select
                        required
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        className="w-full appearance-none rounded-xl border border-[#e2e8e0] bg-[#fafcf9] px-4 py-3 pr-10 text-sm text-[#16351d] transition focus:border-[#1d5e2d] focus:bg-white focus:outline-none"
                      >
                        <option value="" disabled>
                          {form.placeholders.subject}
                        </option>
                        {form.subjectOptions.map((opt, i) => (
                          <option key={i} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3.5 h-4 w-4 text-[#8a998c] pointer-events-none" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#16351d] mb-2">
                    {form.labels.company}
                  </label>
                  <div className="relative flex items-center">
                    <Building2 className="absolute left-3.5 h-4 w-4 text-[#8a998c] pointer-events-none" />
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      placeholder={form.placeholders.company}
                      className="w-full rounded-xl border border-[#e2e8e0] bg-[#fafcf9] pl-10 pr-4 py-3 text-sm text-[#16351d] placeholder-[#9ca89e] transition focus:border-[#1d5e2d] focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#16351d] mb-2">
                    {form.labels.message}
                  </label>
                  <div className="relative">
                    <FileText className="absolute left-3.5 top-3.5 h-4 w-4 text-[#8a998c] pointer-events-none" />
                    <textarea
                      required
                      maxLength={form.maxMessageLength}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={form.placeholders.message}
                      className="w-full min-h-[120px] rounded-xl border border-[#e2e8e0] bg-[#fafcf9] pl-10 pr-4 pt-3 pb-8 text-sm text-[#16351d] placeholder-[#9ca89e] transition focus:border-[#1d5e2d] focus:bg-white focus:outline-none resize-none"
                    />
                    <span className="absolute right-3.5 bottom-3 text-[11px] font-medium text-[#9ca89e]">
                      {message.length} / {form.maxMessageLength}
                    </span>
                  </div>
                </div>

                <div className="rounded-xl border border-[#e2ece0] bg-[#f0f6ef] p-4 flex items-start gap-3">
                  <Info className="h-5 w-5 text-[#1d5e2d] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-[#16351d]">
                      {form.infoBox.title}
                    </p>
                    <p className="text-xs text-[#59665b]">
                      {form.infoBox.subtitle}
                    </p>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-[#0d4019] py-3.5 px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-[#16351d] flex items-center justify-center gap-2"
                >
                  <Send className="h-4 w-4" />
                  <span>{form.submitButton.label}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
