import Banner from "@/app/components/ui/banner";
import TermsSection from "@/app/components/layout/termscondition/termssection";
import HomeCta from "@/app/components/ui/homecta";

export default function TermsConditionPage() {
  return (
    <>
      <Banner pageKey="termscondition" />
      <TermsSection />
      <HomeCta />
    </>
  );
}
