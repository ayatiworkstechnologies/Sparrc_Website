"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const paragraphs = [
  `We are SPARRC - Sports Performance Assessment Rehabilitation Research Counseling Institute - India’s leading sports and fitness medicine network, founded in 2006 on a simple, stubborn belief: prescribe exercise, not medicine, wherever it is genuinely the better answer.`,

  `SPARRC has helped over a million people move, heal and live better, with a 95% success rate in resolving pain without surgery. We call the people we treat medical guests, not patients, because we believe healing works better as a relationship than a transaction.`,

  `SPARRC is led by Dr Kannan Pugazhendi, who brings four decades of expertise in sports and fitness medicine, and Dr Sujatha Pugazhendi, whose vision has helped take SPARRC from a single room to 21 centres across India. Today, our work spans sports medicine and rehabilitation, and extends into breath and movement science through our Kinesio Health discipline.`,

  `Through it all, the conviction that shaped SPARRC on day one remains unchanged: the body was made to move, and much of what ages it, hurts it or holds it back is a movement problem before it becomes a medicine problem.`,
];

const stats = [
  {
    value: "2000 +",
    label: "Physios",
  },
  {
    value: "50 +",
    label: "Trainers",
  },
  {
    value: "20 +",
    label: "Doctors",
  },
];

export default function WhoWeAreSparrc() {
  return (
    <section className="w-full overflow-hidden bg-white">
      {/* =====================================================
          TOP SECTION
      ====================================================== */}

      <div
        className="
          mx-auto
          grid
          w-full
          max-w-[1440px]
          grid-cols-1
          lg:grid-cols-2
        "
      >
        {/* =================================================
            LEFT CONTENT
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: -45,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.85,
            ease,
          }}
          className="
            flex
            min-h-full
            flex-col
            justify-center
            px-5
            py-14
            sm:px-8
            sm:py-16
            md:px-12
            md:py-20
            lg:px-[70px]
            lg:py-[70px]
            xl:px-[95px]
          "
        >
          {/* Eyebrow */}
          <motion.p
            initial={{
              opacity: 0,
              y: 16,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              ease,
            }}
            className="
              text-[10px]
              font-[600]
              uppercase
              tracking-[0.20em]
              text-[#3483D5]
              sm:text-[11px]
            "
          >
            WHO WE ARE
          </motion.p>

          {/* Heading */}
          <motion.h2
            initial={{
              opacity: 0,
              y: 22,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.05,
              ease,
            }}
            className="
              mt-7
              text-[34px]
              font-[700]
              leading-[1.05]
              tracking-[-0.04em]
              text-[#050505]
              sm:text-[40px]
              md:text-[46px]
              lg:text-[48px]
              xl:text-[50px]
            "
          >
            We Are SPARRC
          </motion.h2>

          {/* Paragraphs */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.1,
            }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.12,
                },
              },
            }}
            className="
              mt-8
              space-y-7
              lg:mt-9
              lg:space-y-8
            "
          >
            {paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 18,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.65,
                      ease,
                    },
                  },
                }}
                className="
                  max-w-[570px]
                  text-[13px]
                  font-[400]
                  leading-[1.85]
                  text-[#697386]
                  sm:text-[14px]
                  lg:text-[13.5px]
                  xl:text-[14px]
                "
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>
        </motion.div>

        {/* =================================================
            RIGHT IMAGE
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: 45,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.95,
            delay: 0.08,
            ease,
          }}
          className="
            relative
            mx-auto
            h-[460px]
            w-full
            overflow-hidden
            sm:h-[560px]
            md:h-[650px]
            lg:h-[807px]
            lg:w-[720px]
            lg:max-w-full
          "
        >
          <motion.div
            initial={{
              scale: 1.06,
            }}
            whileInView={{
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1.4,
              ease,
            }}
            className="relative h-full w-full"
          >
            <Image
              src="/images/who-we-are-sparrc.png"
              alt="SPARRC physiotherapy and movement rehabilitation"
              fill
              priority
              sizes="
                (max-width: 640px) 100vw,
                (max-width: 1024px) 100vw,
                720px
              "
              className="
                object-cover
                object-center
              "
            />
          </motion.div>
        </motion.div>
      </div>

      {/* =====================================================
          STATS SECTION
      ====================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 35,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 0.8,
          ease,
        }}
        className="
          relative
          overflow-hidden
          bg-gradient-to-r
          from-[#2485CA]
          via-[#3562BA]
          to-[#593B99]
        "
      >
        {/* Subtle background decoration */}
        <div
          className="
            pointer-events-none
            absolute
            -left-[100px]
            top-[-100px]
            h-[300px]
            w-[300px]
            rounded-full
            bg-white/[0.04]
            blur-[80px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -bottom-[120px]
            right-[10%]
            h-[300px]
            w-[300px]
            rounded-full
            bg-[#7657DD]/20
            blur-[90px]
          "
        />

        <div
          className="
            relative
            z-10
            mx-auto
            grid
            max-w-[1440px]
            grid-cols-3
            px-3
            py-9
            sm:px-8
            sm:py-11
            md:px-12
            md:py-12
            lg:px-16
            lg:py-14
          "
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.65,
                delay: index * 0.1,
                ease,
              }}
              className={`
                relative
                flex
                min-h-[92px]
                flex-col
                items-center
                justify-center
                text-center
                sm:min-h-[110px]

                ${
                  index !== stats.length - 1
                    ? "after:absolute after:right-0 after:top-1/2 after:h-[62%] after:w-px after:-translate-y-1/2 after:bg-white/15"
                    : ""
                }
              `}
            >
              {/* Value */}
              <motion.h3
                initial={{
                  scale: 0.92,
                  opacity: 0,
                }}
                whileInView={{
                  scale: 1,
                  opacity: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.55,
                  delay: 0.12 + index * 0.1,
                  ease,
                }}
                className="
                  text-[25px]
                  font-[700]
                  leading-none
                  tracking-[-0.03em]
                  text-white
                  sm:text-[32px]
                  md:text-[38px]
                  lg:text-[42px]
                "
              >
                {stat.value}
              </motion.h3>

              {/* Label */}
              <p
                className="
                  mt-3
                  text-[9px]
                  font-[500]
                  text-white/85
                  sm:text-[11px]
                  md:text-[12px]
                "
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}