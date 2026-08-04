"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const socialIcons = [
  {
    name: "Facebook",
    icon: "/icons/facebook-1.svg",
    href: "https://www.facebook.com/SparrcInstitute/",
  },
  {
    name: "X",
    icon: "/icons/x-1.svg",
    href: "https://twitter.com/sparrcinstitute",
  },
  {
    name: "Instagram",
    icon: "/icons/instagram-1.svg",
    href: "https://www.instagram.com/sparrcinstitute/",
  },
  {
    name: "LinkedIn",
    icon: "/icons/linkedin-1.svg",
    href: "https://www.linkedin.com/company/sparrc/",
  },
  {
    name: "YouTube",
    icon: "/icons/youtube-1.svg",
    href: "https://www.youtube.com/@Sparrc",
  },
];

export default function StickySocialIcons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 350);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Right Sticky Social Icons */}
      <div className="fixed right-3 top-1/2 z-[999] flex -translate-y-1/2 flex-col items-center gap-4 sm:right-4 lg:right-5">
        {socialIcons.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.name}
            className="group flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:scale-110"
          >
            <Image
              src={item.icon}
              alt={item.name}
              width={24}
              height={24}
              className="h-6 w-6 object-contain opacity-85 transition-all duration-300 group-hover:opacity-100 sm:h-[22px] sm:w-[22px] lg:h-7 lg:w-7"
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
        <span className="absolute inset-0 animate-ping rounded-full bg-white/20" />

        <ArrowUp
          size={22}
          className="relative z-10"
        />
      </button>
    </>
  );
}