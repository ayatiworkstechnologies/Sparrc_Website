"use client";

import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const cards = [
  {
    title: "Importance of Musculoskeletal Health",
    description:
      "Musculoskeletal health is a critical aspect of our overall well-being, affecting every individual’s ability to move, work, and live life without limitations. This entails the health of bones, joints, muscles and connective tissues which form the foundation of endurance, physical strength and flexibility. Poor musculoskeletal health can lead to chronic conditions such as arthritis, osteoporosis, and back pain, limiting mobility and reducing the quality of life. These issues not only cause physical discomfort but also contribute to other health problems, including obesity, cardiovascular diseases, and mental health disorders like depression and anxiety. The connection between musculoskeletal health and broader health outcomes deeply underlines the importance of maintaining a strong and resilient musculoskeletal system.",
    bgImage: "/images/card-background.png",
  },
  {
    title: "SPARRC’s Holistic Approach to Musculoskeletal Health",
    description:
      "When it comes to sports medicine and rehabilitation, SPARRC Institute has always shown the way by offering a comprehensive approach to musculoskeletal health. SPARRC is dedicated to rejuvenating and promoting musculoskeletal health through prescription exercises, prevention, treatment, and rehabilitation. The institute’s philosophy is rooted in the belief that musculoskeletal health is not just about treating injuries but also providing a structure to the body, a strong core and promoting overall physical well-being.",
    bgImage: "/images/card-background.png",
  },
];

export default function AboutMusculoskeletal() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 26,
    mass: 0.9,
  });

  const secondCardY = useTransform(
    smoothProgress,
    [0.22, 0.72],
    ["120%", "0%"]
  );

  const firstScale = useTransform(smoothProgress, [0.22, 0.72], [1, 0.98]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[190vh] bg-white px-4 md:px-8 lg:px-12"
    >
      <div className="sticky top-0 flex min-h-screen items-center overflow-hidden py-14 md:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-[1500px]">
          <motion.h2
            initial={{ y: 35, opacity: 0, filter: "blur(8px)" }}
            whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mx-auto max-w-[1100px] text-center text-[23px] font-extrabold leading-tight text-black sm:text-[28px] md:text-[34px] lg:text-[42px]"
          >
            SPARRC and its commitment to improve Musculoskeletal Health
          </motion.h2>

          <div className="relative mx-auto mt-10 h-[520px] w-full max-w-[1380px] sm:h-[430px] md:mt-12 md:h-[360px] lg:mt-14 lg:h-[275px]">
            <motion.div
              style={{ scale: firstScale }}
              className="absolute inset-0 overflow-hidden rounded-[22px] border border-[#e9e9e9] bg-white"
            >
              <CardContent card={cards[0]} />
            </motion.div>

            <motion.div
              style={{ y: secondCardY }}
              className="absolute inset-0 z-20 overflow-hidden rounded-[22px] border border-[#e9e9e9] bg-white"
            >
              <CardContent card={cards[1]} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CardContent({
  card,
}: {
  card: {
    title: string;
    description: string;
    bgImage: string;
  };
}) {
  return (
    <div className="relative flex h-full items-center justify-center px-5 py-8 sm:px-7 md:px-10 lg:px-12">
      <div className="absolute inset-0 rounded-[22px] border border-white/70" />

      <div className="absolute left-0 top-0 h-[210px] w-[245px] opacity-85 sm:h-[240px] sm:w-[290px] md:h-full md:w-[34%] lg:w-[30%]">
        <Image
          src={card.bgImage}
          alt=""
          fill
          sizes="(max-width: 768px) 290px, 35vw"
          className="object-cover object-left-top md:object-left"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1180px] text-center">
        <h3 className="text-[20px] font-extrabold leading-tight text-black sm:text-[23px] md:text-[25px] lg:text-[26px]">
          {card.title}
        </h3>

        <p className="mx-auto mt-5 max-w-[1180px] text-[13px] leading-7 text-gray-500 sm:text-[14px] md:text-[15px] md:leading-7">
          {card.description}
        </p>
      </div>
    </div>
  );
}