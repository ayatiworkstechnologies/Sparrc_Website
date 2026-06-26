import InnerBanner from "@/components/InnerBanner";
import DynamicDepartmentDetail from "@/components/Departments/DynamicDepartmentDetail";

const assessmentMenu = [
  {
    title: "Bio Mechanical Assessment",
    href: "/departments/assessments/bio-mechanical-assessment",
  },
  {
    title: "Musculoskeletal Assessment",
    href: "/departments/assessments/musculoskeletal-assessment",
  },
  {
    title: "Cardio Pulmonary Exercise Testing",
    href: "/departments/assessments/cardio-pulmonary-exercise-testing",
  },
  {
    title: "Running Gait Assessment",
    href: "/departments/assessments/running-gait-assessment",
  },
  {
    title: "Other Assessments",
    href: "/departments/assessments/other-assessments",
  },
];

export default function MusculoskeletalAssessmentPage() {
  return (
    <>
      <InnerBanner
        title="Musculoskeletal Assessment"
        bgImage="/images/page-banner-bg.png"
      />

      <DynamicDepartmentDetail
        title="Examination of the gait, arms, legs and spine is essential to discover any musculoskeletal abnormalities."
        sidebarItems={assessmentMenu}
        activeHref="/departments/assessments/musculoskeletal-assessment"
        showCTA
        cta={{
          icon: "sparkles",
          title: "Diagnose Better. Align Better. Move Better.",
          description:
            "Our musculoskeletal assessment evaluates bones, joints, muscles, posture and movement patterns to support accurate diagnosis and effective recovery planning.",
        }}
        sections={[
          {
            eyebrow: "Musculoskeletal Analysis",
            icon: "personStanding",
            content:
              "The musculoskeletal system is composed of muscles, bones, joints and the other connective tissue components that join these structures. The musculoskeletal system is the framework and mechanism by which the body performs all mechanical functions and movements. Each joint is designed to perform a specific set of motions with a complicated system of muscles, tendons, bursae, etc., to produce and facilitate delivery of the mechanical forces acting around the joint to effect the desired function. An abnormality in any of these structures will produce a misalignment or a malfunction.",
            image: "/images/musculoskeletal-assessment-1.png",
            imageType: "large",
            layout: "imageRight",
          },
          {
            eyebrow: "Clinical Assessment",
            icon: "stethoscope",
            content:
              "Musculoskeletal assessment therefore is key to making an accurate diagnosis and assessment of a patient. It includes performing an examination of the muscles, bones, and joints, using the classic techniques of observation, inspection, palpation, and manipulation and the multiple factors assessed include posture, muscle and neural tension, joint range of motion, balance and body fat measurement.",
            images: [
              "/images/musculoskeletal-assessment-2.png",
              "/images/musculoskeletal-assessment-3.png",
            ],
            layout: "carouselLeft",
            showFeatures: true,
            features: [
              {
                icon: "bone",
                title: "Bones & Joints",
              },
              {
                icon: "dumbbell",
                title: "Muscle Function",
              },
              {
                icon: "scan",
                title: "Accurate Diagnosis",
              },
              {
                icon: "footprints",
                title: "Posture & Balance",
              },
            ],
          },
        ]}
      />
    </>
  );
}