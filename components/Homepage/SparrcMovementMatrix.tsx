"use client";

import { motion } from "framer-motion";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const movementItems = [
  {
    title: "Breathing Patterns",
    icon: "breathing",
  },
  {
    title: "Fascia & Muscle Health",
    icon: "muscle",
  },
  {
    title: "Movement Mechanics",
    icon: "movement",
  },
  {
    title: "Performance / Activity Load",
    icon: "performance",
  },
];

const lifestyleItems = [
  {
    title: "Sunlight Exposure",
    icon: "sun",
  },
  {
    title: "Hydration",
    icon: "water",
  },
  {
    title: "Nutrition",
    icon: "nutrition",
  },
  {
    title: "Recovery & Sleep",
    icon: "sleep",
  },
  {
    title: "Stress Management",
    icon: "stress",
  },
];

type IconType =
  | "breathing"
  | "muscle"
  | "movement"
  | "performance"
  | "sun"
  | "water"
  | "nutrition"
  | "sleep"
  | "stress";

function MatrixIcon({
  type,
  variant = "blue",
}: {
  type: IconType;
  variant?: "blue" | "purple";
}) {
  const stroke = variant === "blue" ? "#75DBFF" : "#673CFF";

  const commonProps = {
    fill: "none",
    stroke,
    strokeWidth: 1.9,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  const renderIcon = () => {
    switch (type) {
      case "breathing":
        return (
          <>
            <path d="M4 8h7c2.2 0 2.2-3 0-3" {...commonProps} />
            <path d="M4 12h11c2.5 0 2.5-3.5 0-3.5" {...commonProps} />
            <path d="M4 16h7c2.2 0 2.2 3 0 3" {...commonProps} />
          </>
        );

      case "muscle":
        return (
          <path
            d="M3 12h4l2.2-6 4.1 12 2.3-7H21"
            {...commonProps}
          />
        );

      case "movement":
        return (
          <>
            <path d="M7 7a7 7 0 0 1 10.8 1.2" {...commonProps} />
            <path d="M18 4v5h-5" {...commonProps} />
            <path d="M17 17a7 7 0 0 1-10.8-1.2" {...commonProps} />
            <path d="M6 20v-5h5" {...commonProps} />
          </>
        );

      case "performance":
        return (
          <>
            <path d="M4 17l5-5 3 3 7-8" {...commonProps} />
            <path d="M14 7h5v5" {...commonProps} />
          </>
        );

      case "sun":
        return (
          <>
            <circle cx="12" cy="12" r="3.2" {...commonProps} />
            <path
              d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6L7 7M17 17l1.4 1.4M18.4 5.6L17 7M7 17l-1.4 1.4"
              {...commonProps}
            />
          </>
        );

      case "water":
        return (
          <path
            d="M12 3.5s5 5.5 5 9.2a5 5 0 1 1-10 0c0-3.7 5-9.2 5-9.2Z"
            {...commonProps}
          />
        );

      case "nutrition":
        return (
          <>
            <path
              d="M6 8h10v10H7.5A1.5 1.5 0 0 1 6 16.5V8Z"
              {...commonProps}
            />
            <path d="M16 10h2a2 2 0 0 1 0 4h-2" {...commonProps} />
            <path d="M8 5h6" {...commonProps} />
          </>
        );

      case "sleep":
        return (
          <>
            <path
              d="M17.7 16.2A7 7 0 1 1 9 6.3a6 6 0 0 0 8.7 9.9Z"
              {...commonProps}
            />
          </>
        );

      case "stress":
        return (
          <path
            d="M12 3l6 2.8v5c0 4-2.4 7.2-6 9.2-3.6-2-6-5.2-6-9.2v-5L12 3Z"
            {...commonProps}
          />
        );

      default:
        return null;
    }
  };

  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      {renderIcon()}
    </svg>
  );
}

export default function SparrcMovementMatrix() {
  return (
    <section className="w-full overflow-hidden bg-[#F5F7FC] py-14 sm:py-16 md:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-7 md:px-10 lg:px-12 xl:px-14">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.35,
          }}
          transition={{
            duration: 0.75,
            ease,
          }}
          className="mx-auto max-w-[900px] text-center"
        >
          <h2
            className="
              text-[30px]
              font-[700]
              leading-[1.08]
              tracking-[-0.035em]
              text-[#050505]
              sm:text-[36px]
              md:text-[42px]
              lg:text-[46px]
            "
          >
            The SPARRC Movement Matrix
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-[770px]
              text-[13px]
              leading-[1.65]
              text-[#7B8494]
              sm:text-[14px]
              md:text-[15px]
            "
          >
            SPARRC Kinesio-Health is screened, assessed, and engineered by unified
            Bio-Psychosocial concepts. We optimize human wellness through two
            complementary systems.
          </p>
        </motion.div>

        {/* Cards */}
        <div
          className="
            mt-10
            grid
            grid-cols-1
            gap-6
            sm:mt-12
            md:mt-14
            lg:grid-cols-2
            lg:gap-8
          "
        >
          {/* LEFT MATRIX */}
          <motion.div
            initial={{
              opacity: 0,
              x: -45,
              y: 15,
              scale: 0.98,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.85,
              ease,
            }}
            className="
              relative
              overflow-hidden
              rounded-[22px]
              bg-gradient-to-br
              from-[#237CC8]
              via-[#355EB6]
              to-[#5741A2]
              px-6
              py-7
              shadow-[0_20px_50px_rgba(47,75,170,0.12)]
              sm:px-7
              sm:py-8
              md:px-8
              md:py-9
              lg:px-9
              lg:py-10
            "
          >
            {/* subtle background glow */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-white/[0.05] blur-3xl" />

            <div className="relative z-10">
              <h3
                className="
                  text-[22px]
                  font-[700]
                  leading-[1.2]
                  tracking-[-0.025em]
                  text-white
                  sm:text-[24px]
                  md:text-[25px]
                "
              >
                SPARRC Movement Matrix
              </h3>

              <p
                className="
                  mt-2
                  text-[11px]
                  font-[700]
                  uppercase
                  tracking-[0.01em]
                  text-[#77DFFF]
                  sm:text-[12px]
                "
              >
                PHYSICAL FACTORS INFLUENCING FUNCTION &amp; PERFORMANCE
              </p>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.09,
                      delayChildren: 0.15,
                    },
                  },
                }}
                className="mt-7 space-y-4"
              >
                {movementItems.map((item) => (
                  <motion.div
                    key={item.title}
                    variants={{
                      hidden: {
                        opacity: 0,
                        x: -25,
                      },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: {
                          duration: 0.55,
                          ease,
                        },
                      },
                    }}
                    whileHover={{
                      x: 4,
                      transition: {
                        duration: 0.22,
                      },
                    }}
                    className="
                      flex
                      min-h-[58px]
                      items-center
                      gap-4
                      rounded-[15px]
                      border
                      border-white/10
                      bg-white/[0.09]
                      px-4
                      py-3
                      shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]
                      backdrop-blur-[2px]
                      transition-colors
                      duration-300
                      hover:bg-white/[0.13]
                      sm:px-5
                    "
                  >
                    <div
                      className="
                        flex
                        h-[38px]
                        w-[38px]
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#65CFF3]/15
                      "
                    >
                      <MatrixIcon type={item.icon as IconType} variant="blue" />
                    </div>

                    <p
                      className="
                        text-[14px]
                        font-[700]
                        leading-tight
                        text-white
                        sm:text-[15px]
                      "
                    >
                      {item.title}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT LIFESTYLE */}
          <motion.div
            initial={{
              opacity: 0,
              x: 45,
              y: 15,
              scale: 0.98,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.85,
              delay: 0.08,
              ease,
            }}
            className="
              rounded-[22px]
              border
              border-[#DFE3EB]
              bg-white
              px-6
              py-7
              shadow-[0_16px_45px_rgba(31,41,55,0.04)]
              sm:px-7
              sm:py-8
              md:px-8
              md:py-9
              lg:px-9
              lg:py-10
            "
          >
            <h3
              className="
                text-[22px]
                font-[700]
                leading-[1.2]
                tracking-[-0.025em]
                text-[#111111]
                sm:text-[24px]
                md:text-[25px]
              "
            >
              SPARRC Lifestyle Levers
            </h3>

            <p
              className="
                mt-2
                text-[11px]
                font-[700]
                uppercase
                tracking-[0.01em]
                text-[#603CFF]
                sm:text-[12px]
              "
            >
              EVERYDAY HABITS DRIVING PHYSIOLOGICAL RECOVERY
            </p>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.15,
              }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.08,
                    delayChildren: 0.16,
                  },
                },
              }}
              className="mt-7 space-y-4"
            >
              {lifestyleItems.map((item) => (
                <motion.div
                  key={item.title}
                  variants={{
                    hidden: {
                      opacity: 0,
                      x: 25,
                    },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: {
                        duration: 0.55,
                        ease,
                      },
                    },
                  }}
                  whileHover={{
                    x: 4,
                    transition: {
                      duration: 0.22,
                    },
                  }}
                  className="
                    flex
                    min-h-[58px]
                    items-center
                    gap-4
                    rounded-[15px]
                    border
                    border-[#DFE3EA]
                    bg-[#F6F7FB]
                    px-4
                    py-3
                    transition-all
                    duration-300
                    hover:border-[#D5D0FF]
                    hover:bg-[#F8F7FF]
                    hover:shadow-[0_8px_20px_rgba(71,50,180,0.05)]
                    sm:px-5
                  "
                >
                  <div
                    className="
                      flex
                      h-[38px]
                      w-[38px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#EDE9FF]
                    "
                  >
                    <MatrixIcon
                      type={item.icon as IconType}
                      variant="purple"
                    />
                  </div>

                  <p
                    className="
                      text-[14px]
                      font-[700]
                      leading-tight
                      text-[#151515]
                      sm:text-[15px]
                    "
                  >
                    {item.title}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}