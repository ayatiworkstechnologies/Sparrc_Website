"use client";

import Image from "next/image";
import { motion } from "framer-motion";
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
    point: {  top: "88%", left: "36%" },
  },
  {
    name: "MUMBAI",
    areas: "Mumbai",
    point: { top: "63%", left: "20%" },
  },
  {
    name: "COIMBATORE",
    areas: "Avinashi Road, R.SPuram",
    point: { top: "88%", left: "34%"  },
  },
  {
    name: "HYDERABAD",
    areas: "Hyderabad",
    point: { top: "68%", left: "37%" },
  },
  {
    name: "PUDUCHERRY",
    areas: "Puducherry",
    point: { top: "84%", left: "41%"},
  },
  {
    name: "NEW DELHI",
    areas: "New Delhi",
    point: { top: "32%", left: "32%" },
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function Locations() {
  const [active, setActive] = useState(locations[0]);

  return (
    <section className="overflow-hidden bg-white px-6 py-20 md:px-10 lg:px-16">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[42%_58%]">
        {/* Map */}
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

          {/* Active Point Only */}
          <motion.button
            key={active.name}
            onClick={() => setActive(active)}
            style={{
              top: active.point.top,
              left: active.point.left,
            }}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.45, ease }}
            className="absolute z-10 flex h-5 w-5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#4D1EFF]"
            aria-label={active.name}
          >
            <span className="absolute h-5 w-5 rounded-full bg-[#4D1EFF]" />

            <motion.span
              animate={{
                scale: [1, 2.6],
                opacity: [0.45, 0],
              }}
              transition={{
                duration: 1.4,
                repeat: Infinity,
                ease: "easeOut",
              }}
              className="absolute h-5 w-5 rounded-full bg-[#4D1EFF]"
            />

            <motion.span
              animate={{
                scale: [1, 3.4],
                opacity: [0.3, 0],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeOut",
                delay: 0.35,
              }}
              className="absolute h-5 w-5 rounded-full bg-[#4D1EFF]"
            />

            <span className="relative h-2.5 w-2.5 rounded-full bg-white" />
          </motion.button>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ x: 80, opacity: 0, filter: "blur(8px)" }}
          whileInView={{ x: 0, opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 1.3, delay: 0.15, ease }}
        >
          <p className="mb-8 text-[15px] text-black">Locations</p>

          <h2 className="max-w-[760px] text-[36px] font-extrabold leading-[1.3] text-black md:text-[52px]">
            SPARRC brings trusted medical knowledge for healthier living.
          </h2>

          <div className="mt-10 grid gap-x-16 gap-y-8 md:grid-cols-2">
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
                    className={`text-[22px] font-extrabold transition ${
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

          <motion.div
            key={active.name}
            initial={{ y: 25, opacity: 0, filter: "blur(6px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.6, ease }}
            className="mt-10 rounded-3xl bg-[#f7f7f7] p-7"
          >
            <div className="flex items-center gap-4">
              <MapPin size={30} className="text-[#4D1EFF]" />
              <h3 className="text-[24px] font-extrabold text-[#4D1EFF]">
                {active.name}
              </h3>
            </div>

            <p className="mt-5 text-[17px] leading-8 text-gray-600">
              {active.areas}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}