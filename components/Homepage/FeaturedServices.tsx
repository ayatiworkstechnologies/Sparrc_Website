"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const services = [
  {
    title: "MTPT",
    description:
      "Targeted Trigger Point Therapy for Pain Relief and Muscle Recovery.",
    image: "/images/fs-mtpt.png",
  },
  {
    title: "Exercise Rehabilitation",
    description:
      "Restore Strength, Mobility, and Function Through Guided Exercise.",
    image: "/images/fs-exercise-rehabilitation.png",
  },
  {
    title: "Physiotherapy",
    description:
      "Relieve Pain, Restore Movement, and Improve Physical Function.",
    image: "/images/fs-physiotherapy.png",
  },
  {
    title: "Non-Surgical Care",
    description:
      "Effective Pain Relief and Recovery Without Surgery.",
    image: "/images/fs-non-surgical-care.png",
  },
  {
    title: "Acupuncture",
    description:
      "Targeted Therapy to Relieve Pain and Improve Wellbeing.",
    image: "/images/fs-acupuncture.png",
  },
  {
    title: "Aqua Therapy",
    description:
      "Low-Impact Water-Based Exercise for Mobility and Recovery.",
    image: "/images/fs-aqua-therapy.png",
  },
  {
    title: "PEMF",
    description:
      "Pulsed Electromagnetic Therapy to Support Pain Relief and Healing.",
    image: "/images/fs-pemf.png",
  },
  {
    title: "Prescription Exercise",
    description:
      "Personalized Exercise Plans Designed for Safe, Effective Recovery.",
    image: "/images/fs-prescription-exercise.png",
  },
];

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

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
    const updateWidth = () => setWindowWidth(window.innerWidth);
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setInterval(() => {
      setActive((prev) => (prev + 1) % services.length);
    }, 4000);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  const config = useMemo<SliderConfig>(() => {
    // mobile
    if (windowWidth < 480) {
      return {
        stageHeight: 180,
        stageWidth: 320,
        gap: 0,
        activeWidth: 240,
        activeHeight: 160,
        sideWidth: 0,
        sideHeight: 0,
        visibleRange: 0,
      };
    }

    // large mobile
    if (windowWidth < 640) {
      return {
        stageHeight: 200,
        stageWidth: 420,
        gap: 0,
        activeWidth: 280,
        activeHeight: 180,
        sideWidth: 0,
        sideHeight: 0,
        visibleRange: 0,
      };
    }

    // tablet portrait
    if (windowWidth < 768) {
      return {
        stageHeight: 215,
        stageWidth: 700,
        gap: 205,
        activeWidth: 290,
        activeHeight: 190,
        sideWidth: 120,
        sideHeight: 82,
        visibleRange: 1,
      };
    }

    // tablet landscape
    if (windowWidth < 1024) {
      return {
        stageHeight: 230,
        stageWidth: 900,
        gap: 225,
        activeWidth: 330,
        activeHeight: 210,
        sideWidth: 140,
        sideHeight: 94,
        visibleRange: 1,
      };
    }

    // laptop
    if (windowWidth < 1440) {
      return {
        stageHeight: 255,
        stageWidth: 1120,
        gap: 265,
        activeWidth: 390,
        activeHeight: 250,
        sideWidth: 160,
        sideHeight: 106,
        visibleRange: 2,
      };
    }

    // desktop
    return {
      stageHeight: 270,
      stageWidth: 1320,
      gap: 310,
      activeWidth: 430,
      activeHeight: 275,
      sideWidth: 175,
      sideHeight: 116,
      visibleRange: 2,
    };
  }, [windowWidth]);

  const getPosition = (index: number) => {
    const total = services.length;
    let diff = index - active;

    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;

    return diff;
  };

  return (
    <section className="overflow-hidden bg-[#fbfbfb] px-4 py-14 sm:px-6 sm:py-16 md:px-10 md:py-20 lg:px-16 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.9, ease }}
        className="mx-auto max-w-[1440px] text-center"
      >
        {/* top heading */}
        <div className="mx-auto max-w-[700px]">
          <p className="text-[11px] font-[600] uppercase tracking-[0.06em] text-[#4b4b4b] sm:text-[12px]">
            TREAT
          </p>

          <h2 className="mt-3 text-[30px] font-[700] leading-[1.05] tracking-[-0.03em] text-black sm:text-[36px] md:text-[42px]">
            Featured Services
          </h2>
        </div>

        {/* image slider stage */}
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
            const isVisible = Math.abs(position) <= config.visibleRange;

            const cardWidth = isActive ? config.activeWidth : config.sideWidth;
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
                          : 0.72
                        : 0,
                  scale: isActive ? 1 : 0.93,
                }}
                transition={{
                  duration: 0.85,
                  ease,
                }}
                className="absolute left-1/2 top-1/2 overflow-hidden rounded-[14px] border border-[#e4e7ef] bg-white outline-none"
                style={{
                  width: `${cardWidth}px`,
                  height: `${cardHeight}px`,
                  marginLeft: `-${cardWidth / 2}px`,
                  marginTop: `-${cardHeight / 2}px`,
                  zIndex: isActive ? 30 : 20 - Math.abs(position),
                  pointerEvents:
                    windowWidth < 640
                      ? isActive
                        ? "auto"
                        : "none"
                      : isVisible
                        ? "auto"
                        : "none",
                  boxShadow: isActive
                    ? "0 20px 40px rgba(15, 23, 42, 0.12)"
                    : "0 10px 22px rgba(15, 23, 42, 0.05)",
                }}
                whileHover={
                  windowWidth >= 640
                    ? {
                        y: isActive ? -4 : -2,
                      }
                    : {}
                }
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
                          ? "(max-width: 480px) 240px, (max-width: 640px) 280px, (max-width: 768px) 290px, (max-width: 1024px) 330px, (max-width: 1440px) 390px, 430px"
                          : "(max-width: 768px) 120px, (max-width: 1024px) 140px, (max-width: 1440px) 160px, 175px"
                      }
                      className="object-cover object-center"
                    />

                    {!isActive && (
                      <div className="absolute inset-0 bg-white/20" />
                    )}
                  </div>
                )}
              </motion.button>
            );
          })}
        </div>

        {/* content area */}
        <div className="mt-8 min-h-[170px] px-2 sm:min-h-[165px] md:mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={services[active].title}
              initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
              transition={{ duration: 0.65, ease }}
            >
              <h3 className="text-[24px] font-[700] leading-tight tracking-[-0.02em] text-black sm:text-[28px] md:text-[32px]">
                {services[active].title}
              </h3>

              <p className="mx-auto mt-5 max-w-[760px] text-[14px] leading-7 text-[#666f7d] sm:text-[15px] md:text-[16px]">
                {services[active].description}
              </p>

              <motion.a
                href="/contact"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="mt-6 inline-flex h-[46px] items-center justify-center rounded-full bg-[#5633ff] px-8 text-[13px] font-[600] text-white shadow-[0_10px_24px_rgba(86,51,255,0.18)] transition-colors duration-300 hover:bg-[#4a28f0] sm:h-[48px] sm:px-9 sm:text-[14px]"
              >
                Book Now
              </motion.a>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* progress line */}
        <div className="relative mx-auto mt-8 h-[3px] w-full max-w-[200px] overflow-hidden bg-[#d8dde6] sm:max-w-[240px] md:max-w-[260px]">
          <motion.div
            animate={{
              x: `${active * 100}%`,
            }}
            transition={{
              duration: 0.8,
              ease,
            }}
            className="absolute left-0 top-0 h-full bg-[#5633ff]"
            style={{
              width: `${100 / services.length}%`,
            }}
          />
        </div>

        {/* mobile dots */}
        <div className="mt-5 flex items-center justify-center gap-2 sm:hidden">
          {services.map((service, index) => (
            <button
              key={service.title}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Go to ${service.title}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                active === index ? "w-6 bg-[#5633ff]" : "w-2 bg-[#cfd6e2]"
              }`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}