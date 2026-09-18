"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import { useEffect, useState } from "react";

/* =========================================================
   TYPES
========================================================= */

type TabId = "test" | "treat" | "train";

interface JourneyItem {
  number: string;
  text: string;
}

interface ServiceItem {
  title: string;
  description?: string;
}

interface TabContent {
  id: TabId;
  label: string;
  eyebrow: string;
  heading: string;
  description?: string;
  services: ServiceItem[];
}

/* =========================================================
   ANIMATION
========================================================= */

const ease: [number, number, number, number] = [
  0.16,
  1,
  0.3,
  1,
];

/* =========================================================
   EXACT 16 SEPARATE POINTS
========================================================= */

const journeyItems: JourneyItem[] = [
  {
    number: "01",
    text: "You are in pain.",
  },
  {
    number: "02",
    text: "We help you understand it and rebuild capacity.",
  },
  {
    number: "03",
    text: "You have a chronic health condition.",
  },
  {
    number: "04",
    text: "We help you use exercise safely and effectively.",
  },
  {
    number: "05",
    text: "You haven’t exercised for years.",
  },
  {
    number: "06",
    text: "We help you start at the right level.",
  },
  {
    number: "07",
    text: "You want to lose weight.",
  },
  {
    number: "08",
    text: "We combine movement, exercise, nutrition and behaviour.",
  },
  {
    number: "09",
    text: "You’re an athlete.",
  },
  {
    number: "10",
    text: "We measure and develop performance.",
  },
  {
    number: "11",
    text: "You’re getting older.",
  },
  {
    number: "12",
    text: "We build strength, balance, fitness and independence.",
  },
  {
    number: "13",
    text: "You spend your life at a desk.",
  },
  {
    number: "14",
    text: "We assess your workplace movement and MSK risk.",
  },
  {
    number: "15",
    text: "You simply want to stay healthy.",
  },
  {
    number: "16",
    text: "You don’t need to wait until something hurts.",
  },
];

/* =========================================================
   TEST / TREAT / TRAIN
========================================================= */

const tabs: TabContent[] = [
  {
    id: "test",
    label: "Test",
    eyebrow: "TEST",
    heading: "Assessment & Exercise Lab",

    description:
      "SPARRC Exercise Lab is where exercise science meets individualised practice. We assess how your body moves, performs and responds to exercise — bringing together musculoskeletal capacity, movement quality, strength, endurance, balance, body composition and cardiorespiratory fitness to understand what your body needs. Using this insight, our team develops evidence-informed exercise prescriptions that are appropriate to your health, goals, fitness level and stage of life. Whether you are beginning your fitness journey, managing a health condition, recovering from injury, returning to sport or seeking better performance, the Exercise Lab helps turn assessment into action—and exercise into a purposeful prescription.",

    services: [
      {
        title: "Musculoskeletal (MSK) Assessment",
      },
      {
        title: "Fitness Testing",
      },
      {
        title: "Biomechanical Analysis",
      },
      {
        title: "SPARRC Exercise Lab",
      },
    ],
  },

  {
    id: "treat",
    label: "Treat",
    eyebrow: "TREAT",
    heading: "Treatment & Recovery",

    services: [
      {
        title: "MTPT",
      },
      {
        title: "Exercise Rehabilitation",
      },
      {
        title: "Physiotherapy",
      },
      {
        title: "Non Surgical Care",
      },
      {
        title: "Acupuncture",
      },
      {
        title: "Aqua Therapy",
      },
      {
        title: "PEMF",
      },
      {
        title: "Prescription Exercise",
      },
    ],
  },

  {
    id: "train",
    label: "Train",
    eyebrow: "TRAIN",
    heading: "Sports & Fitness Medicine Training",

    services: [
      {
        title: "Sports Specific Training",
      },
      {
        title: "Performance Enhancement Training",
      },
      {
        title: "Functional Training",
      },
      {
        title: "Metabolic Fitness Training",
      },
      {
        title: "Workplace Health",
      },
      {
        title: "Healthy Ageing & Longevity",
      },
      {
        title: "Geriatric / Pediatric Fitness Training",
      },
      {
        title: "Beat Sarcopenia, Beat Dynapenia",
        description:
          "SPARRC INDIA STRENGTH MOVEMENT.",
      },
      {
        title: "Recovery & Relaxation",
        description:
          "Yoganidra, Cranio Sacral Therapy, abnormal breathing patterns correction through breathing practices.",
      },
    ],
  },
];

/* =========================================================
   SERVICE BULLET
========================================================= */

function ServiceBullet() {
  return (
    <div
      className="
        flex
        h-[30px]
        w-[30px]
        shrink-0
        items-center
        justify-center
        rounded-full
        bg-[#EAF1FD]
      "
    >
      <span
        className="
          h-[8px]
          w-[8px]
          rounded-full
          bg-[#5435FF]
        "
      />
    </div>
  );
}

/* =========================================================
   COMPONENT
========================================================= */

export default function TestTreatTrainJourney() {
  const [activeTab, setActiveTab] =
    useState<TabId>("test");

  const [activeJourney, setActiveJourney] =
    useState(0);

  const [paused, setPaused] =
    useState(false);

  const prefersReducedMotion =
    useReducedMotion();

  const selectedTab =
    tabs.find(
      (tab) => tab.id === activeTab,
    ) ?? tabs[0];

  const currentJourney =
    journeyItems[activeJourney];

  /* =======================================================
     AUTO SLIDE
  ======================================================= */

  useEffect(() => {
    if (
      paused ||
      prefersReducedMotion
    ) {
      return;
    }

    const interval =
      window.setInterval(() => {
        setActiveJourney(
          (previous) =>
            (previous + 1) %
            journeyItems.length,
        );
      }, 3000);

    return () => {
      window.clearInterval(interval);
    };
  }, [paused, prefersReducedMotion]);

  /* =======================================================
     NEXT / PREVIOUS
  ======================================================= */

  const nextJourney = () => {
    setActiveJourney(
      (previous) =>
        (previous + 1) %
        journeyItems.length,
    );
  };

  const previousJourney = () => {
    setActiveJourney(
      (previous) =>
        previous === 0
          ? journeyItems.length - 1
          : previous - 1,
    );
  };

  return (
    <section
      className="
        w-full
        bg-[#F5F7FB]
        px-4
        py-8

        sm:px-6
        sm:py-10
      "
    >
      <motion.div
        initial={
          prefersReducedMotion
            ? undefined
            : {
                opacity: 0,
                y: 30,
              }
        }
        whileInView={
          prefersReducedMotion
            ? undefined
            : {
                opacity: 1,
                y: 0,
              }
        }
        viewport={{
          once: true,
          amount: 0.12,
        }}
        transition={{
          duration: 0.75,
          ease,
        }}
        className="
          mx-auto
          w-full
          max-w-[620px]
          rounded-[26px]
          border
          border-[#DDE3ED]
          bg-white
          p-4
          shadow-[0_18px_50px_rgba(25,40,75,0.06)]

          sm:p-6
        "
      >
        {/* =================================================
            TITLE
        ================================================== */}

        <h2
          className="
            text-[22px]
            font-[700]
            leading-[1.2]
            tracking-[-0.03em]
            text-[#141A2B]

            sm:text-[26px]
          "
        >
          What We Do: Test. Treat. Train.
        </h2>

        {/* =================================================
            TABS
        ================================================== */}

        <div className="mt-5 grid grid-cols-3 gap-3">
          {tabs.map((tab) => {
            const isActive =
              activeTab === tab.id;

            return (
              <motion.button
                key={tab.id}
                type="button"
                onClick={() =>
                  setActiveTab(tab.id)
                }
                whileTap={{
                  scale: 0.96,
                }}
                className={`
                  relative
                  h-[38px]
                  overflow-hidden
                  rounded-full
                  border
                  text-[11px]
                  font-[600]

                  sm:h-[42px]
                  sm:text-[12px]

                  ${
                    isActive
                      ? "border-transparent text-white"
                      : "border-[#7152FF] bg-white text-[#242424]"
                  }
                `}
              >
                {isActive && (
                  <motion.span
                    layoutId="active-tab-highlight"
                    transition={{
                      duration: 0.4,
                      ease,
                    }}
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-r
                      from-[#087FC4]
                      via-[#175EBE]
                      to-[#5830EE]
                    "
                  />
                )}

                <span className="relative z-10">
                  {tab.label}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* =================================================
            TAB CONTENT
        ================================================== */}

        <div className="mt-7">
          <AnimatePresence
            mode="wait"
            initial={false}
          >
            <motion.div
              key={selectedTab.id}
              initial={{
                opacity: 0,
                y: 18,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -12,
              }}
              transition={{
                duration: 0.4,
                ease,
              }}
            >
              <p
                className="
                  text-[10px]
                  font-[700]
                  uppercase
                  tracking-[0.08em]
                  text-[#5635FF]
                "
              >
                {selectedTab.eyebrow}
              </p>

              <h3
                className="
                  mt-2
                  text-[20px]
                  font-[700]
                  leading-[1.25]
                  tracking-[-0.025em]
                  text-[#111827]

                  sm:text-[22px]
                "
              >
                {selectedTab.heading}
              </h3>

              {selectedTab.description && (
                <p
                  className="
                    mt-4
                    text-[12px]
                    leading-[1.75]
                    text-[#737D90]

                    sm:text-[13px]
                  "
                >
                  {selectedTab.description}
                </p>
              )}

              {/* =================================================
                  SERVICES
              ================================================== */}

              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},

                  visible: {
                    transition: {
                      staggerChildren: 0.055,
                    },
                  },
                }}
                className="mt-6 space-y-3"
              >
                {selectedTab.services.map(
                  (service) => (
                    <motion.div
                      key={service.title}
                      variants={{
                        hidden: {
                          opacity: 0,
                          y: 12,
                        },

                        visible: {
                          opacity: 1,
                          y: 0,

                          transition: {
                            duration: 0.42,
                            ease,
                          },
                        },
                      }}
                      className="
                        flex
                        min-h-[64px]
                        items-center
                        gap-4
                        rounded-[17px]
                        border
                        border-[#DFE5EE]
                        bg-[#F7F9FC]
                        px-4
                        py-4

                        sm:min-h-[70px]
                        sm:px-5
                      "
                    >
                      <ServiceBullet />

                      <div className="min-w-0">
                        <p
                          className="
                            text-[14px]
                            font-[700]
                            leading-[1.4]
                            text-[#101827]

                            sm:text-[15px]
                          "
                        >
                          {service.title}
                        </p>

                        {service.description && (
                          <p
                            className="
                              mt-1
                              text-[11px]
                              leading-[1.55]
                              text-[#7A8496]

                              sm:text-[12px]
                            "
                          >
                            {
                              service.description
                            }
                          </p>
                        )}
                      </div>
                    </motion.div>
                  ),
                )}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* =================================================
            SPARRC IS FOR YOU IF
        ================================================== */}

        <div
          className="
            mt-7
            rounded-[24px]
            bg-[#F4F7FB]
            p-3

            sm:p-4
          "
          onMouseEnter={() =>
            setPaused(true)
          }
          onMouseLeave={() =>
            setPaused(false)
          }
          onTouchStart={() =>
            setPaused(true)
          }
          onTouchEnd={() =>
            setPaused(false)
          }
          onTouchCancel={() =>
            setPaused(false)
          }
        >
          {/* HEADER */}

          <div
            className="
              flex
              items-center
              justify-between
              gap-4
              px-1
              pb-3
            "
          >
            <p
              className="
                text-[10px]
                font-[700]
                uppercase
                tracking-[0.08em]
                text-[#62718A]

                sm:text-[11px]
              "
            >
              SPARRC IS FOR YOU IF...
            </p>

            <p
              className="
                text-[10px]
                font-[700]
                text-[#A1A8B8]

                sm:text-[11px]
              "
            >
              {currentJourney.number}
              {" / "}
              {String(
                journeyItems.length,
              ).padStart(2, "0")}
            </p>
          </div>

          {/* =================================================
              ACTIVE SLIDE
          ================================================== */}

          <div className="overflow-hidden">
            <AnimatePresence
              mode="wait"
              initial={false}
            >
              <motion.div
                key={activeJourney}
                drag={
                  prefersReducedMotion
                    ? false
                    : "x"
                }
                dragConstraints={{
                  left: 0,
                  right: 0,
                }}
                dragElastic={0.1}
                onDragEnd={(_, info) => {
                  if (
                    info.offset.x < -50
                  ) {
                    nextJourney();
                  }

                  if (
                    info.offset.x > 50
                  ) {
                    previousJourney();
                  }
                }}
                initial={
                  prefersReducedMotion
                    ? undefined
                    : {
                        opacity: 0,
                        x: 30,
                      }
                }
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={
                  prefersReducedMotion
                    ? undefined
                    : {
                        opacity: 0,
                        x: -25,
                      }
                }
                transition={{
                  duration: 0.45,
                  ease,
                }}
                className="
                  flex
                  min-h-[118px]
                  cursor-grab
                  items-center
                  gap-5
                  rounded-[22px]
                  bg-white
                  px-5
                  py-5
                  shadow-[0_6px_20px_rgba(30,45,80,0.035)]
                  active:cursor-grabbing

                  sm:min-h-[124px]
                  sm:px-6
                  sm:py-6
                "
              >
                {/* NUMBER */}

                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.88,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.35,
                    ease,
                  }}
                  className="
                    flex
                    h-[54px]
                    w-[54px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#EDF1F5]
                    text-[12px]
                    font-[700]
                    text-[#242D3B]

                    sm:h-[58px]
                    sm:w-[58px]
                    sm:text-[13px]
                  "
                >
                  {currentJourney.number}
                </motion.div>

                {/* =================================================
                    ALL 16 TEXTS SAME STYLE
                ================================================== */}

                <motion.p
                  initial={{
                    opacity: 0,
                    y: 8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: 0.06,
                    ease,
                  }}
                  className="
                    max-w-[410px]
                    text-[15px]
                    font-[500]
                    leading-[1.65]
                    tracking-[-0.01em]
                    text-[#55637A]

                    sm:text-[16px]
                  "
                >
                  {currentJourney.text}
                </motion.p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </section>
  );
}