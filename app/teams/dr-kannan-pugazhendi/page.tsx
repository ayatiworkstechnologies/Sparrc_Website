import InnerBanner from "@/components/InnerBanner";
import KannanVisionSection from "@/components/Teams/DrKannanPugazhendi/KannanVisionSection";
import PathbreakingInitiativesSection from "@/components/Teams/DrKannanPugazhendi/PathbreakingInitiativesSection";
import SparrcGenesisSection from "@/components/Teams/DrKannanPugazhendi/SparrcGenesisSection";


export default function DrKannanPugazhendiPage() {
  return (
    <>
      <InnerBanner
        title="Dr. Kannan Pugazhendi"
        bgImage="/images/page-banner-bg.png"
      />

      <KannanVisionSection />

      <SparrcGenesisSection />

      <PathbreakingInitiativesSection />

     
    </>
  );
}