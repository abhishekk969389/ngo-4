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

  const regCard = data.registrationCard;
  const organizer = data.organizer;
  const support = data.support;

  return (
    <aside className="space-y-6 font-sans">
      {regCard && (
        <div className="bg-[#f7faf6] border border-[#e2ebd9] rounded-2xl p-6 space-y-4 text-center">
          <h3 className="text-lg font-bold font-serif text-[#0d3319]">
            {regCard.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#4b584d] leading-relaxed">
            {regCard.description}
          </p>
          <Link
            href={regCard.buttonHref || "/contactus"}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#1b4d25] px-5 py-3 text-xs sm:text-sm font-bold text-white shadow-sm transition-all duration-200 hover:bg-[#153e1e]"
          >
            <Calendar className="w-4 h-4" />
            <span>{regCard.buttonLabel}</span>
          </Link>

          {regCard.loginText && (
            <div className="pt-1 text-xs text-[#59665b]">
              <Link
                href={regCard.loginHref || "/contactus"}
                className="hover:underline font-bold text-[#1b4d25]"
              >
                {regCard.loginText}
              </Link>
            </div>
          )}
        </div>
      )}

      {organizer && (
        <div className="bg-[#f7faf6] border border-[#e2ebd9] rounded-2xl p-6 space-y-4">
          <h3 className="text-lg font-bold font-serif text-[#0d3319]">
            {organizer.cardTitle}
          </h3>

          <div className="flex items-start gap-3">
            <div className="w-11 h-11 rounded-full bg-[#e2ebd9] flex items-center justify-center text-[#1b4d25] shrink-0">
              <Sprout className="w-5 h-5 fill-[#1b4d25]" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#0d3319]">
                {organizer.name}
              </h4>
              <p className="text-xs text-[#4b584d] mt-1 leading-relaxed">
                {organizer.description}
              </p>
              {organizer.profileLink && organizer.profileText && (
                <Link
                  href={organizer.profileLink}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#2c7a3f] hover:underline mt-2"
                >
                  <span>{organizer.profileText}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              )}
            </div>
          </div>
        </div>
      )}

      {data.shareCard && (
        <div className="bg-[#f7faf6] border border-[#e2ebd9] rounded-2xl p-6 space-y-4">
          <h3 className="text-lg font-bold font-serif text-[#0d3319]">
            {data.shareCard.title}
          </h3>
          <p className="text-xs text-[#4b584d]">{data.shareCard.description}</p>

          <div className="flex items-center gap-2 pt-1">
            <button
              type="button"
              onClick={() =>
                window.open(
                  `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`,
                  "_blank",
                )
              }
              className="w-9 h-9 rounded-full bg-white border border-[#e2ebd9] flex items-center justify-center text-[#1b4d25] hover:bg-[#1b4d25] hover:text-white transition-colors"
              aria-label="Share on Facebook"
            >
              <IconBrandFacebook className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() =>
                window.open(
                  `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(data.title)}`,
                  "_blank",
                )
              }
              className="w-9 h-9 rounded-full bg-white border border-[#e2ebd9] flex items-center justify-center text-[#1b4d25] hover:bg-[#1b4d25] hover:text-white transition-colors"
              aria-label="Share on Twitter"
            >
              <IconBrandTwitter className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() =>
                window.open(
                  `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`,
                  "_blank",
                )
              }
              className="w-9 h-9 rounded-full bg-white border border-[#e2ebd9] flex items-center justify-center text-[#1b4d25] hover:bg-[#1b4d25] hover:text-white transition-colors"
              aria-label="Share on LinkedIn"
            >
              <IconBrandLinkedin className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() =>
                window.open(
                  `https://api.whatsapp.com/send?text=${encodeURIComponent(data.title + " " + window.location.href)}`,
                  "_blank",
                )
              }
              className="w-9 h-9 rounded-full bg-white border border-[#e2ebd9] flex items-center justify-center text-[#1b4d25] hover:bg-[#1b4d25] hover:text-white transition-colors"
              aria-label="Share on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() =>
                window.open(
                  `mailto:?subject=${encodeURIComponent(data.title)}&body=${encodeURIComponent(window.location.href)}`,
                  "_blank",
                )
              }
              className="w-9 h-9 rounded-full bg-white border border-[#e2ebd9] flex items-center justify-center text-[#1b4d25] hover:bg-[#1b4d25] hover:text-white transition-colors"
              aria-label="Share via Email"
            >
              <Mail className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {support && (
        <div className="bg-[#f7faf6] border border-[#e2ebd9] rounded-2xl p-6 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-[#e2ebd9] flex items-center justify-center text-[#1b4d25] shrink-0">
              <Headphones className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold font-serif text-[#0d3319]">
                {support.title}
              </h3>
            </div>
          </div>

          <p className="text-xs text-[#4b584d] leading-relaxed">
            {support.description}
          </p>

          <div className="space-y-2 pt-1 text-xs font-bold text-[#0d3319]">
            {support.phone && (
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#2c7a3f]" />
                <a href={`tel:${support.phone}`} className="hover:underline">
                  {support.phone}
                </a>
              </div>
            )}
            {support.email && (
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#2c7a3f]" />
                <a href={`mailto:${support.email}`} className="hover:underline">
                  {support.email}
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </aside>
  );
}
