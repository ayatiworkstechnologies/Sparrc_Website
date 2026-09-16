"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    label: "TEST",
    title: "Assessment & Exercise Lab",
    description:
      "Before we prescribe, we measure. We evaluate your musculoskeletal capacity, movement quality, joint mechanics, strength balance, and aerobic fitness to map your baseline accurately.",
  },
  {
    number: "02",
    label: "TREAT",
    title: "How We Help",
    description:
      "Through Myofascial Trigger Point Therapy (MTPT), expert physiotherapy, acupuncture, and precise hands-on interventions, we relieve immediate acute pain and initiate real recovery.",
  },
  {
    number: "03",
    label: "TRAIN",
    title: "Sports & Fitness Medicine",
    description:
      "Once pain is resolved, we build lasting capacity. Our customized performance, metabolic fitness, and healthy ageing training programs protect you from future injury and optimize longevity.",
  },
];

const smoothEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 45,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.75,
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
          lg:px-14
          lg:py-24
        "
      >
        {/* =========================
            HEADING
        ========================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.35,
          }}
          transition={{
            duration: 0.75,
            ease: smoothEase,
          }}
          className="max-w-[650px]"
        >
          <p
            className="
              text-[11px]
              font-medium
              uppercase
              tracking-[0.02em]
              text-[#252525]
              sm:text-[12px]
              md:text-[13px]
            "
          >
            Our Methodology
          </p>

          <h2
            className="
              mt-4
              text-[30px]
              font-extrabold
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

          <p
            className="
              mt-3
              max-w-[590px]
              text-[13px]
              leading-[1.5]
              text-[#7C8495]
              sm:text-[14px]
              md:text-[15px]
            "
          >
            An integrated clinical cycle that identifies structural issues,
            relieves physical pain mechanically, and restores functional fitness
            for long-term health.
          </p>
        </motion.div>

        {/* =========================
            CARDS
        ========================== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.18,
          }}
          className="
            mt-10
            grid
            grid-cols-1
            gap-5
            sm:mt-12
            md:grid-cols-3
            md:gap-5
            lg:mt-14
            lg:gap-7
          "
        >
          {steps.map((step) => (
            <motion.article
              key={step.number}
              variants={cardVariants}
              whileHover={{
                y: -7,
                transition: {
                  duration: 0.28,
                  ease: "easeOut",
                },
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-[18px]
                bg-[#F6F7FB]
                px-6
                py-8
                sm:px-7
                sm:py-9
                md:min-h-[285px]
                md:px-6
                md:py-8
                lg:min-h-[275px]
                lg:px-8
                lg:py-9
                xl:px-10
                xl:py-10
              "
            >
              {/* Top row */}
              <div className="flex items-start justify-between gap-6">
                <span
                  className="
                    text-[11px]
                    font-[800]
                    uppercase
                    tracking-[-0.01em]
                    text-[#563BFF]
                    sm:text-[14px]
                  "
                >
                  {step.label}
                </span>

                <span
                  className="
                    select-none
                    text-[32px]
                    font-extrabold
                    leading-none
                    tracking-[-0.04em]
                    text-[#C8CCD5]
                    transition-all
                    duration-300
                    group-hover:text-[#B8BDCA]
                    sm:text-[34px]
                    lg:text-[36px]
                  "
                >
                  {step.number}
                </span>
              </div>

              {/* Content */}
              <div className="mt-7 sm:mt-8">
                <h3
                  className="
                    text-[17px]
                    font-extrabold
                    leading-[1.25]
                    tracking-[-0.025em]
                    text-[#080808]
                    sm:text-[18px]
                    md:text-[17px]
                    lg:text-[18px]
                  "
                >
                  {step.title}
                </h3>

                <p
                  className="
                    mt-3
                    text-[13px]
                    font-normal
                    leading-[1.7]
                    text-[#747D8E]
                    sm:text-[13.5px]
                    md:text-[12.5px]
                    lg:text-[13.5px]
                  "
                >
                  {step.description}
                </p>
              </div>

              {/* Very subtle hover glow */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -bottom-20
                  -right-20
                  h-44
                  w-44
                  rounded-full
                  bg-[#563BFF]/0
                  blur-3xl
                  transition-all
                  duration-500
                  group-hover:bg-[#563BFF]/[0.035]
                "
              />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}