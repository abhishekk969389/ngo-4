"use client";
import { site, SectionProps, SiteData } from "@/app/data";

import React, { useState } from "react";
import {
  BookOpen,
  Utensils,
  HeartPulse,
  Users,
  Lock,
  ShieldCheck,
  ChevronDown,
} from "lucide-react";
import type {
  NgoData,
  NgoDonateSection,
  NgoDonateTier,
  NgoDonateImpactItem,
} from "@/app/data";



const impactIconMap: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  "book-open": BookOpen,
  utensils: Utensils,
  "heart-pulse": HeartPulse,
  users: Users,
};

export default function DonateSec({ data: propData, className }: SectionProps<SiteData> = {}) {
  const data = propData || site;
  const donateData = data.donateSection as NgoDonateSection | undefined;

  const [selectedTierId, setSelectedTierId] = useState<number>(2); // Default to Medium tier (id 2)
  const [amount, setAmount] = useState<string>("50");
  const [currency, setCurrency] = useState<string>("USD ($)");
  const [isRecurring, setIsRecurring] = useState<boolean>(false);
  const [frequency, setFrequency] = useState<string>("Monthly");
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [isCountryOpen, setIsCountryOpen] = useState<boolean>(false);
  const [isCauseOpen, setIsCauseOpen] = useState<boolean>(false);
  const [isCurrencyOpen, setIsCurrencyOpen] = useState<boolean>(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    supportCause: "",
    isAnonymous: true,
    hasMessage: false,
    message: "",
  });

  if (!donateData) return null;

  const { heading, description, form, impactSidebar } = donateData;
  const { step1, step2 } = form;

  const handleTierSelect = (tier: NgoDonateTier) => {
    setSelectedTierId(tier.id);
    if (tier.amount > 0) {
      setAmount(tier.amount.toString());
    } else {
      setAmount("");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="bg-[#fcfdfc] mt-6 sm:mt-8 md:mt-10 lg:mt-14">
      <div className="mx-auto max-w-[1350px] px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="text-center">
          <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0d3319] leading-[1.2] sm:leading-[1.18]">
            {heading}
          </h2>

          <div className="mx-auto mt-2 mb-3 h-[2.5px] w-12 rounded-full bg-[#2c7a3f]" />

          <p className="mx-auto max-w-xl text-center text-xs sm:text-sm md:text-base leading-relaxed text-gray-600 font-sans">
            {description}
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-[1280px] grid-cols-1 overflow-hidden rounded-xl border border-[#e5eae2] bg-white shadow-sm lg:grid-cols-12 sm:mt-16">
          {/* Left Column (Donation Form) */}
          <div className="border-b border-[#e5eae2] p-6 sm:p-8 lg:col-span-6 lg:border-b-0 lg:border-r lg:p-10 xl:p-12">
            <form onSubmit={handleSubmit}>
              <div>
                <h3 className="font-serif text-xl font-bold text-[#1d5e2d] sm:text-2xl mb-4">
                  {step1.title}
                </h3>

                <div className="relative flex items-center mb-4 rounded-lg border border-[#e2e8e0] bg-white focus-within:border-[#1d5e2d] transition overflow-hidden">
                  <input
                    type="number"
                    min="1"
                    value={amount}
                    onChange={(e) => {
                      setAmount(e.target.value);
                      setSelectedTierId(4);
                    }}
                    placeholder={step1.amountPlaceholder}
                    className="w-full px-4 py-3.5 text-base font-semibold text-[#16351d] placeholder-[#9ca89e] focus:outline-none bg-transparent"
                  />
                  <div className="relative flex items-center border-l border-[#e2e8e0] bg-[#fafcf9] h-full shrink-0">
                    <button
                      type="button"
                      onClick={() => {
                        setIsCurrencyOpen(!isCurrencyOpen);
                        setIsCauseOpen(false);
                        setIsCountryOpen(false);
                        setIsDropdownOpen(false);
                      }}
                      className="no-animate flex items-center gap-2 py-3.5 pl-4 pr-3 text-xs font-bold text-[#16351d] focus:outline-none cursor-pointer"
                    >
                      <span>{currency}</span>
                      <ChevronDown
                        className={`h-3.5 w-3.5 text-[#8a998c] transition-transform duration-200 ${isCurrencyOpen ? "rotate-180" : ""
                          }`}
                      />
                    </button>

                    {isCurrencyOpen && (
                      <>
                        <div
                          className="fixed inset-0 z-20"
                          onClick={() => setIsCurrencyOpen(false)}
                        />
                        <div className="absolute right-0 top-full mt-1 w-28 rounded-lg border border-[#e2e8e0] bg-white py-1 shadow-lg z-30 overflow-hidden animate-in fade-in zoom-in-95 duration-100">
                          {step1.currencies.map((curr) => {
                            const isSelected = currency === curr.label;
                            return (
                              <button
                                key={curr.code}
                                type="button"
                                onClick={() => {
                                  setCurrency(curr.label);
                                  setIsCurrencyOpen(false);
                                }}
                                className={`no-animate w-full text-left px-3 py-2 text-xs font-bold transition-colors cursor-pointer ${isSelected
                                    ? "bg-[#1d5e2d] text-white"
                                    : "text-[#16351d] hover:bg-[#f4f7f4] hover:text-[#1d5e2d]"
                                  }`}
                              >
                                <span>{curr.label}</span>
                              </button>
                            );
                          })}
                        </div>
                      </>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 mb-5">
                  {step1.tiers.map((tier: NgoDonateTier) => {
                    const isSelected = selectedTierId === tier.id;

                    return (
                      <button
                        key={tier.id}
                        type="button"
                        onClick={() => handleTierSelect(tier)}
                        className={`no-animate flex flex-col items-center justify-center rounded-lg border p-3.5 text-center transition-all duration-200 ${isSelected
                            ? "border-[#1d5e2d] bg-[#1d5e2d] text-white shadow-sm"
                            : "border-[#e2e8e0] bg-white text-[#16351d] hover:border-[#1d5e2d]"
                          }`}
                      >
                        <span className="font-serif text-sm font-bold sm:text-base">
                          {tier.title}
                        </span>
                        <span
                          className={`mt-0.5 text-[11px] font-medium transition-colors ${isSelected ? "text-white/80" : "text-[#8a998c]"
                            }`}
                        >
                          {tier.subtext}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mt-2">
                  <label className="flex items-center gap-3 text-xs font-semibold text-[#16351d] cursor-pointer">
                    <input
                      type="checkbox"
                      checked={isRecurring}
                      onChange={(e) => setIsRecurring(e.target.checked)}
                      className="h-4 w-4 rounded border-[#c5d4c3] text-[#1d5e2d] focus:ring-[#1d5e2d] accent-[#1d5e2d] cursor-pointer"
                    />
                    <span>{step1.recurringLabel}</span>
                  </label>

                  <div className="relative inline-block">
                    <button
                      type="button"
                      disabled={!isRecurring}
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="no-animate flex items-center gap-2 rounded-lg border border-[#c5d4c3] bg-[#f4f7f4] py-2 px-3.5 text-xs font-bold text-[#1d5e2d] hover:border-[#1d5e2d] focus:outline-none focus:ring-1 focus:ring-[#1d5e2d] disabled:opacity-50 disabled:bg-gray-100 disabled:text-gray-400 cursor-pointer transition-all"
                    >
                      <span>{frequency}</span>
                      <ChevronDown
                        className={`h-3.5 w-3.5 text-[#1d5e2d] transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""
                          }`}
                      />
                    </button>

                    {isDropdownOpen && isRecurring && (
                      <>
                        <div
                          className="fixed inset-0 z-20"
                          onClick={() => setIsDropdownOpen(false)}
                        />
                        <div className="absolute right-0 mt-1.5 w-32 rounded-lg border border-[#e2e8e0] bg-white py-1 shadow-lg z-30 overflow-hidden animate-in fade-in zoom-in-95 duration-100">
                          {step1.frequencies.map((freq, i) => {
                            const isSelected = frequency === freq;
                            return (
                              <button
                                key={i}
                                type="button"
                                onClick={() => {
                                  setFrequency(freq);
                                  setIsDropdownOpen(false);
                                }}
                                className={`no-animate w-full text-left px-3 py-2 text-xs font-semibold transition-colors flex items-center justify-between cursor-pointer ${isSelected
                                    ? "bg-[#1d5e2d] text-white"
                                    : "text-[#16351d] hover:bg-[#f4f7f4] hover:text-[#1d5e2d]"
                                  }`}
                              >
                                <span>{freq}</span>
                              </button>
                            );
                          })}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <hr className="my-6 border-t border-[#e5eae2]" />

              <div className="">
                <h3 className="font-serif text-xl font-bold text-[#1d5e2d] sm:text-2xl">
                  {step2.title}
                </h3>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      placeholder={step2.placeholders.fullName}
                      className="w-full rounded-lg border border-[#e2e8e0] bg-white px-4 py-3 text-sm text-[#16351d] placeholder-[#9ca89e] transition focus:border-[#1d5e2d] focus:bg-white focus:outline-none"
                    />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder={step2.placeholders.email}
                      className="w-full rounded-lg border border-[#e2e8e0] bg-white px-4 py-3 text-sm text-[#16351d] placeholder-[#9ca89e] transition focus:border-[#1d5e2d] focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder={step2.placeholders.phone}
                      className="w-full rounded-lg border border-[#e2e8e0] bg-white px-4 py-3 text-sm text-[#16351d] placeholder-[#9ca89e] transition focus:border-[#1d5e2d] focus:bg-white focus:outline-none"
                    />

                    <div className="relative w-full">
                      <button
                        type="button"
                        onClick={() => {
                          setIsCountryOpen(!isCountryOpen);
                          setIsCauseOpen(false);
                          setIsDropdownOpen(false);
                          setIsCurrencyOpen(false);
                        }}
                        className="no-animate w-full flex items-center justify-between rounded-lg border border-[#e2e8e0] bg-white px-4 py-3 text-sm transition focus:border-[#1d5e2d] focus:outline-none cursor-pointer"
                      >
                        <span
                          className={
                            formData.country
                              ? "text-[#16351d] font-semibold"
                              : "text-[#9ca89e]"
                          }
                        >
                          {formData.country || step2.placeholders.country}
                        </span>
                        <ChevronDown
                          className={`h-4 w-4 text-[#8a998c] transition-transform duration-200 ${isCountryOpen ? "rotate-180" : ""
                            }`}
                        />
                      </button>

                      {isCountryOpen && (
                        <>
                          <div
                            className="fixed inset-0 z-20"
                            onClick={() => setIsCountryOpen(false)}
                          />
                          <div className="absolute left-0 right-0 mt-1 rounded-lg border border-[#e2e8e0] bg-white py-1 shadow-lg z-30 max-h-48 overflow-y-auto animate-in fade-in zoom-in-95 duration-100">
                            {step2.countryOptions.map((c, i) => {
                              const isSelected = formData.country === c;
                              return (
                                <button
                                  key={i}
                                  type="button"
                                  onClick={() => {
                                    setFormData({ ...formData, country: c });
                                    setIsCountryOpen(false);
                                  }}
                                  className={`no-animate w-full text-left px-4 py-2.5 text-sm transition-colors flex items-center justify-between cursor-pointer ${isSelected
                                      ? "bg-[#1d5e2d] text-white font-semibold"
                                      : "text-[#16351d] hover:bg-[#f4f7f4] hover:text-[#1d5e2d]"
                                    }`}
                                >
                                  <span>{c}</span>
                                </button>
                              );
                            })}
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="relative w-full">
                    <button
                      type="button"
                      onClick={() => {
                        setIsCauseOpen(!isCauseOpen);
                        setIsCountryOpen(false);
                        setIsDropdownOpen(false);
                        setIsCurrencyOpen(false);
                      }}
                      className="no-animate w-full flex items-center justify-between rounded-lg border border-[#e2e8e0] bg-white px-4 py-3 text-sm transition focus:border-[#1d5e2d] focus:outline-none cursor-pointer"
                    >
                      <span
                        className={
                          formData.supportCause
                            ? "text-[#16351d] font-semibold"
                            : "text-[#9ca89e]"
                        }
                      >
                        {formData.supportCause || step2.placeholders.supportCause}
                      </span>
                      <ChevronDown
                        className={`h-4 w-4 text-[#8a998c] transition-transform duration-200 ${isCauseOpen ? "rotate-180" : ""
                          }`}
                      />
                    </button>

                    {isCauseOpen && (
                      <>
                        <div
                          className="fixed inset-0 z-20"
                          onClick={() => setIsCauseOpen(false)}
                        />
                        <div className="absolute left-0 right-0 mt-1 rounded-lg border border-[#e2e8e0] bg-white py-1 shadow-lg z-30 max-h-56 overflow-y-auto animate-in fade-in zoom-in-95 duration-100">
                          {step2.causeOptions.map((cause, i) => {
                            const isSelected = formData.supportCause === cause;
                            return (
                              <button
                                key={i}
                                type="button"
                                onClick={() => {
                                  setFormData({ ...formData, supportCause: cause });
                                  setIsCauseOpen(false);
                                }}
                                className={`no-animate w-full text-left px-4 py-2.5 text-sm transition-colors flex items-center justify-between cursor-pointer ${isSelected
                                    ? "bg-[#1d5e2d] text-white font-semibold"
                                    : "text-[#16351d] hover:bg-[#f4f7f4] hover:text-[#1d5e2d]"
                                  }`}
                              >
                                <span>{cause}</span>
                              </button>
                            );
                          })}
                        </div>
                      </>
                    )}
                  </div>

                  <div className="space-y-3 pt-2">
                    <label className="flex items-center gap-3 text-xs font-semibold text-[#16351d] cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.isAnonymous}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            isAnonymous: e.target.checked,
                          })
                        }
                        className="h-4 w-4 rounded border-[#c5d4c3] text-[#1d5e2d] focus:ring-[#1d5e2d] accent-[#1d5e2d] cursor-pointer"
                      />
                      <span>{step2.anonymousLabel}</span>
                    </label>

                    <label className="flex items-center gap-3 text-xs font-semibold text-[#16351d] cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.hasMessage}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            hasMessage: e.target.checked,
                          })
                        }
                        className="h-4 w-4 rounded border-[#c5d4c3] text-[#1d5e2d] focus:ring-[#1d5e2d] accent-[#1d5e2d] cursor-pointer"
                      />
                      <span>{step2.addMessageLabel}</span>
                    </label>
                  </div>

                  {formData.hasMessage && (
                    <textarea
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder={step2.messagePlaceholder}
                      className="w-full rounded-lg border border-[#e2e8e0] bg-white p-4 text-sm text-[#16351d] placeholder-[#9ca89e] transition focus:border-[#1d5e2d] focus:bg-white focus:outline-none min-h-[90px] resize-none"
                    />
                  )}

                  <button
                    type="submit"
                    className="no-animate w-full rounded-lg bg-[#1d5e2d] py-4 px-6 text-base font-bold text-white shadow-sm transition hover:bg-[#164722] flex items-center justify-center gap-2 mt-6"
                  >
                    <Lock className="h-4 w-4 text-white" />
                    <span>{step2.submitButton.label}</span>
                  </button>

                  <div className="flex items-center justify-center gap-2 pt-1 text-xs text-[#59665b]">
                    <ShieldCheck className="h-4 w-4 text-[#1d5e2d]" />
                    <span>{step2.securityNotice.text}</span>
                  </div>
                </div>
              </div>
            </form>
          </div>

          {/* Right Column (Where Your Donation Goes Sidebar) */}
          <div className="bg-white p-6 sm:p-8 lg:col-span-6 lg:p-10 xl:p-12 flex flex-col h-full">
            <div className="flex flex-col h-full justify-between">
              <div>
                <h3 className="font-serif text-xl font-bold text-[#1d5e2d] sm:text-2xl">
                  {impactSidebar.title}
                </h3>
                <div className="mt-2 mb-6 sm:mb-8 h-[2.5px] w-10 rounded-full bg-[#1d5e2d]" />
              </div>

              <div className="flex-1 flex flex-col justify-between py-2">
                {impactSidebar.items.map(
                  (item: NgoDonateImpactItem, idx: number) => {
                    const ImpactIcon = impactIconMap[item.icon] || BookOpen;

                    return (
                      <div
                        key={item.id}
                        className={`flex items-start gap-4 py-1.5 ${idx < impactSidebar.items.length - 1
                            ? "border-b border-[#e5eae2] pb-5 sm:pb-6"
                            : ""
                          }`}
                      >
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#e2ede0] text-[#1d5e2d]">
                          <ImpactIcon className="h-6 w-6 stroke-[1.5]" />
                        </div>
                        <div>
                          <h4 className="font-serif text-base font-bold text-[#16351d] sm:text-lg">
                            {item.title}
                          </h4>
                          <p className="mt-0.5 text-xs text-[#59665b] leading-relaxed sm:text-sm">
                            {item.description}
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
      </div>
    </section>
  );
}
