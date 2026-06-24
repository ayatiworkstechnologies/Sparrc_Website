"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const missionData = {
  topParagraph:
    "SPARRC is the brainchild of Mrs Sujatha Pugazhendi, who recently won The Best Women Entrepreneur Award – Tamilnadu Medium & Small Scale Industries division. Sujatha Pugazhendi along with her husband Dr Kannan Pugazhendi started SPARRC in the year 2006. Dr Kannan Pugazhendi’s expertise in sports medicine and Sujatha’s passionate entrepreneurship made SPARRC to grow rapidly. We take immense pride in noting that the success rate for our “avoid surgery” service is very high and we have clientele from across India and several other countries. We are now 200+ strong workforce sharing one common goal – to effectively design scientific exercise intervention to maximize performance, facilitate recovery from illness/injury/surgery and disability in the areas of Sports, Dance, Martial Arts, Fitness, Work, Adventure Sport & Leisure. We ensure our clients attain the priceless possession of health through Fitness. We encourage our clients to lead an active lifestyle to be able to enjoy their Life to the fullest.",

  title: "OUR MISSION",

  mission:
    "To effectively design scientific exercise intervention to maximize performance, facilitate recovery from illness, Injury, surgery and disability in the areas of Sports, Dance, Martial arts, Fitness, Work, Adventure Sport & Leisure.",

  subtitle:
    "Fitness Medicine is the prescription of exercise to keep a population healthy by :",

  points: [
    "avoiding inactivity through individual effort and prevent lifestyle diseases",
    "increasing mobility without pain",
    "minimizing the complications of chronic diseases",
  ],

  closing:
    "irrespective of age, gender and ability thereby improving the quality of life.",

  image: {
    src: "/images/mission.png",
    alt: "SPARRC Mission",
  },
};

export default function AboutMission() {
  return (
    <section className="overflow-hidden bg-white px-6 py-14 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Premium Top Paragraph */}
        <motion.div
          initial={{ y: 50, opacity: 0, filter: "blur(10px)" }}
          whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 1.25, ease }}
          className="relative overflow-hidden rounded-[30px] bg-gradient-to-br from-[#524095] via-[#3b55a5] to-[#286cba] p-[1px]"
        >
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/15 blur-3xl" />
          <div className="absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-[#00c2ff]/20 blur-3xl" />

          <div className="relative rounded-[30px] bg-white/92 px-6 py-8 backdrop-blur-xl md:px-10 lg:px-14">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease }}
              className="mx-auto mb-6 h-[3px] w-[90px] origin-center rounded-full bg-gradient-to-r from-[#524095] via-[#3b55a5] to-[#286cba]"
            />

            <p className="mx-auto max-w-6xl text-center text-[12px] font-medium leading-7 text-gray-600 md:text-[13px] lg:text-[13.5px]">
              {missionData.topParagraph}
            </p>
          </div>
        </motion.div>

        {/* Main Layout */}
        <div className="mt-16 grid items-center gap-14 lg:grid-cols-[1fr_1fr]">
          {/* Left Image */}
          <motion.div
            initial={{ x: -80, opacity: 0, scale: 0.96, filter: "blur(10px)" }}
            whileInView={{ x: 0, opacity: 1, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 1.4, ease }}
            className="relative h-[280px] w-full overflow-hidden md:h-[390px]"
          >
            <Image
              src={missionData.image.src}
              alt={missionData.image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ x: 80, opacity: 0, filter: "blur(10px)" }}
            whileInView={{ x: 0, opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 1.4, delay: 0.15, ease }}
          >
            <p className="mb-5 text-[13px] font-extrabold uppercase tracking-wide text-black">
              {missionData.title}
            </p>

            <div className="border-l-2 border-[#0097a9] pl-4">
              <h2 className="max-w-[600px] text-[16px] font-bold leading-7 text-black md:text-[18px] md:leading-8">
                {missionData.mission}
              </h2>
            </div>

            <h3 className="mt-8 max-w-[620px] text-[20px] font-extrabold leading-[1.45] text-black md:text-[23px]">
              {missionData.subtitle}
            </h3>

            <div className="mt-7 space-y-5">
              {missionData.points.map((point, index) => (
                <motion.div
                  key={point}
                  initial={{ x: 32, opacity: 0, filter: "blur(5px)" }}
                  whileInView={{ x: 0, opacity: 1, filter: "blur(0px)" }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.85,
                    delay: 0.35 + index * 0.14,
                    ease,
                  }}
                  className="flex items-start gap-3"
                >
                  <Image
                    src="/icons/logo-icon.png"
                    alt="SPARRC Icon"
                    width={14}
                    height={14}
                    className="mt-1 h-[14px] w-[14px] object-contain"
                  />

                  <p className="text-[14px] leading-6 text-gray-500">
                    {point}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ y: 28, opacity: 0, filter: "blur(6px)" }}
              whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.75, ease }}
              className="mt-7 max-w-[600px] text-[16px] font-extrabold leading-7 text-black md:text-[18px]"
            >
              {missionData.closing}
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}