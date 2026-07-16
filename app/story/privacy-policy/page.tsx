"use client";

import { motion, type Variants } from "framer-motion";

import InnerBanner from "@/components/InnerBanner";

type ContentItem =
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "subtitle";
      text: string;
    };

type PrivacySectionData = {
  title: string;
  content: ContentItem[];
};

const sectionVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 42,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.72,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.1,
      delayChildren: 0.06,
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

const contentVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const privacySections: PrivacySectionData[] = [
  {
    title: "Section 1 – What do we do with your Information",
    content: [
      {
        type: "paragraph",
        text: `When you purchase something from our store, as part of the buying and selling process, we collect the personal information you give us such as your name, address and email address.`,
      },
      {
        type: "paragraph",
        text: `When you browse our store, we also automatically receive your computer’s internet protocol (IP) address in order to provide us with information that helps us learn about your browser and operating system.`,
      },
      {
        type: "paragraph",
        text: `Email marketing (if applicable): With your permission, we may send you emails about our store, new products and other updates.`,
      },
    ],
  },
  {
    title: "Section 2-Consent How do you get my consent?",
    content: [
      {
        type: "paragraph",
        text: `When you provide us with personal information to complete a transaction, verify your credit card, place an order, arrange for a delivery or return a purchase, we imply that you consent to our collecting it and using it for that specific reason only.`,
      },
      {
        type: "paragraph",
        text: `If we ask for your personal information for a secondary reason, like marketing, we will either ask you directly for your expressed consent, or provide you with an opportunity to say no.`,
      },
      {
        type: "subtitle",
        text: `How do I withdraw my consent?`,
      },
      {
        type: "paragraph",
        text: `If after you opt-in, you change your mind, you may withdraw your consent for us to contact you, for the continued collection, use or disclosure of your information, at anytime, by contacting us at sparrc@gmail.com or mailing us at: [No4, VM Towers, Alwarpet st, Alwarpet Chennai 600018]`,
      },
    ],
  },
  {
    title: "Section 3-Disclosure",
    content: [
      {
        type: "paragraph",
        text: `We may disclose your personal information if we are required by law to do so or if you violate our Terms of Service.`,
      },
    ],
  },
  {
    title: "Section 4-Payment",
    content: [
      {
        type: "paragraph",
        text: `We use Razorpay for processing payments. We/Razorpay do not store your card data on their servers. The data is encrypted through the Payment Card Industry Data Security Standard (PCI-DSS) when processing payment. Your purchase transaction data is only used as long as is necessary to complete your purchase transaction. After that is complete, your purchase transaction information is not saved.`,
      },
      {
        type: "paragraph",
        text: `Our payment gateway adheres to the standards set by PCI-DSS as managed by the PCI Security Standards Council, which is a joint effort of brands like Visa, MasterCard, American Express and Discover.`,
      },
      {
        type: "paragraph",
        text: `PCI-DSS requirements help ensure the secure handling of credit card information by our store and its service providers.`,
      },
      {
        type: "paragraph",
        text: `For more insight, you may also want to read terms and conditions of SPARRC`,
      },
    ],
  },
  {
    title: "Section 5-Third -Party Services",
    content: [
      {
        type: "paragraph",
        text: `In general, the third-party providers used by us will only collect, use and disclose your information to the extent necessary to allow them to perform the services they provide to us.`,
      },
      {
        type: "paragraph",
        text: `However, certain third-party service providers, such as payment gateways and other payment transaction processors, have their own privacy policies in respect to the information we are required to provide to them for your purchase-related transactions.`,
      },
      {
        type: "paragraph",
        text: `For these providers, we recommend that you read their privacy policies so you can understand the manner in which your personal information will be handled by these providers.`,
      },
      {
        type: "paragraph",
        text: `In particular, remember that certain providers may be located in or have facilities that are located a different jurisdiction than either you or us. So if you elect to proceed with a transaction that involves the services of a third-party service provider, then your information may become subject to the laws of the jurisdiction(s) in which that service provider or its facilities are located.`,
      },
      {
        type: "paragraph",
        text: `Once you leave our store’s website or are redirected to a third-party website or application, you are no longer governed by this Privacy Policy or our website’s Terms of Service.`,
      },
    ],
  },
  {
    title: "Section 6 – Security",
    content: [
      {
        type: "paragraph",
        text: `To protect your personal information, we take reasonable precautions and follow industry best practices to make sure it is not inappropriately lost, misused, accessed, disclosed, altered or destroyed.`,
      },
    ],
  },
  {
    title: "Section 7 – Cookies",
    content: [
      {
        type: "paragraph",
        text: `We use cookies to maintain session of your user. It is not used to personally identify you on other websites.`,
      },
    ],
  },
  {
    title: "Section 8 – Age Of Consent",
    content: [
      {
        type: "paragraph",
        text: `By using this site, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.`,
      },
    ],
  },
  {
    title: "Section 9 – Changes to this Privacy Policy",
    content: [
      {
        type: "paragraph",
        text: `We reserve the right to modify this privacy policy at any time, so please review it frequently. Changes and clarifications will take effect immediately upon their posting on the website. If we make material changes to this policy, we will notify you here that it has been updated, so that you are aware of what information we collect, how we use it, and under what circumstances, if any, we use and/or disclose it.`,
      },
      {
        type: "paragraph",
        text: `If our store is acquired or merged with another company, your information may be transferred to the new owners so that we may continue to sell products to you.`,
      },
    ],
  },
];

function PrivacySection({
  title,
  content,
}: PrivacySectionData) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.12,
        margin: "0px 0px -55px 0px",
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
          {title}
        </h2>
      </motion.div>

      <motion.div
        variants={contentVariants}
        className="mt-4 space-y-4 pl-[15px] text-[14px] leading-7 text-[#7a7f89] sm:pl-[19px] sm:text-[15px] sm:leading-8"
      >
        {content.map((item, index) => {
          if (item.type === "subtitle") {
            return (
              <motion.h3
                key={`${title}-subtitle-${index}`}
                variants={pointVariants}
                className="pt-2 text-[15px] font-bold leading-7 text-[#292e37] sm:text-[16px]"
              >
                {item.text}
              </motion.h3>
            );
          }

          return (
            <motion.p
              key={`${title}-paragraph-${index}`}
              variants={pointVariants}
            >
              {item.text}
            </motion.p>
          );
        })}
      </motion.div>
    </motion.section>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <main className="overflow-hidden bg-white">
      <InnerBanner
        title="Privacy Policy"
        bgImage="/images/page-banner-bg.png"
      />

      <section className="relative overflow-hidden px-5 py-14 sm:px-7 sm:py-16 md:px-10 lg:px-14 lg:py-20 xl:px-20">
        {/* Soft background decorations */}
        <div className="pointer-events-none absolute -left-40 top-24 h-96 w-96 rounded-full bg-[#55b8c6]/[0.045] blur-[120px]" />

        <div className="pointer-events-none absolute -right-40 top-[38%] h-96 w-96 rounded-full bg-[#6951c8]/[0.045] blur-[120px]" />

        <div className="pointer-events-none absolute -left-40 bottom-[10%] h-96 w-96 rounded-full bg-[#286cba]/[0.035] blur-[130px]" />

        <div className="relative mx-auto max-w-[1440px]">
          {/* Main heading */}
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
            className="max-w-[800px]"
          >
            <p className="text-[12px] font-bold uppercase tracking-[0.1em] text-[#30343c]">
              Story
            </p>

            <h1 className="mt-5 text-[29px] font-extrabold leading-[1.28] text-[#11151c] sm:text-[36px] lg:text-[42px]">
              Privacy Policy
            </h1>

            <div className="mt-6 h-[2px] w-16 rounded-full bg-[#55b8c6]" />
          </motion.div>

          {/* Privacy policy content */}
          <div className="mt-11 space-y-11 sm:mt-14 sm:space-y-12 lg:space-y-14">
            {privacySections.map((section, index) => (
              <PrivacySection
                key={`${section.title}-${index}`}
                title={section.title}
                content={section.content}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}