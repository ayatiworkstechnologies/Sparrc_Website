"use client";

import Image from "next/image";
import {
  AnimatePresence,
  motion,
} from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { useEffect, useState } from "react";

type GalleryImage = {
  src: string;
  alt: string;
  size: "large" | "small";
};

const galleryImages: GalleryImage[] = [
  {
    src: "/images/world-diabetes-day-1.png",
    alt: "SPARRC World Diabetes Day group exercise session",
    size: "large",
  },
  {
    src: "/images/world-diabetes-day-2.png",
    alt: "World Diabetes Day senior participants",
    size: "small",
  },
  {
    src: "/images/world-diabetes-day-3.png",
    alt: "SPARRC World Diabetes Day awareness session",
    size: "small",
  },
  {
    src: "/images/world-diabetes-day-4.png",
    alt: "SPARRC World Diabetes Day group photograph",
    size: "large",
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function WorldDiabetesGallery() {
  const [selectedImage, setSelectedImage] =
    useState<GalleryImage | null>(null);

  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (
      event: KeyboardEvent,
    ) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";
    window.addEventListener(
      "keydown",
      handleKeyDown,
    );

    return () => {
      document.body.style.overflow =
        previousOverflow;

      window.removeEventListener(
        "keydown",
        handleKeyDown,
      );
    };
  }, [selectedImage]);

  return (
    <>
      <section className="relative overflow-hidden bg-[#f4f8fc] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-[#e9f3ff] blur-[110px]" />

        <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-[#eafff4] blur-[110px]" />

        <div className="relative mx-auto w-full max-w-[1180px]">
          {/* Heading */}
          <motion.div
            initial={{
              opacity: 0,
              y: 24,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.4,
              margin: "0px 0px -50px 0px",
            }}
            transition={{
              duration: 0.7,
              ease,
            }}
          >
            <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#2d2a31] sm:text-[11px]">
              Gallery
            </span>

            <h2 className="mt-4 font-jost text-[27px] font-semibold leading-tight tracking-[-0.03em] text-[#161419] sm:text-[34px] lg:text-[40px]">
              World Diabetes Day – Nov 14, 2019
            </h2>

            <p className="mt-4 max-w-[1060px] text-[13px] leading-6 text-[#8a8d95] sm:text-[14px]">
              SPARRC centres across India celebrated the
              World Diabetes Day with several events like
              Awareness Talks, Special Blood Test Camps and
              Client Participation events.
            </p>
          </motion.div>

          {/* Gallery */}
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3 md:auto-rows-[370px] lg:gap-6">
            {galleryImages.map((image, index) => {
              const large =
                image.size === "large";

              return (
                <motion.button
                  key={image.src}
                  type="button"
                  initial={{
                    opacity: 0,
                    y: 28,
                    scale: 0.97,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.25,
                    margin:
                      "0px 0px -50px 0px",
                  }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.08,
                    ease,
                  }}
                  whileHover={{
                    y: -6,
                    scale: 1.01,
                    transition: {
                      duration: 0.28,
                      ease: "easeOut",
                    },
                  }}
                  whileTap={{
                    scale: 0.985,
                  }}
                  onClick={() =>
                    setSelectedImage(image)
                  }
                  className={`group relative h-[260px] overflow-hidden rounded-[4px] bg-white text-left shadow-[0_10px_30px_rgba(31,53,81,0.09)] outline-none transition-shadow duration-300 hover:shadow-[0_18px_42px_rgba(31,53,81,0.16)] sm:h-[320px] md:h-[370px] ${
                    large
                      ? "md:col-span-2"
                      : "md:col-span-1"
                  }`}
                  aria-label={`Open ${image.alt}`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes={
                      large
                        ? "(max-width: 767px) 100vw, 770px"
                        : "(max-width: 767px) 100vw, 370px"
                    }
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />

                  <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/15" />

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <span className="flex h-12 w-12 scale-90 items-center justify-center rounded-full bg-white/95 text-[#4d1eff] shadow-[0_12px_30px_rgba(0,0,0,0.2)] backdrop-blur-sm transition-transform duration-300 group-hover:scale-100">
                      <ZoomIn size={21} />
                    </span>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popup */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.25,
            }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#07111f]/85 p-4 backdrop-blur-md sm:p-6"
            onClick={() =>
              setSelectedImage(null)
            }
            role="dialog"
            aria-modal="true"
            aria-label="Gallery image preview"
          >
            <motion.div
              initial={{
                opacity: 0,
                y: 28,
                scale: 0.93,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 20,
                scale: 0.95,
              }}
              transition={{
                duration: 0.4,
                ease,
              }}
              onClick={(event) =>
                event.stopPropagation()
              }
              className="relative w-full max-w-[1100px]"
            >
              <button
                type="button"
                onClick={() =>
                  setSelectedImage(null)
                }
                aria-label="Close gallery image"
                className="absolute -top-12 right-0 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#17151c] shadow-lg transition-all duration-300 hover:rotate-90 hover:bg-[#4d1eff] hover:text-white sm:-right-3 sm:-top-3"
              >
                <X size={20} />
              </button>

              <div className="overflow-hidden rounded-[18px] border border-white/20 bg-white p-2 shadow-[0_28px_90px_rgba(0,0,0,0.45)] sm:rounded-[24px] sm:p-3">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  width={
                    selectedImage.size === "large"
                      ? 1540
                      : 740
                  }
                  height={740}
                  className="h-auto max-h-[82vh] w-full rounded-[13px] object-contain sm:rounded-[18px]"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}