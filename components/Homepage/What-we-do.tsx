"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);

  const springValue = useSpring(motionValue, {
    stiffness: 35,
    damping: 18,
    mass: 1.2,
  });

  const inView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, motionValue, value]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toString();
      }
    });

    return () => unsubscribe();
  }, [springValue]);

  return <span ref={ref}>0</span>;
}

const stats = [
  {
    value: 2000,
    label: "Physios",
  },
  {
    value: 50,
    label: "Trainers",
  },
  {
    value: 20,
    label: "Doctors",
  },
];

const smoothEase = [0.16, 1, 0.3, 1] as const;

export default function WhatWeDo() {
  return (
    <>
      <section className="overflow-hidden bg-white px-6 py-16 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          <div className="grid grid-cols-3 gap-6">
            {stats.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{
                  y: 70,
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
                viewport={{ once: true, amount: 0.35 }}
                transition={{
                  duration: 1.4,
                  delay: index * 0.25,
                  ease: smoothEase,
                }}
              >
                <h3 className="text-[32px] font-extrabold leading-none text-black md:text-[42px]">
                  <Counter value={item.value} /> +
                </h3>

                <p className="mt-7 text-[15px] text-gray-500 md:text-[17px]">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{
              y: 70,
              opacity: 0,
              filter: "blur(8px)",
            }}
            whileInView={{
              y: 0,
              opacity: 1,
              filter: "blur(0px)",
            }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              duration: 1.5,
              delay: 0.35,
              ease: smoothEase,
            }}
            className="max-w-[390px] text-[15px] leading-7 text-gray-500 lg:ml-auto"
          >
            We transform health through movement, combining sports medicine,
            rehabilitation, and fitness expertise. From pain relief to peak
            performance, we help people move freely and live actively.
          </motion.p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f5f6fb] px-6 py-24 md:px-10 lg:px-16">
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[#f5f6fb]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid overflow-hidden rounded-[36px] bg-[linear-gradient(180deg,#286cba_0%,#3b55a5_55%,#524095_100%)] lg:grid-cols-[58%_42%]">
            {/* Left Dark Content */}
            <motion.div
              initial={{ x: -90, opacity: 0, filter: "blur(10px)" }}
              whileInView={{ x: 0, opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 1.45, ease: smoothEase }}
              className="relative p-8 md:p-12 lg:p-16"
            >
              {/* <div className="absolute left-0 top-0 h-40 w-50 rounded-full bg-[#ffff]/0 blur-2xl" /> */}

              <p className="mb-10 text-[14px] font-bold uppercase tracking-[0.22em] text-[#f3efef]">
                What We Do
              </p>

              <h2 className="relative max-w-[720px] text-[25px] font-extrabold leading-[1.35] tracking-[-0.03em] text-white md:text-[40px]">
                Helping people move better, recover faster, and live healthier through
                expert-led rehabilitation, fitness, and sports medicine programs.
              </h2>
            </motion.div>

            {/* Right White Card */}
            <motion.div
              initial={{ x: 90, opacity: 0, filter: "blur(10px)" }}
              whileInView={{ x: 0, opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: 1.45,
                delay: 0.2,
                ease: smoothEase,
              }}
              className="bg-white p-8 md:p-12 lg:p-14"
            >
              <p className="text-[16px] leading-8 text-black">
                SPARRC is a pioneering Sports and Fitness Medicine Clinic. We ensure our
                clients attain the priceless possession of health through Fitness. We
                encourage our clients to lead an active lifestyle to be able to enjoy
                their life to the fullest.
              </p>

              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{
                  duration: 1.4,
                  delay: 0.55,
                  ease: smoothEase,
                }}
                className="mt-10 h-px w-full origin-left bg-gray-300"
              />

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {["Rehabilitation", "Fitness", "Sports Medicine", "Active Living"].map(
                  (item, index) => (
                    <motion.div
                      key={item}
                      initial={{ y: 24, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.75,
                        delay: 0.65 + index * 0.1,
                        ease: smoothEase,
                      }}
                      className="rounded-2xl border border-gray-100 bg-[#f7f7f7] px-5 py-4 text-[14px] font-bold text-black"
                    >
                      {item}
                    </motion.div>
                  )
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}