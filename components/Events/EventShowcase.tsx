"use client";

import Image from "next/image";
import { useState } from "react";
import {
  AnimatePresence,
  motion,
  type Variants,
} from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  MapPin,
} from "lucide-react";

type EventSchedule = {
  location: string;
  date: string;
  time: string;
};

type EventItem = {
  id: number;
  title: string;
  image: string;
  description: string[];
  schedule?: EventSchedule[];
  highlights?: string[];
};

const events: EventItem[] = [
  {
    id: 1,
    title: "Balance your Sleep & Stress January 2020",
    image: "/images/balance-sleep-stress-january-2020.png",
    description: [
      "Learn to Balance between Sleep and Stress for optimal health. Hear Doc Kannan Pugazhendi talk about Growth Hormones and Cortisol and their effects on our bodies in a talk at SPARRC Alwarpet on Thursday 30th January, 2020 between 10 am and 12 noon.",
      "For more details, contact our helpline number at +91 965 965 0000 or your nearest SPARRC centre.",
    ],
  },
  {
    id: 2,
    title: "Laughter Therapy January 2020",
    image: "/images/laughter-therapy-january-2020.png",
   
    description: [
      "Laughter is the best medicine. Come laugh out loud with no holds barred at SPARRC Laughter Therapy Sessions to be held at our various centres in January 2020.",
    ],
    schedule: [
      {
        location: "Alwarpet",
        date: "Jan 21st",
        time: "6.30 am to 7.30",
      },
      {
        location: "Besant Nagar",
        date: "Jan 22nd",
        time: "11 am to 12 noon",
      },
      {
        location: "ECR",
        date: "Jan 23rd",
        time: "11am to 12noon",
      },
      {
        location: "Ashok Nagar",
        date: "Jan 24th",
        time: "11am to 12 noon",
      },
      {
        location: "Chrompet",
        date: "Jan 27th",
        time: "11am to 12 noon",
      },
      {
        location: "Anna Nagar",
        date: "Jan 28th",
        time: "11am to 12 noon",
      },
      {
        location: "Mount Road",
        date: "Jan 11th",
        time: "10am to 11am",
      },
      {
        location: "Velachery",
        date: "Jan 10th",
        time: "8 am to 9 am",
      },
    ],
  },
  {
    id: 3,
    title: "Dec 2019",
    image: "/images/fitness-mela-dec-2019.png",
    description: [
      "Fitness Mela is ongoing at SPARRC now. Sign up either to",
    ],
    highlights: [
      "Lose 3 Kgs, or",
      "Improve your posture, or",
      "Improve your flexibility and Balance and get a 15 days FREE TRIAL.",
    ],
  },
];

const contentVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 36,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
  exit: {
    opacity: 0,
    x: -30,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const imageVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.96,
    x: -28,
  },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.97,
    transition: {
      duration: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function EventShowcase() {
  const [activeEventId, setActiveEventId] = useState(events[1].id);

  const activeEvent =
    events.find((event) => event.id === activeEventId) ?? events[0];

  return (
    <section className="relative overflow-hidden bg-white px-4 py-14 sm:px-6 sm:py-16 md:px-8 lg:px-12 lg:py-20 xl:px-16">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-36 top-10 h-80 w-80 rounded-full bg-[#286cba]/[0.045] blur-[110px]" />

      <div className="pointer-events-none absolute -right-36 bottom-10 h-80 w-80 rounded-full bg-[#59419c]/[0.05] blur-[110px]" />

      <div className="relative mx-auto max-w-[1380px]">
        {/* Mobile event navigation */}
        <div className="mb-7 lg:hidden">
          <div className="event-scrollbar flex gap-3 overflow-x-auto pb-3">
            {events.map((event) => {
              const isActive = event.id === activeEvent.id;

              return (
                <button
                  key={event.id}
                  type="button"
                  onClick={() => setActiveEventId(event.id)}
                  className={`shrink-0 rounded-full border px-5 py-3 text-left text-[13px] font-semibold transition-all duration-300 ${
                    isActive
                      ? "border-[#513aa6] bg-[#513aa6] text-white shadow-[0_10px_25px_rgba(81,58,166,0.22)]"
                      : "border-[#e5e8ee] bg-white text-[#343943] hover:border-[#513aa6]/40 hover:text-[#513aa6]"
                  }`}
                >
                  {event.title}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-[88px_minmax(0,460px)_minmax(0,1fr)] lg:gap-5 xl:grid-cols-[100px_minmax(0,500px)_minmax(0,1fr)] xl:gap-7">
          {/* Desktop thumbnails */}
          <div className="hidden space-y-4 lg:block">
            {events.map((event) => {
              const isActive = event.id === activeEvent.id;

              return (
                <motion.button
                  key={event.id}
                  type="button"
                  onClick={() => setActiveEventId(event.id)}
                  whileHover={{
                    y: -3,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  aria-label={`Show ${event.title}`}
                  className={`group relative block h-[86px] w-full overflow-hidden rounded-[12px] border-2 bg-[#f3f4f6] transition-all duration-300 xl:h-[96px] ${
                    isActive
                      ? "border-[#513aa6] shadow-[0_12px_28px_rgba(52,51,83,0.17)]"
                      : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    sizes="100px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <span
                    className={`absolute inset-0 transition-colors duration-300 ${
                      isActive
                        ? "bg-transparent"
                        : "bg-white/10 group-hover:bg-transparent"
                    }`}
                  />

                  {isActive && (
                    <motion.span
                      layoutId="active-event-thumbnail"
                      className="absolute bottom-0 left-0 h-1 w-full bg-[#513aa6]"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Main event image */}
          <div className="relative min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeEvent.id}
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="relative aspect-[1.08/1] w-full overflow-hidden rounded-[20px] bg-[#f3f5f7] shadow-[0_24px_55px_rgba(36,46,74,0.14)] sm:aspect-[1.25/1] lg:aspect-[1.03/1] xl:aspect-[1.12/1]"
              >
                <Image
                  src={activeEvent.image}
                  alt={activeEvent.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-contain"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
              </motion.div>
            </AnimatePresence>

            {/* Image counter */}
            <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full border border-white/30 bg-white/85 px-3 py-2 text-[12px] font-semibold text-[#333845] shadow-md backdrop-blur-md">
              <span className="text-[#513aa6]">
                {String(activeEvent.id).padStart(2, "0")}
              </span>

              <span className="text-[#a5a9b2]">/</span>

              <span>{String(events.length).padStart(2, "0")}</span>
            </div>
          </div>

          {/* Event content */}
          <div className="min-w-0 lg:pl-3 xl:pl-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeEvent.id}
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <motion.div
                  variants={itemVariants}
                  className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#f1effa] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#513aa6]"
                >
                  <CalendarDays size={14} />
                  SPARRC Event
                </motion.div>

                <motion.h2
                  variants={itemVariants}
                  className="max-w-[680px] text-[29px] font-extrabold leading-[1.2] text-[#11151c] sm:text-[34px] lg:text-[38px] xl:text-[42px]"
                >
                  {activeEvent.title}
                </motion.h2>

                <motion.div
                  variants={itemVariants}
                  className="mt-5 h-[3px] w-14 rounded-full bg-[#55b8c6]"
                />

                <motion.div
                  variants={contentVariants}
                  className="mt-6 space-y-4"
                >
                  {activeEvent.description.map((paragraph, index) => (
                    <motion.p
                      key={`${activeEvent.id}-description-${index}`}
                      variants={itemVariants}
                      className="max-w-[760px] text-[14px] leading-7 text-[#797f89] sm:text-[15px] sm:leading-8"
                    >
                      {paragraph}
                    </motion.p>
                  ))}
                </motion.div>

                {/* Laughter Therapy schedule */}
                {activeEvent.schedule && (
                  <motion.div
                    variants={contentVariants}
                    className="mt-7 grid gap-x-7 gap-y-3 sm:grid-cols-2"
                  >
                    {activeEvent.schedule.map((item, index) => (
                      <motion.div
                        key={`${item.location}-${item.date}`}
                        variants={itemVariants}
                        className="group flex items-start gap-3 rounded-[12px] px-2 py-1.5 transition-colors duration-300 hover:bg-[#f8f7fc]"
                      >
                        <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#efedf9] text-[#513aa6] transition-all duration-300 group-hover:bg-[#513aa6] group-hover:text-white">
                          <MapPin size={13} strokeWidth={2.2} />
                        </div>

                        <p className="text-[13px] font-semibold leading-6 text-[#333843] sm:text-[14px]">
                          {item.location} {item.date} – {item.time}
                        </p>
                      </motion.div>
                    ))}
                  </motion.div>
                )}

                {/* Fitness Mela highlights */}
                {activeEvent.highlights && (
                  <motion.ul
                    variants={contentVariants}
                    className="mt-5 space-y-3"
                  >
                    {activeEvent.highlights.map((item) => (
                      <motion.li
                        key={item}
                        variants={itemVariants}
                        className="flex items-start gap-3 text-[14px] leading-7 text-[#333843] sm:text-[15px]"
                      >
                        <span className="mt-[9px] h-2 w-2 shrink-0 rounded-full bg-[#55b8c6]" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                )}

                {activeEvent.id === 3 && (
                  <motion.p
                    variants={itemVariants}
                    className="mt-6 max-w-[760px] text-[14px] leading-7 text-[#797f89] sm:text-[15px] sm:leading-8"
                  >
                    Call +91 965 965 0000 or your nearest SPARRC centre for more
                    details.
                  </motion.p>
                )}

                {/* Desktop navigation labels */}
                <motion.div
                  variants={itemVariants}
                  className="mt-8 hidden flex-wrap gap-2 lg:flex"
                >
                  {events.map((event) => {
                    const isActive = event.id === activeEvent.id;

                    return (
                      <button
                        key={event.id}
                        type="button"
                        onClick={() => setActiveEventId(event.id)}
                        className={`group inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-[12px] font-semibold transition-all duration-300 ${
                          isActive
                            ? "border-[#513aa6] bg-[#513aa6] text-white"
                            : "border-[#e3e6eb] bg-white text-[#5e646f] hover:border-[#513aa6]/40 hover:text-[#513aa6]"
                        }`}
                      >
                        {event.id}

                        {/* <ArrowRight
                          size={13}
                          className={`transition-transform duration-300 ${
                            isActive
                              ? "translate-x-0.5"
                              : "group-hover:translate-x-0.5"
                          }`}
                        /> */}
                      </button>
                    );
                  })}
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <style jsx>{`
        .event-scrollbar {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .event-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}