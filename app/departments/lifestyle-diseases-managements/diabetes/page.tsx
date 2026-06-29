import InnerBanner from "@/components/InnerBanner";
import DynamicDepartmentDetail from "@/components/Departments/DynamicDepartmentDetail";

const lifestyleMenu = [
  {
    title: "Diabetes",
    href: "/departments/lifestyle-diseases-managements/diabetes",
  },
  {
    title: "Obesity",
    href: "/departments/lifestyle-diseases-managements/obesity",
  },
  {
    title: "Hypertension",
    href: "/departments/lifestyle-diseases-managements/hypertension",
  },
  {
    title: "Heart Disease",
    href: "/departments/lifestyle-diseases-managements/heart-disease",
  },
  {
    title: "Osteoarthritis",
    href: "/departments/lifestyle-diseases-managements/osteoarthritis",
  },
  {
    title: "Cancer",
    href: "/departments/lifestyle-diseases-managements/cancer",
  },
];

export default function DiabetesPage() {
  return (
    <>
      <InnerBanner title="Diabetes" bgImage="/images/page-banner-bg.png" />

      <DynamicDepartmentDetail
        title="SPARRC endeavours to prevent as many people as possible from moving into the Diabetic state."
        activeHref="/departments/lifestyle-diseases-managements/diabetes"
        sidebarItems={lifestyleMenu}
        showCTA
        cta={{
          icon: "heartPulse",
          title: "Control Better. Prevent Better. Live Better.",
          description:
            "Our diabetic management program supports blood glucose control through diet awareness, optimal exercise planning and lifestyle correction.",
        }}
        sections={[
          {
            eyebrow: "Diabetic Management",
            icon: "heartPulse",
            content:
              "By 2020, 50% of the world population suffering from diabetes will be Indians . India is the Diabetic capital of the world . About 17 million people in India are in a pre-diabetic state. SPARRC endeavours to prevent as many of these 17 million people from moving into the Diabetic state . This is possible through diet awareness and diet control and optimal exercise program that can minimize the disease progression. SPARRC’s Diabetic management regular exercise program mainly involves cardio respiratory system endurance – this can make sure that the glucose that circulates around the blood is pushed to the muscles and does not require insulin support. Our Sports Nutritionist also suggest dietary adjustments that will achieve the optimal environment for diabetes control.",
            images: [
              "/images/diabetes-detail-1.png",
              "/images/diabetes-detail-2.png",
            ],
            layout: "carouselLeft",
            showFeatures: true,
            features: [
              {
                icon: "heartPulse",
                title: "Glucose Control",
              },
              {
                icon: "dumbbell",
                title: "Exercise Program",
              },
              {
                icon: "activity",
                title: "Endurance Training",
              },
              {
                icon: "shield",
                title: "Disease Prevention",
              },
            ],
          },
          {
            eyebrow: "Complication Management",
            icon: "stethoscope",
            heading: "",
            content:
              "For those that have already manifested the disease, complications arising from diabetes may be managed. For instance, symptoms like burning feet syndrome can be managed through myofascial release, mobilization and taping.",
            layout: "gradientCard",
          },
        ]}
      />
    </>
  );
}