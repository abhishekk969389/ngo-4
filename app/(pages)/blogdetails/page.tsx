import type { PageBannerData } from "@/app/data";
import { site, slugify } from "@/app/data";
import Banner from "@/app/components/ui/banner";
import BlogDetail from "@/app/components/layout/blog/blogdetail";
import HomeCta from "@/app/components/ui/homecta";

interface BlogDetailsPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function BlogDetailsPage({
  searchParams,
}: BlogDetailsPageProps) {
  const resolvedSearchParams = await searchParams;
  const rawId =
    typeof resolvedSearchParams.id === "string"
      ? resolvedSearchParams.id
      : "1";

  const targetId = rawId.toLowerCase().trim();

  const blogs = site.blogPageSection?.blogs || [];
  const currentBlog =
    blogs.find(
      (b: any) =>
        b.slug === targetId ||
        slugify(b.title) === targetId ||
        String(b.id) === targetId
    ) || blogs[0];

  const blogBannerConfig = site.pageBanners?.blog;

  const dynamicBannerData: PageBannerData = {
    title: currentBlog?.title || blogBannerConfig?.title || "Blog",
    backgroundImage: blogBannerConfig?.backgroundImage || "/banner_bg.png",
    altText: currentBlog?.title || blogBannerConfig?.altText || "Blog details",
    breadcrumbs: ([
      {
        id: 1,
        label: blogBannerConfig?.breadcrumbs?.[0]?.label || "Home",
        href: blogBannerConfig?.breadcrumbs?.[0]?.href || "/",
        icon: blogBannerConfig?.breadcrumbs?.[0]?.icon || "home",
      },
      {
        id: 2,
        label: blogBannerConfig?.breadcrumbs?.[1]?.label || "Blog",
        href: "/blog",
      },
      {
        id: 3,
        label: currentBlog?.title || "Blog Details",
        isCurrent: true,
      },
    ] as any),
  };

  return (
    <>
      <Banner bannerData={dynamicBannerData} />
      <BlogDetail blogId={rawId} />
      <HomeCta />
    </>
  );
}
