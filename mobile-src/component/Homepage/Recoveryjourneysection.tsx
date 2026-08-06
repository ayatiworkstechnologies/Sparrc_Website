"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";

/* ------------------------------------------------------------------ */
/* Types                                                               */
/* ------------------------------------------------------------------ */

export interface TherapyItem {
  id: string;
  title: string;
  tag: string;
  image: string;
  icon: string;
  href: string;
}

export interface FilterOption {
  id: string;
  label: string;
}

/* ------------------------------------------------------------------ */
/* Therapy data                                                        */
/* ------------------------------------------------------------------ */

export const THERAPIES: TherapyItem[] = [
  {
    id: "physiotherapy",
    title: "Physiotherapy",
    tag: "Therapy",
    image: "/mobile/images/physiotherapy.png",
    icon: "/mobile/icons/theraphy.svg",
    href: "/therapies/physiotherapy",
  },
  {
    id: "mtpt",
    title: "MTPT",
    tag: "Therapy",
    image: "/mobile/images/mtpt-1.png",
    icon: "/mobile/icons/theraphy.svg",
    href: "/therapies/mtpt",
  },
  {
    id: "pemf",
    title: "PEMF",
    tag: "Therapy",
    image: "/mobile/images/pemf.png",
    icon: "/mobile/icons/theraphy.svg",
    href: "/therapies/pemf",
  },
  {
    id: "group-therapy",
    title: "Group Therapy",
    tag: "Therapy",
    image: "/mobile/images/group-therapy.png",
    icon: "/mobile/icons/theraphy.svg",
    href: "/therapies/group-therapy",
  },
  {
    id: "yoga-therapy",
    title: "Yoga Therapy",
    tag: "Therapy",
    image: "/mobile/images/yoga-therapy.png",
    icon: "/mobile/icons/theraphy.svg",
    href: "/therapies/yoga-therapy",
  },
  {
    id: "functional-training",
    title: "Functional Training",
    tag: "Therapy",
    image: "/mobile/images/functional-training.png",
    icon: "/mobile/icons/theraphy.svg",
    href: "/therapies/functional-training",
  },
  {
    id: "prescription-exercise",
    title: "Prescription Exercise",
    tag: "Therapy",
    image: "/mobile/images/prescription-exercise.png",
    icon: "/mobile/icons/theraphy.svg",
    href: "/therapies/prescription-exercise",
  },
  {
    id: "sports-massage",
    title: "Sports Massage",
    tag: "Therapy",
    image: "/mobile/images/sports-massage.png",
    icon: "/mobile/icons/theraphy.svg",
    href: "/therapies/sports-massage",
  },
  {
    id: "aquatherapy",
    title: "Aquatherapy",
    tag: "Therapy",
    image: "/mobile/images/aquatherapy.png",
    icon: "/mobile/icons/theraphy.svg",
    href: "/therapies/aquatherapy",
  },
  {
    id: "kalaripayattu",
    title: "Kalaripayattu",
    tag: "Therapy",
    image: "/mobile/images/kalaripayattu.png",
    icon: "/mobile/icons/theraphy.svg",
    href: "/therapies/kalaripayattu",
  },
  {
    id: "cranio-sacral",
    title: "Cranio Sacral Therapy",
    tag: "Therapy",
    image: "/mobile/images/cranio-sacral.png",
    icon: "/mobile/icons/theraphy.svg",
    href: "/therapies/cranio-sacral",
  },
  {
    id: "six-healing-sounds",
    title: "Six Healing Sounds",
    tag: "Therapy",
    image: "/mobile/images/six-healing-sounds.png",
    icon: "/mobile/icons/theraphy.svg",
    href: "/therapies/six-healing-sounds",
  },
];

/* ------------------------------------------------------------------ */
/* Filters — no icons                                                  */
/* ------------------------------------------------------------------ */

export const FILTERS: FilterOption[] = [
  {
    id: "pain-relief",
    label: "Pain Relief",
  },
  {
    id: "sports-injury",
    label: "Sports Injury",
  },
  {
    id: "rehabilitation",
    label: "Rehabilitation",
  },
];

/* ------------------------------------------------------------------ */
/* Motion variants                                                     */
/* ------------------------------------------------------------------ */

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 14,
  },

  show: (index: number) => ({
    opacity: 1,
    y: 0,

    transition: {
      delay: index * 0.05,
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

/* ------------------------------------------------------------------ */
/* Carousel configuration                                              */
/* ------------------------------------------------------------------ */

const CARD_WIDTH = 130;
const CARD_GAP = 12;
const AUTOPLAY_INTERVAL = 2800;
const RESUME_DELAY = 2000;

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */

export default function RecoveryJourneySection() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const isPausedRef = useRef(false);
  const resumeTimeoutRef = useRef<number | null>(null);

  const prefersReducedMotion = useReducedMotion();

  /* ---------------------------------------------------------------- */
  /* Autoplay                                                          */
  /* ---------------------------------------------------------------- */

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const track = trackRef.current;

    if (!track) {
      return;
    }

    const step = CARD_WIDTH + CARD_GAP;

    const intervalId = window.setInterval(() => {
      if (isPausedRef.current) {
        return;
      }

      const maxScroll =
        track.scrollWidth - track.clientWidth;

      const isAtEnd =
        track.scrollLeft >= maxScroll - step / 2;

      track.scrollTo({
        left: isAtEnd
          ? 0
          : track.scrollLeft + step,
        behavior: "smooth",
      });
    }, AUTOPLAY_INTERVAL);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [prefersReducedMotion]);

  /* ---------------------------------------------------------------- */
  /* Pause autoplay                                                    */
  /* ---------------------------------------------------------------- */

  const pauseAutoplay = () => {
    isPausedRef.current = true;

    if (resumeTimeoutRef.current !== null) {
      window.clearTimeout(resumeTimeoutRef.current);
      resumeTimeoutRef.current = null;
    }
  };

  /* ---------------------------------------------------------------- */
  /* Resume autoplay                                                   */
  /* ---------------------------------------------------------------- */

  const scheduleResume = (
    delay: number = RESUME_DELAY,
  ) => {
    if (resumeTimeoutRef.current !== null) {
      window.clearTimeout(resumeTimeoutRef.current);
    }

    resumeTimeoutRef.current = window.setTimeout(() => {
      isPausedRef.current = false;
      resumeTimeoutRef.current = null;
    }, delay);
  };

  /* ---------------------------------------------------------------- */
  /* Cleanup timeout                                                   */
  /* ---------------------------------------------------------------- */

  useEffect(() => {
    return () => {
      if (resumeTimeoutRef.current !== null) {
        window.clearTimeout(resumeTimeoutRef.current);
        resumeTimeoutRef.current = null;
      }
    };
  }, []);

  return (
    <section className="w-full bg-white px-4 py-6">
      {/* Heading, filters and subtitle */}

      <div>
        <h2 className="text-[26px] font-extrabold leading-tight tracking-tight text-neutral-900">
          What are you recovering from?
        </h2>

        {/* Filter pills — no icons */}

        <div className="mt-3 flex flex-wrap gap-4">
          {FILTERS.map((filter) => (
            <button
              key={filter.id}
              type="button"
              className="
                rounded-full
                border
                border-neutral-300
                bg-white
                px-3.5
                py-2
                text-[13px]
                font-medium
                text-neutral-900
                transition-all
                duration-200
                hover:border-[#1464d2]
                hover:text-[#1464d2]
                active:scale-[0.97]
              "
            >
              {filter.label}
            </button>
          ))}
        </div>

        <p className="mt-3 text-[13px] font-medium text-neutral-400">
          Start Your Recovery Journey
        </p>
      </div>

      {/* Horizontal carousel */}

      <div className="relative mt-3 h-[148px] w-full overflow-hidden">
        <div
          ref={trackRef}
          onMouseEnter={pauseAutoplay}
          onMouseLeave={() => scheduleResume(0)}
          onTouchStart={pauseAutoplay}
          onTouchEnd={() => scheduleResume()}
          onTouchCancel={() => scheduleResume()}
          onPointerDown={pauseAutoplay}
          onPointerUp={() => scheduleResume()}
          onPointerCancel={() => scheduleResume()}
          className="
            flex
            h-full
            items-start
            gap-3
            overflow-x-auto
            overflow-y-hidden
            overscroll-x-contain
            scroll-smooth
            snap-x
            snap-mandatory
            pb-1
            [touch-action:pan-x]
            [-ms-overflow-style:none]
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          "
        >
          {THERAPIES.map((item, index) => (
            <motion.div
              key={item.id}
              custom={index}
              initial={
                prefersReducedMotion
                  ? undefined
                  : "hidden"
              }
              whileInView={
                prefersReducedMotion
                  ? undefined
                  : "show"
              }
              viewport={{
                once: true,
                amount: 0.4,
              }}
              variants={cardVariants}
              whileTap={{
                scale: 0.96,
              }}
              className="
                h-[146px]
                w-[130px]
                shrink-0
                snap-start
              "
            >
              <Link
                href={item.href}
                draggable={false}
                className="group block h-full w-full"
              >
                {/* Therapy image */}

                <div className="relative h-[100px] w-[130px] overflow-hidden rounded-2xl bg-neutral-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={130}
                    height={100}
                    draggable={false}
                    className="
                      pointer-events-none
                      h-[100px]
                      w-[130px]
                      select-none
                      object-cover
                      transition-transform
                      duration-300
                      ease-out
                      group-hover:scale-105
                    "
                  />
                </div>

                {/* Therapy title */}

                <p className="mt-2 truncate text-[15px] font-bold text-neutral-900">
                  {item.title}
                </p>

                {/* Therapy tag */}

                <div className="mt-0.5 flex items-center gap-1 text-[12px] text-neutral-400">
                  <Image
                    src={item.icon}
                    alt=""
                    width={12}
                    height={12}
                    draggable={false}
                    aria-hidden="true"
                    className="pointer-events-none select-none"
                  />

                  <span>{item.tag}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}