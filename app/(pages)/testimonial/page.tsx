import { site, SectionProps } from "@/app/data";
import Banner from "@/app/components/ui/banner";
import Testinomial from "@/app/components/homelayout/testinomial";
import HomeCta from "@/app/components/ui/homecta";

export default function TestimonialPage({ data: propData, className }: SectionProps<any> = {}) {
  const data = propData || site;
  return (
    <>
      <Banner pageKey="testimonial" />
      <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-14">
        <Testinomial data={data.testimonials} isSlider={false} />
      </div>
      <HomeCta data={data.homecta} />
    </>
  );
}

