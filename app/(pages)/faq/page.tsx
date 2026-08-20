import { site, SectionProps } from "@/app/data";
import Banner from "@/app/components/ui/banner";
import FaqSec from "@/app/components/layout/Faq/faqsec";
import HomeCta from "@/app/components/ui/homecta";

export default function FaqPage({ data: propData, className }: SectionProps<any> = {}) {
  const data = propData || site;
  return (
    <>
      <Banner pageKey="faq" />
      <FaqSec />
      <HomeCta />
    </>
  );
}
