import { site, SectionProps } from "@/app/data";
import Banner from "@/app/components/ui/banner";
import RefundSec from "@/app/components/layout/refundpolicy/refundsec";
import HomeCta from "@/app/components/ui/homecta";

export default function RefundPolicyPage({ data: propData, className }: SectionProps<any> = {}) {
  const data = propData || site;
  return (
    <>
      <Banner pageKey="refundpolicy" />
      <RefundSec />
      <HomeCta />
    </>
  );
}
