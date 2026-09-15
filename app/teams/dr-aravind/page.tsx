import InnerBanner from "@/components/InnerBanner";
import ProfileVisionCard from "@/components/Teams/ProfileVisionCard";

const drAravindProfileContent = [
  <span key="dr-aravind-profile-1">
    Dr. Aravind is a{" "}
    <strong className="font-semibold text-[#0C6792]">
      Primary Care Physician
    </strong>
    , currently pursuing his fellowship in{" "}
    <strong className="font-semibold text-[#0C6792]">
      Fitness medicine and lifestyle diseases management
    </strong>
    . He graduated from Sree Balaji Medical college &amp; Hospital in 2013
    and completed his{" "}
    <strong className="font-semibold text-[#0C6792]">
      Post-Graduate Diploma in Sports Medicine at the International Olympic
      committee (IOC) in 2019
    </strong>
    . As the primary-care Physician for the SPARRC Sports Medicine Team, he is
    involved in diagnosing, treating and rehabilitating patients with different
    musculoskeletal disorders and sporting injuries. He is also a faculty at
    the{" "}
    <strong className="font-semibold text-[#0C6792]">
      Indian Institute of Sports Medicine
    </strong>
    . He is an avid fitness enthusiast and a football player, which inspired
    his foray into the field of Sports, Exercise and Fitness Medicine.
  </span>,
];

export default function DrAravindPage() {
  return (
    <>
      <InnerBanner
        title="Dr. Aravind"
        bgImage="/images/page-banner-bg.png"
      />

      <ProfileVisionCard
        visionLabel="Dr. Aravind Vision"
        name="Dr. Aravind"
        role=""
        organization=""
        paragraphs={drAravindProfileContent}
        image="/images/team-5.png"
        imageAlt="Dr. Aravind"
        designation="Primary Care Physician"
        logoIcon="/icons/logo-icon.png"
        imagePosition="object-center"
      />
    </>
  );
}