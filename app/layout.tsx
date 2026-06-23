import type { Metadata } from "next";
import { Jost } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickySocialIcons from "@/components/StickySocialIcons";

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
      <body>
        <Header />
        {children}
        {/* {sticky social icons and arrow to top button} */}
        <StickySocialIcons />
        <Footer />
      </body>
    </html>
  );
}