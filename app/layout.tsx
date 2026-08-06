import type { Metadata } from "next";
import { Jost } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickySocialIcons from "@/components/StickySocialIcons";
import ScrollToTop from "@/components/ScrollToTop";
import MobileBottomNav from "@/mobile-src/component/Bottomnav";
import MobileFooter from "@/mobile-src/component/Footer";
import MobileHeader from "@/mobile-src/component/Header";
import RouteContent from "@/components/RouteContent";


const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const circe = localFont({
  src: "../public/fonts/Circe-Regular.otf",
  variable: "--font-circe",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SPARRC",
  description: "SPARRC Sports & Fitness Medicine Clinic",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jost.variable} ${circe.variable} antialiased`}>
      <body className="flex min-h-screen flex-col">
        <ScrollToTop />
        <div className="hidden md:sticky md:top-0 md:z-50 md:block">
          <Header />
        </div>
        <div className="md:hidden">
          <MobileHeader />
        </div>

        <RouteContent>{children}</RouteContent>

        <div className="hidden md:block">
          <StickySocialIcons />
          <Footer />
        </div>
        <div className="md:hidden">
          <MobileFooter />
          <MobileBottomNav />
        </div>
      </body>
    </html>
  );
}
