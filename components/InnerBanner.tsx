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

const ease = [0.16, 1, 0.3, 1] as const;

function formatBreadcrumbLabel(slug: string) {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function InnerBanner({ title, bgImage }: InnerBannerProps) {
  const pathname = usePathname();

  const pathSegments = pathname.split("/").filter(Boolean);

  const breadcrumbs = pathSegments.map((segment, index) => {
    const href = "/" + pathSegments.slice(0, index + 1).join("/");
    const isLast = index === pathSegments.length - 1;

    return {
      href,
      label: isLast ? title : formatBreadcrumbLabel(segment),
      isLast,
    };
  });

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

            {breadcrumbs.map((item) => (
              <div key={item.href} className="flex items-center gap-3">
                <ChevronRight size={18} className="text-[#f15a24]" />

                {item.isLast ? (
                  <span className="font-medium text-black">{item.label}</span>
                ) : (
                  <Link
                    href={item.href}
                    className="font-medium text-black transition hover:text-[#f15a24]"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}