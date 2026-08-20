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
                  className="flex flex-col items-center text-center p-3.5 rounded-2xl bg-[#f4f8f3] border border-[#e2ebd9] hover:shadow-sm transition-all"
                >
                  <div className="p-2.5 rounded-xl bg-white text-[#2c7a3f] shadow-2xs mb-2">
                    {getIcon(feature.icon, "w-5 h-5 text-[#2c7a3f] stroke-[2]")}
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
                  <div className="p-2.5 rounded-full bg-[#edf5ee] text-[#2c7a3f] mb-2">
                    {getIcon(stat.icon, "w-5 h-5 text-[#2c7a3f] stroke-[2]")}
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
                  className="flex flex-col justify-between p-4 sm:p-5 rounded-2xl bg-white border border-gray-100 shadow-xs hover:shadow-sm transition-all"
                >
                  <div className="flex items-start gap-3">
                    {story.avatar && (
                      <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 border border-emerald-200">
                        <Image
                          src={story.avatar}
                          alt={story.author}
                          fill
                          className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                      </div>
                    )}
                    <p className="text-xs sm:text-sm text-gray-600 italic leading-relaxed">
                      &ldquo;{story.quote}&rdquo;
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-gray-100 flex items-center justify-between text-xs">
                    <span className="font-bold text-[#0d3319]">
                      &mdash; {story.author}
                    </span>
                    <span className="text-gray-400 font-medium">
                      {story.ageOrRole}
                    </span>
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
