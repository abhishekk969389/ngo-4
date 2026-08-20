import { site, SectionProps, NGOlegalSectionData } from "@/app/data";
import Link from "next/link";
import { ShieldCheck, ChevronRight } from "lucide-react";



export default function LegalSection({ data, className }: SectionProps<NGOlegalSectionData> = {}) {
  const legalSection = data || site.legalsection;

  if (!legalSection) return null;

  return (
    <section className="bg-white py-6 sm:py-8 overflow-hidden">
      <div className="mx-auto max-w-[1350px] px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl sm:rounded-3xl border border-gray-100/90 bg-[#fafcf9] p-3.5 sm:p-4 lg:p-5 shadow-2xs flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left Side: Legal Heading & Icon */}
          <div className="flex items-center gap-3 shrink-0">
            <span className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-[#e8f2ea] text-[#1f5e2e]">
              <ShieldCheck className="h-5 w-5 stroke-[1.8]" />
            </span>
            <h2 className="text-base sm:text-lg font-bold text-[#0d3319] font-serif tracking-tight">
              {legalSection.heading}
            </h2>
          </div>

          <div className="md:absolute md:left-1/2 md:-translate-x-1/2 flex flex-wrap items-center justify-center divide-x divide-gray-200">
            {legalSection.links.map((link: any) => (
              <Link
                key={link.id}
                href={link.href}
                className="group flex items-center gap-1.5 px-3.5 sm:px-5 py-1 text-xs sm:text-sm font-sans font-medium text-gray-700 hover:text-[#1f5e2e] transition-colors"
              >
                <span>{link.label}</span>
                <ChevronRight className="h-3.5 w-3.5 text-[#1f5e2e] stroke-[2] transition-transform group-hover:translate-x-0.5" />
              </Link>
            ))}
          </div>

          {/* Empty Right Spacer for Perfect Center Balancing on Desktop */}
          <div className="hidden md:block w-24 shrink-0 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
