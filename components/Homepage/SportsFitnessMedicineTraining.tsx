"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

const smoothEase: [number, number, number, number] = [
  0.16,
  1,
  0.3,
  1,
];

const AUTO_SLIDE_INTERVAL = 3200;

/* =========================================================
   TRAINING PROGRAMS
========================================================= */

const trainingItems = [
  {
    title: "Sports Specific Training",
    image: "/images/sports-specific-training.png",
  },
  {
    title: "Performance Enhancement Training",
    image: "/images/performance-enhancement-training.png",
  },
  {
    title: "Functional Training",
    image: "/images/functional-training-1.png",
  },
  {
    title: "Metabolic Fitness Training",
    image: "/images/metabolic-fitness-training.png",
  },
  {
    title: "Workplace Health",
    image: "/images/workplace-health.png",
  },
  {
    title: "Healthy Ageing & Longevity",
    image: "/images/healthy-ageing-longevity.png",
  },
  {
    title: "Geriatric / Pediatric Fitness Training",
    image: "/images/geriatric-pediatric-fitness-training.png",
  },
];

/* =========================================================
   FEATURE CARDS
========================================================= */

const featureCards = [
  {
    tag: "SPARRC INDIA STRENGTH MOVEMENT",
    title: "Beat Sarcopenia, Beat Dynapenia",
    description:
      "Loss of muscle mass (Sarcopenia) and loss of muscle strength (Dynapenia) are major challenges in healthy ageing. Our targeted program rebuilds capacity, prevents muscle wastage, and preserves dynamic physical independence.",
    image: "/images/beat-sarcopenia-feature.png",
  },
  {
    tag: "ACTIVE RECOVERY",
    title: "Recovery & Relaxation",
    description:
      "Integrating Yoganidra, Cranio sacral therapy, and abnormal breathing patterns correction through targeted breathing practices to achieve parasympathetic balance and deep physical restoration.",
    image: "/images/recovery-relaxation.png",
  },
];

/* =========================================================
   COMPONENT
========================================================= */

export default function SportsFitnessMedicineTraining() {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const prefersReducedMotion = useReducedMotion();

  const [paused, setPaused] = useState(false);

  /* =======================================================
     GET CARD SCROLL DISTANCE
  ======================================================= */

  const getScrollStep = useCallback(() => {
    const slider = sliderRef.current;

    if (!slider) return 314;

    const card =
      slider.querySelector<HTMLElement>(
        "[data-training-card]",
      );

    if (!card) return 314;

    const computedStyle =
      window.getComputedStyle(slider);

    const gap =
      parseFloat(
        computedStyle.columnGap ||
          computedStyle.gap ||
          "20",
      ) || 20;

    return card.offsetWidth + gap;
  }, []);

  /* =======================================================
     NEXT
  ======================================================= */

  const handleNext = useCallback(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    const step = getScrollStep();

    const maxScroll =
      slider.scrollWidth - slider.clientWidth;

    const nextPosition =
      slider.scrollLeft + step;

    const reachedEnd =
      nextPosition >= maxScroll - 10;

    slider.scrollTo({
      left: reachedEnd ? 0 : nextPosition,
      behavior: prefersReducedMotion
        ? "auto"
        : "smooth",
    });
  }, [
    getScrollStep,
    prefersReducedMotion,
  ]);

  /* =======================================================
     PREVIOUS
  ======================================================= */

  const handlePrevious = useCallback(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    const step = getScrollStep();

    const maxScroll =
      slider.scrollWidth - slider.clientWidth;

    const previousPosition =
      slider.scrollLeft - step;

    slider.scrollTo({
      left:
        previousPosition <= 0
          ? maxScroll
          : previousPosition,
      behavior: prefersReducedMotion
        ? "auto"
        : "smooth",
    });
  }, [
    getScrollStep,
    prefersReducedMotion,
  ]);

  /* =======================================================
     AUTO SLIDE
  ======================================================= */

  useEffect(() => {
    if (paused || prefersReducedMotion) return;

    const timer = window.setInterval(() => {
      handleNext();
    }, AUTO_SLIDE_INTERVAL);

    return () => {
      window.clearInterval(timer);
    };
  }, [
    paused,
    prefersReducedMotion,
    handleNext,
  ]);

  return (
    <section
      className="
        w-full
        overflow-hidden
        bg-white
        py-12
        sm:py-14
        md:py-16
        lg:py-20
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1440px]
          px-5
          sm:px-7
          md:px-10
          lg:px-12
          xl:px-14
        "
      >
        {/* =====================================================
            HEADING
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 24,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
            ease: smoothEase,
          }}
        >
          <p
            className="
              text-[10px]
              font-[600]
              uppercase
              tracking-[0.05em]
              text-[#4282D2]
              sm:text-[11px]
            "
          >
            TRAIN
          </p>

          <h2
            className="
              mt-4
              text-[32px]
              font-[700]
              leading-[1.05]
              tracking-[-0.035em]
              text-[#19171F]
              sm:text-[36px]
              md:text-[40px]
              lg:text-[44px]
            "
          >
            Training Programs
          </h2>
        </motion.div>

        {/* =====================================================
            CAROUSEL
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 28,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.75,
            delay: 0.08,
            ease: smoothEase,
          }}
          className="
            relative
            mt-10
            px-0
            md:px-[54px]
          "
        >
          {/* LEFT ARROW */}

          <button
            type="button"
            onClick={handlePrevious}
            aria-label="Previous training programs"
            className="
              absolute cursor-pointer
              left-0
              top-1/2
              z-30
              hidden
              h-[42px]
              w-[42px]
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              bg-white
              text-[#5838FF]
              shadow-[0_6px_22px_rgba(25,35,70,0.08)]
              transition-all
              duration-300
              hover:scale-105
              hover:shadow-[0_8px_28px_rgba(25,35,70,0.12)]
              md:flex
            "
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-[19px] w-[19px]"
              aria-hidden="true"
            >
              <path
                d="M15 6L9 12L15 18"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* RIGHT ARROW */}

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next training programs"
            className="
              absolute cursor-pointer
              right-0
              top-1/2
              z-30
              hidden
              h-[42px]
              w-[42px]
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              bg-white
              text-[#5838FF]
              shadow-[0_6px_22px_rgba(25,35,70,0.08)]
              transition-all
              duration-300
              hover:scale-105
              hover:shadow-[0_8px_28px_rgba(25,35,70,0.12)]
              md:flex
            "
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-[19px] w-[19px]"
              aria-hidden="true"
            >
              <path
                d="M9 6L15 12L9 18"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* =================================================
              CAROUSEL TRACK
          ================================================== */}

          <div
            ref={sliderRef}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onTouchStart={() => setPaused(true)}
            onTouchEnd={() => setPaused(false)}
            onTouchCancel={() => setPaused(false)}
            className="
              flex
              w-full
              snap-x
              snap-mandatory
              gap-5
              overflow-x-auto
              overflow-y-hidden
              scroll-smooth
              pb-3
              [scrollbar-width:none]
              [-ms-overflow-style:none]
              [&::-webkit-scrollbar]:hidden
            "
          >
            {trainingItems.map(
              (item, index) => (
                <motion.article
                  key={item.title}
                  data-training-card
                  initial={{
                    opacity: 0,
                    y: 22,
                    scale: 0.985,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.045,
                    ease: smoothEase,
                  }}
                  whileHover={{
                    y: -4,
                  }}
                  className="
                    group
                    w-[294px]
                    shrink-0
                    snap-start
                    rounded-[12px]
                    border
                    border-[#D9E0EA]
                    bg-white
                    p-[11px]
                    shadow-[0_5px_18px_rgba(25,40,75,0.025)]
                    transition-shadow
                    duration-300
                    hover:shadow-[0_12px_30px_rgba(30,45,80,0.07)]
                  "
                >
                  {/* =========================================
                      IMAGE — EXACT 270 × 160
                  ========================================== */}

                  <div
                    className="
                      relative
                      h-[160px]
                      w-[270px]
                      max-w-full
                      overflow-hidden
                      rounded-[8px]
                      bg-[#EDF0F4]
                    "
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="270px"
                      className="
                        object-cover
                        object-center
                        transition-transform
                        duration-500
                        ease-out
                        group-hover:scale-[1.04]
                      "
                    />
                  </div>

                  {/* TITLE */}

                  <h3
                    className="
                      mt-4
                      truncate
                      pb-2
                      text-[15px]
                      font-[700]
                      leading-[1.3]
                      tracking-[-0.02em]
                      text-[#131313]
                    "
                    title={item.title}
                  >
                    {item.title}
                  </h3>
                </motion.article>
              ),
            )}
          </div>
        </motion.div>

        {/* =====================================================
            FEATURE CARDS
        ====================================================== */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.12,
          }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
          className="
            mt-14
            grid
            grid-cols-1
            gap-6
            md:mt-16
            lg:grid-cols-2
          "
        >
          {featureCards.map((feature) => (
            <motion.article
              key={feature.title}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 30,
                  scale: 0.985,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,

                  transition: {
                    duration: 0.7,
                    ease: smoothEase,
                  },
                },
              }}
              whileHover={{
                y: -4,
              }}
              className="
                relative
                overflow-hidden
                rounded-[18px]
                bg-gradient-to-r
                from-[#257DC9]
                via-[#3B53DC]
                to-[#5B20FF]
                px-5
                py-5
                shadow-[0_14px_35px_rgba(55,50,200,0.12)]
                sm:px-6
                sm:py-6
                lg:min-h-[337px]
                xl:px-8
              "
            >
              {/* Background glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -left-20
                  -top-24
                  h-60
                  w-60
                  rounded-full
                  bg-white/[0.05]
                  blur-[70px]
                "
              />

              <div
                className="
                  relative
                  z-10
                  grid
                  grid-cols-1
                  items-center
                  gap-7
                  sm:grid-cols-[minmax(0,1fr)_240px]
                  sm:gap-6
                "
              >
                {/* =================================================
                    LEFT CONTENT
                ================================================== */}

                <div>
                  {/* Tag */}

                  <span
                    className="
                      inline-flex
                      rounded-[4px]
                      bg-white/10
                      px-2.5
                      py-1.5
                      text-[8px]
                      font-[700]
                      uppercase
                      tracking-[0.04em]
                      text-white/90
                    "
                  >
                    {feature.tag}
                  </span>

                  {/* Title */}

                  <h3
                    className="
                      mt-5
                      max-w-[290px]
                      text-[24px]
                      font-[700]
                      leading-[1.18]
                      tracking-[-0.025em]
                      text-white
                      sm:text-[25px]
                      xl:text-[27px]
                    "
                  >
                    {feature.title}
                  </h3>

                  {/* Description */}

                  <p
                    className="
                      mt-5
                      max-w-[330px]
                      text-[11px]
                      leading-[1.75]
                      text-white/80
                      sm:text-[12px]
                    "
                  >
                    {feature.description}
                  </p>
                </div>

                {/* =================================================
                    FEATURE IMAGE — EXACT 240 × 289
                ================================================== */}

                <div
                  className="
                    relative
                    mx-auto
                    h-[289px]
                    w-[240px]
                    max-w-full
                    overflow-hidden
                    rounded-[12px]
                    bg-white/10
                    sm:mx-0
                  "
                >
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    sizes="240px"
                    className="
                      object-cover
                      object-center
                      transition-transform
                      duration-700
                      hover:scale-[1.035]
                    "
                  />
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}