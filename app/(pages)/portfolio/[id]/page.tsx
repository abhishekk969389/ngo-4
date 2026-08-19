import { notFound } from "next/navigation";
import Banner from "@/app/components/ui/banner";
import PortfolioDetailHeader from "@/app/components/layout/portfolio/portfoliodetailheader";
import PortfolioDetailContent from "@/app/components/layout/portfolio/portfoliodetailcontent";
import PortfolioDetailSidebar from "@/app/components/layout/portfolio/portfoliodetailsidebar";
import PortfolioDetailCta from "@/app/components/layout/portfolio/portfoliodetailcta";
import ngoDataJson from "@/app/data/ngoData_structured.json";
import type {
  NgoData,
  PortfolioDetailItem,
  PageBannerData,
} from "@/app/type/ngo";

const data = new Proxy(ngoDataJson as any, {
  get(target, prop: string) {
    if (prop === "$typeof") return undefined;
    return target.NGO?.sections?.[prop]?.variants?.["Legacy_" + prop];
  },
});

interface PortfolioDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  const details = data.portfolioDetails || {};
  const keys = Object.keys(details);
  return keys.map((key) => ({
    id: key,
  }));
}

export default async function PortfolioDetailPage({
  params,
}: PortfolioDetailPageProps) {
  const resolvedParams = await params;
  const { id } = resolvedParams;

  const idKey = (id || "").toLowerCase().trim();

  const detailsMap = data.portfolioDetails || {};

  const projectDetail: PortfolioDetailItem | undefined =
    detailsMap[idKey] ||
    Object.values(detailsMap).find(
      (item: any) =>
        String(item.numericId) === idKey || item.id.toLowerCase() === idKey,
    ) ||
    detailsMap["bright-future-schools"] ||
    detailsMap["1"];

  if (!projectDetail) {
    notFound();
  }

  const portfolioBannerConfig =
    data.pageBanners?.portfolioDetail ||
    data.pageBanners?.portfolio ||
    data.pageBanners?.default;

  const baseBreadcrumbs = portfolioBannerConfig?.breadcrumbs || [];

  const dynamicBannerData: PageBannerData = {
    title: projectDetail.header?.title || portfolioBannerConfig?.title || "",
    backgroundImage: portfolioBannerConfig?.backgroundImage || "/banner_bg.png",
    altText:
      projectDetail.header?.title || portfolioBannerConfig?.altText || "",
    breadcrumbs: [
      ...baseBreadcrumbs.map((item: any) => ({
        ...item,
        isCurrent: false,
      })),
      {
        id: baseBreadcrumbs.length + 1,
        label:
          projectDetail.header?.title || portfolioBannerConfig?.title || "",
        isCurrent: true,
      },
    ],
  };

  return (
    <>
      <Banner bannerData={dynamicBannerData} />
      <PortfolioDetailHeader data={projectDetail.header} />
      <main className="font-sans px-4 sm:px-6 lg:px-8 max-w-[1348px] mx-auto my-10 sm:my-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-7 xl:col-span-8">
            <PortfolioDetailContent data={projectDetail.content} />
          </div>

          <div className="lg:col-span-5 xl:col-span-4">
            <PortfolioDetailSidebar data={projectDetail.sidebar} />
          </div>
        </div>
      </main>

      <PortfolioDetailCta data={projectDetail.cta} />
    </>
  );
}
