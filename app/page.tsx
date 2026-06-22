import About from "@/components/Homepage/About";
import Locations from "@/components/Homepage/Locations";
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

      {/* {Location Map section} */}
      <Locations />
     
    </main>
  );
}