import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  BookOpen,
  HeartPulse,
  Users,
  Leaf,
  Baby,
  ShieldAlert,
  HeartHandshake,
  HandHelping,
  Sprout,
  Orbit,
} from "lucide-react";
import ngoDataJson from "@/app/data/ngoData_structured.json";
import type { NgoData, NgoServiceItem } from "@/app/type/ngo";

const data = new Proxy(ngoDataJson as any, {
  get(target, prop: string) {
    if (prop === "$$typeof") return undefined;
    return target.NGO?.sections?.[prop]?.variants?.["Legacy_" + prop];
  },
});

const serviceIconMap = {
  education: BookOpen,
  healthcare: HeartPulse,
  community: Users,
  environment: Leaf,
  child: Baby,
  disaster: ShieldAlert,
  support: HeartHandshake,
  "community-first": HandHelping,
  sustainability: Sprout,
  impact: Orbit,
};

export default function ServiceSection() {
  const services = data.servicesSection;

  if (!services) return null;

  const leftItems = services.items.slice(0, 3);
  const rightItems = services.items.slice(3, 6);
  const bottomItems = services.items.slice(6, 10);

  const renderIcon = (item: NgoServiceItem) => {
    const Icon =
      serviceIconMap[item.icon as keyof typeof serviceIconMap] ?? BookOpen;
    return (
      <Icon className="h-5 w-5 sm:h-6 sm:w-6" style={{ color: item.accent }} />
    );
  };

  return (
    <section className="mt-6 sm:mt-8 md:mt-10 lg:mt-14 font-sans px-2 sm:px-0">
      <div className="mx-auto max-w-[1348px] px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center flex flex-col items-center">
          <div className="inline-flex flex-col items-center">
            <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-[0.2em] text-[#2c7a3f]">
              {services.badge}
            </span>

            <div className="mt-1 h-[2.5px] w-8 sm:w-10 rounded-full bg-[#2c7a3f]" />
          </div>

          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0d3319] font-serif leading-[1.2] sm:leading-[1.18] tracking-tight mt-2 sm:mt-1">
            <span className="block">{services.heading.line1}</span>

            <span className="relative inline-block mt-1 sm:mt-0">
              <span className="inline-block relative text-[#2c7a3f] italic font-serif">
                {services.heading.line2}
              </span>

              <svg
                className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-2.5 sm:h-3 text-[#2c7a3f]/75"
                viewBox="0 0 300 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M 5 8 Q 150 2, 295 7"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>

          <p className="mx-auto mt-3 sm:mt-4 max-w-2xl text-xs sm:text-sm md:text-base leading-relaxed text-gray-600 font-sans">
            {services.description}
          </p>
        </div>

        {/* Main 3-Column Grid */}
        <div className="mt-8 sm:mt-10 lg:mt-12 grid items-center gap-6 sm:gap-8 lg:grid-cols-12">
          {/* Left Items */}
          <div className="space-y-6 sm:space-y-8 lg:space-y-6 lg:col-span-4 order-1">
            {leftItems.map((item: any, idx: any) => (
              <React.Fragment key={item.id}>
                <Link
                  href={
                    item.href || `/servicedetails?id=${item.slug || item.id}`
                  }
                  className="group flex items-start gap-3.5 sm:gap-4 p-2 -mx-2 rounded-xl transition-all hover:bg-gray-50/80 cursor-pointer"
                >
                  <div
                    className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-[40%_60%_70%_30%/50%_60%_40%_50%] transition-transform group-hover:scale-105"
                    style={{ backgroundColor: `${item.accent}18` }}
                  >
                    {renderIcon(item)}
                  </div>
                  <div>
                    <h3
                      className="text-base font-bold sm:text-lg transition-colors group-hover:underline"
                      style={{ color: item.accent }}
                    >
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm leading-relaxed text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </Link>
                {idx < leftItems.length - 1 && (
                  <div className="border-b border-dashed border-gray-200" />
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="flex justify-center py-2 sm:py-4 lg:col-span-4 lg:py-0 order-2">
            <div className="relative h-56 w-56 sm:h-80 sm:w-80 lg:h-96 lg:w-96 rounded-full bg-[#edf4ee] p-2 border-2 border-[#d6ebd9] shadow-sm shrink-0">
              <div className="relative h-full w-full overflow-hidden rounded-full">
                <Image
                  src={services.centerImage}
                  alt="Our Services Center Image"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right Items */}
          <div className="space-y-6 sm:space-y-8 lg:space-y-6 lg:col-span-4 order-3">
            {rightItems.map((item: any, idx: any) => (
              <React.Fragment key={item.id}>
                <Link
                  href={
                    item.href || `/servicedetails?id=${item.slug || item.id}`
                  }
                  className="group flex items-start gap-3.5 sm:gap-4 p-2 -mx-2 rounded-xl transition-all hover:bg-gray-50/80 cursor-pointer"
                >
                  <div
                    className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-[60%_40%_50%_50%/40%_50%_60%_50%] transition-transform group-hover:scale-105"
                    style={{ backgroundColor: `${item.accent}18` }}
                  >
                    {renderIcon(item)}
                  </div>
                  <div>
                    <h3
                      className="text-base font-bold sm:text-lg transition-colors group-hover:underline"
                      style={{ color: item.accent }}
                    >
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm leading-relaxed text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </Link>
                {idx < rightItems.length - 1 && (
                  <div className="border-b border-dashed border-gray-200" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Bottom Banner Section */}
        <div className="relative mt-8 sm:mt-10 lg:mt-12 overflow-hidden rounded-2xl bg-[#f2f7f2] border border-[#e2ede2] p-5 sm:p-6 lg:p-8">
          <div className="relative z-10 grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {bottomItems.map((item: any) => (
              <Link
                key={item.id}
                href={item.href || `/servicedetails?id=${item.slug || item.id}`}
                className="group flex items-center gap-3.5 p-2 rounded-xl transition-all hover:bg-white/60 cursor-pointer"
              >
                <div
                  className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full transition-transform group-hover:scale-105"
                  style={{ backgroundColor: `${item.accent}20` }}
                >
                  {renderIcon(item)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 sm:text-base group-hover:text-[#2c7a3f] transition-colors">
                    {item.title}
                  </h4>
                  <p className="mt-0.5 text-xs text-gray-600 leading-snug">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <svg
            className="absolute -bottom-2 -right-2 h-20 w-20 sm:h-28 sm:w-28 text-[#2d6f3e]/20 pointer-events-none"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 100 100"
          >
            <path
              strokeWidth="1.5"
              strokeLinecap="round"
              d="M10 90 C 40 80, 70 50, 90 10 M 90 10 C 60 20, 40 40, 10 90 M 50 50 C 70 30, 80 40, 90 10"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
