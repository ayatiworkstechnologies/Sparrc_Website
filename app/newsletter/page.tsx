"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

/* =========================================================
   ANIMATION
========================================================= */

const smoothEase: [number, number, number, number] = [
  0.16, 1, 0.3, 1,
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.75,
      ease: smoothEase,
    },
  },
};

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -45,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.8,
      ease: smoothEase,
    },
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 45,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.8,
      ease: smoothEase,
    },
  },
};

const stagger = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

/* =========================================================
   COMMON ICON WRAPPER
========================================================= */

type IconBoxProps = {
  children: ReactNode;
};

function IconBox({ children }: IconBoxProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.08,
        rotate: -3,
      }}
      transition={{
        duration: 0.3,
        ease: smoothEase,
      }}
      className="
        flex
        h-[52px]
        w-[52px]
        shrink-0
        items-center
        justify-center
        rounded-full
        border
        border-[#63C5F3]
        bg-white
        text-[#3350AE]
        shadow-[0_7px_18px_rgba(21,108,169,0.09)]
      "
    >
      {children}
    </motion.div>
  );
}

/* =========================================================
   LISTEN ICON
========================================================= */

function ListenIcon() {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-[27px] w-[27px] overflow-visible"
    >
      <path
        d="M22.5 30C21 32.4 19 33.5 16.7 33.5C12.5 33.5 9.5 30.1 9.5 25.5V16.5C9.5 10.2 13.8 5.5 20 5.5C25.5 5.5 29.5 9.5 29.5 14.7C29.5 18.5 27.6 21.3 24 23.2C21.8 24.4 21.2 25.5 21.2 27.2"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M15.2 15.8C15.8 13.1 17.5 11.5 20 11.5C22.9 11.5 24.9 13.7 24.9 16.4C24.9 18.6 23.7 20.1 21.4 21.4C18.4 23 17.2 24.8 17.2 27.7"
        stroke="#1599D5"
        strokeWidth="2.1"
        strokeLinecap="round"
      />

      <path
        d="M6.8 12.4C5.3 14.4 4.5 16.8 4.5 19.3"
        stroke="#1599D5"
        strokeWidth="2.1"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* =========================================================
   TEST ICON
========================================================= */

function TestIcon() {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-[27px] w-[27px] overflow-visible"
    >
      <rect
        x="9"
        y="8"
        width="22"
        height="27"
        rx="4"
        stroke="currentColor"
        strokeWidth="2"
      />

      <path
        d="M15 8V6.8C15 5.3 16.2 4 17.8 4H22.2C23.8 4 25 5.3 25 6.8V8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="M14.5 19L18 22.5L26 14.5"
        stroke="#1599D5"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M14.5 29H25"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* =========================================================
   PROGRESS ICON
========================================================= */

function ProgressIcon() {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-[27px] w-[27px] overflow-visible"
    >
      <path
        d="M7 32V10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="M7 32H33"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="M11 27L16.5 21.5L21 24.5L32 13"
        stroke="#1599D5"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M26.5 13H32V18.5"
        stroke="#1599D5"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* =========================================================
   HAND + HEART ICON
   Based on your reference image
========================================================= */

function StrengthIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="
        h-[38px]
        w-[38px]
        overflow-visible
      "
    >
      {/* HEART */}
      <path
        d="
          M39.1 10.5
          C42.4 7.3 47.7 7.4 50.8 10.7
          C54.1 14.2 54 19.6 50.5 22.9
          L39.1 33.4
          L27.7 22.9
          C24.2 19.6 24.1 14.2 27.4 10.7
          C30.5 7.4 35.8 7.3 39.1 10.5
          Z
        "
        stroke="white"
        strokeWidth="2.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* PALM / HAND TOP */}
      <path
        d="
          M15.5 38.5
          L24 31.8
          C25.7 30.5 27.9 30 30 30.5
          L39.2 32.8
          C41.3 33.3 42.6 35.4 42.1 37.5
          C41.7 39.2 40.2 40.4 38.4 40.4
          H29.8
        "
        stroke="white"
        strokeWidth="2.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* HAND SUPPORT */}
      <path
        d="
          M29.8 40.4
          H42.2
          C44.4 40.4 46.5 39.6 48.1 38.1
          L52 34.6
          C53.7 33.1 56.3 33.2 57.8 34.9
          C59.2 36.5 59.1 38.9 57.5 40.4
          L47.5 49.2
          C45.5 51 42.9 52 40.2 52
          H25.5
          L19 56
        "
        stroke="white"
        strokeWidth="2.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* WRIST */}
      <path
        d="
          M7.5 43.7
          L14.7 37.2
          L24.8 48.5
          L17.6 55
          Z
        "
        stroke="white"
        strokeWidth="2.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* =========================================================
   INFO CARD
========================================================= */

type CardIcon = "listen" | "test" | "progress";

type InfoCardProps = {
  number: string;
  title: string;
  text: string;
  icon: CardIcon;
};

function CardIconComponent({
  icon,
}: {
  icon: CardIcon;
}) {
  if (icon === "listen") {
    return (
      <IconBox>
        <ListenIcon />
      </IconBox>
    );
  }

  if (icon === "test") {
    return (
      <IconBox>
        <TestIcon />
      </IconBox>
    );
  }

  return (
    <IconBox>
      <ProgressIcon />
    </IconBox>
  );
}

function InfoCard({
  number,
  title,
  text,
  icon,
}: InfoCardProps) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{
        y: -8,

        transition: {
          duration: 0.35,
          ease: smoothEase,
        },
      }}
      className="
        group
        relative
        flex
        min-h-[300px]
        flex-col
        overflow-hidden
        rounded-[30px]
        border
        border-[#E3EAF2]
        bg-white
        px-7
        py-8
        shadow-[0_18px_50px_rgba(28,50,82,0.07)]
        transition-shadow
        duration-500
        hover:shadow-[0_24px_65px_rgba(28,50,82,0.12)]

        sm:min-h-[310px]
        sm:px-8
        sm:py-9

        lg:min-h-[325px]
        lg:px-10
        lg:py-10
      "
    >
      <div
        className="
          pointer-events-none
          absolute
          -right-[70px]
          -top-[80px]
          h-[180px]
          w-[180px]
          rounded-full
          bg-[#1698D4]/0
          transition-all
          duration-500
          group-hover:bg-[#1698D4]/[0.035]
        "
      />

      {/* TOP */}

      <div
        className="
          relative
          z-10
          flex
          items-center
          justify-between
        "
      >
        <CardIconComponent icon={icon} />

        <span
          className="
            text-[12px]
            font-bold
            tracking-[0.04em]
            text-[#6275A1]
          "
        >
          {number}
        </span>
      </div>

      {/* TEXT */}

      <div className="relative z-10 mt-11">
        <h3
          className="
            text-[22px]
            font-extrabold
            leading-[1.25]
            tracking-[-0.025em]
            text-[#10234B]

            sm:text-[23px]

            lg:text-[25px]
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-5
            max-w-[420px]
            text-[15px]
            font-medium
            leading-[1.85]
            text-[#7180A0]

            sm:text-[16px]

            lg:text-[17px]
          "
        >
          {text}
        </p>
      </div>

      {/* BOTTOM HOVER LINE */}

      <div
        className="
          absolute
          bottom-0
          left-1/2
          h-[4px]
          w-0
          -translate-x-1/2
          rounded-full
          bg-gradient-to-r
          from-[#4758AE]
          to-[#1698D4]
          transition-all
          duration-500
          group-hover:w-[82%]
        "
      />
    </motion.article>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function NewsletterPage() {
  return (
    <main className="w-full overflow-hidden bg-white">
      {/* =====================================================
          SECTION 01
      ===================================================== */}

      <section className="relative w-full bg-white">
        <div
          className="
            mx-auto
            w-full
            max-w-[1420px]
            px-5
            pb-14
            pt-14

            sm:px-7
            sm:pb-16
            sm:pt-16

            md:px-10

            lg:px-12
            lg:pb-20
            lg:pt-20
          "
        >
          {/* MAIN TITLE */}

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="
              text-[27px]
              font-black
              uppercase
              leading-none
              tracking-[-0.045em]
              text-[#171717]

              sm:text-[31px]

              md:text-[34px]
            "
          >
            TEST. TRAIN. TRANSFORM
          </motion.h1>

          {/* INTRO */}

          <div
            className="
              mt-9
              grid
              gap-10

              lg:grid-cols-[1.55fr_0.7fr]
              lg:items-center
              lg:gap-16
            "
          >
            {/* LEFT */}

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.15,
              }}
              className="
                max-w-[840px]
                space-y-6
                text-[14px]
                leading-[1.85]
                text-[#747474]

                sm:text-[15px]
              "
            >
              <motion.p variants={fadeUp}>
                There comes a time when the body starts sending tiny memos.
                The stairs feel a little taller. The grocery bag feels a
                little heavier. The chair feels a little lower than it used
                to. Nothing dramatic, nothing cinematic, just a few polite
                reminders that strength, balance, and movement need a little
                attention. That is exactly where health and fitness
                assessments step in{" "}
                <a
                  href="https://pubmed.ncbi.nlm.nih.gov/22934016/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1695D1] underline decoration-[#1695D1]/40 underline-offset-4 transition-colors hover:text-[#117FB3]"
                >
                  (source: pubmed.ncbi.nlm.nih.gov)
                </a>
              </motion.p>

              <motion.p variants={fadeUp}>
                At SPARRC, we believe in a simple but powerful sequence:{" "}
                <strong className="font-bold text-[#252525]">
                  Test. Train. Transform.
                </strong>{" "}
                It sounds neat, and it is. But more importantly, it makes
                sense. Before you can improve movement, you have to know what
                is actually happening inside the body. Before you prescribe
                exercise, you need a clear picture. Before progress can be
                celebrated, it has to be measured.
              </motion.p>

              <motion.p variants={fadeUp}>
                That is why our{" "}
                <strong className="font-bold text-[#252525]">
                  Beat Sarcopenia, Beat Dynapenia
                </strong>{" "}
                community gatherings are built around assessment first. Not
                guesswork. Not random workouts. Not “let&apos;s just do a few
                squats and hope for the best.” A proper assessment gives us
                the information we need to personalise exercise, track
                progress, and keep training safe and effective.
                <a
                  href="https://pubmed.ncbi.nlm.nih.gov/22934016/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-1 font-semibold text-[#1695D1] underline decoration-[#1695D1]/35 underline-offset-4 transition-colors hover:text-[#117FB3]"
                >
                  pubmed.ncbi.nlm.nih.gov
                </a>
              </motion.p>
            </motion.div>

            {/* RIGHT */}

            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.3,
              }}
              whileHover={{
                y: -5,
              }}
              className="
                relative
                mx-auto
                w-full
                max-w-[395px]
                overflow-hidden
                rounded-[28px]
                bg-[#4858AD]
                px-7
                py-8
                shadow-[0_20px_50px_rgba(72,88,173,0.18)]

                sm:px-9
                sm:py-9

                lg:mx-0
              "
            >
              <div
                className="
                  pointer-events-none
                  absolute
                  -right-[38px]
                  -top-[82px]
                  h-[205px]
                  w-[205px]
                  rounded-full
                  border-[30px]
                  border-[#188FD1]
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-[12px]
                  -top-[56px]
                  h-[125px]
                  w-[125px]
                  rounded-full
                  bg-[#4858AD]
                "
              />

              <p
                className="
                  relative
                  z-10
                  max-w-[260px]
                  text-[20px]
                  font-semibold
                  leading-[1.4]
                  text-white

                  sm:text-[22px]
                "
              >
                When Your Body Sends
                <br />
                Signals “
              </p>
            </motion.div>
          </div>

          {/* =================================================
              3 CARDS
          ================================================= */}

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.12,
            }}
            className="
              mt-14
              grid
              gap-6

              md:grid-cols-2

              lg:mt-16
              lg:grid-cols-3
              lg:gap-7
            "
          >
            <InfoCard
              number="01"
              icon="listen"
              title="Listen to Your Body"
              text="Small changes in strength, balance, and movement are signals worth understanding."
            />

            <InfoCard
              number="02"
              icon="test"
              title="Test Before You Train"
              text="SPARRC uses assessment to create a clear, personalised path to progress."
            />

            <InfoCard
              number="03"
              icon="progress"
              title="Measure. Move. Improve."
              text="Beat Sarcopenia, Beat Dynapenia begins with safe, informed, and effective exercise."
            />
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          SECTION 02
      ===================================================== */}

      <section className="w-full bg-[#FDFDFD]">
        <div
          className="
            mx-auto
            w-full
            max-w-[1420px]
            px-5
            py-14

            sm:px-7
            sm:py-16

            md:px-10

            lg:px-12
            lg:py-20
          "
        >
          {/* QUESTION */}

          <div
            className="
              grid
              gap-8

              lg:grid-cols-[0.7fr_1.3fr]
              lg:items-center
              lg:gap-16
            "
          >
            <motion.h2
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
              }}
              className="
                text-[20px]
                font-extrabold
                leading-[1.4]
                tracking-[-0.02em]
                text-[#1D1D1D]

                sm:text-[22px]
              "
            >
              So what exactly are we looking for?
            </motion.h2>

            <motion.p
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
              }}
              className="
                text-[14px]
                leading-[1.8]
                text-[#767676]

                sm:text-[15px]
              "
            >
              Sarcopenia is the age-related loss of muscle mass, while
              dynapenia refers to the loss of muscle strength. And here is
              the part that tends to surprise people: strength often declines
              faster than mass. In longitudinal studies, strength has been
              shown to fall about 2 to 5 times faster than muscle mass, which
              means someone can look “fine” on the outside while their
              functional strength is quietly slipping away. In plain
              language, the engine may be losing horsepower even if the car
              still looks shiny.
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/22934016/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 font-semibold text-[#1695D1] underline decoration-[#1695D1]/35 underline-offset-4 transition-colors hover:text-[#117FB3]"
              >
                pubmed.ncbi.nlm.nih.gov
              </a>
            </motion.p>
          </div>

          {/* BLUE BAND */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            className="
              relative
              mt-12
              overflow-hidden
              rounded-[24px]
              bg-[#4858AD]
              px-7
              py-7

              sm:px-10

              lg:mt-14
              lg:px-[280px]
            "
          >
            <div
              className="
                pointer-events-none
                absolute
                -left-[78px]
                -top-[76px]
                h-[220px]
                w-[220px]
                rounded-full
                border-[29px]
                border-[#188FD1]
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                -right-[50px]
                -top-[110px]
                h-[225px]
                w-[225px]
                rounded-full
                border-[30px]
                border-[#188FD1]
              "
            />

            <p
              className="
                relative
                z-10
                text-[13px]
                leading-[1.75]
                text-white/90

                sm:text-[14px]
              "
            >
              That is why our assessment is not limited to one number or one
              test. It includes health checkups, fitness tests, and a broader
              look at how the body moves, responds, and performs.
            </p>
          </motion.div>

          {/* MAIN TEXT */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            className="
              mt-10
              max-w-[1180px]
              space-y-5
              text-[14px]
              leading-[1.85]
              text-[#767676]

              sm:text-[15px]
            "
          >
            <p>
              That is why our assessment is not limited to one number or one
              test. It includes health checkups, fitness tests, and a broader
              look at how the body moves, responds, and performs. The goal is
              to understand the full story. How is your strength? How is your
              balance? How is your endurance? How much exercise does your body
              need to realise its potential? These are the questions that
              matter.
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/22934016/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 font-semibold text-[#1695D1] underline decoration-[#1695D1]/35 underline-offset-4 transition-colors hover:text-[#117FB3]"
              >
                pubmed.ncbi.nlm.nih.gov
              </a>
            </p>

            <p>
              And the answers are often more useful than people expect.
            </p>
          </motion.div>

          {/* =================================================
              PROGRESS + STRENGTH
          ================================================= */}

          <div
            className="
              mt-14
              grid
              gap-10

              lg:mt-16
              lg:grid-cols-[1fr_0.8fr]
              lg:items-start
              lg:gap-14
            "
          >
            {/* LEFT */}

            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
            >
              <h2
                className="
                  text-[21px]
                  font-extrabold
                  tracking-[-0.02em]
                  text-[#202020]

                  sm:text-[23px]
                "
              >
                Progress You Can Measure
              </h2>

              <p
                className="
                  mt-6
                  max-w-[760px]
                  text-[14px]
                  leading-[1.85]
                  text-[#767676]

                  sm:text-[15px]
                "
              >
                A good assessment can reveal whether you need to build
                strength, improve mobility, increase stamina, or simply train
                a little smarter. It helps us prescribe exercise that is
                specific to the person in front of us, not the imaginary
                person who supposedly enjoys generic fitness plans. Then we
                reassess, compare, and adjust. That is how progress becomes
                visible instead of vague.
                <a
                  href="https://journals.lww.com/acsm-healthfitness/fulltext/2022/09000/a_guide_to_the_assessment_of_function_and_fitness.9.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-1 font-semibold text-[#1695D1] underline decoration-[#1695D1]/35 underline-offset-4 transition-colors hover:text-[#117FB3]"
                >
                  journals.lww.com
                </a>
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Build Strength",
                  "Improve Mobility",
                  "Increase Stamina",
                  "Train Smarter",
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                    whileHover={{
                      y: -3,
                      borderColor: "#1798D2",
                      backgroundColor: "#F4FBFE",
                    }}
                    className="
                      cursor-default
                      rounded-full
                      border
                      border-[#DCE4ED]
                      bg-white
                      px-5
                      py-2.5
                      text-[11px]
                      font-bold
                      text-[#52609E]
                      shadow-[0_3px_10px_rgba(0,0,0,0.02)]

                      sm:px-6
                      sm:py-3
                    "
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* =================================================
                STRENGTH CARD
            ================================================= */}

            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              whileHover={{
                y: -7,
              }}
              transition={{
                duration: 0.35,
                ease: smoothEase,
              }}
              className="
                relative
                mx-auto
                w-full
                max-w-[560px]
                overflow-hidden
                rounded-[32px]
                bg-[#1899D3]
                px-7
                py-9
                text-white
                shadow-[0_24px_60px_rgba(24,153,211,0.2)]

                sm:px-9
                sm:py-10

                lg:mx-0
                lg:px-10
                lg:py-8
              "
            >
              {/* DECORATIVE CIRCLE */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-[115px]
                  -top-[120px]
                  h-[260px]
                  w-[260px]
                  rounded-full
                  border-[40px]
                  border-white/[0.055]
                "
              />

              {/* ICON + TITLE */}

              <div
                className="
                  relative
                  z-10
                  flex
                  items-center
                  gap-4

                  sm:gap-5
                "
              >
                <motion.div
                  whileHover={{
                    scale: 1.07,
                    rotate: -2,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: smoothEase,
                  }}
                  className="
                    flex
                    h-[66px]
                    w-[66px]
                    shrink-0
                    items-center
                    justify-center
                    overflow-visible
                    rounded-[18px]
                    border
                    border-white/25
                    bg-white/[0.09]
                    shadow-[0_8px_25px_rgba(0,0,0,0.06)]
                    backdrop-blur-sm

                    sm:h-[48px]
                    sm:w-[48px]
                  "
                >
                  <StrengthIcon />
                </motion.div>

                <h3
                  className="
                    min-w-0
                    text-[20px]
                    font-extrabold
                    leading-[1.25]
                    tracking-[-0.025em]
                    text-white

                    sm:text-[23px]

                    lg:text-[24px]
                  "
                >
                  Strength Deserves Attention
                </h3>
              </div>

              {/* DESCRIPTION */}

              <p
                className="
                  relative
                  z-10
                  mt-7
                  text-[14px]
                  font-medium
                  leading-[1.9]
                  text-white/95

                  sm:text-[15px]
                "
              >
                That is also why this initiative feels different. Beat
                Sarcopenia, Beat Dynapenia is not just a catchy name. It is a
                reminder that muscle loss and muscle weakness are not things
                to shrug off as “just age.” Research has shown that low muscle
                strength is closely linked with disability and poorer physical
                function, and muscle weakness is one of the clearest signs
                that a body may need support, not slogans. The good news is
                that exercise, especially resistance training, can make a real
                difference.
              </p>

              <div className="relative z-10 mt-5 flex flex-col items-start gap-2">
                <a
                  href="https://pubmed.ncbi.nlm.nih.gov/22934016/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    rounded-full
                    border
                    border-white/35
                    bg-white/10
                    px-4
                    py-2
                    text-[13px]
                    font-bold
                    text-white
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:bg-white
                    hover:text-[#1899D3]
                  "
                >
                  Click here to visit
                </a>

                {/* <a
                  href="https://pubmed.ncbi.nlm.nih.gov/22934016/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    text-[13px]
                    font-semibold
                    text-white/70
                    underline
                    decoration-white/30
                    underline-offset-4
                    transition-colors
                    hover:text-white
                  "
                >
                  pubmed.ncbi.nlm.nih.gov
                </a> */}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 03
      ===================================================== */}

      <section className="w-full bg-white">
        <div
          className="
            mx-auto
            w-full
            max-w-[1420px]
            px-5
            py-14

            sm:px-7
            sm:py-16

            md:px-10

            lg:px-12
            lg:py-[72px]
          "
        >
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
          >
            <h2
              className="
                text-[20px]
                font-extrabold
                leading-[1.5]
                tracking-[-0.01em]
                text-[#242424]

                sm:text-[22px]
              "
            >
              A friendly assessment turns uncertainty into insight,
              confidence, and a clear plan for moving forward.
            </h2>

            <div
              className="
                mt-7
                space-y-2
                text-[14px]
                leading-[1.85]
                text-[#767676]

                sm:text-[15px]
              "
            >
              <p>
                And that is where the fun begins, because once people see what
                their bodies can actually do, the mood changes quickly. There
                is usually a moment of surprise.
              </p>

              <p>
                A little laughter. Sometimes a very serious face when the
                balance test does not go as expected. Then comes the relief,
                because now there is a plan. Not a mystery. Not a lecture. A
                plan.
              </p>

              <p>
                That is the heart of this community gathering. It is built to
                be useful, informative, and a little bit human. We want people
                to walk in thinking, “I&apos;m just here to check my numbers,”
                and walk out thinking, “Ah, so this is what my body has been
                trying to tell me.”
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          FINAL BLUE SECTION
      ===================================================== */}

      <section
        className="
          relative
          w-full
          overflow-hidden
          bg-[#4858AD]
        "
      >
        {/* BIG RING */}

        <motion.div
          animate={{
            y: [0, -12, 0],
            scale: [1, 1.015, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            pointer-events-none
            absolute
            -bottom-[215px]
            -right-[160px]
            hidden
            h-[570px]
            w-[570px]
            rounded-full
            border-[70px]
            border-[#1795D3]

            md:block
          "
        />

        <div
          className="
            relative
            z-10
            mx-auto
            grid
            w-full
            max-w-[1420px]
            gap-12
            px-5
            py-16

            sm:px-7
            sm:py-20

            md:px-10

            lg:min-h-[640px]
            lg:grid-cols-[1.55fr_0.65fr]
            lg:items-center
            lg:gap-16
            lg:px-12
            lg:py-20
          "
        >
          {/* LEFT */}

          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="max-w-[900px]"
          >
            <h2
              className="
                max-w-[780px]
                text-[25px]
                font-extrabold
                leading-[1.5]
                tracking-[-0.025em]
                text-white

                sm:text-[28px]

                lg:text-[30px]
              "
            >
              A friendly assessment turns uncertainty into insight,
              confidence, and a clear plan for moving forward.
            </h2>

            <div
              className="
                mt-8
                max-w-[880px]
                text-[15px]
                font-medium
                leading-[2]
                text-white/75

                sm:text-[16px]
              "
            >
              <p>
                Because fitness is not just about working harder. It is about
                working with information. And the more we know, the better we
                can train. The better we train, the stronger we become. The
                stronger we become, the more we can do. That is the whole
                point.
              </p>

              <p className="mt-2">
                So come join the{" "}
                <strong className="font-extrabold text-white">
                  Beat Sarcopenia, Beat Dynapenia
                </strong>{" "}
                community gathering at your nearest SPARRC centre. Bring your
                curiosity, bring your questions, and maybe bring a little
                competitive spirit too. You may discover that your body is
                doing better than you thought, or that it is asking for a
                smarter plan. Either way, that is a win.
              </p>
            </div>

            <div className="my-10 h-px w-full bg-white/15" />

            <h3
              className="
                text-[22px]
                font-extrabold
                text-white

                sm:text-[24px]
              "
            >
              Test. Train. Transform.
            </h3>

            <p
              className="
                mt-3
                text-[14px]
                font-medium
                leading-[1.7]
                text-white/70

                sm:text-[15px]
              "
            >
              Because sometimes the smartest workout starts with a good
              assessment.
            </p>
          </motion.div>

          {/* WHITE CARD */}

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.25,
            }}
            className="
              relative
              z-20
              flex
              w-full
              items-center
              justify-center
              self-center
            "
          >
            <motion.div
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.025,
              }}
              className="
                relative
                flex
                min-h-[150px]
                w-full
                max-w-[340px]
                items-center
                overflow-hidden
                rounded-[26px]
                bg-white
                px-8
                py-8
                shadow-[0_20px_60px_rgba(0,0,0,0.13)]

                sm:min-h-[160px]
                sm:max-w-[360px]
                sm:px-9
              "
            >
              <div
                className="
                  pointer-events-none
                  absolute
                  -bottom-[44px]
                  -right-[43px]
                  h-[125px]
                  w-[125px]
                  rounded-full
                  bg-[#DEDDEB]
                "
              />

              <p
                className="
                  relative
                  z-10
                  max-w-[235px]
                  text-[17px]
                  font-extrabold
                  leading-[1.65]
                  text-[#171D35]

                  sm:text-[18px]
                "
              >
                Beat Sarcopenia, Beat Dynapenia“
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* MOBILE RING */}

        <div
          className="
            pointer-events-none
            absolute
            -bottom-[135px]
            -right-[145px]
            h-[320px]
            w-[320px]
            rounded-full
            border-[45px]
            border-[#1795D3]

            md:hidden
          "
        />
      </section>
    </main>
  );
}