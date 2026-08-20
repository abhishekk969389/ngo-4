import type { NgoCsrInitiativeItem } from "@/app/data";
import { site, SectionProps, NGOcsrInitiativesSectionData } from "@/app/data";
import Image from "next/image";
import { BookOpenText, HeartPulse, Users, Leaf, Heart } from "lucide-react";



const iconMap = {
  book: BookOpenText,
  health: HeartPulse,
  users: Users,
  leaf: Leaf,
  team: Users,
  heart: Heart,
};

export default function CsrInitiatives({ data, className }: SectionProps<NGOcsrInitiativesSectionData> = {}) {
  const initiatives = data || site.csrinitiativessection;

  if (!initiatives) return null;

  const getIcon = (icon: string) => {
    const IconComponent = iconMap[icon as keyof typeof iconMap] ?? BookOpenText;
    return <IconComponent className="h-5 w-5 text-[#1d5e2d]" />;
  };

  return (
    <section className="bg-white pt-6">
      <div className="mx-auto max-w-[1350px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl font-bold tracking-tight text-[#0d3319] leading-[1.2] sm:leading-[1.18]">
            {initiatives.heading}
          </h2>

          <div className="mt-3 flex items-center justify-center gap-2">
            <span className="h-px w-10 bg-[#a3b8a7]/50 sm:w-14" />
            <Heart className="h-3.5 w-3.5 fill-[#2c7a3f] text-[#2c7a3f]" />
            <span className="h-px w-10 bg-[#a3b8a7]/50 sm:w-14" />
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {initiatives.items.map((item: NgoCsrInitiativeItem) => (
            <div
              key={item.id}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-md sm:flex-row sm:items-stretch"
            >
              {/* Left Content */}
              <div className="flex flex-1 items-start gap-4 p-5 sm:p-6 sm:pr-2">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#edf4ee]">
                  {getIcon(item.icon)}
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="font-serif text-lg font-bold text-[#132c18] sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#525b54] sm:text-sm">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Right Image with Left Gradient Fade */}
              <div className="relative h-44 w-full shrink-0 overflow-hidden sm:h-auto sm:w-[200px] md:w-[230px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                {/* Smooth left blend into card background */}
                <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-white via-white/20 to-transparent sm:block" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
