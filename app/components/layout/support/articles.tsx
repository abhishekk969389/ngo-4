import {
  ArrowRight,
  BookOpenText,
  Lock,
  Rocket,
  UserRound,
  CreditCard,
  LayoutDashboard,
  Wrench,
  ChevronRight,
} from 'lucide-react';
import ngoDataJson from '@/app/data/ngoData_structured.json';
import type { NgoArticleCard, NgoArticlesSection, NgoData } from '@/app/type/ngo';

const data = new Proxy(ngoDataJson as any, {
  get(target, prop: string) {
    if (prop === '$$typeof') return undefined;
    return target.NGO?.sections?.[prop]?.variants?.["Legacy_" + prop];
  }
});

const iconMap = {
  rocket: Rocket,
  lock: Lock,
  user: UserRound,
  card: CreditCard,
  dashboard: LayoutDashboard,
  wrench: Wrench,
  default: BookOpenText,
};

export default function Articles() {
  const articlesData = data.articlesSection as NgoArticlesSection | undefined;

  if (!articlesData) return null;

  const getIcon = (icon: string) => {
    const IconComponent = iconMap[icon as keyof typeof iconMap] ?? iconMap.default;
    return <IconComponent className="h-6 w-6 text-[#234b2c] stroke-[1.6]" />;
  };

  // Splits heading dynamically into standard and highlighted word (e.g. "Popular Articles")
  const headingWords = articlesData.heading ? articlesData.heading.split(' ') : [];
  const primaryTitle = headingWords.slice(0, -1).join(' ');
  const highlightedTitle = headingWords.length > 1 ? headingWords[headingWords.length - 1] : '';

  return (
    <section className="relative overflow-hidden bg-white ">
      
      {/* Background Leaves & Dots Watermark Aesthetics */}
      <div className="pointer-events-none absolute left-0 top-1/2 h-40 w-16 -translate-y-1/2 opacity-25">
        <svg viewBox="0 0 100 200" fill="currentColor" className="h-full w-full text-[#3b6043]">
          <path d="M0,100 C30,80 60,40 100,0 C80,40 40,80 0,100 Z" />
          <path d="M0,130 C40,110 70,70 100,30 C70,70 30,110 0,130 Z" />
        </svg>
      </div>
      <div className="pointer-events-none absolute right-2 top-1/3 hidden opacity-25 lg:block">
        <div className="grid grid-cols-3 gap-2 text-[#3b6043]">
          {[...Array(9)].map((_, i) => (
            <span key={i} className="h-1.5 w-1.5 rounded-full bg-current" />
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0d3319] leading-[1.2] sm:leading-[1.18]">
              {primaryTitle}{' '}
              {highlightedTitle && <span className="text-[#2c7a3f]">{highlightedTitle}</span>}
            </h2>
            <div className="mt-2.5 h-[2.5px] w-10 rounded-full bg-[#2c7a3f]" />
            <p className="mt-3 text-xs sm:text-sm md:text-base leading-relaxed text-gray-600 font-sans">
              {articlesData.description}
            </p>
          </div>

          {/* Top Right "View all articles" Action Button */}
          {articlesData.button && (
            <a
              href={articlesData.button.href}
              className="inline-flex shrink-0 items-center gap-2.5 rounded-full border border-[#234b2c] bg-white px-5 py-2.5 text-xs font-semibold text-[#234b2c] transition duration-200 hover:bg-[#234b2c] hover:text-white"
            >
              <span>{articlesData.button.label}</span>
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#234b2c] text-white transition group-hover:bg-white group-hover:text-[#234b2c]">
                <ChevronRight className="h-3 w-3 stroke-[3]" />
              </span>
            </a>
          )}
        </div>

        {/* 2-Column Article Grid matching the Screenshot */}
        <div className="grid gap-5 md:grid-cols-2">
          {articlesData.cards.map((card: NgoArticleCard) => (
            <a
              key={card.id}
              href={card.href}
              className="group flex items-center justify-between rounded-2xl border border-[#edf1ea] bg-[#f9fbf8] p-5 transition-all duration-200 hover:border-[#3b6043]/30 hover:bg-white hover:shadow-md"
            >
              <div className="flex flex-1 items-center gap-4">
                {/* Rounded Icon Circle */}
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#e5ebe3]">
                  {getIcon(card.icon)}
                </div>

                {/* Article Content */}
                <div className="flex-1 pr-3">
                  <h3 className="font-serif text-base font-bold text-[#16351d] sm:text-lg">
                    {card.title}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm leading-relaxed text-[#59665b]">
                    {card.description}
                  </p>
                </div>
              </div>

              {/* Right Arrow Badge */}
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#e8f0e6] text-[#234b2c] transition duration-200 group-hover:bg-[#234b2c] group-hover:text-white">
                <ChevronRight className="h-4 w-4 stroke-[2.5]" />
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}