import InnerBanner from "@/components/InnerBanner";
import ProfileVisionCard from "@/components/Teams/ProfileVisionCard";

const drAravindProfileContent = [
  "Dr. Aravind is a Primary Care Physician, currently pursuing his fellowship in Fitness medicine and lifestyle diseases management. He graduated from Sree Balaji Medical college & Hospital in 2013 and has completed his Post-Graduate Diploma in Sports Medicine at the International Olympic committee (IOC) in 2019. As the primary-care Physician for SPARRC Sports Medicine Team, he is involved in diagnosing, treating and rehabilitating patients with different musculoskeletal disorders and sporting injuries. He is also a faculty at the Indian Institute of Sports Medicine. He is an avid fitness enthusiast and a football player, which inspired his foray into the field of Sports, Exercise and Fitness Medicine.",
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
        paragraphs={drAravindProfileContent}
        image="/images/team-5.png"
        imageAlt="Dr. Aravind"
        designation="Primary Care Physician, SPARRC"
        logoIcon="/icons/logo-icon.png"
        imagePosition="object-center"
      />
    </>
  );
}