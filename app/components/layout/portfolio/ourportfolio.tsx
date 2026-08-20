import { site, SectionProps, SiteData } from "@/app/data";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpenText,
  Heart,
  Sprout,
  GraduationCap,
  Droplets,
  Users,
  Building2,
} from "lucide-react";



const iconMap = {
  school: GraduationCap,
  heart: Heart,
  water: Droplets,
  women: Users,
  leaf: Sprout,
  community: Building2,
  default: BookOpenText,
};

// Pastel card color themes matched to the screenshot
const themeStyles = [
  { bg: "bg-[#f3f7ee]", iconBg: "bg-[#e3edd9]", text: "text-[#234b2c]" }, // Green
  { bg: "bg-[#f0f4fa]", iconBg: "bg-[#dae4f5]", text: "text-[#1e3a8a]" }, // Blue
  { bg: "bg-[#fcf8ec]", iconBg: "bg-[#f7edce]", text: "text-[#855314]" }, // Gold/Yellow
  { bg: "bg-[#f5f2fa]", iconBg: "bg-[#e8e0f5]", text: "text-[#4c1d95]" }, // Purple
  { bg: "bg-[#f4f7f1]", iconBg: "bg-[#e2ebd9]", text: "text-[#234b2c]" }, // Soft Green
  { bg: "bg-[#faf2f0]", iconBg: "bg-[#f5e3de]", text: "text-[#9f1239]" }, // Rose/Coral
];

export default function OurPortfolio({ data: propData, className }: SectionProps<SiteData> = {}) {
  const data = propData || site;
  const portfolioData = data.portfolioSection as any;

  if (!portfolioData) return null;

  const getIcon = (iconName: string, textClass: string) => {
    const IconComponent =
      iconMap[iconName as keyof typeof iconMap] ?? iconMap.default;
    return <IconComponent className={`h-5 w-5 ${textClass} stroke-[1.8]`} />;
  };

  return (
    <section className="bg-white mt-6 sm:mt-8 md:mt-10 lg:mt-14 pb-12">
      <div className="mx-auto max-w-[1350px] px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center gap-1.5 text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#0d3319] font-sans">
            <Sprout className="h-4 w-4 fill-[#2c7a3f] text-[#2c7a3f]" />
            <span>{portfolioData.badge || "OUR PORTFOLIO"}</span>
          </div>

          <h2 className="mt-3 font-serif text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0d3319] leading-[1.2] sm:leading-[1.18]">
            {portfolioData.heading?.line1 || "Stories of Change,"}
            <span className="block font-serif italic font-normal text-[#2c7a3f] mt-1">
              {portfolioData.heading?.line2 || "Built Together."}
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-xs sm:text-sm md:text-base leading-relaxed text-gray-600 font-sans">
            {portfolioData.description}
          </p>
        </div>

        {/* 2-Column Responsive Portfolio Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {portfolioData.cards.map((card: any, index: number) => {
            // Alternates layout direction per column
            const isRightColumn = index % 2 !== 0;
            const theme = themeStyles[index % themeStyles.length];

            return (
              <article
                key={card.id}
                className={`group relative flex flex-col overflow-hidden rounded-2xl ${theme.bg} transition-all duration-300 hover:shadow-sm sm:flex-row`}
              >
                <div
                  className={`relative h-48 w-full shrink-0 overflow-hidden sm:h-auto sm:w-[44%] ${isRightColumn
                    ? "sm:order-2 [clip-path:none] sm:[clip-path:polygon(12%_0,100%_0,100%_100%,0%_100%)]"
                    : "sm:order-1 [clip-path:none] sm:[clip-path:polygon(0_0,100%_0,88%_100%,0_100%)]"
                    }`}
                >
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 320px"
                  />
                </div>

                {/* Content Box - Icon Side-by-side with Content */}
                <div
                  className={`flex flex-1 items-start gap-3.5 p-5 sm:gap-4 sm:p-6 ${isRightColumn ? "sm:order-1" : "sm:order-2"
                    }`}
                >
                  {/* Left Side: Icon Circle */}
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${theme.iconBg} shadow-inner`}
                  >
                    {getIcon(card.icon, theme.text)}
                  </div>

                  {/* Right Side: Title, Description, and Link */}
                  <div className="flex min-w-0 flex-1 flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-base font-bold text-[#16351d] sm:text-lg">
                        {card.title}
                      </h3>

                      <p className="mt-1.5 text-xs leading-relaxed text-[#59665b] sm:text-sm">
                        {card.description}
                      </p>
                    </div>

                    <Link
                      href={card.href || `/portfolio/${card.id}`}
                      className={`inline-flex items-center gap-1.5 mt-4 text-xs font-bold ${theme.text} transition hover:opacity-80`}
                    >
                      <span>{card.buttonLabel || "View Project"}</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
