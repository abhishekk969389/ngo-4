import { site, SectionProps } from "@/app/data";
import Banner from "@/app/components/ui/banner";
import EnquirySec from "@/app/components/layout/enquiry/enquirysec";
import HomeCta from "@/app/components/ui/homecta";

export default function EnquiryPage({ data: propData, className }: SectionProps<any> = {}) {
  const data = propData || site;
  return (
    <>
      <Banner pageKey="enquiry" />
      <EnquirySec />
      <HomeCta />
    </>
  );
}
