"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const recoveryPoints = [
  "Personalised recovery plans",
  "Non-surgical treatment approach",
  "Experienced rehabilitation team",
];

export default function RecoveryCTA() {
  return (
    <section className="overflow-hidden bg-[#f7f9ff] px-4 py-10 sm:px-6 md:py-14 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease }}
        className="relative mx-auto max-w-[1440px] overflow-hidden rounded-[28px] bg-[linear-gradient(180deg,#286cba_0%,#3b55a5_55%,#524095_100%)] px-5 py-8 shadow-[0_30px_80px_rgba(43,65,153,0.28)] sm:rounded-[34px] sm:px-8 sm:py-10 lg:px-12 lg:py-12"
      >
        {/* Decorative background */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-300/20 blur-[90px]" />
        <div className="pointer-events-none absolute -bottom-40 -left-20 h-80 w-80 rounded-full bg-violet-300/20 blur-[110px]" />

        <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:radial-gradient(circle_at_center,white_1px,transparent_1px)] [background-size:18px_18px]" />

        <div className="pointer-events-none absolute right-[8%] top-[-80px] hidden h-[310px] w-[310px] rounded-full border border-white/10 lg:block" />
        <div className="pointer-events-none absolute right-[13%] top-[-30px] hidden h-[210px] w-[210px] rounded-full border border-white/10 lg:block" />

        <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:gap-12">
          {/* Left content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.1, ease }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md"
            >
              <Sparkles className="h-4 w-4 text-cyan-200" />

              <span className="font-jost text-[11px] font-semibold uppercase tracking-[0.2em] text-white sm:text-xs">
                Recover Better. Move Freely.
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.18, ease }}
              className="max-w-4xl font-jost text-[28px] font-semibold leading-[1.15] tracking-[-0.03em] text-white sm:text-4xl lg:text-[48px]"
            >
              Whatever Caused the Pain,
              <span className="block bg-gradient-to-r from-cyan-200 via-white to-violet-200 bg-clip-text text-transparent">
                We Help You Recover Stronger.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.26, ease }}
              className="mt-5 max-w-3xl font-circe text-[15px] leading-7 text-white/80 sm:text-base lg:text-[17px]"
            >
              Whether your condition was caused by a sporting injury, workplace
              accident, daily activity, or any other reason, our team helps you
              return to comfortable, confident movement.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.32, ease }}
              className="mt-3 max-w-3xl font-circe text-[15px] leading-7 text-white/80 sm:text-base lg:text-[17px]"
            >
              The SPARRC team has helped people overcome persistent aches and
              pains without unnecessary surgery or medication.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.4, ease }}
              className="mt-7 flex flex-wrap gap-x-6 gap-y-3"
            >
              {recoveryPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-2 text-sm text-white/85"
                >
                  <CheckCircle2 className="h-[18px] w-[18px] shrink-0 text-cyan-200" />
                  <span className="font-circe">{point}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right contact card */}
          <motion.div
            initial={{ opacity: 0, x: 35, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.25, ease }}
            className="relative"
          >
            <div className="absolute -inset-3 rounded-[30px] bg-white/10 blur-xl" />

            <div className="relative overflow-hidden rounded-[26px] border border-white/20 bg-white/[0.12] p-5 shadow-[0_24px_60px_rgba(12,24,78,0.24)] backdrop-blur-xl sm:p-6">
              <div className="absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-white/10" />

              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/15 shadow-lg">
                  <HeartHandshake
                    className="h-7 w-7 text-white"
                    strokeWidth={1.7}
                  />
                </div>

                <p className="mt-6 font-jost text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100">
                  Start Your Recovery
                </p>

                <h3 className="mt-2 font-jost text-2xl font-semibold leading-tight text-white sm:text-[28px]">
                  Take the first step towards pain-free movement.
                </h3>

                <p className="mt-3 font-circe text-[15px] leading-6 text-white/75">
                  Speak with our specialists and find the right recovery plan
                  for your condition.
                </p>

                <Link
                  href="/contact"
                  className="group mt-6 flex w-full items-center justify-between rounded-2xl bg-white px-5 py-4 font-jost text-sm font-semibold text-[#354fa2] shadow-[0_15px_35px_rgba(20,28,82,0.22)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(20,28,82,0.3)]"
                >
                  <span className="flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5" />
                    Contact Us
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#354fa2] text-white transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}