import { site, SectionProps } from "@/app/data";
import Banner from "@/app/components/ui/banner";
import OurPortfolio from "@/app/components/layout/portfolio/ourportfolio";
import HomeCta from "@/app/components/ui/homecta";

export default function PortfolioPage({ data: propData, className }: SectionProps<any> = {}) {
  const data = propData || site;
  return (
    <>
      <Banner pageKey="portfolio" />
      <OurPortfolio />
      <HomeCta />
    </>
  );
}
