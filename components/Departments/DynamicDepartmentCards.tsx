"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export type DepartmentCardItem = {
  title: string;
  description: string;
  image: string;
  href: string;
  buttonText?: string;
};

type DynamicDepartmentCardsProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  backgroundImage?: string;
  backgroundPosition?: string;
  items: DepartmentCardItem[];
  columns?: 2 | 3 | 4;
  sectionClassName?: string;
};

const ease = [0.16, 1, 0.3, 1] as const;

export default function DynamicDepartmentCards({
  eyebrow = "DEPARTMENTS",
  title,
  description,
  backgroundImage,
  backgroundPosition = "center right",
  items,
  columns = 3,
  sectionClassName = "",
}: DynamicDepartmentCardsProps) {
  const gridColumns =
    columns === 4
      ? "sm:grid-cols-2 lg:grid-cols-4"
      : columns === 2
        ? "md:grid-cols-2"
        : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <section
      className={`relative overflow-hidden bg-white px-4 py-14 sm:px-6 md:px-10 md:py-20 lg:px-16 ${sectionClassName}`}
    >
      {/* Dynamic Background Image */}
      {backgroundImage && (
        <div className="pointer-events-none absolute inset-0">
          <Image
            src={backgroundImage}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
            style={{
              objectPosition: backgroundPosition,
            }}
          />
        </div>
      )}

      <div className="relative z-10 mx-auto max-w-[1380px]">
        {/* Heading */}
        <motion.div
          initial={{
            y: 28,
            opacity: 0,
            filter: "blur(6px)",
          }}
          whileInView={{
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.9,
            ease,
          }}
          className="mx-auto max-w-[760px] text-center"
        >
          {eyebrow && (
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-black sm:text-[12px]">
              {eyebrow}
            </p>
          )}

          <h2 className="mt-3 text-[28px] font-extrabold leading-tight text-black sm:text-[34px] md:text-[40px]">
            {title}
          </h2>

          {description && (
            <p className="mx-auto mt-4 max-w-[680px] text-[14px] leading-7 text-[#667085] sm:text-[15px]">
              {description}
            </p>
          )}
        </motion.div>

        {/* Dynamic Cards */}
        <div className={`mt-10 grid gap-6 md:mt-12 ${gridColumns}`}>
          {items.map((item, index) => (
            <motion.article
              key={item.href}
              initial={{
                y: 40,
                opacity: 0,
                scale: 0.97,
                filter: "blur(6px)",
              }}
              whileInView={{
                y: 0,
                opacity: 1,
                scale: 1,
                filter: "blur(0px)",
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.85,
                delay: index * 0.08,
                ease,
              }}
              className="group overflow-hidden rounded-[18px] border border-[#edf0f4] bg-white shadow-[0_12px_34px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_22px_55px_rgba(15,23,42,0.12)]"
            >
              <Link href={item.href} className="block h-full">
                {/* Card Image */}
                <div className="relative h-[210px] w-full overflow-hidden sm:h-[225px] md:h-[240px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes={
                      columns === 4
                        ? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    }
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6">
                  <h3 className="text-[17px] font-extrabold leading-snug text-black sm:text-[18px]">
                    {item.title}
                  </h3>

                  <p className="mt-3 line-clamp-4 text-[13px] leading-6 text-[#747b88] sm:text-[14px]">
                    {item.description}
                  </p>

                  <div className="mt-5 flex items-center gap-3">
                    <span className="rounded-full border border-[#eceff4] bg-white px-4 py-2 text-[12px] font-semibold text-black transition-colors duration-300 group-hover:border-[#ff4d2d] group-hover:text-[#ff4d2d]">
                      {item.buttonText ?? "Read more"}
                    </span>

                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#eceff4] text-[16px] text-black transition-all duration-300 group-hover:translate-x-1 group-hover:border-[#ff4d2d] group-hover:bg-[#ff4d2d] group-hover:text-white">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}