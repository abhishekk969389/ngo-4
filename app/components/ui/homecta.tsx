import Link from 'next/link';
import { HandHeart, Heart, Users, ArrowRight } from 'lucide-react';
import ngoDataJson from '@/app/data/ngoData_structured.json';
import type { NgoData } from '@/app/type/ngo';

const data = { homeCta: (ngoDataJson as any).NGO.sections.homeCta?.variants?.Legacy_homeCta };

export default function HomeCta() {
  const { homeCta } = data;

  const getButtonIcon = (iconName: string) => {
    switch (iconName) {
      case 'heart':
        return <Heart className="w-4 h-4 text-white stroke-[2]" />;
      case 'user':
        return <Users className="w-4 h-4 text-white stroke-[2]" />;
      default:
        return null;
    }
  };

  return (  
    <section className="my-6 overflow-hidden">
      <div className="mx-auto max-w-[1350px] px-4 sm:px-6 lg:px-8">
        
      
        <div className="relative bg-[#102719] rounded-2xl py-8 px-6 sm:px-10 lg:px-12 shadow-2xl overflow-hidden">
          
          <div className="absolute right-0 top-0 bottom-0 opacity-20 pointer-events-none hidden lg:block">
            <svg
              className="h-full w-auto text-[#2d7d3e]"
              viewBox="0 0 200 150"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
            >
              <path d="M180,10 C150,40 130,90 190,140" />
              <path d="M165,30 C140,25 130,10 145,5 C155,18 165,30 165,30 Z" fill="currentColor" opacity="0.3" />
              <path d="M150,55 C125,50 115,35 130,30 C140,43 150,55 150,55 Z" fill="currentColor" opacity="0.3" />
              <path d="M142,80 C117,75 107,60 122,55 C132,68 142,80 142,80 Z" fill="currentColor" opacity="0.3" />
              <path d="M155,105 C130,100 120,85 135,80 C145,93 155,105 155,105 Z" fill="currentColor" opacity="0.3" />
            </svg>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            <div className="flex justify-center lg:justify-start lg:col-span-2">
              <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full border border-[#2d7d3e]/50 flex items-center justify-center text-[#2d7d3e]  transition-transform duration-300 hover:scale-105">
                <HandHeart className="w-10 h-10 text-[#FFFFFF] stroke-[1.5]" />
              </div>
            </div>
            <div className="lg:col-span-5 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-bold text-white font-serif leading-[1.25] tracking-tight">
                {homeCta.heading.replace("Yourself", "")}
                <span className="text-[#2d7d3e]">Yourself</span>
              </h2>
            </div>

            <div className="lg:col-span-2 lg:border-l lg:border-white/15 lg:pl-7 text-center lg:text-left">
              <p className="text-xs sm:text-[0.825rem] text-gray-300 leading-relaxed font-sans max-w-xs mx-auto lg:mx-0">
                {homeCta.description}
              </p>
            </div>

      
            <div className="lg:col-span-3 flex flex-col gap-3 w-full max-w-[260px] mx-auto lg:mx-auto">
              
              <Link
                href={homeCta.buttons.donate.href}
                className="w-full flex items-center justify-between bg-[#2d7d3e] text-white text-xs sm:text-sm font-semibold py-3 px-5 rounded-lg hover:bg-[#236632] transition-all font-sans shadow-md group/btn1"
              >
                <div className="flex items-center gap-2.5">
                  {getButtonIcon(homeCta.buttons.donate.icon)}
                  <span className="whitespace-nowrap">{homeCta.buttons.donate.label}</span>
                </div>
                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn1:translate-x-1" />
              </Link>

              <Link
                href={homeCta.buttons.volunteer.href}
                className="w-full flex items-center justify-between border border-[#2d7d3e] bg-transparent text-white text-xs sm:text-sm font-semibold py-3 px-5 rounded-lg hover:bg-[#2d7d3e]/10 transition-all font-sans group/btn2"
              >
                <div className="flex items-center gap-2.5">
                  {getButtonIcon(homeCta.buttons.volunteer.icon)}
                  <span className="whitespace-nowrap">{homeCta.buttons.volunteer.label}</span>
                </div>
                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn2:translate-x-1" />
              </Link>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}