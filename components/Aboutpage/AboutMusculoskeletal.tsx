"use client";

import Image from "next/image";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
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
    [0.16, 0.68],
    ["115%", "0%"],
  );

  const firstCardScale = useTransform(
    smoothProgress,
    [0.16, 0.68],
    [1, 0.975],
  );

  const firstCardOpacity = useTransform(
    smoothProgress,
    [0.45, 0.72],
    [1, 0.65],
  );

  return (
    <>
      {/* Mobile and tablet layout */}
      <section className="relative overflow-hidden bg-white px-4 py-14 md:px-7 lg:hidden">
        <div className="mx-auto w-full max-w-[760px]">
          <motion.h2
            initial={{
              y: 28,
              opacity: 0,
              filter: "blur(7px)",
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
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mx-auto max-w-[680px]
              text-center text-[31px] font-extrabold
              leading-[1.12] tracking-[-0.02em] text-black
              sm:text-[37px]
            "
          >
            SPARRC and its commitment to improve Musculoskeletal Health
          </motion.h2>

          <div className="mt-10 space-y-7">
            {cards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{
                  y: 45,
                  opacity: 0,
                  scale: 0.98,
                }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.85,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  relative overflow-hidden rounded-[22px]
                  border border-[#e5e7eb] bg-white
                "
              >
                <CardContent card={card} mobile />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Desktop scroll animation */}
      <section
        ref={sectionRef}
        className="
          relative hidden h-[175vh]
          bg-white px-8 lg:block lg:px-10 xl:px-12
        "
      >
        <div
          className="
            sticky top-0 flex min-h-screen
            items-start overflow-hidden
            pt-[clamp(90px,11vh,135px)]
          "
        >
          <div className="mx-auto w-full max-w-[1500px]">
            <motion.h2
              initial={{
                y: 35,
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
              }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                mx-auto max-w-[1180px]
                text-center text-[38px] font-extrabold
                leading-[1.15] tracking-[-0.02em] text-black
                xl:text-[42px]
              "
            >
              SPARRC and its commitment to improve Musculoskeletal Health
            </motion.h2>

            <div
              className="
                relative mx-auto mt-14
                h-[350px] w-full max-w-[1380px]
                xl:h-[345px]
                2xl:mt-16 2xl:h-[350px]
              "
            >
              {/* First card */}
              <motion.div
                style={{
                  scale: firstCardScale,
                  opacity: firstCardOpacity,
                }}
                className="
                  absolute inset-0 overflow-hidden
                  rounded-[22px] border border-[#e5e7eb]
                  bg-white
                "
              >
                <CardContent card={cards[0]} />
              </motion.div>

              {/* Second card */}
              <motion.div
                style={{
                  y: secondCardY,
                }}
                className="
                  absolute inset-0 z-20 overflow-hidden
                  rounded-[22px] border border-[#e5e7eb]
                  bg-white
                  shadow-[0_24px_70px_rgba(20,20,50,0.08)]
                "
              >
                <CardContent card={cards[1]} />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

type CardContentProps = {
  card: {
    title: string;
    description: string;
    bgImage: string;
  };
  mobile?: boolean;
};

function CardContent({ card, mobile = false }: CardContentProps) {
  return (
    <div
      className={`
        relative flex w-full items-center justify-center
        ${
          mobile
            ? "min-h-[560px] px-5 py-11 sm:min-h-[490px] sm:px-8 sm:py-12"
            : "h-full px-10 py-10 xl:px-14"
        }
      `}
    >
      {/* Inner highlight border */}
      <div
        className="
          pointer-events-none absolute inset-[1px]
          rounded-[21px] border border-white/80
        "
      />

      {/* Decorative background */}
      <div
        className={`
          pointer-events-none absolute left-0 top-0
          ${
            mobile
              ? "h-[310px] w-[210px] opacity-75 sm:h-[340px] sm:w-[260px]"
              : "h-full w-[31%] opacity-85"
          }
        `}
      >
        <Image
          src={card.bgImage}
          alt=""
          fill
          priority={false}
          sizes={
            mobile
              ? "(max-width: 640px) 210px, 260px"
              : "(max-width: 1280px) 31vw, 430px"
          }
          className="
            object-cover object-left-top
            lg:object-left
          "
        />
      </div>

      {/* Text content */}
      <div
        className={`
          relative z-10 mx-auto w-full text-center
          ${mobile ? "max-w-[650px]" : "max-w-[1240px]"}
        `}
      >
        <h3
          className={`
            font-extrabold leading-[1.2]
            tracking-[-0.015em] text-black
            ${
              mobile
                ? "text-[22px] sm:text-[25px]"
                : "text-[25px] xl:text-[27px]"
            }
          `}
        >
          {card.title}
        </h3>

        <p
          className={`
            mx-auto text-[#697386]
            ${
              mobile
                ? "mt-6 text-[16px] leading-[2.15] sm:text-[17px] sm:leading-[2.05]"
                : "mt-6 text-[15px] leading-[2.3] xl:text-[16px] xl:leading-[2.15]"
            }
          `}
        >
          {card.description}
        </p>
      </div>
    </div>
  );
}