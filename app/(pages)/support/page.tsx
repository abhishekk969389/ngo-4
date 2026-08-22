import { site, SectionProps } from "@/app/data";
import Banner from "@/app/components/ui/banner";
import Contact from "@/app/components/layout/support/contact";
import Help from "@/app/components/layout/support/help";
import HomeCta from "@/app/components/ui/homecta";

export default function SupportPage({ data: propData, className }: SectionProps<any> = {}) {
  const data = propData || site;
  return (
    <>
      <Banner pageKey="support" />
      <Help />
      <Contact />
       <div className="pt-0.5">
      <HomeCta />
      </div>
     
    </>
  );
}
