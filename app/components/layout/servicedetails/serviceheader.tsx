import ImageComponent from "next/image";
import {
  BookOpen,
  GraduationCap,
  TrendingUp,
  Sprout,
  Heart,
  Users,
  ShieldCheck,
  Baby,
  Briefcase,
  UserCheck,
  LucideIcon,
} from "lucide-react";
import type { ServiceHeaderData } from "@/app/data";

const iconMap: Record<string, LucideIcon> = {
  book: BookOpen,
  gradCap: GraduationCap,
  userGrowth: TrendingUp,
  sprout: Sprout,
  heart: Heart,
  users: Users,
  shieldCheck: ShieldCheck,
  baby: Baby,
  briefcase: Briefcase,
  userCheck: UserCheck,
};

interface ServiceHeaderProps {
  data: ServiceHeaderData;
}

export default function ServiceHeader({ data }: ServiceHeaderProps) {
  if (!data) return null;

  const BadgeIcon = data.badgeIcon
    ? iconMap[data.badgeIcon] || BookOpen
    : BookOpen;

  return (
    <section className="relative overflow-hidden mx-auto  mt-10 sm:mt-14 lg:mt-16">
      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Column - Content */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-6 z-10">
            <div className="inline-flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#edf5ee] border border-[#d8eadb] text-[#1c4d28] shrink-0">
                <BadgeIcon className="w-7 h-7 sm:w-8 sm:h-8 stroke-[1.75]" />
              </div>
              <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#1c4d28]">
                {data.badge}
              </span>
            </div>

            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-[#0d3319] tracking-tight">
                {data.title}
              </h1>
              <div className="relative inline-block pt-1">
                <p className="text-xl sm:text-2xl lg:text-3xl font-serif italic text-[#2c7a3f] leading-snug">
                  {data.subtitle}
                </p>

                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-[#2c7a3f]/75"
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
              </div>
            </div>

            <p className="text-sm sm:text-base leading-relaxed text-gray-600 font-sans max-w-xl">
              {data.description}
            </p>

            {/* Features Row */}
            {data.features && data.features.length > 0 && (
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 items-center">
                {data.features.map((feature) => {
                  const FeatureIcon = iconMap[feature.icon] || GraduationCap;
                  return (
                    <div key={feature.id} className="flex items-center gap-3">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#edf5ee] border border-[#d8eadb] text-[#1c4d28]">
                        <FeatureIcon className="w-7 h-7 sm:w-8 sm:h-8 stroke-[1.75]" />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-[#0d3319] leading-snug">
                        {feature.title}
                      </span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Right Column - Curved Arch Image Container */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex justify-end items-center mt-6 lg:mt-0">
            <div className="absolute -left-6 top-1/4 pointer-events-none hidden sm:block z-20">
              <svg
                className="w-12 h-12 text-[#2c7a3f]/70"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.8 2.8C11.4 3 6.3 8.1 6.1 14.5c-.1 2.9 1 5.7 3 7.8l.9.9 2-2c3.9-3.9 4.8-9.8 2.2-14.7.7.7 1.4 1.5 2 2.4.9 1.4 1.4 3 1.5 4.6l2-.3c-.2-2.1-.9-4.1-2-5.9 1.1-1.3 2.1-2.9 2.1-4.5h-2z" />
              </svg>
            </div>

            <div className="absolute -left-4 bottom-12 pointer-events-none hidden sm:block opacity-40 z-20">
              <div className="grid grid-cols-4 gap-1.5 w-16">
                {Array.from({ length: 16 }).map((_, i) => (
                  <span key={i} className="w-1 h-1 rounded-full bg-[#2c7a3f]" />
                ))}
              </div>
            </div>

            <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[1.35/1] rounded-l-[180px] sm:rounded-l-[260px] lg:rounded-l-[320px] rounded-r-2xl overflow-hidden border-l-4 border-t-2 border-b-2 border-[#1c4d28]/30 shadow-2xl bg-stone-100">
              <ImageComponent
                src={data.heroImage}
                alt={data.heroAlt || data.title}
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
