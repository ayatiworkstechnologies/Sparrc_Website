import About from "@/components/Homepage/About";
import AssessmentExerciseLab from "@/components/Homepage/AssessmentExerciseLab";
import FeaturedServices from "@/components/Homepage/FeaturedServices";
import Locations from "@/components/Homepage/Locations";
import ManagementTeam from "@/components/Homepage/ManagementTeam";
import PatientTestimonials from "@/components/Homepage/PatientTestimonials";
import RecoveryCTA from "@/components/Homepage/RecoveryCTA";
import SparrcMovementMatrix from "@/components/Homepage/SparrcMovementMatrix";
import SportsFitnessMedicineTraining from "@/components/Homepage/SportsFitnessMedicineTraining";
import TestTreatTrain from "@/components/Homepage/TestTreatTrain";
import WhatWeBelieves from "@/components/Homepage/What-we-believe";
import WhatWeDo from "@/components/Homepage/What-we-believe";
import WhoWeAreSparrc from "@/components/Homepage/WhoWeAreSparrc";
import WomanBehindSparrc from "@/components/Homepage/WomanBehindSparrc";
import WhoWeAreSection from "@/mobile-src/component/Aboutpage/WhoWeAreSection";
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

      {/* Who we are */}
      <WhoWeAreSparrc />

      
      {/* {About us section} */}
      <About />

      {/* {What we do section} */}
      <WhatWeBelieves />  


      {/* Methodology -Test Trest Train */}
      <TestTreatTrain />

       {/* AssessmentExerciseLab */}
       <AssessmentExerciseLab />

      {/* {Featured service section} */}
      <FeaturedServices />

      {/* SportsFitnessMedicineTraining */}
       <SportsFitnessMedicineTraining />

       {/* WomanBehindSparrc */}
       <WomanBehindSparrc />

       {/* SparrcMovementMatrix */}
       <SparrcMovementMatrix />

      {/* {Patient Testimonials Section} */}
      <PatientTestimonials />
      {/* {Management Team section} */}
      <ManagementTeam />

      {/* {Location Map section} */}
      <Locations />

      {/* {Recovery CTA section} */}
      <RecoveryCTA />

    </main>
  );
}