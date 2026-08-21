import { site, SectionProps } from "@/app/data";
import Banner from "@/app/components/ui/banner";
import CertificateSection from "@/app/components/layout/certificate/section";
import HomeCta from "@/app/components/ui/homecta";

export default function CertificateAwardPage({ data: propData, className }: SectionProps<any> = {}) {
  const data = propData || site;
  return (
    <>
      <Banner pageKey="certificateaward" />
      <CertificateSection />
      <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-14">
      <HomeCta />
      </div>
    </>
  );
}

