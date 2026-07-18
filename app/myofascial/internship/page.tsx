"use client";

import Image from "next/image";
import {
  motion,
  type Variants,
  useReducedMotion,
} from "framer-motion";

import InnerBanner from "@/components/InnerBanner";

const salientFeatures = [
  "Marketing & Communication.",
  "Soft skill training.",
  "Team building and problem solving techniques.",
  "Hiring norms of the industry.",
  "Administration and consumer demands.",
  "Tech/ tools and techniques in health care.",
];

/* Slow animation used for headings and paragraphs */
const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

/* Image enters slowly from the left */
const imageRevealVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -60,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 1.15,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

/* Feature section enters slowly from the right */
const featureRevealVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.15,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

/* Controls the delay between each feature point */
const featureListVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};

/* Each feature point animation */
const featureItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function InternshipPage() {
  const reduceMotion = useReducedMotion();

  const initialState = reduceMotion ? false : "hidden";
  const visibleState = reduceMotion ? undefined : "visible";

  return (
    <main className="overflow-hidden bg-white">
      <InnerBanner
        title="Internship"
        bgImage="/images/page-banner-bg.png"
      />

      <section className="relative overflow-hidden bg-white px-5 py-14 sm:px-7 sm:py-16 md:px-10 lg:px-16 lg:py-20">
        {/* Background decorations */}
        <div className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-[#286cba]/[0.035] blur-[110px]" />

        <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-[#524095]/[0.035] blur-[110px]" />

        <div className="relative mx-auto max-w-7xl">
          {/* Introduction section */}
          <motion.div
            initial={initialState}
            whileInView={visibleState}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            variants={fadeUpVariants}
            className="mx-auto max-w-6xl text-center"
          >
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#171717] sm:text-[13px]">
              Internship
            </p>

            <h1 className="mt-5 text-[28px] font-extrabold leading-tight text-[#101010] sm:text-[34px] md:text-[40px]">
              MBA Internship in Health Care
            </h1>

            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      scaleX: 0,
                      opacity: 0,
                    }
              }
              whileInView={
                reduceMotion
                  ? undefined
                  : {
                      scaleX: 1,
                      opacity: 1,
                    }
              }
              viewport={{
                once: true,
                amount: 0.8,
              }}
              transition={{
                duration: 1,
                delay: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mx-auto mt-5 h-[3px] w-16 origin-center rounded-full bg-[linear-gradient(90deg,#286cba,#524095)]"
            />

            <p className="mx-auto mt-7 max-w-[1120px] text-[14px] leading-7 text-[#858585] sm:text-[15px] sm:leading-8 md:text-[16px]">
              Health Care demands for empathetic and quick thinking minds are
              growing each day. For ages now there’s a vacuum space to bridge
              the medical world and it’s consumer. Could we solve this issue
              that can help medical team and management team mutually? SPARRC
              believes we can. General Management of hospitals and clinic
              boutiques, HR management, Finance and Marketing management,
              administrative skills or even simply to run a traditional
              business can be learnt during an internship. SPARRC is an unique
              business model that can offer the candidates a holistic view of
              organizing a preventive health care, lifestyle management and
              pain care facility.
            </p>
          </motion.div>

          {/* Image and salient features */}
          <div className="mt-12 grid items-center gap-10 md:mt-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
            {/* Internship image */}
            <motion.figure
              initial={initialState}
              whileInView={visibleState}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              variants={imageRevealVariants}
              className="group relative mx-auto w-full max-w-[680px] lg:max-w-none"
            >
              <div className="pointer-events-none absolute -bottom-4 -right-4 h-full w-full bg-[linear-gradient(135deg,#e6f1ff,#eee8ff)] sm:-bottom-5 sm:-right-5" />

              <div className="relative overflow-hidden bg-[#edf1f5] shadow-[0_20px_55px_rgba(35,48,82,0.12)]">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src="/images/mba-health-care-internship.png"
                    alt="Participants attending the SPARRC MBA health care internship programme"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 680px"
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.025]"
                  />
                </div>
              </div>
            </motion.figure>

            {/* Salient features */}
            <motion.div
              initial={initialState}
              whileInView={visibleState}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              variants={featureRevealVariants}
              className="w-full"
            >
              <h2 className="text-[27px] font-extrabold leading-tight text-[#101010] sm:text-[32px] md:text-[36px]">
                Salient features of the program
              </h2>

              <motion.div
                initial={initialState}
                whileInView={visibleState}
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                variants={featureListVariants}
                className="mt-8 space-y-5 sm:mt-9 sm:space-y-6"
              >
                {salientFeatures.map((feature) => (
                  <motion.div
                    key={feature}
                    variants={featureItemVariants}
                    className="group flex items-start gap-4"
                  >
                    {/* Your icon image */}
                    <motion.div
                      whileHover={
                        reduceMotion
                          ? undefined
                          : {
                              scale: 1.12,
                              rotate: 5,
                            }
                      }
                      transition={{
                        duration: 0.35,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="relative mt-1 h-6 w-6 shrink-0"
                    >
                      <Image
                        src="/icons/logo-icon.png"
                        alt=""
                        fill
                        sizes="24px"
                        className="object-contain"
                      />
                    </motion.div>

                    <p className="text-[14px] font-semibold leading-7 text-[#282828] sm:text-[15px] sm:leading-8">
                      {feature}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}