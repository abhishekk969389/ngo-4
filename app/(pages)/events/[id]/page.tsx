import type { PageBannerData, EventDetailItem } from "@/app/data";
import { site } from "@/app/data";
import { notFound } from "next/navigation";
import Banner from "@/app/components/ui/banner";
import HomeCta from "@/app/components/ui/homecta";
import EventHeader from "@/app/components/layout/eventdetails/eventheader";
import EventContent from "@/app/components/layout/eventdetails/eventcontent";
import EventSidebar from "@/app/components/layout/eventdetails/eventsidebar";



interface EventDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  const details = site.eventDetails || {};
  const keys = Object.keys(details);
  return keys.map((key) => ({
    id: key,
  }));
}

export default async function EventDetailPage({
  params,
}: EventDetailPageProps) {
  const resolvedParams = await params;
  const { id } = resolvedParams;

  const idKey = (id || "").toLowerCase().trim();

  const detailsMap = (site.eventDetails as any) || {};

  const detailItem: EventDetailItem | undefined =
    detailsMap[idKey] ||
    Object.values(detailsMap).find(
      (item: any) =>
        String(item.numericId) === idKey || item.id.toLowerCase() === idKey,
    ) ||
    detailsMap["community-cleanup"] ||
    detailsMap["1"];

  if (!detailItem) {
    notFound();
  }

  const eventsBannerConfig =
    site.pageBanners?.eventsDetail ||
    site.pageBanners?.events ||
    site.pageBanners?.default;

  const baseBreadcrumbs = eventsBannerConfig?.breadcrumbs || [];

  const dynamicBannerData: PageBannerData = {
    title: detailItem.title || eventsBannerConfig?.title || "",
    backgroundImage: eventsBannerConfig?.backgroundImage || "/banner_bg.png",
    altText: detailItem.title || eventsBannerConfig?.altText || "",
    breadcrumbs: [
      ...baseBreadcrumbs.map((item: any) => ({
        ...item,
        isCurrent: false,
      })),
      {
        id: baseBreadcrumbs.length + 1,
        label: detailItem.title || eventsBannerConfig?.title || "",
        isCurrent: true,
      },
    ],
  };

  return (
    <>
      <Banner bannerData={dynamicBannerData} />

      {/* Component 1: Event Hero Header */}
      <EventHeader data={detailItem} />

      {/* Main Grid Layout: Left Content Column & Right Sidebar Column */}
      <main className="font-sans px-4 sm:px-6 lg:px-8 max-w-[1380px] mx-auto my-10 sm:my-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Component 2: Event Main Content Left Column */}
          <div className="lg:col-span-8">
            <EventContent data={detailItem} />
          </div>

          {/* Component 3: Event Sidebar Right Column */}
          <div className="lg:col-span-4">
            <EventSidebar data={detailItem} />
          </div>
        </div>
      </main>

      <HomeCta />
    </>
  );
}
