import { site, SectionProps, SiteData } from "@/app/data";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  Clock,
  HandHeart,
} from "lucide-react";
import footerDataJson from "@/app/data/ngoData_structured.json";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
IconBrandX,
  IconBrandYoutube,
} from "@tabler/icons-react";

const brand = site.brand;
export default function Footer({ data: propData, className }: SectionProps<SiteData> = {}) {
  const data = propData || site;
  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case "facebook":
        return <IconBrandFacebook className="w-6 h-6" />;
      case "instagram":
        return <IconBrandInstagram className="w-6 h-6" />;
      case "twitter":
        return <IconBrandX className="w-6 h-6" />;
      case "youtube":
        return <IconBrandYoutube className="w-6 h-6" />;
      case "linkedin":
        return <IconBrandLinkedin className="w-6 h-6" />;
      default:
        return null;
    }
  };

  const linkSections = [
    {
      title: data.footerHeadings.quickLinks,
      links: data.quickLinks,
    },
    {
      title: data.footerHeadings.ourCauses,
      links: data.ourCauses,
    },
    {
      title: data.footerHeadings.usefulLinks,
      links: data.usefulLinks,
    },
  ];

  const contactDetails = [
    {
      icon: MapPin,
      content: data.contactInfo.address,
      isMultiline: true,
      className: "items-start",
      iconClassName: "mt-0.5",
    },
    {
      icon: Phone,
      content: data.contactInfo.phone,
      href: `tel:${data.contactInfo.phone}`,
      className: "items-center font-medium",
      iconClassName: "",
    },
    {
      icon: Mail,
      content: data.contactInfo.email,
      href: `mailto:${data.contactInfo.email}`,
      className: "items-center",
      iconClassName: "",
    },
    {
      icon: Clock,
      content: data.contactInfo.workingHours,
      className: "items-center whitespace-nowrap",
      iconClassName: "",
    },
  ];

  return (
    <footer className="w-full bg-[#fdfdfd] pt-12 text-gray-700 font-sans">
      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-0">
          <div className="lg:col-span-3 pr-0 lg:pr-8 flex flex-col justify-between border-b border-gray-200/60 pb-8 lg:pb-0 lg:border-b-0">
            <div>
              <Link href="/" className="flex items-center gap-2 xl:gap-3 flex-shrink-0">
                <div className="relative h-12 w-12 lg:h-18 lg:w-18 flex-shrink-0">
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    fill
                    className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                </div>
                <div className="flex flex-col justify-center whitespace-nowrap">
                  <span className="text-xl lg:text-2xl font-black leading-none tracking-tight text-[#0c4d1e]">
                    {brand.name}
                  </span>
                  <span className="text-[10px] lg:text-[11px] font-bold tracking-wider text-[#0c4d1e]">
                    {brand.tagline}
                  </span>
                </div>
              </Link>
              <p className="mt-6 text-sm leading-6 text-gray-600 max-w-sm tracking-wide">
                {data.about.description}
              </p>
            </div>

            <div className="flex items-center gap-3 mt-6">
              {data.socialLinks.map((item: any, idx: number) => (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-[#2c7a3f] hover:text-white hover:bg-[#2c7a3f] hover:border-[#2c7a3f] transition-colors"
                >
                  {getSocialIcon(item.platform)}
                </a>
              ))}
            </div>
          </div>
          {linkSections.map((section, idx) => (
            <div
              key={idx}
              className="lg:col-span-2 lg:px-6 lg:border-l lg:border-gray-200 border-b border-gray-200/60 pb-8 lg:pb-0 lg:border-b-0"
            >
              <h3 className="text-lg font-bold text-gray-900 tracking-tight font-serif">
                {section.title}
              </h3>
              <div className="w-6 h-[2px] bg-[#2c7a3f] mt-1 mb-5"></div>
              <ul className="space-y-3">
                {section.links.map((link: any, idx: number) => (
                  <li key={idx}>
                    <Link
                      href={link.href}
                      className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-[#2c7a3f] transition-colors"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-[#2c7a3f] flex-shrink-0" />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-3 lg:pl-6 lg:border-l lg:border-gray-200 pb-8 lg:pb-0">
            <h3 className="text-lg font-bold text-gray-900 tracking-tight font-serif">
              {data.footerHeadings.contactInfo}
            </h3>
            <div className="w-6 h-[2px] bg-[#2c7a3f] mt-1 mb-5"></div>
            <ul className="space-y-4 text-sm text-gray-600">
              {contactDetails.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <li key={idx} className={`flex gap-3 ${item.className}`}>
                    <div
                      className={`flex items-center justify-center text-[#2c7a3f] flex-shrink-0 ${item.iconClassName}`}
                    >
                      <IconComponent className="w-4 h-4" />
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="hover:text-[#2c7a3f] transition-colors"
                      >
                        {item.content}
                      </a>
                    ) : (
                      <span
                        className={
                          item.isMultiline ? "whitespace-pre-line pt-1" : ""
                        }
                      >
                        {item.content}
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="relative my-6 flex items-center justify-center">
          <div className="w-full border-t border-[#2c7a3f]"></div>
          <div className="absolute bg-[#fdfdfd] px-4 text-[#2c7a3f]">
            <HandHeart className="w-7 h-7" />
          </div>
        </div>

        <div className="text-center text-sm mb-5 text-gray-500 font-medium">
          {data.copyrightText}
        </div>
      </div>
    </footer>
  );
}
