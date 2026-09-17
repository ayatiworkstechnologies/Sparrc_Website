"use client";

import { motion } from "framer-motion";

const smoothEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

const trainingItems = [
  {
    title: "Sports Specific Training",
    description:
      "Targeted conditioning designed to elevate athletic power and prevent field injuries.",
  },
  {
    title: "Performance Enhancement",
    description:
      "Optimizing overall speed, metabolic capability, and stamina.",
  },
  {
    title: "Functional Training",
    description:
      "Structured exercises focused on natural human movement and daily agility.",
  },
  {
    title: "Metabolic Fitness Training",
    description:
      "Targeting metabolic parameters to build energy reserves.",
  },
  {
    title: "Workplace Health Programs",
    description:
      "Correcting desk posture strain and repetitive physical tension.",
  },
  {
    title: "Healthy Ageing & Longevity",
    description:
      "Rebuilding muscular stability, flexibility, and daily independence.",
  },
];

export default function SportsFitnessMedicineTraining() {
  return (
    <section className="w-full overflow-hidden bg-[#F8F8FA] py-10 sm:py-10 md:py-8 lg:py-6">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-7 md:px-10 lg:px-12 xl:px-14">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.75, ease: smoothEase }}
          className="max-w-[760px]"
        >
          <p className="text-[11px] font-[500] uppercase tracking-[0.02em] text-[#222222] sm:text-[12px]">
            TRAIN
          </p>

          <h2 className="mt-3 text-[30px] font-[700] leading-[1.08] tracking-[-0.035em] text-[#050505] sm:text-[36px] md:text-[42px] lg:text-[48px]">
            Sports &amp; Fitness Medicine Training
          </h2>

          <p className="mt-4 max-w-[720px] text-[13px] leading-[1.55] text-[#7A8393] sm:text-[14px] md:text-[15px]">
            Our specialized training programs build lasting capacity. From elite
            sports performance to functional longevity, we construct strong,
            resilient, and active bodies.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:mt-12 lg:grid-cols-[1.02fr_2.1fr] lg:gap-8 xl:gap-10">
          {/* Left Highlight Card */}
          <motion.div
            initial={{ opacity: 0, x: -40, y: 16 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: smoothEase }}
            whileHover={{
              y: -4,
              transition: { duration: 0.25 },
            }}
            className="rounded-[20px] border border-[#5A36FF] bg-white px-6 py-7 shadow-[0_10px_30px_rgba(60,40,140,0.04)] sm:px-7 sm:py-8 md:px-8 md:py-9"
          >
            <h3 className="max-w-[320px] text-[28px] font-[700] leading-[1.18] tracking-[-0.03em] text-[#111111] sm:text-[30px] md:text-[32px]">
              Beat Sarcopenia, Beat Dynapenia
            </h3>

            <p className="mt-5 text-[12px] font-[700] uppercase tracking-[-0.01em] text-[#5330FF] sm:text-[13px]">
              SPARRC INDIA STRENGTH MOVEMENT
            </p>

            <p className="mt-5 max-w-[340px] text-[14px] leading-[1.9] text-[#6F788A] sm:text-[15px]">
              Loss of muscle mass (Sarcopenia) and loss of muscle strength
              (Dynapenia) are the leading causes of physical decline. Our
              special clinical programs target physical weakness directly to
              rebuild bone density, preserve balance, and secure longevity.
            </p>

            <motion.a
              href="/contact"
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="mt-7 inline-flex h-[48px] items-center justify-center rounded-[10px] bg-[#5633FF] px-5 text-[13px] font-[700] text-white shadow-[0_10px_20px_rgba(86,51,255,0.18)] transition-colors duration-300 hover:bg-[#4926f0] sm:h-[50px] sm:px-6 sm:text-[14px]"
            >
              Learn About Strength Medicine
            </motion.a>
          </motion.div>

          {/* Right Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.18 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.08,
                  delayChildren: 0.08,
                },
              },
            }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3"
          >
            {trainingItems.map((item) => (
              <motion.div
                key={item.title}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.65, ease: smoothEase },
                  },
                }}
                whileHover={{
                  y: -4,
                  transition: { duration: 0.22 },
                }}
                className="rounded-[16px] bg-[#F1F3F8] px-5 py-5 shadow-[0_4px_18px_rgba(30,40,80,0.02)] transition-shadow duration-300 hover:shadow-[0_12px_28px_rgba(30,40,80,0.06)] sm:px-6 sm:py-6 md:min-h-[128px]"
              >
                <h4 className="text-[17px] font-[700] leading-[1.3] tracking-[-0.02em] text-[#151515] sm:text-[18px]">
                  {item.title}
                </h4>

                <p className="mt-4 text-[13px] leading-[1.75] text-[#7A8394] sm:text-[14px]">
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