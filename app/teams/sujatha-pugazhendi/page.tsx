import InnerBanner from "@/components/InnerBanner";
import QualificationAwardsSection from "@/components/Teams/SujathaPugazhendi/QualificationAwardsSection";
import SkillsExperienceSection from "@/components/Teams/SujathaPugazhendi/SkillsExperienceSection";
import SujathaVisionSection from "@/components/Teams/SujathaPugazhendi/SujathaVisionSection";

export default function SujathaPugazhendiPage() {
  return (
    <>
      <InnerBanner
        title="Sujatha Pugazhendi"
        bgImage="/images/page-banner-bg.png"
      />

     <SujathaVisionSection />

     <SkillsExperienceSection />

     <QualificationAwardsSection />
    </>
  );
}