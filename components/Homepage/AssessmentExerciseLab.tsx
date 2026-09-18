"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const smoothEase: [number, number, number, number] = [
  0.16,
  1,
  0.3,
  1,
];

const assessmentItems = [
  {
    number: "1",
    title: "Musculoskeletal (MSK) Assessment",
  },
  {
    number: "2",
    title: "Fitness Testing",
  },
  {
    number: "3",
    title: "Biomechanical Analysis",
  },
  {
    number: "4",
    title: "SPARRC Exercise Lab",
  },
];

export default function AssessmentExerciseLab() {
  return (
    <section className="w-full overflow-hidden bg-[#F5F7FC]">
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-[1440px]
          grid-cols-1
          gap-10
          px-5
          py-14

          sm:px-7
          sm:py-16

          md:px-10
          md:py-20

          lg:grid-cols-[minmax(0,1fr)_minmax(460px,1fr)]
          lg:items-start
          lg:gap-12
          lg:px-14
          lg:py-20

          xl:grid-cols-[minmax(0,650px)_minmax(0,1fr)]
          xl:gap-14
          xl:px-16
        "
      >
        {/* =====================================================
            LEFT CONTENT
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: -40,
            y: 12,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.18,
          }}
          transition={{
            duration: 0.8,
            ease: smoothEase,
          }}
          className="w-full"
        >
          {/* TEST LABEL */}

          <motion.p
            initial={{
              opacity: 0,
              y: 12,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.55,
              ease: smoothEase,
            }}
            className="
              text-[10px]
              font-[500]
              uppercase
              tracking-[0.02em]
              text-[#20242C]

              sm:text-[11px]
            "
          >
            TEST
          </motion.p>

          {/* HEADING */}

          <motion.h2
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
              duration: 0.65,
              delay: 0.05,
              ease: smoothEase,
            }}
            className="
              mt-8
              text-[31px]
              font-[700]
              leading-[1.05]
              tracking-[-0.035em]
              text-[#050505]

              sm:text-[35px]
              md:text-[38px]
              lg:text-[40px]
            "
          >
            SPARRC Exercise Lab
          </motion.h2>

          {/* MAIN DESCRIPTION */}

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
              duration: 0.7,
              delay: 0.1,
              ease: smoothEase,
            }}
            className="
              mt-5
              max-w-[640px]
              text-[13px]
              font-[400]
              leading-[1.8]
              text-[#657083]

              sm:text-[14px]
              md:text-[14px]
            "
          >
            SPARRC Exercise Lab is where exercise science meets individualised
            practice. We assess how your body moves, performs and responds to
            exercise - bringing together musculoskeletal capacity, movement
            quality, strength, endurance, balance, body composition and
            cardiorespiratory fitness to understand what your body needs. Using
            this insight, our team develops evidence-informed exercise
            prescriptions that are appropriate to your health, goals, fitness
            level and stage of life. Whether you are beginning your fitness
            journey, managing a health condition, recovering from injury,
            returning to sport or seeking better performance, the Exercise Lab
            helps turn assessment into action - and exercise into a purposeful
            prescription.
          </motion.p>

          {/* =====================================================
              TREATMENT PRIORITIES
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 16,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.16,
              ease: smoothEase,
            }}
            className="mt-8"
          >
            <p
              className="
                text-[9px]
                font-[600]
                uppercase
                tracking-[0.22em]
                text-[#4A84CF]

                sm:text-[10px]
              "
            >
              TREATMENT PRIORITIES
            </p>
          </motion.div>

          {/* PRIORITY LIST */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.1,
            }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.08,
                  delayChildren: 0.16,
                },
              },
            }}
            className="mt-4 space-y-3"
          >
            {assessmentItems.map((item) => (
              <motion.div
                key={item.number}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 20,
                    scale: 0.99,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      duration: 0.55,
                      ease: smoothEase,
                    },
                  },
                }}
                whileHover={{
                  y: -2,
                  transition: {
                    duration: 0.22,
                  },
                }}
                className="
                  group
                  flex
                  min-h-[76px]
                  items-center
                  gap-4
                  rounded-[13px]
                  border
                  border-[#D7DDE7]
                  bg-white
                  px-4
                  py-3
                  transition-all
                  duration-300

                  hover:border-[#CAC2FF]
                  hover:shadow-[0_8px_24px_rgba(35,50,90,0.045)]

                  sm:px-5
                "
              >
                {/* NUMBER */}

                <div
                  className="
                    flex
                    h-[42px]
                    w-[42px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-[10px]
                    bg-[#EAF2FF]
                    text-[13px]
                    font-[700]
                    text-[#3574D2]
                  "
                >
                  {item.number}
                </div>

                {/* TITLE */}

                <p
                  className="
                    min-w-0
                    flex-1
                    text-[14px]
                    font-[700]
                    leading-[1.3]
                    tracking-[-0.015em]
                    text-[#121212]

                    sm:text-[15px]
                  "
                >
                  {item.title}
                </p>

                {/* ARROW */}

                <span
                  className="
                    shrink-0
                    text-[18px]
                    font-[400]
                    text-[#6B54DA]
                    transition-transform
                    duration-300

                    group-hover:translate-x-1
                  "
                >
                  ↗
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* =====================================================
            RIGHT IMAGE
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: 45,
            scale: 0.98,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.18,
          }}
          transition={{
            duration: 0.9,
            delay: 0.08,
            ease: smoothEase,
          }}
          className="
            relative
            mx-auto
            h-[330px]
            w-full
            overflow-hidden
            rounded-[14px]

            sm:h-[430px]

            md:h-[500px]

            lg:mt-[74px]
            lg:h-[570px]

            xl:h-[575px]
          "
        >
          <motion.div
            initial={{
              scale: 1.05,
            }}
            whileInView={{
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1.3,
              ease: smoothEase,
            }}
            className="relative h-full w-full"
          >
            <Image
              src="/images/assessment-exercise-lab-01.png"
              alt="SPARRC Exercise Lab"
              fill
              priority
              sizes="
                (max-width: 768px) 100vw,
                (max-width: 1024px) 90vw,
                50vw
              "
              className="
                object-cover
                object-center
              "
            />
          </motion.div>

          {/* very subtle overlay */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-t
              from-black/[0.025]
              via-transparent
              to-transparent
            "
          />
        </motion.div>
      </div>
    </section>
  );
}