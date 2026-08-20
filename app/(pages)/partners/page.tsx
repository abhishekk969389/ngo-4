import { site, SectionProps } from "@/app/data";
import Banner from "@/app/components/ui/banner";
import PartnerSec from "@/app/components/layout/partners/partnersec";
import PartnerCard from "@/app/components/layout/partners/partnercard";
import BecomePartner from "@/app/components/layout/partners/becomepartner";
import HomeCta from "@/app/components/ui/homecta";

export default function PartnersPage({ data: propData, className }: SectionProps<any> = {}) {
  const data = propData || site;
  return (
    <>
      <Banner pageKey="partners" />
      <PartnerSec />
      <PartnerCard />
      <BecomePartner />
      <HomeCta />
    </>
  );
}
