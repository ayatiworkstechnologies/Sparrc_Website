"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const lotusData = {
  title: "The Blue Lotus",
  logo: "/images/blue-lotus.png",
  description:
    "Lotus, the national flower of India, signifies the journey rather progress of the soul from the primeval mud of materialism or tamas, through the waters of experience or rajas, into the bright sunshine of enlightenment or sattva. Blue and purple are colors of calmness and ambition. The Blue lotus has immense healing properties. It is anti-spasmodic, anti-inflammatory, and also boosts metabolism. It is considered as a cure for the general wellbeing of the body and mind. The five petals of blue lotus represent the five elements of nature which constitute not only the earth but also the human body. To connect it to SPARRC, it denotes the five areas of work viz., Different Assessments, Pain Management, Prescribed Exercise, Counselling and Research.",
};

const depthLayers = [
  {
    className:
      "h-[145px] w-[145px] sm:h-[185px] sm:w-[185px] md:h-[235px] md:w-[235px] lg:h-[275px] lg:w-[275px]",
    delay: 0.12,
    opacity: 0.95,
  },
  {
    className:
      "h-[190px] w-[190px] sm:h-[235px] sm:w-[235px] md:h-[295px] md:w-[295px] lg:h-[345px] lg:w-[345px]",
    delay: 0.28,
    opacity: 0.7,
  },
  {
    className:
      "h-[235px] w-[235px] sm:h-[285px] sm:w-[285px] md:h-[355px] md:w-[355px] lg:h-[410px] lg:w-[410px]",
    delay: 0.44,
    opacity: 0.42,
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function AboutBlueLotus() {
  return (
    <section className="relative overflow-hidden bg-[#fbfcff] px-4 py-8 sm:px-6 sm:py-10 md:px-10 md:py-12 lg:px-16 lg:py-14">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[4%] h-[250px] w-[250px] -translate-x-1/2 rounded-full bg-[#4d67c7]/10 blur-[90px] sm:h-[330px] sm:w-[330px] md:h-[440px] md:w-[440px]" />

        <div className="absolute left-[8%] top-[24%] h-[140px] w-[140px] rounded-full bg-[#524095]/7 blur-[80px] md:h-[210px] md:w-[210px]" />

        <div className="absolute right-[8%] top-[24%] h-[140px] w-[140px] rounded-full bg-[#49a4f2]/7 blur-[80px] md:h-[210px] md:w-[210px]" />
      </div>

      <div className="relative mx-auto max-w-[1440px] text-center">
        {/* Compact visual stage */}
        <div className="relative mx-auto h-[190px] w-full sm:h-[235px] md:h-[295px] lg:h-[340px]">
          <div className="absolute inset-0 [perspective:1400px]">
            {/* Layered circles */}
            {depthLayers.map((layer, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  scale: 0.82,
                  rotateX: 14,
                  y: 18,
                }}
                whileInView={{
                  opacity: layer.opacity,
                  scale: 1,
                  rotateX: 0,
                  y: 0,
                }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 1.5,
                  delay: layer.delay,
                  ease,
                }}
                className={`
                  absolute
                  bottom-0
                  left-1/2
                  -translate-x-1/2
                  rounded-full
                  border
                  border-white/90
                  bg-gradient-to-br
                  from-white/95
                  via-[#f3f6ff]/78
                  to-[#e9efff]/58
                  backdrop-blur-2xl
                  ${layer.className}
                `}
                style={{
                  boxShadow:
                    index === 0
                      ? "0 24px 70px rgba(40,108,186,0.10), inset 0 0 45px rgba(255,255,255,0.96)"
                      : "0 18px 55px rgba(82,64,149,0.05)",
                }}
              />
            ))}

            {/* Central glow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 1.4,
                delay: 0.2,
                ease,
              }}
              className="absolute bottom-[8px] left-1/2 h-[85px] w-[85px] -translate-x-1/2 rounded-full bg-[#3486df]/18 blur-[35px] sm:h-[110px] sm:w-[110px] md:h-[150px] md:w-[150px]"
            />

            {/* Ground reflection */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0.4 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 1.4,
                delay: 0.3,
                ease,
              }}
              className="absolute bottom-0 left-1/2 z-[4] h-[14px] w-[85px] -translate-x-1/2 rounded-full bg-[#385db6]/20 blur-xl sm:w-[110px] md:w-[145px] lg:w-[175px]"
            />

            {/* Lotus logo */}
            <motion.div
              initial={{
                y: 35,
                opacity: 0,
                scale: 0.82,
                rotateX: 12,
                filter: "blur(8px)",
              }}
              whileInView={{
                y: 0,
                opacity: 1,
                scale: 1,
                rotateX: 0,
                filter: "blur(0px)",
              }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 1.45,
                delay: 0.05,
                ease,
              }}
              className="absolute bottom-[4px] left-1/2 z-10 h-[90px] w-[112px] -translate-x-1/2 sm:h-[112px] sm:w-[138px] md:h-[145px] md:w-[175px] lg:h-[170px] lg:w-[205px]"
            >
              <div className="absolute inset-[12%] rounded-full bg-[#286cba]/14 blur-3xl" />

              <Image
                src={lotusData.logo}
                alt={lotusData.title}
                fill
                priority
                sizes="(max-width: 640px) 112px, (max-width: 768px) 138px, (max-width: 1024px) 175px, 205px"
                className="relative object-contain drop-shadow-[0_18px_22px_rgba(40,108,186,0.16)]"
              />
            </motion.div>
          </div>
        </div>

        {/* Heading */}
        <motion.h2
          initial={{
            y: 16,
            opacity: 0,
            scale: 0.97,
            filter: "blur(5px)",
          }}
          whileInView={{
            y: 0,
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
          }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{
            duration: 1.3,
            delay: 0.18,
            ease,
          }}
          className="mt-3 bg-gradient-to-r from-[#524095] via-[#3b55a5] to-[#286cba] bg-clip-text text-[25px] font-extrabold leading-tight text-transparent sm:text-[29px] md:mt-4 md:text-[35px] lg:text-[39px]"
        >
          {lotusData.title}
        </motion.h2>

        {/* Underline */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: 76, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.1,
            delay: 0.32,
            ease,
          }}
          className="mx-auto mt-3 h-[2px] rounded-full bg-gradient-to-r from-[#524095] via-[#3b55a5] to-[#286cba]"
        />

        {/* Description */}
        <motion.div
          initial={{
            y: 22,
            opacity: 0,
            scale: 0.99,
            filter: "blur(6px)",
          }}
          whileInView={{
            y: 0,
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
          }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 1.4,
            delay: 0.28,
            ease,
          }}
          className="relative mx-auto mt-5 max-w-[1320px] overflow-hidden rounded-[20px] border border-[#e1e7f2] bg-white/80 px-4 py-5 backdrop-blur-xl sm:px-6 md:mt-6 md:px-9 md:py-6"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(40,108,186,0.06),transparent_62%)]" />

          <p className="relative text-[12px] leading-6 text-[#687386] sm:text-[13px] sm:leading-7 md:text-[14px] md:leading-7">
            {lotusData.description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}