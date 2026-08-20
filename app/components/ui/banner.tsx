import type { BannerProps, PageBannerData } from "@/app/data";
import { site, SectionProps } from "@/app/data";
import Image from "next/image";
import Link from "next/link";
import { Home, ChevronRight } from "lucide-react";

const pageBanners = site.pageBanners; //
  

export default function Banner({
  pageKey = "about",
  bannerData,
  className = "",
}: BannerProps) {
  // Extract active banner data from props, pageKey lookup in JSON, or default JSON configuration
  const activeData: PageBannerData = bannerData ||
    (pageBanners && (pageBanners as any)[pageKey]) || {
      title: "",
      backgroundImage: "",
      breadcrumbs: [],
    };

  const getBreadcrumbIcon = (iconName?: string) => {
    switch (iconName) {
      case "home":
        return (
          <Home
            className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#0f3c1d] stroke-[2]"
            aria-hidden="true"
          />
        );
      default:
        return null;
    }
  };

  return (
    <div
      className={`relative w-full h-[280px] sm:h-[340px] lg:h-[380px] bg-[#fbf9f4] overflow-hidden flex items-center ${className}`}
    >
      {/* Background Image Layer */}
      <div className="absolute inset-0 w-full h-full">
        {activeData.backgroundImage && (
          <Image
            src={activeData.backgroundImage}
            alt={activeData.altText || activeData.title}
            fill
            className="object-cover object-right sm:object-center lg:object-[center_35%]"
            priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
        )}

        {/* Soft Warm Left Gradient for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#fbf9f4] via-[#fbf9f4]/85 sm:via-[#fbf9f4]/70 to-transparent w-full sm:w-[65%] md:w-[55%] lg:w-[48%]" />
      </div>

      {/* Content Layer */}
      <div className="relative mx-auto max-w-[1350px] w-full px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex flex-col justify-center max-w-xl">
          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0f3c1d] font-serif leading-tight">
            {activeData.title}
          </h1>

          {/* Breadcrumb Navigation */}
          {activeData.breadcrumbs && activeData.breadcrumbs.length > 0 && (
            <nav aria-label="Breadcrumb" className="mt-3 sm:mt-4">
              <ol className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-sm sm:text-base font-sans">
                {activeData.breadcrumbs.map((item, index) => {
                  const isLast = index === activeData.breadcrumbs.length - 1;
                  const itemIcon = getBreadcrumbIcon(item.icon);

                  return (
                    <li
                      key={item.id ?? index}
                      className="flex items-center gap-1.5 sm:gap-2"
                    >
                      {index > 0 && (
                        <ChevronRight
                          className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0f3c1d] shrink-0 stroke-[2.5]"
                          aria-hidden="true"
                        />
                      )}

                      {item.href && !item.isCurrent ? (
                        <Link
                          href={item.href}
                          className="inline-flex items-center gap-1.5 text-[#0f3c1d] font-medium hover:text-[#2d6a38] transition-colors"
                        >
                          {itemIcon}
                          <span>{item.label}</span>
                        </Link>
                      ) : (
                        <span
                          className={`inline-flex items-center gap-1.5 ${
                            item.isCurrent || isLast
                              ? "text-[#2d6a38] font-semibold"
                              : "text-[#0f3c1d] font-medium"
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
