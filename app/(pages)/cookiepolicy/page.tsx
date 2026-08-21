import { site, SectionProps } from "@/app/data";
import Banner from "@/app/components/ui/banner";

import HomeCta from "@/app/components/ui/homecta";
import CookiePolicySec from "@/app/components/layout/cookiepolicy/CookiePolicySec";

export default function CookiePolicyPage({ data: propData, className }: SectionProps<any> = {}) {
  const data = propData || site;
  return (
    <>
      <Banner pageKey="cookiepolicy" />
      <CookiePolicySec />
      <HomeCta />
    </>
  );
}
