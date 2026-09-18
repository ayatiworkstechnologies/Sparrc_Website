"use client";

import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

/* =========================================================
   TYPES
========================================================= */

type NavId =
  | "who-we-are"
  | "what-we-believe"
  | "what-we-do"
  | "woman-behind-sparrc"
  | "clinical-foundation"
  | "whole-person"
  | "breath-story"
  | "recognition"
  | "movement-matrix";

interface NavItem {
  id: NavId;
  label: string;
  shortLabel: string;
}

interface JourneyItem {
  title: string;
  description: string;
}

/* =========================================================
   ANIMATION
========================================================= */

const ease: [number, number, number, number] = [
  0.16,
  1,
  0.3,
  1,
];

/* =========================================================
   SECTION NAVIGATION
========================================================= */

const navItems: NavItem[] = [
  {
    id: "who-we-are",
    label: "Who We Are",
    shortLabel: "Who We Are",
  },
  {
    id: "what-we-believe",
    label: "What We Believe",
    shortLabel: "What We Believe",
  },
  {
    id: "what-we-do",
    label: "What We Do: Test. Treat. Train.",
    shortLabel: "What We Do",
  },
  {
    id: "woman-behind-sparrc",
    label: "The Woman Behind SPARRC",
    shortLabel: "The Woman",
  },
  {
    id: "clinical-foundation",
    label: "The Clinical Foundation",
    shortLabel: "Clinical Foundation",
  },
  {
    id: "whole-person",
    label: "Looking at the Whole Person",
    shortLabel: "Whole Person",
  },
  {
    id: "breath-story",
    label: "Where Breath Enters the Story",
    shortLabel: "Breath Story",
  },
  {
    id: "recognition",
    label: "Recognition",
    shortLabel: "Recognition",
  },
  {
    id: "movement-matrix",
    label: "The SPARRC Movement Matrix",
    shortLabel: "Movement Matrix",
  },
];

/* =========================================================
   WHAT WE DO SLIDER
========================================================= */

const journeyItems: JourneyItem[] = [
  {
    title: "You are in pain",
    description:
      "We help you understand it and rebuild capacity.",
  },
  {
    title: "You have a chronic health condition",
    description:
      "We help you use exercise safely and effectively.",
  },
  {
    title: "You haven’t exercised for years",
    description:
      "We help you start at the right level.",
  },
  {
    title: "You want to lose weight",
    description:
      "We combine movement, exercise, nutrition and behaviour.",
  },
  {
    title: "You’re an athlete",
    description:
      "We measure and develop performance.",
  },
  {
    title: "You’re getting older",
    description:
      "We build strength, balance, fitness and independence.",
  },
  {
    title: "You spend your life at a desk",
    description:
      "We assess your workplace movement and MSK risk.",
  },
  {
    title: "You simply want to stay healthy",
    description:
      "You don’t need to wait until something hurts.",
  },
];

/* =========================================================
   SHARED WHITE CARD
========================================================= */

function ContentCard({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div
      className="
        w-full
        rounded-[22px]
        border
        border-[#DCE3EB]
        bg-white
        px-5
        py-6
        shadow-[0_8px_28px_rgba(25,40,70,0.035)]
      "
    >
      {children}
    </div>
  );
}

/* =========================================================
   IMAGE
   332 × 220
========================================================= */

function StoryImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.97,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.55,
        ease,
      }}
      className="
        relative
        mx-auto
        h-[220px]
        w-full
        max-w-[332px]
        overflow-hidden
        rounded-[18px]
        bg-[#E8EDF2]
      "
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="332px"
        className="
          object-cover
          object-center
          transition-transform
          duration-700
          hover:scale-[1.025]
        "
      />
    </motion.div>
  );
}

/* =========================================================
   AWARD ICON
========================================================= */

function AwardIcon() {
  return (
    <div
      className="
        flex
        h-[40px]
        w-[40px]
        shrink-0
        items-center
        justify-center
        rounded-full
        bg-[#EEE9FF]
      "
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-[18px] w-[18px]"
        stroke="#603BFF"
        strokeWidth="1.8"
        aria-hidden="true"
      >
        <circle
          cx="12"
          cy="9"
          r="4"
        />

        <path
          d="M9.8 12.7 9 19l3-1.8 3 1.8-.8-6.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function SparrcStoryMobile() {
  const prefersReducedMotion =
    useReducedMotion();

  const [activeNav, setActiveNav] =
    useState<NavId>("who-we-are");

  const [activeJourney, setActiveJourney] =
    useState(0);

  const chipsContainerRef =
    useRef<HTMLDivElement | null>(null);

  const chipRefs = useRef<
    Partial<
      Record<
        NavId,
        HTMLButtonElement | null
      >
    >
  >({});

  /* =======================================================
     WHAT WE DO AUTO SLIDER
  ======================================================= */

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveJourney(
        (previous) =>
          (previous + 1) %
          journeyItems.length,
      );
    }, 3200);

    return () => {
      window.clearInterval(timer);
    };
  }, [prefersReducedMotion]);

  /* =======================================================
     KEEP ACTIVE CHIP VISIBLE
  ======================================================= */

  useEffect(() => {
    const container =
      chipsContainerRef.current;

    const activeChip =
      chipRefs.current[activeNav];

    if (
      !container ||
      !activeChip
    ) {
      return;
    }

    const left =
      activeChip.offsetLeft -
      container.clientWidth / 2 +
      activeChip.clientWidth / 2;

    container.scrollTo({
      left,
      behavior: "smooth",
    });
  }, [activeNav]);

  /* =======================================================
     ACTIVE SECTION INDEX
  ======================================================= */

  const activeIndex =
    navItems.findIndex(
      (item) =>
        item.id === activeNav,
    );

  const activeNumber = String(
    activeIndex + 1,
  ).padStart(2, "0");

  /* =======================================================
     CLICK CHIP
  ======================================================= */

  const handleSectionChange = (
    id: NavId,
  ) => {
    if (id === activeNav) {
      return;
    }

    setActiveNav(id);
  };

  return (
    <main
      className="
        min-h-screen
        w-full
        bg-[#F4F7FA]
        px-2
        pb-[120px]
        pt-3
        sm:px-4
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[390px]
          sm:max-w-[430px]
        "
      >
        {/* =================================================
            HERO
        ================================================== */}

        <motion.section
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.65,
            ease,
          }}
          className="
            px-3
            pb-7
          "
        >
          <h1
            className="
              text-[25px]
              font-[700]
              leading-[1.1]
              tracking-[-0.035em]
              text-[#151421]
            "
          >
            We prescribe movement, not
            medicine.
          </h1>

          <p
            className="
              mt-4
              text-[14px]
              leading-[1.7]
              text-[#68758A]
            "
          >
            SPARRC is a sports and fitness
            medicine network built on the belief
            that the body was made to move - and
            that most pain, illness, and decline
            is a movement problem before it is a
            medicine problem.
          </p>

          {/* STATS */}

          <div
            className="
              mt-6
              grid
              grid-cols-3
              gap-2
            "
          >
            {[
              {
                value: "21",
                label:
                  "Centres\nacross India",
              },
              {
                value: "1M+",
                label:
                  "People\nhelped",
              },
              {
                value: "95%",
                label:
                  "Surgery\navoidance",
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.value}
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.55,
                  delay:
                    0.15 +
                    index * 0.08,
                  ease,
                }}
                className="
                  min-h-[108px]
                  rounded-[16px]
                  border
                  border-[#DCE3EC]
                  bg-white
                  px-4
                  py-5
                  shadow-[0_5px_18px_rgba(25,40,70,0.025)]
                "
              >
                <p
                  className="
                    text-[25px]
                    font-[700]
                    leading-none
                    tracking-[-0.03em]
                    text-[#1654C9]
                  "
                >
                  {stat.value}
                </p>

                <p
                  className="
                    mt-4
                    whitespace-pre-line
                    text-[10px]
                    font-[600]
                    leading-[1.5]
                    text-[#252A34]
                  "
                >
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* =================================================
            EXPLORE SECTIONS
        ================================================== */}

        <motion.section
          initial={{
            opacity: 0,
            y: 16,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.15,
            ease,
          }}
          className="
            mb-6
            overflow-hidden
            rounded-[20px]
            border
            border-[#DDE4EC]
            bg-white
            px-3
            pb-4
            pt-4
            shadow-[0_7px_24px_rgba(25,40,70,0.035)]
          "
        >
          {/* TITLE */}

          <div
            className="
              flex
              items-end
              justify-between
              gap-3
              px-1
            "
          >
            <div>
              <p
                className="
                  text-[9px]
                  font-[700]
                  uppercase
                  tracking-[0.12em]
                  text-[#4380CD]
                "
              >
                ABOUT SPARRC
              </p>

              <h2
                className="
                  mt-1.5
                  text-[17px]
                  font-[700]
                  leading-none
                  tracking-[-0.02em]
                  text-[#202533]
                "
              >
                Explore Sections
              </h2>
            </div>

            <span
              className="
                pb-[1px]
                text-[9px]
                font-[600]
                text-[#9EA7B6]
              "
            >
              9 sections
            </span>
          </div>

          {/* CHIPS */}

          <div
            ref={
              chipsContainerRef
            }
            className="
              mt-4
              flex
              gap-2
              overflow-x-auto
              scroll-smooth
              pb-1

              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
            "
          >
            {navItems.map(
              (item, index) => {
                const active =
                  activeNav ===
                  item.id;

                return (
                  <motion.button
                    ref={(node) => {
                      chipRefs.current[
                        item.id
                      ] = node;
                    }}
                    key={item.id}
                    type="button"
                    onClick={() =>
                      handleSectionChange(
                        item.id,
                      )
                    }
                    whileTap={{
                      scale: 0.96,
                    }}
                    className={`
                      relative
                      flex
                      h-[44px]
                      shrink-0
                      items-center
                      gap-2
                      overflow-hidden
                      rounded-full
                      border
                      px-4
                      transition-all
                      duration-300

                      ${
                        active
                          ? `
                            border-transparent
                            text-white
                            shadow-[0_7px_18px_rgba(36,89,208,0.18)]
                          `
                          : `
                            border-[#DEE4EC]
                            bg-[#F8FAFC]
                            text-[#333A49]
                          `
                      }
                    `}
                    aria-pressed={
                      active
                    }
                  >
                    {/* ACTIVE BACKGROUND */}

                    {active && (
                      <motion.span
                        layoutId="sparrc-active-chip"
                        transition={{
                          duration: 0.35,
                          ease,
                        }}
                        className="
                          absolute
                          inset-0
                          rounded-full
                          bg-gradient-to-r
                          from-[#068FD9]
                          via-[#1664D2]
                          to-[#4328C8]
                        "
                      />
                    )}

                    {/* NUMBER */}

                    <span
                      className={`
                        relative
                        z-10
                        text-[9px]
                        font-[700]

                        ${
                          active
                            ? "text-white/75"
                            : "text-[#8D9BAD]"
                        }
                      `}
                    >
                      {String(
                        index + 1,
                      ).padStart(
                        2,
                        "0",
                      )}
                    </span>

                    {/* LABEL */}

                    <span
                      className="
                        relative
                        z-10
                        whitespace-nowrap
                        text-[10px]
                        font-[650]
                      "
                    >
                      {
                        item.shortLabel
                      }
                    </span>

                    {/* ACTIVE DOT */}

                    {active && (
                      <motion.span
                        initial={{
                          scale: 0,
                        }}
                        animate={{
                          scale: 1,
                        }}
                        className="
                          relative
                          z-10
                          h-[5px]
                          w-[5px]
                          rounded-full
                          bg-white
                        "
                      />
                    )}
                  </motion.button>
                );
              },
            )}
          </div>
        </motion.section>

        {/* =================================================
            ACTIVE CONTENT ONLY
        ================================================== */}

        <AnimatePresence
          mode="wait"
          initial={false}
        >
          <motion.div
            key={activeNav}
            initial={
              prefersReducedMotion
                ? undefined
                : {
                    opacity: 0,
                    x: 22,
                    y: 8,
                    scale: 0.985,
                  }
            }
            animate={{
              opacity: 1,
              x: 0,
              y: 0,
              scale: 1,
            }}
            exit={
              prefersReducedMotion
                ? undefined
                : {
                    opacity: 0,
                    x: -18,
                    y: 5,
                    scale: 0.99,
                  }
            }
            transition={{
              duration: 0.42,
              ease,
            }}
          >
            {/* ===============================================
                WHO WE ARE
            ================================================ */}

            {activeNav ===
              "who-we-are" && (
              <section
                className="
                  rounded-[24px]
                  bg-gradient-to-br
                  from-[#0793E2]
                  via-[#1268D5]
                  to-[#2C10B5]
                  px-5
                  py-6
                  text-white
                  shadow-[0_16px_40px_rgba(31,69,184,0.15)]
                "
              >
                <div
                  className="
                    flex
                    items-center
                    justify-between
                    gap-3
                  "
                >
                  <p
                    className="
                      text-[9px]
                      font-[700]
                      uppercase
                      tracking-[0.11em]
                      text-white/65
                    "
                  >
                    WHO WE ARE
                  </p>

                  <span
                    className="
                      rounded-full
                      bg-white/10
                      px-3
                      py-1.5
                      text-[9px]
                      font-[700]
                      text-white/80
                    "
                  >
                    {activeNumber}
                    {" / "}
                    09
                  </span>
                </div>

                <h2
                  className="
                    mt-6
                    text-[28px]
                    font-[700]
                    leading-[1.12]
                    tracking-[-0.04em]
                  "
                >
                  Who We Are
                </h2>

                <p
                  className="
                    mt-6
                    text-[14px]
                    leading-[1.85]
                    text-white/92
                  "
                >
                  We are SPARRC -
                  Sports Performance
                  Assessment
                  Rehabilitation
                  Research Counseling
                  Institute - one of
                  India&apos;s leading
                  sports and fitness
                  medicine networks.
                  Since 2006, we have
                  believed in
                  prescribing exercise,
                  not medicine,
                  wherever it is the
                  better answer. Across
                  21 centres, we have
                  helped over a million
                  people move, heal and
                  live better, with a
                  95% success rate in
                  resolving pain without
                  surgery.
                </p>
              </section>
            )}

            {/* ===============================================
                WHAT WE BELIEVE
            ================================================ */}

            {activeNav ===
              "what-we-believe" && (
              <ContentCard>
                <div
                  className="
                    flex
                    items-center
                    justify-between
                    gap-3
                  "
                >
                  <p
                    className="
                      text-[9px]
                      font-[700]
                      uppercase
                      tracking-[0.1em]
                      text-[#7190BB]
                    "
                  >
                    OUR PHILOSOPHY
                  </p>

                  <span
                    className="
                      rounded-full
                      bg-[#F1F4F8]
                      px-3
                      py-1.5
                      text-[9px]
                      font-[700]
                      text-[#8794A6]
                    "
                  >
                    {activeNumber}
                    {" / "}
                    09
                  </span>
                </div>

                <h2
                  className="
                    mt-6
                    text-[26px]
                    font-[700]
                    tracking-[-0.035em]
                    text-[#1B1C28]
                  "
                >
                  What We Believe
                </h2>

                <p
                  className="
                    mt-5
                    text-[14px]
                    leading-[1.82]
                    text-[#68758A]
                  "
                >
                  We believe the body
                  was built to move and
                  that most pain,
                  illness, and most of
                  what ages us badly is a
                  movement problem before
                  it&apos;s a medicine
                  problem. So when
                  someone comes to us
                  hurting, our first
                  instinct isn&apos;t a
                  prescription pad.
                  It&apos;s an exercise
                  plan, built for their
                  body, their life, their
                  goals.
                </p>

                <p
                  className="
                    mt-5
                    text-[14px]
                    leading-[1.82]
                    text-[#68758A]
                  "
                >
                  That&apos;s what
                  &quot;We Prescribe
                  Exercises - Not
                  Medicines&quot; has
                  meant since 2006: not a
                  rejection of medicine,
                  but a refusal to let it
                  be the first or only
                  answer. Healing works
                  better as a
                  relationship than a
                  transaction. Over a
                  million of them have
                  walked, run, danced,
                  and lived better
                  because of it.
                </p>
              </ContentCard>
            )}

            {/* ===============================================
                WHAT WE DO
            ================================================ */}

            {activeNav ===
              "what-we-do" && (
              <ContentCard>
                <div
                  className="
                    flex
                    items-center
                    justify-between
                    gap-3
                  "
                >
                  <p
                    className="
                      text-[9px]
                      font-[700]
                      uppercase
                      tracking-[0.1em]
                      text-[#7190BB]
                    "
                  >
                    OUR METHODOLOGY
                  </p>

                  <span
                    className="
                      rounded-full
                      bg-[#F1F4F8]
                      px-3
                      py-1.5
                      text-[9px]
                      font-[700]
                      text-[#8794A6]
                    "
                  >
                    {activeNumber}
                    {" / "}
                    09
                  </span>
                </div>

                <h2
                  className="
                    mt-6
                    text-[23px]
                    font-[700]
                    leading-[1.25]
                    tracking-[-0.03em]
                    text-[#252636]
                  "
                >
                  What We Do: Test.
                  Treat. Train.
                </h2>

                <p
                  className="
                    mt-5
                    text-[11px]
                    font-[600]
                    uppercase
                    tracking-[0.05em]
                    text-[#778398]
                  "
                >
                  SPARRC IS FOR YOU IF...
                </p>

                {/* SLIDER */}

                <div
                  className="
                    mt-4
                    overflow-hidden
                  "
                >
                  <AnimatePresence
                    mode="wait"
                    initial={false}
                  >
                    <motion.div
                      key={
                        activeJourney
                      }
                      initial={{
                        opacity: 0,
                        x: 25,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      exit={{
                        opacity: 0,
                        x: -20,
                      }}
                      transition={{
                        duration: 0.42,
                        ease,
                      }}
                      className="
                        flex
                        min-h-[118px]
                        items-start
                        gap-3
                        rounded-[16px]
                        bg-gradient-to-r
                        from-[#2900AD]
                        via-[#075BD0]
                        to-[#0098E8]
                        px-4
                        py-4
                        text-white
                      "
                    >
                      <div
                        className="
                          flex
                          h-[32px]
                          w-[32px]
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          bg-white/15
                          text-[11px]
                          font-[700]
                        "
                      >
                        {activeJourney +
                          1}
                      </div>

                      <div>
                        <h3
                          className="
                            text-[14px]
                            font-[600]
                            leading-[1.4]
                          "
                        >
                          {
                            journeyItems[
                              activeJourney
                            ].title
                          }
                        </h3>

                        <p
                          className="
                            mt-2
                            text-[12px]
                            leading-[1.65]
                            text-white/85
                          "
                        >
                          {
                            journeyItems[
                              activeJourney
                            ].description
                          }
                        </p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* DOTS */}

                <div
                  className="
                    mt-4
                    flex
                    items-center
                    justify-center
                    gap-[5px]
                  "
                >
                  {journeyItems.map(
                    (_, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() =>
                          setActiveJourney(
                            index,
                          )
                        }
                        aria-label={`Show item ${
                          index + 1
                        }`}
                      >
                        <motion.span
                          animate={{
                            width:
                              index ===
                              activeJourney
                                ? 25
                                : 6,
                          }}
                          transition={{
                            duration: 0.3,
                            ease,
                          }}
                          className={`
                            block
                            h-[6px]
                            rounded-full

                            ${
                              index ===
                              activeJourney
                                ? "bg-[#2465D7]"
                                : "bg-[#D9DEE7]"
                            }
                          `}
                        />
                      </button>
                    ),
                  )}
                </div>
              </ContentCard>
            )}

            {/* ===============================================
                WOMAN BEHIND SPARRC
            ================================================ */}

            {activeNav ===
              "woman-behind-sparrc" && (
              <ContentCard>
                <StoryImage
                  src="/mobile/images/woman-behind-sparrc.png"
                  alt="The Woman Behind SPARRC"
                />

                <div
                  className="
                    mt-5
                    flex
                    items-center
                    justify-between
                    gap-3
                  "
                >
                  <p
                    className="
                      text-[9px]
                      font-[700]
                      uppercase
                      tracking-[0.1em]
                      text-[#7190BB]
                    "
                  >
                    LEADERSHIP &amp;
                    VISION
                  </p>

                  <span
                    className="
                      rounded-full
                      bg-[#F1F4F8]
                      px-3
                      py-1.5
                      text-[9px]
                      font-[700]
                      text-[#8794A6]
                    "
                  >
                    {activeNumber}
                    {" / "}
                    09
                  </span>
                </div>

                <h2
                  className="
                    mt-4
                    text-[24px]
                    font-[700]
                    leading-[1.22]
                    tracking-[-0.035em]
                    text-[#1B1C28]
                  "
                >
                  The Woman Behind
                  SPARRC
                </h2>

                <p
                  className="
                    mt-4
                    text-[14px]
                    leading-[1.8]
                    text-[#68758A]
                  "
                >
                  Long before she became
                  Dr Sujatha Pugazhendi,
                  she was a dancer and an
                  athlete. Movement was
                  how she first learnt to
                  understand her own
                  body. Later, while
                  teaching aerobics and
                  Zumba, she began to
                  notice something else:
                  telling people that
                  exercise was good for
                  them was rarely enough.
                  They were far more
                  likely to keep moving
                  when movement itself
                  felt good, achievable
                  and worth coming back
                  to.
                </p>
              </ContentCard>
            )}

            {/* ===============================================
                CLINICAL FOUNDATION
            ================================================ */}

            {activeNav ===
              "clinical-foundation" && (
              <ContentCard>
                <StoryImage
                  src="/mobile/images/clinical-foundation.png"
                  alt="The Clinical Foundation"
                />

                <div
                  className="
                    mt-5
                    flex
                    items-center
                    justify-between
                    gap-3
                  "
                >
                  <p
                    className="
                      text-[9px]
                      font-[700]
                      uppercase
                      tracking-[0.1em]
                      text-[#7190BB]
                    "
                  >
                    CLINICAL FOUNDATION
                  </p>

                  <span
                    className="
                      rounded-full
                      bg-[#F1F4F8]
                      px-3
                      py-1.5
                      text-[9px]
                      font-[700]
                      text-[#8794A6]
                    "
                  >
                    {activeNumber}
                    {" / "}
                    09
                  </span>
                </div>

                <h2
                  className="
                    mt-4
                    text-[24px]
                    font-[700]
                    tracking-[-0.035em]
                    text-[#171824]
                  "
                >
                  The Clinical Foundation
                </h2>

                <p
                  className="
                    mt-4
                    text-[14px]
                    leading-[1.8]
                    text-[#68758A]
                  "
                >
                  A Master&apos;s in
                  Sports Physiotherapy
                  gave that instinct a
                  clinical grounding. She
                  learnt to look beyond
                  where it hurt and ask
                  why it hurt: why one
                  joint was compensating
                  for another, why the
                  same pain kept
                  returning, and why rest
                  was not always the
                  answer.
                </p>

                <p
                  className="
                    mt-5
                    text-[14px]
                    leading-[1.8]
                    text-[#68758A]
                  "
                >
                  In 2006, that thinking
                  helped shape SPARRC,
                  which she founded with
                  her husband, Dr Kannan
                  Pugazhendi. At its
                  heart was a
                  straightforward idea
                  they continue to work
                  with today: prescribe
                  exercise instead of
                  medicine when exercise
                  is genuinely the better
                  answer.
                </p>
              </ContentCard>
            )}

            {/* ===============================================
                WHOLE PERSON
            ================================================ */}

            {activeNav ===
              "whole-person" && (
              <ContentCard>
                <StoryImage
                  src="/mobile/images/looking-at-whole-person.png"
                  alt="Looking at the Whole Person"
                />

                <div
                  className="
                    mt-5
                    flex
                    items-center
                    justify-between
                    gap-3
                  "
                >
                  <p
                    className="
                      text-[9px]
                      font-[700]
                      uppercase
                      tracking-[0.1em]
                      text-[#7190BB]
                    "
                  >
                    WHOLE PERSON
                  </p>

                  <span
                    className="
                      rounded-full
                      bg-[#F1F4F8]
                      px-3
                      py-1.5
                      text-[9px]
                      font-[700]
                      text-[#8794A6]
                    "
                  >
                    {activeNumber}
                    {" / "}
                    09
                  </span>
                </div>

                <h2
                  className="
                    mt-4
                    text-[24px]
                    font-[700]
                    tracking-[-0.035em]
                    text-[#171824]
                  "
                >
                  Looking at the Whole
                  Person
                </h2>

                <p
                  className="
                    mt-4
                    text-[14px]
                    leading-[1.8]
                    text-[#68758A]
                  "
                >
                  Building SPARRC from
                  the ground up gradually
                  changed the way Sujatha
                  looked at health. An
                  injury could rarely be
                  separated neatly from
                  the person living with
                  it. So her own learning
                  widened too. She
                  trained in yoga and
                  acupuncture, qualified
                  as an Integrative
                  Nutrition Health Coach
                  through IIN, and
                  studied entrepreneurship
                  at London Business
                  School and leadership
                  at Harvard Business
                  School.
                </p>

                <p
                  className="
                    mt-5
                    text-[14px]
                    leading-[1.8]
                    text-[#68758A]
                  "
                >
                  The business education
                  had a practical
                  purpose. If the idea
                  behind SPARRC was going
                  to reach more people,
                  the institution
                  carrying it had to grow
                  with it. Under her
                  leadership, a single
                  clinic expanded into a
                  network of centres
                  across India, treating
                  more than a million
                  people and reporting a
                  95% success rate in
                  resolving pain without
                  surgery.
                </p>
              </ContentCard>
            )}

            {/* ===============================================
                BREATH STORY
            ================================================ */}

            {activeNav ===
              "breath-story" && (
              <ContentCard>
                <StoryImage
                  src="/mobile/images/breath-enters-story.png"
                  alt="Where Breath Enters the Story"
                />

                <div
                  className="
                    mt-5
                    flex
                    items-center
                    justify-between
                    gap-3
                  "
                >
                  <p
                    className="
                      text-[9px]
                      font-[700]
                      uppercase
                      tracking-[0.1em]
                      text-[#7190BB]
                    "
                  >
                    BREATH &amp;
                    MOVEMENT
                  </p>

                  <span
                    className="
                      rounded-full
                      bg-[#F1F4F8]
                      px-3
                      py-1.5
                      text-[9px]
                      font-[700]
                      text-[#8794A6]
                    "
                  >
                    {activeNumber}
                    {" / "}
                    09
                  </span>
                </div>

                <h2
                  className="
                    mt-4
                    text-[24px]
                    font-[700]
                    leading-[1.2]
                    tracking-[-0.035em]
                    text-[#171824]
                  "
                >
                  Where Breath Enters the
                  Story
                </h2>

                <div
                  className="
                    mt-4
                    space-y-5
                    text-[14px]
                    leading-[1.8]
                    text-[#68758A]
                  "
                >
                  <p>
                    Throughout these
                    years, Sujatha
                    maintained a practice
                    that was much more
                    personal: breathwork.
                  </p>

                  <p>
                    Over time, she began
                    paying closer
                    attention to the
                    relationship between
                    breathing and
                    movement. How we
                    breathe, she came to
                    believe, can
                    influence how we
                    move, recover and
                    experience pain. A
                    muscle or joint
                    therefore tells only
                    part of the story.
                  </p>

                  <p>
                    That thinking is now
                    developing into
                    Kinesio Health, her
                    approach to bringing
                    breath and movement
                    into the same
                    conversation. Rather
                    than treating them as
                    separate areas of
                    wellness, it looks at
                    how the two work
                    together within the
                    body.
                  </p>

                  <p>
                    It is also at the
                    heart of the book she
                    is currently writing,
                    The Superpower of
                    Doing a Little
                    Everyday. The title
                    reflects an idea that
                    has followed her from
                    her earliest years in
                    sport and dance
                    through
                    physiotherapy,
                    SPARRC and now
                    Kinesio Health:
                    meaningful change in
                    the body rarely comes
                    from doing something
                    extraordinary once.
                    More often, it comes
                    from doing something
                    small, and continuing
                    to do it.
                  </p>

                  <p>
                    For Sujatha, that
                    ultimately means
                    helping people
                    understand their
                    bodies well enough to
                    trust them again.
                  </p>
                </div>
              </ContentCard>
            )}

            {/* ===============================================
                RECOGNITION
            ================================================ */}

            {activeNav ===
              "recognition" && (
              <ContentCard>
                <div
                  className="
                    flex
                    items-center
                    justify-between
                    gap-3
                  "
                >
                  <p
                    className="
                      text-[9px]
                      font-[700]
                      uppercase
                      tracking-[0.1em]
                      text-[#7190BB]
                    "
                  >
                    HONOURS &amp;
                    RECOGNITION
                  </p>

                  <span
                    className="
                      rounded-full
                      bg-[#F1F4F8]
                      px-3
                      py-1.5
                      text-[9px]
                      font-[700]
                      text-[#8794A6]
                    "
                  >
                    {activeNumber}
                    {" / "}
                    09
                  </span>
                </div>

                <h2
                  className="
                    mt-5
                    text-[25px]
                    font-[700]
                    tracking-[-0.035em]
                    text-[#1A1C28]
                  "
                >
                  Recognition
                </h2>

                <div className="mt-6">
                  {/* AWARD 1 */}

                  <div
                    className="
                      flex
                      items-start
                      gap-4
                      border-b
                      border-[#E5E8ED]
                      pb-5
                    "
                  >
                    <AwardIcon />

                    <div>
                      <p
                        className="
                          text-[14px]
                          font-[700]
                          leading-[1.4]
                          text-[#273044]
                        "
                      >
                        Best Entrepreneur
                        Award, 2013
                      </p>

                      <p
                        className="
                          mt-2
                          text-[12px]
                          leading-[1.5]
                          text-[#788397]
                        "
                      >
                        MSME, Government
                        of Tamil Nadu
                      </p>
                    </div>
                  </div>

                  {/* AWARD 2 */}

                  <div
                    className="
                      flex
                      items-start
                      gap-4
                      pt-5
                    "
                  >
                    <AwardIcon />

                    <div>
                      <p
                        className="
                          text-[14px]
                          font-[700]
                          leading-[1.4]
                          text-[#273044]
                        "
                      >
                        Best Entrepreneur
                        Award, 2025
                      </p>

                      <p
                        className="
                          mt-2
                          text-[12px]
                          leading-[1.5]
                          text-[#788397]
                        "
                      >
                        Award body/title
                        to be verified
                      </p>
                    </div>
                  </div>
                </div>
              </ContentCard>
            )}

            {/* ===============================================
                MOVEMENT MATRIX
            ================================================ */}

            {activeNav ===
              "movement-matrix" && (
              <ContentCard>
                <div
                  className="
                    flex
                    items-center
                    justify-between
                    gap-3
                  "
                >
                  <p
                    className="
                      text-[9px]
                      font-[700]
                      uppercase
                      tracking-[0.1em]
                      text-[#7190BB]
                    "
                  >
                    KINESIO HEALTH
                  </p>

                  <span
                    className="
                      rounded-full
                      bg-[#F1F4F8]
                      px-3
                      py-1.5
                      text-[9px]
                      font-[700]
                      text-[#8794A6]
                    "
                  >
                    {activeNumber}
                    {" / "}
                    09
                  </span>
                </div>

                <h2
                  className="
                    mt-5
                    text-[27px]
                    font-[700]
                    leading-[1.12]
                    tracking-[-0.04em]
                    text-[#171824]
                  "
                >
                  The SPARRC Movement
                  Matrix
                </h2>

                <p
                  className="
                    mt-5
                    text-[15px]
                    leading-[1.75]
                    text-[#67758A]
                  "
                >
                  The SPARRC
                  Kinesio-Health is
                  screened and
                  engineered by
                  bio-Psychosocial
                  concepts. We integrate
                  two complementary
                  processes:
                </p>

                {/* MATRIX 1 */}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 16,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.08,
                    ease,
                  }}
                  className="
                    mt-6
                    rounded-[18px]
                    bg-gradient-to-br
                    from-[#2700B2]
                    via-[#075DCE]
                    to-[#069BE6]
                    px-5
                    py-6
                    text-white
                    shadow-[0_12px_30px_rgba(19,83,200,0.14)]
                  "
                >
                  <h3
                    className="
                      text-[19px]
                      font-[700]
                      leading-[1.3]
                    "
                  >
                    1. SPARRC Movement
                    Matrix
                  </h3>

                  <p
                    className="
                      mt-4
                      text-[14px]
                      leading-[1.7]
                      text-white/90
                    "
                  >
                    We examine the
                    physical factors
                    that influence
                    movement, function
                    and performance.
                  </p>

                  <ul
                    className="
                      mt-5
                      space-y-3
                      pl-5
                      text-[14px]
                      leading-[1.55]
                      text-white/95
                    "
                  >
                    <li className="list-disc">
                      Breathing patterns
                    </li>

                    <li className="list-disc">
                      Fascia &amp; muscle
                      health
                    </li>

                    <li className="list-disc">
                      Movement mechanics
                    </li>

                    <li className="list-disc">
                      Performance /
                      Activity load
                    </li>
                  </ul>
                </motion.div>

                {/* MATRIX 2 */}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 16,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.15,
                    ease,
                  }}
                  className="
                    mt-4
                    rounded-[18px]
                    bg-gradient-to-br
                    from-[#2700B2]
                    via-[#075DCE]
                    to-[#069BE6]
                    px-5
                    py-6
                    text-white
                    shadow-[0_12px_30px_rgba(19,83,200,0.14)]
                  "
                >
                  <h3
                    className="
                      text-[19px]
                      font-[700]
                      leading-[1.3]
                    "
                  >
                    2. SPARRC Lifestyle
                    Levers
                  </h3>

                  <ul
                    className="
                      mt-5
                      space-y-3
                      pl-5
                      text-[14px]
                      leading-[1.55]
                      text-white/95
                    "
                  >
                    <li className="list-disc">
                      Sunlight exposure
                    </li>

                    <li className="list-disc">
                      Hydration
                    </li>

                    <li className="list-disc">
                      Nutrition
                    </li>

                    <li className="list-disc">
                      Recovery and Sleep
                    </li>

                    <li className="list-disc">
                      Stress management
                    </li>
                  </ul>
                </motion.div>
              </ContentCard>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}