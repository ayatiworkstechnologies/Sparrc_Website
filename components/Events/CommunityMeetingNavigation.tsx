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
  Newspaper,
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
    src: "/images/community-news-coverage.png",
    alt: "SPARRC community awareness event featured in DT Next newspaper",
    eyebrow: "Media Coverage",
    title: "SPARRC in the news",
  },
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

/* Desktop-only creative movement */
const desktopLeftImageVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -55,
    y: 30,
    rotate: -5,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    rotate: -2,
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const desktopRightImageVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 55,
    y: 20,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.85,
      delay: 0.08,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* Mobile and tablet cards remain straight */
const mobileTabletCardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.72,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const mobileTabletContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.08,
    },
  },
};

export default function CommunityMeetingNavigation({
  description = defaultDescription,
  images = defaultImages,
}: CommunityMeetingNavigationProps) {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  const firstImage = images[0] ?? defaultImages[0];
  const secondImage = images[1] ?? defaultImages[1];

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
        {/* Navigation */}
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

        {/* Description */}
        <motion.div
          variants={descriptionVariants}
          className="mx-auto mt-8 max-w-[1120px] text-center sm:mt-9 lg:mt-10"
        >
          <p className="text-[13px] font-normal leading-6 text-[#85878d] sm:text-[14px] sm:leading-7 lg:text-[15px] lg:leading-[1.75]">
            {description}
          </p>
        </motion.div>

        {/* Gallery */}
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
          {/* Gallery heading */}
          <motion.div
            variants={headingVariants}
            className="mx-auto mb-8 flex max-w-[1220px] flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
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

          {/* Desktop collage */}
          <div className="relative mx-auto hidden min-h-[660px] max-w-[1180px] lg:block">
            <div className="absolute inset-x-10 bottom-0 top-12 rounded-[36px] bg-[linear-gradient(135deg,#f5f2fa_0%,#eef7fa_52%,#f7f4fb_100%)]" />

            <div className="absolute left-[7%] top-[4%] h-28 w-28 rounded-full border border-[#6e5bb1]/10" />

            <div className="absolute bottom-[8%] right-[5%] h-40 w-40 rounded-full border border-[#4ca9bf]/10" />

            {/* Right image */}
            <motion.figure
              variants={desktopRightImageVariants}
              whileHover={{
                y: -8,
              }}
              transition={{
                duration: 0.3,
              }}
              className="group absolute right-[4%] top-0 h-[590px] w-[63%] overflow-hidden rounded-[30px] border-[10px] border-white bg-white shadow-[0_30px_80px_rgba(39,43,72,0.16)]"
            >
              <div className="relative h-full w-full overflow-hidden rounded-[21px] bg-[#eef5f7]">
                <Image
                  src={secondImage.src}
                  alt={secondImage.alt}
                  fill
                  priority
                  sizes="760px"
                  className="object-contain p-3 transition-transform duration-700 group-hover:scale-[1.025]"
                />
              </div>

              <figcaption className="absolute bottom-5 right-5 flex max-w-[420px] items-center gap-4 rounded-[18px] border border-white/60 bg-white/90 px-5 py-4 shadow-[0_12px_35px_rgba(38,42,67,0.15)] backdrop-blur-md">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-[#eeeaf8] text-[#5f4ba3]">
                  <ImageIcon size={19} />
                </div>

                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#6c5bb0]">
                    {secondImage.eyebrow}
                  </p>

                  <h3 className="mt-1 truncate text-[16px] font-bold text-[#1e2128]">
                    {secondImage.title}
                  </h3>
                </div>

                <ArrowUpRight
                  size={17}
                  className="ml-auto shrink-0 text-[#6552a6]"
                />
              </figcaption>
            </motion.figure>

            {/* Left overlapping image */}
            <motion.figure
              variants={desktopLeftImageVariants}
              whileHover={{
                rotate: 0,
                y: -8,
              }}
              transition={{
                duration: 0.3,
              }}
              className="group absolute bottom-2 left-[3%] z-10 h-[505px] w-[40%] overflow-hidden rounded-[26px] border-[9px] border-white bg-white shadow-[0_28px_70px_rgba(35,39,65,0.18)]"
            >
              <div className="relative h-full w-full overflow-hidden rounded-[18px] bg-[#f7f7f8]">
                <Image
                  src={firstImage.src}
                  alt={firstImage.alt}
                  fill
                  sizes="480px"
                  className="object-contain p-2 transition-transform duration-700 group-hover:scale-[1.025]"
                />
              </div>

              <figcaption className="absolute inset-x-4 bottom-4 rounded-[16px] border border-white/60 bg-white/92 p-4 shadow-[0_10px_30px_rgba(38,42,67,0.13)] backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[13px] bg-[#eaf6f8] text-[#3e99ad]">
                    <Newspaper size={18} />
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#4b99aa]">
                      {firstImage.eyebrow}
                    </p>

                    <h3 className="mt-1 text-[15px] font-bold text-[#1f2229]">
                      {firstImage.title}
                    </h3>
                  </div>
                </div>
              </figcaption>
            </motion.figure>

            <motion.div
              variants={headingVariants}
              className="absolute left-[4%] top-[3%] z-20 rounded-[18px] border border-white/70 bg-white/90 px-5 py-4 shadow-[0_15px_40px_rgba(45,48,75,0.13)] backdrop-blur-md"
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#6251a7]">
                Community Archive
              </p>

              <p className="mt-1 text-[13px] text-[#747984]">
                Media & milestones
              </p>
            </motion.div>
          </div>

          {/* Straight mobile and tablet layout */}
          <motion.div
            variants={mobileTabletContainerVariants}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:hidden"
          >
            {[firstImage, secondImage].map((image, index) => {
              const isNewsImage = index === 0;

              return (
                <motion.figure
                  key={`${image.src}-${index}`}
                  variants={mobileTabletCardVariants}
                  whileHover={{
                    y: -6,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="group relative flex min-w-0 flex-col overflow-hidden rounded-[24px] border border-[#e7e9ef] bg-white p-3 shadow-[0_18px_48px_rgba(37,42,68,0.12)] sm:p-4"
                >
                  {/* Straight image frame */}
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[18px] bg-[linear-gradient(145deg,#f5f2fa,#eef7f9)]">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      priority={index === 0}
                      sizes="(max-width: 767px) 100vw, 50vw"
                      className="object-contain p-2 transition-transform duration-700 ease-out group-hover:scale-[1.025] sm:p-3"
                    />

                    <span className="absolute left-3 top-3 rounded-full border border-white/70 bg-white/90 px-3 py-1.5 text-[10px] font-bold tracking-[0.12em] text-[#6552a6] shadow-sm backdrop-blur-md sm:left-4 sm:top-4">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Content below the image */}
                  <figcaption className="flex min-h-[92px] items-center gap-3 px-2 pb-2 pt-5">
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] ${
                        isNewsImage
                          ? "bg-[#eaf6f8] text-[#3e99ad]"
                          : "bg-[#eeeaf8] text-[#5f4ba3]"
                      }`}
                    >
                      {isNewsImage ? (
                        <Newspaper size={18} />
                      ) : (
                        <ImageIcon size={18} />
                      )}
                    </div>

                    <div className="min-w-0 flex-1">
                      <p
                        className={`text-[9px] font-bold uppercase tracking-[0.15em] sm:text-[10px] ${
                          isNewsImage
                            ? "text-[#4b99aa]"
                            : "text-[#6c5bb0]"
                        }`}
                      >
                        {image.eyebrow}
                      </p>

                      <h3 className="mt-1.5 text-[15px] font-bold leading-snug text-[#1f2229] sm:text-[16px]">
                        {image.title}
                      </h3>
                    </div>

                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f5f3fa] text-[#6552a6] transition-all duration-300 group-hover:bg-[#6552a6] group-hover:text-white">
                      <ArrowUpRight size={17} />
                    </span>
                  </figcaption>
                </motion.figure>
              );
            })}
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