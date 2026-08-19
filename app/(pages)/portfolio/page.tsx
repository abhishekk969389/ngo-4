import Banner from "@/app/components/ui/banner";
import OurPortfolio from "@/app/components/layout/portfolio/ourportfolio";
import HomeCta from "@/app/components/ui/homecta";

export default function PortfolioPage() {
  return (
    <>
      <Banner pageKey="portfolio" />
      <OurPortfolio />
      <HomeCta />
    </>
  );
}
