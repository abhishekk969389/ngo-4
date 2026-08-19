import Banner from "@/app/components/ui/banner";
import ImpactGlance from "@/app/components/layout/csr/impactglance";
import FocusArea from "@/app/components/layout/csr/focusarea";
import CsrInitiatives from "@/app/components/layout/csr/csrinitiavies";
import Goals from "@/app/components/layout/csr/goals";
import OurCommitment from "@/app/components/layout/csr/ourcommitment";
import HomeCta from "@/app/components/ui/homecta";

export default function CSRPage() {
  return (
    <>
      <Banner pageKey="csr" />
      <ImpactGlance />
      <FocusArea />
      <CsrInitiatives />
      <Goals />
      <OurCommitment />
      <HomeCta />
    </>
  );
}
