"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const services = [
  {
    title: "Avoid Surgery",
    description:
      "SPARRC has a 95% success rate in solving chronic and acute pain without Surgery.",
    icon: "/icons/f1.png",
  },
  {
    title: "Sports Medicine",
    description:
      "Comprehensive geriatric care – offered by Geriatrician, Physiotherapists, Nutritionists etc.",
    icon: "/icons/f2.png",
  },
  {
    title: "Pain Management",
    description:
      "For improving quality of physical, mental and social activities of the specially-abled.",
    icon: "/icons/f3.png",
  },
  {
    title: "Rehabilitation",
    description:
      "Fitness and Sports Medicine now at your doorstep. Physios and Trainers will make Housecalls.",
    icon: "/icons/f4.png",
  },
  {
    title: "Fitness Therapy",
    description:
      "MTPs are painful spots on the muscles that are treated by trained Physios to relieve pain",
    icon: "/icons/f5.png",
  },
  {
    title: "Aquatherapy",
    description:
      "Aquatherapy or exercising in water helps a variety of people with their health problems",
    icon: "/icons/f6.png",
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function FeaturedServices() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % services.length);
    }, 3800);

    return () => clearInterval(timer);
  }, []);

  const getPosition = (index: number) => {
    const total = services.length;
    let diff = index - active;

    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;

    return diff;
  };

  return (
    <section className="overflow-hidden bg-[#fbfbfb] px-4 py-16 sm:px-6 md:px-10 md:py-20 lg:px-16">
      <motion.div
        initial={{ y: 70, opacity: 0, filter: "blur(10px)" }}
        whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 1.2, ease }}
        className="mx-auto max-w-6xl text-center"
      >
        <h2 className="text-[30px] font-extrabold text-black sm:text-[36px] md:text-[42px] lg:text-[46px]">
          FeaturedServices
        </h2>

        <div className="relative mx-auto  mt-12 h-[105px] w-full max-w-[340px] sm:max-w-[520px] md:mt-16 md:max-w-[680px] lg:max-w-[760px]">
          {services.map((service, index) => {
            const pos = getPosition(index);
            const isActive = pos === 0;

            return (
              <motion.button
                key={service.title}
                type="button"
                onClick={() => setActive(index)}
                animate={{
                  x: `calc(-50% + ${pos} * clamp(64px, 10vw, 132px))`,
                  y: "-50%",
                  scale: isActive ? 1 : 0.78,
                  opacity: Math.abs(pos) > 2 ? 0 : isActive ? 1 : 0.62,
                  zIndex: isActive ? 20 : 10,
                }}
                transition={{ duration: 0.9, ease }}
                className={`absolute cursor-pointer left-1/2 top-1/2 flex items-center justify-center rounded-full bg-white ${
                  isActive
                    ? "h-[74px] w-[74px] shadow-[0_18px_40px_rgba(0,0,0,0.12)] ring-[3px] ring-[#ff3d18] sm:h-[82px] sm:w-[82px] md:h-[88px] md:w-[88px] lg:h-[96px] lg:w-[96px]"
                    : "h-[42px] w-[42px] shadow-sm sm:h-[48px] sm:w-[48px] md:h-[56px] md:w-[56px] lg:h-[60px] lg:w-[60px]"
                }`}
              >
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={92}
                  height={92}
                  className={`object-contain ${
                    isActive
                      ? "h-[50px] w-[50px] sm:h-[56px] sm:w-[56px] md:h-[62px] md:w-[62px] lg:h-[68px] lg:w-[68px] "
                      : "h-[30px] w-[30px] sm:h-[34px] sm:w-[34px] md:h-[40px] md:w-[40px]"
                  }`}
                />
              </motion.button>
            );
          })}
        </div>

        <div className="mt-9 min-h-[180px] px-2 sm:min-h-[160px] md:mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={services[active].title}
              initial={{ y: 35, opacity: 0, filter: "blur(8px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              exit={{ y: -25, opacity: 0, filter: "blur(8px)" }}
              transition={{ duration: 0.75, ease }}
            >
              <h3 className="text-[24px] font-extrabold leading-tight text-black sm:text-[27px] md:text-[30px]">
                {services[active].title}
              </h3>

              <div className="mx-auto mt-6 h-px w-full max-w-[200px] bg-gray-300 sm:max-w-[340px] md:max-w-[250px]" />

              <p className="mx-auto mt-8 max-w-[760px] text-[15px] leading-7 text-black sm:text-[17px] md:text-[18px] md:leading-8">
                {services[active].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="relative  mx-auto mt-8 h-[3px] w-full max-w-[280px] overflow-hidden bg-gray-300 sm:max-w-[340px] md:max-w-[400px]">
          <motion.div
            animate={{ x: `${active * 100}%` }}
            transition={{ duration: 0.85, ease }}
            className="absolute left-0 top-0 h-full w-1/5 bg-[#4D1EFF]"
          />
        </div>
      </motion.div>
    </section>
  );
}