import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

const footerData = {
  logo: "/images/logo.png",

  description:
    "SPARRC is a pioneering Sports and Fitness Medicine centre. We ensure our clients attain the priceless possession of health through Fitness.",

  socialLinks: [
    {
      name: "Facebook",
      icon: "/icons/facebook.svg",
      href: "#",
    },
    {
      name: "X",
      icon: "/icons/x.svg",
      href: "#",
    },
    {
      name: "Instagram",
      icon: "/icons/instagram.svg",
      href: "#",
    },
    {
      name: "YouTube",
      icon: "/icons/youtube.svg",
      href: "#",
    },
    {
      name: "LinkedIn",
      icon: "/icons/linkedin.svg",
      href: "#",
    },
  ],

  discoverLinks: [
    { title: "HOME", href: "/" },
    { title: "RESEARCH", href: "/research" },
    { title: "PRIVACY POLICY", href: "/privacy-policy" },
    {
      title: "REFUND, CANCELLATION & PACKAGE POLICY",
      href: "/refund-cancellation-package-policy",
    },
    { title: "MAGAZINE", href: "/magazine" },
    { title: "EVENTS", href: "/events" },
    { title: "GALLERY", href: "/gallery" },
  ],

  serviceLinks: [
    { title: "SPORTS MEDICINE", href: "/sports-medicine" },
    { title: "PAIN MANAGEMENT", href: "/pain-management" },
    { title: "WEIGHT MANAGEMENT", href: "/weight-management" },
    { title: "TELE SERVICE", href: "/tele-service" },
  ],

  officeDetails: [
    {
      icon: Phone,
      value: "+ 91 965 965 0000",
      href: "tel:+919659650000",
    },
    {
      icon: Mail,
      value: "sparrc@gmail.com",
      href: "mailto:sparrc@gmail.com",
    },
    {
      icon: MapPin,
      value: "No 4, Alwarpet Street,\nChennai 600018",
      href: "#",
    },
  ],
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ececec_1px,transparent_1px),linear-gradient(to_bottom,#ececec_1px,transparent_1px)] bg-[size:64px_64px] opacity-70" />

      <div className="relative mx-auto max-w-7xl px-6 pt-12 pb-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo Section */}
          <div>
            <Image
              src={footerData.logo}
              alt="SPARRC"
              width={140}
              height={95}
              className="mb-6 h-auto w-[140px]"
            />

            <p className="max-w-[280px] text-[15px] leading-7 text-gray-500">
              {footerData.description}
            </p>

            <div className="mt-8 flex items-center gap-4">
              {footerData.socialLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  aria-label={item.name}
                  className="flex h-7 w-7 items-center justify-center rounded bg-white shadow-sm transition hover:-translate-y-1"
                >
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={15}
                    height={15}
                    className="h-[15px] w-[15px] object-contain"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Discover More */}
          <div>
            <h3 className="mb-7 text-[22px] font-bold text-black">
              Discover More
            </h3>

            <ul className="space-y-5">
              {footerData.discoverLinks.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="flex gap-3 text-[14px] font-bold tracking-wide text-black transition hover:text-[#4D1EFF]"
                  >
                    <span>•</span>
                    <span>{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-7 text-[22px] font-bold text-black">Services</h3>

            <ul className="space-y-6">
              {footerData.serviceLinks.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="flex gap-3 text-[14px] font-bold tracking-wide text-black transition hover:text-[#4D1EFF]"
                  >
                    <span>•</span>
                    <span>{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Head Office */}
          <div>
            <h3 className="mb-7 text-[22px] font-bold text-black">
              Head Office
            </h3>

            <div className="space-y-7">
              {footerData.officeDetails.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.value}
                    href={item.href}
                    className="flex items-start gap-4 text-black transition hover:text-[#4D1EFF]"
                  >
                    <Icon size={30} className="mt-1 shrink-0 text-[#ff3d18]" />
                    <span className="whitespace-pre-line text-[17px] font-bold leading-7">
                      {item.value}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-14 text-center">
          <p className="text-[14px] font-bold text-black">
            Copyright © 2026 by Sparrc Kinesiohealth Private Limited - All Right
            Reserved | Design & Developed by Ayatiworks
          </p>
        </div>
      </div>
    </footer>
  );
}