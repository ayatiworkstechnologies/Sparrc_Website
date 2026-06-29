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

export default function HypertensionPage() {
  return (
    <>
      <InnerBanner title="Hypertension" bgImage="/images/page-banner-bg.png" />

      <DynamicDepartmentDetail
        title="Better blood pressure. Better living."
        activeHref="/departments/lifestyle-diseases-managements/hypertension"
        sidebarItems={lifestyleMenu}
        showCTA
        cta={{
          icon: "heartPulse",
          title: "Control Pressure. Improve Flow. Live Better.",
          description:
            "Our hypertension management approach focuses on exercise prescription, stress reduction and healthy habits to support better blood pressure control.",
        }}
        sections={[
          {
            eyebrow: "Blood Pressure Awareness",
            icon: "heartPulse",
            heading: "Hypertension",
            content:
              "The disease that affects the middle aged group because of blood pressure of the diastolic being more than 90 mmhg is called Hypertension. Recently WHO (World Health Organisation) has raised that value to above 100 mmhg. One can be considered non-hypertensive even when the diastolic is above 100, depending upon his/her age group.",
            image: "/images/hypertension-detail-1.png",
            imageType: "large",
            layout: "imageRight",
          },
          {
            eyebrow: "",
            icon: "activity",
            heading: "Hypertension Management",
            content:
              "Hypertension is the result of the pressure exerted on the blood vessels when the blood vessels have narrowed or have lost the elasticity to stretch to allow the blood to flow. Stroke is a complication of this pressure that is exerted on the blood vessels. Exercise enables the capillaries to open up thereby reducing the pressure exerted by the blood flow. SPARRC’s exercise prescription takes into account an individual’s stress levels, food habits and activity/inactivity levels in order to ensure that the diastolic pressure can be reduced from 90 mmhg to 60 – 70 mmhg.",
            layout: "gradientCard",
          },
        ]}
      />
    </>
  );
}