"use client";

import Link from "next/link";
import {
  Calendar,
  Sprout,
  ChevronRight,
  Headphones,
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react";
import {
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import type { EventDetailItem } from "@/app/data";

interface EventSidebarProps {
  data: EventDetailItem;
}

export default function EventSidebar({ data }: EventSidebarProps) {
  if (!data) return null;

  const organizer = data.organizer;
  const support = data.support;

  return (
    <aside className="space-y-6 font-sans">
      {/* Card 1: Organizer */}
      {/* {organizer && (
        <div className="bg-white border border-[#eef2eb] rounded-2xl p-6 sm:p-7 shadow-xs">
          <div>
            <h3 className="text-xl font-bold font-serif text-[#16351d]">
              {organizer.cardTitle || "Organizer"}
            </h3>
            <div className="mt-1.5 mb-5 h-[2.5px] w-9 rounded-full bg-[#2c7a3f]" />
          </div>

          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-full bg-[#f0f6ef] flex items-center justify-center text-[#1d5e2d] shrink-0">
              <Sprout className="w-7 h-7 fill-[#1d5e2d]" />
            </div>
            <div className="space-y-1.5">
              <h4 className="text-base font-bold text-[#16351d]">
                {organizer.name}
              </h4>
              <p className="text-xs sm:text-sm text-[#59665b] leading-relaxed">
                {organizer.description}
              </p>
              {organizer.profileLink && organizer.profileText && (
                <div className="pt-2">
                  <Link
                    href={organizer.profileLink}
                    className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-[#1d5e2d] hover:underline"
                  >
                    <span>{organizer.profileText}</span>
                    <ChevronRight className="w-4 h-4 stroke-[2.5]" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )} */}

      {/* Card 2: Share this Event */}
      {/* {data.shareCard && (
        <div className="bg-white border border-[#eef2eb] rounded-2xl p-6 sm:p-7 shadow-xs">
          <div>
            <h3 className="text-xl font-bold font-serif text-[#16351d]">
              Share this <span className="text-[#1d5e2d]">Event</span>
            </h3>
            <div className="mt-1.5 mb-4 h-[2.5px] w-9 rounded-full bg-[#2c7a3f]" />
          </div>

          <p className="text-xs sm:text-sm text-[#59665b] leading-relaxed">
            {data.shareCard.description || "Spread the word and invite others to join this good cause."}
          </p>

          <div className="flex items-center gap-3 pt-5">
            <button
              type="button"
              onClick={() =>
                window.open(
                  `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`,
                  "_blank",
                )
              }
              className="w-11 h-11 rounded-full border border-[#e2e8e0] bg-white flex items-center justify-center hover:bg-[#f0f6ef] transition-all hover:scale-105"
              aria-label="Share on Facebook"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#1877F2" d="M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 22.954 24 17.99 24 12z" />
                <path fill="#FFF" d="M16.671 15.543l.532-3.47h-3.328v-2.25c0-.949.465-1.874 1.956-1.874h1.513V4.996s-1.374-.235-2.686-.235c-2.741 0-4.533 1.662-4.533 4.669v2.57H7.078v3.47h3.047v8.385a12.09 12.09 0 003.75 0v-8.385h2.796z" />
              </svg>
            </button>

            <button
              type="button"
              onClick={() =>
                window.open(
                  `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(data.title)}`,
                  "_blank",
                )
              }
              className="w-11 h-11 rounded-full border border-[#e2e8e0] bg-white flex items-center justify-center hover:bg-[#f0f6ef] transition-all hover:scale-105"
              aria-label="Share on Twitter"
            >
              <svg className="w-5 h-5 text-[#1da1f2]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.936 9.936 0 0024 4.59z" />
              </svg>
            </button>

            <button
              type="button"
              onClick={() =>
                window.open(
                  `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`,
                  "_blank",
                )
              }
              className="w-11 h-11 rounded-full border border-[#e2e8e0] bg-white flex items-center justify-center hover:bg-[#f0f6ef] transition-all hover:scale-105"
              aria-label="Share on LinkedIn"
            >
              <svg className="w-5 h-5 text-[#0a66c2]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </button>

            <button
              type="button"
              onClick={() =>
                window.open(
                  `https://api.whatsapp.com/send?text=${encodeURIComponent(data.title + " " + window.location.href)}`,
                  "_blank",
                )
              }
              className="w-11 h-11 rounded-full border border-[#e2e8e0] bg-white flex items-center justify-center hover:bg-[#f0f6ef] transition-all hover:scale-105"
              aria-label="Share on WhatsApp"
            >
              <svg className="w-5 h-5 text-[#25d366]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.461c-1.88 0-3.626-.503-5.132-1.385l-.368-.216-3.815.999 1.018-3.719-.239-.379a10.518 10.518 0 0 1-1.614-5.645c0-5.819 4.734-10.553 10.553-10.553 5.816 0 10.549 4.734 10.549 10.553 0 5.817-4.733 10.549-10.552 10.549" />
              </svg>
            </button>

            <button
              type="button"
              onClick={() =>
                window.open(
                  `mailto:?subject=${encodeURIComponent(data.title)}&body=${encodeURIComponent(window.location.href)}`,
                  "_blank",
                )
              }
              className="w-11 h-11 rounded-full border border-[#e2e8e0] bg-white flex items-center justify-center text-[#59665b] hover:bg-[#f0f6ef] transition-all hover:scale-105"
              aria-label="Share via Email"
            >
              <Mail className="w-5 h-5" />
            </button>
          </div>
        </div>
      )} */}

      {/* Card 3: Need Help? */}
      {support && (
        <div className="bg-white border border-[#eef2eb] rounded-2xl p-6 sm:p-7 shadow-xs">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-xl bg-[#f0f6ef] text-[#1d5e2d] flex items-center justify-center shrink-0">
              <Headphones className="w-7 h-7 stroke-[1.75]" />
            </div>

            <div>
              <h3 className="text-xl font-bold font-serif text-[#16351d]">
                {support.title || "Need Help?"}
              </h3>
              <p className="text-xs sm:text-sm text-[#59665b] leading-relaxed mt-1.5">
                {support.description}
              </p>

              <div className="pt-3">
                {support.phone && (
                  <a
                    href={`tel:${support.phone}`}
                    className="block text-sm font-bold text-[#16351d] hover:underline"
                  >
                    {support.phone}
                  </a>
                )}
                {support.email && (
                  <a
                    href={`mailto:${support.email}`}
                    className="block text-sm font-bold text-[#1d5e2d] hover:underline mt-1"
                  >
                    {support.email}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
}
