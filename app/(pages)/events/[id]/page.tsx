import type { PageBannerData, EventDetailItem } from "@/app/data";
import { site, slugify } from "@/app/data";
import { notFound } from "next/navigation";
import Banner from "@/app/components/ui/banner";
import HomeCta from "@/app/components/ui/homecta";
import EventHeader from "@/app/components/layout/eventdetails/eventheader";
import EventContent from "@/app/components/layout/eventdetails/eventcontent";
import EventSidebar from "@/app/components/layout/eventdetails/eventsidebar";

interface EventDetailPageProps {
  params: Promise<{ id: string }>;
}

// Data lookup ko normalize karne ke liye single helper function
function getEventMap(): Map<string, EventDetailItem> {
  const map = new Map<string, EventDetailItem>();
  const details = (site.eventDetails as Record<string, EventDetailItem>) || {};

  Object.entries(details).forEach(([key, item]) => {
    if (!item) return;
    const keys = [
      key,
      item.id,
      (item as any).slug,
      item.title && slugify(item.title),
      (item as any).numericId,
    ].filter(Boolean);

    keys.forEach((k) => map.set(String(k).toLowerCase().trim(), item));
  });

  return map;
}

export async function generateStaticParams() {
  const eventMap = getEventMap();
  const keys = new Set(eventMap.keys());

  const cards = [
    ...(site.eventSection?.cards || []),
    ...(site.eventSection?.upcomingCards || []),
  ];

  cards.forEach((card: any) => {
    if (card?.slug) keys.add(card.slug.toLowerCase());
    if (card?.id) keys.add(String(card.id).toLowerCase());
    if (card?.title) keys.add(slugify(card.title).toLowerCase());
  });

  return Array.from(keys).map((id) => ({ id }));
}

export default async function EventDetailPage({ params }: EventDetailPageProps) {
  const { id } = await params;
  const idKey = (id || "").toLowerCase().trim();

  const eventMap = getEventMap();
  const detailItem = eventMap.get(idKey);

  if (!detailItem) {
    notFound();
  }

  const bannerConfig =
    site.pageBanners?.eventsDetail ||
    site.pageBanners?.events ||
    site.pageBanners?.default;

  const baseBreadcrumbs = bannerConfig?.breadcrumbs || [];

  const dynamicBannerData: PageBannerData = {
    title: detailItem.title || bannerConfig?.title || "",
    backgroundImage: bannerConfig?.backgroundImage || "/banner_bg.png",
    altText: detailItem.title || bannerConfig?.altText || "",
    breadcrumbs: [
      ...baseBreadcrumbs.map((item: any) => ({ ...item, isCurrent: false })),
      {
        id: baseBreadcrumbs.length + 1,
        label: detailItem.title || bannerConfig?.title || "",
        isCurrent: true,
      },
    ],
  };

  return (
    <>
      <Banner bannerData={dynamicBannerData} />

      <EventHeader data={detailItem} />

      <main className="font-sans px-4 sm:px-6 lg:px-8 max-w-[1380px] mx-auto my-10 sm:my-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          <div className="lg:col-span-8">
            <EventContent data={detailItem} />
          </div>
          <div className="lg:col-span-4">
            <EventSidebar data={detailItem} />
          </div>
        </div>
      </main>

      <HomeCta />
    </>
  );
}