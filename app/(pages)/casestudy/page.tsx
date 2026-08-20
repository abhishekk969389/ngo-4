import { site, SectionProps } from "@/app/data";
import Banner from "@/app/components/ui/banner";
import CaseStudySection from "@/app/components/layout/casestudy/casestudysection";
import HomeCta from "@/app/components/ui/homecta";

export default function CaseStudyPage({ data: propData, className }: SectionProps<any> = {}) {
  const data = propData || site;
  return (
    <>
      <Banner pageKey="casestudy" />
      <CaseStudySection />
      <HomeCta />
    </>
  );
}
