import InnerBanner from "@/components/InnerBanner";
import ProfileVisionCard from "@/components/Teams/ProfileVisionCard";

const sumithaProfileContent = [
  "Sumitha’s transformative and rewarding journey with SPARRC began in 2012 as a Physiotherapist. Her dedication and hard work soon saw her become Centre Manager for two SPARRC centres. Currently General Manager- Operations, Sumitha is a stickler for perfection and ensures that quality service and care is provided by her team in all centres. Aligning to the vision of the organization brings her great motivation to do better each day and she believes that global growth for SPARRC is bound to happen. Professional team work with a holistic approach is what she thinks aids in giving efficient and best quality services to mankind.",
];

export default function SumithaPage() {
  return (
    <>
      <InnerBanner
        title="Sumitha"
        bgImage="/images/page-banner-bg.png"
      />

      <ProfileVisionCard
        visionLabel="Sumitha Vision"
        name="Sumitha"
        role=""
        paragraphs={sumithaProfileContent}
        image="/images/team-4.png"
        imageAlt="Sumitha"
        designation="General Manager, SPARRC"
        logoIcon="/icons/logo-icon.png"
        imagePosition="object-center"
      />
    </>
  );
}