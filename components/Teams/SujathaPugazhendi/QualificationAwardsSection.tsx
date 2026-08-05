"use client";

import {
  Activity,
  Anchor,
  BrainCircuit,
  BriefcaseBusiness,
  Eye,
  Flag,
  GraduationCap,
  Heart,
  Palette,
  Trophy,
  Utensils,
  Zap,
} from "lucide-react";
import { motion, type Variants } from "framer-motion";

type Qualification = {
  category: string;
  title: string;
  icon: React.ElementType;
};

type AwardItem = {
  year: string;
  title: string;
  description: string;
  icon: React.ElementType;
};

const qualifications: Qualification[] = [
  {
    category: "Therapy",
    title: "Master in Sports Physical Therapy",
    icon: Activity,
  },
  {
    category: "Creative",
    title: "Expressive Art Therapist",
    icon: Palette,
  },
  {
    category: "Fitness",
    title: "Aerobic / Zumba Instructor",
    icon: Zap,
  },
  {
    category: "Energy Medicine",
    title: "Reiki Practitioner",
    icon: Heart,
  },
  {
    category: "Psychology",
    title: "MBTI Personality Practitioner",
    icon: BrainCircuit,
  },
  {
    category: "Holistic Health",
    title: "Acupuncturist",
    icon: Anchor,
  },
  {
    category: "Mind–Body",
    title: "Hypnotherapist",
    icon: Eye,
  },
  {
    category: "Business Executive",
    title: "Entrepreneurial Edge – LBS",
    icon: BriefcaseBusiness,
  },
  {
    category: "Leadership",
    title: "Leadership Principles – Harvard",
    icon: Flag,
  },
  {
    category: "Nutrition",
    title: "Integrative Nutrition Coach (INHC)",
    icon: Utensils,
  },
];

const awards: AwardItem[] = [
  {
    year: "EST. 2013",
    title: "Best Entrepreneur Award",
    description:
      "Presented by MSME – Government of Tamilnadu for outstanding enterprise stewardship.",
    icon: Trophy,
  },
  {
    year: "EST. 2018",
    title: "Honorary Doctorate (D.Litt)",
    description:
      "Doctor of Letters awarded by The International Tamil University, USA for eminent scholarship.",
    icon: GraduationCap,
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

const headingVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 22,
    filter: "blur(5px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.975,
    filter: "blur(5px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease,
    },
  },
};

const awardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 38,
    scale: 0.97,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease,
    },
  },
};

export default function QualificationAwardsSection() {
  return (
    <section className="overflow-hidden bg-white px-4 py-12 font-jost sm:px-6 sm:py-16 md:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto w-full max-w-[1160px]">
        {/* Qualification heading */}
        <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.55,
            margin: "0px 0px -40px 0px",
          }}
        >
          <div className="flex items-center gap-3">
            <span className="h-2.5 w-2.5 shrink-0 rotate-45 bg-[#2e78c4]" />

            <h2 className="text-[24px] font-extrabold leading-none tracking-[-0.025em] text-[#111111] sm:text-[27px] md:text-[29px]">
              Qualification
            </h2>
          </div>

          <p className="mt-3 text-[9px] font-medium uppercase tracking-[0.03em] text-[#9a9a9a] sm:text-[10px]">
            10 Specializations &amp; Certifications
          </p>
        </motion.div>

        {/* Qualifications grid */}
        <div className="mt-7 grid grid-cols-1 items-stretch gap-x-9 gap-y-6 md:grid-cols-2">
          {qualifications.map((qualification, index) => {
            const Icon = qualification.icon;

            return (
              <motion.article
                key={qualification.title}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.4,
                  margin: "0px 0px -35px 0px",
                }}
                transition={{
                  delay: (index % 2) * 0.09,
                }}
                whileHover={{
                  y: -4,
                  transition: {
                    duration: 0.28,
                    ease: "easeOut",
                  },
                }}
                className="group flex min-h-[62px] items-center rounded-[10px] border border-[#ccefe9] bg-white px-3 py-3 transition-all duration-300 hover:border-[#9dded3] hover:shadow-[0_12px_28px_rgba(25,151,134,0.09)] sm:min-h-[66px]"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[8px] bg-[#dcecff] transition-transform duration-300 group-hover:scale-105 sm:h-10 sm:w-10">
                  <Icon
                    size={18}
                    strokeWidth={1.9}
                    className="text-[#2f7bea]"
                  />
                </div>

                <div className="min-w-0 pl-4">
                  <p className="!text-[7px] font-semibold uppercase leading-none tracking-[0.02em] text-[#8c8c8c] sm:!text-[10px]">
                    {qualification.category}
                  </p>

                  <h3 className="mt-1 !text-[10px] font-semibold leading-[1.35] text-[#30343b] sm:!text-[15px]">
                    {qualification.title}
                  </h3>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Awards heading */}
        <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.55,
            margin: "0px 0px -40px 0px",
          }}
          className="mt-14 sm:mt-16 lg:mt-20"
        >
          <div className="flex items-center gap-3">
            <span className="h-2.5 w-2.5 shrink-0 rotate-45 bg-[#2e78c4]" />

            <h2 className="text-[24px] font-extrabold leading-none tracking-[-0.025em] text-[#111111] sm:text-[27px] md:text-[29px]">
              Awards
            </h2>
          </div>

          <p className="mt-3 text-[9px] font-medium uppercase tracking-[0.03em] text-[#9a9a9a] sm:text-[10px]">
            2 Core Recognitions
          </p>
        </motion.div>

        {/* Awards grid */}
        <div className="mt-8 grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 md:gap-8">
          {awards.map((award, index) => {
            const Icon = award.icon;

            return (
              <motion.article
                key={award.title}
                variants={awardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.35,
                  margin: "0px 0px -40px 0px",
                }}
                transition={{
                  delay: index * 0.12,
                }}
                whileHover={{
                  y: -6,
                  transition: {
                    duration: 0.3,
                    ease: "easeOut",
                  },
                }}
                className="group relative flex min-h-[132px] flex-col justify-center overflow-hidden rounded-[14px] border border-[#bfe7fb] bg-[#d8f1ff] px-5 py-5 transition-shadow duration-300 hover:shadow-[0_16px_34px_rgba(32,126,186,0.14)] sm:min-h-[140px] sm:px-6"
              >
                <Icon
                  size={23}
                  strokeWidth={1.8}
                  className="absolute right-5 top-5 text-[#2480e2] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                />

                <div className="pr-10">
                  <span className="inline-flex rounded-full bg-[#1776db] px-2.5 py-1 text-[8px] font-bold uppercase leading-none text-white sm:text-[9px]">
                    {award.year}
                  </span>

                  <h3 className="mt-4 text-[15px] font-extrabold uppercase leading-[1.35] tracking-[-0.01em] text-[#1f79ce] sm:text-[16px]">
                    {award.title}
                  </h3>

                  <p className="mt-2 text-[10px] leading-[1.65] text-[#4f5962] sm:text-[11px]">
                    {award.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}