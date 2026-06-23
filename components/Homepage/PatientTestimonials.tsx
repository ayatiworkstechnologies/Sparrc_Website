"use client";

import Image from "next/image";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Ms. Shriya Srivatsan",
    role: "Beauty Pageant Winner",
    image: "/images/patient-1.png",
    message:
      "I have to say I couldn’t have done this without the support, help and training given by my trainer (Jai Prakash) and the entire team at SPARRC, Besant Nagar",
  },
  {
    name: "Alagammai Muthiah",
    role: "Avoided Surgery",
    image: "/images/patient-2.png",
    message:
      "Following a road traffic accident, I had injured my knees and had an open wound in the right leg. I thank Doc and entire SPARRC team, that I could avoid surgeries. All of the staff were really good and helpful.",
  },
  {
    name: "Mrs Anandhi",
    role: "Multiple Problems",
    image: "/images/patient-1.png",
    message:
      "I had suffered with low back pain, hip and toe pain and also shoulder pain for more than 10 long years. 2 years ago, I was detected with breast cancer and underwent radical mastectomy. After treatment and rehabilitation at SPARRC, I am now able to do all my activities independently.",
  },
  {
    name: "Col. T.S.Mehra",
    role: "Chronic Pain",
    image: "/images/patient-2.png",
    message:
      "I thank SPARRC Mount Road for providing the right treatment and helping me recover from all the long existing pain I had.",
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function PatientTestimonials() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateButtons = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    const maxScrollLeft = slider.scrollWidth - slider.clientWidth;

    setAtStart(slider.scrollLeft <= 2);
    setAtEnd(slider.scrollLeft >= maxScrollLeft - 2);
  };

  useEffect(() => {
    updateButtons();

    const slider = sliderRef.current;
    if (!slider) return;

    slider.addEventListener("scroll", updateButtons);
    window.addEventListener("resize", updateButtons);

    return () => {
      slider.removeEventListener("scroll", updateButtons);
      window.removeEventListener("resize", updateButtons);
    };
  }, []);

  const scrollSlider = (direction: "left" | "right") => {
    const slider = sliderRef.current;
    if (!slider) return;

    const card = slider.querySelector("[data-card='testimonial']");
    const cardWidth = card instanceof HTMLElement ? card.offsetWidth + 24 : 390;

    slider.scrollBy({
      left: direction === "right" ? cardWidth : -cardWidth,
      behavior: "smooth",
    });

    setTimeout(updateButtons, 450);
  };

  const arrowButtonClass =
    "flex h-11 w-11 items-center justify-center rounded-full border transition";

  return (
    <section className="overflow-hidden bg-white px-6 py-20 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ y: 60, opacity: 0, filter: "blur(8px)" }}
          whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.1, ease }}
          className="flex items-end justify-between gap-6"
        >
          <div>
            <motion.p
              initial={{ y: 25, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15, ease }}
              className="text-[13px] font-bold uppercase text-black"
            >
              Patient Testimonials
            </motion.p>

            <motion.h2
              initial={{ y: 35, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.25, ease }}
              className="mt-5 max-w-[530px] text-[32px] font-extrabold leading-tight text-black md:text-[46px]"
            >
              Patient Experiences That Inspire Confidence
            </motion.h2>
          </div>

          <motion.div
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.45, ease }}
            className="hidden items-center gap-3 md:flex"
          >
            <button
              onClick={() => scrollSlider("left")}
              disabled={atStart}
              className={`${arrowButtonClass} ${
                atStart
                  ? "cursor-not-allowed border-gray-100 text-gray-300"
                  : "cursor-pointer border-gray-200 text-black hover:bg-[#4D1EFF] hover:text-white"
              }`}
            >
              <ChevronLeft size={22} />
            </button>

            <button
              onClick={() => scrollSlider("right")}
              disabled={atEnd}
              className={`${arrowButtonClass} ${
                atEnd
                  ? "cursor-not-allowed border-gray-100 text-gray-300"
                  : "cursor-pointer border-gray-200 text-black hover:bg-[#4D1EFF] hover:text-white"
              }`}
            >
              <ChevronRight size={22} />
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ y: 80, opacity: 0, filter: "blur(10px)" }}
          whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1.25, delay: 0.25, ease }}
          className="mt-14"
        >
          <div
            ref={sliderRef}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-6 pt-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {testimonials.map((item, index) => (
              <motion.div
                key={index}
                data-card="testimonial"
                initial={{ y: 45, opacity: 0, scale: 0.96 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.9,
                  delay: index * 0.12,
                  ease,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.01,
                }}
                className="min-h-[300px] w-full shrink-0 snap-start rounded-2xl border border-gray-100 bg-white p-7 transition-shadow duration-300 hover:shadow-[0_18px_45px_rgba(0,0,0,0.10)] md:w-[calc((100%-24px)/2)] lg:w-[380px]"
              >
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: 0.25 + index * 0.1,
                    ease,
                  }}
                  className="flex gap-1 text-[#ffb000]"
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </motion.div>

                <p className="mt-8 text-[14px] font-medium leading-7 text-black">
                  “{item.message}”
                </p>

                <div className="mt-8 flex items-center gap-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={36}
                    height={36}
                    className="h-9 w-9 rounded-full object-cover"
                  />

                  <div>
                    <h3 className="text-[14px] font-extrabold text-black">
                      {item.name}
                    </h3>
                    <p className="mt-1 text-[12px] font-medium text-[#286cba]">
                      {item.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 25, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease }}
          className="mt-6 flex items-center justify-center gap-3 md:hidden"
        >
          <button
            onClick={() => scrollSlider("left")}
            disabled={atStart}
            className={`${arrowButtonClass} ${
              atStart
                ? "cursor-not-allowed border-gray-100 text-gray-300"
                : "cursor-pointer border-gray-200 text-black hover:bg-[#4D1EFF] hover:text-white"
            }`}
          >
            <ChevronLeft size={22} />
          </button>

          <button
            onClick={() => scrollSlider("right")}
            disabled={atEnd}
            className={`${arrowButtonClass} ${
              atEnd
                ? "cursor-not-allowed border-gray-100 text-gray-300"
                : "cursor-pointer border-gray-200 text-black hover:bg-[#4D1EFF] hover:text-white"
            }`}
          >
            <ChevronRight size={22} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}