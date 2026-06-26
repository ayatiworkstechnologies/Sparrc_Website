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

export default function RunningGaitAssessmentPage() {
  return (
    <>
      <InnerBanner
        title="Running Gait Assessment"
        bgImage="/images/page-banner-bg.png"
      />

      <DynamicDepartmentDetail
        title="Runners should do a gait assessment to prevent injuries and to pick the right kind of shoes that would suit their running style."
        sidebarItems={assessmentMenu}
        activeHref="/departments/assessments/running-gait-assessment"
        showCTA
        cta={{
          icon: "footprints",
          title: "Run Better. Prevent Injuries. Move Smarter.",
          description:
            "Our running gait assessment analyses movement, posture and running mechanics to support injury prevention, better performance and the right footwear choices.",
        }}
        sections={[
          {
            eyebrow: "Running Gait Analysis",
            icon: "footprints",
            content:
              "A running gait analysis is a tool used to assess the way in which you run. It involves the identification of bio-mechanical abnormalities in the running pattern or gait cycle, musculoskeletal misalignments, discordant posture or movement , and aids in narrowing down the diagnosis to prescribe right treatment and techniques.",
            image: "/images/running-gait-assessment-1.png",
            imageType: "large",
            layout: "imageRight",
          },
          {
            eyebrow: "Kinetic & Kinematic Analysis",
            icon: "scan",
            content:
              "We at SPARRC provide a comprehensive work- up of the same with a detailed kinetic and kinematic analysis which helps us to understand and improve running posture, body positioning, breathing techniques, endurance, efficiency in order to reduce risk of injury.",
            images: [
              "/images/running-gait-assessment-2.png",
              "/images/running-gait-assessment-3.png",
            ],
            layout: "carouselLeft",
            showFeatures: true,
            features: [
              {
                icon: "footprints",
                title: "Gait Cycle",
              },
              {
                icon: "personStanding",
                title: "Posture Check",
              },
              {
                icon: "scan",
                title: "Motion Analysis",
              },
              {
                icon: "shield",
                title: "Injury Prevention",
              },
            ],
          },
        ]}
      />
    </>
  );
}