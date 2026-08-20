import type { NgoGoalItem } from "@/app/data";
import { site, SectionProps, NGOgoalsSectionData } from "@/app/data";
import {
  BookOpenText,
  HeartPulse,
  Droplets,
  SunMedium,
  TrendingUp,
  Globe2,
  Leaf,
  Handshake,
  Users,
  Heart,
} from "lucide-react";



const iconMap = {
  book: BookOpenText,
  health: HeartPulse,
  gender: Users,
  water: Droplets,
  energy: SunMedium,
  growth: TrendingUp,
  climate: Leaf,
  partnership: Handshake,
};

export default function Goals({ data, className }: SectionProps<NGOgoalsSectionData> = {}) {
  const goalsData = data || site.goalssection;

  if (!goalsData) return null;

  const getIcon = (icon: string) => {
    const IconComponent = iconMap[icon as keyof typeof iconMap] ?? Globe2;
    return (
      <IconComponent className="h-10 w-10 text-white sm:h-12 sm:w-12 stroke-[1.8]" />
    );
  };

  return (
    <section className="bg-white pt-12">
      <div className="mx-auto max-w-[1350px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl font-bold tracking-tight text-[#0d3319] leading-[1.2] sm:leading-[1.18]">
            {goalsData.heading}
          </h2>

          <div className="mt-3 flex items-center justify-center gap-2">
            <span className="h-px w-10 bg-[#a3b8a7]/50 sm:w-14" />
            <Heart className="h-3.5 w-3.5 fill-[#2c7a3f] text-[#2c7a3f]" />
            <span className="h-px w-10 bg-[#a3b8a7]/50 sm:w-14" />
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 lg:grid-cols-8">
          {goalsData.items.map((goal: NgoGoalItem) => (
            <div
              key={goal.id}
              className="flex aspect-square flex-col justify-between rounded-xl p-3 sm:p-3.5 text-white shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-md"
              style={{ backgroundColor: goal.accent }}
            >
              <div className="flex items-start gap-1.5 text-left">
                <span className="text-2xl font-black leading-none tracking-tight sm:text-3xl">
                  {goal.code}
                </span>
                <span className="text-[9px] font-extrabold uppercase leading-tight tracking-tight sm:text-[10px]">
                  {goal.title}
                </span>
              </div>

              <div className="flex flex-1 items-center justify-center pt-2">
                {getIcon(goal.icon)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
