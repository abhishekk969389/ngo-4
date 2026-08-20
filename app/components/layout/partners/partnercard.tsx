"use client";
import { site, SectionProps, SiteData } from "@/app/data";

import React from "react";
import { Handshake, Target, Users, Leaf, Sprout } from "lucide-react";



const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  handshake: Handshake,
  target: Target,
  users: Users,
  leaf: Leaf,
  sprout: Sprout,
};

export default function PartnerCard({ data: propData, className }: SectionProps<SiteData> = {}) {
  const data = propData || site;
  const cardsData = data.partnerCardsSection as any;

  if (!cardsData || !cardsData.items) return null;

  return (
    <section className="bg-[#fcfdfc] pt-12">
      <div className="mx-auto max-w-[1350px] px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-[#e2ece0] bg-[#f0f6ef] p-6 sm:p-8 lg:p-10 shadow-sm sm:rounded-3xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-[#d3e2d1]">
            {cardsData.items.map((item: any) => {
              const IconComponent = iconMap[item.icon] || Handshake;

              return (
                <div
                  key={item.id}
                  className="flex flex-col items-center text-center px-4 lg:px-6"
                >
                  <div className="mb-3 flex h-12 w-12 items-center justify-center text-[#1d5e2d]">
                    <IconComponent className="h-9 w-9 text-[#1d5e2d] stroke-[1.75]" />
                  </div>

                  <h3 className="font-serif text-lg font-bold text-[#16351d] sm:text-xl">
                    {item.title}
                  </h3>

                  <p className="mt-1.5 text-xs text-[#59665b] sm:text-sm leading-relaxed max-w-[220px]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
