"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

import InnerBanner from "@/components/InnerBanner";

const sectionVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 45,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const pointVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 22,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const listVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

type PolicySectionProps = {
  number?: string;
  title: string;
  children: ReactNode;
};

function PolicySection({
  number,
  title,
  children,
}: PolicySectionProps) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.18,
        margin: "0px 0px -60px 0px",
      }}
      variants={sectionVariants}
      className="scroll-mt-28"
    >
      <motion.div
        variants={pointVariants}
        className="flex items-stretch gap-3 sm:gap-4"
      >
        <span className="w-[3px] shrink-0 rounded-full bg-[#55b8c6]" />

        <h2 className="py-1 text-[17px] font-bold leading-7 text-[#141820] sm:text-[18px] lg:text-[19px]">
          {number ? `${number}. ` : ""}
          {title}
        </h2>
      </motion.div>

      <motion.div
        variants={listVariants}
        className="mt-4 space-y-4 pl-[15px] text-[14px] leading-7 text-[#7a7f89] sm:pl-[19px] sm:text-[15px] sm:leading-8"
      >
        {children}
      </motion.div>
    </motion.section>
  );
}

function AnimatedParagraph({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.p variants={pointVariants} className={className}>
      {children}
    </motion.p>
  );
}

function AnimatedBulletList({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <motion.ul
      variants={listVariants}
      className="space-y-2.5 pl-5 marker:text-[#55aeba] [&>li]:pl-1"
    >
      {children}
    </motion.ul>
  );
}

function AnimatedBullet({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <motion.li variants={pointVariants}>
      {children}
    </motion.li>
  );
}

function AnimatedRomanPoint({
  roman,
  children,
}: {
  roman: string;
  children: ReactNode;
}) {
  return (
    <motion.li
      variants={pointVariants}
      className="flex items-start gap-3"
    >
      <span className="shrink-0 font-medium text-[#636975]">
        ({roman})
      </span>

      <div className="min-w-0 flex-1">{children}</div>
    </motion.li>
  );
}

export default function RefundCancellationReturnPolicyPage() {
  return (
    <main className="overflow-hidden bg-white">
      <InnerBanner
        title="Refund / Cancellation / Package Policy"
        bgImage="/images/page-banner-bg.png"
      />

      <section className="relative overflow-hidden px-5 py-14 sm:px-7 sm:py-16 md:px-10 lg:px-14 lg:py-20 xl:px-20">
        {/* Soft background decorations */}
        <div className="pointer-events-none absolute -left-40 top-24 h-96 w-96 rounded-full bg-[#55b8c6]/[0.045] blur-[120px]" />

        <div className="pointer-events-none absolute -right-40 top-[40%] h-96 w-96 rounded-full bg-[#6951c8]/[0.045] blur-[120px]" />

        <div className="relative mx-auto max-w-[1440px]">
          {/* Main policy heading */}
          <motion.div
            initial={{
              opacity: 0,
              y: 35,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-[760px]"
          >
            <p className="text-[12px] font-bold uppercase tracking-[0.1em] text-[#30343c]">
              Story
            </p>

            <h1 className="mt-5 text-[29px] font-extrabold leading-[1.28] text-[#11151c] sm:text-[36px] lg:text-[42px]">
              Refund / Cancellation / Package
              <span className="block">Policy</span>
            </h1>

            <div className="mt-6 h-[2px] w-16 rounded-full bg-[#55b8c6]" />
          </motion.div>

          <div className="mt-11 space-y-11 sm:mt-14 sm:space-y-12 lg:space-y-14">
            {/* 1 */}
            <PolicySection number="1" title="Nature of Services">
              <AnimatedParagraph>
                All services provided by the Centre are professional,
                appointment-based, and personalised healthcare or allied
                healthcare services. Fees are charged for the reservation of
                clinician time, clinical expertise, preparation, and use of
                facilities, irrespective of actual attendance.
              </AnimatedParagraph>
            </PolicySection>

            {/* 2 */}
            <PolicySection
              number="2"
              title="Appointments & Single Sessions"
            >
              <AnimatedParagraph>
                Fees paid for single sessions are non-refundable once the
                session has commenced.
              </AnimatedParagraph>

              <AnimatedParagraph>
                Appointments cancelled with a minimum of 24 hours’ prior notice
                may be rescheduled once, subject to availability.
              </AnimatedParagraph>

              <AnimatedParagraph>
                Missed appointments or cancellations made with less than 24
                hours’ notice are non-refundable.
              </AnimatedParagraph>
            </PolicySection>

            {/* 3 */}
            <PolicySection
              number="3"
              title="Packages & Prepaid Programs"
            >
              <AnimatedParagraph>
                Packages are offered at concessional or bundled pricing compared
                to single-session rates.
              </AnimatedParagraph>

              <AnimatedParagraph>
                Once a package has commenced, it is not refundable in full.
              </AnimatedParagraph>

              <AnimatedParagraph>
                Refunds for unused sessions may be considered only under the
                circumstances outlined in this policy.
              </AnimatedParagraph>
            </PolicySection>

            {/* 4 */}
            <PolicySection
              number="4"
              title="Acceptable Reasons for Refund Requests"
            >
              <AnimatedParagraph className="max-w-[720px] font-bold leading-7 text-[#292d35]">
                Requests for refunds relating to unused sessions may be
                considered for the following reasons:
              </AnimatedParagraph>

              <AnimatedBulletList>
                <AnimatedBullet>
                  Medical inability to continue treatment, supported by valid
                  medical documentation
                </AnimatedBullet>

                <AnimatedBullet>
                  Relocation or unavoidable circumstances that make continued
                  attendance impractical
                </AnimatedBullet>

                <AnimatedBullet>
                  Discontinuation of the specific service by the Centre
                </AnimatedBullet>

                <AnimatedBullet>
                  Centre-initiated cancellations where rescheduling is not
                  feasible
                </AnimatedBullet>
              </AnimatedBulletList>

              <AnimatedParagraph>
                All refund requests must be submitted in writing and will be
                reviewed on a case-by-case basis at the discretion of the
                Centre.
              </AnimatedParagraph>
            </PolicySection>

            {/* 5 */}
            <PolicySection
              number="5"
              title="Refunds for Unused Sessions (Packages)"
            >
              <AnimatedParagraph className="font-semibold text-[#343943]">
                Where a refund for unused sessions is approved:
              </AnimatedParagraph>

              <AnimatedBulletList>
                <AnimatedBullet>
                  30% of the charges applicable to the unused sessions shall be
                  withheld towards administrative, scheduling, and clinical
                  planning costs.
                </AnimatedBullet>

                <AnimatedBullet>
                  The remaining balance amount shall be refunded.
                </AnimatedBullet>

                <AnimatedBullet>
                  Any promotional or package discounts applied at the time of
                  purchase may be adjusted prior to refund calculation.
                </AnimatedBullet>

                <AnimatedBullet>
                  Approved refunds will be processed within 7–14 working days
                  using the original mode of payment.
                </AnimatedBullet>
              </AnimatedBulletList>
            </PolicySection>

            {/* 6 */}
            <PolicySection
              number="6"
              title="Situations Where Refunds Will Not Be Provided"
            >
              <AnimatedParagraph className="font-semibold text-[#343943]">
                Refunds shall not be provided in the following situations:
              </AnimatedParagraph>

              <AnimatedBulletList>
                <AnimatedBullet>
                  Change of mind or personal scheduling constraints
                </AnimatedBullet>

                <AnimatedBullet>
                  Irregular attendance or failure to attend scheduled sessions
                </AnimatedBullet>

                <AnimatedBullet>
                  Non-compliance with the prescribed treatment plan
                </AnimatedBullet>

                <AnimatedBullet>
                  Expiry of package validity
                </AnimatedBullet>

                <AnimatedBullet>
                  Non-utilisation of sessions within the prescribed validity
                  period
                </AnimatedBullet>
              </AnimatedBulletList>
            </PolicySection>

            {/* 7 */}
            <PolicySection
              number="7"
              title="Centre-Initiated Cancellations"
            >
              <AnimatedParagraph>
                In the event that the Centre cancels a scheduled session:
              </AnimatedParagraph>

              <AnimatedBulletList>
                <AnimatedBullet>
                  The session will be rescheduled at the earliest mutually
                  convenient time, or
                </AnimatedBullet>

                <AnimatedBullet>
                  Refunded in full if rescheduling is not feasible.
                </AnimatedBullet>
              </AnimatedBulletList>
            </PolicySection>

            {/* 8 */}
            <PolicySection
              number="8"
              title="Transfer or Credit of Sessions"
            >
              <AnimatedParagraph>
                Unused sessions may be transferred to another individual with
                prior written approval of the Centre.
              </AnimatedParagraph>

              <AnimatedParagraph>
                Alternatively, unused sessions may be retained as credit for
                future services, subject to the original package validity.
              </AnimatedParagraph>
            </PolicySection>

            {/* 9 */}
            <PolicySection number="9" title="Acceptance of Policy">
              <AnimatedParagraph>
                This policy is framed in accordance with applicable Indian
                laws, including the Indian Contract Act, 1872 and the Consumer
                Protection Act, 2019.
              </AnimatedParagraph>

              <AnimatedParagraph>
                By proceeding with payment, the client acknowledges having read,
                understood, and agreed to the terms of this policy.
              </AnimatedParagraph>
            </PolicySection>

            {/* 10 */}
            <PolicySection
              number="10"
              title="Refund Processing, Mode of Payment & Banking Delays"
            >
              <motion.ol
                variants={listVariants}
                className="space-y-4"
              >
                <AnimatedRomanPoint roman="i">
                  All refunds shall be processed only to the original bank
                  account or payment source from which the payment was received.
                </AnimatedRomanPoint>

                <AnimatedRomanPoint roman="ii">
                  In the case of cash payments, refunds will be made only via
                  bank transfer to the patient’s bank account.
                </AnimatedRomanPoint>

                <AnimatedRomanPoint roman="iii">
                  <p>
                    Requests to process refunds to a different bank account will
                    be considered only upon submission of:
                  </p>

                  <motion.ol
                    variants={listVariants}
                    className="mt-2 space-y-1.5 pl-5"
                  >
                    <motion.li variants={pointVariants}>
                      1. A written request request from the patient, and
                    </motion.li>

                    <motion.li variants={pointVariants}>
                      2. Valid supporting documents as required by the Centre.
                    </motion.li>
                  </motion.ol>
                </AnimatedRomanPoint>

                <AnimatedRomanPoint roman="iv">
                  The client acknowledges the responsibility to provide accurate
                  bank details. SPARRC (the Centre) shall not be liable for the
                  loss of funds or misdirected payments resulting from incorrect
                  or incomplete information provided by the patient. Once a
                  transfer is initiated to the account details provided, the
                  Centre’s liability is fully discharged.
                </AnimatedRomanPoint>

                <AnimatedRomanPoint roman="v">
                  <p>
                    While all approved refunds are initiated within the stated
                    processing timeline, the Centre shall not be responsible for
                    delays or failures arising due to:
                  </p>

                  <motion.ol
                    variants={listVariants}
                    className="mt-2 space-y-1.5 pl-5"
                  >
                    <motion.li variants={pointVariants}>
                      1. Bank processing timelines or technical issues
                    </motion.li>

                    <motion.li variants={pointVariants}>
                      2. Incorrect or incomplete bank details provided by the
                      patient
                    </motion.li>

                    <motion.li variants={pointVariants}>
                      3. Third-party payment gateway issues
                    </motion.li>

                    <motion.li variants={pointVariants}>
                      4. Bank errors, transaction reversals, or suspected
                      fraudulent activity.
                    </motion.li>
                  </motion.ol>
                </AnimatedRomanPoint>
              </motion.ol>

              <AnimatedParagraph className="pt-2">
                In such cases, the Centre (SPARRC) will provide reasonable
                cooperation and transaction references where available, but
                cannot guarantee timelines beyond its control.
              </AnimatedParagraph>
            </PolicySection>

            {/* Contact */}
            <PolicySection title="Contact">
              <motion.div
                variants={listVariants}
                className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
              >
                {/* Address */}
                <motion.div
                  variants={pointVariants}
                  whileHover={{
                    y: -5,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="flex items-start gap-4 rounded-[18px] border border-[#e8edf1] bg-[#fbfcfd] p-5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#eaf7f8] text-[#45a9b7]">
                    <MapPin size={19} />
                  </div>

                  <div>
                    <p className="font-semibold text-[#303540]">
                      Sparrc Kinesiohealth Private Limited
                    </p>

                    <p className="mt-2">
                      No 4 ,VM Towers, behind Samsung Showroom,
                    </p>

                    <p>Alwarpet Street, Alwarpet</p>

                    <p>Chennai – 18</p>
                  </div>
                </motion.div>

                {/* Phone */}
                <motion.div
                  variants={pointVariants}
                  whileHover={{
                    y: -5,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="flex items-start gap-4 rounded-[18px] border border-[#e8edf1] bg-[#fbfcfd] p-5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#eaf7f8] text-[#45a9b7]">
                    <Phone size={18} />
                  </div>

                  <div>
                    <p className="font-semibold text-[#303540]">
                      Call
                    </p>

                    <Link
                      href="tel:9659650000"
                      className="mt-2 inline-block transition-colors duration-300 hover:text-[#4d1eff]"
                    >
                      9659650000
                    </Link>
                  </div>
                </motion.div>

                {/* Email */}
                <motion.div
                  variants={pointVariants}
                  whileHover={{
                    y: -5,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="flex items-start gap-4 rounded-[18px] border border-[#e8edf1] bg-[#fbfcfd] p-5 sm:col-span-2 lg:col-span-1"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#eaf7f8] text-[#45a9b7]">
                    <Mail size={18} />
                  </div>

                  <div className="flex min-w-0 flex-col">
                    <p className="font-semibold text-[#303540]">
                      Email
                    </p>

                    <Link
                      href="mailto:info@sparrc.com"
                      className="mt-2 break-all transition-colors duration-300 hover:text-[#4d1eff]"
                    >
                      info@sparrc.com
                    </Link>

                    <Link
                      href="mailto:sparrc@gmail.com"
                      className="break-all transition-colors duration-300 hover:text-[#4d1eff]"
                    >
                      sparrc@gmail.com
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            </PolicySection>
          </div>
        </div>
      </section>
    </main>
  );
}