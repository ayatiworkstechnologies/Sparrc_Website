"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import {
  motion,
  type Variants,
  useReducedMotion,
} from "framer-motion";

import InnerBanner from "@/components/InnerBanner";

type PdfButtonProps = {
  href: string;
  label?: string;
};

type PublicationInfoProps = {
  children: ReactNode;
};

const smoothEase: [number, number, number, number] = [
  0.16, 1, 0.3, 1,
];

const pageVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.08,
    },
  },
};

const headingVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 36,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.05,
      ease: smoothEase,
    },
  },
};

const leftVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -48,
    y: 24,
    scale: 0.98,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1.15,
      ease: smoothEase,
    },
  },
};

const rightVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 48,
    y: 24,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.15,
      delay: 0.08,
      ease: smoothEase,
    },
  },
};

const articleVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 44,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.1,
      ease: smoothEase,
    },
  },
};

const compactVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 38,
    scale: 0.98,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1.05,
      ease: smoothEase,
    },
  },
};

function PdfButton({
  href,
  label = "CLICK HERE",
}: PdfButtonProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      download
      aria-label={`${label} to open the research PDF`}
      whileHover={{
        y: -2,
        scale: 1.025,
      }}
      whileTap={{
        scale: 0.97,
      }}
      transition={{
        duration: 0.3,
        ease: smoothEase,
      }}
      className="group inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-[#4d1eff] py-1.5 pl-4 pr-1.5 text-[9px] font-extrabold uppercase tracking-[0.14em] text-white shadow-[0_8px_22px_rgba(77,30,255,0.22)] transition-colors duration-300 hover:bg-[#286cba] sm:py-2 sm:pl-5 sm:pr-2 sm:text-[10px]"
    >
      {label}

      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-white/90 transition-transform duration-300 group-hover:rotate-45 sm:h-7 sm:w-7">
        <ArrowUpRight
          size={13}
          strokeWidth={2.5}
        />
      </span>
    </motion.a>
  );
}

function PublicationInfo({
  children,
}: PublicationInfoProps) {
  return (
    <div className="flex items-start gap-2.5">
      <div className="relative mt-[3px] h-[13px] w-[13px] shrink-0 sm:h-[14px] sm:w-[14px]">
        <Image
          src="/icons/logo-icon.png"
          alt=""
          fill
          sizes="14px"
          className="object-contain"
        />
      </div>

      <p className="m-0 text-[9.5px] font-semibold leading-5 text-[#343942] sm:text-[10.5px] lg:text-[11px]">
        {children}
      </p>
    </div>
  );
}

export default function ResearchPage() {
  const reduceMotion = useReducedMotion();

  const initialState = reduceMotion ? false : "hidden";
  const visibleState = reduceMotion ? undefined : "visible";

  return (
    <main className="overflow-hidden bg-white">
      <InnerBanner
        title="Research"
        bgImage="/images/page-banner-bg.png"
      />

      <section className="relative overflow-hidden bg-white px-4 py-10 sm:px-6 sm:py-14 md:px-10 md:py-16 lg:px-16 lg:py-20">
        {/* Soft background effects */}
        <div className="pointer-events-none absolute -left-48 top-24 h-80 w-80 rounded-full bg-[#286cba]/[0.025] blur-[115px]" />

        <div className="pointer-events-none absolute -right-48 bottom-10 h-80 w-80 rounded-full bg-[#524095]/[0.025] blur-[115px]" />

        <div className="relative mx-auto max-w-[1240px]">
          {/* Page heading */}
          <motion.header
            initial={initialState}
            whileInView={visibleState}
            viewport={{
              once: true,
              amount: 0.45,
            }}
            variants={headingVariants}
            className="mx-auto max-w-[820px] text-center"
          >
            <h1 className="text-[20px] font-extrabold leading-[1.35] text-[#111111] sm:text-[24px] md:text-[27px] lg:text-[29px]">
              List of articles published by SPARRC in various medical journals.
            </h1>

            <p className="mx-auto mt-2.5 max-w-[620px] text-[10px] leading-5 text-[#9a9ca2] sm:text-[11px] sm:leading-6">
              Click on download button next to article to download pdf version
              of the published text.
            </p>
          </motion.header>

          {/* First research article */}
          <motion.article
            initial={initialState}
            whileInView={visibleState}
            viewport={{
              once: true,
              amount: 0.14,
              margin: "0px 0px -70px 0px",
            }}
            variants={pageVariants}
            className="mx-auto mt-10 grid w-full max-w-[1160px] items-center gap-8 sm:mt-14 lg:mt-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-0"
          >
            {/* Left title and image */}
            <motion.div
              variants={leftVariants}
              className="group relative z-10 w-full min-w-0"
            >
              <div className="overflow-hidden rounded-[14px] bg-white shadow-[0_16px_42px_rgba(31,43,77,0.12)] sm:rounded-[16px]">
                {/* Article title */}
                <div className="bg-[#eaf4fb] px-4 py-4 sm:px-5 sm:py-5 lg:px-6">
                  <p className="m-0 text-[13px] font-medium leading-[1.55] text-[#151515] sm:text-[14px] md:text-[15px] lg:text-[16px]">
                    Completion Rates and Clinical Changes of Patients Seeking
                    Non-Invasive Treatment for Low Back Pain in 13 Centre’s of
                    a Sports Medicine Institute in India.
                  </p>
                </div>

                {/* Research image */}
                <div className="relative aspect-[16/7] min-h-[170px] w-full overflow-hidden bg-[#edf1f5] sm:min-h-[205px] lg:min-h-[225px]">
                  <Image
                    src="/images/articles-1.png"
                    alt="SPARRC research and clinical rehabilitation session"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 680px"
                    className="object-cover object-center transition-transform duration-[1400ms] ease-out group-hover:scale-[1.025]"
                  />
                </div>
              </div>
            </motion.div>

            {/* Right details */}
            <motion.div
              variants={rightVariants}
              className="w-full min-w-0 px-1 sm:px-3 lg:px-0 lg:pl-8"
            >
              <div className="lg:pl-3">
                {/* Authors with automatic-height accent */}
                <div className="border-l-2 border-[#4fc1c5] pl-4 sm:pl-5">
                  <p className="m-0 max-w-[450px] text-[10px] font-extrabold leading-[1.65] text-[#171717] sm:text-[11px] md:text-[11.5px] lg:text-[12px]">
                    By Priyadharshini Rajamani, Hemant Deepak Shewade, Debashish
                    Kundu, Kishore Kumar Sekaran, Santhanam Daniel Amalan,
                    Sujatha Pugazhendi and Kannan Pugazhendi
                  </p>
                </div>

                {/* Publication details */}
                <motion.div
                  variants={pageVariants}
                  className="mt-5 space-y-3 sm:mt-6 sm:space-y-3.5"
                >
                  <PublicationInfo>
                    Published in: Complementary Medicine Research
                  </PublicationInfo>

                  <PublicationInfo>
                    Published Date: November 13, 2019
                  </PublicationInfo>
                </motion.div>

                {/* First PDF */}
                <div className="mt-5 sm:mt-6">
                  <PdfButton href="/pdfs/research/Research-504015-1.pdf" />
                </div>
              </div>
            </motion.div>
          </motion.article>

          {/* Second research article */}
          <motion.article
            initial={initialState}
            whileInView={visibleState}
            viewport={{
              once: true,
              amount: 0.2,
              margin: "0px 0px -70px 0px",
            }}
            variants={articleVariants}
            className="mx-auto mt-14 max-w-[1160px] pt-10 sm:mt-16 sm:pt-12 lg:mt-20 lg:pt-14"
          >
            {/* Use paragraph to avoid global h2 styles */}
            <p className="m-0 max-w-[1040px] text-[16px] font-extrabold leading-[1.5] text-[#151515] sm:text-[18px] md:text-[20px] lg:text-[21px]">
              Non-invasive Complementary Therapies in Managing Musculoskeletal
              Pains and in Preventing Surgery
            </p>

            <p className="mt-3.5 max-w-[1100px] text-[9px] leading-5 text-[#96999f] sm:text-[10px] sm:leading-6 lg:text-[10.5px]">
              By Sujatha Pugazhendi, MPT, Priyadarshini Rajamani, BHMS, MSc
              Epidemiology, Amalan S. Daniel, MPT, Kannan Pugazhendi, MBBS, MS
              Sports Performance Assessment Research Rehabilitation Counselling
              (SPARRC) Institute, Tamil Nadu, and Indian Institute of Sports
              Medicine,(IISM), Tamil Nadu, India.
            </p>

            <div className="mt-5 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap sm:items-start sm:gap-x-8 sm:gap-y-4">
              <PublicationInfo>
                Published Date: June 2nd 2020
              </PublicationInfo>

              <PublicationInfo>
                Published in: International Journal of Therapeutic Massage and
                Bodywork—Volume 13
              </PublicationInfo>
            </div>

            <div className="mt-5 sm:mt-6">
              <PdfButton href="/pdfs/research/Published-article_IJTMB.pdf" />
            </div>
          </motion.article>

          {/* Third compact research article */}
          <motion.article
            initial={initialState}
            whileInView={visibleState}
            viewport={{
              once: true,
              amount: 0.3,
              margin: "0px 0px -60px 0px",
            }}
            variants={compactVariants}
            className="mx-auto mt-12 w-full max-w-[820px] sm:mt-16 lg:mt-20"
          >
            <div className="overflow-hidden rounded-[16px] border border-[#efedf6] bg-[linear-gradient(135deg,#f8f5ff_0%,#ffffff_55%,#f5f4fb_100%)] px-5 py-4 shadow-[0_12px_36px_rgba(59,44,112,0.10)] sm:px-7 sm:py-5 lg:px-8">
              <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
                {/* Compact title */}
                <p className="m-0 max-w-[500px] text-[10.5px] font-extrabold leading-[1.55] text-[#222222] sm:flex-1 sm:text-[11.5px] lg:text-[12px]">
                  Research — The effectiveness of Tele Pain Management and
                  Rehabilitation Exercise
                </p>

                {/* Third PDF */}
                <div className="shrink-0">
                  <PdfButton href="/pdfs/research/Research-Tele-pain-management.pdf" />
                </div>
              </div>
            </div>
          </motion.article>
        </div>
      </section>
    </main>
  );
}