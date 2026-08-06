import {
  Activity,
  HandHeart,
  ShieldCheck,
  Target,
  TimerReset,
  TrendingUp,
} from "lucide-react";

import InnerBanner from "@/components/InnerBanner";
import DynamicDepartmentDetail from "@/components/Departments/DynamicDepartmentDetail";

const recoveryBenefits = [
  "Recovery from a rigorous training schedule",
  "Recovery after a hectic sports schedule",
  "Recovery from an injury.",
];

const sportsMassageBenefits = [
  {
    title: "Avoid injuries",
    icon: ShieldCheck,
  },
  {
    title: "Avoid decrease in performance",
    icon: TrendingUp,
  },
  {
    title: "Prevent delayed onset of muscle soreness",
    icon: TimerReset,
  },
  {
    title: "Prevent the formation of myofascial triggers",
    icon: Target,
  },
];

export default function SportsMassagePage() {
  return (
    <main className="overflow-x-clip bg-[#f7f9fd]">
      <InnerBanner
        title="Sports Massage"
        bgImage="/images/page-banner-bg.png"
      />

      <DynamicDepartmentDetail
        title="Sports Massage"
        showCTA={false}
        sections={[
          {
            layout: "carouselLeft",
            eyebrow: "Sports Massage",
            heading: "Recovery, flexibility and performance support",
            icon: "activity",
            images: [
              "/images/sports-massage-1.png",
              "/images/sports-massage-2.png",
            ],
            showFeatures: false,
            content:
              "Sports Massage is the application of Massage Therapy and Physiotherapy to soothe and relax the tired muscles of athletes and other sportspersons to ensure flexibility and agility. Release of the soft tissue, muscle and fascia by trained physiotherapists has a much larger impact since the therapists are able to understand the requirements of the sportspersons and the movement patterns of muscles in their vocation.",
          },
        ]}
      />

      {/* Recovery benefits */}
      <section className="relative overflow-hidden bg-[#f7f9fd] px-4 pb-14 sm:px-6 md:pb-16">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(18,104,214,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(18,104,214,0.035)_1px,transparent_1px)] [background-size:64px_64px]" />

        <div className="relative mx-auto max-w-6xl">
          <div className="rounded-[28px] border border-[#e1e9f5] bg-white px-5 py-8 shadow-[0_16px_50px_rgba(26,69,135,0.07)] sm:px-7 md:px-9 md:py-10">
            <div className="grid items-center gap-8 md:grid-cols-[0.75fr_1.25fr] md:gap-12">
              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-[18px] bg-[#edf3ff] text-[#1268d6]">
                  <HandHeart size={27} strokeWidth={1.9} />
                </div>

                <h2 className="mt-5 text-[24px] font-extrabold leading-tight text-[#101828] sm:text-[28px] md:text-[32px]">
                  Sports Massage can be helpful in:
                </h2>

                <div className="mt-5 h-1 w-14 rounded-full bg-[#1268d6]" />
              </div>

              <div className="grid gap-4">
                {recoveryBenefits.map((benefit, index) => (
                  <div
                    key={benefit}
                    className="group flex items-center gap-4 rounded-[18px] border border-[#e6edf7] bg-[#f9fbff] px-5 py-4 transition-all duration-300 hover:border-[#b9ccef] hover:bg-[#f3f7ff] hover:shadow-[0_12px_30px_rgba(18,104,214,0.08)]"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#e8f0ff] text-[13px] font-extrabold text-[#1268d6] transition-transform duration-300 group-hover:scale-105">
                      0{index + 1}
                    </span>

                    <p className="text-[14px] font-semibold leading-7 text-[#344054] sm:text-[15px]">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sports massage advised benefits */}
      <section className="relative overflow-hidden bg-[#f7f9fd] px-4 pb-14 sm:px-6 md:pb-20">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(18,104,214,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(18,104,214,0.03)_1px,transparent_1px)] [background-size:64px_64px]" />

        <div className="relative mx-auto max-w-6xl">
          <div className="rounded-[30px] border border-[#e1e9f5] bg-[linear-gradient(135deg,#f0f5ff_0%,#ffffff_52%,#f5f7ff_100%)] px-5 py-10 shadow-[0_18px_60px_rgba(24,65,128,0.08)] sm:px-7 md:px-10 md:py-12">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-[18px] bg-[#eaf1ff] text-[#1268d6] shadow-[0_10px_28px_rgba(18,104,214,0.10)]">
                <Activity size={27} strokeWidth={1.9} />
              </div>

              <h2 className="text-[26px] font-extrabold leading-[1.3] text-[#101828] sm:text-[31px] md:text-[37px]">
                Sports Massage is advised for athletes and sportspersons in
                order to
              </h2>

              <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-[#1268d6]" />
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {sportsMassageBenefits.map((benefit, index) => {
                const Icon = benefit.icon;

                return (
                  <article
                    key={benefit.title}
                    className="group relative flex min-h-[225px] flex-col items-center justify-center overflow-hidden rounded-[24px] border border-[#e1e9f5] bg-white px-5 py-7 text-center shadow-[0_10px_30px_rgba(24,65,128,0.05)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#b8caea] hover:shadow-[0_20px_45px_rgba(24,65,128,0.11)]"
                  >
                    <span className="absolute left-5 top-4 text-[13px] font-extrabold text-[#1268d6]/25">
                      0{index + 1}
                    </span>

                    <div className="flex h-16 w-16 items-center justify-center rounded-[20px] border border-[#dce7f8] bg-[#eef4ff] text-[#1268d6] shadow-[0_8px_22px_rgba(18,104,214,0.08)] transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-[1.04] group-hover:border-[#b7caec] group-hover:bg-[#e8f0ff] group-hover:shadow-[0_12px_28px_rgba(18,104,214,0.14)]"
                    >
                      <Icon size={29} strokeWidth={1.8} />
                    </div>

                    <h3 className="mt-6 text-[16px] font-extrabold leading-[1.45] text-[#101828] transition-colors duration-300 group-hover:text-[#1268d6]">
                      {benefit.title}
                    </h3>

                    <span className="mt-5 h-1 w-9 rounded-full bg-[#1268d6] transition-all duration-300 group-hover:w-14" />
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}