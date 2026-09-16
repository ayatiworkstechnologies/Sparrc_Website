"use client";

import { motion } from "framer-motion";

const beliefs = [
  {
    title: "Movement First",
    description:
      "The body was built to move. Most persistent pain, chronic illness, and age-related decline is a movement problem before it is a medicine problem.",
  },
  {
    title: "Exercises over Medicines",
    description:
      "Not a dogmatic rejection of pharmacology, but a refusal to let it be the first or only answer. We treat the cause, not just the symptom.",
  },
  {
    title: "Collaborative Healing",
    description:
      "Recovery works best as a collaborative relationship rather than a transaction. We equip you with the knowledge and tools to heal yourself.",
  },
];

const smoothEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function WhatWeBelieve() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F6F8FC] py-14 sm:py-16 md:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 0.7,
            ease: smoothEase,
          }}
          className="mb-10 text-center sm:mb-12 md:mb-14 lg:mb-16"
        >
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.04em] text-[#313131] sm:text-xs md:text-[13px]">
            Our Core Philosophy
          </p>

          <h2 className="text-[28px] font-extrabold leading-[1.1] tracking-[-0.035em] text-black sm:text-[32px] md:text-[36px] lg:text-[38px]">
            What We Believe
          </h2>
        </motion.div>

        {/* Main Gradient Card */}
        <motion.div
          initial={{ opacity: 0, y: 36, scale: 0.985 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.8,
            delay: 0.08,
            ease: smoothEase,
          }}
          whileHover={{
            y: -3,
            transition: {
              duration: 0.3,
              ease: "easeOut",
            },
          }}
          className="
            relative overflow-hidden
            rounded-[18px]
            bg-gradient-to-br
            from-[#2A80CB]
            via-[#315DB5]
            to-[#513993]
            px-6 py-8
            shadow-[0_18px_50px_rgba(45,74,165,0.10)]
            sm:px-8 sm:py-10
            md:rounded-[20px] md:px-10 md:py-11
            lg:px-12 lg:py-12
          "
        >
          {/* Soft background highlights */}
          <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-white/[0.04] blur-3xl" />

          <div className="pointer-events-none absolute -bottom-24 left-[15%] h-60 w-60 rounded-full bg-[#7E52D6]/20 blur-3xl" />

          <div className="relative z-10">
            <motion.h3
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.65,
                delay: 0.18,
                ease: smoothEase,
              }}
              className="
                max-w-[900px]
                text-[20px]
                font-bold
                leading-[1.35]
                tracking-[-0.025em]
                text-white
                sm:text-[22px]
                md:text-[24px]
                lg:text-[25px]
              "
            >
              “We Prescribe Exercises — Not Medicines”
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.65,
                delay: 0.27,
                ease: smoothEase,
              }}
              className="
                mt-5
                max-w-[1150px]
                text-[13px]
                font-normal
                leading-[1.85]
                text-[#D6EEFF]
                sm:mt-6
                sm:text-[14px]
                md:text-[14px]
                lg:text-[15px]
              "
            >
              Since 2006, this simple conviction has guided our practice. By
              analyzing structural deficits, prescribing precise therapeutic
              movements, and prioritizing physical conditioning, we address the
              root mechanical causes of physical suffering.
            </motion.p>
          </div>
        </motion.div>

        {/* Bottom Cards */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-9 sm:gap-5 md:mt-10 md:grid-cols-3 md:gap-5 lg:mt-12 lg:gap-7">
          {beliefs.map((belief, index) => (
            <motion.div
              key={belief.title}
              initial={{
                opacity: 0,
                y: 34,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
                delay: 0.1 + index * 0.1,
                ease: smoothEase,
              }}
              whileHover={{
                y: -6,
                transition: {
                  duration: 0.3,
                  ease: "easeOut",
                },
              }}
              className="
                group
                min-h-[150px]
                rounded-[16px]
                border
                border-[#E1E4EA]
                bg-white
                px-6
                py-7
                shadow-[0_6px_24px_rgba(25,35,55,0.025)]
                transition-shadow
                duration-300
                hover:shadow-[0_18px_45px_rgba(25,35,55,0.08)]
                sm:px-7
                sm:py-8
                md:min-h-[180px]
                md:px-6
                lg:min-h-[168px]
                lg:px-8
                lg:py-8
              "
            >
              <h3
                className="
                  text-[17px]
                  font-bold
                  leading-tight
                  tracking-[-0.02em]
                  text-[#111111]
                  sm:text-[18px]
                  md:text-[17px]
                  lg:text-[18px]
                "
              >
                {belief.title}
              </h3>

              <p
                className="
                  mt-4
                  text-[13px]
                  leading-[1.7]
                  text-[#768093]
                  sm:text-[13.5px]
                  md:text-[12.5px]
                  lg:text-[13.5px]
                "
              >
                {belief.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}