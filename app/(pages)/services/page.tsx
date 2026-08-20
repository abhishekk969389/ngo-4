import { site, SectionProps } from "@/app/data";
import Banner from "@/app/components/ui/banner";
import ServiceSection from "@/app/components/layout/services/servicesection";
import OurImpact from "@/app/components/layout/services/ourimpact";
import HomeCta from "@/app/components/ui/homecta";

export default function ServicesPage({ data: propData, className }: SectionProps<any> = {}) {
  const data = propData || site;
  return (
    <>
      <Banner pageKey="services" />
      <ServiceSection />
      <OurImpact />
      <HomeCta />
    </>
  );
}
