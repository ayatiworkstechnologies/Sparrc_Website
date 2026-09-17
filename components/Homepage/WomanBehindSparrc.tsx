"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const detailSections = [
    {
        title: "THE CLINICAL FOUNDATION",
        description:
            "A Master’s in Sports Physiotherapy gave her instinctive feeling a clinical grounding. She learnt to look beyond where it hurt and ask why. In 2006, she founded SPARRC with her husband Dr Kannan Pugazhendi. Their core, unshakeable idea: prescribe exercise instead of medicine when exercise is genuinely the better answer.",
    },
    {
        title: "LOOKING AT THE WHOLE PERSON",
        description:
            "She recognized early on that an injury could rarely be separated from the person living with it. Seeking complete solutions, she trained in yoga and acupuncture, qualified as an Integrative Nutrition Health Coach (IIN), and studied entrepreneurship at London Business School and leadership at Harvard Business School. Under her leadership, a single clinic expanded into a network of centres across India, treating more than a million people with a 95% success rate in resolving pain without surgery.",
    },
    {
        title: "WHERE BREATH ENTERS THE STORY",
        description:
            'Throughout her journey, she maintained a personal breathwork practice. Over time, she noticed the deep, bi-directional relationship between breathing and functional movement. This holistic thinking is currently developing into Kinesio Health — bringing breath and movement into the same clinical conversation. She is currently authoring her upcoming book, "The Superpower of Doing a Little Everyday".',
    },
];

const awards = [
    {
        title: "Best Entrepreneur Award, 2013",
        description: "Presented by MSME, Government of Tamil Nadu",
    },
    {
        title: "Governor's Award, 2025",
        description: "Honoured by the Government of Tamil Nadu",
    },
];

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

            {/* subtle bottom gradient */}
            <div className="absolute inset-x-0 bottom-0 h-[32%] bg-gradient-to-t from-black/65 via-black/20 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                <h3 className="text-[18px] font-[700] leading-tight text-white sm:text-[20px]">
                    Dr. Sujatha Pugazhendi
                </h3>

                <p className="mt-1 !text-[12px] !leading-[10px] font-[700] uppercase tracking-[0.03em] text-[#63D5EB]">
                    CO-FOUNDER &amp; CEO, SPARRC
                </p>
            </div>
        </div>
    );
}

function AwardIcon() {
    return (
        <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-[#EDE9FF]">
            <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-[19px] w-[19px]"
                stroke="#5B35FF"
                strokeWidth="1.8"
            >
                <circle cx="12" cy="9" r="4.5" />
                <path d="M9.5 13L8.4 20l3.6-2.2 3.6 2.2-1.1-7" />
                <path d="M10.4 9.1l1 1 2.2-2.3" />
            </svg>
        </div>
    );
}

export default function WomanBehindSparrc() {
    const [isOpen, setIsOpen] = useState(false);

    /* Prevent page scrolling when modal opens */
    useEffect(() => {
        if (!isOpen) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsOpen(false);
            }
        };

        window.addEventListener("keydown", handleEscape);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", handleEscape);
        };
    }, [isOpen]);

    return (
        <>
            {/* =========================================================
          INITIAL SECTION
      ========================================================== */}
            <section className="w-full overflow-hidden bg-white py-14 sm:py-16 md:py-20 lg:py-24">
                <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-10 px-5 sm:px-7 md:px-10 lg:grid-cols-[minmax(0,1fr)_480px] lg:gap-16 lg:px-12 xl:gap-20 xl:px-14">
                    {/* LEFT */}
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
                        <motion.h2
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
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
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
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
                                “Long before she became Dr Sujatha Pugazhendi, she was a dancer
                                and an athlete. Movement was how she first learnt to understand
                                her own body.”
                            </p>
                        </motion.div>

                        {/* Short description */}
                        <motion.p
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
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
                            Dr. Sujatha Pugazhendi built SPARRC on a simple, powerful idea:
                            prescribe exercise instead of medicine when movement is the
                            better answer. A Master's in Sports Physiotherapy gave her
                            clinical grounding, while training in yoga, acupuncture, and
                            integrative nutrition helped her see each person beyond their
                            injury. Today, she leads a network of centres across India with a
                            95% success rate in resolving pain without surgery - and
                            continues to explore how breath and movement can work together in
                            a more complete, everyday practice.
                        </motion.p>

                        {/* Know more */}
                        <motion.button
                            type="button"
                            onClick={() => setIsOpen(true)}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
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

                    {/* RIGHT IMAGE */}
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
                        className="mx-auto w-full max-w-[480px] lg:mx-0"
                    >
                        <PortraitCard />
                    </motion.div>
                </div>
            </section>

            {/* =========================================================
          KNOW MORE MODAL
      ========================================================== */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
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
                            if (event.target === event.currentTarget) {
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
              "
                        >
                            {/* Close */}
                            <button
                                type="button"
                                onClick={() => setIsOpen(false)}
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
                                {/* =====================
                    MODAL LEFT
                ====================== */}
                                <div>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.6,
                                            delay: 0.08,
                                            ease,
                                        }}
                                    >
                                        <p className="text-[11px] font-[600] uppercase tracking-[0.025em] text-[#333] sm:text-[12px]">
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

                                        <div className="mt-7 border-b border-[#E5E7EC] pb-6">
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
                                                “Long before she became Dr Sujatha Pugazhendi, she was a
                                                dancer and an athlete. Movement was how she first learnt
                                                to understand her own body.”
                                            </p>
                                        </div>
                                    </motion.div>

                                    {/* Detail sections */}
                                    <div className="mt-7 space-y-8 sm:mt-8 sm:space-y-10">
                                        {detailSections.map((section, index) => (
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
                                                    delay: 0.16 + index * 0.1,
                                                    ease,
                                                }}
                                            >
                                                <div className="flex items-center gap-3">
                                                    <div className="h-[22px] w-[3px] rounded-full bg-[#5630FF]" />

                                                    <h3
                                                        className="
                              text-[14px]
                              font-[700]
                              uppercase
                              leading-[1.3]
                              tracking-[-0.01em]
                              text-[#111]
                              sm:text-[15px]
                            "
                                                    >
                                                        {section.title}
                                                    </h3>
                                                </div>

                                                <p
                                                    className="
                            mt-4
                            max-w-[760px]
                            text-[13px]
                            leading-[1.8]
                            text-[#767F8F]
                            sm:text-[14px]
                          "
                                                >
                                                    {section.description}
                                                </p>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* =====================
                    MODAL RIGHT
                ====================== */}
                                <div className="w-full">
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
                                        className="mx-auto w-full max-w-[480px] lg:mx-0"
                                    >
                                        <PortraitCard />
                                    </motion.div>

                                    {/* Awards */}
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
                                        <h3 className="text-[13px] font-[700] uppercase tracking-[-0.01em] text-[#181818] sm:text-[14px]">
                                            HONOURS &amp; RECOGNITION
                                        </h3>

                                        <div className="mt-5 space-y-5">
                                            {awards.map((award) => (
                                                <div
                                                    key={award.title}
                                                    className="flex items-start gap-4"
                                                >
                                                    <AwardIcon />

                                                    <div>
                                                        <h4 className="text-[12px] font-[700] leading-[1.4] text-[#151515] sm:text-[13px]">
                                                            {award.title}
                                                        </h4>

                                                        <p className="mt-1 text-[10px] leading-[1.5] text-[#89909E] sm:text-[11px]">
                                                            {award.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
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