import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";

import {
  ArrowRight,
  GraduationCap,
  Laptop,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Myofascial | SPARRC",
  description:
    "Explore SPARRC Myofascial internship and HFI online learning programmes.",
};

type MyofascialItem = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

const myofascialItems: MyofascialItem[] = [
  {
    title: "Internship",
    description:
      "Explore structured internship opportunities offering practical observation, professional exposure and learning within SPARRC.",
    href: "/myofascial/internship",
    icon: GraduationCap,
  },
  {
    title: "HFI-online",
    description:
      "Access flexible online learning programmes, expert guidance and educational resources related to health, fitness and myofascial practice.",
    href: "/myofascial/hfi-online",
    icon: Laptop,
  },
];

export default function MyofascialPage() {
  return (
    <main className="overflow-hidden bg-white">
      {/* Banner */}
      <section className="relative flex min-h-[280px] items-center justify-center overflow-hidden bg-[linear-gradient(135deg,#286cba_0%,#3b55a5_50%,#524095_100%)] px-5 py-20 text-center text-white md:min-h-[360px]">
        <div className="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full border border-white/10" />

        <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full border border-white/10" />

        <div className="pointer-events-none absolute left-[20%] top-[28%] h-2.5 w-2.5 rounded-full bg-white/30" />

        <div className="pointer-events-none absolute bottom-[25%] right-[20%] h-3 w-3 rounded-full bg-white/20" />

        <div className="relative mx-auto max-w-4xl">
          <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-white/70 sm:text-[13px]">
            SPARRC
          </p>

          <h1 className="mt-4 text-[36px] font-extrabold leading-tight sm:text-[46px] md:text-[58px]">
            Myofascial
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-7 text-white/80 sm:text-[16px]">
            Explore practical internship opportunities and flexible online
            learning programmes designed to support professional development.
          </p>
        </div>
      </section>

      {/* Myofascial listing */}
      <section className="px-5 py-16 sm:px-6 md:px-10 md:py-20 lg:px-16">
        <div className="mx-auto max-w-7xl">
          {/* Section heading */}
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#286cba] sm:text-[13px]">
              Explore Myofascial
            </p>

            <h2 className="mt-4 text-[28px] font-extrabold leading-tight text-[#101828] sm:text-[36px] md:text-[44px]">
              Professional learning and practical development
            </h2>

            <p className="mt-5 text-[14px] leading-7 text-[#667085] sm:text-[15px] md:text-[16px] md:leading-8">
              Learn through professional internship exposure or access
              structured online education designed around health, fitness and
              myofascial practice.
            </p>
          </div>

          {/* Cards */}
          <div className="mx-auto mt-12 grid max-w-5xl gap-5 sm:grid-cols-2 xl:gap-6">
            {myofascialItems.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex h-full min-h-[280px] flex-col rounded-[22px] border border-[#e9edf4] bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#4D1EFF]/20 hover:shadow-[0_20px_55px_rgba(39,51,89,0.10)] sm:p-7"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(40,108,186,0.12),rgba(82,64,149,0.12))] text-[#4D1EFF] transition-all duration-300 group-hover:scale-105">
                    <Icon size={24} strokeWidth={1.8} />
                  </div>

                  <h3 className="mt-6 text-[20px] font-extrabold leading-snug text-[#101828] transition-colors duration-300 group-hover:text-[#4D1EFF]">
                    {item.title}
                  </h3>

                  <p className="mt-4 flex-1 text-[14px] leading-7 text-[#667085]">
                    {item.description}
                  </p>

                  <span className="mt-6 inline-flex items-center gap-2 text-[14px] font-bold text-[#286cba] transition-all duration-300 group-hover:gap-3 group-hover:text-[#4D1EFF]">
                    View Details

                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-16 sm:px-6 md:px-10 md:pb-20 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-7 rounded-[26px] bg-[#f5f7fc] px-6 py-10 text-center md:flex-row md:px-10 md:py-12 md:text-left">
          <div>
            <h2 className="text-[26px] font-extrabold text-[#101828] sm:text-[32px]">
              Need more information about Myofascial programmes?
            </h2>

            <p className="mt-3 max-w-2xl text-[14px] leading-7 text-[#667085] sm:text-[15px]">
              Contact our team to learn more about internship eligibility,
              programme duration, online learning and enrolment support.
            </p>
          </div>

          <Link
            href="/contact"
            className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-[#4D1EFF] px-7 py-3.5 text-[14px] font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#286cba]"
          >
            Contact Us

            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>
    </main>
  );
}