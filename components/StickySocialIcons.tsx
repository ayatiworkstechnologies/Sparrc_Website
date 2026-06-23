"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const socialIcons = [
  { name: "Facebook", icon: "/icons/facebook.svg", href: "#" },
  { name: "X", icon: "/icons/x.svg", href: "#" },
  { name: "Instagram", icon: "/icons/instagram.svg", href: "#" },
  { name: "LinkedIn", icon: "/icons/linkedin.svg", href: "#" },
  { name: "YouTube", icon: "/icons/youtube.svg", href: "#" },
];

export default function StickySocialIcons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 350);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Right Sticky Social Icons */}
      <div className="fixed right-2 top-1/2 z-[999] flex -translate-y-1/2 flex-col gap-2 sm:right-4 sm:gap-3 lg:right-5">
        {socialIcons.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.name}
            className="group flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(77,30,255,0.22)] sm:h-10 sm:w-10 lg:h-11 lg:w-11"
          >
            <Image
              src={item.icon}
              alt={item.name}
              width={20}
              height={20}
              className="h-4 w-4 object-contain transition duration-300 group-hover:scale-110 sm:h-5 sm:w-5"
            />
          </Link>
        ))}
      </div>

      {/* Bottom Right Scroll To Top */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`fixed bottom-4 right-4 z-[999] flex h-11 w-11 items-center justify-center rounded-full bg-[#4D1EFF] text-white shadow-[0_12px_35px_rgba(77,30,255,0.38)] transition-all duration-500 hover:-translate-y-1 hover:bg-[#f15a24] sm:h-12 sm:w-12 ${
          showTop
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-6 opacity-0"
        }`}
      >
        <span className="absolute inset-0 rounded-full bg-white/20 animate-ping" />
        <ArrowUp size={22} className="relative z-10" />
      </button>
    </>
  );
}