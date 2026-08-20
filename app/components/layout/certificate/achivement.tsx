import { site, SectionProps, NGOcertificateAchievementSectionData } from "@/app/data";
import { ArrowRight, Trophy } from "lucide-react";
import Link from "next/link";



export default function AchievementSection({ data, className }: SectionProps<NGOcertificateAchievementSectionData> = {}) {
  const certificateAchievementSection = data || site.certificateachievementsection;

  if (!certificateAchievementSection) return null;

  return (
    <section className="bg-white mt-6 sm:mt-8 md:mt-10 lg:mt-14 overflow-hidden">
      <div className="mx-auto max-w-[1350px] px-4 sm:px-6 lg:px-8 mb-6">
        <div className="rounded-2xl sm:rounded-3xl bg-[#f6f9f5] p-5 sm:p-7 lg:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 sm:gap-6 flex-1">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-[#d6e5d8] bg-[#edf4ee] text-[#1f5e2e] flex items-center justify-center shrink-0">
              <Trophy className="w-7 h-7 text-[#1f5e2e] stroke-[1.8]" />
            </div>

            <div className="flex flex-col justify-center">
              <h2 className="text-base sm:text-lg lg:text-xl font-bold text-[#0d3319] font-sans tracking-tight">
                {certificateAchievementSection.title}
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-gray-600 font-sans leading-relaxed max-w-2xl">
                {certificateAchievementSection.description}
              </p>
            </div>
          </div>

          {/* Right Action Block: Outlined White Button */}
          <div className="shrink-0 w-full sm:w-auto flex justify-center md:justify-end">
            <Link
              href={certificateAchievementSection.button.href}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg border border-[#1f5e2e] bg-white px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-bold text-[#1f5e2e] transition-colors hover:bg-[#1f5e2e] hover:text-white font-sans"
            >
              <span>{certificateAchievementSection.button.label}</span>
              <ArrowRight className="h-4 w-4 stroke-[2]" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
