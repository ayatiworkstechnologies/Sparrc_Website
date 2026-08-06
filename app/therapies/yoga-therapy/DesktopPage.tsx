import Image from "next/image";

import InnerBanner from "@/components/InnerBanner";
import DynamicDepartmentDetail from "@/components/Departments/DynamicDepartmentDetail";

const yogaAspects = [
  {
    title: "Breathing Exercises",
    subtitle: "(Pranayama, Bastrika etc)",
    image: "/images/breathing-exercises.png",
  },
  {
    title: "Physical Postures (Asanas)",
    image: "/images/physical-postures.png",
  },
  {
    title: "Meditation and Relaxation",
    image: "/images/meditation-relaxation.png",
  },
  {
    title: "Guided Imagery to bring healing and calmness",
    image: "/images/guided-imagery.png",
  },
];

export default function YogaTherapyPage() {
  return (
    <main className="overflow-x-clip bg-[#f7fbff]">
      <InnerBanner
        title="Yoga Therapy"
        bgImage="/images/page-banner-bg.png"
      />

      <DynamicDepartmentDetail
        title="Yoga Therapy"
        showCTA={false}
        sections={[
          {
            layout: "content",
            content:
              "Yoga therapy is the application of yoga postures and breathing techniques in alleviating physical and mental difficulties and promoting self-care. While Yoga practices are now fairly popular and widely practices, at SPARRC, we specialize in certain yoga practices to treat specific conditions and also to promote general wellbeing.",
          },
          {
            layout: "imageRight",
            heading:
              "How can Yoga Therapy help in treating specific conditions?",
            image: "/images/yoga-therapy.png",
            imageType: "large",
            content:
              "What was espoused by India's ancient seers, is now being verified by science and medical practitioners – Yoga is a complete system to unify the mind and body and bring alignment in being. Yoga has been effectively used to treat several physical conditions like pain, heart conditions, asthma, hypertension, multiple sclerosis, PTSD, Autism and even side-effects of Chemotherapy. Yoga aims to bring awareness to the body and promotes emotional wellness.",
          },
          {
            layout: "content",
            content:
              "Yoga Therapy prescribes specific asanas to treat specific conditions and also educates the patients on what asanas they should not do, given their current state of health. Yoga therapy practiced in conjunction with can physical therapy and rehabilitative therapy has proven very effective for our patients. At SPARRC, yoga therapy sessions are typically conducted in one-on-one or small group settings. Yoga therapy sessions will incorporate all of these following aspects of Yogashastra:",
          },
        ]}
      />

      {/* Yoga therapy aspects */}
      <section className="relative overflow-hidden bg-[#f7fbff] px-4 pb-14 sm:px-6 md:pb-20">
        {/* Background decoration */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(18,104,214,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(18,104,214,0.035)_1px,transparent_1px)] [background-size:64px_64px]" />

        <div className="relative mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {yogaAspects.map((aspect) => (
              <article
                key={aspect.title}
                className="group flex min-h-[330px] flex-col items-center justify-center overflow-hidden rounded-[24px] border border-[#e5eaf2] bg-white px-5 py-7 text-center shadow-[0_14px_40px_rgba(28,64,117,0.07)] transition-all duration-300 hover:-translate-y-2 hover:border-[#1268d6]/25 hover:shadow-[0_22px_50px_rgba(28,64,117,0.14)]"
              >
                {/* Large image */}
                <div className="relative flex h-[205px] w-full max-w-[230px] items-center justify-center overflow-hidden sm:h-[215px] lg:h-[220px]">
                  <Image
                    src={aspect.image}
                    alt={aspect.title}
                    fill
                    sizes="(max-width: 640px) 230px, (max-width: 1024px) 220px, 230px"
                    className="scale-[1.28] object-contain transition-transform duration-500 group-hover:scale-[1.4]"
                  />
                </div>

                <h3 className="mt-5 text-[17px] font-extrabold leading-[1.35] text-[#101828] transition-colors duration-300 group-hover:text-[#1268d6]">
                  {aspect.title}
                </h3>

                {aspect.subtitle && (
                  <p className="mt-1 text-[14px] font-semibold leading-5 text-[#344054]">
                    {aspect.subtitle}
                  </p>
                )}

                <span className="mt-5 h-1 w-10 rounded-full bg-gradient-to-r from-[#1268d6] to-[#19d3a2] transition-all duration-300 group-hover:w-16" />
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}