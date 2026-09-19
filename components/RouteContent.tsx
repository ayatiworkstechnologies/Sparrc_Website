"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

const mobileTherapyRoutes = new Set([
  "/how-we-help",
  "/how-we-help/aquatherapy",
  "/how-we-help/cranio-sacral",
  "/how-we-help/functional-training",
  "/how-we-help/group-therapy",
  "/how-we-help/kalaripayattu",
  "/how-we-help/mtpt",
  "/how-we-help/pemf",
  "/how-we-help/physiotherapy",
  "/how-we-help/exercise-prescription",
  "/how-we-help/six-healing-sounds",
  "/how-we-help/sports-massage",
  "/how-we-help/yoga-therapy",
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
    <main className={`desktop-page-content flex-1 ${needsMobileHeaderOffset ? "pt-[70px] md:pt-0" : ""}`}>
      {children}
    </main>
  );
}
