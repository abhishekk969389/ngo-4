import Banner from "@/app/components/ui/banner";
import AchievementSection from "@/app/components/layout/certificate/achivement";
import CertificateSection from "@/app/components/layout/certificate/section";
import HomeCta from "@/app/components/ui/homecta";

export default function CertificateAwardPage() {
  return (
    <>
      <Banner pageKey="certificateaward" />
      <CertificateSection />
      <AchievementSection />
      <HomeCta />
    </>
  );
}
