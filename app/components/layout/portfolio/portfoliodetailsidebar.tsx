import Image from "next/image";
import {
  Sprout,
  Users,
  BookMarked,
  GraduationCap,
  Shield,
  Quote,
  CheckCircle2,
} from "lucide-react";
import type { PortfolioDetailSidebarData } from "@/app/type/ngo";

const iconMap = {
  users: Users,
  books: BookMarked,
  graduation: GraduationCap,
  shield: Shield,
  default: CheckCircle2,
};

interface PortfolioDetailSidebarProps {
  data: PortfolioDetailSidebarData;
}

export default function PortfolioDetailSidebar({
  data,
}: PortfolioDetailSidebarProps) {
  if (!data) return null;

  const getIcon = (iconName?: string) => {
    if (!iconName) return null;
    const IconComponent =
      iconMap[iconName as keyof typeof iconMap] || iconMap.default;
    return (
      <IconComponent
        className="w-4 h-4 text-white shrink-0 stroke-[2]"
        aria-hidden="true"
      />
    );
  };

  const { highlightsTitle, highlights, galleryTitle, gallery, sidebarQuote } =
    data;

  return (
    <aside className="space-y-8">
      {highlights && highlights.length > 0 && (
        <div className="p-5 sm:p-6 rounded-3xl bg-white border border-gray-100 shadow-xs space-y-5">
          <div className="flex items-center gap-2 border-b border-gray-100 pb-3">
            <div className="w-1.5 h-5 bg-[#2c7a3f] rounded-full" />
            <h3 className="text-lg font-bold font-serif text-[#0d3319]">
              {highlightsTitle || "Project Highlights"}
            </h3>
          </div>

          <div className="space-y-4">
            {highlights.map((item) => (
              <div key={item.id} className="flex items-start gap-3.5 group">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1b4d25] text-white font-extrabold text-xs shadow-2xs group-hover:scale-105 transition-transform">
                  {item.badgeNumber ? (
                    <span>{item.badgeNumber}</span>
                  ) : (
                    getIcon(item.icon)
                  )}
                </div>

                <div className="space-y-0.5 min-w-0">
                  <h4 className="text-xs sm:text-sm font-bold text-[#0d3319] leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-gray-500 leading-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {gallery && gallery.length > 0 && (
        <div className="p-5 sm:p-6 rounded-3xl bg-[#f4f8f3] border border-[#e2ebd9] space-y-4">
          <div className="flex items-center gap-2">
            <h3 className="text-base sm:text-lg font-bold font-serif text-[#0d3319]">
              {galleryTitle || "Project Gallery"}
            </h3>
            <Sprout className="w-4 h-4 text-[#2c7a3f] fill-[#2c7a3f]" />
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            {gallery.map((item) => (
              <div
                key={item.id}
                className="relative h-24 sm:h-28 rounded-xl overflow-hidden shadow-2xs border border-white/60 group"
              >
                <Image
                  src={item.image}
                  alt={item.alt || "Gallery photo"}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 1024px) 50vw, 20vw"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 3. Sidebar Quote Callout */}
      {sidebarQuote && (
        <div className="p-5 rounded-2xl bg-[#edf5ee] border border-[#d3e6d5] space-y-3">
          <Quote className="w-6 h-6 text-[#2c7a3f] fill-[#2c7a3f]" />
          <p className="text-xs sm:text-sm text-[#0d3319] italic leading-relaxed font-serif">
            &ldquo;{sidebarQuote.quote}&rdquo;
          </p>
          <p className="text-xs font-bold text-[#2c7a3f] text-right">
            &mdash; {sidebarQuote.author}
          </p>
        </div>
      )}
    </aside>
  );
}
