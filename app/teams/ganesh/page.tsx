import InnerBanner from "@/components/InnerBanner";
import ProfileVisionCard from "@/components/Teams/ProfileVisionCard";

const ganeshProfileContent = [
  "Muthu Ganesh is the Chief Technology Officer at SPARRC, where he leads the development and deployment of technology platforms that support sports medicine, biomechanics, and rehabilitation services. With over two decades of experience in information technology and systems architecture, Ganesh has been instrumental in building SPARRC’s digital ecosystem. He has designed and developed key platforms including SPARRC’s Biomechanical Correction Software, Patient Management System, and AI-enabled helpdesk and patient record systems, enabling efficient clinical workflows and better data management across the organization. His work focuses on integrating biomechanics technology, patient data management, and automation tools that enhance decision-making and operational efficiency. He works closely with doctors and physiotherapists to ensure that technology supports accurate patient assessment, treatment tracking, and rehabilitation outcomes.",
  "Ganesh continues to drive innovation at SPARRC by introducing scalable digital platforms, intelligent automation, and AI-assisted systems that strengthen the organization’s ability to deliver advanced sports medicine and rehabilitation care.",
];

export default function GaneshPage() {
  return (
    <>
      <InnerBanner
        title="Ganesh"
        bgImage="/images/page-banner-bg.png"
      />

      <ProfileVisionCard
        visionLabel="Muthu Vision"
        name="Muthu Ganesh"
        role="Chief Technology Officer"
        organization="SPARRC"
        paragraphs={ganeshProfileContent}
        image="/images/team-3.png"
        imageAlt="Muthu Ganesh"
        designation="CTO, SPARRC"
        logoIcon="/icons/logo-icon.png"
        imagePosition="object-top"
      />
    </>
  );
}