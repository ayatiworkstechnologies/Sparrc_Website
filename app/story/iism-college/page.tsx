"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { useState } from "react";
import {
  AnimatePresence,
  motion,
  type Variants,
  useReducedMotion,
} from "framer-motion";

import InnerBanner from "@/components/InnerBanner";

type TabId = "university" | "direct" | "infrastructure";

type Tab = {
  id: TabId;
  label: string;
};

type CourseListProps = {
  items: string[];
};

type TabHeadingProps = {
  children: ReactNode;
};

const tabs: Tab[] = [
  {
    id: "university",
    label: "University Courses Offered",
  },
  {
    id: "direct",
    label: "Courses Offered Directly by IISM",
  },
  {
    id: "infrastructure",
    label: "Infrastructure",
  },
];

const universityCourses = [
  "B.Sc Fitness & Lifestyle Modification (Duration 3 years, eligibility: +2 Science group)",
  "Fellowship In Fitness Medicine & Lifestyle Diseases Management (Duration 2 years, eligibility: MBBS)",
  "Fellowship In Sports Medicine & Sports Rehabilitation (Duration 2 years, eligibility: MBBS)",
  "Msc Sports & Fitness Psychology (Duration 2 years, eligibility: UG in Psychology)",
  "Msc Sports & Fitness Nutrition (Duration 2 years, eligibility: UG in Nutrition )",
  "PG Diploma in Exercise Physiology in Sports & Fitness (Duration 1 year, eligibility: MBBS /BPT )",
  "PG Diploma in Biomechanics & Kinesiology in Sports & Fitness (Duration 1 year, eligibility: MBBS /BPT)",
];

const directCourses = [
  "Certificate Program in Myofascial Trigger Point Therapy (Duration 3 months, eligibility: BPT/MPT)",
  "Health and Fitness Instructor Certificate Course (Level 1)",
  "Advanced Health and Fitness Instructor Certificate Course (Level 2)",
  "Fitness Training & Gym Facility Management Certificate Program (Level 3)",
];

const infrastructureLeft = [
  "Class rooms",
  "Library",
  "Biomechanics Lab",
  "Exercise physiology Lab",
  "Emergency First aid",
  "Departments",
  "Rehabilitation & Fitness",
  "Kalari pit",
  "Meditation hall",
  "Reception",
  "Pantry",
];

const infrastructureRight = [
  "Fitness medicine for specially-abled",
  "Sports Nutrition",
  "Sports Psychology",
  "Aquatherapy",
  "Dance therapy",
  "Clinic / Outpatient Department",
  "Research and Development Unit",
  "Outdoor Sports ground facility",
  "Yoga therapy / Asana & Pranayama practice hall",
  "Students lobby",
];

const smoothEase: [number, number, number, number] = [
  0.16, 1, 0.3, 1,
];

const sectionVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.08,
    },
  },
};

const leftRevealVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -42,
    y: 22,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.05,
      ease: smoothEase,
    },
  },
};

const rightRevealVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 42,
    y: 22,
    scale: 0.97,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1.1,
      delay: 0.08,
      ease: smoothEase,
    },
  },
};

const tabsVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.95,
      ease: smoothEase,
    },
  },
};

const listContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.08,
    },
  },
};

const listItemVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -18,
    y: 10,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.65,
      ease: smoothEase,
    },
  },
};

function CourseList({ items }: CourseListProps) {
  return (
    <motion.ul
      initial="hidden"
      animate="visible"
      variants={listContainerVariants}
      className="space-y-4 sm:space-y-5"
    >
      {items.map((item) => (
        <motion.li
          key={item}
          variants={listItemVariants}
          whileHover={{
            x: 4,
          }}
          transition={{
            duration: 0.3,
            ease: smoothEase,
          }}
          className="group flex items-start gap-3"
        >
          {/* SPARRC lotus icon */}
          <motion.div
            whileHover={{
              scale: 1.12,
              rotate: 5,
            }}
            transition={{
              duration: 0.3,
              ease: smoothEase,
            }}
            className="relative mt-[4px] h-[17px] w-[17px] shrink-0 sm:h-[18px] sm:w-[18px]"
          >
            <Image
              src="/icons/logo-icon.png"
              alt=""
              fill
              sizes="18px"
              className="object-contain"
            />
          </motion.div>

          <p className="m-0 text-[13px] leading-6 text-[#5f6470] transition-colors duration-300 group-hover:text-[#286cba] sm:text-[14px] sm:leading-7 lg:text-[15px]">
            {item}
          </p>
        </motion.li>
      ))}
    </motion.ul>
  );
}

function TabHeading({ children }: TabHeadingProps) {
  return (
    <div>
      <h2 className="text-[22px] font-extrabold leading-tight text-[#111827] sm:text-[26px] md:text-[29px]">
        {children}
      </h2>

      <motion.div
        initial={{
          scaleX: 0,
          opacity: 0,
        }}
        animate={{
          scaleX: 1,
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          delay: 0.15,
          ease: smoothEase,
        }}
        className="mt-3 h-[2px] w-14 origin-left bg-[#376bd8]"
      />
    </div>
  );
}

export default function IISMCollegePage() {
  const reduceMotion = useReducedMotion();
  const [activeTab, setActiveTab] = useState<TabId>("direct");

  const initialState = reduceMotion ? false : "hidden";
  const visibleState = reduceMotion ? undefined : "visible";

  return (
    <main className="overflow-hidden bg-white">
      <InnerBanner
        title="IISM College"
        bgImage="/images/page-banner-bg.png"
      />

      {/* Introduction */}
      <section className="relative overflow-hidden bg-white px-4 py-12 sm:px-6 sm:py-16 md:px-10 lg:px-16 lg:py-20">
        <div className="pointer-events-none absolute -left-40 top-0 h-80 w-80 rounded-full bg-[#286cba]/[0.035] blur-[115px]" />

        <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-[#524095]/[0.035] blur-[115px]" />

        <motion.div
          initial={initialState}
          whileInView={visibleState}
          viewport={{
            once: true,
            amount: 0.18,
          }}
          variants={sectionVariants}
          className="relative mx-auto grid max-w-[1180px] items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16"
        >
          {/* Introduction text */}
          <motion.div variants={leftRevealVariants}>
            <p className="text-[17px] leading-[1.75] text-[#1d1f24] sm:text-[19px] sm:leading-[1.8] md:text-[21px] lg:text-[23px]">
              <strong className="font-extrabold">
                Indian institute of Sports Medicine
              </strong>{" "}
              is an educational platform for those who believe themselves to be
              the reformers of the health and fitness world. Dr. Kannan
              Pugazhendi, the Founder and Director of the institute, is a
              trendsetter in{" "}
              <strong className="font-extrabold">
                Sports Medicine
              </strong>{" "}
              with a career experience of more than three decades. Our courses
              are groundbreaking, first of its kind and the need of the hour.
            </p>
          </motion.div>

          {/* Affiliation image */}
          <motion.figure
            variants={rightRevealVariants}
            className="mx-auto w-full max-w-[480px] lg:ml-auto"
          >
            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : {
                      y: [0, -6, 0],
                    }
              }
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="group overflow-hidden rounded-[18px] border border-[#edf0f4] bg-white p-3 shadow-[0_18px_55px_rgba(31,43,77,0.11)] sm:p-4"
            >
              <Image
                src="/images/iism-affiliation.png"
                alt="IISM affiliation with The Tamil Nadu Dr. MGR Medical University"
                width={900}
                height={380}
                priority
                sizes="(max-width: 1024px) 92vw, 480px"
                className="block h-auto w-full rounded-[12px] object-contain transition-transform duration-1000 ease-out group-hover:scale-[1.015]"
              />
            </motion.div>
          </motion.figure>
        </motion.div>
      </section>

      {/* Tabs and course information */}
      <section className="relative overflow-hidden border-t border-[#edf0f4] bg-[linear-gradient(180deg,#ffffff_0%,#fbfbfd_100%)] px-4 py-12 shadow-[0_-8px_35px_rgba(31,43,77,0.035)] sm:px-6 sm:py-16 md:px-10 lg:px-16 lg:py-20">
        <div className="pointer-events-none absolute left-1/2 top-10 h-64 w-[70%] -translate-x-1/2 rounded-full bg-[#286cba]/[0.025] blur-[110px]" />

        <div className="relative mx-auto max-w-[1180px]">
          {/* Navigation tabs */}
          <motion.div
            initial={initialState}
            whileInView={visibleState}
            viewport={{
              once: true,
              amount: 0.35,
            }}
            variants={tabsVariants}
            className="mx-auto max-w-[820px]"
          >
            <div className="iism-tab-scroll overflow-x-auto pb-3">
              <div className="mx-auto flex w-max min-w-full items-center justify-start gap-2 sm:justify-center sm:gap-3">
                {tabs.map((tab) => {
                  const isActive = activeTab === tab.id;

                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTab(tab.id)}
                      className={`relative shrink-0 whitespace-nowrap rounded-full px-4 py-3 text-[10px] font-bold uppercase tracking-[0.03em] transition-all duration-300 sm:px-5 sm:text-[11px] md:px-6 ${
                        isActive
                          ? "bg-white text-[#17191f] shadow-[0_10px_30px_rgba(31,43,77,0.10)]"
                          : "text-[#8b8f98] hover:bg-white hover:text-[#286cba]"
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="active-iism-tab"
                          className="absolute inset-0 -z-10 rounded-full bg-white"
                          transition={{
                            type: "spring",
                            stiffness: 320,
                            damping: 30,
                          }}
                        />
                      )}

                      <span className="relative z-10">
                        {tab.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Active tab content */}
          <div className="mx-auto mt-10 max-w-[1040px] sm:mt-12 lg:mt-16">
            <AnimatePresence mode="wait">
              {activeTab === "university" && (
                <motion.div
                  key="university"
                  initial={{
                    opacity: 0,
                    y: 26,
                    filter: "blur(4px)",
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                  }}
                  exit={{
                    opacity: 0,
                    y: -18,
                    filter: "blur(3px)",
                  }}
                  transition={{
                    duration: 0.75,
                    ease: smoothEase,
                  }}
                >
                  <TabHeading>
                    University Courses Offered
                  </TabHeading>

                  <div className="mt-7 max-w-[760px] sm:mt-8">
                    <CourseList items={universityCourses} />
                  </div>
                </motion.div>
              )}

              {activeTab === "direct" && (
                <motion.div
                  key="direct"
                  initial={{
                    opacity: 0,
                    y: 26,
                    filter: "blur(4px)",
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                  }}
                  exit={{
                    opacity: 0,
                    y: -18,
                    filter: "blur(3px)",
                  }}
                  transition={{
                    duration: 0.75,
                    ease: smoothEase,
                  }}
                >
                  <TabHeading>
                    Courses offered directly by IISM
                  </TabHeading>

                  <div className="mt-7 max-w-[850px] sm:mt-8">
                    <CourseList items={directCourses} />
                  </div>
                </motion.div>
              )}

              {activeTab === "infrastructure" && (
                <motion.div
                  key="infrastructure"
                  initial={{
                    opacity: 0,
                    y: 26,
                    filter: "blur(4px)",
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                  }}
                  exit={{
                    opacity: 0,
                    y: -18,
                    filter: "blur(3px)",
                  }}
                  transition={{
                    duration: 0.75,
                    ease: smoothEase,
                  }}
                >
                  <div className="text-center">
                    <h2 className="text-[22px] font-extrabold leading-tight text-[#000] sm:text-[26px] md:text-[29px]">
                      Infrastructure
                    </h2>

                    <motion.div
                      initial={{
                        scaleX: 0,
                      }}
                      animate={{
                        scaleX: 1,
                      }}
                      transition={{
                        duration: 0.8,
                        ease: smoothEase,
                      }}
                      className="mx-auto mt-3 h-[2px] w-14 bg-[#7047e8]"
                    />
                  </div>

                  <div className="mt-8 grid gap-x-14 gap-y-5 md:grid-cols-2 lg:mt-10">
                    <CourseList items={infrastructureLeft} />

                    <CourseList items={infrastructureRight} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <style jsx>{`
          .iism-tab-scroll {
            scrollbar-width: none;
            -ms-overflow-style: none;
          }

          .iism-tab-scroll::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </section>
    </main>
  );
}