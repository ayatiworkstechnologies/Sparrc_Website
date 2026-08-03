"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Video,
} from "lucide-react";

const magazines = [
  {
    id: 1,
    src: "/images/magazine-1.png",
    alt: "SPARRC Exercise Magazine",
  },
  {
    id: 2,
    src: "/images/magazine-2.png",
    alt: "SPARRC Breathe Right Magazine",
  },
];

const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 36,
    scale: 0.985,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.85,
      ease: [0.16, 1, 0.3, 1] as const,
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.72,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const magazineVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.94,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function EMagazineSection() {
  return (
    <section className="relative overflow-hidden bg-[#f6faff] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-32 top-24 h-[320px] w-[320px] rounded-full bg-[#e8f3ff] blur-[110px]" />

      <div className="pointer-events-none absolute -right-28 bottom-10 h-[320px] w-[320px] rounded-full bg-[#eafff4] blur-[110px]" />

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.15,
        }}
        className="relative mx-auto w-full max-w-[1180px] overflow-hidden rounded-[24px] border border-[#dfe7ef] bg-[linear-gradient(135deg,#ffffff_0%,#fbfdff_52%,#effff7_100%)] px-5 py-8 shadow-[0_20px_55px_rgba(36,69,104,0.08)] sm:px-8 sm:py-10 lg:rounded-[28px] lg:px-12 lg:py-10"
      >
        {/* Decorative circles */}
        {/* <div className="pointer-events-none absolute -left-20 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full border border-[#e8eef5]" /> */}

 
        <div className="relative">
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-[#e9fff4] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#49dca2] shadow-[0_5px_18px_rgba(63,216,159,0.12)] sm:text-[11px]"
            >
              <Video
                size={13}
                strokeWidth={2.4}
              />

              Live & Updates
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={itemVariants}
            className="mt-5 text-center font-jost text-[30px] font-bold leading-tight tracking-[-0.035em] text-[#0868d8] sm:text-[36px] lg:text-[40px]"
          >
            E-Magazine
          </motion.h2>

          {/* Magazines */}
          <div className="mx-auto mt-8 grid max-w-[850px] items-end justify-items-center gap-10 sm:grid-cols-2 sm:gap-12 lg:mt-7 lg:gap-24">
            {magazines.map((magazine, index) => (
              <motion.div
                key={magazine.id}
                variants={magazineVariants}
                whileHover={{
                  y: -12,
                  scale: 1.025,
                  transition: {
                    duration: 0.3,
                    ease: "easeOut",
                  },
                }}
                className="group relative"
              >
                {/* Soft image shadow */}
                <div className="pointer-events-none absolute bottom-[-14px] left-1/2 h-8 w-[72%] -translate-x-1/2 rounded-full bg-black/10 blur-xl transition-all duration-300 group-hover:w-[80%] group-hover:bg-black/15" />

                <div className="relative overflow-hidden rounded-[13px] border border-white/80 bg-white shadow-[0_14px_35px_rgba(19,43,90,0.16)] transition-shadow duration-300 group-hover:shadow-[0_22px_50px_rgba(19,43,90,0.22)]">
                  <Image
                    src={magazine.src}
                    alt={magazine.alt}
                    width={307}
                    height={435}
                    priority={index === 0}
                    className="h-auto w-[230px] object-cover sm:w-[260px] lg:h-[435px] lg:w-[307px]"
                  />

                  {/* Hover shine */}
                  <div className="pointer-events-none absolute inset-y-0 -left-[70%] w-[45%] skew-x-[-18deg] bg-white/20 blur-md transition-all duration-700 group-hover:left-[125%]" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer */}
          <motion.div
            variants={itemVariants}
            className="mt-10 text-center sm:mt-11"
          >
            <h3 className="font-jost text-[22px] font-bold tracking-[-0.02em] text-[#0764cf] sm:text-[25px]"
            >
              Follow Our Page
            </h3>

            <Link
              href="https://www.sparrcinstitute.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-5 inline-flex min-h-[46px] items-center justify-center gap-2.5 rounded-full bg-[linear-gradient(135deg,#6638ff_0%,#491cff_100%)] px-8 text-[11px] font-semibold uppercase tracking-[0.18em] text-white shadow-[0_12px_28px_rgba(82,42,244,0.28)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_17px_35px_rgba(82,42,244,0.36)] active:translate-y-0"
            >
              Know More

              <ArrowUpRight
                size={15}
                strokeWidth={2.2}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}