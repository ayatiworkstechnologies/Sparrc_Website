import InnerBanner from "@/components/InnerBanner";
import ProfileVisionCard from "@/components/Teams/ProfileVisionCard";

const sumithaProfileContent = [
  <span key="sumitha-profile-1">
    Sumitha’s transformative and rewarding journey with SPARRC began in{" "}
    <strong className="font-semibold text-[#0C6792]">
      2012 as a Physiotherapist
    </strong>
    . Her dedication and hard work soon saw her become{" "}
    <strong className="font-semibold text-[#0C6792]">
      Centre Manager for two SPARRC centres
    </strong>
    . Currently{" "}
    <strong className="font-semibold text-[#0C6792]">
      General Manager – Operations
    </strong>
    , Sumitha is a stickler for perfection and ensures that quality service
    and care is provided by her team in all centres. Aligning to the vision of
    the organization brings her great motivation to do better each day and she
    believes that{" "}
    <strong className="font-semibold text-[#0C6792]">
      global growth for SPARRC
    </strong>{" "}
    is bound to happen. Professional team work with a holistic approach is
    what she thinks aids in giving efficient and best quality services to
    mankind.
  </span>,
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
        organization=""
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