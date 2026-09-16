"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const smoothEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

const assessmentItems = [
  {
    title: "Musculoskeletal (MSK) Assessment",
    description:
      "Analyzing joint mobility, muscular balance, and structural symmetry.",
  },
  {
    title: "Fitness Testing",
    description:
      "Evaluating baseline strength, endurance, flexibility, and aerobic limits.",
  },
  {
    title: "Biomechanical Analysis",
    description:
      "Assessing sports technique and active walking/running mechanics in motion.",
  },
  {
    title: "Assessment & Exercise Lab",
    description:
      "Scientific testing utilizing cardiovascular and metabolic diagnostics.",
  },
];

export default function AssessmentExerciseLab() {
  return (
    <section className="w-full overflow-hidden bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-14 sm:px-7 sm:py-16 md:px-10 md:py-20 lg:px-12 lg:py-5">
        {/* =========================
            TOP CONTENT
        ========================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.75,
            ease: smoothEase,
          }}
          className="max-w-[1320px]"
        >
          <p className="text-[11px] font-[500] uppercase tracking-[0.02em] text-[#171717] sm:text-[12px]">
            TEST
          </p>

          <h2 className="mt-4 text-[30px] font-[700] leading-[1.1] tracking-[-0.03em] text-[#050505] sm:text-[34px] md:text-[38px] lg:text-[40px]">
            Assessment &amp; Exercise Lab
          </h2>

          <p className="mt-4 max-w-[1320px] text-[13px] leading-[1.55] text-[#7B8494] sm:text-[14px] md:text-[15px]">
            SPARRC Exercise Lab is where exercise science meets individualised
            practice. We assess how your body moves, performs and responds to
            exercise — bringing together musculoskeletal capacity, movement
            quality, strength, endurance, balance, body composition and
            cardiorespiratory fitness to understand what your body needs. Using
            this insight, our team develops evidence-informed exercise
            prescriptions that are appropriate to your health, goals, fitness
            level and stage of life. Whether you are beginning your fitness
            journey, managing a health condition, recovering from injury,
            returning to sport or seeking better performance, the Exercise Lab
            helps turn assessment into action—and exercise into a purposeful
            prescription.
          </p>

          <motion.a
            href="/contact"
            whileHover={{
              scale: 1.04,
              y: -2,
            }}
            whileTap={{
              scale: 0.98,
            }}
            transition={{
              duration: 0.2,
            }}
            className="
              mt-5
              inline-flex
              h-[48px]
              items-center
              justify-center
              rounded-full
              bg-[#5031FF]
              px-7
              text-[13px]
              font-[700]
              text-white
              shadow-[0_10px_24px_rgba(80,49,255,0.18)]
              transition-colors
              duration-300
              hover:bg-[#4426F2]
              sm:h-[50px]
              sm:px-8
              sm:text-[14px]
            "
          >
            Book Now
          </motion.a>
        </motion.div>

        {/* =========================
            MAIN GRID
        ========================== */}
        <div className="mt-9 grid grid-cols-1 gap-8 lg:mt-12 lg:grid-cols-[minmax(0,632px)_minmax(0,1fr)] lg:items-start lg:gap-10 xl:gap-12">
          {/* =========================
              LEFT SIDE
          ========================== */}
          <motion.div
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.8,
              ease: smoothEase,
            }}
            className="w-full"
          >
            {/* Image */}
            <div
              className="
                relative
                h-[230px]
                w-full
                overflow-hidden
                rounded-[18px]
                sm:h-[280px]
                md:h-[320px]
                lg:h-[320px]
                lg:w-[632px]
                lg:max-w-full
              "
            >
              <Image
                src="/images/assessment-exercise-lab.png"
                alt="SPARRC Assessment and Exercise Lab"
                fill
                priority
                className="object-cover"
                sizes="
                  (max-width: 640px) 100vw,
                  (max-width: 1024px) 90vw,
                  632px
                "
              />

              {/* Subtle image overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/[0.04] via-transparent to-transparent" />
            </div>

            {/* Precision Diagnoses */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.65,
                delay: 0.12,
                ease: smoothEase,
              }}
              className="mt-5 flex items-stretch gap-3"
            >
              <div className="w-[3px] shrink-0 bg-[#5834FF]" />

              <div className="py-[1px]">
                <h3 className="text-[16px] font-[700] leading-[1.25] tracking-[-0.02em] text-[#0A0A0A] sm:text-[17px]">
                  Precision Diagnoses
                </h3>

                <p className="mt-1 max-w-[600px] text-[12px] leading-[1.5] text-[#7D8697] sm:text-[13px]">
                  By measuring muscular power discrepancies, cardiorespiratory
                  capacity, and joint range deficits, we eliminate all guesswork.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* =========================
              RIGHT SIDE CARDS
          ========================== */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.18,
            }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.11,
                  delayChildren: 0.12,
                },
              },
            }}
            className="grid gap-4"
          >
            {assessmentItems.map((item) => (
              <motion.div
                key={item.title}
                variants={{
                  hidden: {
                    opacity: 0,
                    x: 40,
                    y: 10,
                  },
                  visible: {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    transition: {
                      duration: 0.68,
                      ease: smoothEase,
                    },
                  },
                }}
                whileHover={{
                  y: -4,
                  transition: {
                    duration: 0.25,
                  },
                }}
                className="
                  group
                  rounded-[14px]
                  border
                  border-[#E3E6EC]
                  bg-white
                  px-5
                  py-5
                  shadow-[0_4px_20px_rgba(20,30,50,0.015)]
                  transition-shadow
                  duration-300
                  hover:shadow-[0_12px_30px_rgba(20,30,50,0.055)]
                  sm:px-6
                  sm:py-6
                  lg:min-h-[82px]
                  lg:px-5
                  lg:py-5
                  xl:px-6
                "
              >
                <h3
                  className="
                    text-[14px]
                    font-[700]
                    leading-[1.25]
                    tracking-[-0.02em]
                    text-[#111111]
                    sm:text-[15px]
                  "
                >
                  {item.title}
                </h3>

                <p className="mt-1 text-[12px] leading-[1.5] text-[#7F8796] sm:text-[13px]">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}