import { site, SectionProps } from "@/app/data";
import Banner from "@/app/components/ui/banner";
import BranchSection from "@/app/components/layout/branches/branchsection";
import HomeCta from "@/app/components/ui/homecta";

export default function BranchesPage({ data: propData, className }: SectionProps<any> = {}) {
  const data = propData || site;
  return (
    <>
      <Banner pageKey="branches" />
      <BranchSection />
      <HomeCta />
    </>
  );
}
