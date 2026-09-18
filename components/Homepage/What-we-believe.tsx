"use client";

import { motion } from "framer-motion";

const smoothEase: [number, number, number, number] = [
  0.16,
  1,
  0.3,
  1,
];

export default function WhatWeBelieves() {
  return (
    <section
      className="
        w-full
        overflow-hidden
        bg-[#F5F7FC]
        px-5
        py-14
        sm:px-7
        sm:py-16
        md:px-10
        md:py-20
        lg:px-14
        lg:py-24
      "
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 40,
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
          duration: 0.85,
          ease: smoothEase,
        }}
        className="
          mx-auto
          grid
          w-full
          max-w-[1290px]
          overflow-hidden
          rounded-[24px]
          shadow-[0_16px_45px_rgba(34,48,85,0.035)]
          lg:grid-cols-[48%_52%]
        "
      >
        {/* =====================================================
            LEFT GRADIENT SECTION
        ====================================================== */}

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
            amount: 0.25,
          }}
          transition={{
            duration: 0.9,
            ease: smoothEase,
          }}
          className="
            relative
            overflow-hidden
            bg-gradient-to-br
            from-[#287CC8]
            via-[#345DB6]
            to-[#503C97]
            px-7
            py-10
            sm:px-9
            sm:py-12
            md:px-12
            md:py-14
            lg:min-h-[380px]
            lg:px-[68px]
            lg:py-[66px]
          "
        >
          {/* subtle gradient highlights */}

          <div
            className="
              pointer-events-none
              absolute
              -left-[80px]
              -top-[100px]
              h-[260px]
              w-[260px]
              rounded-full
              bg-[#49A9E7]/10
              blur-[80px]
            "
          />

          <div
            className="
              pointer-events-none
              -bottom-[120px]
              absolute
              right-[-80px]
              h-[270px]
              w-[270px]
              rounded-full
              bg-[#7255D5]/15
              blur-[85px]
            "
          />

          <div className="relative z-10">
            {/* Label */}

            <motion.p
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.1,
                ease: smoothEase,
              }}
              className="
                text-[10px]
                font-[500]
                uppercase
                tracking-[0.30em]
                text-[#DBEFFF]
                sm:text-[11px]
              "
            >
              WHAT WE BELIEVE
            </motion.p>

            {/* Main Quote */}

            <motion.h2
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.75,
                delay: 0.16,
                ease: smoothEase,
              }}
              className="
                mt-10
                max-w-[460px]
                text-[27px]
                font-[700]
                leading-[1.36]
                tracking-[-0.025em]
                text-white
                sm:text-[31px]
                md:text-[34px]
                lg:mt-12
                lg:text-[36px]
              "
            >
              “We Prescribe Exercises -
              <br className="hidden sm:block" />
              Not Medicines”
            </motion.h2>
          </div>
        </motion.div>

        {/* =====================================================
            RIGHT WHITE SECTION
        ====================================================== */}

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
            amount: 0.25,
          }}
          transition={{
            duration: 0.9,
            delay: 0.08,
            ease: smoothEase,
          }}
          className="
            flex
            flex-col
            justify-center
            bg-white
            px-7
            py-10
            sm:px-9
            sm:py-12
            md:px-12
            md:py-14
            lg:min-h-[380px]
            lg:px-[58px]
            lg:py-[55px]
          "
        >
          {/* Paragraph 1 */}

          <motion.p
            initial={{
              opacity: 0,
              y: 18,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.18,
              ease: smoothEase,
            }}
            className="
              max-w-[620px]
              text-[13px]
              font-[400]
              leading-[1.85]
              text-[#20242C]
              sm:text-[14px]
              lg:text-[14px]
            "
          >
            We believe the body was built to move and that most pain, illness,
            and most of what ages us badly is a movement problem before it&apos;s
            a medicine problem. So when someone comes to us hurting, our first
            instinct isn&apos;t a prescription pad. It&apos;s an exercise plan,
            built for their body, their life, their goals.
          </motion.p>

          {/* Paragraph 2 */}

          <motion.p
            initial={{
              opacity: 0,
              y: 18,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.28,
              ease: smoothEase,
            }}
            className="
              mt-6
              max-w-[620px]
              text-[13px]
              font-[400]
              leading-[1.85]
              text-[#20242C]
              sm:text-[14px]
              lg:text-[14px]
            "
          >
            That&apos;s what We Prescribe Exercises - Not Medicines has meant
            since 2006: not a rejection of medicine, but a refusal to let it be
            the first or only answer. Healing works better as a relationship
            than a transaction. Over a million of them have walked, run, danced,
            and lived better because of it.
          </motion.p>

          {/* Bottom line */}

          <motion.div
            initial={{
              scaleX: 0,
            }}
            whileInView={{
              scaleX: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.9,
              delay: 0.4,
              ease: smoothEase,
            }}
            className="
              mt-8
              h-px
              w-full
              origin-left
              bg-[#D7DCE5]
            "
          />
        </motion.div>
      </motion.div>
    </section>
  );
}