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

export default function CardioPulmonaryExerciseTestingPage() {
  return (
    <>
      <InnerBanner
        title="Cardio Pulmonary Exercise Testing"
        bgImage="/images/page-banner-bg.png"
      />

      <DynamicDepartmentDetail
        title="A cardiopulmonary exercise test (CPET) is an evaluation of the cardio-pulmonary and the muscular system."
        sidebarItems={assessmentMenu}
        activeHref="/departments/assessments/cardio-pulmonary-exercise-testing"
        showCTA
        cta={{
          icon: "heartPulse",
          title: "Test Better. Train Better. Perform Better.",
          description:
            "CPET evaluates exercise capacity, cardiopulmonary response and functional performance to support accurate clinical and training decisions.",
        }}
        sections={[
          {
            eyebrow: "Exercise Capacity Evaluation",
            icon: "activity",
            content:
              "A cardiopulmonary exercise test (CPET) is an evaluation of the cardio-pulmonary and the muscular system. It is an important clinical tool to evaluate exercise capacity.",
            image: "/images/cardio-pulmonary-exercise-testing-1.png",
            imageType: "large",
            layout: "imageRight",
          },
          {
            eyebrow: "Cardio Pulmonary Response",
            icon: "heartPulse",
            content:
              "It provides assessment of the integrative exercise responses involving the pulmonary, cardiovascular and skeletal muscle systems, which are not adequately reflected through the measurement of individual organ system functions. This non-invasive, dynamic physiological overview permits the evaluation of both sub-maximal and peak exercise responses, providing the doctor with relevant information for clinical decision making. CPET is being used increasingly in a wide spectrum of clinical applications for evaluation of undiagnosed exercise intolerance and for objective determination of functional capacity and impairment.",
            images: [
              "/images/cardio-pulmonary-exercise-testing-2.png",
              "/images/cardio-pulmonary-exercise-testing-3.png",
            ],
            layout: "carouselLeft",
            showFeatures: true,
            features: [
              {
                icon: "heartPulse",
                title: "Cardio Response",
              },
              {
                icon: "zap",
                title: "Peak Exercise",
              },
              {
                icon: "stethoscope",
                title: "Clinical Decision",
              },
              {
                icon: "dumbbell",
                title: "Training Load",
              },
            ],
          },
          {
            eyebrow: "CPET Applications",
            icon: "activity",
            heading: "CPET Applications",
            listIcon: "/icons/logo-icon.png",
            content: [
              "Evaluating exercise capacity in athletes / sporting population to take precise training decisions for performance enhancement.",
              "Evaluating people who are looking to get fit fast to prescribe ideal training loads.",
              "Estimating exercise tolerance and training loads in patients with heart failure and other cardiac conditions.",
            ],
          },
        ]}
      />
    </>
  );
}