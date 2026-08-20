import { site, SectionProps } from "@/app/data";
import Banner from "@/app/components/ui/banner";
import BlogSection from "@/app/components/layout/blog/blogsection";
import HomeCta from "@/app/components/ui/homecta";

export default function BlogPage({ data: propData, className }: SectionProps<any> = {}) {
  const data = propData || site;
  return (
    <>
      <Banner pageKey="blog" />
      <BlogSection />
      <HomeCta />
    </>
  );
}
