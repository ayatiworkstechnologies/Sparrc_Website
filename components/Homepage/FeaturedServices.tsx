"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const smoothEase: [number, number, number, number] = [
  0.16,
  1,
  0.3,
  1,
];

const services = [
  {
    title: "MTPT",
    image: "/images/fs-mtpt.png",
    href: "/therapies/mtpt",
  },
  {
    title: "Exercise Rehabilitation",
    image: "/images/fs-exercise-rehabilitation.png",
    href: "/departments/rehabilitation",
  },
  {
    title: "Physiotherapy",
    image: "/images/fs-physiotherapy.png",
    href: "/therapies/physiotherapy",
  },
  {
    title: "Non Surgical Care",
    image: "/images/fs-non-surgical-care.png",
    href: "/departments/avoid-surgery-programs",
  },
  {
    title: "Acupuncture",
    image: "/images/fs-acupuncture.png",
    href: "/therapies/sports-massage",
  },
  {
    title: "Aqua Therapy",
    image: "/images/fs-aqua-therapy.png",
    href: "/therapies/aquatherapy",
  },
  {
    title: "PEMF",
    image: "/images/fs-pemf.png",
    href: "/therapies/pemf",
  },
  {
    title: "Prescription Exercise",
    image: "/images/fs-prescription-exercise.png",
    href: "/therapies/prescription-exercise",
  },
];

/* =========================================================
   ANIMATION
========================================================= */

const containerVariants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.98,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.65,
      ease: smoothEase,
    },
  },
};

export default function TreatmentServices() {
  return (
    <section
      className="
        w-full
        overflow-hidden
        bg-[#F5F7FC]
        px-5
        py-14

        sm:px-7
        sm:py-16

        md:px-10
        md:py-20

        lg:px-14
        lg:py-20

        xl:px-16
      "
    >
      <div className="mx-auto w-full max-w-[1440px]">
        {/* =====================================================
            HEADING
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 28,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.75,
            ease: smoothEase,
          }}
          className="max-w-[800px]"
        >
          {/* Label */}

          <p
            className="
              text-[10px]
              font-[600]
              uppercase
              tracking-[0.04em]
              text-[#4585CF]

              sm:text-[11px]
            "
          >
            TREAT
          </p>

          {/* Title */}

          <h2
            className="
              mt-5
              text-[30px]
              font-[700]
              leading-[1.08]
              tracking-[-0.035em]
              text-[#050505]

              sm:text-[34px]
              md:text-[38px]
              lg:text-[40px]
            "
          >
            Treatment Services
          </h2>

          {/* Description */}

          <p
            className="
              mt-4
              max-w-[780px]
              text-[13px]
              font-[400]
              leading-[1.65]
              text-[#687386]

              sm:text-[14px]
            "
          >
            Our clinical treatment services bridge medical diagnosis and active
            recovery. We deliver highly customized physical interventions to
            resolve pain at its mechanical root, bypassing surgical needs.
          </p>
        </motion.div>

        {/* =====================================================
            SERVICES GRID
        ====================================================== */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.08,
          }}
          className="
            mt-12
            grid
            grid-cols-1
            gap-5

            sm:grid-cols-2

            lg:mt-14
            lg:grid-cols-4
            lg:gap-5

            xl:gap-6
          "
        >
          {services.map((service) => (
            <motion.article
              key={service.title}
              variants={cardVariants}
              whileHover={{
                y: -6,

                transition: {
                  duration: 0.25,
                  ease: "easeOut",
                },
              }}
              className="
                group
                overflow-hidden
                rounded-[12px]
                border
                border-[#DDE2EA]
                bg-white
                p-[14px]
                shadow-[0_5px_18px_rgba(25,40,75,0.025)]
                transition-shadow
                duration-300

                hover:shadow-[0_14px_35px_rgba(30,45,80,0.08)]
              "
            >
              {/* =================================================
                  IMAGE
              ================================================== */}

              <Link
                href={service.href}
                className="
                  relative
                  block
                  h-[210px]
                  w-full
                  overflow-hidden
                  rounded-[10px]

                  sm:h-[205px]

                  lg:h-[185px]

                  xl:h-[200px]
                "
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="
                    (max-width: 640px) 100vw,
                    (max-width: 1024px) 50vw,
                    25vw
                  "
                  className="
                    object-cover
                    object-center
                    transition-transform
                    duration-500
                    ease-out

                    group-hover:scale-[1.04]
                  "
                />

                {/* subtle hover overlay */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-black/0
                    transition-colors
                    duration-300

                    group-hover:bg-black/[0.02]
                  "
                />
              </Link>

              {/* =================================================
                  CONTENT
              ================================================== */}

              <div className="px-1 pb-1 pt-5">
                {/* Title */}

                <h3
                  className="
                    text-[17px]
                    font-[700]
                    leading-[1.25]
                    tracking-[-0.025em]
                    text-[#080808]

                    sm:text-[18px]
                  "
                >
                  {service.title}
                </h3>

                {/* Learn More */}

                <Link
                  href={service.href}
                  className="
                    group/link
                    mt-4
                    inline-flex
                    items-center
                    gap-2
                    text-[11px]
                    font-[700]
                    text-[#563BFF]
                    transition-colors
                    duration-300

                    hover:text-[#3F25D6]

                    sm:text-[12px]
                  "
                >
                  Learn More

                  <span
                    className="
                      text-[16px]
                      leading-none
                      transition-transform
                      duration-300

                      group-hover/link:translate-x-1
                    "
                  >
                    →
                  </span>
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}