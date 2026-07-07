import InnerBanner from "@/components/InnerBanner";

export default function ProfessionalHealthProgramPage() {
  return (
    <>
      <InnerBanner
        title="Professional Health Program"
        bgImage="/images/page-banner-bg.png"
      />

      <section className="relative overflow-hidden bg-[#f7fbff] px-4 py-10 sm:px-6 md:py-14">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#1268d6_1px,transparent_1px)] [background-size:26px_26px] opacity-[0.08]" />

        <div className="relative mx-auto max-w-6xl space-y-8">
          <div className="rounded-[30px] border border-white bg-white/90 p-6 shadow-[0_18px_60px_rgba(18,104,214,0.08)] backdrop-blur md:p-8">
            <h2 className="mb-4 text-[24px] font-extrabold leading-tight text-[#1268d6] md:text-[32px]">
              Professional Health Program
            </h2>

            <p className="text-[14px] font-medium leading-[1.9] text-[#172033] md:text-[15px]">
              Professionals in the modern age are those that sit for long hours
              in front of monitors, or around a conference table in meetings.
              They feel exhausted at the end of their working day but have
              exerted very little physically. A thorough assessment of their
              activity/inactivity levels at work and at home, their postures and
              their diet is important to prescribe the right nutrition and
              exercise program for such individuals.
            </p>
          </div>

          <div className="rounded-[30px] border border-white bg-white/90 p-6 shadow-[0_18px_60px_rgba(18,104,214,0.08)] backdrop-blur md:p-8">
            <h2 className="mb-5 text-[25px] font-extrabold leading-tight text-[#1268d6] md:text-[36px]">
              The human body was not meant to sit all day. A sedentary work day
              puts individuals at greater risk of injury. Pain is largely the
              result of muscle strain from improper set up of workstations or
              bad postures.
            </h2>

            <p className="text-[14px] font-medium leading-[1.9] text-[#172033] md:text-[15px]">
              In a complete Professional Health Profile, the individuals is
              asked to answer details about their past activity levels, their
              seated posture at work – how they hold their neck, shoulder, spine
              and the feet. The ergonomics involved in their office – which side
              is the cabin door, temperature of the room, the height of the
              furniture – are all studied. We also assess the footwear they use,
              the mattress they lie on, the car that they drive and any other
              factor that might be relevant to arrive at their health profile.
              SPARRC staff are thoroughly trained in asking the right questions
              to get the right answers from the clients.
            </p>

            <div className="mx-auto mt-8 max-w-3xl">
              <div className="relative">
                <div className="absolute -inset-3 rounded-[34px] bg-gradient-to-br from-[#1268d6]/15 via-white to-[#19d3a2]/15 blur-xl" />

                <div className="relative overflow-hidden rounded-[28px] border border-white bg-white p-2 shadow-[0_20px_70px_rgba(18,104,214,0.13)]">
                  <img
                    src="/images/professional-health-program-1.png"
                    alt="Professional Health Program"
                    className="h-[260px] w-full rounded-[22px] object-cover md:h-[420px]"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[30px] border border-white bg-gradient-to-br from-white via-[#f8fbff] to-[#effff8] p-6 shadow-[0_18px_60px_rgba(18,104,214,0.08)] backdrop-blur md:p-8">
            <h2 className="mb-4 text-[24px] font-extrabold leading-tight text-[#1268d6] md:text-[32px]">
              Health Profile Assessment
            </h2>

            <div className="space-y-4">
              <p className="text-[14px] font-medium leading-[1.9] text-[#172033] md:text-[15px]">
                We also do an assessment of the food they eat, when they eat,
                what mood they are in while they eat, what triggers they have
                for eating and the timings of the day when they eat or snack.
                All of this is essential to draw up a prescription for the
                reclaiming of their health.
              </p>

              <p className="text-[14px] font-medium leading-[1.9] text-[#172033] md:text-[15px]">
                Call our helpline at +91 965 965 0000 to schedule a
                Professional Health Profile assessment for yourself or your
                loved ones.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}