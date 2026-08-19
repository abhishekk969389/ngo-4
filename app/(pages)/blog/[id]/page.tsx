import Banner from "@/app/components/ui/banner";
import BlogDetail from "@/app/components/layout/blog/blogdetail";
import HomeCta from "@/app/components/ui/homecta";
import ngoDataJson from '@/app/data/ngoData_structured.json';
import type { NgoData, NgoBlogCardItem, PageBannerData } from "@/app/type/ngo";

const data = new Proxy(ngoDataJson as any, {
  get(target, prop: string) {
    if (prop === '$typeof') return undefined;
    return target.NGO?.sections?.[prop]?.variants?.["Legacy_" + prop];
  }
});

interface BlogDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  const blogs = data.blogPageSection?.blogs || [];
  return blogs.map((blog: NgoBlogCardItem) => ({
    id: String(blog.id),
  }));
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const resolvedParams = await params;
  const { id } = resolvedParams;

  const currentBlog = data.blogPageSection?.blogs.find(
    (b: NgoBlogCardItem) => String(b.id) === String(id)
  );

  const blogBannerConfig = data.pageBanners?.blog;

  const dynamicBannerData: PageBannerData = {
    title: blogBannerConfig?.title || "Blog",
    backgroundImage: blogBannerConfig?.backgroundImage || "/banner_bg.png",
    altText: currentBlog?.title || blogBannerConfig?.altText || "Blog details",
    breadcrumbs: [
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
    ],
  };

  return (
    <>
      <Banner bannerData={dynamicBannerData} />
      <BlogDetail blogId={id} />
      <HomeCta />
    </>
  );
}
