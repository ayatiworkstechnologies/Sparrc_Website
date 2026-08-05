"use client";

import { motion, type Variants } from "framer-motion";

type Skill = {
  title: string;
  description: string;
};

const skills: Skill[] = [
  {
    title: "Bonding with Organizations",
    description: "Bonding with Organizations, Customers and Employees.",
  },
  {
    title: "Creating Innovative",
    description: "Creating Innovative business products.",
  },
  {
    title: "Strategic Planning",
    description: "Strategic Planning and Execution.",
  },
  {
    title: "Product Analysis",
    description: "Product Analysis and Development.",
  },
  {
    title: "Introduced a trailblazing concept",
    description:
      "Introduced a trailblazing concept in the Healthcare industry.",
  },
];

const experiencePoints = [
  "Expanding horizons as educational organization – IISM COLLEGE OF SPORTS & FITNESS MEDICINE",
  "SPARRC Publication – Fitness Unlimited! Monthly Newsletter.",
  "SPARRC Publication – Fitopedia! book (Volume 1).",
  "SPARRC Publication – Fitnessense, by Dr Kannan Pugazhendhi.",
  "FAMES – Fitness Adaptation and Movement Education Services for specially-abled.",
  "Celestial Spark – Holistic healing Centre through alternative medicine.",
];

const ease = [0.16, 1, 0.3, 1] as const;

const headingVariants: Variants = {
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
      duration: 0.75,
      ease,
    },
  },
};

const skillVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
    scale: 0.97,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.75,
      ease,
    },
  },
};

const experienceVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 45,
    scale: 0.985,
    filter: "blur(7px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease,
    },
  },
};

const listItemVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease,
    },
  },
};

export default function SkillsExperienceSection() {
  return (
    <section className="overflow-hidden bg-white px-4 py-12 font-jost sm:px-6 sm:py-16 md:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto w-full max-w-[1160px]">
        {/* Skills */}
        <div>
          <motion.div
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.5,
              margin: "0px 0px -40px 0px",
            }}
            className="flex items-center gap-3"
          >
            <span className="h-2.5 w-2.5 shrink-0 rotate-45 bg-[#2f75bb]" />

            <h2 className="text-[24px] font-extrabold leading-none tracking-[-0.02em] text-black sm:text-[27px] md:text-[29px]">
              Skills
            </h2>
          </motion.div>

          <div className="mt-9 grid grid-cols-1 items-stretch gap-x-11 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                variants={skillVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.35,
                  margin: "0px 0px -35px 0px",
                }}
                transition={{
                  delay: (index % 3) * 0.1,
                }}
                whileHover={{
                  y: -5,
                  transition: {
                    duration: 0.28,
                    ease: "easeOut",
                  },
                }}
                className="relative h-full"
              >
                <div className="absolute left-4 top-[-10px] z-10 max-w-[calc(100%-32px)] bg-white px-2">
                  <p className="line-clamp-1 text-[12px] font-semibold leading-5 text-[#171717] sm:text-[13px]">
                    {skill.title}
                  </p>
                </div>

                <div className="flex h-full min-h-[58px] items-center rounded-[7px] border border-[#cfe1f1] bg-white px-3 pb-2.5 pt-3.5 transition-all duration-300 hover:border-[#9fcce9] hover:shadow-[0_10px_24px_rgba(47,117,187,0.10)]">
                  <p className="line-clamp-2 text-[12px] leading-5 text-[#8a8a8a] sm:text-[13px]">
                    {skill.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <motion.div
          variants={experienceVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
            margin: "0px 0px -60px 0px",
          }}
          className="mt-12 rounded-[16px] bg-white px-5 py-8 shadow-[0_15px_44px_rgba(0,0,0,0.12)] sm:mt-14 sm:px-8 sm:py-9 md:px-9 lg:mt-16"
        >
          <motion.div
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.5,
            }}
            className="flex items-center gap-3"
          >
            <span className="h-2.5 w-2.5 shrink-0 rotate-45 bg-[#2f75bb]" />

            <h2 className="text-[24px] font-extrabold leading-none tracking-[-0.02em] text-black sm:text-[27px] md:text-[29px]">
              Experience
            </h2>
          </motion.div>

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.5,
            }}
            transition={{
              duration: 0.7,
              ease,
              delay: 0.1,
            }}
            className="mt-7 text-[13px] leading-[1.85] text-[#858585] sm:text-[14px]"
          >
            Over 18 years of running the business successfully. Financial
            growth and profitability of the company. Branding and Operations
            Administration. Establishing the business Facility as a chain all
            over the nation, presently 19 branches.
          </motion.p>

          <div className="mt-6 space-y-3.5">
            {experiencePoints.map((point, index) => (
              <motion.div
                key={point}
                variants={listItemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.6,
                  margin: "0px 0px -20px 0px",
                }}
                transition={{
                  delay: index * 0.07,
                }}
                className="flex items-start gap-3 rounded-[8px] px-0 py-0.5 transition-all duration-300 hover:translate-x-1"
              >
                <span className="mt-[8px] h-[7px] w-[7px] shrink-0 rounded-full bg-[#ea5525]" />

                <p className="text-[12px] font-semibold leading-6 text-[#171717] sm:text-[13px]">
                  {point}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}