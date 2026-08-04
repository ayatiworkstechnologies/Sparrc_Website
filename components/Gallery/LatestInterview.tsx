"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Play } from "lucide-react";
import { useState } from "react";

const videoUrl = "https://youtu.be/_SXYUyS0Ghs";

const videoEmbedUrl =
  "https://www.youtube.com/embed/_SXYUyS0Ghs?autoplay=1&rel=0";

const thumbnailUrl =
  "/images/latest-interview-thumbnail.png";

const ease = [0.16, 1, 0.3, 1] as const;

export default function LatestInterview() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative overflow-hidden bg-[#f5f9fd] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[280px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#eaf4ff] blur-[100px]" />

      <motion.div
        initial={{
          opacity: 0,
          y: 34,
          scale: 0.985,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.2,
          margin: "0px 0px -60px 0px",
        }}
        transition={{
          duration: 0.8,
          ease,
        }}
        className="relative mx-auto w-full max-w-[1080px] overflow-hidden rounded-[18px] border border-[#e8edf3] bg-white p-3 shadow-[0_16px_50px_rgba(36,62,96,0.09)] sm:p-4 lg:rounded-[22px]"
      >
        <div className="grid items-center gap-5 md:grid-cols-[0.78fr_1.22fr] lg:gap-7">
          {/* Left content */}
          <motion.div
            initial={{
              opacity: 0,
              x: -24,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.35,
            }}
            transition={{
              duration: 0.7,
              delay: 0.12,
              ease,
            }}
            className="px-3 py-5 sm:px-5 sm:py-7 lg:px-6"
          >
            <motion.h2
              initial={{
                opacity: 0,
                y: 16,
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
                duration: 0.6,
                delay: 0.18,
                ease,
              }}
              className="font-jost text-[25px] font-semibold leading-tight tracking-[-0.025em] text-[#16141a] sm:text-[30px] lg:text-[34px]"
            >
              Watch Our Latest Interview
            </motion.h2>

            <motion.p
              initial={{
                opacity: 0,
                y: 14,
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
                duration: 0.6,
                delay: 0.25,
                ease,
              }}
              className="mt-4 text-[13px] leading-6 text-[#5d5963] sm:text-[14px]"
            >
              Celebrating World Physiotherapy Day 2022
            </motion.p>

            {/* Redirects to YouTube */}
            <motion.a
              href={videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{
                opacity: 0,
                y: 14,
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
                duration: 0.6,
                delay: 0.32,
                ease,
              }}
              whileHover={{
                y: -3,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="group mt-6 inline-flex min-h-[42px] items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#6738ff_0%,#4b1fff_100%)] px-6 text-[10px] font-semibold uppercase tracking-[0.17em] text-white shadow-[0_10px_24px_rgba(82,40,241,0.28)] transition-shadow duration-300 hover:shadow-[0_15px_32px_rgba(82,40,241,0.38)]"
            >
              Watch Now

              <ExternalLink
                size={14}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </motion.a>
          </motion.div>

          {/* Right video area */}
          <motion.div
            initial={{
              opacity: 0,
              x: 28,
              scale: 0.97,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.3,
              margin: "0px 0px -50px 0px",
            }}
            transition={{
              duration: 0.75,
              delay: 0.16,
              ease,
            }}
            className="relative overflow-hidden rounded-[14px] border-[4px] border-[#e6e9ed] bg-black shadow-[0_10px_28px_rgba(32,50,76,0.10)]"
          >
            <div className="relative aspect-video w-full overflow-hidden">
              {isPlaying ? (
                <motion.iframe
                  initial={{
                    opacity: 0,
                    scale: 1.03,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.45,
                    ease,
                  }}
                  src={videoEmbedUrl}
                  title="Celebrating World Physiotherapy Day 2022"
                  className="absolute inset-0 h-full w-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setIsPlaying(true)}
                  aria-label="Play SPARRC World Physiotherapy Day interview"
                  className="group absolute inset-0 h-full w-full overflow-hidden text-left outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#4d1eff]"
                >
                  <Image
                    src={thumbnailUrl}
                    alt="SPARRC World Physiotherapy Day 2022 interview thumbnail"
                    fill
                    priority
                    sizes="(max-width: 767px) calc(100vw - 40px), 650px"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/5 transition-colors duration-300 group-hover:bg-black/20" />

                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-14 w-14 scale-95 items-center justify-center rounded-full bg-white/95 text-[#4d1eff] shadow-[0_14px_35px_rgba(0,0,0,0.22)] backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-[#4d1eff] group-hover:text-white sm:h-16 sm:w-16">
                      <Play
                        size={24}
                        fill="currentColor"
                        className="ml-1"
                      />
                    </span>
                  </div>

                  {/* Shine effect */}
                  <div className="pointer-events-none absolute inset-y-0 -left-[55%] w-[35%] skew-x-[-18deg] bg-white/20 blur-md transition-all duration-700 group-hover:left-[125%]" />
                </button>
              )}
            </div>

            <div className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-white/10" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}