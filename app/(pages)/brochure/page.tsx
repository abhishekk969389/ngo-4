import { site, SectionProps } from "@/app/data";
import Banner from "@/app/components/ui/banner";
import BrochureSec from "@/app/components/layout/brochure/brochuresec";
import HomeCta from "@/app/components/ui/homecta";

export default function BrochurePage({ data: propData, className }: SectionProps<any> = {}) {
  const data = propData || site;
  return (
    <>
      <Banner pageKey="brochure" />
      <BrochureSec />
      <HomeCta />
    </>
  );
}
