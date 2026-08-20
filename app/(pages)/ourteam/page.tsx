import { site, SectionProps } from "@/app/data";
import Banner from "@/app/components/ui/banner";
import TeamSection from "@/app/components/layout/ourteam/teamsection";
import HomeCta from "@/app/components/ui/homecta";

export default function OurTeamPage({ data: propData, className }: SectionProps<any> = {}) {
  const data = propData || site;
  return (
    <>
      <Banner pageKey="ourteam" />
      <TeamSection />
      <HomeCta />
    </>
  );
}
