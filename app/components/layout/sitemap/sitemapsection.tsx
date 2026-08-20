import { site, SectionProps, NGOsitemapSectionData } from "@/app/data";
import Link from "next/link";
import {
  Home,
  Users,
  Sparkles,
  Newspaper,
  ImageIcon,
  Hand,
  HelpCircle,
  Phone,
  ChevronRight,
} from "lucide-react";



const iconMap: Record<string, React.ElementType> = {
  home: Home,
  users: Users,
  sparkles: Sparkles,
  newspaper: Newspaper,
  image: ImageIcon,
  hands: Hand,
  "help-circle": HelpCircle,
  phone: Phone,
};

export default function SitemapSection({ data, className }: SectionProps<NGOsitemapSectionData> = {}) {
  const sitemapSection = data || site.sitemapsection;

  if (!sitemapSection) return null;

  return (
    <section className=" mt-6 sm:mt-8 md:mt-10 lg:mt-14 overflow-hidden">
      <div className="mx-auto max-w-[1350px] px-4 sm:px-6 lg:px-8">
        {/* Header Block from JSON */}
        <div className="mx-auto max-w-2xl text-center flex flex-col items-center">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0d3319] font-serif leading-[1.2] sm:leading-[1.18] tracking-tight">
            {sitemapSection.heading}
          </h1>

          <div className="w-12 h-[2.5px] bg-[#2c7a3f] rounded-full mt-2.5 mb-3.5" />

          <p className="text-xs sm:text-sm md:text-base text-gray-600 font-sans leading-relaxed max-w-xl">
            {sitemapSection.description}
          </p>
        </div>

        <div className="mt-10 sm:mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {sitemapSection.categories.map((category: any) => {
            const Icon = iconMap[category.icon] || Home;

            return (
              <div
                key={category.id}
                className="rounded-2xl border border-gray-100/90 bg-white shadow-xs overflow-hidden flex flex-col justify-between"
              >
                {/* Category Header (Light Green Container) */}
                <div className="bg-[#f4f8f4] p-4 sm:p-4.5 flex items-center gap-3 border-b border-gray-100">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#e8f2ea] text-[#1f5e2e] shrink-0">
                    <Icon className="h-5 w-5 stroke-[1.8]" />
                  </div>
                  <h2 className="text-base sm:text-lg font-bold text-[#0d3319] font-serif">
                    {category.title}
                  </h2>
                </div>

                <div className="divide-y divide-gray-100/80">
                  {category.links.map((link: any) => (
                    <Link
                      key={link.id}
                      href={link.href}
                      className="group flex items-center justify-between px-4 sm:px-5 py-3 text-xs sm:text-sm font-sans font-medium text-gray-700 hover:text-[#1f5e2e] hover:bg-[#fafdfa] transition-colors"
                    >
                      <span>{link.label}</span>
                      <ChevronRight className="h-3.5 w-3.5 text-gray-400 group-hover:text-[#1f5e2e] transition-colors stroke-[2]" />
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
