"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

const mobileTherapyRoutes = new Set([
  "/therapies",
  "/therapies/aquatherapy",
  "/therapies/cranio-sacral",
  "/therapies/functional-training",
  "/therapies/group-therapy",
  "/therapies/kalaripayattu",
  "/therapies/mtpt",
  "/therapies/pemf",
  "/therapies/physiotherapy",
  "/therapies/prescription-exercise",
  "/therapies/six-healing-sounds",
  "/therapies/sports-massage",
  "/therapies/yoga-therapy",
]);

function hasDedicatedMobilePage(pathname: string) {
  return (
    pathname === "/" ||
    pathname === "/about" ||
    pathname === "/contact" ||
    mobileTherapyRoutes.has(pathname)
  );
}

export default function RouteContent({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const needsMobileHeaderOffset = !hasDedicatedMobilePage(pathname);

  return (
    <main className={`flex-1 ${needsMobileHeaderOffset ? "pt-[70px] md:pt-0" : ""}`}>
      {children}
    </main>
  );
}
