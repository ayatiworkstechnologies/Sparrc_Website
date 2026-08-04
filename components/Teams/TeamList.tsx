"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Sujatha Pugazhendi",
    role: "Founder & CEO",
    image: "/images/team-1.png",
    description:
      "Sujatha is a trained Physiotherapist who wished to take Sports Medicine to all...",
    href: "/teams/sujatha-pugazhendi",
  },
  {
    name: "Dr. Kannan Pugazhendi",
    role: "Co-Founder",
    image: "/images/team-2.png",
    description:
      "Dr. Kannan Pugazhendi graduated from Madras Medical College and dedicated his career to sports and fitness medicine...",
    href: "/teams/dr-kannan-pugazhendi",
  },
  {
    name: "Ganesh",
    role: "CTO",
    image: "/images/team-3.png",
    description:
      "Ganesh has a technology background and joined SPARRC as the CTO in 2012, now heading our technology operations...",
    href: "/teams/ganesh",
  },
  {
    name: "Sumitha",
    role: "General Manager",
    image: "/images/team-4.png",
    description:
      "Sumitha’s transformative and rewarding journey with SPARRC began in 2012 as a physiotherapist...",
    href: "/teams/sumitha",
  },
  {
    name: "Dr. Aravind",
    role: "Primary Care Physician",
    image: "/images/team-5.png",
    description:
      "Dr. Aravind is a Primary Care Physician currently pursuing his fellowship in Fitness and Sports Medicine...",
    href: "/teams/dr-aravind",
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function TeamList() {
  return (
    <section className="overflow-hidden bg-[#f9f9f9] px-6 py-20 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{  
            y: 45,
            opacity: 0,
            filter: "blur(8px)",
          }}
          whileInView={{
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
          }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            duration: 1.1,
            ease,
          }}
          className="text-center"
        >
          <motion.h1 className="mt-5 font-jost text-[30px] font-bold leading-tight tracking-[-0.035em] text-[#17141d] sm:text-[38px] lg:text-[46px]">
            Meet Our Management Team
          </motion.h1>

          <motion.p className="mx-auto mt-4 max-w-[640px] text-[14px] leading-7 text-[#716b79] sm:text-[15px]">
            Meet the leadership team guiding SPARRC’s mission in sports
            medicine, rehabilitation, fitness and scientific healthcare.
          </motion.p>
        </motion.div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.href}
              initial={{
                y: 70,
                opacity: 0,
                scale: 0.95,
                filter: "blur(10px)",
              }}
              whileInView={{
                y: 0,
                opacity: 1,
                scale: 1,
                filter: "blur(0px)",
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 1,
                delay: index * 0.12,
                ease,
              }}
              whileHover={{
                y: -10,
              }}
              className="group overflow-hidden rounded-2xl bg-white transition-shadow duration-300 hover:shadow-[0_20px_45px_rgba(0,0,0,0.10)]"
            >
              <div className="relative h-[250px] overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-5">
                <h3 className="text-[15px] font-extrabold text-black">
                  {member.name}
                </h3>

                <p className="mt-2 text-[12px] text-gray-500">
                  {member.role}
                </p>

                <p className="mt-4 line-clamp-2 text-[13px] leading-6 text-black">
                  {member.description}
                </p>

                <Link
                  href={member.href}
                  aria-label={`Read more about ${member.name}`}
                  className="mt-5 inline-flex items-center gap-2 text-[13px] font-extrabold text-black transition group-hover:text-[#4D1EFF]"
                >
                  Read more

                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}