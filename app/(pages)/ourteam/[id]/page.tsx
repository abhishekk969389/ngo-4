import type { TeamMember, PageBannerData } from "@/app/data";
import { site, SectionProps } from "@/app/data";
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
    id: String(member.id),
  }));
}

export default async function TeamDetailPage({ params }: TeamDetailPageProps) {
  const resolvedParams = await params;
  const { id } = resolvedParams;

  const currentMember = site.teamSection?.members.find(
    (m: TeamMember) => String(m.id) === String(id),
  );

  const teamBannerConfig = site.pageBanners?.ourteam;

  const dynamicBannerData: PageBannerData = {
    title: teamBannerConfig?.title || "Our Team",
    backgroundImage: teamBannerConfig?.backgroundImage || "/banner_bg.png",
    altText:
      currentMember?.name || teamBannerConfig?.altText || "Team member banner",
    breadcrumbs: [
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
    ],
  };

  return (
    <>
      <Banner bannerData={dynamicBannerData} />
      <TeamDetails memberId={id} />
      <HomeCta />
    </>
  );
}
