import React from "react";
import { Users, Leaf, Handshake, Globe2, Heart } from "lucide-react";
import ngoDataJson from "@/app/data/ngoData_structured.json";
import type { NgoData, NgoImpactGlanceStat } from "@/app/type/ngo";

const data = new Proxy(ngoDataJson as any, {
  get(target, prop: string) {
    if (prop === "$$typeof") return undefined;
    return target.NGO?.sections?.[prop]?.variants?.["Legacy_" + prop];
  },
});

const statIconMap = {
  users: Users,
  leaf: Leaf,
  handshake: Handshake,
  globe: Globe2,
};

export default function ImpactGlance() {
  const impactData = data.impactGlanceSection;

  if (!impactData) return null;

  const getIcon = (icon: string) => {
    const IconComponent =
      statIconMap[icon as keyof typeof statIconMap] ?? Users;
    return <IconComponent className="h-6 w-6 sm:h-7 sm:w-7 text-[#1b4d2e]" />;
  };

  return (
    <section className="mt-6 sm:mt-8 md:mt-10 lg:mt-14">
      <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-12">
        {/* Header Section */}
        <div className="text-center">
          <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0d3319] leading-[1.2] sm:leading-[1.18]">
            {impactData.heading}
          </h2>

          <div className="mt-2.5 mb-8 flex items-center justify-center gap-2">
            <span className="h-[1px] w-8 sm:w-12 bg-[#b2cbb6]" />
            <Heart className="h-3.5 w-3.5 fill-[#2c7a3f] text-[#2c7a3f]" />
            <span className="h-[1px] w-8 sm:w-12 bg-[#b2cbb6]" />
          </div>
        </div>

        <div className="rounded-2xl sm:rounded-3xl bg-white p-6 sm:p-8 lg:p-10 shadow-sm">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-[#e8eee9]">
            {impactData.stats.map(
              (stat: NgoImpactGlanceStat, index: number) => (
                <div
                  key={stat.id}
                  className={`flex items-center gap-4 sm:gap-5 ${
                    index !== 0 ? "pt-6 sm:pt-0 lg:pl-6 lg:pt-0" : ""
                  }`}
                >
                  <div className="flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-full bg-[#eef5ef]">
                    {getIcon(stat.icon)}
                  </div>

                  <div className="text-left">
                    <div className=" text-2xl sm:text-3xl font-bold tracking-tight text-[#1b4d2e]">
                      {stat.value}
                    </div>

                    <div className="mt-0.5 text-sm sm:text-base font-bold text-gray-900 leading-snug">
                      {stat.label}
                    </div>

                    <div className="mt-1 text-xs text-gray-500 leading-relaxed">
                      {stat.description}
                    </div>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
