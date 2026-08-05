"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const sectionVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 30,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.85,
            ease,
            staggerChildren: 0.12,
        },
    },
};

const contentVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 24,
        filter: "blur(5px)",
    },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 0.8,
            ease,
        },
    },
};

const imageVariants: Variants = {
    hidden: {
        opacity: 0,
        x: 35,
        scale: 0.97,
    },
    visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: {
            duration: 0.9,
            ease,
        },
    },
};

export default function SujathaVisionSection() {
    return (
        <section className="overflow-hidden bg-white px-4 py-12 font-jost sm:px-6 sm:py-16 md:px-8 lg:px-12 lg:py-20">
            <div className="mx-auto w-full max-w-[1160px]">
                {/* Top introduction */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.35,
                    }}
                    variants={sectionVariants}
                    className="mx-auto max-w-[1080px] text-center"
                >
                    <motion.h1
                        variants={contentVariants}
                        className="text-[23px] font-extrabold leading-[1.25] tracking-[-0.025em] text-[#111111] sm:text-[28px] lg:text-[31px]"
                    >
                        Dr. Sujatha Pugazhendi is a visionary
                    </motion.h1>

                    <motion.p
                        variants={contentVariants}
                        className="mx-auto mt-4 max-w-[1040px] text-[13px] font-normal leading-[1.75] text-[#8a8a8a] sm:text-[14px] md:text-[15px]"
                    >
                        entrepreneur and a pioneer in the field of Sports and Fitness
                        Medicine. As the co-founder of SPARRC Institute, she has played a
                        pivotal role in transforming rehabilitation and fitness services in
                        India. Since its inception in 2006, SPARRC has expanded to 19
                        centers across 9 locations, with a team of over 200
                        physiotherapists, 50+ trainers, and 12+ doctors. Under her
                        leadership, the institute has successfully rehabilitated over 1
                        million patients, boasting an impressive 95% success rate.
                    </motion.p>
                </motion.div>

                {/* Main card */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.18,
                        margin: "0px 0px -60px 0px",
                    }}
                    variants={sectionVariants}
                    className="relative mt-12 rounded-[16px] bg-white px-4 pb-5 pt-14 shadow-[0_14px_45px_rgba(0,0,0,0.12)] sm:mt-16 sm:px-6 sm:pb-6 sm:pt-16 md:px-8 lg:mt-20 lg:px-5 lg:pb-5 lg:pt-16"
                >
                    {/* Floating label */}
                    <motion.div
                        variants={contentVariants}
                        className="absolute left-4 top-[30px] -translate-y-1/2 sm:left-6 lg:left-4"
                    >
                        <div className="rounded-[12px] bg-[#d7effd] px-5 py-2.5 text-[12px] font-bold uppercase tracking-[0.01em] text-[#2181bf] sm:px-6 sm:text-[13px]">
                            Sujatha&apos;s Vision
                        </div>
                    </motion.div>

                    <div className="grid items-center gap-8 lg:grid-cols-[1.62fr_1fr] lg:gap-10">
                        {/* Left content */}
                        <motion.div
                            variants={contentVariants}
                            className="order-2 lg:order-1"
                        >
                            <div className="flex items-center gap-3">
                                <div className="relative h-5 w-5 shrink-0">
                                    <Image
                                        src="/icons/logo-icon.png"
                                        alt="SPARRC icon"
                                        fill
                                        sizes="20px"
                                        className="object-contain"
                                    />
                                </div>

                                <h2 className="text-[22px] font-extrabold leading-[1.25] tracking-[-0.02em] text-[#111111] sm:text-[26px] lg:text-[27px]">
                                    Dr. Sujatha Pugazhendi
                                </h2>
                            </div>

                            <p className="mt-5 text-[13px] leading-[1.68] text-[#8b8b8b] sm:text-[14px] lg:text-[14.5px]">
                                With a commitment to a flat organizational structure, Sujatha
                                has fostered a team of over 200 physiotherapists, empowering
                                them as decision-makers and strengthening SPARRC&apos;s impact.
                                She expanded her vision by launching the Indian Institute of
                                Sports Medicine, aiming to revolutionize how people approach
                                conditions linked to inactivity. A strong advocate for
                                inclusivity, she has introduced specialized programs such as
                                FAMES (Fitness Adaptation and Movement Education Services) for
                                the specially-abled and Celestial Spark, a holistic healing
                                center. A distinguished expert in Sports Physical Therapy,
                                Sujatha holds qualifications from prestigious institutions,
                                including Harvard Business School and London Business School.
                                Her expertise extends to acupuncture, hypnotherapy, expressive
                                arts therapy, and integrative nutrition coaching. Recognized as
                                trailblazer in healthcare, she was honored with the Best
                                Entrepreneur Award by MSME Tamil Nadu in 2013 and an Honorary
                                Doctorate (D.Litt) from The International Tamil University, USA
                                in 2018. Through SPARRC&apos;s groundbreaking initiatives,
                                Sujatha continues to push boundaries in health and rehab.
                            </p>
                        </motion.div>

                        {/* Right image */}
                        <motion.div
                            variants={imageVariants}
                            className="order-1 lg:order-2"
                        >
                            <motion.div
                                whileHover={{
                                    y: -5,
                                    transition: {
                                        duration: 0.35,
                                        ease,
                                    },
                                }}
                                className="overflow-hidden rounded-[11px]"
                            >
                                <div className="relative aspect-[1.36/1] w-full overflow-hidden bg-[#eeeeee]">
                                    <Image
                                        src="/images/team-1.png"
                                        alt="Dr. Sujatha Pugazhendi"
                                        fill
                                        sizes="(max-width: 1023px) 100vw, 38vw"
                                        className="object-cover object-center transition-transform duration-700 ease-out hover:scale-[1.035]"
                                    />
                                </div>

                                <div className="mt-3 rounded-[7px] border border-[#c2e8fb] bg-[#d9f1fd] px-4 py-2.5 text-center text-[12px] font-semibold text-[#5362ad] sm:text-[13px]">
                                    Founder &amp; CEO, SPARRC
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}