import { site, SectionProps, NGOblogsSectionData } from "@/app/data";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, Leaf, ArrowRight } from "lucide-react";



export default function OurBlog({ data, className }: SectionProps<NGOblogsSectionData> = {}) {
  const blogsSection = data || site.blogssection;

  return (
    <section className="py-12 overflow-hidden border-t border-gray-100">
      <div className="mx-auto max-w-[1350px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-[#2c7a3f] font-sans">
            <BookOpen className="h-4 w-4 text-[#2c7a3f]" />
            <span>{blogsSection.badge}</span>
            <div className="w-10 h-[1.5px] bg-[#2c7a3f]/40 ml-1"></div>
          </div>

          <h2 className="mt-2 text-center text-3xl sm:text-5xl font-black text-[#04240d] font-serif leading-tight tracking-tight">
            {blogsSection.heading.prefix}
            <span className="text-[#2c7a3f]">{blogsSection.heading.highlight}</span>
            {blogsSection.heading.suffix}
          </h2>

          <div className="flex items-center justify-center gap-3 mt-3">
            <div className="w-10 h-[1.5px] bg-[#2c7a3f]/40"></div>
            <Leaf className="h-4 w-4 text-[#2c7a3f] fill-current" />
            <div className="w-10 h-[1.5px] bg-[#2c7a3f]/40"></div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {blogsSection.posts.map((post: any) => (
            <Link
              key={post.id}
              href={post.href || `/blog/${post.id}`}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between cursor-pointer"
            >
              <div>
                <div className="relative h-52 sm:h-56 w-full overflow-hidden rounded-t-2xl">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />

                  <div className="absolute top-4 left-4 z-10 flex flex-col items-center justify-center bg-[#28602c] text-white text-center rounded-xl px-3 py-2 shadow-sm font-sans min-w-[60px]">
                    <span className="text-xl font-bold leading-none">
                      {post.date.day}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider mt-1 leading-none">
                      {post.date.month}
                    </span>
                    <span className="text-[9px] font-normal opacity-90 mt-0.5 leading-none">
                      {post.date.year}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-7 pb-4 flex flex-col items-start">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#2c7a3f] font-sans mb-2.5">
                    <Leaf className="w-3.5 h-3.5 text-[#2c7a3f]" />
                    <span>{post.category}</span>
                  </div>

                  <h3 className="text-lg font-bold text-[#0c3b18] font-serif leading-snug group-hover:text-[#2c7a3f] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-gray-600 leading-relaxed font-sans line-clamp-3">
                    {post.description}
                  </p>
                </div>
              </div>

              <div className="px-6 sm:px-7 mb-4">
                <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#2c7a3f] group-hover:text-[#0c4d1e] transition-colors font-sans group/link">
                  <span>{(post as any).readMoreText || (post as any).ctaText || "Read More"}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href={blogsSection.button.href}
            className="inline-flex items-center gap-2 rounded-[18px] bg-[#2b641a] px-6 py-3 text-sm font-bold text-white shadow-md hover:bg-[#0c4d1e] transition-all font-sans"
          >
            <span>{blogsSection.button.label}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
