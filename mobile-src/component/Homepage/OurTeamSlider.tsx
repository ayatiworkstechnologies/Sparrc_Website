"use client";

import Image from "next/image";
import {
  AnimatePresence,
  motion,
  PanInfo,
  useReducedMotion,
} from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import {
  useCallback,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";

/* =========================================================
   TYPES
========================================================= */

type ProfileSection = {
  title?: string;
  paragraphs?: string[];
  bullets?: string[];
};

type TeamMember = {
  id: number;
  name: string;
  designation: string;
  summary: string;
  image: string;
  modalSubtitle?: string;
  sections: ProfileSection[];
};

/* =========================================================
   TEAM DATA
========================================================= */

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Dr. Sujatha Pugazhendi",
    designation: "Co-Founder & CEO",
    summary:
      "Dr. Sujatha Pugazhendi is the Co-Founder and CEO of SPARRC Institute and a pioneer in Sports and Fitness Medicine.",
    image: "/mobile/images/sujatha-pugazhendi.png",
    modalSubtitle:
      "Visionary Entrepreneur & Pioneer in Sports and Fitness Medicine",

    sections: [
      {
        title: "Professional Profile",
        paragraphs: [
          "Dr. Sujatha Pugazhendi is the Co-Founder and CEO of SPARRC Institute and a pioneer in Sports and Fitness Medicine. Along with Dr. Kannan Pugazhendi, she founded SPARRC in 2006 and has played a key role in building the organisation into a growing network of sports, rehabilitation, and fitness medicine centres.",

          "With over 18 years of experience in entrepreneurship, operations, strategic planning, branding, and healthcare innovation, she has focused on making fitness and rehabilitation more accessible while empowering healthcare professionals within the organisation.",
        ],
      },

      {
        title: "Leadership & Career Highlights",
        bullets: [
          "Co-Founder & CEO – SPARRC Institute",
          "Founder/leader behind SPARRC’s expansion into a national network of centres",
          "Led organisational growth, operations, branding, financial development, and strategic execution",
          "Launched the Indian Institute of Sports Medicine (IISM) to expand education in sports and fitness medicine",
          "Introduced FAMES (Fitness Adaptation and Movement Education Services) for specially-abled individuals",
          "Established Celestial Spark, a holistic healing centre focused on alternative and complementary approaches",
          "Supported a flat organisational structure that empowers physiotherapists and team members as decision-makers",
        ],
      },

      {
        title: "Qualifications & Expertise",
        paragraphs: [
          "Dr. Sujatha holds a Master’s in Sports Physical Therapy and has developed multidisciplinary expertise through training in expressive arts therapy, acupuncture, hypnotherapy, Reiki, MBTI personality practice, integrative nutrition, fitness instruction, and leadership and entrepreneurship programmes at London Business School and Harvard Business School.",
        ],
      },

      {
        title: "Key Achievements",
        bullets: [
          "Best Entrepreneur Award – MSME, Government of Tamil Nadu, 2013",
          "Honorary Doctorate (D.Litt) – The International Tamil University, USA, 2018",
          "Co-led the growth of SPARRC, which has supported more than 1 million patients and built a large multidisciplinary team",
          "Contributed to healthcare education and knowledge sharing through IISM and SPARRC publications",
          "Co-authored research on non-invasive physical therapies and rehabilitation for musculoskeletal conditions",
        ],
      },

      {
        title: "Vision & Impact",
        paragraphs: [
          "Dr. Sujatha Pugazhendi continues to focus on integrating healthcare, fitness, rehabilitation, education, and entrepreneurship. Her work through SPARRC and its specialised initiatives reflects a commitment to inclusive, accessible, and exercise-based approaches to health and wellness.",
        ],
      },
    ],
  },

  {
    id: 2,
    name: "Dr. Kannan Pugazhendi",
    designation: "Co-Founder : SPARRC",
    summary:
      "Dr. Kannan Pugazhendi, founder of SPARRC Institute, is a prominent sports physician who has dedicated over three decades to advancing sports medicine.",
    image: "/mobile/images/dr-kannan-pugazhendi.png",
    modalSubtitle:
      "Pioneer in Sports & Fitness Medicine",

    sections: [
      {
        title: "Professional Profile",
        paragraphs: [
          "Dr. Kannan Pugazhendi, founder of SPARRC (Sports Performance Assessment, Rehabilitation & Research Counseling) Institute, is a prominent sports physician who has dedicated over three decades to advancing sports medicine, rehabilitation, fitness, and preventive healthcare in India.",

          "A graduate of Madras Medical College (1986), Dr. Kannan began his international sports medicine journey as the Team Physician for the Indian Cricket Team during the 1989 West Indies series. He later earned a Master’s in Sports Medicine from the University of New South Wales, Australia.",
        ],
      },

      {
        title: "Career Highlights",
        bullets: [
          "1989 – Team Physician, Indian Cricket Team, West Indies Series",
          "1996 – Sports Physician, Atlanta Olympics",
          "2002 – Team Physician, Indian Hockey Team, World Cup",
          "2002–03 – Advisor to the Officers Training Academy (OTA) on fitness and injury prevention",
          "2017 – Pioneered the concept of Fitness Medicine for lifestyle disease management",
          "Visiting Faculty – IIM Rohtak, Department of Sports Management",
          "Founder – Indian Institute of Sports Medicine (IISM)",
        ],
      },

      {
        title: "Building SPARRC",
        paragraphs: [
          "Driven by the need for accessible sports and rehabilitation medicine, Dr. Kannan founded SPARRC Institute in 2006. The organisation has grown into a network of sports and fitness medicine centres, bringing together doctors, physiotherapists, trainers, and rehabilitation professionals. SPARRC has reportedly supported over 1 million patients through integrated sports medicine, rehabilitation, fitness, and yoga-based approaches to pain management and wellness.",
        ],
      },

      {
        title: "Key Contributions Beyond Sports",
        bullets: [
          "Pediatric Sports Medicine – Developed FAMES to support physical development and movement education for specially-abled children.",
          "Dance Medicine – Contributed to integrating sports medicine principles into classical dance training at Kalakshetra.",
          "Marathon Medicine – Served as Sports Physician for major Chennai, Hyderabad, and Delhi marathons.",
          "Military & Law Enforcement – Contributed fitness and injury-prevention programmes for Tamil Nadu Police, OTA, and CISF.",
          "Special Olympics – Trained primary-care teams in sports injury management.",
          "Public Health – Conducted health and fitness awareness initiatives, including collaborations with the Cancer Institute, Chennai.",
          "Media & Fitness – Created Ollibelly, a weight-loss reality show on Star Vijay, where participants collectively lost over 1,000 kg in under three months.",
        ],
      },

      {
        title: "Sports & National-Level Contributions",
        paragraphs: [
          "Throughout his career, Dr. Kannan has worked with athletes and teams across cricket, hockey, football, squash, rugby, triathlon, volleyball, sailing, softball, and korfball. He has also contributed to medical education, professional training, public health awareness, and the development of fitness and rehabilitation practices in India.",
        ],
      },

      {
        title: "A Legacy in Sports & Fitness Medicine",
        paragraphs: [
          "Dr. Kannan Pugazhendi’s career represents a continued effort to connect medical science, sports performance, rehabilitation, fitness, and preventive healthcare. Through SPARRC, education, research, athlete care, and community initiatives, his work has contributed to making sports and fitness medicine more accessible to athletes and the wider community.",
        ],
      },
    ],
  },

  {
    id: 3,
    name: "Muthu Ganesh",
    designation: "Chief Technology Officer",
    summary:
      "Muthu Ganesh is the Chief Technology Officer at SPARRC, where he leads the development and deployment of technology platforms.",
    image: "/mobile/images/ganesh.png",

    sections: [
      {
        paragraphs: [
          "Muthu Ganesh is the Chief Technology Officer at SPARRC, where he leads the development and deployment of technology platforms that support sports medicine, biomechanics, and rehabilitation services. With over two decades of experience in information technology and systems architecture, Ganesh has been instrumental in building SPARRC’s digital ecosystem. He has designed and developed key platforms including SPARRC’s Biomechanical Correction Software, Patient Management System, and AI-enabled helpdesk and patient record systems, enabling efficient clinical workflows and better data management across the organization. His work focuses on integrating biomechanics technology, patient data management, and automation tools that enhance decision-making and operational efficiency. He works closely with doctors and physiotherapists to ensure that technology supports accurate patient assessment, treatment tracking, and rehabilitation outcomes.",

          "Ganesh continues to drive innovation at SPARRC by introducing scalable digital platforms, intelligent automation, and AI-assisted systems that strengthen the organization’s ability to deliver advanced sports medicine and rehabilitation care.",
        ],
      },
    ],
  },

  {
    id: 4,
    name: "Sumitha",
    designation: "General Manager – Operations",
    summary:
      "Sumitha’s transformative and rewarding journey with SPARRC began in 2012 as a Physiotherapist.",
    image: "/mobile/images/sumitha.png",

    sections: [
      {
        paragraphs: [
          "Sumitha’s transformative and rewarding journey with SPARRC began in 2012 as a Physiotherapist. Her dedication and hard work soon saw her become Centre Manager for two SPARRC centres. Currently General Manager – Operations, Sumitha is a stickler for perfection and ensures that quality service and care is provided by her team in all centres. Aligning to the vision of the organization brings her great motivation to do better each day and she believes that global growth for SPARRC is bound to happen. Professional team work with a holistic approach is what she thinks aids in giving efficient and best quality services to mankind.",
        ],
      },
    ],
  },

  {
    id: 5,
    name: "Dr. Aravind",
    designation: "Primary Care Physician",
    summary:
      "Dr. Aravind is a Primary Care Physician, currently pursuing his fellowship in Fitness medicine and lifestyle diseases management.",
    image: "/mobile/images/dr-aravind.png",

    sections: [
      {
        paragraphs: [
          "Dr. Aravind is a Primary Care Physician, currently pursuing his fellowship in Fitness medicine and lifestyle diseases management. He graduated from Sree Balaji Medical college & Hospital in 2013 and completed his Post-Graduate Diploma in Sports Medicine at the International Olympic committee (IOC) in 2019. As the primary-care Physician for the SPARRC Sports Medicine Team, he is involved in diagnosing, treating and rehabilitating patients with different musculoskeletal disorders and sporting injuries. He is also a faculty at the Indian Institute of Sports Medicine. He is an avid fitness enthusiast and a football player, which inspired his foray into the field of Sports, Exercise and Fitness Medicine.",
        ],
      },
    ],
  },
];

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
   MODAL CONTENT CARD
========================================================= */

function ModalSection({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <section
      className="
        rounded-[20px]
        border
        border-[#DFE5ED]
        bg-white
        px-5
        py-5
        shadow-[0_5px_20px_rgba(30,45,70,0.025)]

        sm:px-6
        sm:py-6
      "
    >
      {children}
    </section>
  );
}

/* =========================================================
   PROFILE MODAL
========================================================= */

function ProfileModal({
  member,
  onClose,
}: {
  member: TeamMember | null;
  onClose: () => void;
}) {
  const [mounted, setMounted] =
    useState(false);

  useEffect(() => {
    setMounted(true);

    return () => {
      setMounted(false);
    };
  }, []);

  /* =======================================================
     BODY LOCK + ESCAPE
  ======================================================= */

  useEffect(() => {
    if (!member) return;

    const previousOverflow =
      document.body.style.overflow;

    const previousPaddingRight =
      document.body.style.paddingRight;

    const scrollbarWidth =
      window.innerWidth -
      document.documentElement.clientWidth;

    document.body.style.overflow =
      "hidden";

    if (scrollbarWidth > 0) {
      document.body.style.paddingRight =
        `${scrollbarWidth}px`;
    }

    const handleKeyDown = (
      event: KeyboardEvent,
    ) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown,
    );

    return () => {
      document.body.style.overflow =
        previousOverflow;

      document.body.style.paddingRight =
        previousPaddingRight;

      window.removeEventListener(
        "keydown",
        handleKeyDown,
      );
    };
  }, [member, onClose]);

  if (!mounted) {
    return null;
  }

  return createPortal(
    <AnimatePresence>
      {member && (
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
            duration: 0.22,
          }}
          onMouseDown={(event) => {
            if (
              event.target ===
              event.currentTarget
            ) {
              onClose();
            }
          }}
          className="
            fixed
            inset-0
            z-[2147483646]
            flex
            items-center
            justify-center
            overflow-hidden
            bg-[#090F1F]/60
            p-[10px]
            backdrop-blur-[7px]

            sm:p-5
          "
        >
          {/* =================================================
              MODAL
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 35,
              scale: 0.975,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 25,
              scale: 0.98,
            }}
            transition={{
              duration: 0.42,
              ease,
            }}
            role="dialog"
            aria-modal="true"
            aria-labelledby={`profile-${member.id}`}
            className="
              relative
              flex
              h-[calc(100dvh-20px)]
              w-full
              max-w-[900px]
              flex-col
              overflow-hidden
              rounded-[24px]
              bg-[#F5F7FA]
              shadow-[0_30px_100px_rgba(0,0,0,0.35)]

              sm:h-auto
              sm:max-h-[92dvh]
              sm:rounded-[28px]
            "
          >
            {/* =================================================
                HEADER

                IMPORTANT:
                shrink-0 prevents this from collapsing.
            ================================================== */}

            <header
              className="
                relative
                z-20
                shrink-0
                overflow-hidden
                bg-gradient-to-br
                from-[#2700AD]
                via-[#1760D4]
                to-[#079EE4]
                px-5
                pb-5
                pt-5

                sm:px-7
                sm:pb-6
                sm:pt-6
              "
            >
              {/* GLOWS */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-16
                  -top-20
                  h-52
                  w-52
                  rounded-full
                  bg-white/15
                  blur-3xl
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  -bottom-20
                  -left-16
                  h-44
                  w-44
                  rounded-full
                  bg-[#221098]/45
                  blur-3xl
                "
              />

              {/* CLOSE */}

              <motion.button
                type="button"
                onClick={onClose}
                whileTap={{
                  scale: 0.9,
                }}
                aria-label="Close profile"
                className="
                  absolute
                  right-4
                  top-4
                  z-30
                  flex
                  h-[42px]
                  w-[42px]
                  items-center
                  justify-center
                  rounded-full
                  bg-white/15
                  text-white
                  backdrop-blur-md
                  transition-colors
                  duration-300

                  hover:bg-white/25

                  sm:right-5
                  sm:top-5
                  sm:h-[46px]
                  sm:w-[46px]
                "
              >
                <X size={20} />
              </motion.button>

              {/* PROFILE */}

              <div
                className="
                  relative
                  z-10
                  flex
                  min-w-0
                  items-center
                  gap-4
                  pr-[48px]

                  sm:gap-5
                  sm:pr-[60px]
                "
              >
                {/* IMAGE */}

                <div
                  className="
                    relative
                    h-[96px]
                    w-[86px]
                    shrink-0
                    overflow-hidden
                    rounded-[15px]
                    border-[3px]
                    border-white/40
                    bg-white
                    shadow-[0_12px_30px_rgba(0,0,0,0.22)]

                    sm:h-[125px]
                    sm:w-[110px]
                  "
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    priority
                    sizes="110px"
                    className="
                      object-cover
                      object-top
                    "
                  />
                </div>

                {/* NAME */}

                <div
                  className="
                    min-w-0
                    flex-1
                  "
                >
                  <p
                    className="
                      text-[9px]
                      font-[700]
                      uppercase
                      tracking-[0.14em]
                      text-[#B8E9FA]

                      sm:text-[10px]
                    "
                  >
                    SPARRC LEADERSHIP
                  </p>

                  <h2
                    id={`profile-${member.id}`}
                    className="
                      mt-2
                      break-words
                      text-[21px]
                      font-[700]
                      leading-[1.12]
                      tracking-[-0.035em]
                      text-white

                      sm:text-[30px]
                    "
                  >
                    {member.name}
                  </h2>

                  <p
                    className="
                      mt-2
                      text-[11px]
                      font-[600]
                      leading-[1.4]
                      text-white/90

                      sm:text-[14px]
                    "
                  >
                    {member.designation}
                  </p>

                  {member.modalSubtitle && (
                    <p
                      className="
                        mt-1.5
                        hidden
                        max-w-[540px]
                        text-[11px]
                        leading-[1.45]
                        text-[#BDEBFB]

                        min-[430px]:block

                        sm:text-[12px]
                      "
                    >
                      {
                        member.modalSubtitle
                      }
                    </p>
                  )}
                </div>
              </div>
            </header>

            {/* =================================================
                SCROLL AREA

                IMPORTANT:
                min-h-0 + flex-1 makes this area take the
                remaining modal height instead of crushing
                the header.
            ================================================== */}

            <div
              className="
                min-h-0
                flex-1
                overflow-y-auto
                overscroll-contain
                scroll-smooth
                px-4
                py-5

                [scrollbar-gutter:stable]
                [scrollbar-width:thin]
                [scrollbar-color:#cbd5e1_transparent]

                sm:px-6
                sm:py-6

                lg:px-7
              "
            >
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},

                  visible: {
                    transition: {
                      staggerChildren: 0.07,
                      delayChildren: 0.05,
                    },
                  },
                }}
                className="
                  mx-auto
                  max-w-[820px]
                  space-y-4
                  pb-3
                "
              >
                {member.sections.map(
                  (
                    section,
                    sectionIndex,
                  ) => (
                    <motion.div
                      key={`${member.id}-${sectionIndex}`}
                      variants={{
                        hidden: {
                          opacity: 0,
                          y: 16,
                        },

                        visible: {
                          opacity: 1,
                          y: 0,

                          transition: {
                            duration: 0.5,
                            ease,
                          },
                        },
                      }}
                    >
                      <ModalSection>
                        {/* HEADING */}

                        {section.title && (
                          <h3
                            className="
                              text-[19px]
                              font-[700]
                              leading-[1.25]
                              tracking-[-0.03em]
                              text-[#171C2A]

                              sm:text-[21px]
                            "
                          >
                            {section.title}
                          </h3>
                        )}

                        {/* PARAGRAPHS */}

                        {section.paragraphs && (
                          <div
                            className={`
                              space-y-5

                              ${
                                section.title
                                  ? "mt-5"
                                  : ""
                              }
                            `}
                          >
                            {section.paragraphs.map(
                              (
                                paragraph,
                                paragraphIndex,
                              ) => (
                                <p
                                  key={
                                    paragraphIndex
                                  }
                                  className="
                                    text-[14px]
                                    leading-[1.85]
                                    text-[#68758A]

                                    sm:text-[15px]
                                  "
                                >
                                  {
                                    paragraph
                                  }
                                </p>
                              ),
                            )}
                          </div>
                        )}

                        {/* BULLETS */}

                        {section.bullets && (
                          <ul
                            className={`
                              space-y-3.5

                              ${
                                section.title
                                  ? "mt-5"
                                  : ""
                              }
                            `}
                          >
                            {section.bullets.map(
                              (
                                item,
                                itemIndex,
                              ) => (
                                <li
                                  key={
                                    itemIndex
                                  }
                                  className="
                                    flex
                                    items-start
                                    gap-3
                                  "
                                >
                                  <span
                                    className="
                                      mt-[8px]
                                      h-[7px]
                                      w-[7px]
                                      shrink-0
                                      rounded-full
                                      bg-[#5637FF]
                                    "
                                  />

                                  <p
                                    className="
                                      min-w-0
                                      text-[14px]
                                      leading-[1.75]
                                      text-[#68758A]

                                      sm:text-[15px]
                                    "
                                  >
                                    {item}
                                  </p>
                                </li>
                              ),
                            )}
                          </ul>
                        )}
                      </ModalSection>
                    </motion.div>
                  ),
                )}

                {/* END MARKER */}

                <div
                  className="
                    flex
                    items-center
                    justify-center
                    py-3
                  "
                >
                  <span
                    className="
                      text-[9px]
                      font-[700]
                      uppercase
                      tracking-[0.12em]
                      text-[#9AA5B4]
                    "
                  >
                    End of profile
                  </span>
                </div>
              </motion.div>
            </div>

            {/* =================================================
                FOOTER

                shrink-0 ensures footer also never compresses.
            ================================================== */}

            <footer
              className="
                relative
                z-30
                shrink-0
                border-t
                border-[#E1E6ED]
                bg-white
                px-4
                pb-[max(14px,env(safe-area-inset-bottom))]
                pt-3

                sm:px-6
                sm:pb-4
                sm:pt-4
              "
            >
              <button
                type="button"
                onClick={onClose}
                className="
                  flex
                  h-[50px]
                  w-full
                  items-center
                  justify-center
                  rounded-[15px]
                  bg-[#F0F3F7]
                  text-[12px]
                  font-[700]
                  text-[#202838]
                  transition-colors
                  duration-300

                  hover:bg-[#E7ECF2]

                  sm:text-[13px]
                "
              >
                Close Profile
              </button>
            </footer>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}

/* =========================================================
   MAIN SLIDER
========================================================= */

export default function OurTeamSlider() {
  const shouldReduceMotion =
    useReducedMotion();

  const [activeIndex, setActiveIndex] =
    useState(0);

  const [direction, setDirection] =
    useState(1);

  const [isPaused, setIsPaused] =
    useState(false);

  const [
    selectedMember,
    setSelectedMember,
  ] =
    useState<TeamMember | null>(
      null,
    );

  /* =======================================================
     NEXT
  ======================================================= */

  const goToNext = useCallback(() => {
    setDirection(1);

    setActiveIndex(
      (currentIndex) =>
        currentIndex ===
        teamMembers.length - 1
          ? 0
          : currentIndex + 1,
    );
  }, []);

  /* =======================================================
     PREVIOUS
  ======================================================= */

  const goToPrevious =
    useCallback(() => {
      setDirection(-1);

      setActiveIndex(
        (currentIndex) =>
          currentIndex === 0
            ? teamMembers.length -
              1
            : currentIndex - 1,
      );
    }, []);

  /* =======================================================
     DOT
  ======================================================= */

  const goToSlide = (
    index: number,
  ) => {
    if (index === activeIndex) {
      return;
    }

    setDirection(
      index > activeIndex ? 1 : -1,
    );

    setActiveIndex(index);
  };

  /* =======================================================
     DRAG
  ======================================================= */

  const handleDragEnd = (
    _event:
      | MouseEvent
      | TouchEvent
      | PointerEvent,
    info: PanInfo,
  ) => {
    if (info.offset.x < -60) {
      goToNext();
      return;
    }

    if (info.offset.x > 60) {
      goToPrevious();
    }
  };

  /* =======================================================
     AUTOPLAY
  ======================================================= */

  useEffect(() => {
    if (
      isPaused ||
      selectedMember ||
      shouldReduceMotion
    ) {
      return;
    }

    const interval =
      window.setInterval(() => {
        goToNext();
      }, 4000);

    return () => {
      window.clearInterval(interval);
    };
  }, [
    goToNext,
    isPaused,
    selectedMember,
    shouldReduceMotion,
  ]);

  const activeMember =
    teamMembers[activeIndex];

  return (
    <>
      <section
        className="
          w-full
          overflow-hidden
          bg-white
          py-7

          sm:py-10
        "
      >
        <div
          className="
            mx-auto
            w-full
            max-w-[1180px]
            px-4

            sm:px-6

            lg:px-8
          "
        >
          {/* =================================================
              TITLE
          ================================================== */}

          <motion.div
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
              amount: 0.4,
            }}
            transition={{
              duration: 0.55,
              ease,
            }}
            className="
              mb-7
              flex
              items-end
              justify-between
              gap-4
            "
          >
            <div>
              <p
                className="
                  text-[9px]
                  font-[700]
                  uppercase
                  tracking-[0.15em]
                  text-[#347ACB]

                  sm:text-[10px]
                "
              >
                LEADERSHIP
              </p>

              <h2
                className="
                  mt-2
                  text-[29px]
                  font-[700]
                  leading-none
                  tracking-[-0.035em]
                  text-[#11141C]

                  sm:text-[36px]
                "
              >
                Our Team
              </h2>
            </div>
          </motion.div>

          {/* =================================================
              SLIDER
          ================================================== */}

          <div
            className="relative"
            onMouseEnter={() =>
              setIsPaused(true)
            }
            onMouseLeave={() =>
              setIsPaused(false)
            }
            onTouchStart={() =>
              setIsPaused(true)
            }
            onTouchEnd={() =>
              setIsPaused(false)
            }
            onTouchCancel={() =>
              setIsPaused(false)
            }
          >
            <div
              className="
                relative
                h-[220px]
                overflow-hidden
                rounded-[22px]

                sm:h-[260px]
              "
            >
              <AnimatePresence
                initial={false}
                custom={direction}
                mode="wait"
              >
                <motion.article
                  key={activeMember.id}
                  custom={direction}
                  initial={{
                    opacity: 0,

                    x:
                      direction > 0
                        ? 80
                        : -80,

                    scale: 0.985,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,

                    x:
                      direction > 0
                        ? -80
                        : 80,

                    scale: 0.985,
                  }}
                  transition={{
                    duration: 0.62,
                    ease,
                  }}
                  drag="x"
                  dragConstraints={{
                    left: 0,
                    right: 0,
                  }}
                  dragElastic={0.15}
                  dragMomentum={false}
                  onDragEnd={
                    handleDragEnd
                  }
                  className="
                    absolute
                    inset-0
                    flex
                    cursor-grab
                    items-center
                    overflow-hidden
                    rounded-[22px]
                    bg-gradient-to-br
                    from-[#210393]
                    via-[#1550C5]
                    to-[#008FDC]
                    px-5
                    py-5
                    shadow-[0_16px_40px_rgba(25,45,160,0.18)]
                    active:cursor-grabbing

                    sm:px-8
                    sm:py-7
                  "
                >
                  {/* GLOW */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-20
                      -top-20
                      h-[240px]
                      w-[240px]
                      rounded-full
                      bg-white/10
                      blur-3xl
                    "
                  />

                  {/* CONTENT */}

                  <div
                    className="
                      relative
                      z-10
                      flex
                      w-full
                      items-center
                      gap-4

                      sm:gap-8
                    "
                  >
                    {/* IMAGE */}

                    <div
                      className="
                        relative
                        h-[136px]
                        w-[105px]
                        shrink-0
                        overflow-hidden
                        rounded-[14px]
                        border-[3px]
                        border-white/25
                        bg-white
                        shadow-[0_10px_26px_rgba(0,0,0,0.22)]

                        sm:h-[182px]
                        sm:w-[144px]
                      "
                    >
                      <Image
                        src={
                          activeMember.image
                        }
                        alt={
                          activeMember.name
                        }
                        fill
                        priority
                        draggable={
                          false
                        }
                        sizes="(max-width: 640px) 105px, 144px"
                        className="
                          pointer-events-none
                          select-none
                          object-cover
                          object-top
                        "
                      />
                    </div>

                    {/* INFO */}

                    <div
                      className="
                        min-w-0
                        flex-1
                        text-white
                      "
                    >
                      <p
                        className="
                          text-[8px]
                          font-[700]
                          uppercase
                          tracking-[0.13em]
                          text-[#9FE5FA]

                          sm:text-[9px]
                        "
                      >
                        {
                          activeMember.designation
                        }
                      </p>

                      <h3
                        className="
                          mt-2
                          text-[19px]
                          font-[700]
                          leading-[1.15]
                          tracking-[-0.025em]

                          sm:text-[27px]
                        "
                      >
                        {
                          activeMember.name
                        }
                      </h3>

                      {/* EXACT TWO LINES */}

                      <p
                        className="
                          mt-3
                          overflow-hidden
                          text-[11px]
                          leading-[1.55]
                          text-white/85

                          sm:max-w-[680px]
                          sm:text-[14px]
                          sm:leading-[1.6]
                        "
                        style={{
                          display:
                            "-webkit-box",

                          WebkitLineClamp: 2,

                          WebkitBoxOrient:
                            "vertical",
                        }}
                      >
                        {
                          activeMember.summary
                        }
                      </p>

                      {/* READ MORE */}

                      <motion.button
                        type="button"
                        onClick={() => {
                          setSelectedMember(
                            activeMember,
                          );

                          setIsPaused(
                            true,
                          );
                        }}
                        whileTap={{
                          scale: 0.96,
                        }}
                        className="
                          mt-4
                          inline-flex
                          h-[35px]
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-white/30
                          bg-white/10
                          px-4
                          text-[10px]
                          font-[700]
                          text-white
                          backdrop-blur-md
                          transition-all
                          duration-300

                          hover:bg-white
                          hover:text-[#173FB5]

                          sm:h-[39px]
                          sm:px-5
                          sm:text-[11px]
                        "
                      >
                        Read More
                      </motion.button>
                    </div>
                  </div>
                </motion.article>
              </AnimatePresence>
            </div>

            {/* =================================================
                DESKTOP ARROWS
            ================================================== */}

            <button
              type="button"
              onClick={goToPrevious}
              aria-label="Previous team member"
              className="
                absolute
                left-3
                top-1/2
                z-30
                hidden
                h-10
                w-10
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                bg-white/90
                text-[#25334E]
                shadow-[0_8px_24px_rgba(0,0,0,0.12)]
                backdrop-blur-md
                transition
                hover:scale-105

                lg:flex
              "
            >
              <ChevronLeft
                size={19}
              />
            </button>

            <button
              type="button"
              onClick={goToNext}
              aria-label="Next team member"
              className="
                absolute
                right-3
                top-1/2
                z-30
                hidden
                h-10
                w-10
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                bg-white/90
                text-[#25334E]
                shadow-[0_8px_24px_rgba(0,0,0,0.12)]
                backdrop-blur-md
                transition
                hover:scale-105

                lg:flex
              "
            >
              <ChevronRight
                size={19}
              />
            </button>

            {/* =================================================
                DOTS
            ================================================== */}

            <div
              className="
                mt-5
                flex
                items-center
                justify-center
                gap-2
              "
            >
              {teamMembers.map(
                (member, index) => (
                  <button
                    key={
                      member.id
                    }
                    type="button"
                    onClick={() =>
                      goToSlide(index)
                    }
                    aria-label={`View ${member.name}`}
                    aria-current={
                      activeIndex ===
                      index
                        ? "true"
                        : undefined
                    }
                    className={`
                      h-[7px]
                      rounded-full
                      transition-all
                      duration-300

                      ${
                        activeIndex ===
                        index
                          ? "w-7 bg-[#210393]"
                          : "w-[7px] bg-[#D8DAE3] hover:bg-[#9DA1B1]"
                      }
                    `}
                  />
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MODAL
      ====================================================== */}

      <ProfileModal
        member={selectedMember}
        onClose={() => {
          setSelectedMember(null);
          setIsPaused(false);
        }}
      />
    </>
  );
}