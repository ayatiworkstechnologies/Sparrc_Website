"use client";

import { motion } from "framer-motion";

const smoothEase: [number, number, number, number] = [
  0.16,
  1,
  0.3,
  1,
];

const sparrcForYou = [
  {
    title: "You are in pain.",
    description:
      "We help you understand it and rebuild capacity.",
  },
  {
    title: "You have a chronic health condition.",
    description:
      "We help you use exercise safely and effectively.",
  },
  {
    title: "You haven’t exercised for years.",
    description:
      "We help you start at the right level.",
  },
  {
    title: "You want to lose weight.",
    description:
      "We combine movement, exercise, nutrition and behaviour.",
  },
  {
    title: "You’re an athlete.",
    description:
      "We measure and develop performance.",
  },
  {
    title: "You’re getting older.",
    description:
      "We build strength, balance, fitness and independence.",
  },
  {
    title: "You spend your life at a desk.",
    description:
      "We assess your workplace movement and MSK risk.",
  },
  {
    title: "You simply want to stay healthy.",
    description:
      "You don’t need to wait until something hurts.",
  },
];

/* =========================================================
   MOTION
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
    y: 24,
    scale: 0.985,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.6,
      ease: smoothEase,
    },
  },
};

export default function TestTreatTrain() {
  return (
    <section className="w-full overflow-hidden bg-white">
      <div
        className="
          mx-auto
          w-full
          max-w-[1440px]
          px-5
          py-14
          sm:px-7
          sm:py-16
          md:px-10
          md:py-20
          lg:px-12
          lg:py-20
          xl:px-14
        "
      >
        {/* =====================================================
            TOP CONTENT
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
            amount: 0.35,
          }}
          transition={{
            duration: 0.72,
            ease: smoothEase,
          }}
          className="max-w-[690px]"
        >
          {/* Eyebrow */}

          <p
            className="
              text-[11px]
              font-[500]
              uppercase
              tracking-[0.02em]
              text-[#252525]
              sm:text-[12px]
            "
          >
            OUR METHODOLOGY
          </p>

          {/* Heading */}

          <h2
            className="
              mt-5
              text-[30px]
              font-[700]
              leading-[1.05]
              tracking-[-0.035em]
              text-[#050505]
              sm:text-[34px]
              md:text-[38px]
              lg:text-[40px]
            "
          >
            Test. Treat. Train.
          </h2>

          {/* Description */}

          <p
            className="
              mt-3
              max-w-[650px]
              text-[13px]
              font-[400]
              leading-[1.55]
              text-[#7B8495]
              sm:text-[14px]
              md:text-[15px]
            "
          >
            An integrated clinical cycle that identifies structural issues,
            relieves physical pain mechanically, and restores functional
            fitness for long-term health.
          </p>
        </motion.div>

        {/* =====================================================
            SPARRC IS FOR YOU IF
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 18,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            duration: 0.65,
            delay: 0.08,
            ease: smoothEase,
          }}
          className="mt-7 sm:mt-8"
        >
          <h3
            className="
              text-[13px]
              font-[700]
              uppercase
              tracking-[0.01em]
              text-[#171717]
              sm:text-[14px]
              md:text-[15px]
            "
          >
            SPARRC IS FOR YOU IF
          </h3>
        </motion.div>

        {/* =====================================================
            8 CARDS
        ====================================================== */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.12,
          }}
          className="
            mt-6
            grid
            grid-cols-1
            gap-4
            sm:mt-7
            md:grid-cols-2
            md:gap-x-6
            md:gap-y-5
            lg:gap-x-7
            lg:gap-y-6
          "
        >
          {sparrcForYou.map((item) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
              whileHover={{
                y: -3,
                transition: {
                  duration: 0.23,
                  ease: "easeOut",
                },
              }}
              className="
                group
                flex
                min-h-[128px]
                flex-col
                justify-center
                rounded-[18px]
                border
                border-[#E0E5ED]
                bg-[#F5F7FB]
                px-6
                py-6
                transition-all
                duration-300
                hover:border-[#D8DDE8]
                hover:bg-[#F8F9FC]
                hover:shadow-[0_10px_28px_rgba(30,45,75,0.045)]
                sm:min-h-[132px]
                sm:px-7
                md:min-h-[140px]
                lg:px-8
              "
            >
              {/* Title */}

              <h4
                className="
                  text-[16px]
                  font-[700]
                  leading-[1.3]
                  tracking-[-0.02em]
                  text-[#0C0C0D]
                  sm:text-[17px]
                  md:text-[18px]
                "
              >
                {item.title}
              </h4>

              {/* Description */}

              <p
                className="
                  mt-4
                  text-[12px]
                  font-[400]
                  leading-[1.6]
                  text-[#737D8F]
                  sm:text-[13px]
                  md:text-[13.5px]
                "
              >
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}