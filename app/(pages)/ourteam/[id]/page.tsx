import type { TeamMember, PageBannerData } from "@/app/data";
import { site, slugify } from "@/app/data";
import Banner from "@/app/components/ui/banner";
import TeamDetails from "@/app/components/layout/ourteam/teamdetails";
import HomeCta from "@/app/components/ui/homecta";

interface TeamDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  const members = site.teamSection?.members || [];
  return members.map((member: TeamMember) => ({
    id: (member as any).slug || slugify(member.name) || String(member.id),
  }));
}

export default async function TeamDetailPage({ params }: TeamDetailPageProps) {
  const resolvedParams = await params;
  const { id } = resolvedParams;
  const targetId = id ? id.toLowerCase().trim() : "";

  const members = site.teamSection?.members || [];
  const currentMember =
    members.find(
      (m: TeamMember) =>
        (m as any).slug === targetId ||
        slugify(m.name) === targetId ||
        String(m.id) === targetId
    ) || members[0];

  const teamBannerConfig = site.pageBanners?.ourteam;

  const dynamicBannerData: PageBannerData = {
    title: currentMember?.name || teamBannerConfig?.title || "Our Team",
    backgroundImage: teamBannerConfig?.backgroundImage || "/banner_bg.png",
    altText:
      currentMember?.name || teamBannerConfig?.altText || "Team member banner",
    breadcrumbs: ([
      {
        id: 1,
        label: teamBannerConfig?.breadcrumbs?.[0]?.label || "Home",
        href: teamBannerConfig?.breadcrumbs?.[0]?.href || "/",
        icon: teamBannerConfig?.breadcrumbs?.[0]?.icon || "home",
      },
      {
        id: 2,
        label: teamBannerConfig?.breadcrumbs?.[1]?.label || "Our Team",
        href: "/ourteam",
      },
      {
        id: 3,
        label: currentMember?.name || "Team Member",
        isCurrent: true,
      },
    ] as any),
  };

  return (
    <>
      <Banner bannerData={dynamicBannerData} />
      <TeamDetails memberId={id} />
      <HomeCta />
    </>
  );
}
