"use client";

import Image from "next/image";
import {
  AnimatePresence,
  motion,
  Variants,
} from "framer-motion";
import {
  CalendarDays,
  Check,
  Video,
  X,
  ZoomIn,
} from "lucide-react";
import { useEffect, useState } from "react";

type GalleryImage = {
  src: string;
  alt: string;
};

const physiotherapyHighlights = [
  "Physios and Clients participated enthusiastically in the ‘Selfie taking fun Task’ three days before the D Day.",
  "The Selfies taken were made into a collage and was uploaded in Sparrc Social Media",
  "A One and Half minute AV, greeting all Physios were made; It was screened during the Celebrations @SPARRC, along with uploading the same onto Social Media.",
  "To add zest to the vibe, SPARRC Physios across the Centres, made Dance Reel on Instagram raising awareness about #moveNheal.",
  "The celebration culminated in an online event on 8th Sept 2022, in which the entire SPARRC team came together.",
  "Those physios who have completed 7+ years @SPARRC were felicitated with a personalized mug.",
  "The acceptance speech these physios gave, was so heart warming. Each one of them pledged to re-dedicate their service with renewed vigour.",
  "Kannan Pugazhendi acknowledged the significant role played by Physios in the healing journey of the clients @ SPARRC by saying while Doctors save lives, it is the Physios who give quality of life to a patient.",
  "Sujatha Pugazhendi reminded the Physios to keep the learner's cap on and strive for continuous improved performance.",
  "Aravind thanked Dr.Kannan Pugazhendi and Ms.Sujatha for their pioneering effort in the prescribed exercise based healing process amidst proliferating Pharmaceuticals and Surgery.",
  "The celebrations ended with a sumptuous lunch for everybody @ SPARRC.",
];

const galleryImages: GalleryImage[] = [
  {
    src: "/images/world-physiotherapy-day-1.png",
    alt: "SPARRC World Physiotherapy Day selfie collage",
  },
  {
    src: "/images/world-physiotherapy-day-2.png",
    alt: "SPARRC World Physiotherapy Day felicitation collage",
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 36,
    scale: 0.985,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease,
    },
  },
};

const contentVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 22,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease,
    },
  },
};

const popupBackdropVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.25,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

const popupImageVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
    scale: 0.92,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease,
    },
  },
  exit: {
    opacity: 0,
    y: 20,
    scale: 0.95,
    transition: {
      duration: 0.22,
    },
  },
};

const viewportSettings = {
  once: true,
  amount: 0.2,
  margin: "0px 0px -70px 0px",
};

export default function NewsUpdatesSection() {
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
      <section className="relative overflow-hidden bg-[#f4f8ff] px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        {/* Background decorations */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,#eaf3ff_0%,rgba(234,243,255,0)_100%)]" />

        <div className="pointer-events-none absolute -left-28 top-1/3 h-72 w-72 rounded-full bg-[#e6f2ff] blur-[110px]" />

        <div className="pointer-events-none absolute -right-24 bottom-20 h-72 w-72 rounded-full bg-[#e4fff4] blur-[110px]" />

        <div className="relative mx-auto flex w-full max-w-[1180px] flex-col gap-7 sm:gap-9">
          {/* Social media update card */}
          <motion.article
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.18,
              margin: "0px 0px -70px 0px",
            }}
            className="overflow-hidden rounded-[20px] border border-[#dfe7f0] bg-[linear-gradient(135deg,#ffffff_0%,#fbfdff_62%,#effff8_100%)] px-5 py-6 shadow-[0_14px_40px_rgba(38,69,103,0.07)] sm:rounded-[24px] sm:px-8 sm:py-8 lg:rounded-[28px] lg:px-10 lg:py-9"
          >
            <motion.div
              variants={contentVariants}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-[#eafff4] px-3.5 py-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#38c98f] sm:text-[10px]">
                <Video
                  size={12}
                  strokeWidth={2.4}
                />

                Live & Updates
              </span>
            </motion.div>

            <motion.h2
              variants={contentVariants}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              className="mt-5 max-w-[980px] font-jost text-[24px] font-bold leading-[1.22] tracking-[-0.03em] text-[#1168d8] sm:text-[30px] lg:text-[38px]"
            >
              Dr. Kannan Pugazhendi will be on
              Instagram, Facebook, LinkedIn and
              Youtube
            </motion.h2>

            <motion.p
              variants={contentVariants}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              className="mt-5 max-w-[1050px] text-[13px] leading-6 text-[#465265] sm:text-[14px] sm:leading-7"
            >
              Starting this ‘Vijayadasami’, ie from
              5th Oct, you can directly stay in touch
              with Dr Kannan Pugazhendi via Facebook,
              Instagram, LinkedIn and YouTube through,
              Dr. Kannan Pugazhendi&apos;s Channel!
            </motion.p>

            <motion.p
              variants={contentVariants}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              className="mt-4 max-w-[1080px] break-words text-[11px] leading-6 text-[#858d98] sm:text-[13px]"
            >
              #moveNheal #drkannanpugazhendi #fitness
              #sportsmedicinedoctor #sportsmedicine
              #lifestyle #fitnessforall
              #exerciseforall #timetoexercise
              #exerciseathome #fitnessgoals
              #healthyliving #drkannan #rehab
              #rehabilitation #painmanagement
              #therapy #paintreatment
            </motion.p>
          </motion.article>

          {/* World Physiotherapy Day card */}
          <motion.article
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.08,
              margin: "0px 0px -50px 0px",
            }}
            className="overflow-hidden rounded-[20px] border border-[#dfe7f0] bg-[linear-gradient(135deg,#ffffff_0%,#fbfdff_62%,#effff8_100%)] px-4 py-6 shadow-[0_14px_40px_rgba(38,69,103,0.07)] sm:rounded-[24px] sm:px-7 sm:py-8 lg:rounded-[28px] lg:px-8 lg:py-9"
          >
            <motion.div
              variants={contentVariants}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-[#eafff4] px-3.5 py-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#38c98f] sm:text-[10px]">
                <CalendarDays
                  size={12}
                  strokeWidth={2.4}
                />

                World Physiotherapy Day
              </span>
            </motion.div>

            <motion.h2
              variants={contentVariants}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              className="mt-5 font-jost text-[24px] font-bold leading-tight tracking-[-0.03em] text-[#1168d8] sm:text-[30px] lg:text-[36px]"
            >
              World Physiotherapy Day 8th Sept
            </motion.h2>

            <motion.p
              variants={contentVariants}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              className="mt-5 text-[12px] font-semibold leading-6 text-[#303947] sm:text-[13px]"
            >
              This year&apos;s preparations for
              celebrating World Physiotherapy Day
              [8th Sept.] began days before at SPARRC:
            </motion.p>

            {/* Each row animates when that row becomes visible */}
            <div className="mt-5 space-y-2.5">
              {physiotherapyHighlights.map(
                (item, index) => (
                  <motion.div
                    key={`${index}-${item}`}
                    initial={{
                      opacity: 0,
                      x: -20,
                      y: 12,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.35,
                      margin:
                        "0px 0px -40px 0px",
                    }}
                    transition={{
                      duration: 0.55,
                      delay:
                        (index % 3) * 0.04,
                      ease,
                    }}
                    whileHover={{
                      x: 5,
                      y: -2,
                      transition: {
                        duration: 0.22,
                      },
                    }}
                    className="group flex items-start gap-3 rounded-[12px] border border-[#e2e7ed] bg-white px-3 py-3 shadow-[0_3px_10px_rgba(28,51,82,0.035)] transition-[border-color,box-shadow] duration-300 hover:border-[#cdeee0] hover:shadow-[0_8px_22px_rgba(30,91,69,0.07)] sm:px-4"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#e8fff5] text-[#29c98c]">
                      <Check
                        size={14}
                        strokeWidth={2.5}
                      />
                    </span>

                    <p className="text-[11px] leading-5 text-[#4b5058] sm:text-[12px] sm:leading-[1.55]">
                      {item}
                    </p>
                  </motion.div>
                ),
              )}
            </div>

            {/* Image gallery */}
            <div className="mt-7 grid gap-5 sm:grid-cols-2 sm:gap-6">
              {galleryImages.map(
                (image, index) => (
                  <motion.button
                    key={image.src}
                    type="button"
                    initial={{
                      opacity: 0,
                      y: 30,
                      scale: 0.96,
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
                      delay: index * 0.1,
                      ease,
                    }}
                    whileHover={{
                      y: -7,
                      scale: 1.015,
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
                    className="group relative mx-auto block w-full max-w-[496px] overflow-hidden rounded-[14px] border border-[#dfe6ec] bg-white text-left shadow-[0_10px_28px_rgba(27,51,82,0.09)] outline-none transition-shadow duration-300 hover:shadow-[0_18px_40px_rgba(27,51,82,0.16)] focus-visible:ring-2 focus-visible:ring-[#4d1eff] focus-visible:ring-offset-2"
                    aria-label={`Open ${image.alt}`}
                  >
                    <div className="relative aspect-[496/300] w-full overflow-hidden">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 640px) calc(100vw - 48px), (max-width: 1024px) 46vw, 496px"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      />

                      <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/15" />

                      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <span className="flex h-11 w-11 scale-90 items-center justify-center rounded-full bg-white/95 text-[#4d1eff] shadow-[0_10px_28px_rgba(0,0,0,0.18)] backdrop-blur-sm transition-transform duration-300 group-hover:scale-100 sm:h-12 sm:w-12">
                          <ZoomIn size={21} />
                        </span>
                      </div>
                    </div>
                  </motion.button>
                ),
              )}
            </div>
          </motion.article>
        </div>
      </section>

      {/* Responsive image popup */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            variants={popupBackdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto bg-[#07111f]/85 p-4 backdrop-blur-md sm:p-6"
            onClick={() =>
              setSelectedImage(null)
            }
            role="dialog"
            aria-modal="true"
            aria-label="Image preview"
          >
            <motion.div
              variants={popupImageVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(event) =>
                event.stopPropagation()
              }
              className="relative my-auto w-full max-w-[980px]"
            >
              <button
                type="button"
                onClick={() =>
                  setSelectedImage(null)
                }
                aria-label="Close image preview"
                className="absolute -top-12 right-0 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#151922] shadow-lg transition-all duration-300 hover:rotate-90 hover:bg-[#4d1eff] hover:text-white sm:-right-3 sm:-top-3"
              >
                <X size={20} />
              </button>

              <div className="relative overflow-hidden rounded-[16px] border border-white/20 bg-white p-2 shadow-[0_28px_90px_rgba(0,0,0,0.45)] sm:rounded-[24px] sm:p-3">
                <div className="relative flex max-h-[82vh] min-h-[220px] w-full items-center justify-center overflow-hidden rounded-[12px] bg-[#eef2f5] sm:min-h-[420px] sm:rounded-[18px]">
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    width={1200}
                    height={800}
                    className="h-auto max-h-[80vh] w-full object-contain"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}