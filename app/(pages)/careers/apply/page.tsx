import type { PageBannerData } from "@/app/data";
import { site, SectionProps } from "@/app/data";
import Banner from "@/app/components/ui/banner";
import CareerApply from "@/app/components/layout/careers/careerapply";
import HomeCta from "@/app/components/ui/homecta";



export default function CareerApplyPage({ data: propData, className }: SectionProps<any> = {}) {
  const data = propData || site;
  const careersBannerConfig = data.pageBanners?.careers;

  const dynamicBannerData: PageBannerData = {
    title: careersBannerConfig?.title || "Careers",
    backgroundImage: careersBannerConfig?.backgroundImage || "/banner_bg.png",
    altText: careersBannerConfig?.altText || "Careers Application Banner",
    breadcrumbs: [
      {
        id: 1,
        label: careersBannerConfig?.breadcrumbs?.[0]?.label || "Home",
        href: careersBannerConfig?.breadcrumbs?.[0]?.href || "/",
        icon: careersBannerConfig?.breadcrumbs?.[0]?.icon || "home",
      },
      {
        id: 2,
        label: careersBannerConfig?.breadcrumbs?.[1]?.label || "Careers",
        href: "/careers",
      },
      {
        id: 3,
        label: "Apply Now",
        isCurrent: true,
      },
    ],
  };

  return (
    <>
      <Banner bannerData={dynamicBannerData} />
      <CareerApply />
      <HomeCta />
    </>
  );
}
