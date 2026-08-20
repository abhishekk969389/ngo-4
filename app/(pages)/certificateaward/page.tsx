import { site, SectionProps } from "@/app/data";
import Banner from "@/app/components/ui/banner";
import AchievementSection from "@/app/components/layout/certificate/achivement";
import CertificateSection from "@/app/components/layout/certificate/section";
import HomeCta from "@/app/components/ui/homecta";

export default function CertificateAwardPage({ data: propData, className }: SectionProps<any> = {}) {
  const data = propData || site;
  return (
    <>
      <Banner pageKey="certificateaward" />
      <CertificateSection />
      <AchievementSection />
      <HomeCta />
    </>
  );
}
