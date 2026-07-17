"use client";

import Image from "next/image";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  type PanInfo,
  type Variants,
  useReducedMotion,
} from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ImageOff,
  Phone,
} from "lucide-react";
import {
  useCallback,
  useEffect,
  useState,
  type KeyboardEvent,
} from "react";

export type EventCarouselImage = {
  src: string;
  alt: string;
  objectPosition?: string;

  /*
   * Optional fallback aspect ratio.
   * Example:
   * 16 / 9
   * 4 / 3
   *
   * The component automatically detects the real image ratio
   * after the image loads.
   */
  aspectRatio?: number;
};

type DynamicEventArticleProps = {
  images: EventCarouselImage[];
  paragraphs: string[];
  phoneLabel?: string;
  phoneHref?: string;
  contactPrefix?: string;
  contactSuffix?: string;
  autoplayDelay?: number;
  priorityFirstImage?: boolean;
};

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
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

const carouselVariants: Variants = {
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

export default function DynamicEventArticle({
  images,
  paragraphs,
  phoneLabel = "+91 965 965 0000",
  phoneHref = "tel:+919659650000",
  contactPrefix = "For more details, contact our helpline number at",
  contactSuffix = "or your nearest SPARRC centre.",
  autoplayDelay = 5000,
  priorityFirstImage = true,
}: DynamicEventArticleProps) {
  const reduceMotion = useReducedMotion();

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const [failedImages, setFailedImages] = useState<
    Record<number, boolean>
  >({});

  /*
   * Stores the real aspect ratio of every loaded image.
   * Example: naturalWidth / naturalHeight
   */
  const [imageAspectRatios, setImageAspectRatios] = useState<
    Record<number, number>
  >({});

  const hasMultipleImages = images.length > 1;
  const activeImage = images[activeIndex];

  const showPreviousImage = useCallback(() => {
    if (!hasMultipleImages) return;

    setActiveIndex((currentIndex) =>
      currentIndex === 0
        ? images.length - 1
        : currentIndex - 1,
    );
  }, [hasMultipleImages, images.length]);

  const showNextImage = useCallback(() => {
    if (!hasMultipleImages) return;

    setActiveIndex((currentIndex) =>
      currentIndex === images.length - 1
        ? 0
        : currentIndex + 1,
    );
  }, [hasMultipleImages, images.length]);

  useEffect(() => {
    setActiveIndex((currentIndex) =>
      Math.min(
        currentIndex,
        Math.max(images.length - 1, 0),
      ),
    );

    setFailedImages({});
    setImageAspectRatios({});
  }, [images.length]);

  useEffect(() => {
    if (
      !hasMultipleImages ||
      isPaused ||
      reduceMotion ||
      autoplayDelay <= 0
    ) {
      return;
    }

    const timer = window.setInterval(
      showNextImage,
      autoplayDelay,
    );

    return () => {
      window.clearInterval(timer);
    };
  }, [
    autoplayDelay,
    hasMultipleImages,
    isPaused,
    reduceMotion,
    showNextImage,
  ]);

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    if (!hasMultipleImages) return;

    if (info.offset.x > 70) {
      showPreviousImage();
      return;
    }

    if (info.offset.x < -70) {
      showNextImage();
    }
  };

  const handleKeyboardNavigation = (
    event: KeyboardEvent<HTMLElement>,
  ) => {
    if (!hasMultipleImages) return;

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      showPreviousImage();
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      showNextImage();
    }
  };

  if (!activeImage || images.length === 0) {
    return null;
  }

  const activeImageFailed = failedImages[activeIndex];

  /*
   * First preference: real ratio detected after loading.
   * Second preference: ratio provided in image data.
   * Final fallback: 16:9.
   */
  const activeAspectRatio =
    imageAspectRatios[activeIndex] ??
    activeImage.aspectRatio ??
    16 / 9;

  return (
    <section className="relative overflow-hidden bg-[#f7f9fc] px-4 py-12 sm:px-6 sm:py-16 md:px-8 lg:px-12 lg:py-20">
      {/* Background decorations */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#286cba]/[0.05] blur-[110px]" />

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
          {/* Top accent */}
          <div className="h-[4px] w-full bg-[linear-gradient(90deg,#286cba,#55b8c6,#524095)]" />

          {/* Carousel */}
          <motion.figure
            variants={fadeUpVariants}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocusCapture={() => setIsPaused(true)}
            onBlurCapture={() => setIsPaused(false)}
            onKeyDown={handleKeyboardNavigation}
            tabIndex={hasMultipleImages ? 0 : -1}
            aria-label="Event image carousel"
            className="relative border-b border-[#e3e8f0] bg-[#edf2f8] p-2 outline-none sm:p-4 lg:p-6"
          >
            {/* Height automatically follows the original image ratio */}
            <motion.div
              layout
              transition={{
                layout: {
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                },
              }}
              style={{
                aspectRatio: activeAspectRatio,
              }}
              className="relative mx-auto w-full max-w-[1140px] overflow-hidden rounded-[20px] border border-white bg-white shadow-[0_14px_40px_rgba(31,43,72,0.09)]"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeImage.src}-${activeIndex}`}
                  variants={carouselVariants}
                  initial={reduceMotion ? false : "enter"}
                  animate="center"
                  exit={reduceMotion ? undefined : "exit"}
                  drag={hasMultipleImages ? "x" : false}
                  dragConstraints={{
                    left: 0,
                    right: 0,
                  }}
                  dragElastic={0.12}
                  onDragEnd={handleDragEnd}
                  className={`absolute inset-0 ${
                    hasMultipleImages
                      ? "cursor-grab active:cursor-grabbing"
                      : ""
                  }`}
                >
                  {!activeImageFailed ? (
                    <Image
                      src={activeImage.src}
                      alt={activeImage.alt}
                      fill
                      priority={
                        priorityFirstImage &&
                        activeIndex === 0
                      }
                      sizes="(max-width: 768px) 100vw, 1140px"
                      style={{
                        objectPosition:
                          activeImage.objectPosition ??
                          "center center",
                      }}
                      className="pointer-events-none select-none object-contain"
                      onLoadingComplete={(imageElement) => {
                        const { naturalWidth, naturalHeight } =
                          imageElement;

                        if (
                          naturalWidth <= 0 ||
                          naturalHeight <= 0
                        ) {
                          return;
                        }

                        const naturalAspectRatio =
                          naturalWidth / naturalHeight;

                        setImageAspectRatios((currentRatios) => {
                          if (
                            currentRatios[activeIndex] ===
                            naturalAspectRatio
                          ) {
                            return currentRatios;
                          }

                          return {
                            ...currentRatios,
                            [activeIndex]:
                              naturalAspectRatio,
                          };
                        });
                      }}
                      onError={() => {
                        setFailedImages((currentImages) => ({
                          ...currentImages,
                          [activeIndex]: true,
                        }));
                      }}
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center px-6 text-center">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#edf2f8] text-[#667085]">
                        <ImageOff size={24} />
                      </div>

                      <p className="mt-4 text-[14px] font-semibold text-[#344054]">
                        Event image could not be loaded
                      </p>

                      <p className="mt-2 max-w-md break-all text-[12px] leading-6 text-[#8a93a3]">
                        Check the image path:{" "}
                        {activeImage.src}
                      </p>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Image counter */}
              {hasMultipleImages && (
                <div className="absolute right-3 top-3 z-20 rounded-full border border-white/40 bg-[#1b2844]/65 px-3 py-1.5 text-[11px] font-bold text-white shadow-lg backdrop-blur-md sm:right-5 sm:top-5 sm:px-4 sm:py-2 sm:text-[12px]">
                  {String(activeIndex + 1).padStart(
                    2,
                    "0",
                  )}{" "}
                  /{" "}
                  {String(images.length).padStart(
                    2,
                    "0",
                  )}
                </div>
              )}

              {/* Previous button */}
              {hasMultipleImages && (
                <button
                  type="button"
                  onClick={showPreviousImage}
                  aria-label="Show previous image"
                  className="absolute left-3 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-white/90 text-[#344054] shadow-[0_10px_30px_rgba(15,28,57,0.16)] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-[#286cba] hover:text-white sm:left-5 sm:h-12 sm:w-12"
                >
                  <ChevronLeft
                    size={21}
                    strokeWidth={2}
                  />
                </button>
              )}

              {/* Next button */}
              {hasMultipleImages && (
                <button
                  type="button"
                  onClick={showNextImage}
                  aria-label="Show next image"
                  className="absolute right-3 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-white/90 text-[#344054] shadow-[0_10px_30px_rgba(15,28,57,0.16)] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-[#524095] hover:text-white sm:right-5 sm:h-12 sm:w-12"
                >
                  <ChevronRight
                    size={21}
                    strokeWidth={2}
                  />
                </button>
              )}

              {/* Carousel dots */}
              {hasMultipleImages && (
                <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/25 bg-[#1b2844]/60 px-3 py-2 shadow-lg backdrop-blur-md sm:bottom-5">
                  {images.map((image, index) => {
                    const isActive =
                      index === activeIndex;

                    return (
                      <button
                        key={`${image.src}-${index}`}
                        type="button"
                        onClick={() => {
                          setActiveIndex(index);
                        }}
                        aria-label={`Show image ${
                          index + 1
                        }`}
                        aria-current={
                          isActive
                            ? "true"
                            : undefined
                        }
                        className={`h-2 rounded-full transition-all duration-300 ${
                          isActive
                            ? "w-7 bg-white"
                            : "w-2 bg-white/45 hover:bg-white/80"
                        }`}
                      />
                    );
                  })}
                </div>
              )}
            </motion.div>
          </motion.figure>

          {/* Paragraph content */}
          <div className="px-5 py-8 sm:px-8 sm:py-10 md:px-10 lg:px-14 lg:py-14">
            <div className="space-y-6 sm:space-y-7">
              {paragraphs.map((paragraph, index) => (
                <motion.p
                  key={`${index}-${paragraph.slice(0, 20)}`}
                  variants={fadeUpVariants}
                  className={`text-[14px] leading-7 sm:text-[16px] sm:leading-8 ${
                    index === 0
                      ? "border-l-[3px] border-[#286cba] pl-4 font-semibold text-[#293448] sm:pl-6"
                      : "text-[#505b6d]"
                  }`}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* Contact */}
            <motion.div
              variants={fadeUpVariants}
              className="mt-10 border-t border-[#e1e6ee] pt-7 sm:mt-12 sm:pt-8"
            >
              <div className="flex items-start gap-3 sm:items-center">
                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,rgba(40,108,186,0.12),rgba(82,64,149,0.12))] text-[#286cba] sm:mt-0">
                  <Phone size={17} />
                </div>

                <p className="text-[14px] leading-7 text-[#303a4a] sm:text-[16px] sm:leading-8">
                  {contactPrefix}{" "}
                  <Link
                    href={phoneHref}
                    className="font-bold text-[#286cba] transition-colors duration-300 hover:text-[#524095]"
                  >
                    {phoneLabel}
                  </Link>{" "}
                  {contactSuffix}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.article>
    </section>
  );
}