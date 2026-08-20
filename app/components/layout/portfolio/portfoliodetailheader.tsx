import Image from "next/image";
import Link from "next/link";
import {
  Sprout,
  MapPin,
  Calendar,
  Users,
  Handshake,
  GraduationCap,
  ArrowLeft,
  Quote,
  BookOpen,
} from "lucide-react";
import type { PortfolioDetailHeaderData } from "@/app/data";

const iconMap = {
  leaf: Sprout,
  mapPin: MapPin,
  calendar: Calendar,
  users: Users,
  handshake: Handshake,
  category: GraduationCap,
  default: BookOpen,
};

interface PortfolioDetailHeaderProps {
  data: PortfolioDetailHeaderData;
}

export default function PortfolioDetailHeader({
  data,
}: PortfolioDetailHeaderProps) {
  if (!data) return null;

  const BadgeIcon = data.badgeIcon
    ? iconMap[data.badgeIcon as keyof typeof iconMap] || Sprout
    : Sprout;

  const getMetaIcon = (iconName: string) => {
    const IconComponent =
      iconMap[iconName as keyof typeof iconMap] || iconMap.default;
    return (
      <IconComponent
        className="w-5 h-5 text-[#2c7a3f] shrink-0 stroke-[2]"
        aria-hidden="true"
      />
    );
  };

  return (
    <section className="font-sans px-4 sm:px-6 lg:px-8 max-w-[1350px] mx-auto mt-6 sm:mt-10 lg:mt-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column - Header Details */}
        <div className="lg:col-span-6 xl:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-widest uppercase text-[#0d3319]">
            <BadgeIcon className="w-4 h-4 text-[#2c7a3f] fill-[#2c7a3f]" />
            <span>{data.badge}</span>
            <Sprout className="w-4 h-4 text-[#2c7a3f] fill-[#2c7a3f]" />
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-[#0d3319] tracking-tight leading-tight">
              {data.title}
            </h1>
            {data.location && (
              <div className="flex items-center gap-1.5 text-sm sm:text-base font-medium text-[#2c7a3f]">
                <MapPin className="w-4 h-4 text-[#2c7a3f] fill-[#2c7a3f]" />
                <span>{data.location}</span>
              </div>
            )}
          </div>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl">
            {data.description}
          </p>

          {data.metaInfo && data.metaInfo.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-2">
              {data.metaInfo.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3 p-3 rounded-xl bg-[#f7f9f6] border border-[#e5efe7]"
                >
                  <div className="p-2 rounded-lg bg-white shadow-xs">
                    {getMetaIcon(item.icon)}
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-medium text-gray-500 truncate">
                      {item.label}
                    </p>
                    <p className="text-sm text-[#0d3319] truncate">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="pt-2">
            <Link
              href={data.backButtonHref || "/portfolio"}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1b4d25] hover:bg-[#2c7a3f] text-white text-xs sm:text-sm font-semibold transition-all shadow-sm hover:shadow-md"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{data.backButtonLabel || "Back to Portfolio"}</span>
            </Link>
          </div>
        </div>

        {/* Right Column - Hero Image with Overlay Quote */}
        <div className="lg:col-span-6 xl:col-span-5 relative">
          <div className="relative h-[320px] sm:h-[400px] lg:h-[440px] w-full rounded-3xl overflow-hidden shadow-lg border border-gray-100">
            <Image
              src={data.heroImage}
              alt={data.heroAlt || data.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>

          {data.heroQuote && (
            <div className="absolute -bottom-6 left-4 right-4 sm:left-6 sm:right-6 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-emerald-100/80 shadow-xl flex items-start gap-3">
              <div className="p-2 rounded-xl bg-[#edf5ee] shrink-0 text-[#2c7a3f]">
                <Quote className="w-5 h-5 fill-[#2c7a3f]" />
              </div>
              <div className="space-y-1 min-w-0">
                <p className="text-xs sm:text-sm text-gray-700 italic leading-relaxed">
                  &ldquo;{data.heroQuote.quote}&rdquo;
                </p>
                <p className="text-xs font-bold text-[#1b4d25]">
                  &mdash; {data.heroQuote.author}
                  {data.heroQuote.role ? `, ${data.heroQuote.role}` : ""}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
