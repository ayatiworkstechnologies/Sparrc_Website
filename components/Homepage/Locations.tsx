"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin } from "lucide-react";
import { useState } from "react";

const locations = [
  {
    name: "CHENNAI",
    areas:
      "Alwarpet, ECR, Anna Nagar, Mount Road, Ashok Nagar, Velachery, Besant Nagar, Chromepet",
    point: { top: "82%", left: "42%" },
  },
  {
    name: "BENGALURU",
    areas: "Whitefield, Indira Nagar, Jaya Nagar",
    point: { top: "81%", left: "33%" },
  },
  {
    name: "MADURAI",
    areas: "Madurai",
    point: { top: "90%", left: "36%" },
  },
  {
    name: "TIRUPPUR",
    areas: "Tiruppur",
    point: { top: "88%", left: "36%" },
  },
  {
    name: "MUMBAI",
    areas: "Mumbai",
    point: { top: "63%", left: "20%" },
  },
  {
    name: "COIMBATORE",
    areas: "Avinashi Road, R.SPuram",
    point: { top: "88%", left: "34%" },
  },
  {
    name: "HYDERABAD",
    areas: "Hyderabad",
    point: { top: "68%", left: "37%" },
  },
  {
    name: "PUDUCHERRY",
    areas: "Puducherry",
    point: { top: "84%", left: "41%" },
  },
  {
    name: "NEW DELHI",
    areas: "New Delhi",
    point: { top: "32%", left: "32%" },
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

function PulseDot() {
  return (
    <span className="relative flex h-5 w-5 items-center justify-center rounded-full bg-[#4D1EFF]">
      <motion.span
        animate={{ scale: [1, 2.5], opacity: [0.42, 0] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: "easeOut" }}
        className="absolute h-5 w-5 rounded-full bg-[#4D1EFF]"
      />
      <motion.span
        animate={{ scale: [1, 3.2], opacity: [0.26, 0] }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeOut",
          delay: 0.35,
        }}
        className="absolute h-5 w-5 rounded-full bg-[#4D1EFF]"
      />
      <span className="relative h-2.5 w-2.5 rounded-full bg-white" />
    </span>
  );
}

export default function Locations() {
  const [active, setActive] = useState(locations[0]);
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <section className="overflow-hidden bg-white px-4 py-12 sm:px-6 md:px-10 md:py-16 lg:px-16 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* MOBILE / TABLET */}
        <div className="lg:hidden">
          <motion.div
            initial={{ y: 35, opacity: 0, filter: "blur(8px)" }}
            whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 1, ease }}
            className="text-center"
          >
            <p className="mb-3 text-[14px] text-black">Locations</p>

            <h2 className="mx-auto max-w-[620px] text-[30px] font-extrabold leading-[1.18] text-black sm:text-[38px] md:text-[44px]">
              SPARRC brings trusted medical knowledge for healthier living.
            </h2>
          </motion.div>

          <motion.div
            initial={{ y: 35, opacity: 0, filter: "blur(8px)" }}
            whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 1.1, delay: 0.12, ease }}
            className="relative mx-auto mt-8 w-full max-w-[270px] sm:max-w-[340px] md:max-w-[390px]"
          >
            <Image
              src="/images/india-map.png"
              alt="SPARRC Locations Map"
              width={430}
              height={520}
              className="h-auto w-full object-contain"
            />

            <motion.button
              key={active.name}
              type="button"
              style={{
                top: active.point.top,
                left: active.point.left,
              }}
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.35, ease }}
              className="absolute z-10 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center"
              aria-label={active.name}
            >
              <PulseDot />
            </motion.button>
          </motion.div>

          <motion.div
            key={active.name}
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.35, ease }}
            className="mx-auto mt-5 max-w-[520px] rounded-2xl border border-[#4D1EFF]/15 bg-[#f4f0ff] p-4 shadow-[0_14px_35px_rgba(77,30,255,0.12)]"
          >
            <div className="flex items-center justify-center gap-2">
              <MapPin size={20} className="text-[#4D1EFF]" />
              <h3 className="text-[16px] font-extrabold text-[#4D1EFF]">
                {active.name}
              </h3>
            </div>

            <p className="mt-2 text-center text-[13px] leading-6 text-gray-600">
              {active.areas}
            </p>
          </motion.div>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {locations.map((item) => (
              <button
                key={item.name}
                type="button"
                onClick={() => setActive(item)}
                className={`rounded-2xl border px-4 py-3 text-left transition ${
                  active.name === item.name
                    ? "border-[#4D1EFF] bg-[#f4f0ff] shadow-[0_12px_30px_rgba(77,30,255,0.12)]"
                    : "border-gray-100 bg-white shadow-sm"
                }`}
              >
                <div className="flex items-center gap-2">
                  <MapPin
                    size={18}
                    className={
                      active.name === item.name
                        ? "text-[#4D1EFF]"
                        : "text-[#ff3d18]"
                    }
                  />

                  <h3
                    className={`text-[12px] font-extrabold sm:text-[13px] ${
                      active.name === item.name
                        ? "text-[#4D1EFF]"
                        : "text-black"
                    }`}
                  >
                    {item.name}
                  </h3>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* DESKTOP / LAPTOP */}
        <div className="hidden items-center gap-16 lg:grid lg:grid-cols-[42%_58%]">
          <motion.div
            initial={{ x: -80, opacity: 0, filter: "blur(8px)" }}
            whileInView={{ x: 0, opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 1.3, ease }}
            className="relative mx-auto w-full max-w-[430px]"
          >
            <Image
              src="/images/india-map.png"
              alt="SPARRC Locations Map"
              width={430}
              height={520}
              className="h-auto w-full object-contain"
            />

            <div
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            >
              <button
                type="button"
                style={{
                  top: active.point.top,
                  left: active.point.left,
                }}
                className="absolute z-10 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center"
                aria-label={active.name}
              >
                <PulseDot />
              </button>

              <AnimatePresence>
                {showTooltip && (
                  <motion.div
                    initial={{ opacity: 0, x: -6, scale: 0.96 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -6, scale: 0.96 }}
                    transition={{ duration: 0.2, ease }}
                    style={{
                      top: active.point.top,
                      left: active.point.left,
                    }}
                    className="pointer-events-none absolute z-20 ml-4 w-[185px] -translate-y-1/2 rounded-xl bg-white p-3 shadow-[0_14px_34px_rgba(77,30,255,0.16)] ring-1 ring-[#4D1EFF]/10"
                  >
                    <div className="flex items-center gap-2">
                      <MapPin size={15} className="text-[#4D1EFF]" />
                      <h4 className="text-[13px] font-extrabold text-[#4D1EFF]">
                        {active.name}
                      </h4>
                    </div>

                    <p className="mt-1.5 text-[12px] leading-5 text-gray-600">
                      {active.areas}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 80, opacity: 0, filter: "blur(8px)" }}
            whileInView={{ x: 0, opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 1.3, delay: 0.15, ease }}
          >
            <p className="mb-8 text-[15px] text-black">Locations</p>

            <h2 className="max-w-[760px] text-[36px] font-extrabold leading-[1.3] text-black">
              SPARRC brings trusted medical knowledge for healthier living.
            </h2>

            <div className="mt-8 grid gap-x-16 gap-y-8 md:grid-cols-2">
              {locations.map((item) => (
                <button
                  key={item.name}
                  onClick={() => setActive(item)}
                  className="group text-left"
                >
                  <div className="flex items-center gap-4">
                    <MapPin
                      size={30}
                      className={`transition ${
                        active.name === item.name
                          ? "text-[#4D1EFF]"
                          : "text-[#ff3d18] group-hover:text-[#4D1EFF]"
                      }`}
                    />

                    <h3
                      className={`text-[20px] font-semibold transition ${
                        active.name === item.name
                          ? "text-[#4D1EFF]"
                          : "text-black group-hover:text-[#4D1EFF]"
                      }`}
                    >
                      {item.name}
                    </h3>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}