"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const spectrumData = {
  image: {
    src: "/images/spectrum.png",
    alt: "The SPARRC Spectrum",
  },

  title: "The SPARRC Spectrum",

  description: [
    "At one end of SPARRC spectrum are people who come with Pain and other Lifestyle diseases – the five categories being Obesity, Diabetes, Hypertension, Cardiovascular and Cancer – seeking five aspects of Basic Health viz.,",
    "Cardiovascular endurance, Balance & Coordination, Muscular Strength, Flexibility and Body Composition.",
    "At the other end of the spectrum are those seeking sports related skills viz",
    "Speed, Power, Agility, Reaction Time and Muscular endurance.",
  ],
};

const ease = [0.16, 1, 0.3, 1] as const;

export default function AboutSpectrum() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-20 md:px-10 lg:px-16">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:72px_72px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1fr_1fr]">
        {/* Left Image */}
        <motion.div
          initial={{ x: -90, opacity: 0, scale: 0.96, filter: "blur(10px)" }}
          whileInView={{ x: 0, opacity: 1, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 1.4, ease }}
          className="relative h-[280px] w-full overflow-hidden md:h-[390px]"
        >
          <Image
            src={spectrumData.image.src}
            alt={spectrumData.image.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ x: 90, opacity: 0, filter: "blur(10px)" }}
          whileInView={{ x: 0, opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 1.4, delay: 0.15, ease }}
          className="max-w-[620px]"
        >
          <div className="flex items-center gap-4">
            <motion.span
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.25, ease }}
              className="h-12 w-[2px] origin-top bg-[#0097a9]"
            />

            <h2 className="text-[20px] font-extrabold text-black md:text-[24px]">
              {spectrumData.title}
            </h2>
          </div>

          <div className="mt-8 text-[16px] leading-8 text-[#333] md:text-[18px]">
            <p>
              {spectrumData.description[0]}{" "}
              <strong>{spectrumData.description[1]}</strong>{" "}
              {spectrumData.description[2]}{" "}
              <strong>{spectrumData.description[3]}</strong>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}