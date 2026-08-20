import { site, SectionProps } from "@/app/data";
import Banner from "@/app/components/ui/banner";
import MediaSection from "@/app/components/layout/media/mediasection";
import HomeCta from "@/app/components/ui/homecta";

export default function MediaPage({ data: propData, className }: SectionProps<any> = {}) {
  const data = propData || site;
  return (
    <>
      <Banner pageKey="media" />
      <MediaSection />
      <HomeCta />
    </>
  );
}
