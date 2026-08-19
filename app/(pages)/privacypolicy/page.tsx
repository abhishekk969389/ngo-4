import Banner from "@/app/components/ui/banner";
import PrivacyPolicySec from "@/app/components/layout/privacypolicy/privacypolicysec";
import HomeCta from "@/app/components/ui/homecta";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Banner pageKey="privacypolicy" />
      <PrivacyPolicySec />
      <HomeCta />
    </>
  );
}
