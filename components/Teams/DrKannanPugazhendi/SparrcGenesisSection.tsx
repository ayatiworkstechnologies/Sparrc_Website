"use client";

import Image from "next/image";
import { Trophy } from "lucide-react";
import { motion, type Variants } from "framer-motion";

type Contribution = {
  year: string;
  title: string;
  description: string;
};

type ImpactItem = {
  title: string;
  description: string;
};

const contributions: Contribution[] = [
  {
    year: "1996",
    title: "Sports Physician for at the Atlanta Olympics",
    description:
      "providing medical expertise at the world’s biggest sporting event.",
  },
  {
    year: "1989",
    title:
      "Team Physician for the Indian Cricket Team during the West Indies series",
    description: "marking the beginning of his international career.",
  },
  {
    year: "2002",
    title: "Team Physician for the Indian Hockey Team at World Cup",
    description:
      "ensuring elite athlete performance and injury management on the global stage.",
  },
];

const impactItems: ImpactItem[] = [
  {
    title: "Training & Mentorship",
    description:
      "He has trained medical professionals, physiotherapists, nutritionists, and elite athletes, shaping the next generation of sports medicine experts.",
  },
  {
    title: "Thought Leadership",
    description:
      "A prolific writer, he has contributed articles and Q&A series to leading publications, including The Indian Express and The Hindu.",
  },
  {
    title: "Innovative Fitness Medicine (2017)",
    description:
      "In 2017, he pioneered the concept of Fitness Medicine, establishing a new domain focused on lifestyle disease management.",
  },
  {
    title: "Institution Building",
    description:
      "As the founder of the Indian Institute of Sports Medicine (IISM), he has spearheaded specialised education in sports medicine.",
  },
  {
    title: "Academia",
    description:
      "Currently, he serves as a visiting faculty member at IIM Rohtak in the Department of Sports Management.",
  },
  {
    title: "Social Impact & Inclusivity",
    description:
      "Dedicated to community service, he provides free consultations to economically disadvantaged individuals.",
  },
];

const smoothEase = [0.16, 1, 0.3, 1] as const;

const headingVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 25,
    filter: "blur(5px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.75,
      ease: smoothEase,
    },
  },
};

const imageVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -35,
    scale: 0.97,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: smoothEase,
    },
  },
};

const contentVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 35,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: smoothEase,
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
      duration: 0.7,
      ease: smoothEase,
    },
  },
};

export default function SparrcGenesisSection() {
  return (
    <section className="overflow-hidden bg-white px-4 py-12 font-jost sm:px-6 sm:py-16 md:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto w-full max-w-[1160px]">
        {/* Genesis section */}
        <div className="grid items-start gap-10 lg:grid-cols-[0.82fr_1.35fr] lg:gap-14">
          {/* Left image and highlight card */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.25,
              margin: "0px 0px -50px 0px",
            }}
          >
            <motion.div
              whileHover={{
                y: -5,
                transition: {
                  duration: 0.3,
                  ease: smoothEase,
                },
              }}
              className="group"
            >
              <div className="relative aspect-[1.48/1] w-full overflow-hidden rounded-[14px] bg-[#eeeeee]">
                <Image
                  src="/images/sparrc-genesis.png"
                  alt="SPARRC Institute fitness and rehabilitation centre"
                  fill
                  sizes="(max-width: 1023px) 100vw, 40vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                />
              </div>

              <motion.div
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
                  ease: smoothEase,
                  delay: 0.15,
                }}
                className="mt-5 flex min-h-[104px] items-center gap-4 rounded-[11px] border border-[#c3e9fb] bg-[#d7f1fd] px-5 py-5 sm:px-6"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#cae9fb]">
                  <Trophy
                    size={20}
                    strokeWidth={1.8}
                    className="text-[#1774d5]"
                  />
                </div>

                <div className="min-w-0">
                  <h3 className="text-[12px] font-bold leading-5 text-[#2479d3] sm:text-[13px]">
                    1996 Atlanta Olympics &amp; 2002 World Cup
                  </h3>

                  <p className="mt-2 text-[9px] leading-5 text-[#526374] sm:text-[10px]">
                    International Contributions &amp; Global Impact.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right genesis content */}
          <motion.div
            variants={contentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
              margin: "0px 0px -50px 0px",
            }}
          >
            <div className="flex items-center gap-3">
              <span className="h-2.5 w-2.5 shrink-0 rotate-45 bg-[#2d75c0]" />

              <h2 className="text-[22px] font-extrabold leading-[1.25] tracking-[-0.02em] text-[#171717] sm:text-[25px] md:text-[27px]">
                The Genesis of SPARRC Institute
              </h2>
            </div>

            <p className="mt-6 text-[12px] leading-[1.8] text-[#858585] sm:text-[13px] md:text-[14px]">
              With over two decades of service as the Medical Officer at the
              YMCA College of Physical Education, Dr. Kannan identified the
              urgent need for accessible sports medicine. In response, he
              founded the Fitness Foundation Academy, a centre dedicated to
              supporting underprivileged athletes. His vision led to the
              creation of SPARRC (Sports Performance Assessment, Rehabilitation
              &amp; Research Counseling) Institute in 2006, which has since
              expanded into a nationwide chain of Sports and Fitness Medicine
              centres.
            </p>

            <h3 className="mt-6 text-[13px] font-extrabold leading-6 text-[#252525] sm:text-[14px]">
              International Contributions &amp; Global Impact
            </h3>

            <div className="mt-5 space-y-5">
              {contributions.map((contribution, index) => (
                <motion.div
                  key={`${contribution.year}-${contribution.title}`}
                  initial={{
                    opacity: 0,
                    x: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.55,
                    margin: "0px 0px -20px 0px",
                  }}
                  transition={{
                    duration: 0.6,
                    ease: smoothEase,
                    delay: index * 0.08,
                  }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-[7px] h-[7px] w-[7px] shrink-0 rounded-full bg-[#ea562b]" />

                  <div>
                    <p className="text-[11px] font-semibold leading-5 text-[#343434] sm:text-[12px]">
                      <strong className="font-extrabold">
                        {contribution.year}
                      </strong>{" "}
                      — {contribution.title}
                    </p>

                    <p className="mt-1 text-[9px] leading-5 text-[#939393] sm:text-[10px]">
                      {contribution.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Revolutionizing section */}
        <motion.div
          initial={{
            opacity: 0,
            y: 45,
            scale: 0.985,
            filter: "blur(7px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
          }}
          viewport={{
            once: true,
            amount: 0.12,
            margin: "0px 0px -70px 0px",
          }}
          transition={{
            duration: 0.9,
            ease: smoothEase,
          }}
          className="mt-14 rounded-[16px] bg-white px-4 py-8 shadow-[0_14px_44px_rgba(0,0,0,0.12)] sm:mt-16 sm:px-6 sm:py-9 md:px-8 lg:mt-20"
        >
          <motion.div
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.5,
            }}
          >
            <div className="flex items-center gap-3">
              <span className="h-2.5 w-2.5 shrink-0 rotate-45 bg-[#2d75c0]" />

              <h2 className="text-[21px] font-extrabold leading-[1.3] tracking-[-0.02em] text-[#171717] sm:text-[24px] md:text-[26px]">
                Revolutionizing Fitness &amp; Sports Medicine
              </h2>
            </div>

            <p className="mt-3 text-[11px] leading-6 text-[#898989] sm:text-[12px] md:text-[13px]">
              Dr Kannan has played a transformative role in shaping India’s
              sports and fitness landscape. His extensive contributions
              include:
            </p>
          </motion.div>

          <div className="mt-8 grid grid-cols-1 items-stretch gap-5 md:grid-cols-2">
            {impactItems.map((item, index) => (
              <motion.article
                key={item.title}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.35,
                  margin: "0px 0px -35px 0px",
                }}
                transition={{
                  delay: (index % 2) * 0.08,
                }}
                whileHover={{
                  y: -5,
                  transition: {
                    duration: 0.28,
                    ease: "easeOut",
                  },
                }}
                className="group flex h-full min-h-[112px] flex-col justify-center rounded-[12px] border border-[#dedede] bg-white px-5 py-5 transition-all duration-300 hover:border-[#bcd9f3] hover:shadow-[0_12px_28px_rgba(37,113,190,0.09)] sm:min-h-[118px] sm:px-6"
              >
                <h3 className="text-[13px] font-bold leading-5 text-[#1972d4] sm:text-[14px]">
                  {item.title}
                </h3>

                <p className="mt-2 text-[10px] leading-[1.7] text-[#858585] sm:text-[11px]">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}