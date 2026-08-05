"use client";

import Image from "next/image";
import {
  CircleDotDashed,
  Clapperboard,
  type LucideIcon,
} from "lucide-react";
import { motion, type Variants } from "framer-motion";

type Initiative = {
  title: string;
  description: string;
};

type HighlightCard = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const initiatives: Initiative[] = [
  {
    title: "Dance Medicine",
    description:
      "As a consultant at Kalakshetra, he pioneered a curriculum integrating sports medicine into classical dance training.",
  },
  {
    title: "Marathon Medicine",
    description:
      "Serving as the official Sports Physician for the Chennai, Hyderabad, and Delhi Marathons, he has been instrumental in athlete health management.",
  },
  {
    title: "Cancer Awareness & Public Health",
    description:
      "Partnered with the Cancer Institute, Chennai, in multiple awareness programs emphasizing the role of fitness in cancer prevention. Organized the “Race Against Cancer” Chennai Marathon (2014) and Youth Health Mela to promote health awareness among young people.",
  },
  {
    title: "Sports Excellence & Administration",
    description:
      "Served as an elected board member of the Chief Minister’s Project – SDAT (Sports Development Authority of Tamil Nadu), contributing to India’s Olympic 2016 preparations. Played a pivotal role in Special Olympics – National Level by training primary care teams for handling on-field and off-field sports injuries.",
  },
];

const sports = [
  "Cricket",
  "Hockey",
  "Football",
  "Squash",
  "Rugby",
  "Triathlon",
  "Volleyball (Women)",
  "Sailing",
  "Softball (Girls)",
  "Korfball",
];

const highlightCards: HighlightCard[] = [
  {
    title: "Shaping India’s Sports Excellence",
    description:
      "Elected Board Member – Chief Minister’s Project, SDAT (Sports Development Authority of Tamil Nadu), contributing to India’s 2016 Olympic preparations. Key figure in the Special Olympics – National Level, training primary care teams for on-field and off-field sports injury management.",
    icon: CircleDotDashed,
  },
  {
    title: "Media & Public Health ‘Ollibelly’",
    description:
      "Created “Ollibelly”, a groundbreaking weight-loss reality show on Star Vijay, where contestants collectively shed over 1,000 kg in less than three months.",
    icon: Clapperboard,
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: "blur(6px)",
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

const leftVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -34,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease,
    },
  },
};

const rightVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 34,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
    scale: 0.98,
    filter: "blur(5px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.72,
      ease,
    },
  },
};

const tagVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
    scale: 0.94,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease,
    },
  },
};

export default function PathbreakingInitiativesSection() {
  return (
    <section className="overflow-hidden bg-white font-jost">
      {/* Pathbreaking initiatives */}
      <div className="px-4 py-12 sm:px-6 sm:py-16 md:px-8 lg:px-10 lg:py-18 xl:px-12">
        <div className="mx-auto w-full max-w-[1180px]">
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.62fr)_minmax(360px,0.9fr)] lg:gap-12 xl:gap-10">
            {/* Left content */}
            <motion.div
              variants={leftVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.15,
                margin: "0px 0px -60px 0px",
              }}
              className="min-w-0"
            >
              <div className="flex items-start gap-3">
                <span className="mt-[17px] h-2.5 w-2.5 shrink-0 rotate-45 bg-[#2879c8]" />

                <h2 className="m-0 text-[22px] font-extrabold leading-[1.25] tracking-[-0.025em] text-[#1b1920] sm:text-[25px] md:text-[27px]">
                  Pathbreaking Initiatives and Contributions
                </h2>
              </div>

              <motion.p
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.4,
                }}
                className="mb-0 mt-7 max-w-[900px] text-[12px] leading-[1.8] text-[#878787] sm:text-[13px] md:text-[14px]"
              >
                <strong className="font-bold text-[#3d3d3d]">
                  Pediatric Sports Medicine:
                </strong>{" "}
                He developed FAMES (Fitness Adaptation and Movement Education
                Services), an initiative enhancing the physical well-being of
                specially-abled children.{" "}
                <strong className="font-bold text-[#3d3d3d]">
                  Law Enforcement &amp; Military Training:
                </strong>{" "}
                Revamped Tamil Nadu Police’s outdoor training manual,
                incorporating cutting-edge fitness methodologies. Advised the
                Officers Training Academy (OTA) in 2002-03 on strategies to
                prevent pelvic bone stress fractures in women cadets. Designed
                a specialised fitness program for the Central Industrial
                Security Force (CISF), Hyderabad.
              </motion.p>

              {/* Initiatives panel */}
              <div className="mt-7 rounded-[14px] bg-[#fafafa] px-4 py-4 sm:px-5 sm:py-5">
                {initiatives.map((item, index) => (
                  <motion.article
                    key={item.title}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                      once: true,
                      amount: 0.45,
                      margin: "0px 0px -30px 0px",
                    }}
                    transition={{
                      delay: index * 0.07,
                    }}
                    className="py-3 first:pt-0 last:pb-0"
                  >
                    <h3 className="m-0 text-[14px] font-extrabold leading-5 text-[#242229] sm:text-[15px]">
                      {item.title}
                    </h3>

                    <p className="mb-0 mt-1.5 max-w-[900px] text-[11px] leading-[1.65] text-[#858585] sm:text-[12px]">
                      {item.description}
                    </p>
                  </motion.article>
                ))}
              </div>
            </motion.div>

            {/* Right image and highlight */}
            <motion.div
              variants={rightVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
                margin: "0px 0px -60px 0px",
              }}
              className="w-full min-w-0"
            >
              <motion.div
                whileHover={{
                  y: -5,
                  transition: {
                    duration: 0.3,
                    ease,
                  },
                }}
                className="group"
              >
                <div className="relative h-[300px] w-full overflow-hidden rounded-[16px] bg-[#111827] sm:h-[380px] lg:h-[425px] xl:h-[440px]">
                  <Image
                    src="/images/pathbreaking-initiatives.png"
                    alt="Athlete preparing at a running track"
                    fill
                    sizes="(max-width: 1023px) 100vw, 38vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                  />
                </div>
              </motion.div>

              <HighlightInfoCard
                item={highlightCards[0]}
                className="mt-6"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Elite athlete sports */}
      <div className="border-y border-[#f0f1f3] bg-white px-4 py-11 sm:px-6 sm:py-14 md:px-8">
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.35,
          }}
          className="mx-auto w-full max-w-[1020px] text-center"
        >
          <h2 className="m-0 text-[19px] font-extrabold tracking-[-0.02em] text-[#29262d] sm:text-[21px]">
            Sports Physician to India’s Elite Athletes
          </h2>

          <p className="mb-0 mt-2 text-[12px] leading-6 text-[#8b8b8b] sm:text-[13px]">
            Dr. Kannan has worked with India’s top national teams, including
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-2.5 sm:gap-3">
            {sports.map((sport, index) => (
              <motion.span
                key={sport}
                variants={tagVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.6,
                }}
                transition={{
                  delay: index * 0.04,
                }}
                whileHover={{
                  y: -3,
                  scale: 1.03,
                  transition: {
                    duration: 0.22,
                  },
                }}
                className="inline-flex min-h-[32px] items-center rounded-full bg-[#d8ecfb] px-4 py-2 text-[10px] font-semibold leading-none text-[#277fc8] sm:px-5 sm:text-[11px]"
              >
                {sport}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Visionary section */}
      <div className="bg-[#f6f8fa] px-4 py-12 sm:px-6 sm:py-16 md:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto w-full max-w-[1160px]">
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.4,
            }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-3">
              <span className="h-2.5 w-2.5 shrink-0 rotate-45 bg-[#2879c8]" />

              <h2 className="m-0 text-[23px] font-extrabold leading-[1.25] tracking-[-0.025em] text-[#252229] sm:text-[27px] md:text-[30px]">
                A Visionary in Fitness &amp; Media
              </h2>
            </div>

            <p className="mx-auto mb-0 mt-3 max-w-[800px] text-[12px] leading-[1.75] text-[#878787] sm:text-[13px] md:text-[14px]">
              Continues to push the boundaries of non-invasive and conservative
              medical approaches in sports medicine, earning numerous
              accolades for his contributions to public health.
            </p>
          </motion.div>

          <div className="mt-10 grid items-center gap-8 md:grid-cols-[0.8fr_1.4fr] md:gap-12 lg:mt-12 lg:gap-16">
            <motion.div
              variants={leftVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.3,
              }}
            >
              <HighlightInfoCard item={highlightCards[1]} />
            </motion.div>

            <motion.div
              variants={rightVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.3,
              }}
            >
              <p className="m-0 text-[13px] leading-[1.85] text-[#838383] sm:text-[14px]">
                Dr. Kannan Pugazhendi’s work has redefined sports medicine in
                India, bridging the gap between medical science, fitness, and
                social impact. His unwavering dedication ensures that athletes,
                law enforcement personnel, and everyday individuals benefit
                from cutting-edge, evidence-based fitness and rehabilitation
                solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HighlightInfoCard({
  item,
  className = "",
}: {
  item: HighlightCard;
  className?: string;
}) {
  const Icon = item.icon;

  return (
    <motion.article
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.3,
        margin: "0px 0px -35px 0px",
      }}
      whileHover={{
        y: -5,
        transition: {
          duration: 0.28,
          ease: "easeOut",
        },
      }}
      className={`group rounded-[15px] border border-[#bee6f9] bg-[#d8f1fd] px-5 py-6 transition-shadow duration-300 hover:shadow-[0_15px_35px_rgba(32,126,186,0.14)] sm:px-6 sm:py-7 ${className}`}
    >
      <div className="flex items-center gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#c7e8fa] transition-transform duration-300 group-hover:scale-105">
          <Icon
            size={19}
            strokeWidth={1.9}
            className="text-[#227be0]"
          />
        </div>

        <h3 className="m-0 text-[13px] font-bold leading-5 text-[#2078da] sm:text-[14px]">
          {item.title}
        </h3>
      </div>

      <p className="mb-0 mt-4 text-[10px] leading-[1.75] text-[#3f5365] sm:text-[11px]">
        {item.description}
      </p>
    </motion.article>
  );
}