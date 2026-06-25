"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

type InnerBannerProps = {
  title: string;
  bgImage: string;
};

const parentRoutes = [
  { name: "Departments", href: "/departments" },
  { name: "Therapies", href: "/therapies" },
  { name: "Myofascial", href: "/myofascial" },
  { name: "Story", href: "/story" },
  { name: "Events", href: "/events" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function InnerBanner({ title, bgImage }: InnerBannerProps) {
  const pathname = usePathname();

  const parent = parentRoutes.find(
    (item) => pathname === item.href || pathname.startsWith(`${item.href}/`)
  );

  const showParent = parent && parent.href !== pathname;

  return (
    <section className="relative min-h-[170px] overflow-hidden bg-white sm:min-h-[190px] md:min-h-[220px] lg:min-h-[240px]">
      <Image
        src={bgImage}
        alt={title}
        fill
        priority
        sizes="100vw"
        className="object-contain object-center"
      />

      <div className="relative z-10 mx-auto flex min-h-[170px] max-w-7xl items-center px-6 sm:min-h-[190px] md:min-h-[220px] md:px-10 lg:min-h-[240px] lg:px-16">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease }}
        >
          <div className="flex items-center gap-4">
            <span className="h-11 w-[3px] bg-[#f15a24] md:h-12" />

            <h1 className="text-[28px] font-extrabold text-black md:text-[40px]">
              {title}
            </h1>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-[15px] md:mt-8 md:text-[16px]">
            <Link
              href="/"
              className="font-medium text-black transition hover:text-[#f15a24]"
            >
              Home
            </Link>

            {showParent && (
              <>
                <ChevronRight size={18} className="text-[#f15a24]" />

                <Link
                  href={parent.href}
                  className="font-medium text-black transition hover:text-[#f15a24]"
                >
                  {parent.name}
                </Link>
              </>
            )}

            <ChevronRight size={18} className="text-[#f15a24]" />

            <span className="font-medium text-black">{title}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}