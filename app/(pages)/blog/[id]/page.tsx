import type { PageBannerData, NgoBlogCardItem } from "@/app/data";
import { site, slugify } from "@/app/data";
import Banner from "@/app/components/ui/banner";
import BlogDetail from "@/app/components/layout/blog/blogdetail";
import HomeCta from "@/app/components/ui/homecta";

interface BlogDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() { 
  const blogs = site.blogPageSection?.blogs || [];
  return blogs.map((blog: any) => ({
    id: blog.slug || slugify(blog.title) || String(blog.id),
  }));
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const resolvedParams = await params;
  const { id } = resolvedParams;

  const currentBlog = site.blogPageSection?.blogs.find(
    (b: any) =>
      b.slug === id || slugify(b.title) === id || String(b.id) === String(id),
  );

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
      <BlogDetail blogId={id} />
      <HomeCta />
    </>
  );
}
