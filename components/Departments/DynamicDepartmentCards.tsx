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
  items: DepartmentCardItem[];
  columns?: 2 | 3 | 4;
  sectionClassName?: string;
};

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const cardAnimations = [
  { x: -55, y: 45, rotate: -1.5 },
  { x: 0, y: 65, rotate: 0 },
  { x: 55, y: 45, rotate: 1.5 },
  { x: 0, y: 80, rotate: -1 },
  { x: -45, y: 55, rotate: 1 },
  { x: 45, y: 55, rotate: -1 },
  { x: 0, y: 70, rotate: 1.2 },
  { x: 55, y: 40, rotate: -1.2 },
];

export default function DynamicDepartmentCards({
  eyebrow = "DEPARTMENTS",
  title,
  description,
  backgroundImage,
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
      {backgroundImage && (
        <motion.div
          className="pointer-events-none absolute inset-0"
          initial={{ opacity: 0, scale: 1.06 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.8, ease }}
        >
          <Image
            src={backgroundImage}
            alt=""
            fill
            sizes="100vw"
            className="
              object-cover
              object-center
              sm:object-center
              md:object-center
              lg:object-[center_right]
            "
            priority={false}
          />

          <div className="absolute inset-0 bg-white/70 sm:bg-white/60 md:bg-white/45 lg:bg-white/25" />
        </motion.div>
      )}

      <div className="relative z-10 mx-auto max-w-[1380px]">
        <motion.div
          initial={{ y: 36, opacity: 0, scale: 0.98, filter: "blur(10px)" }}
          whileInView={{ y: 0, opacity: 1, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1.35, ease }}
          className="mx-auto max-w-[760px] text-center"
        >
          {eyebrow && (
            <motion.p
              className="text-[11px] font-semibold uppercase tracking-[0.12em] text-black sm:text-[12px]"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease }}
            >
              {eyebrow}
            </motion.p>
          )}

          <motion.h2
            className="mt-3 text-[28px] font-extrabold leading-tight text-black sm:text-[34px] md:text-[40px]"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, delay: 0.32, ease }}
          >
            {title}
          </motion.h2>

          {description && (
            <motion.p
              className="mx-auto mt-4 max-w-[680px] text-[14px] leading-7 text-[#667085] sm:text-[15px]"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, delay: 0.44, ease }}
            >
              {description}
            </motion.p>
          )}
        </motion.div>

        <div className={`mt-10 grid gap-6 md:mt-12 ${gridColumns}`}>
          {items.map((item, index) => {
            const animation = cardAnimations[index % cardAnimations.length];

            return (
              <motion.article
                key={item.href}
                initial={{
                  x: animation.x,
                  y: animation.y,
                  opacity: 0,
                  scale: 0.94,
                  rotate: animation.rotate,
                  filter: "blur(10px)",
                }}
                whileInView={{
                  x: 0,
                  y: 0,
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                  filter: "blur(0px)",
                }}
                viewport={{
                  once: true,
                  amount: 0.18,
                  margin: "0px 0px -60px 0px",
                }}
                transition={{
                  duration: 1.25,
                  delay: (index % 4) * 0.12,
                  ease,
                }}
                className="group"
              >
                <div className="h-full overflow-hidden rounded-[18px] border border-[#edf0f4] bg-white shadow-[0_12px_34px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_22px_55px_rgba(15,23,42,0.12)]">
                  <Link href={item.href} className="block h-full">
                    <div className="relative h-[210px] w-full overflow-hidden sm:h-[225px] md:h-[240px]">
                      <motion.div
                        className="relative h-full w-full"
                        initial={{ scale: 1.12 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.8, delay: 0.15, ease }}
                      >
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
                      </motion.div>

                      <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    </div>

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
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}