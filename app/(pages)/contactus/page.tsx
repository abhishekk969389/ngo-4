import { site, SectionProps } from "@/app/data";
import Banner from "@/app/components/ui/banner";
import ContactSec from "@/app/components/layout/contactus/contactsec";
import HomeCta from "@/app/components/ui/homecta";

export default function ContactusPage({ data: propData, className }: SectionProps<any> = {}) {
  const data = propData || site;
  return (
    <>
      <Banner pageKey="contactus" />
      <ContactSec />
      <HomeCta />
    </>
  );
}
