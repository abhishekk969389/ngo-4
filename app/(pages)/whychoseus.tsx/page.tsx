import Banner from "@/app/components/ui/banner";
import AboutSection from "@/app/components/layout/about/aboutsection";
import WhatWeDo from "@/app/components/layout/about/whatwedo";
import OurMission from "@/app/components/homelayout/ourmission";
import HomeCta from "../../components/ui/homecta";

export default function AboutPage() {
  return (
    <>
      <Banner pageKey="about" />
      <AboutSection />
      <OurMission />
      <WhatWeDo />
      <HomeCta />
    </>
  );
}
