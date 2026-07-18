"use client";

import Image from "next/image";
import {
  motion,
  type Variants,
  useReducedMotion,
} from "framer-motion";

import InnerBanner from "@/components/InnerBanner";

const content =
  "Health & Fitness Instructor Course is available online now!!! Start your journey into the Fitness world with a practical, innovative curriculum and a world-class foundation for your career.";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.08,
    },
  },
};

const contentVariants: Variants = {
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
      duration: 0.95,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const imageVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 48,
    scale: 0.96,
    filter: "blur(5px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function HFIOnlinePage() {
  const reduceMotion = useReducedMotion();

  const initialState = reduceMotion ? false : "hidden";
  const visibleState = reduceMotion ? undefined : "visible";

  return (
    <main className="overflow-hidden bg-white">
      <InnerBanner
        title="HFI Online"
        bgImage="/images/page-banner-bg.png"
      />

      <section className="relative overflow-hidden bg-white px-4 py-10 sm:px-6 sm:py-14 md:px-10 md:py-16 lg:px-16 lg:py-20">
        <motion.div
          initial={initialState}
          whileInView={visibleState}
          viewport={{
            once: true,
            amount: 0.12,
          }}
          variants={containerVariants}
          className="mx-auto max-w-[1120px]"
        >
          {/* Top content */}
          <motion.div
            variants={contentVariants}
            className="relative overflow-hidden rounded-[20px] border border-[#e5e9f1] bg-white px-5 py-7 text-center shadow-[0_14px_45px_rgba(31,43,77,0.07)] sm:rounded-[24px] sm:px-8 sm:py-9 md:px-12 lg:px-16 lg:py-11"
          >
            <div className="absolute inset-x-0 top-0 h-[4px] bg-[linear-gradient(90deg,#286cba_0%,#55b8c6_50%,#524095_100%)]" />

            <p className="mx-auto max-w-[920px] text-[16px] font-semibold leading-7 text-[#261b61] sm:text-[19px] sm:leading-8 md:text-[22px] md:leading-9 lg:text-[24px] lg:leading-[1.65]">
              {content}
            </p>
          </motion.div>

          {/* Poster image */}
          <motion.figure
            variants={imageVariants}
            className="mx-auto mt-8 flex w-full justify-center sm:mt-10 lg:mt-12"
          >
            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : {
                      y: [0, -5, 0],
                    }
              }
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="group inline-flex max-w-full justify-center"
            >
              <div className="overflow-hidden rounded-[16px] border border-[#e2e6ed] bg-white p-1.5 shadow-[0_18px_55px_rgba(31,43,77,0.13)] sm:rounded-[20px] sm:p-2">
                <Image
                  src="/images/hfi-online-course.png"
                  alt="Health and Fitness Instructor online course"
                  width={900}
                  height={1280}
                  priority
                  sizes="(max-width: 640px) 88vw, (max-width: 1024px) 460px, 500px"
                  className="block h-auto max-h-[430px] w-auto max-w-full rounded-[12px] object-contain sm:max-h-[520px] sm:rounded-[15px] md:max-h-[580px] lg:max-h-[620px]"
                />
              </div>
            </motion.div>
          </motion.figure>
        </motion.div>
      </section>
    </main>
  );
}