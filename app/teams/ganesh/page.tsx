import InnerBanner from "@/components/InnerBanner";
import ProfileVisionCard from "@/components/Teams/ProfileVisionCard";

const ganeshProfileContent = [
  <span key="ganesh-profile-1">
    Muthu Ganesh is the{" "}
    <strong className="font-semibold text-[#0C6792]">
      Chief Technology Officer at SPARRC
    </strong>
    , where he leads the development and deployment of technology
    platforms that support sports medicine, biomechanics, and
    rehabilitation services. With{" "}
    <strong className="font-semibold text-[#0C6792]">
      over two decades of experience in information technology and
      systems architecture
    </strong>
    , Ganesh has been instrumental in building SPARRC’s digital
    ecosystem. He has designed and developed key platforms including{" "}
    <strong className="font-semibold text-[#0C6792]">
      SPARRC’s Biomechanical Correction Software, Patient Management
      System, and AI-enabled helpdesk and patient record systems
    </strong>
    , enabling efficient clinical workflows and better data management
    across the organization. His work focuses on integrating
    biomechanics technology, patient data management, and automation
    tools that enhance decision-making and operational efficiency. He
    works closely with doctors and physiotherapists to ensure that
    technology supports accurate patient assessment, treatment
    tracking, and rehabilitation outcomes.
  </span>,

  <span key="ganesh-profile-2">
    Ganesh continues to drive innovation at SPARRC by introducing{" "}
    <strong className="font-semibold text-[#0C6792]">
      scalable digital platforms, intelligent automation, and
      AI-assisted systems
    </strong>{" "}
    that strengthen the organization’s ability to deliver advanced
    sports medicine and rehabilitation care.
  </span>,
];

export default function GaneshPage() {
  return (
    <>
      <InnerBanner
        title="Muthu Ganesh"
        bgImage="/images/page-banner-bg.png"
      />

      <ProfileVisionCard
        visionLabel="Muthu Vision"
        name="Muthu Ganesh"
        role=""
        organization=""
        paragraphs={ganeshProfileContent}
        image="/images/team-3.png"
        imageAlt="Muthu Ganesh"
        designation="Chief Technology Officer – SPARRC"
        logoIcon="/icons/logo-icon.png"
        imagePosition="object-top"
      />
    </>
  );
}