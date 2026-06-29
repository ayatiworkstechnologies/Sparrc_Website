import DynamicDepartmentCards from "@/components/Departments/DynamicDepartmentCards";
import InnerBanner from "@/components/InnerBanner";

export default function LifestyleDiseasesManagementsPage() {
  return (
    <>
      <InnerBanner
        title="Lifestyle Diseases Managements"
        bgImage="/images/page-banner-bg.png"
      />

      <section className="relative overflow-hidden  px-4 py-10 sm:px-6 md:py-14">
        {/* <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#1268d6_1px,transparent_1px)] [background-size:26px_26px] opacity-[0.08]" />
        <div className="pointer-events-none absolute right-[-130px] top-[-100px] h-[420px] w-[420px] rounded-full bg-[#1268d6]/10 blur-3xl" />
        <div className="pointer-events-none absolute left-[-130px] bottom-20 h-[360px] w-[360px] rounded-full bg-[#19d3a2]/10 blur-3xl" /> */}

        <div className="relative mx-auto grid max-w-7xl items-center gap-8 rounded-[32px] border border-white bg-white/90 p-5  lg:grid-cols-[0.9fr_1.1fr] md:p-8">
          <div>
            <div className="mb-4 inline-flex rounded-full bg-[#eafff5] px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#12b886]">
              Lifestyle Wellness
            </div>

            <h2 className="mb-5 text-[28px] font-extrabold leading-tight text-[#1268d6] md:text-[42px]">
              Lifestyle Diseases Managements
            </h2>

            <p className="text-[14px] font-medium leading-[1.9] text-[#172033] md:text-[15px]">
              The common causes of diseases were earlier considered as bacteria
              or virus. But today in the modern world, diseases caused by the
              lifestyle that human beings lead is the major cause which is
              unfortunately not recognised as such. Various diseases that are
              treated in SPARRC usually come from lifestyle issues.
            </p>

            <p className="mt-5 text-[14px] font-medium leading-[1.9] text-[#172033] md:text-[15px]">
              It is a misconception that we ought to use our time to work - in
              pursuit of money, food and other symbols of material life. It is
              when we misuse the time available for maintaining our health
              through our own effort, the possibility of lifestyle diseases
              begin. It is vital that people understand that they can prevent
              lifestyle diseases through their own efforts like doing regular
              exercises and eating healthy.
            </p>
          </div>

          <div className="relative">
            {/* <div className="absolute -inset-3 rounded-[32px] bg-gradient-to-br from-[#1268d6]/15 to-[#19d3a2]/15 blur-xl" /> */}
            <div className="relative overflow-hidden rounded-[28px] bg-white p-2 shadow-[0_18px_55px_rgba(18,104,214,0.12)]">
              <img
                src="/images/lifestyle-diseases-managements-main.png"
                alt="Lifestyle diseases management exercise session"
                className="h-auto w-full rounded-[22px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <DynamicDepartmentCards
        eyebrow="DEPARTMENTS"
        title="Lifestyle Diseases Managements"
        description="Lifestyle disease management programs designed to support better health, recovery, fitness, and long-term wellness."
        backgroundImage="/images/sub-banner-content-bg.png"
        columns={3}
        items={[
          {
            title: "Diabetes",
            description:
              "By 2020, 50% of the world population suffering from diabetes will be Indians . India is the Diabetic capital of the world . About 17 million people in India are in a pre-diabetic state.",
            image: "/images/diabetes.png",
            href: "/departments/lifestyle-diseases-managements/diabetes",
            buttonText: "Read more",
          },
          {
            title: "Obesity",
            description:
              "Obesity is another modern day lifestyle issue caused by overeating and under-exercising. Obesity is a simply the manifestation of excess energy that is being pushed into the system",
            image: "/images/obesity.png",
            href: "/departments/lifestyle-diseases-managements/obesity",
            buttonText: "Read more",
          },
          {
            title: "Hypertension",
            description:
              "The disease that affects the middle aged group because of blood pressure of the diastolic being more than 90 mmhg is called Hypertension. Recently WHO (World Health Organisation)",
            image: "/images/hypertension.png",
            href: "/departments/lifestyle-diseases-managements/hypertension",
            buttonText: "Read more",
          },
          {
            title: "Heart Disease",
            description:
              "60% of the world population suffering from cardiac diseases are Indians. It is of utmost importance that people understand that most of the cardiac diseases that are diagnosed",
            image: "/images/heart-disease.png",
            href: "/departments/lifestyle-diseases-managements/heart-disease",
            buttonText: "Read more",
          },
          {
            title: "Osteoarthritis",
            description:
              "Articular Cartilage is the tissue at the end of the bones that aids in the movement in a joint. When this cartilage is damaged either by injury or by wear and tear",
            image: "/images/osteoarthritis.png",
            href: "/departments/lifestyle-diseases-managements/osteoarthritis",
            buttonText: "Read more",
          },
          {
            title: "Cancer",
            description:
              'Cancer is the condition of body that allows uncontrolled mitosis called cell division. It is very common for every cell to have what is called as "contact inhibition".',
            image: "/images/cancer.png",
            href: "/departments/lifestyle-diseases-managements/cancer",
            buttonText: "Read more",
          },
        ]}
      />
    </>
  );
}