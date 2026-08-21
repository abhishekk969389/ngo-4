"use client";

import { useState } from "react";
import { site, SectionProps, SiteData, slugify } from "@/app/data";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight, Heart } from "lucide-react";
import Pagination from "@/app/components/ui/pagination";
import type {
  NgoBlogPageSection,
} from "@/app/data";

export default function BlogSection({ data: propData, className }: SectionProps<SiteData> = {}) {
  const data = propData || site;
  const blogData = data.blogPageSection as NgoBlogPageSection | undefined;
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  if (!blogData) return null;

  const { header, blogs } = blogData;
  const totalPages = Math.ceil(blogs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedBlogs = blogs.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    const blogElement = document.getElementById("blog-section");
    if (blogElement) {
      blogElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="blog-section" className="bg-[#fcfdfc] mt-6 sm:mt-8 md:mt-10 lg:mt-14 pb-12 scroll-mt-24">
      <div className="mx-auto max-w-[1350px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0d3319] leading-[1.2] sm:leading-[1.18]">
            {header.title}
          </h2>

          <div className="my-3 flex items-center justify-center gap-3">
            <span className="h-[1.5px] w-12 rounded-full bg-[#2c7a3f]/60" />
            <Heart className="h-3.5 w-3.5 fill-[#2c7a3f] text-[#2c7a3f]" />
            <span className="h-[1.5px] w-12 rounded-full bg-[#2c7a3f]/60" />
          </div>

          <p className="text-xs sm:text-sm md:text-base leading-relaxed text-gray-600 font-sans">
            {header.subtitle}
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {paginatedBlogs.map((blog: any) => {
            const blogSlug = blog.slug || slugify(blog.title) || blog.id;
            const blogLink = `/blogdetails?id=${blogSlug}`;
            return (
              <article
                key={blog.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-[#e8eee7] bg-white shadow-xs transition-all duration-300 hover:shadow-md hover:border-[#d7e5d5]"
              >
                <Link
                  href={blogLink}
                  className="relative aspect-[16/10] w-full overflow-hidden bg-[#f0f4ef] block"
                >
                  <Image
                    src={blog.image}
                    alt={(blog as any).alt || blog.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </Link>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#1d5e2d]">
                    <Calendar className="h-3.5 w-3.5 stroke-[2.2]" />
                    <span>{(blog as any).date}</span>
                  </div>

                  <h3 className="mt-2.5 font-serif text-lg font-bold leading-snug tracking-tight text-[#16351d] transition-colors duration-200 group-hover:text-[#1d5e2d] sm:text-xl">
                    <Link href={blogLink}>{blog.title}</Link>
                  </h3>

                  <p className="mt-2 flex-1 text-xs leading-relaxed text-[#59665b] sm:text-sm line-clamp-3">
                    {blog.description}
                  </p>

                  <div className="mt-4 flex justify-end pt-2">
                    <Link
                      href={blogLink}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1d5e2d] transition-all duration-200 hover:text-[#0c401a] group-hover:gap-2 sm:text-sm"
                    >
                      <span>{(blog as any).readMoreText || "Read More"}</span>
                      <ArrowRight className="h-3.5 w-3.5 stroke-[2.2]" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Theme-Aligned Pagination UI Component */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          totalItems={blogs.length}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
        />
      </div>
    </section>
  );
}

