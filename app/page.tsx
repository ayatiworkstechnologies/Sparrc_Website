import About from "@/components/Homepage/About";
import FeaturedServices from "@/components/Homepage/FeaturedServices";
import Locations from "@/components/Homepage/Locations";
import ManagementTeam from "@/components/Homepage/ManagementTeam";
import PatientTestimonials from "@/components/Homepage/PatientTestimonials";
import WhatWeDo from "@/components/Homepage/What-we-do";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white">
      <section className="relative w-full  overflow-hidden bg-white">
        {/* Mobile Banner */}
        <Image
          src="/images/mobile-homebanner.png"
          alt="SPARRC Mobile Banner"
          width={768}
          height={900}
          priority
          sizes="100vw"
          className="block h-auto w-full object-contain md:hidden"
        />

        {/* Tablet / Desktop Banner */}
        <Image
          src="/images/banner-desktop.png"
          alt="SPARRC Desktop Banner"
          width={1920}
          height={800}
          priority
          sizes="100vw"
          className="hidden h-auto w-full object-contain md:block"
        />
      </section>

      {/* {What we do section} */}
      <WhatWeDo />
      {/* {About us section} */}
      <About />

      {/* {Featured service section} */}
      <FeaturedServices />

      {/* {Patient Testimonials Section} */}
      <PatientTestimonials />
      {/* {Management Team section} */}
      <ManagementTeam />

      {/* {Location Map section} */}
      <Locations />

    </main>
  );
}