"use client";

import Image from "next/image";
import {
  motion,
  type Variants,
  useReducedMotion,
} from "framer-motion";

import InnerBanner from "@/components/InnerBanner";
import SeniorInternshipProgram from "@/components/Events/SeniorInternshipProgram";

// const content =
//   "Health & Fitness Instructor Course is available online now!!! Start your journey into the Fitness world with a practical, innovative curriculum and a world-class foundation for your career.";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.08,
    },
  },
};

const contentVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 36,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.95,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const imageVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 48,
    scale: 0.96,
    filter: "blur(5px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function SeniorInternshipProgramPage() {
  const reduceMotion = useReducedMotion();

  const initialState = reduceMotion ? false : "hidden";
  const visibleState = reduceMotion ? undefined : "visible";

  return (
    <main className="overflow-hidden bg-white">
      <InnerBanner
        title="Senior Internship Program"
        bgImage="/images/page-banner-bg.png"
      />

      <SeniorInternshipProgram />

      
    </main>
  );
}