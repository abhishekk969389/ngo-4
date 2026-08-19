import Banner from "@/app/components/ui/banner";
import OurMission from "@/app/components/layout/mission/ourmission";
import HomeCta from "@/app/components/ui/homecta";

export default function MissionPage() {
  return (
    <>
      <Banner pageKey="mission" />
      <OurMission />
      <HomeCta />
    </>
  );
}
