"use client";

import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { motion, type Variants, useReducedMotion } from "framer-motion";
import {
    ArrowRight,
    Award,
    BriefcaseBusiness,
    CalendarDays,
    CheckCircle2,
    Clock3,
    GraduationCap,
    Laptop,
    Mail,
    MapPin,
    MessageCircle,
    Phone,
    Stethoscope,
    UserCheck,
    Users,
} from "lucide-react";

type ProgramPoint = {
    icon: LucideIcon;
    text: string;
};

const introduction =
    "60% of the world population suffering from cardiac diseases are Indians. It is of utmost importance that people understand that most of the cardiac diseases that are diagnosed and treated with surgeries like coronary artery bypass graft or stents, can be prevented by a regular exercise program. It is also possible for those that have already undergone a such surgeries to get back to their pre-surgery levels of activity by joining the SPARRC prescription exercise program. Our program has enabled people to even run a marathon after cardiac bypass surgeries.";

const programPoints: ProgramPoint[] = [
    {
        icon: CalendarDays,
        text: "Duration of program from 3 months to 1 year.",
    },
    {
        icon: UserCheck,
        text: "Selection of the internees – Will be done through Tele/ in person preliminary interview.",
    },
    {
        icon: Clock3,
        text: "For a daily duration of 5 hrs/ 8 hrs per day for a month, the internship fee will be discussed with Internship coordinator respectively in TN/ other states.",
    },
    {
        icon: MapPin,
        text: "The senior internship can be done in any of our centres (17 Centres in different locations of the country)",
    },
    {
        icon: Award,
        text: "The candidate is eligible for the completion certificate at end of the program after an evaluation by the mentor.",
    },
    {
        icon: Stethoscope,
        text: "During the internship, the internee will be allowed to observe and assist in consultation, therapy, rehab, fitness and sports training.",
    },
    {
        icon: Users,
        text: "The internee may not be able to attend the internal training meetings or any other workshop conducted by the company. Internal training meetings and workshops are not a part of the internship program.",
    },
    {
        icon: GraduationCap,
        text: "Senior Intern discount of 20% can be availed for all the Workshops conducted. This is subjected to the availability of the seats.",
    },
    {
        icon: Mail,
        text: "Attendance will be marked at the respective centre and absence for the day or leave information to be mailed to sparrc.th@gmail.com",
    },
    {
        icon: BriefcaseBusiness,
        text: "Senior internship does not assure recruitment or job placements in the company.",
    },
    {
        icon: CheckCircle2,
        text: "Outstanding performance during the internship could earn an opportunity for a job interview in the company.",
    },
];

const teleInternshipContent =
    "Observatory Tele Internship for Teleservices can be done separately. It includes training in all the Teleservices – Consultation, Therapy, Rehab, Fitness, Neuro Rehab, etc. This internship can be done from anywhere and is not restricted only to the locations of our branches";

const sectionContainerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.06,
        },
    },
};

const fadeUpVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 30,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const fadeLeftVariants: Variants = {
    hidden: {
        opacity: 0,
        x: -35,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const fadeRightVariants: Variants = {
    hidden: {
        opacity: 0,
        x: 35,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export default function SeniorInternshipProgram() {
    const reduceMotion = useReducedMotion();

    return (
        <section className="overflow-hidden bg-white">
            {/* Introduction */}
            <div className="relative overflow-hidden bg-[#f7f9fd] px-4 py-14 sm:px-6 sm:py-16 md:px-8 lg:px-12 lg:py-20 xl:px-16">
                <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-[#286cba]/[0.06] blur-[120px]" />

                <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#524095]/[0.07] blur-[120px]" />

                <motion.div
                    initial={reduceMotion ? false : "hidden"}
                    whileInView={reduceMotion ? undefined : "visible"}
                    viewport={{
                        once: true,
                        amount: 0.15,
                    }}
                    variants={sectionContainerVariants}
                    className="relative mx-auto max-w-7xl"
                >
                    <div className="grid items-stretch gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
                        {/* Main text */}
                        <motion.div
                            variants={fadeLeftVariants}
                            className="rounded-[28px] border border-[#e4e9f2] bg-white p-6 shadow-[0_20px_60px_rgba(34,48,83,0.07)] sm:p-8 lg:p-10"
                        >
                            <div className="inline-flex items-center gap-2 rounded-full bg-[#edf3ff] px-4 py-2">
                                <GraduationCap
                                    size={16}
                                    className="text-[#4D1EFF]"
                                    strokeWidth={1.9}
                                />

                                <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#286cba]">
                                    SPARRC Internship
                                </span>
                            </div>

                            <h2 className="mt-6 text-[30px] font-extrabold leading-tight text-[#1473bf] sm:text-[38px] lg:text-[45px]">
                                Senior Internship Program
                            </h2>

                            <p className="mt-6 text-[14px] leading-7 text-[#4e596c] sm:text-[16px] sm:leading-8">
                                {introduction}
                            </p>
                        </motion.div>

                        {/* Quick overview */}
                        <motion.div
                            variants={fadeRightVariants}
                            className="relative overflow-hidden rounded-[28px] bg-[linear-gradient(145deg,#286cba_0%,#3d56a5_50%,#524095_100%)] p-6 text-white shadow-[0_25px_70px_rgba(46,63,143,0.25)] sm:p-8 lg:p-10"
                        >
                            <motion.div
                                aria-hidden="true"
                                className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10"
                                animate={
                                    reduceMotion
                                        ? undefined
                                        : {
                                            rotate: 360,
                                        }
                                }
                                transition={{
                                    duration: 35,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                            />

                            <motion.div
                                aria-hidden="true"
                                className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full border border-white/10"
                                animate={
                                    reduceMotion
                                        ? undefined
                                        : {
                                            rotate: -360,
                                        }
                                }
                                transition={{
                                    duration: 42,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                            />

                            <div className="relative">
                                <motion.div
                                    className="flex h-16 w-16 items-center justify-center rounded-[20px] border border-white/20 bg-white/15 backdrop-blur-md"
                                    animate={
                                        reduceMotion
                                            ? undefined
                                            : {
                                                y: [0, -7, 0],
                                            }
                                    }
                                    transition={{
                                        duration: 3.5,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                >
                                    <GraduationCap size={30} strokeWidth={1.7} />
                                </motion.div>

                                <h3 className="mt-7 text-[26px] font-extrabold leading-tight sm:text-[32px]">
                                    Practical learning across SPARRC services
                                </h3>

                                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                                    <div className="rounded-[20px] border border-white/15 bg-white/10 p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/15">
                                        <CalendarDays size={23} />

                                        <p className="mt-4 text-[21px] font-bold">
                                            3 Months to 1 Year
                                        </p>

                                        <p className="mt-2 text-[12px] leading-5 text-white/70">
                                            Duration of program
                                        </p>
                                    </div>

                                    <div className="rounded-[20px] border border-white/15 bg-white/10 p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/15">
                                        <MapPin size={23} />

                                        <p className="mt-4 text-[21px] font-bold">17 Centres</p>

                                        <p className="mt-2 text-[12px] leading-5 text-white/70">
                                            Different locations of the country
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-4 rounded-[20px] border border-white/15 bg-white/10 p-5 backdrop-blur-md">
                                    <div className="flex items-center gap-3">
                                        <Stethoscope size={22} />

                                        <p className="text-[15px] font-semibold">
                                            Consultation, therapy, rehab, fitness and sports training
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Guidelines */}
            <div className="relative px-4 py-14 sm:px-6 sm:py-16 md:px-8 lg:px-12 lg:py-20 xl:px-16">
                <div className="mx-auto max-w-7xl">
                    <motion.div
                        initial={reduceMotion ? false : "hidden"}
                        whileInView={reduceMotion ? undefined : "visible"}
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        variants={fadeUpVariants}
                        className="mx-auto max-w-3xl text-center"
                    >
                        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#286cba]">
                            Program Guidelines
                        </p>

                        <h2 className="mt-4 text-[28px] font-extrabold leading-tight text-[#101828] sm:text-[36px] lg:text-[43px]">
                            Senior internship information
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={reduceMotion ? false : "hidden"}
                        whileInView={reduceMotion ? undefined : "visible"}
                        viewport={{
                            once: true,
                            amount: 0.05,
                            margin: "0px 0px -70px 0px",
                        }}
                        variants={sectionContainerVariants}
                        className="relative mt-12"
                    >
                        {/* Desktop timeline */}
                        <div className="pointer-events-none absolute bottom-0 left-6 top-0 hidden w-px bg-gradient-to-b from-[#286cba]/30 via-[#524095]/20 to-transparent md:block lg:left-1/2" />

                        <div className="space-y-5">
                            {programPoints.map((point, index) => {
                                const Icon = point.icon;
                                const isRight = index % 2 !== 0;

                                return (
                                    <motion.article
                                        key={point.text}
                                        variants={fadeUpVariants}
                                        whileHover={
                                            reduceMotion
                                                ? undefined
                                                : {
                                                    y: -5,
                                                }
                                        }
                                        transition={{
                                            duration: 0.25,
                                        }}
                                        className={`relative md:pl-16 lg:grid lg:grid-cols-2 lg:gap-16 lg:pl-0 ${isRight ? "" : ""
                                            }`}
                                    >
                                        {/* Timeline marker */}
                                        <div className="absolute left-0 top-7 z-10 hidden h-12 w-12 items-center justify-center rounded-2xl border-4 border-white bg-[linear-gradient(135deg,#286cba,#524095)] text-white shadow-[0_10px_30px_rgba(57,69,143,0.2)] md:flex lg:left-1/2 lg:-translate-x-1/2">
                                            <Icon size={20} strokeWidth={1.8} />
                                        </div>

                                        <div
                                            className={`group relative overflow-hidden rounded-[22px] border border-[#e7ebf2] bg-white p-6 shadow-[0_14px_45px_rgba(34,48,83,0.06)] transition-all duration-300 hover:border-[#4D1EFF]/20 hover:shadow-[0_20px_55px_rgba(34,48,83,0.1)] sm:p-7 ${isRight
                                                    ? "lg:col-start-2"
                                                    : "lg:col-start-1 lg:text-right"
                                                }`}
                                        >
                                            <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[linear-gradient(135deg,rgba(40,108,186,0.07),rgba(82,64,149,0.08))] transition-transform duration-500 group-hover:scale-125" />

                                            <div
                                                className={`relative flex items-start gap-4 ${isRight ? "" : "lg:flex-row-reverse"
                                                    }`}
                                            >
                                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(40,108,186,0.13),rgba(82,64,149,0.13))] text-[#4D1EFF] md:hidden">
                                                    <Icon size={22} strokeWidth={1.8} />
                                                </div>

                                                <div className="min-w-0 flex-1">
                                                    <span className="text-[11px] font-bold tracking-[0.16em] text-[#a6adba]">
                                                        {String(index + 1).padStart(2, "0")}
                                                    </span>

                                                    <p className="mt-2 text-[14px] leading-7 text-[#505b6e] sm:text-[15px] sm:leading-8">
                                                        {point.text}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.article>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Tele Internship */}
            <div className="bg-[#f7f9fd] px-4 py-14 sm:px-6 sm:py-16 md:px-8 lg:px-12 lg:py-20 xl:px-16">
                <motion.div
                    initial={reduceMotion ? false : "hidden"}
                    whileInView={reduceMotion ? undefined : "visible"}
                    viewport={{
                        once: true,
                        amount: 0.2,
                    }}
                    variants={sectionContainerVariants}
                    className="mx-auto grid max-w-7xl overflow-hidden rounded-[30px] border border-[#e4e9f2] bg-white shadow-[0_20px_65px_rgba(34,48,83,0.08)] lg:grid-cols-[0.75fr_1.25fr]"
                >
                    <motion.div
                        variants={fadeLeftVariants}
                        className="relative overflow-hidden bg-[linear-gradient(145deg,#286cba,#524095)] p-7 text-white sm:p-9 lg:p-11"
                    >
                        <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full border border-white/10" />

                        <div className="relative">
                            <div className="flex h-16 w-16 items-center justify-center rounded-[20px] border border-white/20 bg-white/15 backdrop-blur-md">
                                <Laptop size={29} strokeWidth={1.7} />
                            </div>

                            <p className="mt-7 text-[11px] font-bold uppercase tracking-[0.18em] text-white/65">
                                Teleservices
                            </p>

                            <h2 className="mt-3 text-[27px] font-extrabold leading-tight sm:text-[34px]">
                                Observatory Tele Internship
                            </h2>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={fadeRightVariants}
                        className="flex items-center p-7 sm:p-9 lg:p-11"
                    >
                        <div>
                            <p className="text-[14px] leading-7 text-[#505b6e] sm:text-[16px] sm:leading-8">
                                <strong className="font-bold text-[#101828]">
                                    Observatory Tele Internship
                                </strong>{" "}
                                for Teleservices can be done separately. It includes training in
                                all the Teleservices – Consultation, Therapy, Rehab, Fitness,
                                Neuro Rehab, etc. This internship can be done from anywhere and
                                is not restricted only to the locations of our branches
                            </p>

                            <div className="mt-6 flex flex-wrap gap-3">
                                {[
                                    "Consultation",
                                    "Therapy",
                                    "Rehab",
                                    "Fitness",
                                    "Neuro Rehab",
                                ].map((service) => (
                                    <span
                                        key={service}
                                        className="rounded-full border border-[#dce3ef] bg-[#f8faff] px-4 py-2 text-[12px] font-semibold text-[#465168]"
                                    >
                                        {service}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* CTA */}
            <div className="px-4 py-14 sm:px-6 sm:py-16 md:px-8 lg:px-12 lg:py-20 xl:px-16">
                <motion.div
                    initial={reduceMotion ? false : "hidden"}
                    whileInView={reduceMotion ? undefined : "visible"}
                    viewport={{
                        once: true,
                        amount: 0.25,
                    }}
                    variants={fadeUpVariants}
                    className="mx-auto max-w-7xl"
                >
                    <div className="relative overflow-hidden rounded-[28px] bg-[#f2f5fb] px-6 py-9 sm:px-9 sm:py-11 lg:px-12">
                        <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-[#524095]/[0.07]" />

                        <div className="relative flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
                            <div>
                                <p className="text-[14px] leading-7 text-[#4e596c] sm:text-[16px]">
                                    Call{" "}
                                    <Link
                                        href="tel:9659650000"
                                        className="font-bold text-[#ff805f] transition-colors duration-300 hover:text-[#286cba]"
                                    >
                                        9659650000
                                    </Link>{" "}
                                    or chat with our online executive
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                <Link
                                    href="tel:9659650000"
                                    className="group inline-flex items-center gap-3 rounded-full bg-[#4D1EFF] px-6 py-3.5 text-[14px] font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#286cba]"
                                >
                                    <Phone size={17} />
                                    Call Now
                                </Link>

                                <Link
                                    href="https://wa.me/919659650000"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group inline-flex items-center gap-3 rounded-full border border-[#d3dbe8] bg-white px-6 py-3.5 text-[14px] font-bold text-[#344054] transition-all duration-300 hover:-translate-y-1 hover:border-[#25D366] hover:text-[#25D366]"
                                >
                                    <MessageCircle size={17} />
                                    Chat on WhatsApp

                                    <ArrowRight
                                        size={15}
                                        className="transition-transform duration-300 group-hover:translate-x-1"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}