import Image from "next/image";

import InnerBanner from "@/components/InnerBanner";
import DynamicDepartmentDetail from "@/components/Departments/DynamicDepartmentDetail";

const treatableConditions = [
  {
    title: "Diabetes",
    image: "/images/diabetes-1.png",
  },
  {
    title: "Osteoarthritis",
    image: "/images/osteoarthritis-1.png",
  },
  {
    title: "Hypertension",
    image: "/images/hypertension-1.png",
  },
  {
    title: "Migraine",
    image: "/images/migraine-1.png",
  },
];

export default function PrescriptionExercisePage() {
  return (
    <>
      <InnerBanner
        title="Prescription Exercise"
        bgImage="/images/page-banner-bg.png"
      />

      <DynamicDepartmentDetail
        title="Prescription Exercise"
        showCTA={false}
        sections={[
          {
            layout: "content",
            content: [
              "Exercise Prescription refers to a treatment plan that includes Exercise tailor-made for an individual to treat a specific condition. Exercises, an important ingredient of fitness, could also prove detrimental if done wrongly or by the wrong person. Care must be taken to assess the individual's physical and emotional conditions and their daily activities in order to effectively treat their condition. Customization is key.",
              "Exercise on prescription aims to prevent deterioration of conditions, and views exercise as a preventative health measure. It is also easier for patients to follow a prescribed course of exercise than to create a plan for themselves. Motivation to stick to the routine is higher when it has been prescribed.",
            ],
          },
          {
            layout: "imageRight",
            heading: "What is Prescribed?",
            image: "/images/prescription-exercise.png",
            imageType: "large",
            content:
              "Aerobic exercise prescription – the type of exercise, duration of exercise, frequency, pre and post-session stretching etc Resistance exercise prescription – the type of exercise, total session volume, rest period, frequency, and intensity",
          },
        ]}
      />

      {/* Conditions that can be treated */}
      <section className="relative overflow-hidden bg-[#f7fbff] px-4 py-12 sm:px-6 md:py-16">
        {/* Background grid */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(18,104,214,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(18,104,214,0.035)_1px,transparent_1px)] [background-size:62px_62px]" />

        <div className="relative mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-[26px] font-extrabold leading-tight text-[#1268d6] sm:text-[30px] md:text-[36px]">
              Conditions that can be treated
            </h2>

            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-[#1268d6] to-[#19d3a2]" />
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {treatableConditions.map((condition) => (
              <article
                key={condition.title}
                className="group flex min-h-[315px] flex-col items-center justify-center overflow-hidden rounded-[24px] border border-[#e2eaf4] bg-white px-5 py-7 text-center shadow-[0_12px_34px_rgba(18,104,214,0.06)] transition-all duration-300 hover:-translate-y-2 hover:border-[#1268d6]/25 hover:shadow-[0_22px_50px_rgba(18,104,214,0.13)]"
              >
                <h3 className="text-[18px] font-extrabold leading-snug text-[#101828] transition-colors duration-300 group-hover:text-[#1268d6]">
                  {condition.title}
                </h3>

                {/* Increased image area */}
                <div className="relative mt-6 flex h-[190px] w-full max-w-[230px] items-center justify-center overflow-hidden sm:h-[205px] lg:h-[215px]">
                  <Image
                    src={condition.image}
                    alt={condition.title}
                    fill
                    sizes="(max-width: 640px) 220px, (max-width: 1024px) 230px, 240px"
                    className="object-contain scale-[1.45] transition-transform duration-500 group-hover:scale-[1.55]"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}