"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

/* =========================================================
   UPDATED POPUP CONTENT
========================================================= */

const detailSections = [
  {
    title: "THE CLINICAL FOUNDATION",
    description:
      "A Master’s in Sports Physiotherapy gave that instinct a clinical grounding. She learnt to look beyond where it hurt and ask why it hurt: why one joint was compensating for another, why the same pain kept returning, and why rest was not always the answer. In 2006, that thinking helped shape SPARRC, which she founded with her husband, Dr Kannan Pugazhendi. At its heart was a straightforward idea they continue to work with today: prescribe exercise instead of medicine when exercise is genuinely the better answer.",
  },
  {
    title: "LOOKING AT THE WHOLE PERSON",
    description:
      "Building SPARRC from the ground up gradually changed the way Sujatha looked at health. An injury could rarely be separated neatly from the person living with it. So her own learning widened too. She trained in yoga and acupuncture, qualified as an Integrative Nutrition Health Coach through IIN, and studied entrepreneurship at London Business School and leadership at Harvard Business School. The business education had a practical purpose. If the idea behind SPARRC was going to reach more people, the institution carrying it had to grow with it. Under her leadership, a single clinic expanded into a network of centres across India, treating more than a million people and reporting a 95% success rate in resolving pain without surgery.",
  },
  {
    title: "WHERE BREATH ENTERS THE STORY",
    description:
      "Throughout these years, Sujatha maintained a practice that was much more personal: breathwork. Over time, she began paying closer attention to the relationship between breathing and movement. How we breathe, she came to believe, can influence how we move, recover and experience pain. A muscle or joint therefore tells only part of the story. That thinking is now developing into Kinesio Health, her approach to bringing breath and movement into the same conversation. Rather than treating them as separate areas of wellness, it looks at how the two work together within the body. It is also at the heart of the book she is currently writing, The Superpower of Doing a Little Everyday. The title reflects an idea that has followed her from her earliest years in sport and dance through physiotherapy, SPARRC and now Kinesio Health: meaningful change in the body rarely comes from doing something extraordinary once. More often, it comes from doing something small, and continuing to do it. For Sujatha, that ultimately means helping people understand their bodies well enough to trust them again.",
  },
];

const awards = [
  {
    title: "Best Entrepreneur Award, 2013",
    description: "Presented by MSME, Government of Tamil Nadu",
  },
  {
    title: "Governor’s Award, 2025",
    description: "Government of Tamil Nadu",
  },
];

/* =========================================================
   PORTRAIT CARD
========================================================= */

function PortraitCard() {
  return (
    <div
      className="
        relative
        h-[430px]
        w-full
        overflow-hidden
        rounded-[18px]
        bg-[#eeeeee]
        shadow-[0_18px_50px_rgba(15,23,42,0.08)]

        sm:h-[500px]

        lg:h-[540px]
        lg:w-[480px]
      "
    >
      <Image
        src="/images/sujatha-pugazhendi-01.png"
        alt="Dr. Sujatha Pugazhendi"
        fill
        priority
        sizes="(max-width: 1024px) 100vw, 480px"
        className="object-cover object-center"
      />

      {/* Bottom gradient */}
      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-[32%]
          bg-gradient-to-t
          from-black/65
          via-black/20
          to-transparent
        "
      />

      {/* Image caption */}
      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
        <h3
          className="
            text-[18px]
            font-[700]
            leading-tight
            text-white

            sm:text-[20px]
          "
        >
          Dr. Sujatha Pugazhendi
        </h3>

        <p
          className="
            mt-1
            !text-[9px]
            !leading-[12px]
            font-[700]
            uppercase
            tracking-[0.03em]
            text-[#63D5EB]
          "
        >
          CO-FOUNDER &amp; CEO, SPARRC
        </p>
      </div>
    </div>
  );
}

/* =========================================================
   AWARD ICON
========================================================= */

function AwardIcon() {
  return (
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
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-[19px] w-[19px]"
        stroke="#5B35FF"
        strokeWidth="1.8"
        aria-hidden="true"
      >
        <circle cx="12" cy="9" r="4.5" />

        <path d="M9.5 13L8.4 20l3.6-2.2 3.6 2.2-1.1-7" />

        <path d="M10.4 9.1l1 1 2.2-2.3" />
      </svg>
    </div>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function WomanBehindSparrc() {
  const [isOpen, setIsOpen] = useState(false);

  /* =======================================================
     LOCK PAGE SCROLL WHEN POPUP IS OPEN
  ======================================================= */

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleEscape = (
      event: KeyboardEvent,
    ) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener(
      "keydown",
      handleEscape,
    );

    return () => {
      document.body.style.overflow =
        previousOverflow;

      window.removeEventListener(
        "keydown",
        handleEscape,
      );
    };
  }, [isOpen]);

  return (
    <>
      {/* =====================================================
          INITIAL SECTION
      ====================================================== */}

      <section
        className="
          w-full
          overflow-hidden
          bg-white
          py-14

          sm:py-16

          md:py-20

          lg:py-24
        "
      >
        <div
          className="
            mx-auto
            grid
            w-full
            max-w-[1440px]
            grid-cols-1
            items-center
            gap-10
            px-5

            sm:px-7

            md:px-10

            lg:grid-cols-[minmax(0,1fr)_480px]
            lg:gap-16
            lg:px-12

            xl:gap-20
            xl:px-14
          "
        >
          {/* =================================================
              LEFT
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -35,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.85,
              ease,
            }}
          >
            {/* Heading */}

            <motion.h2
              initial={{
                opacity: 0,
                y: 18,
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
                ease,
              }}
              className="
                text-[31px]
                font-[700]
                leading-[1.1]
                tracking-[-0.035em]
                text-[#050505]

                sm:text-[36px]

                md:text-[42px]

                lg:text-[46px]
              "
            >
              The Woman Behind SPARRC
            </motion.h2>

            {/* Quote */}

            <motion.div
              initial={{
                opacity: 0,
                y: 18,
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
                delay: 0.08,
                ease,
              }}
              className="
                mt-7
                border-b
                border-[#E4E7EC]
                pb-6

                sm:mt-8
                sm:pb-7
              "
            >
              <p
                className="
                  max-w-[720px]
                  text-[17px]
                  font-[600]
                  italic
                  leading-[1.6]
                  text-[#18A9E3]

                  sm:text-[18px]

                  md:text-[19px]
                "
              >
                “Long before she became Dr Sujatha
                Pugazhendi, she was a dancer and an
                athlete. Movement was how she first
                learnt to understand her own body.”
              </p>
            </motion.div>

            {/* Short description */}

            <motion.p
              initial={{
                opacity: 0,
                y: 18,
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
                delay: 0.14,
                ease,
              }}
              className="
                mt-7
                max-w-[770px]
                text-[13px]
                leading-[1.8]
                text-[#777F8F]

                sm:text-[14px]

                md:text-[15px]
              "
            >
              Dr. Sujatha Pugazhendi built SPARRC
              on a simple, powerful idea: prescribe
              exercise instead of medicine when
              movement is the better answer. A
              Master&apos;s in Sports Physiotherapy
              gave her clinical grounding, while
              training in yoga, acupuncture, and
              integrative nutrition helped her see
              each person beyond their injury. Today,
              she leads a network of centres across
              India with a 95% success rate in
              resolving pain without surgery - and
              continues to explore how breath and
              movement can work together in a more
              complete, everyday practice.
            </motion.p>

            {/* Know More */}

            <motion.button
              type="button"
              onClick={() => setIsOpen(true)}
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
              whileHover={{
                y: -2,
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.97,
              }}
              transition={{
                duration: 0.25,
              }}
              className="
                mt-8
                inline-flex
                h-[48px]
                items-center
                justify-center
                rounded-full
                bg-[#542CFF]
                px-8
                text-[13px]
                font-[600]
                text-white
                shadow-[0_10px_24px_rgba(84,44,255,0.22)]
                transition-colors

                hover:bg-[#4722ED]

                sm:h-[50px]
                sm:text-[14px]
              "
            >
              Know More
            </motion.button>
          </motion.div>

          {/* =================================================
              RIGHT IMAGE
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 45,
              scale: 0.97,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.9,
              delay: 0.1,
              ease,
            }}
            className="
              mx-auto
              w-full
              max-w-[480px]

              lg:mx-0
            "
          >
            <PortraitCard />
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          KNOW MORE MODAL
      ====================================================== */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
            }}
            className="
              fixed
              inset-0
              z-[9999]
              flex
              items-center
              justify-center
              bg-black/45
              p-2
              backdrop-blur-[5px]

              sm:p-4

              md:p-6
            "
            onMouseDown={(event) => {
              if (
                event.target ===
                event.currentTarget
              ) {
                setIsOpen(false);
              }
            }}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="The Woman Behind SPARRC"
              initial={{
                opacity: 0,
                y: 40,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 30,
                scale: 0.97,
              }}
              transition={{
                duration: 0.5,
                ease,
              }}
              className="
                relative
                max-h-[94vh]
                w-full
                max-w-[1380px]
                overflow-y-auto
                rounded-[20px]
                bg-white
                shadow-[0_30px_100px_rgba(0,0,0,0.22)]

                sm:rounded-[24px]

                [scrollbar-width:thin]
                [scrollbar-color:#C9CED8_transparent]
              "
            >
              {/* ===============================================
                  CLOSE BUTTON
              ================================================ */}

              <button
                type="button"
                onClick={() =>
                  setIsOpen(false)
                }
                aria-label="Close"
                className="
                  sticky
                  right-4
                  top-4
                  z-30
                  ml-auto
                  mr-4
                  mt-4
                  flex
                  h-[42px]
                  w-[42px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#E5E7EB]
                  bg-white/95
                  text-[#111]
                  shadow-[0_5px_20px_rgba(0,0,0,0.08)]
                  backdrop-blur
                  transition

                  hover:scale-105
                  hover:bg-[#F7F7FA]

                  sm:right-6
                  sm:top-6
                  sm:mr-6
                  sm:mt-6
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-5 w-5"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    strokeLinecap="round"
                  />
                </svg>
              </button>

              {/* ===============================================
                  POPUP GRID
              ================================================ */}

              <div
                className="
                  -mt-[42px]
                  grid
                  grid-cols-1
                  gap-10
                  px-5
                  pb-8
                  pt-6

                  sm:px-7
                  sm:pb-10
                  sm:pt-8

                  md:px-10

                  lg:grid-cols-[minmax(0,1fr)_480px]
                  lg:items-start
                  lg:gap-14
                  lg:px-12
                  lg:pb-12

                  xl:gap-16
                  xl:px-14
                "
              >
                {/* ===========================================
                    POPUP LEFT
                ============================================ */}

                <div>
                  {/* Popup heading */}

                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: 0.08,
                      ease,
                    }}
                  >
                    <p
                      className="
                        text-[10px]
                        font-[600]
                        uppercase
                        tracking-[0.04em]
                        text-[#333]

                        sm:text-[11px]
                      "
                    >
                      LEADERSHIP &amp; VISION
                    </p>

                    <h2
                      className="
                        mt-4
                        text-[30px]
                        font-[700]
                        leading-[1.08]
                        tracking-[-0.035em]
                        text-[#050505]

                        sm:text-[36px]

                        md:text-[42px]

                        lg:text-[44px]
                      "
                    >
                      The Woman Behind SPARRC
                    </h2>

                    {/* Quote */}

                    <div
                      className="
                        mt-7
                        border-b
                        border-[#E5E7EC]
                        pb-6
                      "
                    >
                      <p
                        className="
                          max-w-[720px]
                          text-[17px]
                          font-[600]
                          italic
                          leading-[1.6]
                          text-[#17A8E2]

                          sm:text-[18px]

                          md:text-[19px]
                        "
                      >
                        “Long before she became Dr
                        Sujatha Pugazhendi, she was
                        a dancer and an athlete.
                        Movement was how she first
                        learnt to understand her own
                        body.”
                      </p>
                    </div>
                  </motion.div>

                  {/* ===========================================
                      DETAIL SECTIONS
                  ============================================ */}

                  <div
                    className="
                      mt-7
                      space-y-8

                      sm:mt-8
                      sm:space-y-10
                    "
                  >
                    {detailSections.map(
                      (section, index) => (
                        <motion.div
                          key={section.title}
                          initial={{
                            opacity: 0,
                            y: 22,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          transition={{
                            duration: 0.6,
                            delay:
                              0.16 +
                              index * 0.1,
                            ease,
                          }}
                        >
                          {/* Section heading */}

                          <div
                            className="
                              flex
                              items-center
                              gap-3
                            "
                          >
                            <div
                              className="
                                h-[20px]
                                w-[3px]
                                shrink-0
                                rounded-full
                                bg-[#5630FF]
                              "
                            />

                            <h3
                              className="
                                text-[13px]
                                font-[700]
                                uppercase
                                leading-[1.3]
                                tracking-[-0.01em]
                                text-[#111]

                                sm:text-[14px]
                              "
                            >
                              {
                                section.title
                              }
                            </h3>
                          </div>

                          {/* Section paragraph */}

                          <p
                            className="
                              mt-4
                              max-w-[760px]
                              text-[12px]
                              leading-[1.8]
                              text-[#767F8F]

                              sm:text-[13px]
                            "
                          >
                            {
                              section.description
                            }
                          </p>
                        </motion.div>
                      ),
                    )}
                  </div>
                </div>

                {/* ===========================================
                    POPUP RIGHT
                ============================================ */}

                <div className="w-full">
                  {/* Portrait */}

                  <motion.div
                    initial={{
                      opacity: 0,
                      x: 35,
                      scale: 0.97,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      scale: 1,
                    }}
                    transition={{
                      duration: 0.7,
                      delay: 0.12,
                      ease,
                    }}
                    className="
                      mx-auto
                      w-full
                      max-w-[480px]

                      lg:mx-0
                    "
                  >
                    <PortraitCard />
                  </motion.div>

                  {/* ===========================================
                      HONOURS & RECOGNITION
                  ============================================ */}

                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 25,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.65,
                      delay: 0.28,
                      ease,
                    }}
                    className="
                      mx-auto
                      mt-6
                      w-full
                      max-w-[480px]
                      rounded-[18px]
                      border
                      border-[#E2E5EC]
                      bg-[#F7F8FC]
                      p-5

                      sm:p-6

                      lg:mx-0
                    "
                  >
                    <h3
                      className="
                        text-[12px]
                        font-[700]
                        uppercase
                        tracking-[-0.01em]
                        text-[#181818]

                        sm:text-[13px]
                      "
                    >
                      HONOURS &amp; RECOGNITION
                    </h3>

                    <div className="mt-5 space-y-5">
                      {awards.map(
                        (award, index) => (
                          <div
                            key={award.title}
                            className={`
                              flex
                              items-start
                              gap-4

                              ${
                                index !==
                                awards.length - 1
                                  ? "border-b border-[#E4E7ED] pb-5"
                                  : ""
                              }
                            `}
                          >
                            <AwardIcon />

                            <div>
                              <h4
                                className="
                                  text-[11px]
                                  font-[700]
                                  leading-[1.4]
                                  text-[#151515]

                                  sm:text-[12px]
                                "
                              >
                                {
                                  award.title
                                }
                              </h4>

                              <p
                                className="
                                  mt-1
                                  text-[9px]
                                  leading-[1.5]
                                  text-[#89909E]

                                  sm:text-[10px]
                                "
                              >
                                {
                                  award.description
                                }
                              </p>
                            </div>
                          </div>
                        ),
                      )}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}