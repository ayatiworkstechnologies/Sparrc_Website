"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Daniel Amalan",
    role: "Chief Physiotherapist",
    image: "/images/Daniel.png",
    // socials: [
    //   { name: "Facebook", icon: "/icons/facebook.svg", href: "#" },
    //   { name: "X", icon: "/icons/x.svg", href: "#" },
    //   { name: "Instagram", icon: "/icons/instagram.svg", href: "#" },
    //   { name: "YouTube", icon: "/icons/youtube.svg", href: "#" },
    //   { name: "LinkedIn", icon: "/icons/linkedin.svg", href: "#" },
    // ],
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function OurTeam() {
  return (
    <section className="overflow-hidden bg-white px-6 py-20 md:px-10 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ y: 30, opacity: 0, filter: "blur(8px)" }}
          whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease }}
          className="text-center text-[26px] font-extrabold text-black md:text-[34px]"
        >
          Our Team
        </motion.h2>

        <div className="mt-12 flex justify-center">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ y: 60, opacity: 0, scale: 0.94, filter: "blur(10px)" }}
              whileInView={{ y: 0, opacity: 1, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 1.2, delay: index * 0.12, ease }}
              whileHover={{ y: -8 }}
              className="group w-full max-w-[310px] overflow-hidden rounded-[18px] bg-white shadow-[0_18px_45px_rgba(0,0,0,0.10)] transition-shadow duration-300 hover:shadow-[0_24px_60px_rgba(77,30,255,0.16)]"
            >
              <div className="relative h-[250px] overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="310px"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="px-5 py-5">
                <h3 className="text-[15px] font-extrabold text-black">
                  {member.name}
                </h3>

                <p className="mt-3 text-[12px] text-black">{member.role}</p>

                {/* <div className="mt-6 flex items-center gap-4">
                  {member.socials.map((social) => (
                    <Link
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-[0_6px_18px_rgba(0,0,0,0.08)] transition hover:-translate-y-1"
                    >
                      <Image
                        src={social.icon}
                        alt={social.name}
                        width={14}
                        height={14}
                        className="h-[14px] w-[14px] object-contain"
                      />
                    </Link>
                  ))}
                </div> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}