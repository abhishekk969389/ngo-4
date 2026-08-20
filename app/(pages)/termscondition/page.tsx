import { site, SectionProps } from "@/app/data";
import Banner from "@/app/components/ui/banner";
import TermsSection from "@/app/components/layout/termscondition/termssection";
import HomeCta from "@/app/components/ui/homecta";

export default function TermsConditionPage({ data: propData, className }: SectionProps<any> = {}) {
  const data = propData || site;
  return (
    <>
      <Banner pageKey="termscondition" />
      <TermsSection />
      <HomeCta />
    </>
  );
}
