import { site, SectionProps } from "@/app/data";
import Banner from "./components/homelayout/banner";
import About from "./components/homelayout/about";
import OurMission from "./components/homelayout/ourmission";
import SmileCauses from "./components/homelayout/smilecauses";
import Testinomial from "./components/homelayout/testinomial";
import OurBlog from "./components/homelayout/ourblog";
import HomeCta from "./components/ui/homecta";

export default function Home({ data: propData, className }: SectionProps<any> = {}) {
  const data = propData || site;
  return (
    <>
      <Banner />
      <About />
      <OurMission />
      <SmileCauses />
      <Testinomial />
      <OurBlog />
      <HomeCta />
    </>
  );
}
