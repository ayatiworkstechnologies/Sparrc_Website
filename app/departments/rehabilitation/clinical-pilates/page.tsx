import InnerBanner from "@/components/InnerBanner";
import DynamicDepartmentDetail from "@/components/Departments/DynamicDepartmentDetail";

const rehabilitationMenu = [
  {
    title: "Neuro Rehabilitation",
    href: "/departments/rehabilitation/neuro-rehabilitation",
  },
  {
    title: "Cardiac Rehabilitation",
    href: "/departments/rehabilitation/cardiac-rehabilitation",
  },
  {
    title: "Geriatric Rehabilitation",
    href: "/departments/rehabilitation/geriatric-rehabilitation",
  },
  {
    title: "Clinical Pilates",
    href: "/departments/rehabilitation/clinical-pilates",
  },
  {
    title: "Sports Rehabilitation",
    href: "/departments/rehabilitation/sports-rehabilitation",
  },
];

export default function ClinicalPilatesPage() {
  return (
    <>
      <InnerBanner title="Clinical Pilates" bgImage="/images/page-banner-bg.png" />

      <DynamicDepartmentDetail
        title="Improve posture, strength and efficient movement."
        activeHref="/departments/rehabilitation/clinical-pilates"
        sidebarItems={rehabilitationMenu}
        showCTA
        cta={{
          icon: "stretch",
          title: "Move Better. Strengthen Safely. Recover Smarter.",
          description:
            "Clinical Pilates supports posture, core strength, balance, flexibility and safe rehabilitation for injuries and musculoskeletal dysfunctions.",
        }}
        sections={[
          {
            eyebrow: "",
            icon: "",
            heading: "Clinical Pilates",
            content:
              "Clinical Pilates takes an individualized approach to treating injuries and other musculoskeletal dysfunctions. The system of Pilates, originally introduced by Joseph Pilates in the early 1900s, is a series of exercises that focuses on improving posture, core strength, balance, co-ordination and flexibility. Clinical Pilates is an adaptation of this system along with a knowledge of anatomy and physiology to treat injuries and conditions.",
            layout: "gradientCard",
          },
          {
            eyebrow: "",
            icon: "activity",
            heading: "Efficient Movement",
            content:
              "Pilates trains several muscle groups at once in smooth, continuous movements. By developing proper technique, you can re-train your body to move in safer, more efficient patterns of motion – required for recovery from injury, improving sports performance, good posture, resulting in optimal health.",
            image: "/images/clinical-pilates-1.png",
            imageType: "large",
            layout: "imageRight",
          },
          {
            eyebrow: "",
            icon: "heartHandshake",
            heading: "Role in Physiotherapy",
            content:
              "Many of the exercises are performed in reclining or sitting positions, and are low impact and partially weight bearing, which is useful in physical therapy to rehabilitate injuries. Modifications to the exercises allow for a range of difficulty, from beginner to advanced levels, by way of progression of exercises, thus achieving desired fitness goals.",
            layout: "gradientCard",
          },
        ]}
      />
    </>
  );
}