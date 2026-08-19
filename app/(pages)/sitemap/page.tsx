import Banner from "@/app/components/ui/banner";
import SitemapSection from "@/app/components/layout/sitemap/sitemapsection";
import LegalSection from "@/app/components/layout/sitemap/legal";
import HomeCta from "@/app/components/ui/homecta";

export default function SitemapPage() {
  return (
    <>
      <Banner pageKey="sitemap" />
      <SitemapSection />
      <LegalSection />
      <HomeCta />
    </>
  );
}
