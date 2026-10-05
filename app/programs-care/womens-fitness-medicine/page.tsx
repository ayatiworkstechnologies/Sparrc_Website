"use client";

import {
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

import InnerBanner from "@/components/InnerBanner";
import DynamicDepartmentDetail from "@/components/Departments/DynamicDepartmentDetail";

import {
  Activity,
  Baby,
  Bone,
  BriefcaseBusiness,
  Check,
  HeartPulse,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Users,
} from "lucide-react";

/* =========================================================
   SCROLL REVEAL — SAME FILE
========================================================= */

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  distance?: number;
  direction?: "up" | "down" | "left" | "right" | "scale";
};

function Reveal({
  children,
  className = "",
  delay = 0,
  duration = 750,
  distance = 28,
  direction = "up",
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (reducedMotion.matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const getTransform = () => {
    if (visible) {
      return "translate3d(0,0,0) scale(1)";
    }

    switch (direction) {
      case "left":
        return `translate3d(-${distance}px,0,0) scale(1)`;

      case "right":
        return `translate3d(${distance}px,0,0) scale(1)`;

      case "down":
        return `translate3d(0,-${distance}px,0) scale(1)`;

      case "scale":
        return "translate3d(0,16px,0) scale(.975)";

      default:
        return `translate3d(0,${distance}px,0) scale(1)`;
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: getTransform(),
        transition: `
          opacity ${duration}ms cubic-bezier(.22,1,.36,1) ${delay}ms,
          transform ${duration}ms cubic-bezier(.22,1,.36,1) ${delay}ms
        `,
      }}
    >
      {children}
    </div>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function WomensFitnessMedicinePage() {
  const redSItems = [
    "Irregular periods",
    "Stress fractures",
    "Low bone density",
    "Delayed recovery",
    "Hormonal disruption",
    "Long-term metabolic complications",
  ];

  const physicalStrainItems = [
    "Chronic back pain",
    "Early knee degeneration",
    "Tendon injuries",
    "Shoulder strain",
    "Foot pain",
  ];

  const postpartumItems = [
    "Lower back pain",
    "Pelvic instability",
    "Diastasis recti",
    "Wrist pain from lifting infants",
    "Neck and shoulder pain from feeding postures",
  ];

  const performanceItems = [
    "Performance is a national athlete training for a medal.",
    "It is also a mother carrying her toddler.",
    "A nurse on a 12-hour shift.",
    "A teacher standing all day.",
    "A woman climbing four floors with groceries.",
  ];

  return (
    <>
      <InnerBanner
        title="Women's Fitness Medicine"
        bgImage="/images/page-banner-bg.png"
      />

      <DynamicDepartmentDetail
        title="Helping women build strength, confidence and better health."
        showCTA
        cta={{
          icon: "heartPulse",
          title: "Stay Strong. Stay Confident. Stay Healthy.",
          description:
            "Our women's fitness medicine program supports strength, emotional wellness, fitness, nutrition and sustainable health routines for women.",
        }}
        sections={[
          {
            eyebrow: "",
            icon: "heartPulse",
            heading: "Women's Fitness Medicine",
            content:
              "Women's health is perhaps the most important yet most neglected in a family's healthcare. Indian women take their ‘nurturer’ role very seriously and contribute immensely to the welfare of their families but mostly fail to take care of themselves. SPARRC’s Women’s Fitness Medicine focuses on making women understand the significance of their health and equips them with a simple and sustainable fitness routine and nutrition profile.",
            image: "/images/womens-fitness-medicine-1.png",
            imageType: "large",
            layout: "imageRight",
          },
          {
            eyebrow:
              "‘Don’t let anyone tell you are weak because you are a woman’! – Mary Kom",
            icon: "sparkles",
            heading: "",
            content:
              "Weight gain, loss of confidence, depression and anxiety are the various issues that Indian women face owing to their lifestyle and scant importance given to their fitness and health. Women go through many stages of physical, emotional and social upheavals in their lives like menarchy, marriage and moving away from the parental home, pregnancy and child-birth and later menopause. All of these events put enormous pressure on women’s physical and mental health and it is the individual and their family’s duty to recognize the importance of their fitness and health.",
            layout: "gradientCard",
          },
          {
            eyebrow: "",
            icon: "activity",
            heading: "Women’s Fitness Programs",
            content: [
              "SPARRC offers various individual and group fitness programs for women specifically. Move 2 Music is a Dance Therapy program where women participate enthusiastically shedding their inhibitions and gaining fitness and confidence. Yoga, Taichi, Breathing sessions are also ideally suited for women to improve on their stability and focus.",
              "Call +91 965 965 0000 to learn more about the specific fitness programs for women available at SPARRC.",
            ],
            layout: "gradientCard",
            listIcon: "/icons/logo-icon.png",
          },
        ]}
      />

      {/* =========================================================
          NEW ARTICLE — ANIMATED
      ========================================================= */}

      <section className="relative overflow-hidden bg-[#f7fbff] py-8 sm:py-10 lg:py-12">
        {/* BACKGROUND */}

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-150px] top-[10%] h-[350px] w-[350px] rounded-full bg-[#dff2ff]/60 blur-[100px]" />

          <div className="absolute right-[-160px] top-[50%] h-[380px] w-[380px] rounded-full bg-[#dcf7ed]/45 blur-[110px]" />

          <div
            className="absolute inset-0 opacity-[0.28]"
            style={{
              backgroundImage:
                "radial-gradient(#b9d9f5 0.7px, transparent 0.7px)",
              backgroundSize: "18px 18px",
            }}
          />
        </div>

        <div className="relative mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8">

          {/* =====================================================
              HERO
          ===================================================== */}

          <Reveal direction="up" distance={36} duration={850}>
            <div className="group overflow-hidden rounded-[24px] border border-[#dcecf8] bg-white shadow-[0_12px_45px_rgba(34,92,145,0.07)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(34,92,145,0.11)]">
              <div className="grid lg:grid-cols-[0.9fr_1.1fr]">

                <div className="relative overflow-hidden p-6 sm:p-8 lg:p-10">
                  <div className="absolute left-0 top-0 h-full w-[5px] bg-[#1769d2]" />

                  <div className="absolute -right-20 -top-24 h-56 w-56 rounded-full bg-[#edf7ff]" />

                  <div className="relative">
                    <Reveal
                      direction="scale"
                      delay={150}
                      duration={600}
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-[13px] bg-[#eaf5ff] text-[#1769d2]">
                        <HeartPulse className="h-5 w-5" />
                      </div>
                    </Reveal>

                    <Reveal delay={220} distance={15}>
                      <div className="mt-6 flex items-center gap-2">
                        <span className="h-[2px] w-6 bg-[#19a879]" />

                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1769d2] sm:text-[11px]">
                          Women & Sports Medicine
                        </p>
                      </div>
                    </Reveal>

                    <Reveal delay={300} distance={20}>
                      <h2 className="mt-3 max-w-[500px] text-[29px] font-bold leading-[1.1] tracking-[-0.035em] text-[#172033] sm:text-[36px] lg:text-[42px]">
                        Women Are Not a Niche in{" "}
                        <span className="text-[#1769d2]">
                          Sports Medicine
                        </span>
                      </h2>
                    </Reveal>

                    <Reveal delay={380} distance={15}>
                      <p className="mt-5 max-w-[480px] text-[14px] leading-7 text-[#5b6779] sm:text-[15px]">
                        At a sports medicine clinic, the waiting room often
                        tells a story.
                      </p>
                    </Reveal>
                  </div>
                </div>

                <Reveal
                  direction="right"
                  distance={25}
                  delay={180}
                  duration={800}
                  className="h-full"
                >
                  <div className="relative h-full border-t border-[#e4eef7] bg-[#f1f8fe] p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
                    <div className="absolute right-6 top-6 text-[70px] font-serif leading-none text-[#1769d2]/[0.06]">
                      “
                    </div>

                    <p className="relative text-[14px] leading-7 text-[#435166] sm:text-[15px]">
                      A marathon runner recovering from an ACL tear. A
                      domestic worker with chronic shoulder pain after years
                      of lifting water buckets. A Bharatanatyam dancer
                      battling recurrent stress fractures. A new mother with
                      relentless back pain from carrying her child. A nurse
                      dealing with plantar heel pain after years of standing
                      through long shifts. A young corporate employee with
                      neck pain, low vitamin D and early signs of poor bone
                      health.
                    </p>

                    <div className="my-5 h-px bg-[#d8e8f5]" />

                    <p className="text-[17px] font-bold leading-7 text-[#172033]">
                      Different professions. Different lifestyles.{" "}
                      <span className="text-[#1769d2]">
                        Same reality.
                      </span>
                    </p>

                    <p className="mt-2 text-[14px] leading-7 text-[#596679]">
                      Women’s bodies are constantly adapting to physical
                      stress that often goes unseen and untreated.
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>
          </Reveal>

          {/* INTRO */}

          <Reveal delay={80} distance={20}>
            <div className="mx-auto max-w-[1080px] py-6 sm:py-7">
              <p className="text-[14px] leading-7 text-[#566276] sm:text-[15px]">
                Yet sports medicine continues to be framed around male
                athletes, while women are often treated as a niche category.
                In fact, women may be one of the most underrepresented
                majorities in musculoskeletal healthcare.
              </p>

              <div className="mt-3 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#19a879]" />

                <p className="text-[13px] font-bold text-[#1769d2]">
                  And the numbers tell their own story.
                </p>
              </div>
            </div>
          </Reveal>

          {/* =====================================================
              STATISTICS
          ===================================================== */}

          <Reveal duration={850}>
            <div className="overflow-hidden rounded-[24px] border border-[#dceaf5] bg-white shadow-[0_10px_35px_rgba(35,87,135,0.05)]">
              <div className="grid md:grid-cols-3">

                <Reveal
                  delay={100}
                  distance={20}
                  className="h-full"
                >
                  <div className="group/stat relative h-full p-6 transition-colors duration-300 hover:bg-[#f8fcff] sm:p-7">
                    <div className="absolute left-0 top-0 h-[3px] w-0 bg-[#1769d2] transition-all duration-500 group-hover/stat:w-full" />

                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eaf5ff] text-[#1769d2]">
                        <Bone className="h-5 w-5" />
                      </div>

                      <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#9ba9b9]">
                        Bone Health
                      </span>
                    </div>

                    <p className="mt-5 text-[32px] font-bold leading-none tracking-[-0.045em] text-[#1769d2]">
                      6 crore
                    </p>

                    <h3 className="mt-2 text-[16px] font-bold leading-6 text-[#172033]">
                      people with osteoporosis by 2030
                    </h3>

                    <p className="mt-3 text-[12.5px] leading-6 text-[#667286]">
                      This estimate is commonly attributed to the International
                      Osteoporosis Foundation and Indian consensus statements,
                      often cited in collaboration with bodies like the Indian
                      Council of Medical Research and Indian Menopause Society.
                      It’s a projection based on India’s ageing population and
                      existing prevalence trends.
                    </p>
                  </div>
                </Reveal>

                <Reveal
                  delay={220}
                  distance={20}
                  className="h-full"
                >
                  <div className="group/stat relative h-full border-t border-[#e5edf5] p-6 transition-colors duration-300 hover:bg-[#f8fcff] sm:p-7 md:border-l md:border-t-0">
                    <div className="absolute left-0 top-0 h-[3px] w-0 bg-[#1769d2] transition-all duration-500 group-hover/stat:w-full" />

                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eef4ff] text-[#1769d2]">
                        <ShieldCheck className="h-5 w-5" />
                      </div>

                      <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#9ba9b9]">
                        Fracture Risk
                      </span>
                    </div>

                    <p className="mt-5 text-[32px] font-bold leading-none tracking-[-0.045em] text-[#1769d2]">
                      1 in 3
                    </p>

                    <h3 className="mt-2 text-[16px] font-bold leading-6 text-[#172033]">
                      Indian women over 50 at risk of osteoporosis-related
                      fractures
                    </h3>

                    <p className="mt-3 text-[12.5px] leading-6 text-[#667286]">
                      This aligns with global and Indian data cited by the
                      International Osteoporosis Foundation, which states that{" "}
                      <strong className="font-semibold text-[#26354a]">
                        1 in 3 women over 50 worldwide
                      </strong>{" "}
                      will experience osteoporotic fractures. Indian studies
                      and position papers often apply this ratio due to similar
                      or higher risk profiles, especially given lower baseline
                      bone density and nutrition gaps.
                    </p>
                  </div>
                </Reveal>

                <Reveal
                  delay={340}
                  distance={20}
                  className="h-full"
                >
                  <div className="group/stat relative h-full border-t border-[#e5edf5] p-6 transition-colors duration-300 hover:bg-[#f8fcff] sm:p-7 md:border-l md:border-t-0">
                    <div className="absolute left-0 top-0 h-[3px] w-0 bg-[#19a879] transition-all duration-500 group-hover/stat:w-full" />

                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eaf8f3] text-[#19a879]">
                        <Sparkles className="h-5 w-5" />
                      </div>

                      <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#9ba9b9]">
                        Vitamin D
                      </span>
                    </div>

                    <p className="mt-5 text-[32px] font-bold leading-none tracking-[-0.045em] text-[#19a879]">
                      70–90%
                    </p>

                    <h3 className="mt-2 text-[16px] font-bold leading-6 text-[#172033]">
                      of Indians may be vitamin D deficient
                    </h3>

                    <p className="mt-3 text-[12.5px] leading-6 text-[#667286]">
                      This comes from multiple Indian studies and reviews,
                      including research published in journals like the Indian
                      Journal of Endocrinology and Metabolism and data
                      referenced by Indian Council of Medical Research. The
                      range varies by region, but urban populations, especially
                      women, consistently show high deficiency rates.
                    </p>
                  </div>
                </Reveal>
              </div>

              <Reveal delay={150} distance={10}>
                <div className="flex items-start gap-3 border-t border-[#dfeaf4] bg-[#edf7ff] px-5 py-3.5 sm:px-7">
                  <Activity className="mt-0.5 h-4 w-4 shrink-0 text-[#1769d2]" />

                  <p className="text-[13px] font-semibold leading-6 text-[#36536f]">
                    Bone weakness, in many cases, starts much earlier than
                    menopause.
                  </p>
                </div>
              </Reveal>
            </div>
          </Reveal>

          {/* =====================================================
              ATHLETES + RED-S
          ===================================================== */}

          <Reveal duration={850}>
            <div className="mt-5 overflow-hidden rounded-[24px] border border-[#dbeaf6] bg-white shadow-[0_10px_35px_rgba(35,87,135,0.05)]">
              <div className="grid lg:grid-cols-2">
                <Reveal
                  direction="left"
                  distance={25}
                  duration={750}
                  className="h-full"
                >
                  <div className="group h-full p-6 sm:p-8 lg:p-9">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eaf5ff] text-[#1769d2] transition-transform duration-300 group-hover:scale-110">
                        <Activity className="h-5 w-5" />
                      </div>

                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#1769d2]">
                        Younger Women & Athletes
                      </p>
                    </div>

                    <h3 className="mt-5 max-w-[480px] text-[23px] font-bold leading-[1.2] tracking-[-0.025em] text-[#172033] sm:text-[27px]">
                      The risks can look different, but they are equally
                      serious.
                    </h3>

                    <p className="mt-4 text-[13.5px] leading-7 text-[#5c687b] sm:text-[14px]">
                      For younger women, especially athletes, the risks can
                      look different but are equally serious.
                    </p>

                    <p className="mt-3 text-[13.5px] leading-7 text-[#5c687b] sm:text-[14px]">
                      Female athletes are significantly more vulnerable to ACL
                      injuries than men in sports involving sudden pivots and
                      jumps. Global sports medicine research suggests women may
                      face ACL injury risks that are{" "}
                      <strong className="font-bold text-[#1769d2]">
                        2 to 8 times higher
                      </strong>{" "}
                      in sports like football, basketball and badminton due to
                      differences in biomechanics, neuromuscular control and
                      hormonal fluctuations.
                    </p>
                  </div>
                </Reveal>

                <Reveal
                  direction="right"
                  distance={25}
                  delay={100}
                  className="h-full"
                >
                  <div className="h-full border-t border-[#dceaf5] bg-[#f0f8ff] p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-9">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#19a879] shadow-sm">
                        <HeartPulse className="h-5 w-5" />
                      </div>

                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#19a879]">
                        A Quieter Issue
                      </p>
                    </div>

                    <h3 className="mt-5 text-[22px] font-bold leading-[1.2] text-[#172033] sm:text-[25px]">
                      Relative Energy Deficiency in Sport{" "}
                      <span className="text-[#1769d2]">(RED-S)</span>
                    </h3>

                    <p className="mt-3 text-[13.5px] leading-7 text-[#5c687b]">
                      Then there’s a quieter issue clinicians are seeing more
                      often:{" "}
                      <strong className="font-semibold text-[#172033]">
                        Relative Energy Deficiency in Sport (RED-S).
                      </strong>
                    </p>

                    <p className="mt-2 text-[13.5px] leading-7 text-[#5c687b]">
                      This happens when athletes underfuel their bodies while
                      overtraining often driven by aesthetic pressures or
                      misinformation around dieting.
                    </p>

                    <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.14em] text-[#172033]">
                      The fallout can include
                    </p>

                    <div className="mt-3 grid gap-2 sm:grid-cols-2">
                      {redSItems.map((item, index) => (
                        <Reveal
                          key={item}
                          direction="up"
                          distance={10}
                          delay={index * 65}
                          duration={450}
                        >
                          <div className="group/item flex items-center gap-2.5 rounded-lg bg-white px-3 py-2.5 transition-all duration-300 hover:translate-x-1 hover:shadow-sm">
                            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#e9f8f3] text-[#19a879]">
                              <Check className="h-3 w-3" />
                            </span>

                            <span className="text-[12px] font-medium text-[#526074]">
                              {item}
                            </span>
                          </div>
                        </Reveal>
                      ))}
                    </div>
                  </div>
                </Reveal>
              </div>

              <Reveal delay={100} distance={10}>
                <div className="flex items-center gap-3 border-t border-[#dceaf5] bg-white px-6 py-4 sm:px-8">
                  <span className="h-7 w-[3px] rounded-full bg-[#19a879]" />

                  <p className="text-[13px] font-semibold leading-6 text-[#31445b]">
                    Sometimes what appears to be a knee injury starts with
                    inadequate nutrition.
                  </p>
                </div>
              </Reveal>
            </div>
          </Reveal>

          {/* =====================================================
              INVISIBLE PHYSICAL WORK
          ===================================================== */}

          <Reveal duration={850}>
            <div className="mt-5 overflow-hidden rounded-[24px] border border-[#dceaf5]  bg-[#f1f8fe]  shadow-[0_10px_35px_rgba(35,87,135,0.05)]">
              <div className="grid lg:grid-cols-[1.05fr_0.95fr]">

                <Reveal direction="left" distance={22} className="h-full">
                  <div className="h-full p-6 sm:p-8 lg:p-9">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl Invisible Physical Work] text-[#1769d2]">
                        <BriefcaseBusiness className="h-5 w-5" />
                      </div>

                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#1769d2]">
                        Invisible Physical Work
                      </p>
                    </div>

                    <h3 className="mt-5 max-w-[550px] text-[23px] font-bold leading-[1.2] tracking-[-0.025em] text-[#172033] sm:text-[27px]">
                      Not all women experiencing physical strain are athletes
                      in the traditional sense.
                    </h3>

                    <p className="mt-4 text-[13.5px] leading-7 text-[#5c687b]">
                      But not all women experiencing physical strain are
                      athletes in the traditional sense.
                    </p>

                    <p className="mt-3 text-[13.5px] leading-7 text-[#5c687b]">
                      Think about women bent over agricultural fields for
                      hours. Nurses lifting patients. Teachers stand all day.
                      Factory workers performing repetitive tasks. Domestic
                      workers carrying loads. Homemakers are doing years of
                      unpaid labour without ergonomic support.
                    </p>
                  </div>
                </Reveal>

                <Reveal
                  direction="right"
                  distance={22}
                  delay={100}
                  className="h-full"
                >
                  <div className="relative h-full overflow-hidden border-t border-[#dceaf5] bg-[#fff] p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-9">
                    <div className="absolute -bottom-20 -right-20 h-52 w-52 rounded-full bg-[#dff3ea]/60" />

                    <div className="relative">
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#1769d2]">
                        India’s Time Use Survey
                      </p>

                      <div className="mt-4 flex items-end gap-2">
                        <span className="text-[44px] font-bold leading-none tracking-[-0.05em] text-[#1769d2]">
                          5
                        </span>

                        <span className="pb-1 text-[17px] font-bold text-[#172033]">
                          hours / day
                        </span>
                      </div>

                      <p className="mt-3 text-[13px] leading-6 text-[#596679]">
                        According to India’s{" "}
                        <strong className="font-semibold text-[#172033]">
                          Time Use Survey
                        </strong>
                        , women spend nearly{" "}
                        <strong className="font-semibold text-[#172033]">
                          5 hours a day on unpaid domestic work
                        </strong>
                        , compared to just over an hour for men. That physical
                        labour rarely gets recognised as musculoskeletal stress
                        but the body keeps count.
                      </p>

                      <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.14em] text-[#19a879]">
                        The result?
                      </p>

                      <div className="mt-3 flex flex-wrap gap-2">
                        {physicalStrainItems.map((item, index) => (
                          <Reveal
                            key={item}
                            direction="scale"
                            delay={index * 60}
                            duration={450}
                          >
                            <span className="block rounded-full border border-[#dbe8f3] bg-white px-3 py-1.5 text-[11px] font-semibold text-[#536075] transition-all duration-300 hover:border-[#1769d2]/30 hover:text-[#1769d2]">
                              {item}
                            </span>
                          </Reveal>
                        ))}
                      </div>

                      <p className="mt-4 text-[13px] font-semibold leading-6 text-[#29394f]">
                        And many women continue working through it because
                        stopping simply isn’t an option.
                      </p>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </Reveal>

          {/* =====================================================
              PREGNANCY
          ===================================================== */}

          <Reveal direction="scale" duration={850}>
            <div className="mt-5 overflow-hidden rounded-[24px] border border-[#dceaf5] bg-white shadow-[0_10px_35px_rgba(35,87,135,0.05)]">
              <div className="grid lg:grid-cols-[0.95fr_1.05fr]">

                <div className="p-6 sm:p-8 lg:p-9">
                  <Reveal direction="scale" duration={500}>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eaf5ff] text-[#1769d2]">
                      <Baby className="h-5 w-5" />
                    </div>
                  </Reveal>

                  <Reveal delay={100}>
                    <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[#1769d2]">
                      Pregnancy & Postpartum
                    </p>

                    <h3 className="mt-2 text-[23px] font-bold leading-[1.2] tracking-[-0.025em] text-[#172033] sm:text-[27px]">
                      Another major blind spot.
                    </h3>

                    <p className="mt-4 text-[13.5px] leading-7 text-[#5c687b]">
                      Then comes another major blind spot: pregnancy and
                      postpartum recovery.
                    </p>

                    <p className="mt-3 text-[13.5px] leading-7 text-[#5c687b]">
                      Pregnancy shifts posture, weakens core muscles and
                      increases stress on joints and ligaments. Yet postpartum
                      rehabilitation remains largely absent from mainstream
                      conversations in India.
                    </p>
                  </Reveal>
                </div>

                <div className="border-t border-[#dceaf5] bg-[#edf7ff] p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-9">
                  <Reveal>
                    <p className="text-[15px] font-bold text-[#172033]">
                      Many women silently navigate:
                    </p>
                  </Reveal>

                  <div className="mt-4 grid gap-x-6 gap-y-2 sm:grid-cols-2">
                    {postpartumItems.map((item, index) => (
                      <Reveal
                        key={item}
                        distance={10}
                        delay={index * 65}
                        duration={450}
                      >
                        <div className="flex items-center gap-2.5 border-b border-[#dbe8f3] py-2.5">
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#19a879] text-white">
                            <Check className="h-3 w-3" />
                          </span>

                          <span className="text-[12.5px] font-medium text-[#536075]">
                            {item}
                          </span>
                        </div>
                      </Reveal>
                    ))}
                  </div>

                  <Reveal delay={300}>
                    <p className="mt-4 border-l-2 border-[#19a879] pl-4 text-[13px] italic leading-6 text-[#536075]">
                      …and are told it’s just “part of motherhood.”
                    </p>
                  </Reveal>
                </div>
              </div>
            </div>
          </Reveal>

          {/* =====================================================
              PAIN
          ===================================================== */}

          <Reveal duration={800}>
            <div className="mt-5 overflow-hidden rounded-[24px] border border-[#dceaf5] bg-white px-6 py-6 shadow-[0_10px_35px_rgba(35,87,135,0.05)] sm:px-8 lg:px-9">
              <div className="grid items-center gap-6 lg:grid-cols-[0.75fr_1.25fr]">

                <Reveal direction="left" distance={20}>
                  <div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eaf5ff] text-[#1769d2]">
                        <Stethoscope className="h-5 w-5" />
                      </div>

                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#1769d2]">
                        The Bigger Issue
                      </p>
                    </div>

                    <h3 className="mt-4 text-[22px] font-bold tracking-[-0.02em] text-[#172033] sm:text-[25px]">
                      Women’s pain is still normalised.
                    </h3>
                  </div>
                </Reveal>

                <div>
                  <div className="grid gap-2.5 sm:grid-cols-3">
                    {[
                      "“You’re overreacting.”",
                      "“It happens with age.”",
                      "“Rest when you can.”",
                    ].map((quote, index) => (
                      <Reveal
                        key={quote}
                        delay={index * 100}
                        distance={15}
                        duration={500}
                      >
                        <div className="rounded-xl border border-[#e0ebf4] bg-[#f7fbfe] px-3 py-3.5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#1769d2]/25 hover:bg-white hover:shadow-md">
                          <p className="text-[12.5px] font-semibold italic text-[#4a576b]">
                            {quote}
                          </p>
                        </div>
                      </Reveal>
                    ))}
                  </div>

                  <Reveal delay={250}>
                    <p className="mt-4 text-[13px] leading-6 text-[#596679]">
                      So they delay care.{" "}
                      <strong className="font-semibold text-[#172033]">
                        And that delay turns manageable injuries into chronic
                        conditions.
                      </strong>
                    </p>
                  </Reveal>
                </div>
              </div>
            </div>
          </Reveal>

          {/* =====================================================
              PERFORMANCE
          ===================================================== */}

          <Reveal direction="up" distance={32} duration={850}>
            <div className="group mt-5 overflow-hidden rounded-[24px] border border-[#d8e9f5] bg-white shadow-[0_12px_40px_rgba(35,87,135,0.06)]">
              <div className="grid lg:grid-cols-[0.8fr_1.2fr]">

                <Reveal
                  direction="left"
                  distance={20}
                  className="h-full"
                >
                  <div className="relative h-full overflow-hidden bg-[#1769d2] p-6 text-white sm:p-8 lg:p-9">
                    <div className="absolute -bottom-20 -right-20 h-56 w-56 rounded-full border-[40px] border-white/[0.06]" />

                    <div className="relative">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15">
                        <HeartPulse className="h-5 w-5" />
                      </div>

                      <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.18em] text-blue-100">
                        The Future of Sports Medicine
                      </p>

                      <h3 className="mt-3 text-[25px] font-bold leading-[1.15] tracking-[-0.03em] sm:text-[30px]">
                        Performance has a bigger definition.
                      </h3>

                      <p className="mt-4 text-[13.5px] leading-7 text-blue-50">
                        The future of sports medicine has to expand its
                        definition of performance.
                      </p>
                    </div>
                  </div>
                </Reveal>

                <div className="p-6 sm:p-8 lg:p-9">
                  <div className="grid gap-2 sm:grid-cols-2">
                    {performanceItems.map((item, index) => (
                      <Reveal
                        key={item}
                        delay={index * 70}
                        distance={12}
                        duration={500}
                        className={
                          index === 0 ? "sm:col-span-2" : ""
                        }
                      >
                        <div
                          className={`group/item flex items-start gap-3 rounded-xl px-3 py-3 transition-all duration-300 hover:bg-[#f2f8fd] ${
                            index === 0 ? "bg-[#f2f8fd]" : ""
                          }`}
                        >
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#e9f8f3] text-[#19a879] transition-transform duration-300 group-hover/item:scale-110">
                            <Check className="h-3.5 w-3.5" />
                          </span>

                          <p className="text-[12.5px] font-medium leading-6 text-[#536075]">
                            {item}
                          </p>
                        </div>
                      </Reveal>
                    ))}
                  </div>

                  <Reveal delay={200}>
                    <div className="my-4 h-px bg-[#e1ebf4]" />

                    <p className="text-[13px] leading-6 text-[#596679]">
                      Better care means earlier screening, stronger nutrition
                      awareness, postpartum rehabilitation, strength training
                      and recognising invisible labour as real physical work.
                    </p>
                  </Reveal>

                  <Reveal delay={300}>
                    <p className="mt-4 text-[17px] font-bold text-[#172033]">
                      Because women are not fragile.
                    </p>

                    <p className="mt-1 text-[13px] leading-6 text-[#596679]">
                      They are often carrying far more than anyone
                      acknowledges.
                    </p>
                  </Reveal>
                </div>
              </div>
            </div>
          </Reveal>

          {/* =====================================================
              ENDING
          ===================================================== */}

          <Reveal
            direction="scale"
            duration={900}
            distance={20}
          >
            <div className="px-3 pb-1 pt-7 text-center sm:pt-8">
              <div className="mx-auto flex w-fit items-center gap-2">
                <span className="h-[2px] w-7 bg-[#1769d2]" />

                <span className="h-2 w-2 rounded-full bg-[#19a879]" />

                <span className="h-[2px] w-7 bg-[#1769d2]" />
              </div>

              <p className="mx-auto mt-4 max-w-[820px] text-[20px] font-bold leading-[1.4] tracking-[-0.02em] text-[#172033] sm:text-[24px] lg:text-[27px]">
                And sports medicine needs to stop treating them like an{" "}
                <span className="text-[#1769d2]">
                  afterthought.
                </span>
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}