import type { NgoFocusAreaCard } from "@/app/data";
import { site, SectionProps, NGOfocusAreaSectionData } from "@/app/data";
import Image from "next/image";
import { BookOpenText, HeartPulse, Leaf, Users, Heart } from "lucide-react";



const iconMap = {
  book: BookOpenText,
  health: HeartPulse,
  leaf: Leaf,
  users: Users,
  heart: Heart,
};

export default function FocusArea({ data, className }: SectionProps<NGOfocusAreaSectionData> = {}) {
  const focusData = data || site.focusareasection;

  if (!focusData) return null;

  const getIcon = (icon: string) => {
    const IconComponent = iconMap[icon as keyof typeof iconMap] ?? BookOpenText;
    return <IconComponent className="h-5 w-5 text-white sm:h-6 sm:w-6" />;
  };

  return (
    <section className="bg-white py-6">
      <div className="mx-auto max-w-[1350px] px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center">
          <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl font-bold tracking-tight text-[#0d3319] leading-[1.2] sm:leading-[1.18]">
            {focusData.heading}
          </h2>

          <div className="mt-2.5 mb-10 flex items-center justify-center gap-2">
            <span className="h-[1px] w-8 sm:w-12 bg-[#b2cbb6]" />
            <Heart className="h-3.5 w-3.5 fill-[#2c7a3f] text-[#2c7a3f]" />
            <span className="h-[1px] w-8 sm:w-12 bg-[#b2cbb6]" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-5">
          {focusData.cards.map((card: NgoFocusAreaCard) => (
            <div
              key={card.id}
              className="relative flex flex-col rounded-2xl border border-[#eef2ee] bg-white pt-3 shadow-[0_4px_16px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-md"
            >
              <div className="absolute -top-5 left-10 z-10 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full bg-[#1c502c] shadow-sm ring-4 ring-white sm:h-12 sm:w-12">
                {getIcon(card.icon)}
              </div>

              <div className="relative h-48 w-full overflow-hidden rounded-t-xl bg-[#f2f6f3]">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </div>

              <div className="flex flex-1 flex-col p-5 pt-4 text-left">
                <h3 className="font-serif text-lg font-bold text-[#1b4d2e] sm:text-xl leading-snug">
                  {card.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-gray-600">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
