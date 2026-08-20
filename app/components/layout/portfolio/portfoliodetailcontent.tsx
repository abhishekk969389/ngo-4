import Image from "next/image";
import {
  Sprout,
  BookOpen,
  Shield,
  BookMarked,
  Gamepad2,
  UserCheck,
  Users,
  GraduationCap,
  Smile,
  TrendingUp,
  Star,
  Heart,
  Sparkles,
} from "lucide-react";
import type { PortfolioDetailContentData } from "@/app/data";

const iconMap = {
  classroom: BookOpen,
  water: Shield,
  books: BookMarked,
  play: Gamepad2,
  teacher: UserCheck,
  users: Users,
  graduation: GraduationCap,
  smiley: Smile,
  trending: TrendingUp,
  star: Star,
  book: BookOpen,
  heart: Heart,
  sparkles: Sparkles,
  default: Sprout,
};

interface PortfolioDetailContentProps {
  data: PortfolioDetailContentData;
}

export default function PortfolioDetailContent({
  data,
}: PortfolioDetailContentProps) {
  if (!data) return null;

  const getIcon = (iconName: string, className: string = "w-5 h-5") => {
    const IconComponent =
      iconMap[iconName as keyof typeof iconMap] || iconMap.default;
    return <IconComponent className={className} aria-hidden="true" />;
  };

  const { about, impact, stories, partners } = data;

  return (
    <div className="space-y-10 sm:space-y-12">
      {about && (
        <section className="space-y-4 sm:space-y-6">
          <div className="flex items-center gap-2">
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-[#0d3319]">
              {about.title}
            </h2>
            <Sprout className="w-5 h-5 text-[#2c7a3f] fill-[#2c7a3f]" />
          </div>

          {about.paragraphs?.map((paragraph, index) => (
            <p
              key={index}
              className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed"
            >
              {paragraph}
            </p>
          ))}

          {about.features && about.features.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 pt-2">
              {about.features.map((feature) => (
                <div
                  key={feature.id}
                  className="flex flex-col items-center text-center p-3.5 sm:p-4 rounded-2xl bg-[#f4f8f3] border border-[#e2ebd9] hover:shadow-sm transition-all"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white text-[#1c4d28] border border-[#d8eadb] flex items-center justify-center shadow-xs mb-3">
                    {getIcon(feature.icon, "w-8 h-8 sm:w-9 sm:h-9 text-[#1c4d28] stroke-[1.75]")}
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-[#0d3319] leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-[11px] text-gray-500 mt-1 leading-snug">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      {impact && (
        <section className="space-y-4 sm:space-y-6">
          <div className="flex items-center gap-2">
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-[#0d3319]">
              {impact.title}
            </h2>
            <Sprout className="w-5 h-5 text-[#2c7a3f] fill-[#2c7a3f]" />
          </div>

          {impact.stats && impact.stats.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {impact.stats.map((stat) => (
                <div
                  key={stat.id}
                  className="flex flex-col items-center text-center p-4 rounded-2xl bg-[#f7f9f6] border border-[#e5efe7]"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#edf5ee] border border-[#d8eadb] text-[#1c4d28] flex items-center justify-center mb-3 shadow-xs">
                    {getIcon(stat.icon, "w-8 h-8 sm:w-9 sm:h-9 text-[#1c4d28] stroke-[1.75]")}
                  </div>
                  <span className="text-lg sm:text-xl font-extrabold text-[#0d3319]">
                    {stat.value}
                  </span>
                  <span className="text-[11px] font-medium text-gray-500 mt-0.5 leading-snug">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      {stories && (
        <section className="space-y-4 sm:space-y-6">
          <div className="flex items-center gap-2">
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-[#0d3319]">
              {stories.title}
            </h2>
            <Sprout className="w-5 h-5 text-[#2c7a3f] fill-[#2c7a3f]" />
          </div>

          {stories.cards && stories.cards.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stories.cards.map((story) => (
                <div
                  key={story.id}
                  className="flex items-center gap-3.5 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-[#f7f9f6] border border-[#e5efe7] hover:shadow-sm transition-all"
                >
                  {story.avatar && (
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-full overflow-hidden border-2 border-white shadow-sm bg-gray-100">
                      <Image
                        src={story.avatar}
                        alt={story.author}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 640px) 64px, 80px"
                      />
                    </div>
                  )}
                  <div className="flex flex-col justify-center min-w-0 flex-1 space-y-1.5">
                    <p className="text-xs sm:text-[13px] text-gray-700 font-sans italic leading-relaxed">
                      &ldquo;{story.quote}&rdquo;
                    </p>
                    <p className="text-xs font-bold text-[#2c7a3f] font-sans">
                      &mdash; {story.author}{story.ageOrRole ? `, ${story.ageOrRole}` : ""}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      {partners && (
        <section className="space-y-4 sm:space-y-6">
          <div className="flex items-center gap-2">
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-[#0d3319]">
              {partners.title}
            </h2>
            <Sprout className="w-5 h-5 text-[#2c7a3f] fill-[#2c7a3f]" />
          </div>

          {partners.partners && partners.partners.length > 0 && (
            <div className="p-4 sm:p-5 rounded-2xl bg-[#f7f9f6] border border-[#e5efe7]">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 items-center">
                {partners.partners.map((partner) => (
                  <div
                    key={partner.id}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-gray-100 shadow-2xs hover:border-emerald-200 transition-all justify-center"
                  >
                    <div className="p-1.5 rounded-lg bg-[#edf5ee] text-[#2c7a3f]">
                      {getIcon(
                        partner.icon || "book",
                        "w-4 h-4 text-[#2c7a3f]",
                      )}
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-[#0d3319] truncate">
                      {partner.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      )}
    </div>
  );
}
