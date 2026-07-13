"use client";

import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  Activity,
  Apple,
  ArrowRightCircle,
  BadgeCheck,
  BarChart3,
  Bike,
  Bone,
  Brain,
  CalendarCheck,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  CircleAlert,
  CircleDot,
  ClipboardCheck,
  ClipboardList,
  Crosshair,
  Dumbbell,
  FileSearch,
  Footprints,
  Gauge,
  Hand,
  HandHeart,
  Heart,
  HeartCrack,
  HeartHandshake,
  HeartPulse,
  Leaf,
  Microscope,
  PersonStanding,
  Repeat,
  Scale,
  ScanHeart,
  ScanSearch,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  StretchHorizontal,
  Syringe,
  Timer,
  Utensils,
  Users,
  Waves,
  Zap,
  type LucideIcon,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export type IconName =
  | ""
  | "activity"
  | "apple"
  | "arrowRightCircle"
  | "badgeCheck"
  | "chart"
  | "bike"
  | "bone"
  | "brain"
  | "calendar"
  | "checkCircle"
  | "circleAlert"
  | "circleDot"
  | "clipboardCheck"
  | "clipboardList"
  | "target"
  | "dumbbell"
  | "fileSearch"
  | "footprints"
  | "gauge"
  | "hand"
  | "handHeart"
  | "heart"
  | "heartCrack"
  | "heartPulse"
  | "heartHandshake"
  | "leaf"
  | "microscope"
  | "personStanding"
  | "repeat"
  | "scale"
  | "scan"
  | "scanHeart"
  | "shield"
  | "sparkles"
  | "stethoscope"
  | "stretch"
  | "syringe"
  | "timer"
  | "utensils"
  | "users"
  | "waves"
  | "zap";

export type FeatureItem = {
  icon?: IconName;
  iconImage?: string;
  title: string;
};

export type DetailSection = {
  eyebrow?: string;
  heading?: string;
  intro?: string;
  points?: string[];
  content?: string | string[];

  image?: string;
  images?: string[];
  imageType?: "large" | "normal";

  layout?:
    | "content"
    | "gradientCard"
    | "pointsCard"
    | "splitList"
    | "imageLeft"
    | "imageRight"
    | "carouselLeft"
    | "carouselRight";

  showFeatures?: boolean;

  icon?: IconName;
  iconImage?: string;

  listIcon?: string;

  pointIcon?: IconName;
  pointIconImage?: string;

  /**
   * Number of split-list points displayed immediately.
   * Default value is 8.
   */
  initialVisiblePoints?: number;

  /**
   * GSAP delay between extra split-list points.
   * Default value is 0.14 seconds.
   */
  revealStagger?: number;

  features?: FeatureItem[];
};

type SidebarItem = {
  title: string;
  href: string;
};

type CTAData = {
  icon?: IconName;
  iconImage?: string;
  title: string;
  description: string;
};

type Props = {
  title?: string;
  sections?: DetailSection[];
  sidebarItems?: SidebarItem[];
  activeHref?: string;
  showCTA?: boolean;
  cta?: CTAData;
};

const ease: [number, number, number, number] = [
  0.16, 1, 0.3, 1,
];

const defaultFeatures: FeatureItem[] = [
  {
    icon: "shield",
    title: "Personalised Assessment",
  },
  {
    icon: "chart",
    title: "Evidence Based Approach",
  },
  {
    icon: "target",
    title: "Identify Root Cause",
  },
  {
    icon: "calendar",
    title: "Follow Up & Progression",
  },
];

const iconMap: Record<
  Exclude<IconName, "">,
  LucideIcon
> = {
  activity: Activity,
  apple: Apple,
  arrowRightCircle: ArrowRightCircle,
  badgeCheck: BadgeCheck,
  chart: BarChart3,
  bike: Bike,
  bone: Bone,
  brain: Brain,
  calendar: CalendarCheck,
  checkCircle: CheckCircle2,
  circleAlert: CircleAlert,
  circleDot: CircleDot,
  clipboardCheck: ClipboardCheck,
  clipboardList: ClipboardList,
  target: Crosshair,
  dumbbell: Dumbbell,
  fileSearch: FileSearch,
  footprints: Footprints,
  gauge: Gauge,
  hand: Hand,
  handHeart: HandHeart,
  heart: Heart,
  heartCrack: HeartCrack,
  heartPulse: HeartPulse,
  heartHandshake: HeartHandshake,
  leaf: Leaf,
  microscope: Microscope,
  personStanding: PersonStanding,
  repeat: Repeat,
  scale: Scale,
  scan: ScanSearch,
  scanHeart: ScanHeart,
  shield: ShieldCheck,
  sparkles: Sparkles,
  stethoscope: Stethoscope,
  stretch: StretchHorizontal,
  syringe: Syringe,
  timer: Timer,
  utensils: Utensils,
  users: Users,
  waves: Waves,
  zap: Zap,
};

function DynamicIcon({
  name = "activity",
  size = 20,
  strokeWidth = 2,
}: {
  name?: IconName;
  size?: number;
  strokeWidth?: number;
}) {
  if (!name) return null;

  const Icon = iconMap[name];

  if (!Icon) return null;

  return (
    <Icon
      size={size}
      strokeWidth={strokeWidth}
    />
  );
}

function TextBlock({
  eyebrow,
  heading,
  content,
  iconCard = false,
  icon,
  iconImage,
  listIcon,
}: {
  eyebrow?: string;
  heading?: string;
  content?: string | string[];
  iconCard?: boolean;
  icon?: IconName;
  iconImage?: string;
  listIcon?: string;
}) {
  const hasIcon = Boolean(icon || iconImage);

  return (
    <div>
      {iconCard && hasIcon && (
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#e9f5ff] to-[#dffcf2] text-[#1268d6] shadow-[0_12px_30px_rgba(18,104,214,0.12)]">
          {iconImage ? (
            <img
              src={iconImage}
              alt={
                eyebrow ||
                heading ||
                "Section icon"
              }
              className="h-7 w-7 object-contain"
            />
          ) : (
            <DynamicIcon
              name={icon}
              size={28}
            />
          )}
        </div>
      )}

      {eyebrow && (
        <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#eafff5] px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#12b886]">
          {hasIcon &&
            (iconImage ? (
              <img
                src={iconImage}
                alt=""
                className="h-4 w-4 object-contain"
              />
            ) : (
              <DynamicIcon
                name={icon}
                size={14}
              />
            ))}

          {eyebrow}
        </div>
      )}

      {heading && (
        <h2 className="mb-4 text-[24px] font-extrabold leading-tight text-[#1268d6] md:text-[32px]">
          {heading}
        </h2>
      )}

      {Array.isArray(content) ? (
        <div className="space-y-4">
          {content.map((item, index) =>
            listIcon ? (
              <div
                key={`${item}-${index}`}
                className="flex items-start gap-3"
              >
                <img
                  src={listIcon}
                  alt=""
                  className="mt-[7px] h-4 w-4 shrink-0 object-contain"
                />

                <p className="text-[14px] font-medium leading-[1.9] text-[#172033] md:text-[15px]">
                  {item}
                </p>
              </div>
            ) : (
              <p
                key={`${item}-${index}`}
                className="text-[14px] font-medium leading-[1.9] text-[#172033] md:text-[15px]"
              >
                {item}
              </p>
            ),
          )}
        </div>
      ) : (
        content && (
          <p className="text-[14px] font-medium leading-[1.9] text-[#172033] md:text-[15px]">
            {content}
          </p>
        )
      )}
    </div>
  );
}

function PointsCard({
  section,
}: {
  section: DetailSection;
}) {
  return (
    <div className="rounded-[30px] border border-white bg-gradient-to-br from-white via-[#f8fbff] to-[#effff8] p-6 shadow-[0_18px_60px_rgba(18,104,214,0.08)] backdrop-blur md:p-8">
      <TextBlock
        eyebrow={section.eyebrow}
        heading={section.heading}
        content={section.intro}
        iconCard
        icon={section.icon}
        iconImage={section.iconImage}
      />

      {section.points?.length ? (
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {section.points.map(
            (point, index) => (
              <div
                key={`${point}-${index}`}
                className="group flex items-start gap-3 rounded-2xl border border-[#e7f1ff] bg-white/90 p-4 shadow-[0_10px_28px_rgba(18,104,214,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_38px_rgba(18,104,214,0.11)]"
              >
                {section.listIcon ? (
                  <img
                    src={section.listIcon}
                    alt=""
                    className="mt-[6px] h-4 w-4 shrink-0 object-contain"
                  />
                ) : (
                  <span className="mt-[8px] h-2.5 w-2.5 shrink-0 rounded-full bg-[#1268d6]" />
                )}

                <p className="text-[14px] font-semibold leading-[1.8] text-[#172033] md:text-[15px]">
                  {point}
                </p>
              </div>
            ),
          )}
        </div>
      ) : null}
    </div>
  );
}

function SplitListPointIcon({
  section,
}: {
  section: DetailSection;
}) {
  if (section.pointIconImage) {
    return (
      <img
        src={section.pointIconImage}
        alt=""
        className="h-[19px] w-[19px] object-contain"
      />
    );
  }

  if (section.listIcon) {
    return (
      <img
        src={section.listIcon}
        alt=""
        className="h-[19px] w-[19px] object-contain"
      />
    );
  }

  return (
    <DynamicIcon
      name={
        section.pointIcon || "handHeart"
      }
      size={18}
      strokeWidth={2.1}
    />
  );
}

function SplitListSection({
  section,
}: {
  section: DetailSection;
}) {
  const sectionRef =
    useRef<HTMLDivElement>(null);

  const headingRef =
    useRef<HTMLDivElement>(null);

  const dividerRef =
    useRef<HTMLDivElement>(null);

  const pointRefs = useRef<
    Array<HTMLDivElement | null>
  >([]);

  const points = section.points ?? [];

  const initialVisibleCount = Math.min(
    Math.max(
      section.initialVisiblePoints ?? 8,
      0,
    ),
    points.length,
  );

  const revealStagger =
    section.revealStagger ?? 0.14;

  useLayoutEffect(() => {
    const element = sectionRef.current;

    if (!element) return;

    const visiblePoints = pointRefs.current
      .slice(0, initialVisibleCount)
      .filter(
        (
          item,
        ): item is HTMLDivElement =>
          Boolean(item),
      );

    const revealPoints = pointRefs.current
      .slice(initialVisibleCount)
      .filter(
        (
          item,
        ): item is HTMLDivElement =>
          Boolean(item),
      );

    const reduceMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

    const context = gsap.context(() => {
      gsap.set(visiblePoints, {
        autoAlpha: 1,
        y: 0,
        scale: 1,
      });

      if (reduceMotion) {
        gsap.set(revealPoints, {
          autoAlpha: 1,
          y: 0,
          scale: 1,
        });

        return;
      }

      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current,
          {
            autoAlpha: 0,
            x: -35,
          },
          {
            autoAlpha: 1,
            x: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 78%",
              once: true,
            },
          },
        );
      }

      if (dividerRef.current) {
        const isDesktop =
          window.matchMedia(
            "(min-width: 768px)",
          ).matches;

        gsap.fromTo(
          dividerRef.current,
          isDesktop
            ? {
                scaleY: 0,
                transformOrigin: "top center",
              }
            : {
                scaleX: 0,
                transformOrigin: "left center",
              },
          isDesktop
            ? {
                scaleY: 1,
                duration: 1.1,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: element,
                  start: "top 75%",
                  once: true,
                },
              }
            : {
                scaleX: 1,
                duration: 1.1,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: element,
                  start: "top 82%",
                  once: true,
                },
              },
        );
      }

      if (revealPoints.length > 0) {
        gsap.set(revealPoints, {
          autoAlpha: 0,
          y: 35,
          scale: 0.96,
        });

        ScrollTrigger.batch(revealPoints, {
          start: "top 90%",
          once: true,
          interval: 0.12,
          batchMax: 3,

          onEnter: (batch) => {
            gsap.to(batch, {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              duration: 0.75,
              stagger: revealStagger,
              ease: "power3.out",
              overwrite: true,
            });
          },
        });
      }
    }, element);

    return () => {
      context.revert();
    };
  }, [
    initialVisibleCount,
    points.length,
    revealStagger,
  ]);

  return (
    <div
      ref={sectionRef}
      className="relative isolate overflow-hidden rounded-[28px] border border-[#edf1f6] bg-white"
    >
      {/* Checked-grid background */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-70"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(34, 76, 130, 0.075) 1px, transparent 1px), linear-gradient(to bottom, rgba(34, 76, 130, 0.075) 1px, transparent 1px)",
          backgroundSize: "68px 68px",
        }}
      />

      {/* Soft white overlay */}
      <div className="pointer-events-none absolute inset-0 -z-[9] bg-white/35" />

      <div className="relative grid gap-8 px-5 py-10 sm:px-8 md:grid-cols-[0.92fr_1px_1.08fr] md:items-start md:gap-10 md:px-10 md:py-14 lg:gap-14 lg:px-14 lg:py-16">
        {/* Left heading */}
        <div
          ref={headingRef}
          className="flex h-full flex-col justify-center md:sticky md:top-28 md:min-h-[430px] md:text-center"
        >
          {section.eyebrow && (
            <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full bg-[#eef9ff] px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#1268d6] md:mx-auto">
              {section.iconImage ? (
                <img
                  src={section.iconImage}
                  alt=""
                  className="h-4 w-4 object-contain"
                />
              ) : section.icon ? (
                <DynamicIcon
                  name={section.icon}
                  size={14}
                />
              ) : null}

              {section.eyebrow}
            </div>
          )}

          {section.heading && (
            <h2 className="max-w-[450px] text-[25px] font-extrabold leading-[1.42] text-[#111111] sm:text-[29px] md:mx-auto md:text-[31px] lg:text-[34px]">
              {section.heading}
            </h2>
          )}

          {section.intro && (
            <p className="mt-5 max-w-[440px] text-[14px] font-medium leading-7 text-[#667085] md:mx-auto md:text-[15px]">
              {section.intro}
            </p>
          )}
        </div>

        {/* Responsive divider */}
        <div
          ref={dividerRef}
          className="h-px w-full bg-[#b9eaff] md:h-full md:min-h-[430px] md:w-px"
        />

        {/* Right points */}
        <div className="space-y-1 md:py-1">
          {points.map((point, index) => {
            const initiallyHidden =
              index >= initialVisibleCount;

            return (
              <div
                key={`${point}-${index}`}
                ref={(element) => {
                  pointRefs.current[index] =
                    element;
                }}
                className={`group flex min-h-[46px] items-center gap-3 rounded-xl px-2 py-2.5 transition-colors duration-300 hover:bg-white/75 sm:px-3 ${
                  initiallyHidden
                    ? "translate-y-8 opacity-0"
                    : "translate-y-0 opacity-100"
                }`}
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center text-[#3257c8]">
                  <SplitListPointIcon
                    section={section}
                  />
                </span>

                <p className="text-[14px] font-bold leading-6 text-[#171717] sm:text-[15px]">
                  {point}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function ImageFrame({
  src,
  alt,
  large,
}: {
  src: string;
  alt: string;
  large?: boolean;
}) {
  return (
    <div className="relative">
      <div className="absolute -inset-3 rounded-[34px] bg-gradient-to-br from-[#1268d6]/15 via-white to-[#19d3a2]/15 blur-xl" />

      <div className="relative overflow-hidden rounded-[28px] border border-white bg-white p-2 shadow-[0_20px_70px_rgba(18,104,214,0.13)]">
        <img
          src={src}
          alt={alt}
          className={`w-full rounded-[22px] object-cover transition duration-700 hover:scale-[1.03] ${
            large
              ? "h-[260px] md:h-[380px]"
              : "h-[240px] md:h-[320px]"
          }`}
        />
      </div>
    </div>
  );
}

function ImageCarousel({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [active, setActive] =
    useState(0);

  const prevSlide = () => {
    setActive((current) =>
      current === 0
        ? images.length - 1
        : current - 1,
    );
  };

  const nextSlide = () => {
    setActive((current) =>
      current === images.length - 1
        ? 0
        : current + 1,
    );
  };

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = window.setInterval(() => {
      setActive((current) =>
        current === images.length - 1
          ? 0
          : current + 1,
      );
    }, 3200);

    return () => {
      window.clearInterval(timer);
    };
  }, [images.length]);

  if (!images.length) return null;

  return (
    <div className="relative">
      <div className="absolute -inset-3 rounded-[34px] bg-gradient-to-br from-[#1268d6]/15 via-white to-[#19d3a2]/15 blur-xl" />

      <div className="relative overflow-hidden rounded-[28px] border border-white bg-white p-2 shadow-[0_20px_70px_rgba(18,104,214,0.13)]">
        <AnimatePresence mode="wait">
          <motion.img
            key={images[active]}
            src={images[active]}
            alt={alt}
            initial={{
              opacity: 0,
              scale: 1.04,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0.98,
            }}
            transition={{
              duration: 0.45,
              ease,
            }}
            className="h-[250px] w-full rounded-[22px] object-cover md:h-[320px]"
          />
        </AnimatePresence>

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous image"
              className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/95 text-[#1268d6] shadow-lg transition hover:bg-[#1268d6] hover:text-white"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next image"
              className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/95 text-[#1268d6] shadow-lg transition hover:bg-[#1268d6] hover:text-white"
            >
              <ChevronRight size={20} />
            </button>

            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 rounded-full bg-white/75 px-3 py-2 backdrop-blur">
              {images.map(
                (image, index) => (
                  <button
                    key={`${image}-${index}`}
                    type="button"
                    aria-label={`Go to image ${
                      index + 1
                    }`}
                    onClick={() =>
                      setActive(index)
                    }
                    className={`h-2 rounded-full transition-all ${
                      active === index
                        ? "w-7 bg-[#1268d6]"
                        : "w-2 bg-[#b9c8dc]"
                    }`}
                  />
                ),
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function FeatureGrid({
  features = defaultFeatures,
}: {
  features?: FeatureItem[];
}) {
  return (
    <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
      {features.map(
        (item, index) => (
          <div
            key={`${item.title}-${index}`}
            className="rounded-[20px] border border-[#e7f1ff] bg-white/90 p-4 text-center shadow-[0_12px_30px_rgba(18,104,214,0.07)]"
          >
            <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-[#eef6ff] text-[#1268d6]">
              {item.iconImage ? (
                <img
                  src={item.iconImage}
                  alt={item.title}
                  className="h-6 w-6 object-contain"
                />
              ) : (
                <DynamicIcon
                  name={
                    item.icon ||
                    "activity"
                  }
                  size={19}
                />
              )}
            </div>

            <p className="text-[11px] font-extrabold leading-snug text-[#172033]">
              {item.title}
            </p>
          </div>
        ),
      )}
    </div>
  );
}

function CTAIcon({
  icon,
  iconImage,
}: {
  icon?: IconName;
  iconImage?: string;
}) {
  if (iconImage) {
    return (
      <img
        src={iconImage}
        alt="CTA icon"
        className="h-9 w-9 object-contain brightness-0 invert"
      />
    );
  }

  return (
    <DynamicIcon
      name={icon || "sparkles"}
      size={36}
    />
  );
}

export default function DynamicDepartmentDetail({
  title,
  sections = [],
  sidebarItems = [],
  activeHref,
  showCTA = true,
  cta = {
    icon: "sparkles",
    title:
      "Move Better. Feel Better. Live Better.",
    description:
      "Our assessment helps you move with confidence and reduces the risk of future injuries.",
  },
}: Props) {
  return (
    <section className="relative overflow-hidden bg-[#f7fbff] px-4 py-10 sm:px-6 md:py-14">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#1268d6_1px,transparent_1px)] [background-size:26px_26px] opacity-[0.08]" />

      <div className="pointer-events-none absolute right-[-140px] top-[-100px] h-[460px] w-[460px] rounded-full bg-[#1268d6]/10 blur-3xl" />

      <div className="pointer-events-none absolute bottom-20 left-[-140px] h-[380px] w-[380px] rounded-full bg-[#19d3a2]/10 blur-3xl" />

      <div className="pointer-events-none absolute right-0 top-0 h-[260px] w-full bg-[linear-gradient(135deg,transparent_40%,rgba(18,104,214,0.08)_40%,transparent_68%)]" />

      <div className="relative mx-auto max-w-6xl">
        {sidebarItems.length > 0 && (
          <div className="mb-8 overflow-x-auto pb-2">
            <div className="flex w-max gap-3 rounded-full border border-white bg-white/85 p-2 shadow-[0_16px_45px_rgba(18,104,214,0.08)] backdrop-blur">
              {sidebarItems.map(
                (item) => {
                  const active =
                    item.href === activeHref;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`whitespace-nowrap rounded-full px-5 py-3 text-[13px] font-bold transition ${
                        active
                          ? "bg-gradient-to-r from-[#1268d6] to-[#5741d9] text-white shadow-lg"
                          : "bg-[#eef6ff] text-[#172033] hover:bg-[#1268d6] hover:text-white"
                      }`}
                    >
                      {item.title}
                    </Link>
                  );
                },
              )}
            </div>
          </div>
        )}

        <motion.div
          initial={{
            opacity: 0,
            y: 24,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            ease,
          }}
          className="mb-10"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#eafff5] px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#12b886]">
            <HeartPulse size={15} />
            SPARRC
          </div>

          {title && (
            <h1 className="max-w-4xl text-[31px] font-extrabold leading-[1.08] text-[#1268d6] md:text-[42px]">
              {title}
            </h1>
          )}

          <div className="mt-5 flex items-center gap-3">
            <span className="h-[4px] w-16 rounded-full bg-[#1268d6]" />

            <span className="h-[7px] w-7 rounded-full bg-[#19d3a2]" />
          </div>
        </motion.div>

        <div className="space-y-8">
          {sections.map(
            (section, index) => {
              if (
                section.layout ===
                "splitList"
              ) {
                return (
                  <motion.div
                    key={`split-list-${index}`}
                    initial={{
                      opacity: 0,
                      y: 28,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      margin: "-80px",
                    }}
                    transition={{
                      duration: 0.7,
                      ease,
                    }}
                  >
                    <SplitListSection
                      section={section}
                    />
                  </motion.div>
                );
              }

              if (section.image) {
                const imageLeft =
                  section.layout ===
                  "imageLeft";

                return (
                  <motion.div
                    key={`image-section-${index}`}
                    initial={{
                      opacity: 0,
                      y: 28,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      margin: "-80px",
                    }}
                    transition={{
                      duration: 0.7,
                      ease,
                    }}
                    className="grid items-center gap-8 md:grid-cols-[0.92fr_1.08fr]"
                  >
                    {imageLeft && (
                      <ImageFrame
                        src={section.image}
                        alt={
                          section.heading ||
                          title ||
                          "Assessment image"
                        }
                        large={
                          section.imageType ===
                          "large"
                        }
                      />
                    )}

                    <div className="rounded-[30px] border border-white bg-white/90 p-6 shadow-[0_18px_60px_rgba(18,104,214,0.08)] backdrop-blur md:p-8">
                      <TextBlock
                        eyebrow={
                          section.eyebrow
                        }
                        heading={
                          section.heading
                        }
                        content={
                          section.content
                        }
                        iconCard
                        icon={section.icon}
                        iconImage={
                          section.iconImage
                        }
                        listIcon={
                          section.listIcon
                        }
                      />
                    </div>

                    {!imageLeft && (
                      <ImageFrame
                        src={section.image}
                        alt={
                          section.heading ||
                          title ||
                          "Assessment image"
                        }
                        large={
                          section.imageType ===
                          "large"
                        }
                      />
                    )}
                  </motion.div>
                );
              }

              if (
                section.images?.length
              ) {
                const carouselLeft =
                  section.layout ===
                  "carouselLeft";

                return (
                  <motion.div
                    key={`carousel-section-${index}`}
                    initial={{
                      opacity: 0,
                      y: 28,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      margin: "-80px",
                    }}
                    transition={{
                      duration: 0.7,
                      ease,
                    }}
                    className="grid items-center gap-8 rounded-[34px] border border-white bg-white/[0.88] p-5 shadow-[0_22px_80px_rgba(18,104,214,0.08)] backdrop-blur md:grid-cols-[1fr_1fr] md:p-8"
                  >
                    {carouselLeft && (
                      <ImageCarousel
                        images={
                          section.images
                        }
                        alt={
                          section.heading ||
                          "Assessment image"
                        }
                      />
                    )}

                    <div>
                      <TextBlock
                        eyebrow={
                          section.eyebrow
                        }
                        heading={
                          section.heading
                        }
                        content={
                          section.content
                        }
                        icon={section.icon}
                        iconImage={
                          section.iconImage
                        }
                        listIcon={
                          section.listIcon
                        }
                      />

                      {section.showFeatures !==
                        false && (
                        <FeatureGrid
                          features={
                            section.features
                          }
                        />
                      )}
                    </div>

                    {!carouselLeft && (
                      <ImageCarousel
                        images={
                          section.images
                        }
                        alt={
                          section.heading ||
                          "Assessment image"
                        }
                      />
                    )}
                  </motion.div>
                );
              }

              if (
                section.layout ===
                "pointsCard"
              ) {
                return (
                  <motion.div
                    key={`points-section-${index}`}
                    initial={{
                      opacity: 0,
                      y: 28,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      margin: "-80px",
                    }}
                    transition={{
                      duration: 0.7,
                      ease,
                    }}
                  >
                    <PointsCard
                      section={section}
                    />
                  </motion.div>
                );
              }

              return (
                <motion.div
                  key={`content-section-${index}`}
                  initial={{
                    opacity: 0,
                    y: 28,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    margin: "-80px",
                  }}
                  transition={{
                    duration: 0.7,
                    ease,
                  }}
                  className="rounded-[30px] border border-white bg-gradient-to-br from-white via-[#f8fbff] to-[#effff8] p-6 shadow-[0_18px_60px_rgba(18,104,214,0.08)] backdrop-blur md:p-8"
                >
                  <TextBlock
                    eyebrow={
                      section.eyebrow
                    }
                    heading={
                      section.heading
                    }
                    content={
                      section.content
                    }
                    iconCard
                    icon={section.icon}
                    iconImage={
                      section.iconImage
                    }
                    listIcon={
                      section.listIcon
                    }
                  />
                </motion.div>
              );
            },
          )}
        </div>

        {showCTA && cta && (
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              margin: "-60px",
            }}
            transition={{
              duration: 0.7,
              ease,
            }}
            className="mt-10 overflow-hidden rounded-[30px] bg-[linear-gradient(180deg,#286cba_0%,#3b55a5_55%,#524095_100%)] p-6 text-white shadow-[0_24px_70px_rgba(18,104,214,0.22)] md:p-8"
          >
            <div className="grid items-center gap-6 md:grid-cols-[88px_1fr]">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/15 backdrop-blur">
                <CTAIcon
                  icon={cta.icon}
                  iconImage={
                    cta.iconImage
                  }
                />
              </div>

              <div>
                <h3 className="text-[23px] font-extrabold md:text-[30px]">
                  {cta.title}
                </h3>

                <p className="mt-2 max-w-2xl text-[14px] font-medium leading-7 text-white/90 md:text-[15px]">
                  {cta.description}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}