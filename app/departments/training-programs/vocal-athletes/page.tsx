import Link from "next/link";
import InnerBanner from "@/components/InnerBanner";

const trainingProgramsMenu = [
  {
    title: "Sports",
    href: "/departments/training-programs/sports",
  },
  {
    title: "Corporate Wellness Program",
    href: "/departments/training-programs/corporate-wellness-program",
  },
  {
    title: "Vocal Athletes",
    href: "/departments/training-programs/vocal-athletes",
  },
  {
    title: "Running and Trekking",
    href: "/departments/training-programs/running-and-trekking",
  },
];

export default function VocalAthletesPage() {
  const activeHref = "/departments/training-programs/vocal-athletes";

  return (
    <>
      <InnerBanner title="Vocal Athletes" bgImage="/images/page-banner-bg.png" />

      <section className="relative overflow-hidden bg-[#f7fbff] px-4 py-10 sm:px-6 md:py-14">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#1268d6_1px,transparent_1px)] [background-size:26px_26px] opacity-[0.08]" />

        <div className="relative mx-auto max-w-6xl">
          {/* Training Program Menu */}
          <div className="mb-8 overflow-x-auto pb-2">
            <div className="flex w-max gap-3 rounded-full border border-white bg-white/85 p-2 shadow-[0_16px_45px_rgba(18,104,214,0.08)] backdrop-blur">
              {trainingProgramsMenu.map((item) => {
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

          <div className="grid items-center gap-8 rounded-[34px] border border-white bg-white/90 p-5 shadow-[0_22px_80px_rgba(18,104,214,0.08)] backdrop-blur md:grid-cols-[0.95fr_1.05fr] md:p-8">
            <div>
              <div className="mb-5 inline-flex rounded-full bg-[#eafff5] px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#12b886]">
                Voice Training
              </div>

              <h1 className="text-[28px] font-extrabold leading-tight text-[#1268d6] md:text-[40px]">
                Vocal Athletes
              </h1>

              <div className="mt-5 space-y-5">
                <p className="text-[14px] font-medium leading-[1.9] text-[#172033] md:text-[15px]">
                  Voice Exercise or Singing Fitness can benefit singers to
                  improve their ability to sing. Training the small muscles that
                  are present in the neck and chest builds the strength of these
                  muscles to improve performance. Vocal assessment is done along
                  with an analysis of postural muscles and the singer’s
                  breathing pattern. In some cases, singers experience acid
                  reflux and this is also assessed and corrected by prescribing
                  the the right nutrition.
                </p>

                <p className="text-[14px] font-medium leading-[1.9] text-[#172033] md:text-[15px]">
                  Our team of Physicians, Physiotherapists, Speech therapists,
                  Nutritionists and Vocal Coach make a complete plan to enable
                  better singing performance.
                </p>

                <p className="text-[14px] font-semibold leading-[1.9] text-[#1268d6] md:text-[15px]">
                  Watch this video to understand the various aspects of voice
                  training for singers and speakers:
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-3 rounded-[34px] bg-gradient-to-br from-[#1268d6]/15 via-white to-[#19d3a2]/15 blur-xl" />

              <div className="relative overflow-hidden rounded-[28px] border border-white bg-white p-2 shadow-[0_20px_70px_rgba(18,104,214,0.13)]">
                <div className="relative aspect-video overflow-hidden rounded-[22px] bg-black">
                  <iframe
                    src="https://www.youtube.com/embed/z9PAr9myP2E"
                    title="Voice Training for Singers and Speakers"
                    className="absolute inset-0 h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}