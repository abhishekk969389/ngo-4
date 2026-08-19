import Link from "next/link";
import { HeartHandshake, ArrowRight, Sprout } from "lucide-react";
import type { PortfolioDetailCtaData } from "@/app/type/ngo";

interface PortfolioDetailCtaProps {
  data: PortfolioDetailCtaData;
}

export default function PortfolioDetailCta({ data }: PortfolioDetailCtaProps) {
  if (!data) return null;

  return (
    <section className="font-sans px-4 sm:px-6 lg:px-8 max-w-[1348px] mx-auto my-12 sm:my-16">
      <div className="relative overflow-hidden rounded-3xl bg-[#f4f8f3] border border-[#e2ebd9] p-6 sm:p-8 lg:p-10 shadow-xs">
        {/* Subtle decorative leaf in top right */}
        <div className="absolute top-4 right-4 text-[#2c7a3f]/10 pointer-events-none">
          <Sprout className="w-24 h-24 stroke-[1]" />
        </div>

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left Side: Icon + Text */}
          <div className="flex items-center gap-4 sm:gap-6 text-center md:text-left">
            <div className="hidden sm:flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#1b4d25] text-white shadow-md">
              <HeartHandshake className="w-7 h-7 stroke-[1.8]" />
            </div>

            <div className="space-y-1 max-w-2xl">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold font-serif text-[#0d3319]">
                {data.title}
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {data.description}
              </p>
            </div>
          </div>

          {/* Right Side: CTA Button */}
          <div className="shrink-0 w-full md:w-auto text-center">
            <Link
              href={data.buttonHref || "/donate"}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#1b4d25] hover:bg-[#2c7a3f] text-white text-xs sm:text-sm font-bold tracking-wide transition-all shadow-sm hover:shadow-md w-full md:w-auto"
            >
              <span>{data.buttonLabel || "Support More Projects"}</span>
              <ArrowRight className="w-4 h-4 stroke-[2]" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
