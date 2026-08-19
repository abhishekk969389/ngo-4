"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, Heart, Users, Menu, X, ChevronDown } from 'lucide-react';
import ngoData from '@/app/data/ngoData_structured.json';

const topbar = (ngoData as any).NGO.sections.Topbar.variants.NGOTopbar1;
const header = (ngoData as any).NGO.sections.Header.variants.NGOHeader1;
const footer = (ngoData as any).NGO.sections.Footer.variants.NGOFooter1;
const brand = (ngoData as any).NGO.sections.brand.variants.Legacy_brand;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const toggleMobileDropdown = (label: string) => {
    setActiveMobileDropdown(prev => prev === label ? null : label);
  };

  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="mx-auto flex max-w-[1380px] items-center justify-between px-3 sm:px-6 py-3">


        <Link href="/" className="flex items-center gap-2 xl:gap-3 flex-shrink-0">
          <div className="relative h-12 w-12 lg:h-18 lg:w-18 flex-shrink-0">
            <Image src={brand.logo} alt={`${brand.name} logo`} fill className="object-contain" />
          </div>
          <div className="flex flex-col justify-center whitespace-nowrap">
            <span className="text-lg xl:text-2xl font-black leading-none tracking-tight text-[#0c4d1e]">
              {brand.name}
            </span>
            <span className="text-[9px] xl:text-[11px] font-bold tracking-wider text-[#0c4d1e]">
              {brand.tagline}
            </span>
          </div>
        </Link>


        <nav className="hidden lg:flex items-center gap-2.5 xl:gap-6">
          {header.menu.map((link: any) => {
            const hasChildren = link.children && link.children.length > 0;
            const isActive = pathname === link.href || (hasChildren && link.children.some((c: any) => pathname === c.href));

            return (
              <div key={link.label} className="relative group py-2">
                {hasChildren ? (
                  <div className={`flex items-center gap-0.5 text-xs xl:text-sm font-semibold whitespace-nowrap transition-colors py-1 cursor-pointer select-none border-b-2 ${isActive ? 'text-[#0c4d1e] border-[#0c4d1e]' : 'text-gray-800 border-transparent hover:text-[#0c4d1e]'}`}>
                    <span>{link.label}</span>
                    <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180 ${isActive ? 'text-[#0c4d1e]' : 'text-gray-600 group-hover:text-[#0c4d1e]'}`} />
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className={`flex items-center gap-0.5 text-xs xl:text-sm font-semibold whitespace-nowrap transition-colors py-1 border-b-2 ${isActive ? 'text-[#0c4d1e] border-[#0c4d1e]' : 'text-gray-800 border-transparent hover:text-[#0c4d1e]'}`}
                  >
                    <span>{link.label}</span>
                  </Link>
                )}


                {hasChildren && (
                  <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-out z-50 pointer-events-none group-hover:pointer-events-auto min-w-[220px]">
                    <div className="bg-white text-gray-800 rounded-xl p-2 shadow-xl border border-gray-100">
                      <ul className="flex flex-col gap-0.5">
                        {link.children?.map((child: any) => {
                          const isChildActive = pathname === child.href;
                          return (
                            <li key={child.label}>
                              <Link
                                href={child.href}
                                className={`block py-2 px-3.5 rounded-lg text-xs xl:text-sm font-medium transition-all whitespace-nowrap ${isChildActive ? 'text-[#0c4d1e] bg-[#0c4d1e]/10 font-bold' : 'text-gray-700 hover:text-[#0c4d1e] hover:bg-[#0c4d1e]/5'}`}
                              >
                                {child.label}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-1.5 xl:gap-3 flex-shrink-0">
          <Link
            href={header.cta.href || "/donate"}
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full border-[1.5px] border-[#2c7a3f] px-2.5 xl:px-4 py-1.5 text-xs xl:text-sm font-semibold text-[#2c7a3f] hover:bg-[#2c7a3f] hover:text-white whitespace-nowrap transition-all"
          >
            <Heart className="h-3.5 w-3.5 xl:h-4 xl:w-4" />
            <span>{header.cta.label || "Donate"}</span>
          </Link>

          <Link
            href={"/careers"}
            className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-[#0c4d1e] px-2.5 xl:px-4 py-1.5 text-xs xl:text-sm font-semibold text-white hover:bg-[#083815] whitespace-nowrap transition-all"
          >
            <Users className="h-3.5 w-3.5 xl:h-4 xl:w-4" />
            <span>{"Join as Volunteer"}</span>
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="lg:hidden p-2 text-gray-700 hover:text-[#0c4d1e] transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white py-4 px-4 sm:px-6 shadow-lg">
          <nav className="flex flex-col gap-2">
            {header.menu.map((link: any) => {
              const hasChildren = link.children && link.children.length > 0;
              const isMobileOpen = activeMobileDropdown === link.label;
              const isActive = pathname === link.href || (hasChildren && link.children.some((c: any) => pathname === c.href));

              return (
                <div key={link.label} className="border-b border-gray-100 last:border-none pb-2">
                  {hasChildren ? (
                    <button
                      type="button"
                      onClick={() => toggleMobileDropdown(link.label)}
                      className={`flex items-center justify-between w-full py-1.5 text-base font-semibold text-left focus:outline-none ${isActive ? 'text-[#0c4d1e]' : 'text-gray-800 hover:text-[#0c4d1e]'}`}
                    >
                      <span className={`border-b-2 ${isActive ? 'border-[#0c4d1e]' : 'border-transparent'}`}>{link.label}</span>
                      <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${isActive ? 'text-[#0c4d1e]' : 'text-gray-600'} ${isMobileOpen ? 'rotate-180' : ''}`} />
                    </button>
                  ) : (
                    <div className="flex items-center justify-between py-1.5">
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`text-base font-semibold border-b-2 ${isActive ? 'text-[#0c4d1e] border-[#0c4d1e]' : 'text-gray-800 border-transparent hover:text-[#0c4d1e]'}`}
                      >
                        {link.label}
                      </Link>
                    </div>
                  )}

                  {/* Submenu Mapping */}
                  {hasChildren && isMobileOpen && (
                    <div className="ml-3 mt-1.5 pl-2 border-l-2 border-[#2c7a3f] flex flex-col gap-1 py-1">
                      {link.children?.map((child: any) => {
                        const isChildActive = pathname === child.href;
                        return (
                          <Link
                            key={child.label}
                            href={child.href}
                            onClick={() => setIsOpen(false)}
                            className={`block text-sm font-medium py-1.5 px-2 rounded-md ${isChildActive ? 'text-[#0c4d1e] bg-gray-100/80 font-bold' : 'text-gray-700 hover:text-[#0c4d1e] hover:bg-gray-100/80'}`}
                          >
                            {child.label}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Mobile Actions */}
            <div className="flex flex-col gap-3 mt-2">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-10 pr-4 py-2 text-sm border border-gray-200 rounded-full focus:outline-none focus:border-[#2c7a3f]"
                />
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>

              {[
                { label: header.cta.label || "Donate", href: header.cta.href || "/donate", icon: Heart, style: "sm:hidden border-[#2c7a3f] text-[#2c7a3f] hover:bg-[#2c7a3f] hover:text-white" },
                { label: "Join as Volunteer", href: "/volunteer", icon: Users, style: "md:hidden bg-[#0c4d1e] text-white hover:bg-[#083815]" }
              ].map((btn) => {
                const BtnIcon = btn.icon;
                return (
                  <Link
                    key={btn.label}
                    href={btn.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-center gap-2 rounded-full border-[1.5px] py-2.5 text-sm font-bold transition-all ${btn.style}`}
                  >
                    <BtnIcon className="h-4 w-4" />
                    <span>{btn.label}</span>
                  </Link>
                );
              })}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}