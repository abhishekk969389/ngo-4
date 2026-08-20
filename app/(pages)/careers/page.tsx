import { site, SectionProps } from "@/app/data";
import Banner from "@/app/components/ui/banner";
import CareerSec from "@/app/components/layout/careers/careersec";
import HomeCta from "@/app/components/ui/homecta";

export default function CareersPage({ data: propData, className }: SectionProps<any> = {}) {
  const data = propData || site;
  return (
    <>
      <Banner pageKey="careers" />
      <CareerSec />
      <HomeCta />
    </>
  );
}
