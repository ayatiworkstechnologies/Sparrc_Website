"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const aboutStats = [
  {
    icon: "/icons/heart-hand.png",
    text: "Has helped over 1 Million\nPatients to be free from Pain",
  },
  {
    icon: "/icons/handshake.png",
    text: "Has helped over 1 Million\nPatients to be free from Pain",
  },
];

export default function AboutUs() {
  return (
    <section className="overflow-hidden bg-white px-6 py-20 md:px-10 lg:px-16">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[60fr_40fr]">
        {/* Left 65% */}
        <motion.div
          initial={{ x: -90, opacity: 0, filter: "blur(10px)" }}
          whileInView={{ x: 0, opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 1.45, ease }}
        >
          <motion.p
            initial={{ y: 25, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.15, ease }}
            className="mb-5 text-[13px] font-bold uppercase tracking-wide text-black"
          >
            About Us
          </motion.p>

          <motion.div
            initial={{ scaleY: 0, opacity: 0 }}
            whileInView={{ scaleY: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.25, ease }}
            className="origin-top border-l-2 border-[#1FA6D8] pl-4"
          >
            <h2 className="max-w-[460px] text-[18px] font-bold leading-8 text-black md:text-[21px]">
              SPARRC was founded in 2006 by Dr. Kannan Pugazhendi & Mrs.
              Sujatha Pugazhendi.
            </h2>
          </motion.div>

          <motion.h3
            initial={{ y: 35, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.35, ease }}
            className="mt-9 text-[22px] font-bold text-black"
          >
            Since then, SPARRC :
          </motion.h3>

          <div className="mt-8 grid max-w-[660px] gap-8 sm:grid-cols-2">
            {aboutStats.map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  y: 45,
                  opacity: 0,
                  scale: 0.94,
                  filter: "blur(8px)",
                }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                  scale: 1,
                  filter: "blur(0px)",
                }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  duration: 1.15,
                  delay: 0.45 + index * 0.18,
                  ease,
                }}
                className="flex items-center gap-4"
              >
                <Image
                  src={item.icon}
                  alt="About icon"
                  width={42}
                  height={42}
                  className="h-[42px] w-[42px] object-contain"
                />

                <p className="whitespace-pre-line text-[13px] leading-5 text-black">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ y: 35, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.65, ease }}
            className="mt-9 max-w-[570px] text-[14px] leading-7 text-gray-500"
          >
            SPARRC has been the pioneer in Myofascial Trigger Point Therapy and
            Aqua Therapy.
          </motion.p>

          <motion.p
            initial={{ y: 35, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.75, ease }}
            className="mt-6 text-[16px] font-bold text-black"
          >
            Our offering is unique — We Prescribe Exercises — Not Medicines
          </motion.p>

          <motion.div
            initial={{ y: 35, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.85, ease }}
          >
            <Link
              href="/about"
              className="mt-7 inline-flex rounded-full bg-[#4D1EFF] px-8 py-3 text-[14px] font-bold text-white shadow-lg shadow-[#4D1EFF]/25 transition hover:scale-105"
            >
              Know More
            </Link>
          </motion.div>
        </motion.div>

        {/* Right 35% */}
        <motion.div
          initial={{
            x: 90,
            opacity: 0,
            scale: 0.94,
            rotate: 1.5,
            filter: "blur(12px)",
          }}
          whileInView={{
            x: 0,
            opacity: 1,
            scale: 1,
            rotate: 0,
            filter: "blur(0px)",
          }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 1.5, delay: 0.2, ease }}
          className="relative h-[300px] w-full overflow-hidden md:h-[390px] lg:h-[430px]"
        >
          <Image
            src="/images/about-us.png"
            alt="About SPARRC"
            fill
            sizes="(max-width: 1024px) 100vw, 35vw"
            className="object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}