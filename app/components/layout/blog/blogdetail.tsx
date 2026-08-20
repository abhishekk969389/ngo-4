"use client";
import { site, SectionProps } from "@/app/data";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Heart, Quote, ArrowRight } from "lucide-react";



interface BlogDetailProps {
  blogId: string | number;
}

export default function BlogDetail({ blogId }: BlogDetailProps) {
  const blogPageData = site.blogPageSection as any;

  if (!blogPageData) return null;

  const { sidebar, blogs } = blogPageData;

  const currentBlog =
    blogs.find((b: any) => String(b.id) === String(blogId)) || blogs[0];

  const moreBlogs = blogs.filter(
    (b: any) => String(b.id) !== String(currentBlog.id),
  );

  return (
    <section className="bg-[#fcfdfc] pb-12  mt-6 sm:mt-8 md:mt-10 lg:mt-14">
      <div className="mx-auto max-w-[1350px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Main Blog Article (Left Column) */}
          <div className="lg:col-span-8">
            <article className="rounded-2xl border border-[#e8eee7] bg-white p-5 shadow-xs sm:p-8 lg:p-10">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-[#f0f4ef]">
                <Image
                  src={currentBlog.image}
                  alt={currentBlog.alt || currentBlog.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-cover"
                />
              </div>

              <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-[#1d5e2d]">
                <Calendar className="h-3.5 w-3.5 stroke-[2.2]" />
                <span>{currentBlog.date}</span>
              </div>

              <h1 className="mt-3 font-serif text-2xl font-bold tracking-tight text-[#16351d] sm:text-3xl lg:text-4xl leading-tight">
                {currentBlog.title}
              </h1>

              <div className="my-4 flex items-center gap-3">
                <span className="h-[1.5px] w-12 rounded-full bg-[#1d5e2d]/60" />
                <Heart className="h-3.5 w-3.5 fill-[#1d5e2d] text-[#1d5e2d]" />
                <span className="h-[1.5px] w-12 rounded-full bg-[#1d5e2d]/60" />
              </div>

              <p className="mt-4 text-sm leading-relaxed text-[#2d4a34] sm:text-base font-medium">
                {currentBlog.description}
              </p>

              {currentBlog.paragraphs &&
                currentBlog.paragraphs.map((paragraph: any, idx: any) => (
                  <p
                    key={idx}
                    className="mt-4 text-xs leading-relaxed text-[#59665b] sm:text-sm"
                  >
                    {paragraph}
                  </p>
                ))}

              {currentBlog.sections &&
                currentBlog.sections.map((section: any, idx: any) => (
                  <div key={idx} className="mt-8 sm:mt-10">
                    <h2 className="font-serif text-xl font-bold tracking-tight text-[#16351d] sm:text-2xl">
                      {section.heading}
                    </h2>
                    <p className="mt-2.5 text-xs leading-relaxed text-[#59665b] sm:text-sm">
                      {section.content}
                    </p>
                  </div>
                ))}

              {currentBlog.quote && (
                <div className="mt-10 rounded-2xl border-l-4 border-[#1d5e2d] bg-[#f4f7f3] p-5 sm:p-6">
                  <div className="flex items-start gap-3.5">
                    <Quote className="h-6 w-6 shrink-0 text-[#1d5e2d] fill-[#1d5e2d]/20 -scale-x-100 mt-0.5" />
                    <div>
                      <p className="font-serif text-sm italic leading-relaxed text-[#16351d] sm:text-base">
                        &ldquo;{currentBlog.quote.quote}&rdquo;
                      </p>
                      {currentBlog.quote.author && (
                        <p className="mt-2 text-xs font-semibold italic text-[#1d5e2d] sm:text-sm">
                          {currentBlog.quote.author}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </article>
          </div>

          <aside className="lg:col-span-4">
            <div className="sticky top-24 rounded-2xl border border-[#e8eee7] bg-white p-6 shadow-xs">
              <h3 className="font-serif text-xl font-bold tracking-tight text-[#16351d]">
                {sidebar?.title || "More Blogs"}
              </h3>
              <div className="mt-1.5 mb-6 h-[2px] w-8 rounded-full bg-[#1d5e2d]" />

              <div className="flex flex-col divide-y divide-[#f0f4ef]">
                {moreBlogs.map((b: any) => (
                  <Link
                    key={b.id}
                    href={b.href}
                    className="group flex items-center gap-3.5 py-4 first:pt-0 last:pb-0 transition-all"
                  >
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-[#f0f4ef]">
                      <Image
                        src={b.image}
                        alt={b.alt || b.title}
                        fill
                        sizes="64px"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-[11px] font-medium text-[#59665b]">
                        {b.date}
                      </span>
                      <h4 className="font-serif text-xs font-bold leading-snug text-[#16351d] line-clamp-2 transition-colors group-hover:text-[#1d5e2d] sm:text-sm">
                        {b.title}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>

              {sidebar?.viewAllButton && (
                <div className="mt-8 pt-2">
                  <Link
                    href={sidebar.viewAllButton.href}
                    className="flex w-full items-center justify-center gap-2 rounded-full border border-[#1d5e2d] bg-white px-5 py-2.5 text-xs font-semibold text-[#1d5e2d] shadow-xs transition-all hover:bg-[#1d5e2d] hover:text-white"
                  >
                    <span>{sidebar.viewAllButton.label}</span>
                    <ArrowRight className="h-3.5 w-3.5 stroke-[2]" />
                  </Link>
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
