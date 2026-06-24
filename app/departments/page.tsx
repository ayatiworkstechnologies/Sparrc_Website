import Link from "next/link";
import {
  Activity,
  ArrowRight,
  Baby,
  Brain,
  BriefcaseMedical,
  Dumbbell,
  HandHeart,
  HeartPulse,
  Home,
  Laptop,
  PersonStanding,
  Scale,
  Stethoscope,
  Users,
} from "lucide-react";

const departments = [
  {
    title: "Assessments",
    description:
      "Scientific assessments designed to understand movement, fitness, strength, flexibility, posture, and physical performance.",
    href: "/departments/assessments",
    icon: Activity,
  },
  {
    title: "Pre and Post-Natal Fitness",
    description:
      "Structured exercise and fitness support designed for women before, during, and after childbirth.",
    href: "/departments/pre-and-post-natal-fitness",
    icon: Baby,
  },
  {
    title: "Women’s Fitness Medicine",
    description:
      "Specialised fitness medicine programmes supporting women across different stages of life.",
    href: "/departments/womens-fitness-medicine",
    icon: HandHeart,
  },
  {
    title: "Lifestyle Diseases Management",
    description:
      "Exercise-led programmes supporting the prevention and management of lifestyle-related health conditions.",
    href: "/departments/lifestyle-diseases-managements",
    icon: HeartPulse,
  },
  {
    title: "Dance Medicine",
    description:
      "Specialised assessment, injury prevention, rehabilitation, and performance support for dancers.",
    href: "/departments/dance-medicine",
    icon: PersonStanding,
  },
  {
    title: "Counselling",
    description:
      "Professional counselling support focused on mental wellbeing, motivation, recovery, and healthy lifestyle habits.",
    href: "/departments/counselling",
    icon: Brain,
  },
  {
    title: "Avoid Surgery Programs",
    description:
      "Scientific rehabilitation and exercise programmes designed to manage pain and reduce the need for surgery.",
    href: "/departments/avoid-surgery-programs",
    icon: Stethoscope,
  },
  {
    title: "House Calls",
    description:
      "Personalised physiotherapy, rehabilitation, and fitness services delivered conveniently at home.",
    href: "/departments/house-calls",
    icon: Home,
  },
  {
    title: "Pediatric Fitness Program",
    description:
      "Age-appropriate movement and fitness programmes supporting children’s strength, mobility, and development.",
    href: "/departments/pediatric-fitness-program",
    icon: Users,
  },
  {
    title: "Sports Medicine",
    description:
      "Comprehensive injury prevention, rehabilitation, recovery, and performance support for athletes.",
    href: "/departments/sports-medicine",
    icon: Dumbbell,
  },
  {
    title: "Pain Management",
    description:
      "Non-surgical programmes designed to identify pain causes, improve movement, and support long-term relief.",
    href: "/departments/pain-management",
    icon: BriefcaseMedical,
  },
  {
    title: "Professional Health Program",
    description:
      "Workplace health programmes designed to improve posture, mobility, fitness, and occupational wellbeing.",
    href: "/departments/professional-health-program",
    icon: Users,
  },
  {
    title: "Rehabilitation",
    description:
      "Personalised rehabilitation programmes that restore strength, mobility, balance, and physical independence.",
    href: "/departments/rehabilitation",
    icon: Activity,
  },
  {
    title: "Weight Management",
    description:
      "Structured exercise, fitness, and lifestyle programmes supporting healthy and sustainable weight management.",
    href: "/departments/weight-management",
    icon: Scale,
  },
  {
    title: "FAMES for Differently Abled",
    description:
      "Inclusive fitness and movement programmes designed to improve mobility, confidence, and quality of life.",
    href: "/departments/fames-for-differently-abled",
    icon: HandHeart,
  },
  {
    title: "Training Programs",
    description:
      "Professional education and practical training programmes for physiotherapists, trainers, and practitioners.",
    href: "/departments/training-programs",
    icon: Users,
  },
  {
    title: "Geriatric Fitness Medicine",
    description:
      "Safe fitness programmes supporting mobility, strength, balance, independence, and healthy ageing.",
    href: "/departments/geriatric-fitness-medicine",
    icon: HeartPulse,
  },
  {
    title: "Teleservices",
    description:
      "Remote consultation, exercise guidance, assessment, and rehabilitation support through digital platforms.",
    href: "/departments/teleservices",
    icon: Laptop,
  },
];

export default function DepartmentsPage() {
  return (
    <main className="overflow-hidden bg-white">
      {/* Banner */}
      <section className="relative flex min-h-[280px] items-center justify-center overflow-hidden bg-[linear-gradient(135deg,#286cba_0%,#3b55a5_50%,#524095_100%)] px-5 py-20 text-center text-white md:min-h-[360px]">
        <div className="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full border border-white/10" />

        <div className="relative mx-auto max-w-4xl">
          <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-white/70 sm:text-[13px]">
            SPARRC
          </p>

          <h1 className="mt-4 text-[36px] font-extrabold leading-tight sm:text-[46px] md:text-[58px]">
            Departments
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-7 text-white/80 sm:text-[16px]">
            Scientific care, rehabilitation, fitness medicine, and performance
            programmes designed for every stage of life.
          </p>
        </div>
      </section>

      {/* Department listing */}
      <section className="px-5 py-16 sm:px-6 md:px-10 md:py-20 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#286cba] sm:text-[13px]">
              Our Departments
            </p>

            <h2 className="mt-4 text-[28px] font-extrabold leading-tight text-[#101828] sm:text-[36px] md:text-[44px]">
              Specialised care for movement, recovery, and performance
            </h2>

            <p className="mt-5 text-[14px] leading-7 text-[#667085] sm:text-[15px] md:text-[16px] md:leading-8">
              Explore SPARRC departments offering scientific assessment,
              rehabilitation, fitness medicine, pain management, professional
              training, and performance support.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-6">
            {departments.map((department) => {
              const Icon = department.icon;

              return (
                <Link
                  key={department.href}
                  href={department.href}
                  className="group flex h-full flex-col rounded-[22px] border border-[#e9edf4] bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#4D1EFF]/20 hover:shadow-[0_20px_55px_rgba(39,51,89,0.10)] sm:p-7"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(40,108,186,0.12),rgba(82,64,149,0.12))] text-[#4D1EFF]">
                    <Icon size={24} strokeWidth={1.8} />
                  </div>

                  <h3 className="mt-6 text-[20px] font-extrabold leading-snug text-[#101828] transition-colors duration-300 group-hover:text-[#4D1EFF]">
                    {department.title}
                  </h3>

                  <p className="mt-4 flex-1 text-[14px] leading-7 text-[#667085]">
                    {department.description}
                  </p>

                  <span className="mt-6 inline-flex items-center gap-2 text-[14px] font-bold text-[#286cba] transition-all duration-300 group-hover:gap-3 group-hover:text-[#4D1EFF]">
                    Explore Department
                    <ArrowRight size={16} />
                  </span>
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
              Need help choosing a department?
            </h2>

            <p className="mt-3 max-w-2xl text-[14px] leading-7 text-[#667085] sm:text-[15px]">
              Contact the SPARRC team and we will guide you to the most suitable
              assessment, treatment, or fitness programme.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-3 rounded-full bg-[#4D1EFF] px-7 py-3.5 text-[14px] font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#286cba]"
          >
            Contact Us
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}