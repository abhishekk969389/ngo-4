import { notFound } from 'next/navigation';
import Banner from '@/app/components/ui/banner';
import CaseStudyOverviewSection from '@/app/components/layout/casestudy/casestudyoverview';
import CaseStudyImpactStory from '@/app/components/layout/casestudy/casestudyimpactstory';
import CaseStudyGallerySection from '@/app/components/layout/casestudy/casestudygallery';
import ngoDataJson from '@/app/data/ngoData_structured.json';
import type { NgoData, CaseStudyDetailItem, PageBannerData } from '@/app/type/ngo';

const data = new Proxy(ngoDataJson as any, {
  get(target, prop: string) {
    if (prop === '$typeof') return undefined;
    return target.NGO?.sections?.[prop]?.variants?.["Legacy_" + prop];
  }
});

interface CaseStudyDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  const details = data.caseStudyDetails || {};
  const keys = Object.keys(details);
  return keys.map((key) => ({
    id: key,
  }));
}

export default async function CaseStudyDetailPage({ params }: CaseStudyDetailPageProps) {
  const resolvedParams = await params;
  const { id } = resolvedParams;

  const idKey = (id || '').toLowerCase().trim();

  const detailsMap = data.caseStudyDetails || {};

  const detailItem: CaseStudyDetailItem | undefined =
    detailsMap[idKey] ||
    Object.values(detailsMap).find(
      (item: any) => String(item.numericId) === idKey || item.id.toLowerCase() === idKey
    ) ||
    detailsMap['education'] ||
    detailsMap['1'];

  if (!detailItem) {
    notFound();
  }

  const casestudyBannerConfig =
    data.pageBanners?.casestudyDetail || data.pageBanners?.casestudy || data.pageBanners?.default;

  const baseBreadcrumbs = casestudyBannerConfig?.breadcrumbs || [];

  const dynamicBannerData: PageBannerData = {
    title: detailItem.title || casestudyBannerConfig?.title || '',
    backgroundImage: casestudyBannerConfig?.backgroundImage || '/banner_bg.png',
    altText: detailItem.title || casestudyBannerConfig?.altText || '',
    breadcrumbs: [
      ...baseBreadcrumbs.map((item: any) => ({
        ...item,
        isCurrent: false,
      })),
      {
        id: baseBreadcrumbs.length + 1,
        label: detailItem.title || casestudyBannerConfig?.title || '',
        isCurrent: true,
      },
    ],
  };

  return (
    <>
      <Banner bannerData={dynamicBannerData} />
      <CaseStudyOverviewSection data={detailItem.overview} />
      <CaseStudyImpactStory impact={detailItem.impact} story={detailItem.story} />
      <CaseStudyGallerySection gallery={detailItem.gallery} />
    </>
  );
}
