import { site, SectionProps } from "@/app/data";
import Banner from "@/app/components/ui/banner";
import SitemapSection from "@/app/components/layout/sitemap/sitemapsection";
import LegalSection from "@/app/components/layout/sitemap/legal";
import HomeCta from "@/app/components/ui/homecta";

export default function SitemapPage({ data: propData, className }: SectionProps<any> = {}) {
  const data = propData || site;
  return (
    <>
      <Banner pageKey="sitemap" />
      <SitemapSection />
      <LegalSection />
      <HomeCta />
    </>
  );
}
