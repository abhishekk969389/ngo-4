import Banner from "@/app/components/ui/banner";
import BranchSection from "@/app/components/layout/branches/branchsection";
import HomeCta from "@/app/components/ui/homecta";

export default function BranchesPage() {
  return (
    <>
      <Banner pageKey="branches" />
      <BranchSection />
      <HomeCta />
    </>
  );
}
