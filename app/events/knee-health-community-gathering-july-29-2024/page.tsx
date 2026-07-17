"use client";

import Image from "next/image";
import {
  AnimatePresence,
  motion,
  type Variants,
  useReducedMotion,
} from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  useCallback,
  useEffect,
  useState,
} from "react";

import InnerBanner from "@/components/InnerBanner";

type EventImage = {
  src: string;
  alt: string;
};

type ContentBlock =
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "heading";
      text: string;
    };

const eventImages: EventImage[] = [
  {
    src: "/images/knee-health-community-gathering-july-29-2024.png",
    alt: "Knee Health Community Gathering at SPARRC",
  },

  /*
  Add a second image here to enable the carousel:

  {
    src: "/images/knee-health-community-gathering-july-29-2024-2.jpg",
    alt: "Participants attending the SPARRC knee health session",
  },
  */
];

const contentBlocks: ContentBlock[] = [
  {
    type: "paragraph",
    text: `Gathered around the towering and reassuring presence of Dr Kannan Pugazhendi, July 29, saw the successful conclusion of SPARRC’s community gathering on knee health which registered more than 60 participants from Chennai. Community gatherings are a much sought-after event at SPARRC. What inculcates a sense of strength among patients are shared stories peppered with Dr. Kannan’s encouraging insights, which he narrates in his characteristic humorous style.`,
  },
  {
    type: "paragraph",
    text: `During the community meeting, Dr. Kannan shared valuable inputs on knee health and pain management. Here’s a comprehensive summary of his key points and advice:`,
  },
  {
    type: "heading",
    text: "Understanding Arthritis and Knee Pain",
  },
  {
    type: "paragraph",
    text: `He emphasized that degenerative changes in joints are common above the age of 50 but many individuals below 50 also suffer from knee pain without having ever engaged in high-impact activities like running.`,
  },
  {
    type: "heading",
    text: "Pain and Degeneration",
  },
  {
    type: "paragraph",
    text: `Pain is not necessarily correlated with degenerative changes. Many young individuals who lead sedentary lifestyles experience knee pain due to weakened muscles rather than joint degeneration.`,
  },
  {
    type: "heading",
    text: "Importance of Muscular Strength",
  },
  {
    type: "heading",
    text: "Core Strength",
  },
  {
    type: "paragraph",
    text: `Dr. Kannan highlighted that the core, comprising muscles below the ribs and above the pelvis, plays a crucial role in stabilizing the spine and preventing knee pain.`,
  },
  {
    type: "paragraph",
    text: `Strengthening the core muscles is essential for overall stability and can alleviate pain in school children and adults.`,
  },
  {
    type: "heading",
    text: "Exercise and Movement",
  },
  {
    type: "paragraph",
    text: `Regular physical activity and exercises targeting the core and lower limbs are crucial.`,
  },
  {
    type: "heading",
    text: "Role of Proper Breathing",
  },
  {
    type: "paragraph",
    text: `Proper breathing techniques are vital for maintaining core strength and stability. Using the diaphragm effectively helps stabilize the lumbar spine and enhances overall energy levels..`,
  },
  {
    type: "paragraph",
    text: `Deep breathing ensures adequate oxygen supply which is critical for muscle function and pain prevention.`,
  },
  {
    type: "heading",
    text: "Osteoarthritis and Joint Health: Fluid Movement and Nutrition",
  },
  {
    type: "paragraph",
    text: `Dr. Kannan explained that movement is essential for maintaining joint health. Regular exercise helps facilitate the transfer of nutrients and fluids to the knee joints, promoting cartilage health and preventing arthritis.`,
  },
  {
    type: "heading",
    text: "Preventive Measures and Long-term Health",
  },
  {
    type: "paragraph",
    text: `The primary cause of knee pain is often muscular weakness rather than arthritis itself. Strengthening the muscles around the knee can significantly reduce pain and improve function.`,
  },
  {
    type: "paragraph",
    text: `Dr. Pugazhendi clarified that while osteoarthritis is inevitable, it does not necessarily cause pain if muscular strength is maintained.`,
  },
  {
    type: "heading",
    text: "Daily Exercise",
  },
  {
    type: "paragraph",
    text: `Daily exercise is imperative for long-term joint health. Dr. Pugazhendi encouraged attendees to incorporate regular physical activity into their routines, regardless of age.`,
  },
  {
    type: "heading",
    text: "Muscular Strength in Athletes",
  },
  {
    type: "paragraph",
    text: `He shared his experience with athletes, emphasizing the importance of muscular strength in preventing and managing injuries.`,
  },
  {
    type: "heading",
    text: "Participants feedback",
  },
  {
    type: "paragraph",
    text: `Former governor of Andhra Pradesh, a long term patient of Dr Kannan said that his journey to recovery was singlehandedly steered by the doctor. Even with compromised vision in one eye, the former governor attended the session with great gusto. Such stories of rehabilitation, pushing boundaries, and overcoming limitations generate a wave of hope and positivity among patients.`,
  },
  {
    type: "heading",
    text: "In a nutshell",
  },
  {
    type: "paragraph",
    text: `Dr. Kannan’s insights were focused on the significance of muscular strength, proper breathing, and regular movement in maintaining knee health and preventing pain. His holistic approach underscored the importance of proactive measures and consistent exercise to ensure long-term joint health and overall well-being.`,
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.06,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const slideVariants: Variants = {
  enter: {
    opacity: 0,
    scale: 0.985,
  },
  center: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.985,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

export default function KneeHealthCommunityGatheringPage() {
  const reduceMotion = useReducedMotion();

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);

  const hasMultipleImages = eventImages.length > 1;
  const activeImage = eventImages[activeImageIndex];

  const showPreviousImage = useCallback(() => {
    if (!hasMultipleImages) return;

    setActiveImageIndex((currentIndex) =>
      currentIndex === 0
        ? eventImages.length - 1
        : currentIndex - 1,
    );
  }, [hasMultipleImages]);

  const showNextImage = useCallback(() => {
    if (!hasMultipleImages) return;

    setActiveImageIndex((currentIndex) =>
      currentIndex === eventImages.length - 1
        ? 0
        : currentIndex + 1,
    );
  }, [hasMultipleImages]);

  useEffect(() => {
    if (
      !hasMultipleImages ||
      isCarouselPaused ||
      reduceMotion
    ) {
      return;
    }

    const interval = window.setInterval(() => {
      showNextImage();
    }, 5000);

    return () => {
      window.clearInterval(interval);
    };
  }, [
    hasMultipleImages,
    isCarouselPaused,
    reduceMotion,
    showNextImage,
  ]);

  return (
    <main className="overflow-hidden bg-white">
      <InnerBanner
        title="Knee Health Community Gathering"
        bgImage="/images/page-banner-bg.png"
      />

      <section className="relative overflow-hidden bg-[#f7f9fc] px-4 py-12 sm:px-6 sm:py-16 md:px-8 lg:px-12 lg:py-20">
        {/* Background decorations */}
        <div className="pointer-events-none absolute -left-40 top-16 h-80 w-80 rounded-full bg-[#286cba]/[0.05] blur-[110px]" />

        <div className="pointer-events-none absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-[#524095]/[0.05] blur-[110px]" />

        <motion.article
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={{
            once: true,
            amount: 0.03,
          }}
          variants={containerVariants}
          className="relative mx-auto max-w-[1240px]"
        >
          <div className="overflow-hidden rounded-[26px] border border-[#e1e6ef] bg-white shadow-[0_22px_65px_rgba(30,43,75,0.08)]">
            {/* Top colour line */}
            <div className="h-[4px] bg-[linear-gradient(90deg,#286cba,#55b8c6,#524095)]" />

            {/* Top image/carousel */}
            <motion.div
              variants={fadeUpVariants}
              onMouseEnter={() => setIsCarouselPaused(true)}
              onMouseLeave={() => setIsCarouselPaused(false)}
              className="border-b border-[#e3e8f0] bg-[#edf2f8] p-2 sm:p-4 lg:p-6"
            >
              <div className="relative mx-auto max-w-[1140px] overflow-hidden rounded-[20px] bg-white shadow-[0_14px_40px_rgba(31,43,72,0.1)]">
                <AnimatePresence mode="wait">
                  <motion.figure
                    key={`${activeImage.src}-${activeImageIndex}`}
                    variants={slideVariants}
                    initial={reduceMotion ? false : "enter"}
                    animate="center"
                    exit={reduceMotion ? undefined : "exit"}
                    className="relative w-full"
                  >
                    <Image
                      src={activeImage.src}
                      alt={activeImage.alt}
                      width={1600}
                      height={1200}
                      priority={activeImageIndex === 0}
                      sizes="(max-width: 768px) 100vw, 1140px"
                      className="block h-auto w-full object-contain"
                    />
                  </motion.figure>
                </AnimatePresence>

                {hasMultipleImages && (
                  <>
                    {/* Counter */}
                    <div className="absolute right-3 top-3 z-20 rounded-full border border-white/40 bg-[#1b2844]/65 px-3 py-1.5 text-[11px] font-bold text-white shadow-lg backdrop-blur-md sm:right-5 sm:top-5 sm:px-4 sm:py-2 sm:text-[12px]">
                      {String(activeImageIndex + 1).padStart(2, "0")} /{" "}
                      {String(eventImages.length).padStart(2, "0")}
                    </div>

                    {/* Previous */}
                    <button
                      type="button"
                      onClick={showPreviousImage}
                      aria-label="Show previous image"
                      className="absolute left-3 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-white/90 text-[#344054] shadow-[0_10px_30px_rgba(15,28,57,0.16)] transition-all duration-300 hover:scale-105 hover:bg-[#286cba] hover:text-white sm:left-5 sm:h-12 sm:w-12"
                    >
                      <ChevronLeft size={21} />
                    </button>

                    {/* Next */}
                    <button
                      type="button"
                      onClick={showNextImage}
                      aria-label="Show next image"
                      className="absolute right-3 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-white/90 text-[#344054] shadow-[0_10px_30px_rgba(15,28,57,0.16)] transition-all duration-300 hover:scale-105 hover:bg-[#524095] hover:text-white sm:right-5 sm:h-12 sm:w-12"
                    >
                      <ChevronRight size={21} />
                    </button>

                    {/* Indicators */}
                    <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/25 bg-[#1b2844]/60 px-3 py-2 shadow-lg backdrop-blur-md sm:bottom-5">
                      {eventImages.map((image, index) => {
                        const isActive =
                          index === activeImageIndex;

                        return (
                          <button
                            key={image.src}
                            type="button"
                            onClick={() => {
                              setActiveImageIndex(index);
                            }}
                            aria-label={`Show image ${index + 1}`}
                            className={`h-2 rounded-full transition-all duration-300 ${
                              isActive
                                ? "w-7 bg-white"
                                : "w-2 bg-white/45 hover:bg-white/80"
                            }`}
                          />
                        );
                      })}
                    </div>
                  </>
                )}
              </div>
            </motion.div>

            {/* Complete content */}
            <div className="px-5 py-8 sm:px-8 sm:py-10 md:px-10 lg:px-14 lg:py-14">
              <div className="space-y-5 sm:space-y-6">
                {contentBlocks.map((block, index) => {
                  if (block.type === "heading") {
                    return (
                      <motion.h2
                        key={`${index}-${block.text}`}
                        variants={fadeUpVariants}
                        className="flex items-start gap-3 pt-3 text-[18px] font-bold leading-snug text-[#1e2d44] sm:pt-4 sm:text-[21px]"
                      >
                        <span className="mt-0.5 h-7 w-[3px] shrink-0 rounded-full bg-[linear-gradient(180deg,#286cba,#524095)]" />

                        <span>{block.text}</span>
                      </motion.h2>
                    );
                  }

                  return (
                    <motion.p
                      key={`${index}-${block.text.slice(0, 25)}`}
                      variants={fadeUpVariants}
                      className={`text-[14px] leading-7 sm:text-[16px] sm:leading-8 ${
                        index === 0
                          ? "border-l-[3px] border-[#286cba] pl-4 font-semibold text-[#293448] sm:pl-6"
                          : "text-[#505b6d]"
                      }`}
                    >
                      {block.text}
                    </motion.p>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.article>
      </section>
    </main>
  );
}