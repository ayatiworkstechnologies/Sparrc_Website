"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  MapPin,
  Mail,
  Phone,
  Video,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";

type SubMenu = {
  label: string;
  slug: string;
};

type NavItem = {
  name: string;
  href: string;
  columns?: 1 | 2 | 3;
  dropdown?: SubMenu[];
};

const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Departments",
    href: "/departments",
    columns: 3,
    dropdown: [
      { label: "Assessments", slug: "assessments" },
      { label: "Pre and Post-Natal Fitness", slug: "pre-and-post-natal-fitness" },
      { label: "Women’s Fitness Medicine", slug: "womens-fitness-medicine" },
      { label: "Lifestyle Diseases Managements", slug: "lifestyle-diseases-managements" },
      { label: "Dance Medicine", slug: "dance-medicine" },
      { label: "Counselling", slug: "counselling" },
      { label: "Avoid Surgery Programs", slug: "avoid-surgery-programs" },
      { label: "House Calls", slug: "house-calls" },
      { label: "Pediatric Fitness Program", slug: "pediatric-fitness-program" },
      { label: "Sports Medicine", slug: "sports-medicine" },
      { label: "Pain Management", slug: "pain-management" },
      { label: "Professional Health Program", slug: "professional-health-program" },
      { label: "Rehabilitation", slug: "rehabilitation" },
      { label: "Weight Management", slug: "weight-management" },
      { label: "Fames For Differently Abled", slug: "fames-for-differently-abled" },
      { label: "Training Programs", slug: "training-programs" },
      { label: "Geriatric Fitness Medicine", slug: "geriatric-fitness-medicine" },
      { label: "Teleservices", slug: "teleservices" },
    ],
  },
  {
    name: "Therapies",
    href: "/therapies",
    columns: 2,
    dropdown: [
      { label: "MTPT", slug: "mtpt" },
      { label: "Prescription Exercise", slug: "prescription-exercise" },
      { label: "PEMF", slug: "pemf" },
      { label: "Sports Massage", slug: "sports-massage" },
      { label: "Physiotherapy", slug: "physiotherapy" },
      { label: "Aquatherapy", slug: "aquatherapy" },
      { label: "Group Therapy", slug: "group-therapy" },
      { label: "Kalaripayattu", slug: "kalaripayattu" },
      { label: "Yoga Therapy", slug: "yoga-therapy" },
      { label: "Alternate Therapy", slug: "alternate-therapy" },
      { label: "Functional Training", slug: "functional-training" },
    ],
  },
  { name: "Events", href: "/events" },
  {
    name: "Myofascial",
    href: "/myofascial",
    columns: 1,
    dropdown: [
      { label: "Internship", slug: "internship" },
      { label: "HFI-online", slug: "hfi-online" },
    ],
  },
  {
    name: "Story",
    href: "/story",
    columns: 1,
    dropdown: [
      { label: "Testimonials", slug: "testimonials" },
      { label: "Research", slug: "research" },
      { label: "IISM College", slug: "iism-college" },
      { label: "Privacy Policy", slug: "privacy-policy" },
      {
        label: "Refund / Cancellation / Return Policy",
        slug: "refund-cancellation-return-policy",
      },
      { label: "Terms and Conditions", slug: "terms-and-conditions" },
    ],
  },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<number | null>(null);
  const [hideTopbar, setHideTopbar] = useState(false);

  const pathname = usePathname();
  const isHome = pathname === "/";
  const headerWhite = !isHome || hideTopbar;

  useEffect(() => {
    const updateTopbar = () => {
      const y = window.scrollY;

      if (y > 24) {
        setHideTopbar(true);
        return;
      }

      if (y === 0) {
        setHideTopbar(false);
      }
    };

    updateTopbar();

    window.addEventListener("scroll", updateTopbar, { passive: true });

    return () => window.removeEventListener("scroll", updateTopbar);
  }, []);

  const subHref = (parentHref: string, slug: string) => `${parentHref}/${slug}`;

  const isParentActive = (item: NavItem) =>
    pathname === item.href || pathname.startsWith(`${item.href}/`);

  const isSubActive = (parentHref: string, slug: string) =>
    pathname === subHref(parentHref, slug);

  const dropdownBoxClass = (item: NavItem) => {
    if (item.columns === 3) return "w-[840px] -translate-x-1/2";
    if (item.columns === 2) return "w-[520px] -translate-x-1/2";
    return "w-[280px] -translate-x-1/2";
  };

  const gridClass = (item: NavItem) => {
    if (item.columns === 3) return "grid-cols-3";
    if (item.columns === 2) return "grid-cols-2";
    return "grid-cols-1";
  };

  return (
    <header
      className={`left-0 top-0 z-50 w-full transition-colors duration-500 ${
        isHome ? "fixed" : "sticky"
      } ${headerWhite ? "bg-white shadow-sm" : "bg-transparent"}`}
    >
      <div
        className={`hidden overflow-hidden transition-[height,opacity] duration-500 ease-out xl:block ${
          hideTopbar ? "h-0 opacity-0" : "h-[42px] opacity-100"
        } ${headerWhite ? "bg-white" : "bg-white/45 backdrop-blur-md"}`}
      >
        <div className="mx-auto flex h-[42px] max-w-[1600px] items-center justify-between px-10 text-[13px] text-black">
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-[#f15a24]" />
            <span>No 4, Alwarpet Street, Chennai 600018</span>
          </div>

          <div className="flex items-center gap-2">
            <Mail size={16} className="text-[#f15a24]" />
            <span>sparrc@gmail.com</span>
          </div>

          <div className="flex items-center gap-2">
            <Phone size={16} className="text-[#f15a24]" />
            <span>+ 91 965 965 0000</span>
          </div>

          <div className="flex items-center gap-2">
            <Video size={16} className="text-[#f15a24]" />
            <span>+91 9566111427</span>
          </div>
        </div>
      </div>

      <div className="mx-auto flex h-[88px] max-w-[1600px] items-center justify-between px-6 md:px-8 xl:px-10">
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/images/logo.png"
            alt="SPARRC"
            width={145}
            height={82}
            priority
            quality={100}
            className="h-auto w-[95px]"
          />
        </Link>

        <nav className="hidden items-center gap-7 xl:flex">
          {navItems.map((item) => {
            const active = isParentActive(item);

            return (
              <div key={item.name} className="group relative">
                <Link
                  href={item.href}
                  className={`flex items-center gap-2 rounded-full px-7 py-3 text-[15px] font-medium transition-all duration-300 ${
                    active
                      ? "bg-[linear-gradient(180deg,#286cba_0%,#3b55a5_55%,#524095_100%)] text-white shadow-[0_14px_30px_rgba(77,30,255,0.15)]"
                      : "text-black hover:text-[#4D1EFF]"
                  }`}
                >
                  {item.name}
                  {item.dropdown && (
                    <ChevronDown
                      size={16}
                      className="transition duration-300 group-hover:rotate-180"
                    />
                  )}
                </Link>

                {item.dropdown && (
                  <div
                    className={`invisible absolute left-1/2 top-full z-50 pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 ${dropdownBoxClass(
                      item
                    )}`}
                  >
                    <div
                      className={`grid gap-3 rounded-[22px] border border-[#eef2f7] bg-white/95 p-4 shadow-[0_24px_70px_rgba(15,23,42,0.16)] backdrop-blur-md ${gridClass(
                        item
                      )}`}
                    >
                      {item.dropdown.map((drop) => {
                        const href = subHref(item.href, drop.slug);
                        const activeDrop = isSubActive(item.href, drop.slug);

                        return (
                          <Link
                            key={drop.slug}
                            href={href}
                            className={`group/item flex items-center justify-between rounded-2xl px-4 py-3 text-[14px] leading-snug transition-all duration-300 ${
                              activeDrop
                                ? "bg-[#4D1EFF] text-white"
                                : "bg-[#f8fafc] text-slate-800 hover:bg-[#4D1EFF] hover:text-white"
                            }`}
                          >
                            <span>{drop.label}</span>
                            <ArrowRight
                              size={14}
                              className={`opacity-0 transition-all duration-300 group-hover/item:translate-x-1 group-hover/item:opacity-100 ${
                                activeDrop ? "opacity-100" : ""
                              }`}
                            />
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="rounded-xl bg-[#4D1EFF] p-3 text-white xl:hidden"
          aria-label="Toggle Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="mx-4 mb-4 max-h-[75vh] overflow-y-auto rounded-2xl bg-white p-5 shadow-xl xl:hidden">
          <div className="space-y-3">
            {navItems.map((item, index) => {
              const active = isParentActive(item);

              if (item.dropdown) {
                return (
                  <div key={item.name}>
                    <button
                      type="button"
                      onClick={() =>
                        setMobileDropdown(
                          mobileDropdown === index ? null : index
                        )
                      }
                      className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-medium ${
                        active
                          ? "bg-[#4D1EFF] text-white"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {item.name}
                      <ChevronDown
                        size={16}
                        className={`transition ${
                          mobileDropdown === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {mobileDropdown === index && (
                      <div className="mt-2 rounded-xl bg-gray-50 p-2">
                        {item.dropdown.map((drop) => {
                          const href = subHref(item.href, drop.slug);
                          const activeDrop = isSubActive(item.href, drop.slug);

                          return (
                            <Link
                              key={drop.slug}
                              href={href}
                              onClick={() => setOpen(false)}
                              className={`block rounded-lg px-4 py-3 text-sm ${
                                activeDrop
                                  ? "bg-[#4D1EFF] text-white"
                                  : "text-gray-700 hover:bg-white"
                              }`}
                            >
                              {drop.label}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-xl px-4 py-3 text-sm font-medium ${
                    active
                      ? "bg-[#4D1EFF] text-white"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}