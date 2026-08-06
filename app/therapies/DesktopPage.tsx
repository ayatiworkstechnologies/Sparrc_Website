import Link from "next/link";
import {
  Activity,
  ArrowRight,
  ClipboardCheck,
  Dumbbell,
  Hand,
  HandHeart,
  Leaf,
  PersonStanding,
  Repeat2,
  Sparkles,
  Users,
  Waves,
  Zap,
} from "lucide-react";

const therapies = [
  {
    title: "MTPT",
    description:
      "Myofascial trigger point therapy designed to release muscular tightness, reduce pain, and restore comfortable movement.",
    href: "/therapies/mtpt",
    icon: Hand,
  },
  {
    title: "Prescription Exercise",
    description:
      "Personalised exercise programmes designed to improve strength, flexibility, mobility, endurance, and physical function.",
    href: "/therapies/prescription-exercise",
    icon: ClipboardCheck,
  },
  {
    title: "PEMF",
    description:
      "Pulsed electromagnetic field therapy supporting pain relief, tissue recovery, circulation, and the body’s natural healing process.",
    href: "/therapies/pemf",
    icon: Zap,
  },
  {
    title: "Sports Massage",
    description:
      "Specialised massage therapy supporting muscle recovery, flexibility, circulation, and relief from sports-related muscular tension.",
    href: "/therapies/sports-massage",
    icon: HandHeart,
  },
  {
    title: "Physiotherapy",
    description:
      "Evidence-based physiotherapy focused on reducing pain, restoring movement, improving strength, and supporting long-term recovery.",
    href: "/therapies/physiotherapy",
    icon: Activity,
  },
  {
    title: "Aquatherapy",
    description:
      "Water-based rehabilitation programmes designed to improve strength, mobility, balance, and recovery with reduced joint stress.",
    href: "/therapies/aquatherapy",
    icon: Waves,
  },
  {
    title: "Group Therapy",
    description:
      "Guided therapy sessions providing structured movement, rehabilitation, motivation, and recovery within a supportive group environment.",
    href: "/therapies/group-therapy",
    icon: Users,
  },
  {
    title: "Kalaripayattu",
    description:
      "Traditional movement practice supporting flexibility, coordination, balance, strength, body control, and overall physical awareness.",
    href: "/therapies/kalaripayattu",
    icon: PersonStanding,
  },
  {
    title: "Yoga Therapy",
    description:
      "Personalised yoga-based therapy supporting posture, flexibility, breathing, strength, relaxation, and overall physical wellbeing.",
    href: "/therapies/yoga-therapy",
    icon: Leaf,
  },
  {
    title: "Alternate Therapy",
    description:
      "Complementary therapeutic approaches designed to support recovery, relaxation, pain management, movement, and functional wellbeing.",
    href: "/therapies/alternate-therapy",
    icon: Repeat2,
  },
  {
    title: "Functional Training",
    description:
      "Movement-focused training programmes designed to improve strength, stability, balance, coordination, and everyday physical performance.",
    href: "/therapies/functional-training",
    icon: Dumbbell,
  },
];

export default function TherapiesPage() {
  return (
    <main className="overflow-hidden bg-white">
      {/* Banner */}
      <section className="relative flex min-h-[280px] items-center justify-center overflow-hidden bg-[linear-gradient(135deg,#286cba_0%,#3b55a5_50%,#524095_100%)] px-5 py-20 text-center text-white md:min-h-[360px]">
        <div className="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full border border-white/10" />

        <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full border border-white/10" />

        <div className="pointer-events-none absolute left-[15%] top-[25%] h-20 w-20 rounded-full bg-white/[0.04] blur-xl" />

        <div className="pointer-events-none absolute bottom-[18%] right-[20%] h-28 w-28 rounded-full bg-white/[0.04] blur-2xl" />

        <div className="relative mx-auto max-w-4xl">
          <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-white/70 sm:text-[13px]">
            SPARRC
          </p>

          <h1 className="mt-4 text-[36px] font-extrabold leading-tight sm:text-[46px] md:text-[58px]">
            Therapies
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-7 text-white/80 sm:text-[16px]">
            Personalised therapies designed to reduce pain, restore movement,
            improve recovery, and support physical performance.
          </p>
        </div>
      </section>

      {/* Therapies listing */}
      <section className="px-5 py-16 sm:px-6 md:px-10 md:py-20 lg:px-16">
        <div className="mx-auto max-w-7xl">
          {/* Section heading */}
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center justify-center gap-2">
              <Sparkles
                size={16}
                strokeWidth={2}
                className="text-[#286cba]"
              />

              <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#286cba] sm:text-[13px]">
                Our Therapies
              </p>
            </div>

            <h2 className="mt-4 text-[28px] font-extrabold leading-tight text-[#101828] sm:text-[36px] md:text-[44px]">
              Specialised therapies for movement, recovery, and performance
            </h2>

            <p className="mt-5 text-[14px] leading-7 text-[#667085] sm:text-[15px] md:text-[16px] md:leading-8">
              Explore SPARRC therapies offering personalised pain management,
              rehabilitation, physical recovery, movement improvement, and
              performance support.
            </p>
          </div>

          {/* Therapy cards */}
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-6">
            {therapies.map((therapy) => {
              const Icon = therapy.icon;

              return (
                <Link
                  key={therapy.href}
                  href={therapy.href}
                  className="group relative flex h-full min-h-[305px] flex-col overflow-hidden rounded-[22px] border border-[#e9edf4] bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#4D1EFF]/20 hover:shadow-[0_20px_55px_rgba(39,51,89,0.10)] sm:p-7"
                >
                  {/* Hover background */}
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(40,108,186,0.035),transparent_50%,rgba(82,64,149,0.04))] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="relative z-10 flex h-full flex-1 flex-col">
                    {/* Icon */}
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(40,108,186,0.12),rgba(82,64,149,0.12))] text-[#4D1EFF] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#4D1EFF] group-hover:text-white group-hover:shadow-[0_10px_25px_rgba(77,30,255,0.18)]">
                      <Icon size={24} strokeWidth={1.8} />
                    </div>

                    {/* Title */}
                    <h3 className="mt-6 text-[20px] font-extrabold leading-snug text-[#101828] transition-colors duration-300 group-hover:text-[#4D1EFF]">
                      {therapy.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-4 flex-1 text-[14px] leading-7 text-[#667085]">
                      {therapy.description}
                    </p>

                    {/* Link label */}
                    <span className="mt-6 inline-flex items-center gap-2 text-[14px] font-bold text-[#286cba] transition-all duration-300 group-hover:gap-3 group-hover:text-[#4D1EFF]">
                      Explore Therapy

                      <ArrowRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-16 sm:px-6 md:px-10 md:pb-20 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-7 rounded-[26px] bg-[#f5f7fc] px-6 py-10 text-center md:flex-row md:px-10 md:py-12 md:text-left">
          <div>
            <h2 className="text-[26px] font-extrabold text-[#101828] sm:text-[32px]">
              Need help choosing a therapy?
            </h2>

            <p className="mt-3 max-w-2xl text-[14px] leading-7 text-[#667085] sm:text-[15px]">
              Contact the SPARRC team and we will guide you towards the most
              suitable therapy, assessment, treatment, or recovery programme.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-3 rounded-full bg-[#4D1EFF] px-7 py-3.5 text-[14px] font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#286cba] hover:shadow-[0_12px_28px_rgba(77,30,255,0.2)]"
          >
            Contact Us
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}