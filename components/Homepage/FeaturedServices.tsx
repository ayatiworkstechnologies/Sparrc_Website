"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const services = [
  {
    title: "Avoid Surgery",
    description:
      "SPARRC has a 95% success rate in solving chronic and acute pain without Surgery.",
    image: "/images/featured-services/f1.png",
  },
  {
    title: "Geriatric Fitness",
    description:
      "Comprehensive geriatric care – offered by Geriatrician, Physiotherapists, Nutritionists etc.",
    image: "/images/featured-services/f2.png",
  },
  {
    title: "Clinical Pilates",
    description:
      "For improving quality of physical, mental and social activities of the specially-abled.",
    image: "/images/featured-services/f3.png",
  },
  {
    title: "Housecalls",
    description:
      "Fitness and Sports Medicine now at your doorstep. Physios and Trainers will make Housecalls.",
    image: "/images/featured-services/f4.png",
  },
  {
    title: "Trigger Point Therapy",
    description:
      "MTPs are painful spots on the muscles that are treated by trained Physios to relieve pain.",
    image: "/images/featured-services/f5.png",
  },
  {
    title: "Aquatherapy",
    description:
      "Aquatherapy or exercising in water helps a variety of people with their health problems.",
    image: "/images/featured-services/f6.png",
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

type SliderConfig = {
  stageHeight: number;
  stageWidth: number;
  gap: number;
  activeWidth: number;
  activeHeight: number;
  sideWidth: number;
  sideHeight: number;
  visibleRange: number;
};

export default function FeaturedServices() {
  const [active, setActive] = useState(0);
  const [windowWidth, setWindowWidth] = useState(1440);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const updateWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    updateWidth();

    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setInterval(() => {
      setActive((previous) => (previous + 1) % services.length);
    }, 4000);

    return () => {
      window.clearInterval(timer);
    };
  }, [isPaused]);

  const config = useMemo<SliderConfig>(() => {
    // Small mobile: show only active landscape image
    if (windowWidth < 480) {
      return {
        stageHeight: 178,
        stageWidth: 320,
        gap: 0,
        activeWidth: 250,
        activeHeight: 178,
        sideWidth: 0,
        sideHeight: 0,
        visibleRange: 0,
      };
    }

    // Large mobile: show only active landscape image
    if (windowWidth < 640) {
      return {
        stageHeight: 200,
        stageWidth: 420,
        gap: 0,
        activeWidth: 280,
        activeHeight: 200,
        sideWidth: 0,
        sideHeight: 0,
        visibleRange: 0,
      };
    }

    // Tablet portrait: active + one card each side
    if (windowWidth < 768) {
      return {
        stageHeight: 210,
        stageWidth: 680,
        gap: 205,
        activeWidth: 270,
        activeHeight: 192,
        sideWidth: 145,
        sideHeight: 103,
        visibleRange: 1,
      };
    }

    // Tablet landscape
    if (windowWidth < 1024) {
      return {
        stageHeight: 225,
        stageWidth: 880,
        gap: 230,
        activeWidth: 290,
        activeHeight: 207,
        sideWidth: 160,
        sideHeight: 114,
        visibleRange: 1,
      };
    }

    // Laptop
    if (windowWidth < 1440) {
      return {
        stageHeight: 250,
        stageWidth: 1120,
        gap: 270,
        activeWidth: 330,
        activeHeight: 235,
        sideWidth: 185,
        sideHeight: 132,
        visibleRange: 2,
      };
    }

    // Large desktop
    return {
      stageHeight: 275,
      stageWidth: 1320,
      gap: 315,
      activeWidth: 370,
      activeHeight: 264,
      sideWidth: 205,
      sideHeight: 146,
      visibleRange: 2,
    };
  }, [windowWidth]);

  const getPosition = (index: number) => {
    const total = services.length;
    let difference = index - active;

    if (difference > total / 2) {
      difference -= total;
    }

    if (difference < -total / 2) {
      difference += total;
    }

    return difference;
  };

  return (
    <section className="overflow-hidden bg-[#fbfbfb] px-4 py-14 sm:px-6 md:px-10 md:py-20 lg:px-16">
      <motion.div
        initial={{
          y: 60,
          opacity: 0,
          filter: "blur(10px)",
        }}
        whileInView={{
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 1.1,
          ease,
        }}
        className="mx-auto max-w-[1440px] text-center"
      >
        <h2 className="text-[28px] font-extrabold text-black sm:text-[34px] md:text-[40px]">
          Featured Services
        </h2>

        {/* Responsive image slider */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative mx-auto mt-10 sm:mt-12 md:mt-14"
          style={{
            width: "100%",
            maxWidth: `${config.stageWidth}px`,
            height: `${config.stageHeight}px`,
          }}
        >
          {services.map((service, index) => {
            const position = getPosition(index);
            const isActive = position === 0;
            const isVisible =
              Math.abs(position) <= config.visibleRange;

            const cardWidth = isActive
              ? config.activeWidth
              : config.sideWidth;

            const cardHeight = isActive
              ? config.activeHeight
              : config.sideHeight;

            return (
              <motion.button
                key={service.title}
                type="button"
                onClick={() => setActive(index)}
                aria-label={`Show ${service.title}`}
                initial={false}
                animate={{
                  x: position * config.gap,
                  opacity:
                    windowWidth < 640
                      ? isActive
                        ? 1
                        : 0
                      : isVisible
                        ? isActive
                          ? 1
                          : 0.68
                        : 0,
                  scale: isActive ? 1 : 0.92,
                  zIndex: isActive
                    ? 30
                    : 20 - Math.abs(position),
                  pointerEvents:
                    windowWidth < 640
                      ? isActive
                        ? "auto"
                        : "none"
                      : isVisible
                        ? "auto"
                        : "none",
                }}
                transition={{
                  duration: 0.85,
                  ease,
                }}
                className="absolute left-1/2 top-1/2 cursor-pointer overflow-hidden rounded-[12px] border border-[#d7dde7] bg-white outline-none"
                style={{
                  width: `${cardWidth}px`,
                  height: `${cardHeight}px`,
                  marginLeft: `-${cardWidth / 2}px`,
                  marginTop: `-${cardHeight / 2}px`,
                  boxShadow: isActive
                    ? "0 20px 50px rgba(0,0,0,0.14)"
                    : "0 8px 22px rgba(0,0,0,0.07)",
                }}
              >
                {cardWidth > 0 && cardHeight > 0 && (
                  <div className="relative h-full w-full">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      priority={index === 0}
                      sizes={
                        isActive
                          ? "(max-width: 480px) 250px, (max-width: 640px) 280px, (max-width: 768px) 270px, (max-width: 1024px) 290px, (max-width: 1440px) 330px, 370px"
                          : "(max-width: 768px) 145px, (max-width: 1024px) 160px, (max-width: 1440px) 185px, 205px"
                      }
                      className="object-cover object-center"
                    />

                    {!isActive && (
                      <div className="absolute inset-0 bg-white/10" />
                    )}
                  </div>
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Active content */}
        <div className="mt-8 min-h-[175px] px-2 sm:min-h-[165px] md:mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={services[active].title}
              initial={{
                y: 30,
                opacity: 0,
                filter: "blur(8px)",
              }}
              animate={{
                y: 0,
                opacity: 1,
                filter: "blur(0px)",
              }}
              exit={{
                y: -20,
                opacity: 0,
                filter: "blur(8px)",
              }}
              transition={{
                duration: 0.7,
                ease,
              }}
            >
              <h3 className="text-[23px] font-extrabold leading-tight text-black sm:text-[27px] md:text-[30px]">
                {services[active].title}
              </h3>

              <div className="mx-auto mt-5 h-px w-[160px] bg-[#d7dde7] sm:w-[220px] md:w-[260px]" />

              <p className="mx-auto mt-6 max-w-[760px] text-[14px] leading-7 text-[#222] sm:text-[16px] sm:leading-8 md:text-[17px]">
                {services[active].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress bar */}
        <div className="relative mx-auto mt-7 h-[3px] w-full max-w-[240px] overflow-hidden bg-[#d7dde7] sm:max-w-[320px] md:max-w-[380px]">
          <motion.div
            animate={{
              x: `${active * 100}%`,
            }}
            transition={{
              duration: 0.8,
              ease,
            }}
            className="absolute left-0 top-0 h-full bg-[#4D1EFF]"
            style={{
              width: `${100 / services.length}%`,
            }}
          />
        </div>

        {/* Mobile dots */}
        <div className="mt-6 flex items-center justify-center gap-2 sm:hidden">
          {services.map((service, index) => (
            <button
              key={service.title}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Show ${service.title}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                active === index
                  ? "w-6 bg-[#4D1EFF]"
                  : "w-2 bg-[#cfd5df]"
              }`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}