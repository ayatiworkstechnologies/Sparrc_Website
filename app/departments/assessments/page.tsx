import DynamicDepartmentCards from "@/components/Departments/DynamicDepartmentCards";
import InnerBanner from "@/components/InnerBanner";

export default function AssessmentsPage() {
  return (
    <>
      <InnerBanner title="Assessments" bgImage="/images/page-banner-bg.png" />

      <DynamicDepartmentCards
        eyebrow="DEPARTMENTS"
        title="Assessment"
        description="Scientific assessments designed to understand movement, posture, fitness, strength, flexibility, and physical performance."
        backgroundImage="/images/sub-banner-content-bg.png"
        columns={3}
        items={[
          {
            title: "Bio Mechanical Assessment",
            description:
              "Biomechanics is the study of human movement. Biomechanical assessment is the process of analysing the movements of the upper body, lower body, and spine.",
            image: "/images/assessment-1.png",
            href: "/departments/assessments/bio-mechanical-assessment",
            buttonText: "Read more",
          },
          {
            title: "Musculoskeletal Assessment",
            description:
              "The musculoskeletal system is composed of muscles, bones, joints, and other connective tissue components that join these structures.",
            image: "/images/assessment-2.png",
            href: "/departments/assessments/musculoskeletal-assessment",
            buttonText: "Read more",
          },
          {
            title: "Cardio Pulmonary Exercise Testing",
            description:
              "It provides assessment of integrative exercise responses involving the pulmonary, cardiovascular, and skeletal systems.",
            image: "/images/assessment-3.png",
            href: "/departments/assessments/cardio-pulmonary-exercise-testing",
            buttonText: "Read more",
          },
          {
            title: "Running Gait Assessment",
            description:
              "A running gait analysis is a tool used to assess the way you run. It helps identify biomechanical abnormalities in the running gait.",
            image: "/images/assessment-4.png",
            href: "/departments/assessments/running-gait-assessment",
            buttonText: "Read more",
          },
          {
            title: "Other Assessments",
            description:
              "Additional assessments help evaluate joint function, movement quality, posture, strength, flexibility, and recovery needs.",
            image: "/images/assessment-5.png",
            href: "/departments/assessments/other-assessments",
            buttonText: "Read more",
          },
        ]}
      />
    </>
  );
}