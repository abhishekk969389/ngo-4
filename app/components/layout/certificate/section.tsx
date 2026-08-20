import { site, SectionProps, NGOcertificateSectionData } from "@/app/data";
import Image from "next/image";



export default function CertificateSection({ data, className }: SectionProps<NGOcertificateSectionData> = {}) {
  const certificateSection = data || site.certificatesection;

  if (!certificateSection) return null;

  return (
    <section className="mt-6 sm:mt-8 md:mt-10 lg:mt-14 overflow-hidden">
      <div className="mx-auto max-w-[1350px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certificateSection.certificates.map((certificate: any) => {
            const certificateImage =
              (certificate as { image?: string }).image ||
              certificateSection.cardImage;

            return (
              <div
                key={certificate.id}
                className="group border border-gray-100/90 rounded-2xl bg-white p-5 sm:p-6 shadow-2xs transition-all duration-300 hover:shadow-md flex flex-col justify-between"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-[#f8f9fa] p-3 flex items-center justify-center">
                  <div className="relative h-full w-full overflow-hidden rounded-lg">
                    <Image
                      src={certificateImage}
                      alt={certificate.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-contain transition duration-500 group-hover:scale-102"
                      priority
                    />
                  </div>
                </div>

                <div className="mt-5 flex flex-col items-start">
                  <h3 className="text-base sm:text-lg font-bold text-[#0d3319] font-sans tracking-tight">
                    {certificate.title}
                  </h3>

                  <div className="w-8 h-[2px] bg-[#1f5e2e] rounded-full mt-1.5 mb-2.5" />

                  <p className="text-xs sm:text-sm leading-relaxed text-gray-500 font-sans">
                    {certificate.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
