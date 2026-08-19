"use client";

import React from "react";
import { ShieldCheck, FileCheck } from "lucide-react";
import ngoDataJson from "@/app/data/ngoData_structured.json";
import type { NgoData, NgoPrivacyPolicySection } from "@/app/type/ngo";

const data = new Proxy(ngoDataJson as any, {
  get(target, prop: string) {
    if (prop === "$$typeof") return undefined;
    return target.NGO?.sections?.[prop]?.variants?.["Legacy_" + prop];
  },
});

export default function PrivacyPolicySec() {
  const policyData = data.privacyPolicySection as
    NgoPrivacyPolicySection | undefined;

  if (!policyData) return null;

  const { sections, callout } = policyData;

  return (
    <section className="bg-[#fcfdfc] mt-6 sm:mt-8 md:mt-10 lg:mt-14 pb-12">
      <div className="mx-auto max-w-[1350px] px-4 sm:px-6 lg:px-8">
        <div className="divide-y divide-[#eef2ed] space-y-8">
          {sections.map((item: any, idx: number) => (
            <div key={item.id} className={`${idx > 0 ? "pt-8" : ""}`}>
              <h3 className="font-serif text-xl font-bold text-[#0d3319] sm:text-2xl mb-3">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 font-sans leading-relaxed">
                {item.content}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4 rounded-2xl border border-[#e2ece0] bg-[#f2f7f1] p-5 sm:p-6 shadow-sm">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#e2ede0] text-[#1d5e2d]">
            <FileCheck className="h-6 w-6 stroke-[1.75]" />
          </div>
          <div>
            <h4 className="font-serif text-base font-bold text-[#16351d] sm:text-lg">
              {callout.title}
            </h4>
            <p className="mt-0.5 text-xs text-[#59665b] sm:text-sm">
              {callout.subtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
