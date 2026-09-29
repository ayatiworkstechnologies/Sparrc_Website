"use client";

import { motion } from "framer-motion";
import InnerBanner from "@/components/InnerBanner";

const smoothEase: [number, number, number, number] = [
  0.16,
  1,
  0.3,
  1,
];

const features = [
  {
    title: "Strength & Resilience",
    description:
      "Build strength, mobility and resilience through every stage of life.",
    icon: "strength",
  },
  {
    title: "Bone & Muscle Health",
    description:
      "Support muscle and bone health through perimenopause, menopause and beyond.",
    icon: "bone",
  },
  {
    title: "Move With Confidence",
    description:
      "Develop the physical capacity to move, work and perform with confidence.",
    icon: "movement",
  },
  {
    title: "No Expiry Date",
    description:
      "Fitness has no age limit. You can move, strengthen and perform at any age.",
    icon: "infinity",
  },
];

/* =========================================================
   SVG ICONS
========================================================= */

function FeatureIcon({ type }: { type: string }) {
  /* STRENGTH */
  if (type === "strength") {
    return (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 sm:h-9 sm:w-9"
        aria-hidden="true"
      >
        <path
          d="M18 23V41M24 19V45M40 19V45M46 23V41M24 32H40"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M18 27H13C11.9 27 11 27.9 11 29V35C11 36.1 11.9 37 13 37H18"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
        />

        <path
          d="M46 27H51C52.1 27 53 27.9 53 29V35C53 36.1 52.1 37 51 37H46"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  /* BONE & MUSCLE */
  if (type === "bone") {
    return (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 sm:h-9 sm:w-9"
        aria-hidden="true"
      >
        <path
          d="M26 12C27.5 18 26.8 23.2 23 28C20.2 31.5 20.2 35.5 23 39C26.8 43.8 27.5 49 26 55"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
        />

        <path
          d="M38 12C36.5 18 37.2 23.2 41 28C43.8 31.5 43.8 35.5 41 39C37.2 43.8 36.5 49 38 55"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
        />

        <path
          d="M23.5 29C28.5 26.7 35.5 26.7 40.5 29"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
        />

        <path
          d="M23.5 38C28.5 40.3 35.5 40.3 40.5 38"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
        />

        <circle
          cx="32"
          cy="33.5"
          r="3.5"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    );
  }

  /* MOVEMENT */
  if (type === "movement") {
    return (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 sm:h-9 sm:w-9"
        aria-hidden="true"
      >
        <circle
          cx="42"
          cy="14"
          r="4"
          stroke="currentColor"
          strokeWidth="2.2"
        />

        <path
          d="M34 22L40 25L44 32L52 35"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M40 25L34 34L27 39"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M34 34L40 43L50 47"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M8 23H24"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
        />

        <path
          d="M5 32H21"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
        />

        <path
          d="M10 41H24"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  /* NO EXPIRY DATE / INFINITY */
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8 sm:h-9 sm:w-9"
      aria-hidden="true"
    >
      <path
        d="M31.8 32C27 24.5 23.5 20.5 18.5 20.5C12.7 20.5 8 25.7 8 32C8 38.3 12.7 43.5 18.5 43.5C23.5 43.5 27 39.5 31.8 32Z"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M32.2 32C37 24.5 40.5 20.5 45.5 20.5C51.3 20.5 56 25.7 56 32C56 38.3 51.3 43.5 45.5 43.5C40.5 43.5 37 39.5 32.2 32Z"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <circle cx="32" cy="32" r="2.5" fill="currentColor" />
    </svg>
  );
}

export default function WomensFitnessMedicinePage() {
  return (
    <main className="overflow-hidden bg-white">
      {/* =====================================================
          INNER BANNER
      ====================================================== */}

      <InnerBanner
        title="Women’s Fitness Medicine"
        bgImage="/images/page-banner-bg.png"
      />

      {/* =====================================================
          WOMEN'S FITNESS MEDICINE
      ====================================================== */}

      <section
        className="
          relative
          w-full
          overflow-hidden
          bg-[#F7F9FF]
        "
      >
        {/* =====================================================
            BLUE BACKGROUND DECORATION
        ====================================================== */}

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* TOP RIGHT RING */}

          <div
            className="
              absolute
              -right-[150px]
              -top-[160px]
              h-[430px]
              w-[430px]
              rounded-full
              border-[70px]
              border-[#DDE9FF]/55

              sm:-right-[120px]
              lg:-right-[80px]
            "
          />

          {/* BLUE GLOW */}

          <div
            className="
              absolute
              -left-[200px]
              bottom-[-220px]
              h-[520px]
              w-[700px]
              rounded-full
              bg-[#DDEBFF]/70
              blur-[100px]
            "
          />

          {/* PURPLE GLOW */}

          <div
            className="
              absolute
              right-[-180px]
              top-[180px]
              h-[440px]
              w-[440px]
              rounded-full
              bg-[#E9E4FF]/45
              blur-[110px]
            "
          />

          {/* DECORATIVE BLUE LINES */}

          {/* <svg
            viewBox="0 0 1440 260"
            fill="none"
            preserveAspectRatio="none"
            className="
              absolute
              bottom-0
              left-0
              h-[150px]
              w-full
              opacity-70

              sm:h-[180px]
              lg:h-[220px]
            "
            aria-hidden="true"
          >
            <path
              d="M-100 205C90 86 260 244 462 163C645 90 771 178 945 143C1124 107 1266 38 1540 88"
              stroke="url(#lineGradientOne)"
              strokeWidth="2"
            />

            <path
              d="M-80 250C120 120 315 173 491 205C682 240 810 88 1014 130C1200 169 1337 92 1515 48"
              stroke="url(#lineGradientTwo)"
              strokeWidth="1.4"
            />

            <path
              d="M-60 163C126 113 273 197 433 158C603 117 728 174 871 166"
              stroke="#7EA7DF"
              strokeWidth="1"
              opacity="0.55"
            />

            <circle cx="671" cy="169" r="7" fill="#386FC5" />

            <circle
              cx="671"
              cy="169"
              r="18"
              fill="#386FC5"
              opacity="0.13"
            />

            <defs>
              <linearGradient
                id="lineGradientOne"
                x1="0"
                y1="130"
                x2="1440"
                y2="130"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#7AB9E8" />
                <stop offset="0.55" stopColor="#376FC6" />
                <stop offset="1" stopColor="#6245A5" />
              </linearGradient>

              <linearGradient
                id="lineGradientTwo"
                x1="0"
                y1="160"
                x2="1440"
                y2="100"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#C5DCF5" />
                <stop offset="0.6" stopColor="#799CD8" />
                <stop offset="1" stopColor="#A99AE0" />
              </linearGradient>
            </defs>
          </svg> */}
        </div>

        {/* =====================================================
            CONTENT
        ====================================================== */}

        <div
          className="
            relative
            z-10
            mx-auto
            grid
            w-full
            max-w-[1440px]
            grid-cols-1
            gap-12
            px-5
            py-14

            sm:px-7
            sm:py-16

            md:px-10
            md:py-20

            lg:grid-cols-[1.05fr_0.95fr]
            lg:items-center
            lg:gap-14
            lg:px-14
            lg:py-24

            xl:grid-cols-[1.08fr_0.92fr]
            xl:gap-20
            xl:px-16
            xl:py-28
          "
        >
          {/* =====================================================
              LEFT
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -45,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.9,
              ease: smoothEase,
            }}
            className="relative"
          >
            {/* LABEL */}

            <motion.div
              initial={{
                opacity: 0,
                y: 14,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                ease: smoothEase,
              }}
              className="flex items-center gap-4"
            >
              <p
                className="
                  text-[10px]
                  font-[700]
                  uppercase
                  tracking-[0.3em]
                  text-[#276AB7]

                  sm:text-[11px]
                "
              >
                PROGRAMS &amp; CARE
              </p>

              <div
                className="
                  h-px
                  w-[55px]
                  bg-gradient-to-r
                  from-[#278BCB]
                  to-[#5945A5]

                  sm:w-[75px]
                "
              />
            </motion.div>

            {/* TITLE */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.75,
                delay: 0.08,
                ease: smoothEase,
              }}
              className="
                mt-6
                max-w-[680px]
                text-[38px]
                font-[700]
                leading-[1.04]
                tracking-[-0.04em]
                text-[#111B35]

                sm:text-[46px]
                md:text-[54px]
                lg:text-[57px]
                xl:text-[62px]
              "
            >
              Women&apos;s
              <br className="hidden sm:block" />
              Fitness Medicine
            </motion.h1>

            {/* TAGLINE */}

            <motion.p
              initial={{
                opacity: 0,
                y: 18,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.14,
                ease: smoothEase,
              }}
              className="
                mt-6
                max-w-[640px]
                text-[18px]
                font-[500]
                leading-[1.5]
                text-[#53657D]

                sm:text-[20px]
                lg:text-[21px]
              "
            >
              Strength, mobility and resilience for every stage of life.
            </motion.p>

            {/* BLUE ACCENT */}

            <motion.div
              initial={{
                scaleX: 0,
              }}
              whileInView={{
                scaleX: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.75,
                delay: 0.18,
                ease: smoothEase,
              }}
              className="
                mt-6
                h-[3px]
                w-[60px]
                origin-left
                rounded-full
                bg-gradient-to-r
                from-[#258CCB]
                via-[#386BC1]
                to-[#5C43A2]
              "
            />

            {/* EXACT CONTENT */}

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.75,
                delay: 0.2,
                ease: smoothEase,
              }}
              className="
                mt-7
                max-w-[700px]
                text-[14px]
                font-[400]
                leading-[1.9]
                text-[#56657A]

                sm:text-[15px]
                lg:leading-[1.95]
              "
            >
              Women are not a niche in sports medicine. From urban
              professionals and athletes to rural women whose daily lives
              involve hours of physical labour, their muscles, bones and joints
              carry very different but persistent loads. The need for strength
              becomes even more important through perimenopause and menopause,
              when changes in muscle and bone can increase the risk of
              sarcopenia and osteopenia. At SPARRC, the idea of fitness
              therefore stretches far beyond competitive sport: it is about
              helping women build strength, mobility and resilience at every
              stage of life. One of SPARRC’s athletes is 80 years old and
              continues to run and compete in discus and shot put, a reminder
              that fitness does not have an expiry date. You can begin to move,
              strengthen and perform at any age.
            </motion.p>
          </motion.div>

          {/* =====================================================
              RIGHT CARDS
          ====================================================== */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.12,
            }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.09,
                  delayChildren: 0.15,
                },
              },
            }}
            className="
              grid
              grid-cols-1
              gap-4

              sm:grid-cols-2

              lg:gap-4
            "
          >
            {features.map((feature, index) => (
              <motion.article
                key={feature.title}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 28,
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
                }}
                whileHover={{
                  y: -5,
                  transition: {
                    duration: 0.22,
                  },
                }}
                className="
                  group
                  relative
                  min-h-[225px]
                  overflow-hidden
                  rounded-[18px]
                  border
                  border-[#DCE5F3]
                  bg-white/90
                  p-6
                  shadow-[0_14px_45px_rgba(35,66,120,0.055)]
                  backdrop-blur-sm
                  transition-all
                  duration-300

                  hover:border-[#BFCFEC]
                  hover:shadow-[0_22px_55px_rgba(52,76,145,0.10)]

                  sm:min-h-[250px]
                  sm:p-7

                  lg:min-h-[265px]

                  xl:p-8
                "
              >
                {/* SUBTLE CARD NUMBER */}

                <span
                  className="
                    absolute
                    right-5
                    top-4
                    text-[11px]
                    font-[700]
                    tracking-[0.12em]
                    text-[#C9D5E8]
                  "
                >
                  0{index + 1}
                </span>

                {/* HOVER GLOW */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-[70px]
                    -top-[70px]
                    h-[160px]
                    w-[160px]
                    rounded-full
                    bg-[#DFE9FF]/0
                    blur-[35px]
                    transition-all
                    duration-500

                    group-hover:bg-[#DFE9FF]/70
                  "
                />

                {/* ICON */}

                <div
                  className="
                    relative
                    flex
                    h-[66px]
                    w-[66px]
                    items-center
                    justify-center
                    rounded-[18px]
                    border
                    border-[#CCDDF3]
                    bg-gradient-to-br
                    from-[#F4F9FF]
                    to-[#F1EFFF]
                    text-[#326FBD]
                    shadow-[0_8px_24px_rgba(46,105,183,0.06)]
                    transition-all
                    duration-300

                    group-hover:-rotate-2
                    group-hover:scale-105
                    group-hover:border-[#ADC8EA]
                    group-hover:text-[#5544A4]

                    sm:h-[70px]
                    sm:w-[70px]
                  "
                >
                  <FeatureIcon type={feature.icon} />
                </div>

                {/* TITLE */}

                <h2
                  className="
                    mt-6
                    text-[18px]
                    font-[700]
                    leading-[1.25]
                    tracking-[-0.025em]
                    text-[#101B35]

                    sm:text-[19px]
                    xl:text-[20px]
                  "
                >
                  {feature.title}
                </h2>

                {/* BLUE/PURPLE LINE */}

                <div
                  className="
                    mt-4
                    h-[2px]
                    w-[30px]
                    rounded-full
                    bg-gradient-to-r
                    from-[#268CCA]
                    to-[#5C44A4]
                    transition-all
                    duration-300

                    group-hover:w-[52px]
                  "
                />

                {/* DESCRIPTION */}

                <p
                  className="
                    mt-4
                    max-w-[245px]
                    text-[13px]
                    font-[400]
                    leading-[1.7]
                    text-[#68778C]
                  "
                >
                  {feature.description}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}