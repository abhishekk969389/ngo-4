import { Leaf, Trees } from "lucide-react";
import ngoDataJson from "@/app/data/ngoData_structured.json";
import type { NgoData } from "@/app/type/ngo";

const data = new Proxy(ngoDataJson as any, {
  get(target, prop: string) {
    if (prop === "$$typeof") return undefined;
    return target.NGO?.sections?.[prop]?.variants?.["Legacy_" + prop];
  },
});

export default function OurCommitment() {
  const commitment = data.commitmentSection;

  if (!commitment) return null;

  return (
    <section className="bg-white mt-10">
      <div className="mx-auto max-w-[1350px] px-4 sm:px-6 lg:px-8 mb-14">
        <div className="relative overflow-hidden rounded-2xl bg-[#f2f5ee] px-6 py-6 sm:px-10 sm:py-8 lg:px-8 lg:py-8">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div className="relative flex items-center gap-4 sm:gap-6">
              <div className="shrink-0 text-[#9bb3a1] opacity-70">
                <Leaf className="h-14 w-14 sm:h-18 sm:w-18 -rotate-12 stroke-[1.5]" />
              </div>

              <div className="space-y-2">
                <h2 className="font-serif text-xl font-bold tracking-tight text-[#1c3a27] sm:text-2xl">
                  {commitment.title}
                </h2>
                <p className="max-w-md text-xs leading-relaxed text-[#4a5e51] sm:text-sm">
                  {commitment.description}
                </p>
              </div>
            </div>

            {/* Right Section: Quote + Tree Watermark */}
            <div className="relative flex items-center justify-between gap-4 border-t border-[#dce4d9] pt-6 lg:border-t-0 lg:pt-0">
              <div className="space-y-2 max-w-md">
                <p className="font-serif text-base font-bold leading-snug text-[#1c3a27] sm:text-lg lg:text-xl">
                  “{commitment.quote.text}”
                </p>
                <p className="text-xs font-medium text-[#355240] sm:text-sm">
                  – {commitment.quote.author}
                </p>
              </div>

              {/* Far Right Tree Graphic */}
              <div className="shrink-0 text-[#8ba692] opacity-35">
                <Trees className="h-16 w-16 sm:h-20 sm:w-20 stroke-[1.2]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
