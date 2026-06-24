"use client";

import Image from "next/image";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

const aboutData = {
  tagLine: "OUR TAG LINE - #MOVENHEAL",
  intro:
    "SPARRC — Sports Performance Assessment Rehabilitation Research Counseling Institute is India’s leading Sports and Fitness Medicine Clinic.",
  founded:
    "SPARRC was founded in 2006 by Dr. Kannan Pugazhendi and Mrs. Sujatha Pugazhendi. Since then, SPARRC:",
  points: [
    {
      icon: "/icons/logo-icon.png",
      text: "has helped over 1 Million Patients to be free from Pain",
    },
    {
      icon: "/icons/logo-icon.png",
      text: "has had 95% Success Rate In Avoiding Surgery",
    },
  ],
  closing: "Our offering is unique — We Prescribe Exercises — Not Medicines",
  image: {
    src: "/images/about-detail.png",
    alt: "About SPARRC",
  },
  stats: [
    { value: 200, label: "Physios" },
    { value: 50, label: "Trainers" },
    { value: 12, label: "Doctors" },
    { value: 20, label: "centres across 8 location" },
  ],
};

const ease = [0.16, 1, 0.3, 1] as const;

function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);

  const springValue = useSpring(motionValue, {
    stiffness: 55,
    damping: 22,
    mass: 0.8,
  });

  const inView = useInView(ref, {
    once: true,
    margin: "-120px",
  });

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, motionValue, value]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toLocaleString();
      }
    });

    return () => unsubscribe();
  }, [springValue]);

  return <span ref={ref}>0</span>;
}

export default function AboutDetails() {
  return (
    <section className="overflow-hidden bg-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-12 md:px-10 lg:grid-cols-[65fr_35fr] lg:px-5">
        <motion.div
          initial={{ x: -80, opacity: 0, filter: "blur(10px)" }}
          whileInView={{ x: 0, opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 1.6, ease }}
          className="pt-1"
        >
          <motion.p
            initial={{ y: 28, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.12, ease }}
            className="text-[13px] font-extrabold uppercase tracking-wide text-black"
          >
            {aboutData.tagLine}
          </motion.p>

          <motion.div
            initial={{ scaleY: 0, opacity: 0 }}
            whileInView={{ scaleY: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.22, ease }}
            className="mt-5 origin-top border-l-2 border-[#0097a9] pl-3"
          >
            <h2 className="max-w-[540px] text-[18px] font-bold leading-[1.55] text-black md:text-[20px]">
              {aboutData.intro}
            </h2>
          </motion.div>

          <motion.h3
            initial={{ y: 35, opacity: 0, filter: "blur(6px)" }}
            whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1.05, delay: 0.3, ease }}
            className="mt-8 max-w-[640px] text-[20px] font-extrabold leading-[1.45] text-black md:text-[23px]"
          >
            {aboutData.founded}
          </motion.h3>

          <div className="mt-7 space-y-6">
            {aboutData.points.map((item, index) => (
              <motion.div
                key={item.text}
                initial={{ x: -30, opacity: 0, filter: "blur(6px)" }}
                whileInView={{ x: 0, opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.9,
                  delay: 0.42 + index * 0.14,
                  ease,
                }}
                className="flex items-center gap-3"
              >
                <Image
                  src={item.icon}
                  alt="SPARRC Icon"
                  width={15}
                  height={15}
                  className="h-[15px] w-[15px] object-contain"
                />

                <p className="text-[15px] leading-6 text-gray-500">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ y: 30, opacity: 0, filter: "blur(6px)" }}
            whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.72, ease }}
            className="mt-7 text-[17px] font-extrabold text-black md:text-[18px]"
          >
            {aboutData.closing}
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ x: 80, opacity: 0, scale: 0.96, filter: "blur(10px)" }}
          whileInView={{ x: 0, opacity: 1, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 1.4, delay: 0.22, ease }}
          className="relative h-[280px] w-full overflow-hidden md:h-[360px]"
        >
          <Image
            src={aboutData.image.src}
            alt={aboutData.image.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 35vw"
            className="object-contain "
          />
        </motion.div>
      </div>

      <div className="bg-[#f1f1f1] px-6 py-5 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 md:grid-cols-4">
          {aboutData.stats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{
                y: 40,
                opacity: 0,
                scale: 0.96,
                filter: "blur(8px)",
              }}
              whileInView={{
                y: 0,
                opacity: 1,
                scale: 1,
                filter: "blur(0px)",
              }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{
                duration: 1,
                delay: index * 0.12,
                ease,
              }}
              className="text-center"
            >
              <h3 className="text-[31px] font-extrabold text-[#333] md:text-[36px]">
                <Counter value={item.value} /> +
              </h3>

              <p className="mt-4 text-[16px] text-[#333]">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}