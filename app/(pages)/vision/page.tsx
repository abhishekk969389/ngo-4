import { site, SectionProps } from "@/app/data";
import Banner from "@/app/components/ui/banner";
import OurVision from "@/app/components/layout/vision/ourvision";
import HomeCta from "@/app/components/ui/homecta";

export default function VisionPage({ data: propData, className }: SectionProps<any> = {}) {
  const data = propData || site;
  return (
    <>
      <Banner pageKey="vision" />
      <OurVision />
      <HomeCta />
    </>
  );
}
