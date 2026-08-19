import Banner from "@/app/components/ui/banner";
import EnquirySec from "@/app/components/layout/enquiry/enquirysec";
import HomeCta from "@/app/components/ui/homecta";

export default function EnquiryPage() {
  return (
    <>
      <Banner pageKey="enquiry" />
      <EnquirySec />
      <HomeCta />
    </>
  );
}
