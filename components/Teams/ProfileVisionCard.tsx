"use client";

import Image from "next/image";
import {
  Children,
  type ReactNode,
} from "react";

import {
  motion,
  type Variants,
} from "framer-motion";

type ProfileVisionProps = {
  visionLabel: string;
  name: string;
  role: string;
  organization?: string;

  // changed only this
  paragraphs: ReactNode[];

  image: string;
  imageAlt?: string;
  designation: string;
  logoIcon?: string;
  imagePosition?: string;
};

const ease = [0.16, 1, 0.3, 1] as const;

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 38,
    scale: 0.985,
    filter: "blur(7px)",
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",

    transition: {
      duration: 0.9,
      ease,
      staggerChildren: 0.12,
    },
  },
};

const leftVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -28,
    filter: "blur(5px)",
  },

  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",

    transition: {
      duration: 0.8,
      ease,
    },
  },
};

const rightVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 30,
    scale: 0.98,
    filter: "blur(5px)",
  },

  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: "blur(0px)",

    transition: {
      duration: 0.85,
      ease,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.65,
      ease,
    },
  },
};

export default function ProfileVisionCard({
  visionLabel,
  name,
  role,
  organization,
  paragraphs,
  image,
  imageAlt,
  designation,
  logoIcon = "/icons/logo-icon.png",
  imagePosition = "object-center",
}: ProfileVisionProps) {
  /*
    React.Children.toArray()
    gives React elements stable keys and prevents:

    "Each child in a list should have a unique key prop"
  */
  const normalizedParagraphs = Children.toArray(paragraphs);

  return (
    <section className="overflow-hidden bg-white px-4 py-10 font-jost sm:px-6 sm:py-14 md:px-8 lg:px-10 lg:py-16">
      <motion.article
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.15,
          margin: "0px 0px -60px 0px",
        }}
        className="relative mx-auto w-full max-w-[1160px] overflow-hidden rounded-[17px] bg-white px-5 pb-6 pt-16 shadow-[0_14px_46px_rgba(0,0,0,0.12)] sm:px-7 sm:pb-7 sm:pt-17 lg:px-5 lg:pb-5"
      >
        {/* Vision label */}

        <motion.div
          variants={fadeUpVariants}
          className="absolute left-5 top-5 sm:left-7 lg:left-5"
        >
          <span className="inline-flex rounded-[11px] bg-[#d8effc] px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.015em] text-[#247fc5] sm:px-6 sm:text-[12px]">
            {visionLabel}
          </span>
        </motion.div>

        <div className="grid items-center gap-8 lg:grid-cols-[1.55fr_0.95fr] lg:gap-12">
          {/* Left content */}

          <motion.div
            variants={leftVariants}
            className="order-2 min-w-0 lg:order-1"
          >
            <motion.div
              variants={fadeUpVariants}
              className="flex items-center gap-3"
            >
              <div className="relative h-5 w-5 shrink-0 sm:h-6 sm:w-6">
                <Image
                  src={logoIcon}
                  alt="SPARRC icon"
                  fill
                  sizes="24px"
                  className="object-contain"
                />
              </div>

              <h2 className="m-0 text-[22px] font-extrabold leading-[1.25] tracking-[-0.02em] text-[#17141d] sm:text-[25px] lg:text-[27px]">
                {name}
              </h2>
            </motion.div>

            <motion.div
              variants={fadeUpVariants}
              className="mt-5 space-y-5"
            >
              {normalizedParagraphs.map((paragraph, index) => (
                <p
                  key={`${name}-paragraph-${index}`}
                  className="m-0 mb-5 text-[12px] leading-[1.75] text-[#868686] sm:text-[13px] md:text-[14px]"
                >
                  {index === 0 &&
                    (role || organization) && (
                      <>
                        <strong className="font-bold text-[#454248]">
                          {role}
                          {organization
                            ? ` – ${organization}`
                            : ""}
                        </strong>{" "}
                      </>
                    )}

                  {paragraph}
                </p>
              ))}
            </motion.div>
          </motion.div>

          {/* Right image */}

          <motion.div
            variants={rightVariants}
            className="order-1 w-full min-w-0 lg:order-2"
          >
            <motion.div
              whileHover={{
                y: -5,

                transition: {
                  duration: 0.3,
                  ease,
                },
              }}
              className="group"
            >
              <div className="relative aspect-[1.42/1] w-full overflow-hidden rounded-[11px] bg-[#eeeeee]">
                <Image
                  src={image}
                  alt={imageAlt ?? name}
                  fill
                  sizes="(max-width: 1023px) 100vw, 38vw"
                  className={`object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035] ${imagePosition}`}
                />
              </div>

              <motion.div
                variants={fadeUpVariants}
                className="mt-3 rounded-[7px] border border-[#bee6fb] bg-[#d8f1fd] px-4 py-2.5 text-center text-[11px] font-semibold text-[#5261ae] sm:text-[12px]"
              >
                {designation}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.article>
    </section>
  );
} 