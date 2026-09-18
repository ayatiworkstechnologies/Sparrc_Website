"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import {
  ArrowUpRight,
  ImageIcon,
  Sparkles,
} from "lucide-react";

type CommunityImage = {
  src: string;
  alt: string;
  eyebrow?: string;
  title?: string;
};

type CommunityMeetingNavigationProps = {
  description?: string;
  images?: CommunityImage[];
};

const meetingLinks = [
  {
    title: "Neuro Community Meeting on June 7, 2024",
    href: "/events/neuro-community-meeting-june-7-2024",
  },
  {
    title: "Knee Health Community Gathering July 29, 2024",
    href: "/events/knee-health-community-gathering-july-29-2024",
  },
  {
    title: "Geriatric Community Meeting June 14, 2024",
    href: "/events/geriatric-community-meeting-june-14-2024",
  },
];

const defaultDescription =
  "60% of the world population suffering from cardiac diseases are Indians. It is of utmost importance that people understand that most of the cardiac diseases that are diagnosed and treated with surgeries like coronary artery bypass graft or stents, can be prevented by a regular exercise program. It is also possible for those that have already undergone such surgeries to get back to their pre-surgery levels of activity by joining the SPARRC prescription exercise program. Our program has enabled people to even run a marathon after cardiac bypass surgeries.";

const defaultImages: CommunityImage[] = [
  {
    src: "/images/sparrc-centre-inauguration.png",
    alt: "Invitation for the inauguration of the nineteenth SPARRC centre",
    eyebrow: "SPARRC Milestone",
    title: "19th Centre Inauguration",
  },
];

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.06,
    },
  },
};

const tabVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -16,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const descriptionVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 22,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: 0.25,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const headingVariants: Variants = {
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

const imageVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function CommunityMeetingNavigation({
  description = defaultDescription,
  images = defaultImages,
}: CommunityMeetingNavigationProps) {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  /*
   * Supports both:
   * 1. New single-image array
   * 2. Old two-image array
   */
  const milestoneImage =
    images.length > 1
      ? images[1]
      : images[0] ?? defaultImages[0];

  return (
    <section className="relative overflow-hidden bg-white px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
      {/* Background decorations */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-[75%] -translate-x-1/2 rounded-full bg-[#7562b4]/[0.035] blur-[90px]" />

      <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-[#4aa8c4]/[0.045] blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-[#6f55b2]/[0.045] blur-[120px]" />

      <motion.div
        initial={shouldReduceMotion ? false : "hidden"}
        whileInView={shouldReduceMotion ? undefined : "visible"}
        viewport={{
          once: true,
          amount: 0.08,
        }}
        variants={containerVariants}
        className="relative mx-auto max-w-[1280px]"
      >
        {/* =========================
            NAVIGATION
        ========================== */}
        <nav aria-label="Community meeting navigation">
          <div className="community-scrollbar-hidden overflow-x-auto pb-5">
            <div className="mx-auto flex w-max min-w-full items-center justify-start sm:justify-center">
              {meetingLinks.map((item, index) => {
                const isActive =
                  pathname === item.href ||
                  pathname.startsWith(`${item.href}/`);

                return (
                  <div
                    key={item.href}
                    className="flex shrink-0 items-center"
                  >
                    <motion.div variants={tabVariants}>
                      <Link
                        href={item.href}
                        aria-current={isActive ? "page" : undefined}
                        className={`group relative block whitespace-nowrap rounded-xl px-4 py-3 text-[11px] font-bold uppercase tracking-[0.01em] transition-all duration-300 sm:px-5 sm:text-[12px] lg:px-6 ${
                          isActive
                            ? "bg-white text-[#74767e] shadow-[0_8px_25px_rgba(38,43,63,0.14)]"
                            : "text-[#17191f] hover:-translate-y-0.5 hover:bg-[#fafbfc] hover:text-[#6251ad]"
                        }`}
                      >
                        {isActive && (
                          <motion.span
                            layoutId="active-community-tab"
                            className="absolute inset-0 -z-10 rounded-xl bg-white"
                            transition={{
                              type: "spring",
                              stiffness: 350,
                              damping: 32,
                            }}
                          />
                        )}

                        <span className="relative z-10">
                          {item.title}
                        </span>

                        <span
                          className={`absolute inset-x-5 -bottom-0.5 h-[2px] origin-center rounded-full bg-[#6855b5] transition-transform duration-300 ${
                            isActive
                              ? "scale-x-100"
                              : "scale-x-0 group-hover:scale-x-100"
                          }`}
                        />
                      </Link>
                    </motion.div>

                    {index < meetingLinks.length - 1 && (
                      <motion.span
                        variants={tabVariants}
                        aria-hidden="true"
                        className="mx-3 h-9 w-px shrink-0 bg-[#dce0e7] sm:mx-4 lg:mx-5"
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mx-auto mt-1 h-[2px] w-14 rounded-full bg-[#e8eaf0] sm:hidden" />
        </nav>

        {/* =========================
            DESCRIPTION
        ========================== */}
        <motion.div
          variants={descriptionVariants}
          className="mx-auto mt-8 max-w-[1120px] text-center sm:mt-9 lg:mt-10"
        >
          <p className="text-[13px] font-normal leading-6 text-[#85878d] sm:text-[14px] sm:leading-7 lg:text-[15px] lg:leading-[1.75]">
            {description}
          </p>
        </motion.div>

        {/* =========================
            SPARRC MOMENTS
        ========================== */}
        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView={shouldReduceMotion ? undefined : "visible"}
          viewport={{
            once: true,
            amount: 0.1,
            margin: "0px 0px -70px 0px",
          }}
          className="mt-12 sm:mt-14 lg:mt-16"
        >
          {/* Heading */}
          <motion.div
            variants={headingVariants}
            className="mx-auto mb-8 flex max-w-[1220px] flex-col gap-4 sm:flex-row sm:items-end sm:justify-between lg:mb-10"
          >
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#f0edf9] px-4 py-2">
                <Sparkles
                  size={14}
                  className="text-[#604fa3]"
                />

                <span className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#604fa3]">
                  SPARRC Moments
                </span>
              </div>

              <h2 className="mt-4 max-w-[620px] text-[25px] font-bold leading-tight text-[#171a21] sm:text-[31px] lg:text-[36px]">
                Stories, milestones and community impact
              </h2>
            </div>

            <p className="max-w-[360px] text-[13px] leading-6 text-[#858993] sm:text-right sm:text-[14px]">
              A visual record of SPARRC initiatives, media recognition and
              centre milestones.
            </p>
          </motion.div>

          {/* =========================
              SINGLE MILESTONE LAYOUT
          ========================== */}
          <motion.div
            variants={imageVariants}
            className="relative mx-auto max-w-[980px]"
          >
            {/* Main soft background */}
            <div className="relative overflow-hidden rounded-[28px] bg-[linear-gradient(135deg,#f4f1f9_0%,#eef7f9_50%,#f4f2f9_100%)] p-4 sm:p-6 lg:rounded-[36px] lg:p-8">
              
              {/* Decorative circles */}
              <div className="pointer-events-none absolute -left-12 -top-12 h-36 w-36 rounded-full border border-[#6e5bb1]/10" />

              <div className="pointer-events-none absolute -bottom-16 -right-10 h-44 w-44 rounded-full border border-[#4ca9bf]/10" />

              {/* Community Archive badge */}
              <motion.div
                variants={headingVariants}
                className="relative z-20 mb-5 inline-block rounded-[18px] border border-white/70 bg-white/90 px-5 py-4 shadow-[0_15px_40px_rgba(45,48,75,0.10)] backdrop-blur-md sm:mb-6"
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#6251a7] sm:text-[11px]">
                  Community Archive
                </p>

                <p className="mt-1 text-[12px] text-[#747984] sm:text-[13px]">
                  Media & milestones
                </p>
              </motion.div>

              {/* Main image card */}
              <motion.figure
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: -6,
                      }
                }
                transition={{
                  duration: 0.3,
                }}
                className="group relative z-10 mx-auto overflow-hidden rounded-[24px] border-[7px] border-white bg-white shadow-[0_24px_65px_rgba(39,43,72,0.14)] sm:rounded-[28px] sm:border-[9px]"
              >
                {/* Image area */}
                <div className="relative mx-auto aspect-[16/10] w-full overflow-hidden rounded-[17px] bg-[#eef5f7] sm:rounded-[20px] lg:aspect-[16/9]">
                  <Image
                    src={milestoneImage.src}
                    alt={milestoneImage.alt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 900px"
                    className="object-contain p-2 transition-transform duration-700 ease-out group-hover:scale-[1.015] sm:p-3 lg:p-4"
                  />
                </div>

                {/* Milestone information */}
                <figcaption className="flex items-center gap-3 bg-white px-4 py-4 sm:gap-4 sm:px-6 sm:py-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[13px] bg-[#eeeaf8] text-[#5f4ba3] sm:h-12 sm:w-12 sm:rounded-[15px]">
                    <ImageIcon size={19} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#6c5bb0] sm:text-[10px]">
                      {milestoneImage.eyebrow}
                    </p>

                    <h3 className="mt-1 text-[14px] font-bold leading-snug text-[#1e2128] sm:text-[16px]">
                      {milestoneImage.title}
                    </h3>
                  </div>

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f5f3fa] text-[#6552a6] transition-all duration-300 group-hover:bg-[#6552a6] group-hover:text-white sm:h-10 sm:w-10">
                    <ArrowUpRight size={17} />
                  </span>
                </figcaption>
              </motion.figure>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      <style jsx>{`
        .community-scrollbar-hidden {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .community-scrollbar-hidden::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}