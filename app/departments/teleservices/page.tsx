"use client";

import { useState } from "react";
import InnerBanner from "@/components/InnerBanner";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "1. What is SPARRC Teleservice?",
    a: "Teleservice is an initiative form SPARRC where clients can directly talk to our doctors and physiotherapists through a video link",
  },
  {
    q: "2. Why through video chat why not in-person?",
    a: "Our Teleservice program is aimed for clients who are located in remote places or who cannot come to our centre in-person. No matter where you are, you can still stay connected with our doctors or physiotherapists.",
  },
  {
    q: "3. What are the services covered here under Teleservice program?",
    a: "Teleservice program here refers to remote non-clinical services like : Exercise management, patient queries, education, remote assistance etc.",
  },
  {
    q: "4. Does the program covers clinical activities like rehabilitation etc?",
    a: "No, Teleservice program is aimed in addressing only the non-clinical activities.",
  },
  {
    q: "5. Ok, how does Sparrc Teleservice work for me?",
    a: "SPARRC Teleservice Program enables the clients to continue their exercise prescription through a video-conference call with their Physical therapist / Fitness Advisor / Sports Physician from any part of the world.",
  },
  {
    q: "6. Do I need to install any apps to avail the service?",
    a: "No, You don’t have to install any apps, just click the link provided by our patient care executive. You will be able to connect with our Physician or Pain Specialist or Physiotherapist instantly",
  },
  {
    q: "7. Wow! that sounds very simple, what else needed from my side for initiating the video call?",
    a: "Smartphone with internet connection.",
  },
  {
    q: "8. Is there any other option available to reach out to doctor or physiotherapists other than the link provided?",
    a: "Yes you can also click the video camera icon on the chat box found in our website www.sparrc.com Our patient care executive would assist you through the process.",
  },
  {
    q: "9. Is it possible to resume my exercise prescription that was advised sometime ago ?",
    a: "Yes! We can assess and understand the current medical / musculoskeletal / exercise training history to redesign the prescription of exercise and nutrition to resume the Tele-Rehab Program.",
  },
  {
    q: "10. Do I need any equipment to do my exercises?",
    a: "Yes! We can assess and understand the current medical / musculoskeletal / exercise training history to redesign the prescription of exercise and nutrition to resume the Tele-Rehab Program.",
  },
  {
    q: "11. Can SPARRC Teleservice help me lose weight?",
    a: "Yes! We analyse the need of your musculoskeletal health and physical fitness to plan your exercise program. Weight management is crucial and adds to prognosis of a good musculoskeletal health. Therefore the prescription of exercise would include a healthy weight loss plan that also aims in improvement of general health and fitness.",
  },
];

export default function TeleservicesPage() {
  const [open, setOpen] = useState<number>(0);

  return (
    <>
      <InnerBanner title="Teleservices" bgImage="/images/page-banner-bg.png" />

      <section className="relative overflow-hidden bg-[#f7fbff] px-4 py-12 sm:px-6 lg:px-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#1268d6_1px,transparent_1px)] [background-size:26px_26px] opacity-[0.08]" />

        <div className="relative mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <p className="text-[12px] font-extrabold uppercase tracking-[0.16em] text-[#12b886]">
              SPARRC
            </p>
            <h1 className="mt-3 text-[32px] font-extrabold text-[#1268d6] md:text-[48px]">
              Teleservices
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-[#667085]">
              Connect with SPARRC doctors and physiotherapists through remote
              video assistance.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((item, index) => {
              const active = open === index;

              return (
                <div
                  key={item.q}
                  className="overflow-hidden rounded-[20px] border border-[#d9ebff] bg-white shadow-[0_14px_40px_rgba(18,104,214,0.07)]"
                >
                  <button
                    type="button"
                    onClick={() => setOpen(active ? -1 : index)}
                    className={`flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition ${
                      active
                        ? "bg-[linear-gradient(90deg,#eaf6ff,#effff8)]"
                        : "bg-white hover:bg-[#f4fbff]"
                    }`}
                  >
                    <span className="text-[15px] font-extrabold leading-6 text-[#1268d6] md:text-[17px]">
                      {item.q}
                    </span>

                    <ChevronDown
                      size={22}
                      className={`shrink-0 text-[#1268d6] transition-transform duration-300 ${
                        active ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {active && (
                    <div className="border-t border-[#e7f1ff] bg-[#eef8ff] px-5 py-5">
                      <p className="text-[14px] font-medium leading-7 text-[#4d5b70] md:text-[15px]">
                        {item.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}