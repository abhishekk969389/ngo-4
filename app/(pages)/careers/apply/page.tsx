import Banner from "@/app/components/ui/banner";
import CareerApply from "@/app/components/layout/careers/careerapply";
import HomeCta from "@/app/components/ui/homecta";
import ngoDataJson from "@/app/data/ngoData_structured.json";
import type { NgoData, PageBannerData } from "@/app/type/ngo";

const data = new Proxy(ngoDataJson as any, {
  get(target, prop: string) {
    if (prop === "$typeof") return undefined;
    return target.NGO?.sections?.[prop]?.variants?.["Legacy_" + prop];
  },
});

export default function CareerApplyPage() {
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
