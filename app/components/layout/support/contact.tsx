import {
  Clock3,
  Mail,
  MessageSquareText,
  UserRound,
  FileText,
  Grid,
  Pencil,
  Send,
  Headphones,
  ChevronDown,
} from 'lucide-react';
import ngoDataJson from '@/app/data/ngoData_structured.json';
import type {
  NgoContactSection,
  NgoData,
  NgoSupportContactField,
  NgoSupportContactMethod,
} from '@/app/type/ngo';

const data = new Proxy(ngoDataJson as any, {
  get(target, prop: string) {
    if (prop === '$$typeof') return undefined;
    return target.NGO?.sections?.[prop]?.variants?.["Legacy_" + prop];
  }
});

const iconMap = {
  mail: Mail,
  clock: Clock3,
  chat: MessageSquareText,
  user: UserRound,
  subject: FileText,
  category: Grid,
  message: Pencil,
  support: Headphones,
};

export default function Contact() {
  const contactData = data.contactSection as NgoContactSection | undefined;

  if (!contactData) return null;

  // Split title dynamically to highlight the second line/part in green like the screenshot
  const titleWords = contactData.title ? contactData.title.split(' ') : [];
  const titlePart1 = titleWords.slice(0, 3).join(' ');
  const titlePart2 = titleWords.slice(3).join(' ');

  // Split form heading to highlight "a message" in green
  const formHeadingWords = contactData.form?.heading ? contactData.form.heading.split(' ') : [];
  const formHeadingPart1 = formHeadingWords.slice(0, 2).join(' ');
  const formHeadingPart2 = formHeadingWords.slice(2).join(' ');

  return (
    <section className="bg-white mt-6 sm:mt-8 md:mt-10 lg:mt-14">
      <div className="mx-auto max-w-[1350px] px-4 sm:px-6 lg:px-8 mb-12">
        
        {/* Main Card Container */}
        <div className="overflow-hidden rounded-3xl border border-[#edf1eb] bg-white shadow-[0_4px_25px_rgba(0,0,0,0.02)]">
          <div className="grid lg:grid-cols-[1fr_1.5fr]">
            
            {/* Left Sidebar: Contact Details */}
            <aside className="bg-[#f8faf7] p-8 sm:p-10 lg:p-12 border-b border-[#edf1eb] lg:border-b-0 lg:border-r">
              {/* Top Support Icon Box */}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e3eae1] text-[#1c3a27]">
                <Headphones className="h-6 w-6 stroke-[1.8]" />
              </div>

              {/* Title with Green Accent Line */}
              <div className="mt-6">
                <h2 className="font-serif text-2xl font-bold leading-tight text-[#0d3319] sm:text-3xl">
                  {titlePart1 && <span>{titlePart1} </span>}
                  {titlePart2 && (
                    <span className="block text-[#2c7a3f]">{titlePart2}</span>
                  )}
                </h2>
                <div className="mt-3 h-[2.5px] w-10 rounded-full bg-[#2c7a3f]" />
              </div>

              {/* Subtitle / Description */}
              <p className="mt-5 text-xs sm:text-sm md:text-base leading-relaxed text-gray-600 font-sans">
                {contactData.subtitle || contactData.description}
              </p>

              {/* Contact Methods Stack with Dividers */}
              <div className="mt-8 divide-y divide-[#e5ece3]">
                {contactData.contactMethods.map((item: NgoSupportContactMethod) => {
                  const Icon = iconMap[item.icon as keyof typeof iconMap] ?? Mail;

                  return (
                    <div key={item.id} className="flex items-start gap-4 py-4 first:pt-0 last:pb-0">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#e3eae1] text-[#1c3a27]">
                        <Icon className="h-5 w-5 stroke-[1.8]" />
                      </div>

                      <div className="min-w-0">
                        <p className="font-serif text-sm font-bold text-[#16351d]">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="mt-0.5 block text-xs text-[#59665b] transition hover:text-[#234b2c]"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="mt-0.5 text-xs text-[#59665b]">{item.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </aside>

            {/* Right Side: Message Form */}
            <div className="p-8 sm:p-10 lg:p-12">
              <div className="mb-8">
                <h3 className="font-serif text-2xl font-bold tracking-tight text-[#0d3319] sm:text-3xl">
                  {formHeadingPart1}{' '}
                  {formHeadingPart2 && <span className="text-[#2c7a3f]">{formHeadingPart2}</span>}
                </h3>
                <div className="mt-3 h-[2.5px] w-10 rounded-full bg-[#2c7a3f]" />
              </div>

              <form className="space-y-5">
                {/* 2-Column Responsive Form Layout */}
                <div className="grid gap-5 sm:grid-cols-2">
                  {contactData.form.fields
                    .filter((f) => f.name === 'name' || f.name === 'email' || f.type === 'text')
                    .map((field: NgoSupportContactField) => (
                      <div key={field.id} className="relative">
                        <span className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-[#59665b]">
                          {field.name === 'name' || field.icon === 'user' ? (
                            <UserRound className="h-4 w-4 stroke-[1.8]" />
                          ) : (
                            <Mail className="h-4 w-4 stroke-[1.8]" />
                          )}
                        </span>
                        <input
                          type={field.type || 'text'}
                          name={field.name}
                          placeholder={field.placeholder}
                          className="w-full rounded-xl border border-[#e2e8e0] bg-white py-3.5 pl-11 pr-4 text-xs sm:text-sm text-[#16351d] placeholder:text-[#8a988c] transition focus:border-[#234b2c] focus:outline-none focus:ring-1 focus:ring-[#234b2c]"
                        />
                      </div>
                    ))}
                </div>

                {/* Subject / Single Line Inputs */}
                {contactData.form.fields
                  .filter((f) => f.name === 'subject')
                  .map((field: NgoSupportContactField) => (
                    <div key={field.id} className="relative">
                      <span className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-[#59665b]">
                        <FileText className="h-4 w-4 stroke-[1.8]" />
                      </span>
                      <input
                        type="text"
                        name={field.name}
                        placeholder={field.placeholder}
                        className="w-full rounded-xl border border-[#e2e8e0] bg-white py-3.5 pl-11 pr-4 text-xs sm:text-sm text-[#16351d] placeholder:text-[#8a988c] transition focus:border-[#234b2c] focus:outline-none focus:ring-1 focus:ring-[#234b2c]"
                      />
                    </div>
                  ))}

                {/* Select / Category Field */}
                {contactData.form.fields
                  .filter((f) => f.type === 'select')
                  .map((field: NgoSupportContactField) => (
                    <div key={field.id} className="relative">
                      <span className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-[#59665b]">
                        <Grid className="h-4 w-4 stroke-[1.8]" />
                      </span>
                      <select
                        name={field.name}
                        defaultValue=""
                        className="w-full appearance-none rounded-xl border border-[#e2e8e0] bg-white py-3.5 pl-11 pr-10 text-xs sm:text-sm text-[#8a988c] transition focus:border-[#234b2c] focus:text-[#16351d] focus:outline-none focus:ring-1 focus:ring-[#234b2c]"
                      >
                        <option value="" disabled>
                          {field.placeholder}
                        </option>
                        {field.options?.map((option) => (
                          <option key={option.value} value={option.value} className="text-[#16351d]">
                            {option.label}
                          </option>
                        ))}
                      </select>
                      <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-[#59665b]">
                        <ChevronDown className="h-4 w-4 stroke-[2]" />
                      </span>
                    </div>
                  ))}

                {/* Textarea Field */}
                {contactData.form.fields
                  .filter((f) => f.type === 'textarea')
                  .map((field: NgoSupportContactField) => (
                    <div key={field.id} className="relative">
                      <span className="pointer-events-none absolute left-4 top-4 flex items-center text-[#59665b]">
                        <Pencil className="h-4 w-4 stroke-[1.8]" />
                      </span>
                      <textarea
                        name={field.name}
                        rows={5}
                        placeholder={field.placeholder}
                        className="w-full resize-none rounded-xl border border-[#e2e8e0] bg-white py-3.5 pl-11 pr-4 text-xs sm:text-sm text-[#16351d] placeholder:text-[#8a988c] transition focus:border-[#234b2c] focus:outline-none focus:ring-1 focus:ring-[#234b2c]"
                      />
                    </div>
                  ))}

                {/* Send Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2.5 rounded-xl bg-[#1d4325] px-7 py-3 text-xs font-semibold text-white transition duration-200 hover:bg-[#15331c] sm:text-sm"
                  >
                    <Send className="h-4 w-4 stroke-[2]" />
                    <span>{contactData.form.buttonLabel || 'Send Message'}</span>
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}