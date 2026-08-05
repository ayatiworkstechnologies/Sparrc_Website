"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

type Statistic = {
  value: string;
  label: string;
};

const statistics: Statistic[] = [
  {
    value: "9",
    label: "Locations",
  },
  {
    value: "19",
    label: "Centres",
  },
  {
    value: "50+",
    label: "Trainers",
  },
  {
    value: "12+",
    label: "Doctors",
  },
  {
    value: "95%",
    label: "Success Rate",
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

const sectionVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease,
    },
  },
};

const contentVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -30,
    filter: "blur(5px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.85,
      ease,
    },
  },
};

const imageVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 34,
    scale: 0.97,
    filter: "blur(5px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease,
    },
  },
};

const statisticVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
    scale: 0.94,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease,
    },
  },
};

export default function KannanVisionSection() {
  return (
    <section className="overflow-hidden bg-white px-4 py-12 font-jost sm:px-6 sm:py-16 md:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto w-full max-w-[1160px]">
        {/* Top introduction */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.35,
            margin: "0px 0px -40px 0px",
          }}
          className="mx-auto max-w-[1080px] text-center"
        >
          <motion.h1
            variants={fadeUpVariants}
            className="text-[23px] font-extrabold leading-[1.25] tracking-[-0.025em] text-[#111111] sm:text-[27px] md:text-[30px]"
          >
            Pioneering Excellence in Sports Medicine
          </motion.h1>

          <motion.p
            variants={fadeUpVariants}
            className="mx-auto mt-4 max-w-[1060px] text-[12px] leading-[1.75] text-[#858585] sm:text-[13px] md:text-[14px]"
          >
            Dr. Kannan Pugazhendi, founder of SPARRC and an esteemed sports
            physician, graduated from Madras Medical College in 1986. Committed
            to advancing sports medicine in India, he gained early career
            exposure through prestigious assignments, including his role as the
            Team Physician for the Indian Cricket Team during the 1989 West
            Indies series. He further honed his expertise by earning a
            Master&apos;s in Sports Medicine from the University of New South
            Wales, Australia. What sets him apart is his integration of sports
            medicine and yoga into pain management which has led to 1 million
            success stories.
          </motion.p>
        </motion.div>

        {/* Vision card */}
        <motion.article
          initial={{
            opacity: 0,
            y: 45,
            scale: 0.985,
            filter: "blur(8px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
          }}
          viewport={{
            once: true,
            amount: 0.18,
            margin: "0px 0px -70px 0px",
          }}
          transition={{
            duration: 0.95,
            ease,
          }}
          className="relative mt-12 overflow-hidden rounded-[16px] bg-white px-4 pb-5 pt-14 shadow-[0_14px_46px_rgba(0,0,0,0.12)] sm:mt-16 sm:px-6 sm:pb-6 sm:pt-16 md:px-8 lg:mt-18 lg:px-5 lg:pb-5"
        >
          {/* Vision label */}
          <motion.div
            initial={{
              opacity: 0,
              x: -20,
              scale: 0.96,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.5,
            }}
            transition={{
              duration: 0.65,
              ease,
              delay: 0.15,
            }}
            className="absolute left-4 top-6 sm:left-6 lg:left-5"
          >
            <span className="inline-flex rounded-[12px] bg-[#d8effc] px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.015em] text-[#247ebd] sm:px-6 sm:text-[12px]">
              Dr. Kannan Vision
            </span>
          </motion.div>

          <div className="grid items-center gap-8 lg:grid-cols-[1.55fr_1fr] lg:gap-10">
            {/* Left content */}
            <motion.div
              variants={contentVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.3,
              }}
              className="order-2 lg:order-1"
            >
              <div className="flex items-center gap-3">
                <div className="relative h-5 w-5 shrink-0 sm:h-6 sm:w-6">
                  <Image
                    src="/icons/logo-icon.png"
                    alt="SPARRC icon"
                    fill
                    sizes="24px"
                    className="object-contain"
                  />
                </div>

                <h2 className="text-[21px] font-extrabold leading-[1.25] tracking-[-0.02em] text-[#111111] sm:text-[25px] lg:text-[27px]">
                  Dr. Kannan Pugazhendi
                </h2>
              </div>

              <p className="mt-5 text-[12px] leading-[1.75] text-[#838383] sm:text-[13px] md:text-[14px]">
                <strong className="font-bold text-[#4a4a4a]">
                  SPARRC Origins
                </strong>{" "}
                Since its inception in 2006, SPARRC has expanded to 19 centres
                across 9 locations, with a team of over 200 physiotherapists,
                50+ trainers, and 12+ doctors. Under the leadership of Dr
                Kannan, the institute has successfully rehabilitated over 1
                million patients, boasting an impressive 95% success rate. Dr
                Kannan&apos;s career spans several landmark events in global
                sports, serving as the Sports Physician for the 1996 Atlanta
                Olympics and as the Team Physician for the Indian Hockey Team at
                the 2002 World Cup.
              </p>
            </motion.div>

            {/* Right image */}
            <motion.div
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.25,
              }}
              className="order-1 lg:order-2"
            >
              <motion.div
                whileHover={{
                  y: -5,
                  transition: {
                    duration: 0.32,
                    ease,
                  },
                }}
              >
                <div className="relative aspect-[1.42/1] w-full overflow-hidden rounded-[11px] bg-[#f3c08e]">
                  <Image
                    src="/images/team-2.png"
                    alt="Dr. Kannan Pugazhendi"
                    fill
                    sizes="(max-width: 1023px) 100vw, 38vw"
                    className="object-cover object-top transition-transform duration-700 ease-out hover:scale-[1.035]"
                  />
                </div>

                <div className="mt-3 rounded-[7px] border border-[#bee6fb] bg-[#d8f1fd] px-4 py-2.5 text-center text-[11px] font-semibold text-[#287dc0] sm:text-[12px]">
                  Co-Founder, SPARRC
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.article>

        {/* Statistics */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.25,
            margin: "0px 0px -45px 0px",
          }}
          className="mt-12 grid grid-cols-2 gap-x-5 gap-y-9 sm:mt-14 sm:grid-cols-3 md:grid-cols-5 lg:mt-16"
        >
          {statistics.map((statistic) => (
            <motion.div
              key={statistic.label}
              variants={statisticVariants}
              whileHover={{
                y: -5,
                scale: 1.03,
                transition: {
                  duration: 0.25,
                  ease: "easeOut",
                },
              }}
              className="text-center"
            >
              <p className="text-[33px] font-extrabold leading-none tracking-[-0.035em] text-[#0869d4] sm:text-[37px] md:text-[40px]">
                {statistic.value}
              </p>

              <p className="mt-4 text-[9px] font-medium uppercase tracking-[0.015em] text-[#8a8a8a] sm:text-[10px] md:text-[11px]">
                {statistic.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}