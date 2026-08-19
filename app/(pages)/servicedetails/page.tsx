import Banner from "@/app/components/ui/banner";
import ServiceHeader from "@/app/components/layout/servicedetails/serviceheader";
import ServiceFeaturesApproach from "@/app/components/layout/servicedetails/servicefeaturesapproach";
import ServiceImpactCta from "@/app/components/layout/servicedetails/serviceimpactcta";
import HomeCta from "@/app/components/ui/homecta";
import ngoDataJson from '@/app/data/ngoData_structured.json';
import type { NgoData, PageBannerData, ServiceDetailItem } from "@/app/type/ngo";
import { notFound } from "next/navigation";

const data = new Proxy(ngoDataJson as any, {
  get(target, prop: string) {
    if (prop === '$typeof') return undefined;
    return target.NGO?.sections?.[prop]?.variants?.["Legacy_" + prop];
  }
});

interface ServiceDetailsPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function ServiceDetailsPage({ searchParams }: ServiceDetailsPageProps) {
  const resolvedSearchParams = await searchParams;
  const rawId = typeof resolvedSearchParams.id === "string" ? resolvedSearchParams.id : "education";
  const idKey = rawId.toLowerCase().trim();
  const serviceDetail: ServiceDetailItem | undefined =
    (data.serviceDetails && data.serviceDetails[idKey]) ||
    Object.values(data.serviceDetails || {}).find(
      (s: any) => String(s.numericId) === idKey || s.id.toLowerCase() === idKey
    ) ||
    data.serviceDetails?.["education"];
  if (!serviceDetail) {
    notFound();
  }

  
  const bannerConfig =
    serviceDetail.banner ||
    data.pageBanners?.servicesDetail ||
    data.pageBanners?.services ||
    data.pageBanners?.default;

  const baseBreadcrumbs = bannerConfig?.breadcrumbs || [];

  const dynamicBannerData: PageBannerData = {
    title: serviceDetail.header?.title || bannerConfig?.title || '',
    backgroundImage: bannerConfig?.backgroundImage || '/banner_bg.png',
    altText: serviceDetail.header?.title || bannerConfig?.altText || '',
    breadcrumbs: [
      ...baseBreadcrumbs.map((item: any) => ({
        ...item,
        isCurrent: false,
      })),
      {
        id: baseBreadcrumbs.length + 1,
        label: serviceDetail.header?.title || bannerConfig?.title || '',
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