import {
  BookOpenText,
  MessageSquareText,
  Mail,
  Headphones,
} from "lucide-react";
import ngoDataJson from "@/app/data/ngoData_structured.json";
import type { NgoData, NgoHelpCard } from "@/app/type/ngo";

const data = new Proxy(ngoDataJson as any, {
  get(target, prop: string) {
    if (prop === "$$typeof") return undefined;
    return target.NGO?.sections?.[prop]?.variants?.["Legacy_" + prop];
  },
});

const iconMap = {
  articles: BookOpenText,
  faq: MessageSquareText,
  mail: Mail,
  support: Headphones,
};

export default function Help() {
  const helpData = data.helpSection;

  if (!helpData) return null;

  const getIcon = (icon: string) => {
    const IconComponent = iconMap[icon as keyof typeof iconMap] ?? BookOpenText;
    return <IconComponent className="h-8 w-8 text-[#234b2c] stroke-[1.5]" />;
  };

  return (
    <section className="bg-white mt-6 sm:mt-8 md:mt-10 lg:mt-14 pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center">
          <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0d3319] leading-[1.2] sm:leading-[1.18]">
            {helpData.heading.line1}{" "}
            <span className="text-[#2c7a3f]">{helpData.heading.line2}</span>
          </h2>

          <div className="mt-3 flex justify-center">
            <span className="h-[2.5px] w-12 rounded-full bg-[#2c7a3f]" />
          </div>

          <p className="mx-auto mt-4 max-w-xl text-xs sm:text-sm md:text-base leading-relaxed text-gray-600 font-sans">
            {helpData.subheading}
          </p>
        </div>

        {/* 4-Column Cards Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {helpData.cards.map((card: NgoHelpCard) => (
            <div
              key={card.id}
              className="flex flex-col items-center justify-between rounded-2xl border border-[#eef2ec] bg-[#f8faf7] p-6 text-center transition-all duration-300 hover:shadow-sm"
            >
              <div className="flex flex-col items-center">
                <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-[#e5ebe3]">
                  {getIcon(card.icon)}
                </div>

                <div className="mt-5 h-[2px] w-8 rounded-full bg-[#4a6d51]/40" />

                <h3 className="mt-4 font-serif text-xl font-bold text-[#16351d]">
                  {card.title}
                </h3>

                <p className="mt-3 text-sm sm:text-[0.95rem] leading-relaxed text-[#4d5a4f]">
                  {card.description}
                </p>
              </div>

              <button className="mt-8 inline-flex h-10 w-44 items-center justify-center gap-2 rounded-lg border border-[#234b2c] bg-transparent px-5 py-3 text-sm font-semibold text-[#234b2c] transition hover:bg-[#234b2c] hover:text-white">
                <span>{card.button || "Learn More"}</span>
                <span className="text-base">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
