import { site, SectionProps } from "@/app/data";
import Banner from "@/app/components/ui/banner";
import ServiceHeader from "@/app/components/layout/servicedetails/serviceheader";
import ServiceFeaturesApproach from "@/app/components/layout/servicedetails/servicefeaturesapproach";
import ServiceImpactCta from "@/app/components/layout/servicedetails/serviceimpactcta";
import HomeCta from "@/app/components/ui/homecta";
import type {
  NgoData,
  PageBannerData,
  ServiceDetailItem,
} from "@/app/data";
import { notFound } from "next/navigation";



interface ServiceDetailsPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function ServiceDetailsPage({
  searchParams,
}: ServiceDetailsPageProps) {
  const resolvedSearchParams = await searchParams;
  const rawId =
    typeof resolvedSearchParams.id === "string"
      ? resolvedSearchParams.id
      : "education";
  const idKey = rawId.toLowerCase().trim();
  const serviceDetail: ServiceDetailItem | undefined =
    (site.serviceDetails && (site.serviceDetails as any)[idKey]) ||
    Object.values(site.serviceDetails || {}).find(
      (s: any) => String(s.numericId) === idKey || s.id.toLowerCase() === idKey,
    ) ||
    (site.serviceDetails as any)?.["education"];
  if (!serviceDetail) {
    notFound();
  }

  const bannerConfig =
    serviceDetail.banner ||
    site.pageBanners?.servicesDetail ||
    site.pageBanners?.services ||
    site.pageBanners?.default;

  const baseBreadcrumbs = bannerConfig?.breadcrumbs || [];
  const hasSpecificBanner = !!serviceDetail.banner;
  const currentTitle = serviceDetail.header?.title || bannerConfig?.title || "";

  const dynamicBannerData: PageBannerData = {
    title: currentTitle,
    backgroundImage: bannerConfig?.backgroundImage || "/banner_bg.png",
    altText: currentTitle,
    breadcrumbs: hasSpecificBanner
      ? baseBreadcrumbs
      : [
          ...baseBreadcrumbs.map((item: any) => ({
            ...item,
            isCurrent: false,
          })),
          {
            id: baseBreadcrumbs.length + 1,
            label: currentTitle,
            isCurrent: true,
          },
        ],
  };

  return (
    <>
      <Banner bannerData={dynamicBannerData} />

      <ServiceHeader data={serviceDetail.header} />
      <ServiceFeaturesApproach data={serviceDetail.featuresApproach} />
      <ServiceImpactCta data={serviceDetail.impactCta} />

      <HomeCta />
    </>
  );
}
