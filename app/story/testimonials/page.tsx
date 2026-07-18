"use client";

import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  X,
} from "lucide-react";
import {
  AnimatePresence,
  motion,
  type Variants,
  useReducedMotion,
} from "framer-motion";
import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

import InnerBanner from "@/components/InnerBanner";

type Testimonial = {
  id: string;
  name: string;
  category: string;
  content: string;
  image: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    id: "anandhi",
    name: "Anandhi",
    category: "Multiple Problems",
    image: "/images/anandhi.png",
    rating: 4,
    content:
      "I came to SPARRC with multiple problems. I suffered with low back pain, hip and toe pain and shoulder pain for more than 10 long years. 2 years ago, I was detected with breast cancer and underwent radical mastectomy. Even doing my daily activities like dressing etc was very difficult for me. I had actually lost my self-confidence. I came to SPARRC with a lot of hope. Underwent the treatment and rehabilitation. I am now able to do all my activities independently. Exercises have reduced the heaviness in my body and made me feel more energetic. I love participating in the weekly group activities.",
  },
  {
    id: "alagammai-muthiah",
    name: "Alagammai Muthiah",
    category: "",
    image: "/images/alagammai-muthiah.png",
    rating: 4,
    content:
      "I had come to Dr. Kannan for treatment of my knee stiffness and pain which I had for 8 years. Following a road traffic accident, I had injured my knees and had an open wound in the right leg. Orthopedics were treating the wound with ointments and advised me total knee replacement for both knees. Through a relative, I had heard about SPARRC and came in to meet Dr. Kannan Pugazhendi who advised therapy and PEMF (Pulsed Electromagnetic Therapy). I did not initially trust the magnetic therapy but after 26 sessions, the wound completely closed such that nobody could see or say I had an open wound in that area. During the same period I underwent therapy sessions and rehabilitative exercises, which helped me to get rid of my stiffness by more than 80%. I thank Doc and the entire SPARRC team, for enabling me to avoid surgeries. All of the staff were really good and helpful.",
  },
  {
    id: "tinu-tharique",
    name: "Tinu Tharique",
    category: "Sports Medicine",
    image: "/images/tinu-tharique.png",
    rating: 5,
    content:
      "I am Tinu Tharique, 22-year old National Boxer. I had a supraspinatus tendon tear during one of my practice session. My doctor insisted on surgery, but my coach referred me to Dr. Kannan, who prescribed therapy followed by strength training. Within a month I was able to get back to my game. Now I am with SPARRC for more than a year for my strength training. The way they are approaching & assessing is really professional. Definitely the best part of my training has been at SPARRC. ACHIEVEMENTS: * Bronze in national level * Two gold in State level",
  },
];

const sectionVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.08,
    },
  },
};

const leftRevealVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -36,
    y: 18,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const rightRevealVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 36,
    y: 18,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const cardsRevealVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 32,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

function RatingStars({
  rating,
  size = 16,
}: {
  rating: number;
  size?: number;
}) {
  return (
    <div
      className="flex items-center gap-1"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, index) => {
        const isFilled = index < rating;

        return (
          <Star
            key={index}
            size={size}
            strokeWidth={1.7}
            className={
              isFilled
                ? "fill-[#ffad16] text-[#ffad16]"
                : "fill-[#d5d8de] text-[#d5d8de]"
            }
          />
        );
      })}
    </div>
  );
}

export default function TestimonialsPage() {
  const reduceMotion = useReducedMotion();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const [selectedTestimonial, setSelectedTestimonial] =
    useState<Testimonial | null>(null);

  const maxIndex = useMemo(
    () => Math.max(testimonials.length - slidesPerView, 0),
    [slidesPerView],
  );

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth >= 768) {
        setSlidesPerView(2);
        return;
      }

      setSlidesPerView(1);
    };

    updateSlidesPerView();

    window.addEventListener("resize", updateSlidesPerView);

    return () => {
      window.removeEventListener(
        "resize",
        updateSlidesPerView,
      );
    };
  }, []);

  useEffect(() => {
    setCurrentIndex((previousIndex) =>
      Math.min(previousIndex, maxIndex),
    );
  }, [maxIndex]);

  const showPreviousSlide = useCallback(() => {
    if (maxIndex === 0) return;

    setCurrentIndex((previousIndex) =>
      previousIndex === 0
        ? maxIndex
        : previousIndex - 1,
    );
  }, [maxIndex]);

  const showNextSlide = useCallback(() => {
    if (maxIndex === 0) return;

    setCurrentIndex((previousIndex) =>
      previousIndex >= maxIndex
        ? 0
        : previousIndex + 1,
    );
  }, [maxIndex]);

  useEffect(() => {
    if (
      maxIndex === 0 ||
      isPaused ||
      reduceMotion ||
      selectedTestimonial
    ) {
      return;
    }

    const timer = window.setInterval(() => {
      showNextSlide();
    }, 3000);

    return () => {
      window.clearInterval(timer);
    };
  }, [
    isPaused,
    maxIndex,
    reduceMotion,
    selectedTestimonial,
    showNextSlide,
  ]);

  useEffect(() => {
    if (!selectedTestimonial) return;

    const previousOverflow = document.body.style.overflow;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedTestimonial(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [selectedTestimonial]);

  const initialState = reduceMotion ? false : "hidden";
  const visibleState = reduceMotion ? undefined : "visible";

  return (
    <main className="overflow-hidden bg-white">
      <InnerBanner
        title="Testimonials"
        bgImage="/images/page-banner-bg.png"
      />

      {/* Featured testimonial and video */}
      <section className="relative bg-white px-4 py-10 sm:px-6 sm:py-14 md:px-10 lg:px-16 lg:py-16">
        <motion.div
          initial={initialState}
          whileInView={visibleState}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={sectionVariants}
          className="mx-auto max-w-[1000px]"
        >
          <div className="grid overflow-hidden rounded-[16px] border border-[#e9ebef] bg-white shadow-[0_14px_42px_rgba(22,32,53,0.10)] md:grid-cols-[0.4fr_0.6fr]">
            {/* Featured content */}
            <motion.article
              variants={leftRevealVariants}
              className="flex flex-col justify-center px-6 py-7 sm:px-8 sm:py-9 lg:px-10"
            >
              <h1 className="text-[20px] font-bold leading-[1.4] text-[#161616] sm:text-[22px] lg:text-[24px]">
                Mohammed Salahuddin – Ace Triple Jumper heals at SPARRC
              </h1>

              <p className="mt-5 text-[11px] leading-6 text-[#8a8d93] sm:text-[12px] sm:leading-7">
                S N Mohammed Salahuddin is a 25 year old triple jumper who has
                his target set on next Asian Indoor Games in February and to
                qualify for the 2020 Olympics.
              </p>

              <p className="mt-2 text-[11px] leading-6 text-[#8a8d93] sm:text-[12px] sm:leading-7">
                The triple jump champ, who has been closely associated with
                SPARRC from the initial days of his training, speaks about his
                experience with Sparrc after his recent wins in several
                international events.
              </p>
            </motion.article>

            {/* Featured video */}
            <motion.div
              variants={rightRevealVariants}
              className="relative bg-[#e7f4fb]"
            >
              <div className="relative aspect-video w-full md:h-full md:min-h-[310px] md:aspect-auto">
                <iframe
                  src="https://www.youtube.com/embed/ym27rW5ZuRU?rel=0"
                  title="Mohammed Salahuddin heals at SPARRC"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full border-0"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Testimonial cards */}
      <section className="relative overflow-hidden bg-white px-3 pb-16 pt-6 sm:px-5 sm:pb-20 md:px-8 lg:px-12 lg:pb-24 lg:pt-10">
        <motion.div
          initial={initialState}
          whileInView={visibleState}
          viewport={{
            once: true,
            amount: 0.08,
          }}
          variants={cardsRevealVariants}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={() => setIsPaused(false)}
          className="relative mx-auto max-w-[1260px]"
        >
          {/* Navigation */}
          {maxIndex > 0 && (
            <div className="mb-4 flex justify-end gap-2">
              <button
                type="button"
                onClick={showPreviousSlide}
                aria-label="Show previous testimonial"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e4e7ec] bg-white text-[#344054] shadow-[0_6px_18px_rgba(25,35,55,0.07)] transition-all duration-300 hover:bg-[#286cba] hover:text-white sm:h-10 sm:w-10"
              >
                <ChevronLeft size={18} />
              </button>

              <button
                type="button"
                onClick={showNextSlide}
                aria-label="Show next testimonial"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e4e7ec] bg-white text-[#344054] shadow-[0_6px_18px_rgba(25,35,55,0.07)] transition-all duration-300 hover:bg-[#524095] hover:text-white sm:h-10 sm:w-10"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          )}

          {/* Carousel viewport */}
          <div className="overflow-hidden py-4">
            <motion.div
              animate={{
                x: `-${currentIndex * (100 / slidesPerView)}%`,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.75,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex items-stretch"
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  style={{
                    flexBasis: `${100 / slidesPerView}%`,
                  }}
                  className="shrink-0 px-2 sm:px-3 lg:px-4"
                >
                  <motion.article
                    whileHover={
                      reduceMotion
                        ? undefined
                        : {
                            y: -5,
                          }
                    }
                    transition={{
                      duration: 0.3,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="group flex h-[350px] flex-col rounded-[16px] border border-[#e9ebef] bg-white px-5 py-6 shadow-[0_10px_32px_rgba(23,31,49,0.07)] transition-shadow duration-300 hover:shadow-[0_18px_42px_rgba(23,31,49,0.11)] sm:h-[365px] sm:px-6 sm:py-7 lg:h-[380px] lg:px-7"
                  >
                    {/* Rating */}
                    <RatingStars rating={testimonial.rating} />

                    {/* Fixed content area */}
                    <div className="relative mt-5 h-[180px] overflow-hidden sm:h-[192px] lg:h-[202px]">
                      <p className="text-[10.5px] leading-[1.75] text-[#343942] sm:text-[11.5px] sm:leading-[1.78] lg:text-[12px]">
                        {testimonial.content}
                      </p>

                      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-white via-white/95 to-transparent" />
                    </div>

                    {/* Read More */}
                    <button
                      type="button"
                      onClick={() =>
                        setSelectedTestimonial(testimonial)
                      }
                      className="mt-3 inline-flex w-fit items-center gap-1.5 text-[11px] font-bold text-[#286cba] transition-colors duration-300 hover:text-[#524095] sm:text-[12px]"
                    >
                      Read More
                      <ChevronRight size={13} />
                    </button>

                    {/* Compact profile footer */}
                    <div className="mt-auto border-t border-[#f0f1f4] pt-4">
                      <div className="flex min-w-0 items-center gap-3">
                        {/* Profile image */}
                        <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-[#e8ebf0] bg-[#edf0f4]">
                          <Image
                            src={testimonial.image}
                            alt=""
                            fill
                            sizes="40px"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            onError={(event) => {
                              event.currentTarget.style.display = "none";
                            }}
                          />
                        </div>

                        {/* Small profile text */}
                        <div className="flex min-w-0 flex-1 items-center gap-x-3">
                          <p className="min-w-0 truncate text-[12px] font-semibold leading-5 text-[#22252b] sm:text-[13px]">
                            {testimonial.name}
                          </p>

                          {testimonial.category && (
                            <p className="min-w-0 truncate text-[9px] font-normal leading-4 text-[#9a9da5] sm:text-[10px]">
                              {testimonial.category}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.article>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Indicators */}
          {maxIndex > 0 && (
            <div className="mt-4 flex items-center justify-center gap-2">
              {Array.from({
                length: maxIndex + 1,
              }).map((_, index) => {
                const isActive = index === currentIndex;

                return (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setCurrentIndex(index)}
                    aria-label={`Show testimonial group ${index + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      isActive
                        ? "w-7 bg-[#524095]"
                        : "w-2 bg-[#d8dbe1] hover:bg-[#aeb3bd]"
                    }`}
                  />
                );
              })}
            </div>
          )}
        </motion.div>
      </section>

      {/* Read-more modal */}
      <AnimatePresence>
        {selectedTestimonial && (
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
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#111827]/55 px-4 py-6 backdrop-blur-[4px]"
            onMouseDown={(event) => {
              if (event.currentTarget === event.target) {
                setSelectedTestimonial(null);
              }
            }}
          >
            <motion.article
              initial={{
                opacity: 0,
                y: 30,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 20,
                scale: 0.98,
              }}
              transition={{
                duration: 0.35,
                ease: [0.16, 1, 0.3, 1],
              }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="testimonial-dialog-title"
              className="relative max-h-[88vh] w-full max-w-[680px] overflow-y-auto rounded-[22px] bg-white px-6 py-7 shadow-[0_30px_100px_rgba(0,0,0,0.25)] sm:px-8 sm:py-9"
            >
              <button
                type="button"
                onClick={() => setSelectedTestimonial(null)}
                aria-label="Close testimonial"
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#f2f4f7] text-[#475467] transition-colors duration-300 hover:bg-[#286cba] hover:text-white"
              >
                <X size={18} />
              </button>

              <RatingStars
                rating={selectedTestimonial.rating}
                size={17}
              />

              <p className="mt-7 text-[13px] leading-7 text-[#3d4450] sm:text-[14px] sm:leading-8">
                {selectedTestimonial.content}
              </p>

              <div className="mt-8 flex min-w-0 items-center gap-3 border-t border-[#eaecf0] pt-5">
                <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-[#e8ebf0] bg-[#edf0f4]">
                  <Image
                    src={selectedTestimonial.image}
                    alt=""
                    fill
                    sizes="44px"
                    className="object-cover"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />
                </div>

                <div className="min-w-0">
                  <p
                    id="testimonial-dialog-title"
                    className="truncate text-[13px] font-semibold leading-5 text-[#22252b] sm:text-[14px]"
                  >
                    {selectedTestimonial.name}
                  </p>

                  {selectedTestimonial.category && (
                    <p className="mt-0.5 truncate text-[10px] leading-4 text-[#98a2b3] sm:text-[11px]">
                      {selectedTestimonial.category}
                    </p>
                  )}
                </div>
              </div>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}