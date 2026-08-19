"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Users, Handshake, Sprout } from "lucide-react";
import ngoDataJson from "@/app/data/ngoData_structured.json";
import type { NgoData, NgoBecomePartnerSection } from "@/app/type/ngo";

const data = new Proxy(ngoDataJson as any, {
  get(target, prop: string) {
    if (prop === "$$typeof") return undefined;
    return target.NGO?.sections?.[prop]?.variants?.["Legacy_" + prop];
  },
});

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  users: Users,
  handshake: Handshake,
  sprout: Sprout,
};

export default function BecomePartner() {
  const becomeData = data.becomePartnerSection as
    NgoBecomePartnerSection | undefined;

  if (!becomeData) return null;

  const headingText = becomeData.heading || "Become Our Partner";
  const highlightWord = becomeData.highlightedText || "Partner";
  const headingParts = headingText.split(
    new RegExp(`(${highlightWord})`, "gi"),
  );

  const ButtonIcon = iconMap[becomeData.button?.icon || "users"] || Users;

  return (
    <section className="bg-white py-8 sm:py-12">
      <div className="mx-auto max-w-[1350px] px-4 sm:px-6 lg:px-8">
        <div className="relative flex min-h-[260px] items-center overflow-hidden rounded-[2rem] bg-[#f8faf7] sm:min-h-[300px] lg:min-h-[340px]">
          {/* Background Image (Aligned Right) */}
          <div className="absolute inset-y-0 right-0 w-full md:w-3/5 lg:w-1/2">
            <Image
              src={becomeData.backgroundImage || "/banner_bg.png"}
              alt={becomeData.heading}
              fill
              className="object-cover object-center"
              priority
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-r from-[#f8faf7] via-[#f8faf7]/95 via-35% to-transparent sm:via-45% lg:via-50%" />

          <div className="relative z-10 max-w-lg px-6 py-8 sm:px-10 sm:py-10 lg:px-14 lg:py-12">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-[#162a1a] sm:text-4xl lg:text-[42px] leading-tight">
              {headingParts.map((part, index) =>
                part.toLowerCase() === highlightWord.toLowerCase() ? (
                  <span key={index} className="text-[#1b4d24]">
                    {part}
                  </span>
                ) : (
                  <span key={index}>{part}</span>
                ),
              )}
            </h2>

            <p className="mt-3 max-w-md text-sm leading-relaxed text-[#4a584c] sm:text-base">
              {becomeData.description ||
                "Join hands with us to create lasting impact and build a better tomorrow."}
            </p>

            <div className="mt-5 sm:mt-6">
              <Link
                href={becomeData.button?.href || "/contact"}
                className="inline-flex items-center gap-2 rounded-xl bg-[#1c4d25] px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#143a1c]"
              >
                <ButtonIcon className="h-4 w-4" />
                <span>{becomeData.button?.label || "Partner With Us"}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
