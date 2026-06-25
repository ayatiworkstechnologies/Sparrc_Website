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

export default function BioMechanicalAssessmentPage() {
  return (
    <>
      <InnerBanner
        title="Bio Mechanical Assessment"
        bgImage="/images/page-banner-bg.png"
      />

      <DynamicDepartmentDetail
        title="A biomechanical assessment is a critical analysis of the body and all of its moving parts."
        activeHref="/departments/assessments/bio-mechanical-assessment"
        sidebarItems={assessmentMenu}
        sections={[
          {
            content:
              "Biomechanics is the study of Human movement. Biomechanical assessment is the process of analysing the movements of upper body, lower body and spine and their interaction with each other during any functional activity. It is performed to determine specific abnormalities, to identify how the body compensates for these irregularities and to present ways to correct or completely eliminate the issues arising from such irregularities.",
            image: "/images/assessment-01.png",
            imageType: "large",
            layout: "imageRight",
          },
          {
            content:
              "Here at SPARRC we take into consideration several factors during assessment including the patient’s age, build, postural alignment, range of motion, occupation or sports engaged in, and their genetic predisposition to certain physical anomalies or deformities, if any. The results will be able to indicate the source of pain or the cause of any limb-related injury and direct individualised exercise program for the same with progression, re-assessment and follow ups as required.",
            images: ["/images/assessment-2.png", "/images/assessment-3.png"],
            layout: "galleryLeft",
          },
        ]}
      />
    </>
  );
}