"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export default function InterviewSection() {
  return (
    <section className="overflow-hidden bg-white px-6 py-5 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ y: 30, opacity: 0, filter: "blur(8px)" }}
          whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease }}
          className="text-center text-[24px] font-extrabold text-black md:text-[32px]"
        >
          Interview
        </motion.h2>

        <motion.div
          initial={{ y: 70, opacity: 0, scale: 0.96, filter: "blur(10px)" }}
          whileInView={{ y: 0, opacity: 1, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, delay: 0.15, ease }}
          className="mx-auto mt-14 grid max-w-5xl overflow-hidden rounded-[18px] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] md:grid-cols-[42%_58%]"
        >
          {/* Left Content */}
          <div className="flex flex-col justify-center px-6 py-10 md:px-8 lg:px-10">
            <motion.h3
              initial={{ x: -35, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.35, ease }}
              className="text-[24px] font-extrabold leading-tight text-black md:text-[28px]"
            >
              Watch Our Latest Interview
            </motion.h3>

            <motion.p
              initial={{ x: -35, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.45, ease }}
              className="mt-5 max-w-[340px] text-[14px] leading-6 text-black"
            >
              Physiotherapy for a Better Life: Insights from Sujatha Pugazhendi
              | World Physiotherapy Day Special
            </motion.p>

            <motion.a
              href="https://youtu.be/Gr2ubhnJ5K4?si=cbiPFAn9KwhgfG0g"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ y: 25, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.55, ease }}
              className="mt-7 inline-flex w-fit rounded-full bg-[#4D1EFF] px-7 py-3 text-[13px] font-bold text-white shadow-[0_12px_30px_rgba(77,30,255,0.35)] transition hover:-translate-y-1 hover:bg-[#f15a24]"
            >
              Watch Now
            </motion.a>
          </div>

          {/* Right YouTube Video */}
          <motion.div
            initial={{ x: 50, opacity: 0, filter: "blur(8px)" }}
            whileInView={{ x: 0, opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.35, ease }}
            className="p-4"
          >
            <div className="aspect-video overflow-hidden rounded-[14px] border-[6px] border-[#f1f1f1] bg-gray-100">
              <iframe
                src="https://www.youtube.com/embed/Gr2ubhnJ5K4"
                title="SPARRC Interview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}