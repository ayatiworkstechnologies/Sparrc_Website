"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import InnerBanner from "@/components/InnerBanner";
import {
  Activity,
  Brain,
  ChevronLeft,
  ChevronRight,
  Dumbbell,
  Footprints,
  HeartPulse,
  ShieldCheck,
  Sparkles,
  Bone,
  PersonStanding,
} from "lucide-react";

const assessmentMenu = [
  {
    title: "Bio Mechanical Assessment",
    href: "/departments/assessments/bio-mechanical-assessment",
  },
  {
    title: "Musculoskeletal Assessment",
    href: "/departments/assessments/musculoskeletal-assessment",
  },
  {
    title: "Cardio Pulmonary Exercise Testing",
    href: "/departments/assessments/cardio-pulmonary-exercise-testing",
  },
  {
    title: "Running Gait Assessment",
    href: "/departments/assessments/running-gait-assessment",
  },
  {
    title: "Other Assessments",
    href: "/departments/assessments/other-assessments",
  },
];

const topCards = [
  {
    title: "Sport Specific Fitness Assessment",
    icon: Dumbbell,
    type: "gradient",
    content:
      "Fitness assessment is essential for all athletes which helps your Fitness trainer assess specific aspects like muscular strength, muscular endurance, Cardiovascular endurance, balance, coordination, speed and agility which aids in developing fitness program personalized to the sports’s requirements. The results identify strengths and weaknesses, reduce injury risk and help the athlete return to field asap.",
  },
  {
    title: "Health related fitness assessment",
    icon: HeartPulse,
    type: "gradient",
    content:
      "Health related fitness assessment helps our trainers in understanding your physical fitness level and tailor make a fitness program just for you! It is indispensible especially if you have been suffering from a previous medical condition or would love to start off with your fitness. The series of tests assess different aspects like muscular strength, Muscular endurance, balance, coordination and current medical condition which are followed up and reassessed periodically.",
  },
  {
    title: "Neurological Assessment",
    icon: Brain,
    type: "imageRight",
    content:
      "It is a physical examination which gives us information regarding the neurological status of the client and helps us determine any impairments. Different factors assessed include medical history, higher mental function, sensory system, motor responses, reflexes, coordination and gait.",
    image: "/images/other-assessments-1.png",
  },
];

const middleCards = [
  {
    title: "Gait assement",
    icon: Footprints,
    type: "gradient",
    content:
      "is the assessment of the walking pattern and helps identify posture and movement related malignments and deviation from normal pattern which helps person walk efficiently and reduce risk of injury.",
  },
  {
    title: "Pediatric assement",
    icon: Sparkles,
    type: "gradient",
    content:
      "Physical assessment for a child is done to understand any impairments or deviations and formulate an exercise protocol to aid their normal milestone development and functioning.",
  },
  {
    title: "Functional assement",
    icon: Activity,
    type: "normal",
    content:
      "It is the assessment for understanding the ability to carry out daily routines ,identify incorrect movement patterns, underlying impairments/malignments, activity restrictions, and societal participation for the purpose of exercise intervention planning.",
  },
];

const bottomCards = [
  {
    title: "Spine and Postural Assessment:",
    icon: PersonStanding,
    type: "carouselSlide",
    content:
      "Assessment of posture & spine forms the very basis of physiotherapy since repetitive loading of body caused by ADLs, poor ergonomics and sports activities leads to certain postural alterations, which can ultimately cause pain, musculoskeletal imbalances and injuries.These can easily be identified, treated and followed up with the help of assessment.",
    images: [
      "/images/other-assessments-2.png",
      "/images/other-assessments-3.png",
      "/images/other-assessments-4.png",
    ],
  },
  {
    title: "Shoulder/Knee/Pelvic Assessment",
    icon: Bone,
    type: "gradient",
    content:
      "Regional assessments of the most commonly injured joints are essential to completely remove pain and stiffness, improve strength, endurance and functional capacity, and rehabilitate back from injuries.",
  },
  {
    title: "Ankle &Foot Assessment",
    icon: Footprints,
    type: "gradient",
    content:
      "Ankle & foot form the most mobile weight bearing joint and hence the one most easily injured! Therefore our assessment is not focused simply upon the posture and flexibility of foot but includes the pelvis, legs and knees, assessing the relationship between them to tackle & prevent injuries.assessments of the most commonly injured joints are essential to completely remove pain and stiffness, improve strength, endurance and functional capacity, and rehabilitate back from injuries.",
  },
];

function SpineCarousel({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  const [active, setActive] = useState(0);

  const prevSlide = () => {
    setActive((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActive((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative">
      <div className="absolute -inset-3 rounded-[32px] bg-gradient-to-br from-[#1268d6]/15 to-[#19d3a2]/15 blur-xl" />

      <div className="relative overflow-hidden rounded-[28px] bg-white p-2 shadow-[0_18px_55px_rgba(18,104,214,0.12)]">
        <img
          src={images[active]}
          alt={title}
          className="h-[280px] w-full rounded-[22px] object-cover transition duration-700 md:h-[390px]"
        />

        <button
          type="button"
          onClick={prevSlide}
          className="absolute left-5 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#1268d6] shadow-lg transition hover:bg-[#1268d6] hover:text-white"
          aria-label="Previous image"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          type="button"
          onClick={nextSlide}
          className="absolute right-5 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#1268d6] shadow-lg transition hover:bg-[#1268d6] hover:text-white"
          aria-label="Next image"
        >
          <ChevronRight size={20} />
        </button>

        <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2 rounded-full bg-white/80 px-3 py-2 backdrop-blur">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActive(index)}
              className={`h-2 rounded-full transition-all ${
                active === index ? "w-7 bg-[#1268d6]" : "w-2 bg-[#b9c8dc]"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function TextCard({ card }: { card: any }) {
  const Icon = card.icon;

  return (
    <div
      className={`group relative h-full overflow-hidden rounded-[28px] border border-white p-6 shadow-[0_18px_55px_rgba(18,104,214,0.09)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(18,104,214,0.16)] ${
        card.type === "normal"
          ? "bg-white/95"
          : "bg-gradient-to-br from-white via-[#f7fbff] to-[#eafff5]"
      }`}
    >
      <div className="pointer-events-none absolute right-[-60px] top-[-60px] h-40 w-40 rounded-full bg-[#1268d6]/10 blur-2xl transition group-hover:bg-[#19d3a2]/15" />

      <div className="relative">
        <div
          className={`mb-5 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-white shadow-[0_14px_35px_rgba(18,104,214,0.22)] ${
            card.type === "normal"
              ? "bg-[#1268d6]"
              : "bg-gradient-to-br from-[#1268d6] to-[#19d3a2]"
          }`}
        >
          <Icon size={28} strokeWidth={2.2} />
        </div>

        <h2 className="mb-4 text-[23px] font-extrabold leading-tight text-[#1268d6] md:text-[26px]">
          {card.title}
        </h2>

        <p className="text-[14px] font-medium leading-[1.9] text-[#172033] md:text-[15px]">
          {card.content}
        </p>
      </div>
    </div>
  );
}

export default function OtherAssessmentsPage() {
  return (
    <>
      <InnerBanner
        title="Other Assessments"
        bgImage="/images/page-banner-bg.png"
      />

      <section className="relative overflow-hidden bg-[#f7fbff] px-4 py-10 sm:px-6 md:py-14">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#1268d6_1px,transparent_1px)] [background-size:26px_26px] opacity-[0.08]" />
        <div className="pointer-events-none absolute right-[-130px] top-[-100px] h-[420px] w-[420px] rounded-full bg-[#1268d6]/10 blur-3xl" />
        {/* <div className="pointer-events-none absolute left-[-130px] bottom-20 h-[360px] w-[360px] rounded-full bg-[#19d3a2]/10 blur-3xl" /> */}

        <div className="relative mx-auto max-w-6xl">
          <div className="mb-8 overflow-x-auto pb-2">
            <div className="flex w-max gap-3 rounded-full border border-white bg-white/85 p-2 shadow-[0_16px_45px_rgba(18,104,214,0.08)] backdrop-blur">
              {assessmentMenu.map((item) => {
                const active =
                  item.href === "/departments/assessments/other-assessments";

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

          <div className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#eafff5] px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#12b886]">
              <ShieldCheck size={15} />
              SPARRC Assessments
            </div>

            <h1 className="max-w-4xl text-[31px] font-extrabold leading-[1.08] text-[#1268d6] md:text-[42px]">
              Specialised assessments for fitness, posture, movement and injury
              prevention.
            </h1>

            <div className="mt-5 flex items-center gap-3">
              <span className="h-[4px] w-16 rounded-full bg-[#1268d6]" />
              <span className="h-[7px] w-7 rounded-full bg-[#19d3a2]" />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {topCards.map((card) => {
              const Icon = card.icon;

              if (card.type === "imageRight") {
                return (
                  <div
                    key={card.title}
                    className="group relative overflow-hidden rounded-[30px] border border-white bg-white/90 p-5 shadow-[0_18px_55px_rgba(18,104,214,0.09)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(18,104,214,0.16)] md:col-span-2 md:p-6"
                  >
                    <div className="relative grid items-center gap-6 md:grid-cols-[1fr_0.95fr]">
                      <div>
                        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[linear-gradient(180deg,#286cba_0%,#3b55a5_55%,#524095_100%)] text-white shadow-[0_14px_35px_rgba(18,104,214,0.22)]">
                          <Icon size={28} strokeWidth={2.2} />
                        </div>

                        <h2 className="mb-4 text-[23px] font-extrabold leading-tight text-[#1268d6] md:text-[23px]">
                          {card.title}
                        </h2>

                        <p className="text-[14px] font-medium leading-[1.9] text-[#172033] md:text-[15px]">
                          {card.content}
                        </p>
                      </div>

                      <div className="relative">
                        <div className="absolute -inset-3 rounded-[30px] bg-[linear-gradient(180deg,#286cba_0%,#3b55a5_55%,#524095_100%)]/15 blur-xl" />
                        <div className="relative overflow-hidden rounded-[26px] bg-white p-2 shadow-[0_16px_45px_rgba(18,104,214,0.1)]">
                          <img
                            src={card.image}
                            alt={card.title}
                            className="h-[280px] w-full rounded-[20px] object-cover transition duration-500 group-hover:scale-[1.03] md:h-[390px]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return <TextCard key={card.title} card={card} />;
            })}
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {middleCards.map((card) => (
              <TextCard key={card.title} card={card} />
            ))}
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {bottomCards.map((card) => {
              const Icon = card.icon;

              if (card.type === "carouselSlide") {
                return (
                  <div
                    key={card.title}
                    className="group relative overflow-hidden rounded-[30px] border border-white bg-white/90 p-5 shadow-[0_18px_55px_rgba(18,104,214,0.09)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(18,104,214,0.16)] md:col-span-2 md:p-6"
                  >
                    <div className="relative grid items-center gap-6 md:grid-cols-[0.95fr_1fr]">
                      <SpineCarousel
                        images={card.images || []}
                        title={card.title}
                      />

                      <div>
                        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[linear-gradient(180deg,#286cba_0%,#3b55a5_55%,#524095_100%)] text-white shadow-[0_14px_35px_rgba(18,104,214,0.22)]">
                          <Icon size={28} strokeWidth={2.2} />
                        </div>

                        <h2 className="mb-4 text-[23px] font-extrabold leading-tight text-[#1268d6] md:text-[30px]">
                          {card.title}
                        </h2>

                        <p className="text-[14px] font-medium leading-[1.9] text-[#172033] md:text-[15px]">
                          {card.content}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              }

              return <TextCard key={card.title} card={card} />;
            })}
          </div>

          <div className="mt-10 overflow-hidden rounded-[30px] bg-[linear-gradient(180deg,#286cba_0%,#3b55a5_55%,#524095_100%)] p-6 text-white shadow-[0_24px_70px_rgba(18,104,214,0.22)] md:p-8">
            <div className="grid items-center gap-6 md:grid-cols-[88px_1fr]">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/15 backdrop-blur">
                <ShieldCheck size={38} />
              </div>

              <div>
                <h3 className="text-[23px] font-extrabold md:text-[30px]">
                  Assess Better. Plan Better. Recover Better.
                </h3>
                <p className="mt-2 max-w-2xl text-[14px] font-medium leading-7 text-white/90 md:text-[15px]">
                  Our specialised assessments help identify impairments,
                  movement deviations, fitness needs and injury risks to create
                  accurate exercise and recovery plans.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}