import Image from "next/image";
import Link from "next/link";
import { Home, ChevronRight } from "lucide-react";
import ngoDataJson from "@/app/data/ngoData_structured.json";
import type { NgoData, PageBannerData, BannerProps } from "@/app/type/ngo";

const pageBanners = (ngoDataJson as any).NGO.sections.pageBanners?.variants
  ?.Legacy_pageBanners;

export default function Banner({
  pageKey = "about",
  bannerData,
  className = "",
}: BannerProps) {
  // Extract active banner data from props, pageKey lookup in JSON, or default JSON configuration
  const activeData: PageBannerData = bannerData ||
    (pageBanners && pageBanners[pageKey]) || {
      title: "",
      backgroundImage: "",
      breadcrumbs: [],
    };

  const getBreadcrumbIcon = (iconName?: string) => {
    switch (iconName) {
      case "home":
        return (
          <Home
            className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#1b4d25] stroke-[2]"
            aria-hidden="true"
          />
        );
      default:
        return null;
    }
  };

  return (
    <div
      className={`relative w-full h-[360px] sm:h-[420px] lg:h-[490px] bg-[#f7f8f2] overflow-hidden flex items-center ${className}`}
    >
      <div className="absolute inset-0 w-full h-full">
        {activeData.backgroundImage && (
          <Image
            src={activeData.backgroundImage}
            alt={activeData.altText || activeData.title}
            fill
            className="object-cover object-right sm:object-center lg:object-[center_38%]"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-[#f7f8f2] via-[#f7f8f2]/85 sm:via-[#f7f8f2]/65 to-transparent w-full lg:w-[48%] xl:w-[42%]" />
        <div className="absolute inset-0 bg-[#f7f8f2]/30 sm:hidden" />
      </div>
      <div className="relative mx-auto max-w-[1380px] w-full px-4 sm:px-6 lg:px-12 py-8 sm:py-12 z-10">
        <div className="flex flex-col justify-center max-w-2xl lg:max-w-3xl xl:max-w-4xl">
          <h1 className="text-3xl sm:text-4xl lg:text-[3.25rem] xl:text-6xl font-bold tracking-tight text-[#1b4d25] font-serif leading-tight whitespace-normal sm:whitespace-nowrap">
            {activeData.title}
          </h1>
          {activeData.breadcrumbs && activeData.breadcrumbs.length > 0 && (
            <nav aria-label="Breadcrumb" className="mt-3 sm:mt-4">
              <ol className="flex flex-wrap items-center gap-2 text-sm sm:text-base font-semibold font-sans">
                {activeData.breadcrumbs.map((item, index) => {
                  const isLast = index === activeData.breadcrumbs.length - 1;
                  const itemIcon = getBreadcrumbIcon(item.icon);

                  return (
                    <li
                      key={item.id ?? index}
                      className="flex items-center gap-2"
                    >
                      {index > 0 && (
                        <ChevronRight
                          className="w-4 h-4 text-[#2c7a3f] shrink-0 stroke-[2.5]"
                          aria-hidden="true"
                        />
                      )}

                      {item.href && !item.isCurrent ? (
                        <Link
                          href={item.href}
                          className="inline-flex items-center gap-1.5 text-[#1b4d25] hover:text-[#2c7a3f] transition-colors"
                        >
                          {itemIcon}
                          <span>{item.label}</span>
                        </Link>
                      ) : (
                        <span
                          className={`inline-flex items-center gap-1.5 ${
                            item.isCurrent || isLast
                              ? "text-[#2c7a3f]"
                              : "text-[#1b4d25]"
                          }`}
                          aria-current={
                            item.isCurrent || isLast ? "page" : undefined
                          }
                        >
                          {itemIcon}
                          <span>{item.label}</span>
                        </span>
                      )}
                    </li>
                  );
                })}
              </ol>
            </nav>
          )}
        </div>
      </div>
    </div>
  );
}
