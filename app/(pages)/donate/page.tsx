import Banner from "@/app/components/ui/banner";
import DonateSec from "@/app/components/layout/donate/donatesec";
import TogetherDonate from "@/app/components/layout/donate/togetherdonate";
import HomeCta from "@/app/components/ui/homecta";

export default function DonatePage() {
  return (
    <>
      <Banner pageKey="donatenow" />
      <DonateSec />
      <TogetherDonate />
      <HomeCta />
    </>
  );
}
