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
      <section className="relative h-[520px] overflow-hidden md:h-[620px]">
        <Image
          src="/images/banner.png"
          alt="SPARRC Banner"
          fill
          priority
          className="object-cover object-center"
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