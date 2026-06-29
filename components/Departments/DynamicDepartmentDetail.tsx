"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
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

type IconName =
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
  content?: string | string[];
  image?: string;
  images?: string[];
  imageType?: "large" | "normal";
  layout?:
    | "content"
    | "gradientCard"
    | "imageLeft"
    | "imageRight"
    | "carouselLeft"
    | "carouselRight";
  showFeatures?: boolean;
  icon?: IconName;
  iconImage?: string;
  listIcon?: string;
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

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const defaultFeatures: FeatureItem[] = [
  { icon: "shield", title: "Personalised Assessment" },
  { icon: "chart", title: "Evidence Based Approach" },
  { icon: "target", title: "Identify Root Cause" },
  { icon: "calendar", title: "Follow Up & Progression" },
];

function DynamicIcon({
  name = "activity",
  size = 20,
}: {
  name?: IconName;
  size?: number;
}) {
  if (!name) return null;

  const icons: Record<Exclude<IconName, "">, LucideIcon> = {
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

  const Icon = icons[name];

  return Icon ? <Icon size={size} strokeWidth={2} /> : null;
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
              alt={eyebrow || "Section icon"}
              className="h-7 w-7 object-contain"
            />
          ) : (
            <DynamicIcon name={icon} size={28} />
          )}
        </div>
      )}

      {eyebrow && (
        <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#eafff5] px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#12b886]">
          {hasIcon &&
            (iconImage ? (
              <img src={iconImage} alt="" className="h-4 w-4 object-contain" />
            ) : (
              <DynamicIcon name={icon} size={14} />
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
              <div key={index} className="flex items-start gap-3">
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
                key={index}
                className="text-[14px] font-medium leading-[1.9] text-[#172033] md:text-[15px]"
              >
                {item}
              </p>
            )
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
            large ? "h-[260px] md:h-[380px]" : "h-[240px] md:h-[320px]"
          }`}
        />
      </div>
    </div>
  );
}

function ImageCarousel({ images, alt }: { images: string[]; alt: string }) {
  const [active, setActive] = useState(0);

  const prevSlide = () => {
    setActive((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActive((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setActive((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3200);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative">
      <div className="absolute -inset-3 rounded-[34px] bg-gradient-to-br from-[#1268d6]/15 via-white to-[#19d3a2]/15 blur-xl" />

      <div className="relative overflow-hidden rounded-[28px] border border-white bg-white p-2 shadow-[0_20px_70px_rgba(18,104,214,0.13)]">
        <AnimatePresence mode="wait">
          <motion.img
            key={images[active]}
            src={images[active]}
            alt={alt}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.45, ease }}
            className="h-[250px] w-full rounded-[22px] object-cover md:h-[320px]"
          />
        </AnimatePresence>

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous image"
              className="absolute left-4 top-1/2 flex h-10 w-10 cursor-pointer -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-[#1268d6] shadow-lg transition hover:bg-[#1268d6] hover:text-white"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next image"
              className="absolute right-4 top-1/2 flex h-10 w-10 cursor-pointer -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-[#1268d6] shadow-lg transition hover:bg-[#1268d6] hover:text-white"
            >
              <ChevronRight size={20} />
            </button>

            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 rounded-full bg-white/75 px-3 py-2 backdrop-blur">
              {images.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Go to image ${index + 1}`}
                  onClick={() => setActive(index)}
                  className={`h-2 rounded-full transition-all ${
                    active === index
                      ? "w-7 bg-[#1268d6]"
                      : "w-2 bg-[#b9c8dc]"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function FeatureGrid({ features = defaultFeatures }: { features?: FeatureItem[] }) {
  return (
    <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
      {features.map((item) => (
        <div
          key={item.title}
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
              <DynamicIcon name={item.icon || "activity"} size={19} />
            )}
          </div>

          <p className="text-[11px] font-extrabold leading-snug text-[#172033]">
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
}

function CTAIcon({ icon, iconImage }: { icon?: IconName; iconImage?: string }) {
  if (iconImage) {
    return (
      <img
        src={iconImage}
        alt="CTA icon"
        className="h-9 w-9 object-contain brightness-0 invert"
      />
    );
  }

  return <DynamicIcon name={icon || "sparkles"} size={36} />;
}

export default function DynamicDepartmentDetail({
  title,
  sections = [],
  sidebarItems = [],
  activeHref,
  showCTA = true,
  cta = {
    icon: "sparkles",
    title: "Move Better. Feel Better. Live Better.",
    description:
      "Our assessment helps you move with confidence and reduces the risk of future injuries.",
  },
}: Props) {
  return (
    <section className="relative overflow-hidden bg-[#f7fbff] px-4 py-10 sm:px-6 md:py-14">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#1268d6_1px,transparent_1px)] [background-size:26px_26px] opacity-[0.08]" />
      <div className="pointer-events-none absolute right-[-140px] top-[-100px] h-[460px] w-[460px] rounded-full bg-[#1268d6]/10 blur-3xl" />
      <div className="pointer-events-none absolute left-[-140px] bottom-20 h-[380px] w-[380px] rounded-full bg-[#19d3a2]/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-0 h-[260px] w-full bg-[linear-gradient(135deg,transparent_40%,rgba(18,104,214,0.08)_40%,transparent_68%)]" />

      <div className="relative mx-auto max-w-6xl">
        {sidebarItems.length > 0 && (
          <div className="mb-8 overflow-x-auto pb-2">
            <div className="flex w-max gap-3 rounded-full border border-white bg-white/85 p-2 shadow-[0_16px_45px_rgba(18,104,214,0.08)] backdrop-blur">
              {sidebarItems.map((item) => {
                const active = item.href === activeHref;

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
              })}
            </div>
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="mb-10"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#eafff5] px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#12b886]">
            <HeartPulse size={15} />
            SPARRC
          </div>

          {title && (
            <h1 className="max-w-4xl text-[31px] font-extrabold leading-[1.08] text-[#1268d6] md:text-[52px]">
              {title}
            </h1>
          )}

          <div className="mt-5 flex items-center gap-3">
            <span className="h-[4px] w-16 rounded-full bg-[#1268d6]" />
            <span className="h-[7px] w-7 rounded-full bg-[#19d3a2]" />
          </div>
        </motion.div>

        <div className="space-y-8">
          {sections.map((section, index) => {
            if (section.image) {
              const imageLeft = section.layout === "imageLeft";

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, ease }}
                  className="grid items-center gap-8 md:grid-cols-[0.92fr_1.08fr]"
                >
                  {imageLeft && (
                    <ImageFrame
                      src={section.image}
                      alt={section.heading || title || "Assessment image"}
                      large={section.imageType === "large"}
                    />
                  )}

                  <div className="rounded-[30px] border border-white bg-white/90 p-6 shadow-[0_18px_60px_rgba(18,104,214,0.08)] backdrop-blur md:p-8">
                    <TextBlock
                      eyebrow={section.eyebrow}
                      heading={section.heading}
                      content={section.content}
                      iconCard
                      icon={section.icon}
                      iconImage={section.iconImage}
                      listIcon={section.listIcon}
                    />
                  </div>

                  {!imageLeft && (
                    <ImageFrame
                      src={section.image}
                      alt={section.heading || title || "Assessment image"}
                      large={section.imageType === "large"}
                    />
                  )}
                </motion.div>
              );
            }

            if (section.images?.length) {
              const carouselLeft = section.layout === "carouselLeft";

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, ease }}
                  className="grid items-center gap-8 rounded-[34px] border border-white bg-white/88 p-5 shadow-[0_22px_80px_rgba(18,104,214,0.08)] backdrop-blur md:grid-cols-[1fr_1fr] md:p-8"
                >
                  {carouselLeft && (
                    <ImageCarousel
                      images={section.images}
                      alt={section.heading || "Assessment image"}
                    />
                  )}

                  <div>
                    <TextBlock
                      eyebrow={section.eyebrow}
                      heading={section.heading}
                      content={section.content}
                      icon={section.icon}
                      iconImage={section.iconImage}
                      listIcon={section.listIcon}
                    />

                    {section.showFeatures !== false && (
                      <FeatureGrid features={section.features} />
                    )}
                  </div>

                  {!carouselLeft && (
                    <ImageCarousel
                      images={section.images}
                      alt={section.heading || "Assessment image"}
                    />
                  )}
                </motion.div>
              );
            }

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease }}
                className="rounded-[30px] border border-white bg-gradient-to-br from-white via-[#f8fbff] to-[#effff8] p-6 shadow-[0_18px_60px_rgba(18,104,214,0.08)] backdrop-blur md:p-8"
              >
                <TextBlock
                  eyebrow={section.eyebrow}
                  heading={section.heading}
                  content={section.content}
                  iconCard
                  icon={section.icon}
                  iconImage={section.iconImage}
                  listIcon={section.listIcon}
                />
              </motion.div>
            );
          })}
        </div>

        {showCTA && cta && (
          <div className="mt-10 overflow-hidden rounded-[30px] bg-gradient-to-r from-[#1268d6] via-[#2176e8] to-[#19d3a2] p-6 text-white shadow-[0_24px_70px_rgba(18,104,214,0.22)] md:p-8">
            <div className="grid items-center gap-6 md:grid-cols-[88px_1fr]">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/15 backdrop-blur">
                <CTAIcon icon={cta.icon} iconImage={cta.iconImage} />
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
          </div>
        )}
      </div>
    </section>
  );
}