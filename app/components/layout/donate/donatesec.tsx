'use client';

import React, { useState } from 'react';
import {
  BookOpen,
  Utensils,
  HeartPulse,
  Users,
  Lock,
  ShieldCheck,
  ChevronDown,
} from 'lucide-react';
import ngoDataJson from '@/app/data/ngoData_structured.json';
import type {
  NgoData,
  NgoDonateSection,
  NgoDonateTier,
  NgoDonateImpactItem,
} from '@/app/type/ngo';

const data = new Proxy(ngoDataJson as any, {
  get(target, prop: string) {
    if (prop === '$$typeof') return undefined;
    return target.NGO?.sections?.[prop]?.variants?.["Legacy_" + prop];
  }
});

const impactIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'book-open': BookOpen,
  utensils: Utensils,
  'heart-pulse': HeartPulse,
  users: Users,
};

export default function DonateSec() {
  const donateData = data.donateSection as NgoDonateSection | undefined;

  const [selectedTierId, setSelectedTierId] = useState<number>(2); // Default to Medium tier (id 2)
  const [amount, setAmount] = useState<string>('50');
  const [currency, setCurrency] = useState<string>('USD ($)');
  const [isRecurring, setIsRecurring] = useState<boolean>(false);
  const [frequency, setFrequency] = useState<string>('Monthly');

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    supportCause: '',
    isAnonymous: true,
    hasMessage: false,
    message: '',
  });

  if (!donateData) return null;

  const { heading, description, form, impactSidebar } = donateData;
  const { step1, step2 } = form;

  const handleTierSelect = (tier: NgoDonateTier) => {
    setSelectedTierId(tier.id);
    if (tier.amount > 0) {
      setAmount(tier.amount.toString());
    } else {
      setAmount('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="bg-[#fcfdfc] mt-6 sm:mt-8 md:mt-10 lg:mt-14">
      <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
        
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

        {/* Main Card Grid */}
        <div className="mx-auto mt-12 grid max-w-[1280px] grid-cols-1 overflow-hidden rounded-3xl border border-[#e5eae2] bg-white shadow-sm lg:grid-cols-12 sm:mt-16">
          
          {/* Left Column (Donation Form) */}
          <div className="border-b border-[#e5eae2] p-6 sm:p-8 lg:col-span-7 lg:border-b-0 lg:border-r lg:p-10">
            <form onSubmit={handleSubmit}>
              
              {/* Step 1: Choose Your Contribution */}
              <div>
                <h3 className="font-serif text-xl font-bold text-[#16351d] sm:text-2xl mb-4">
                  {step1.title}
                </h3>

                {/* Amount Input & Currency Dropdown */}
                <div className="relative flex items-center mb-4">
                  <input
                    type="number"
                    min="1"
                    value={amount}
                    onChange={(e) => {
                      setAmount(e.target.value);
                      setSelectedTierId(4); // Switch to Custom tier
                    }}
                    placeholder={step1.amountPlaceholder}
                    className="w-full rounded-2xl border border-[#e2e8e0] bg-[#fafcf9] px-4 py-3.5 text-base font-semibold text-[#16351d] placeholder-[#9ca89e] transition focus:border-[#1d5e2d] focus:bg-white focus:outline-none pr-32"
                  />
                  <div className="absolute right-2 flex items-center">
                    <select
                      value={currency}
                      onChange={(e) => setCurrency(e.target.value)}
                      className="appearance-none rounded-xl border border-[#e2e8e0] bg-white py-2 pl-3 pr-8 text-xs font-bold text-[#16351d] focus:outline-none"
                    >
                      {step1.currencies.map((curr) => (
                        <option key={curr.code} value={curr.label}>
                          {curr.label}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-2.5 h-3.5 w-3.5 text-[#8a998c]" />
                  </div>
                </div>

                {/* Preset Amount Tiers Grid */}
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 mb-5">
                  {step1.tiers.map((tier: NgoDonateTier) => {
                    const isSelected = selectedTierId === tier.id;

                    return (
                      <button
                        key={tier.id}
                        type="button"
                        onClick={() => handleTierSelect(tier)}
                        className={`flex flex-col items-center justify-center rounded-2xl border p-3.5 text-center transition-all duration-200 ${
                          isSelected
                            ? 'border-[#1d5e2d] bg-[#1d5e2d] text-white shadow-sm'
                            : 'border-[#e2e8e0] bg-[#fafcf9] text-[#16351d] hover:border-[#1d5e2d]'
                        }`}
                      >
                        <span className="font-serif text-sm font-bold sm:text-base">
                          {tier.title}
                        </span>
                        <span
                          className={`mt-0.5 text-[11px] font-medium transition-colors ${
                            isSelected ? 'text-white/80' : 'text-[#8a998c]'
                          }`}
                        >
                          {tier.subtext}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Recurring Checkbox & Frequency Dropdown Row */}
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between rounded-2xl border border-[#e5eae2] bg-[#fafcf9] p-4">
                  <label className="flex items-center gap-3 text-xs font-semibold text-[#16351d] cursor-pointer">
                    <input
                      type="checkbox"
                      checked={isRecurring}
                      onChange={(e) => setIsRecurring(e.target.checked)}
                      className="h-4 w-4 rounded border-[#c5d4c3] text-[#1d5e2d] focus:ring-[#1d5e2d]"
                    />
                    <span>{step1.recurringLabel}</span>
                  </label>

                  <div className="relative inline-flex items-center">
                    <select
                      value={frequency}
                      onChange={(e) => setFrequency(e.target.value)}
                      disabled={!isRecurring}
                      className="w-full appearance-none rounded-xl border border-[#e2e8e0] bg-white py-2 pl-3 pr-8 text-xs font-semibold text-[#16351d] focus:outline-none disabled:opacity-50"
                    >
                      {step1.frequencies.map((freq, i) => (
                        <option key={i} value={freq}>
                          {freq}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-2.5 h-3.5 w-3.5 text-[#8a998c]" />
                  </div>
                </div>

              </div>

              {/* Step 2: Your Details */}
              <div className="mt-8">
                <h3 className="font-serif text-xl font-bold text-[#16351d] sm:text-2xl mb-4">
                  {step2.title}
                </h3>

                <div className="space-y-4">
                  
                  {/* Row 1 */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder={step2.placeholders.fullName}
                      className="w-full rounded-2xl border border-[#e2e8e0] bg-[#fafcf9] px-4 py-3 text-sm text-[#16351d] placeholder-[#9ca89e] transition focus:border-[#1d5e2d] focus:bg-white focus:outline-none"
                    />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={step2.placeholders.email}
                      className="w-full rounded-2xl border border-[#e2e8e0] bg-[#fafcf9] px-4 py-3 text-sm text-[#16351d] placeholder-[#9ca89e] transition focus:border-[#1d5e2d] focus:bg-white focus:outline-none"
                    />
                  </div>

                  {/* Row 2 */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder={step2.placeholders.phone}
                      className="w-full rounded-2xl border border-[#e2e8e0] bg-[#fafcf9] px-4 py-3 text-sm text-[#16351d] placeholder-[#9ca89e] transition focus:border-[#1d5e2d] focus:bg-white focus:outline-none"
                    />
                    
                    {/* Country Dropdown */}
                    <div className="relative flex items-center">
                      <select
                        required
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        className="w-full appearance-none rounded-2xl border border-[#e2e8e0] bg-[#fafcf9] px-4 py-3 pr-10 text-sm text-[#16351d] transition focus:border-[#1d5e2d] focus:bg-white focus:outline-none"
                      >
                        <option value="" disabled>
                          {step2.placeholders.country}
                        </option>
                        {step2.countryOptions.map((c, i) => (
                          <option key={i} value={c}>
                            {c}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-3.5 h-4 w-4 text-[#8a998c]" />
                    </div>
                  </div>

                  {/* Support Cause Dropdown */}
                  <div className="relative flex items-center">
                    <select
                      value={formData.supportCause}
                      onChange={(e) => setFormData({ ...formData, supportCause: e.target.value })}
                      className="w-full appearance-none rounded-2xl border border-[#e2e8e0] bg-[#fafcf9] px-4 py-3 pr-10 text-sm text-[#16351d] transition focus:border-[#1d5e2d] focus:bg-white focus:outline-none"
                    >
                      <option value="" disabled>
                        {step2.placeholders.supportCause}
                      </option>
                      {step2.causeOptions.map((cause, i) => (
                        <option key={i} value={cause}>
                          {cause}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-3.5 h-4 w-4 text-[#8a998c]" />
                  </div>

                  {/* Checkboxes */}
                  <div className="space-y-2 pt-2">
                    <label className="flex items-center gap-3 text-xs font-semibold text-[#16351d] cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.isAnonymous}
                        onChange={(e) => setFormData({ ...formData, isAnonymous: e.target.checked })}
                        className="h-4 w-4 rounded border-[#c5d4c3] text-[#1d5e2d] focus:ring-[#1d5e2d]"
                      />
                      <span>{step2.anonymousLabel}</span>
                    </label>

                    <label className="flex items-center gap-3 text-xs font-semibold text-[#16351d] cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.hasMessage}
                        onChange={(e) => setFormData({ ...formData, hasMessage: e.target.checked })}
                        className="h-4 w-4 rounded border-[#c5d4c3] text-[#1d5e2d] focus:ring-[#1d5e2d]"
                      />
                      <span>{step2.addMessageLabel}</span>
                    </label>
                  </div>

                  {/* Optional Message Field */}
                  {formData.hasMessage && (
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={step2.messagePlaceholder}
                      className="w-full rounded-2xl border border-[#e2e8e0] bg-[#fafcf9] p-4 text-sm text-[#16351d] placeholder-[#9ca89e] transition focus:border-[#1d5e2d] focus:bg-white focus:outline-none min-h-[90px] resize-none"
                    />
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full rounded-2xl bg-[#16351d] py-4 px-6 text-base font-bold text-white shadow-sm transition hover:bg-[#0c401a] flex items-center justify-center gap-2 mt-6"
                  >
                    <Lock className="h-4 w-4 text-white" />
                    <span>{step2.submitButton.label}</span>
                  </button>

                  {/* Security Notice */}
                  <div className="flex items-center justify-center gap-2 pt-1 text-xs text-[#59665b]">
                    <ShieldCheck className="h-4 w-4 text-[#1d5e2d]" />
                    <span>{step2.securityNotice.text}</span>
                  </div>

                </div>
              </div>

            </form>
          </div>

          {/* Right Column (Where Your Donation Goes Sidebar) */}
          <div className="bg-[#fbfdfa] p-6 sm:p-8 lg:col-span-5 lg:p-10 flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-2xl font-bold text-[#16351d] sm:text-3xl">
                {impactSidebar.title}
              </h3>
              <div className="mt-2 mb-8 h-[2.5px] w-10 rounded-full bg-[#1d5e2d]" />

              <div className="space-y-6">
                {impactSidebar.items.map((item: NgoDonateImpactItem, idx: number) => {
                  const ImpactIcon = impactIconMap[item.icon] || BookOpen;

                  return (
                    <div
                      key={item.id}
                      className={`flex items-start gap-4 ${
                        idx < impactSidebar.items.length - 1 ? 'border-b border-[#e5eae2] pb-6' : ''
                      }`}
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#e2ede0] text-[#1d5e2d]">
                        <ImpactIcon className="h-5 w-5 stroke-[1.75]" />
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
                })}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
