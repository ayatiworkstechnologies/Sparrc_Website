import InnerBanner from "@/components/InnerBanner";
import DynamicDepartmentDetail from "@/components/Departments/DynamicDepartmentDetail";

const lifestyleMenu = [
  {
    title: "Diabetes",
    href: "/programs-care/lifestyle-diseases-managements/diabetes",
  },
  {
    title: "Obesity",
    href: "/programs-care/lifestyle-diseases-managements/obesity",
  },
  {
    title: "Hypertension",
    href: "/programs-care/lifestyle-diseases-managements/hypertension",
  },
  {
    title: "Heart Disease",
    href: "/programs-care/lifestyle-diseases-managements/heart-disease",
  },
  {
    title: "Osteoarthritis",
    href: "/programs-care/lifestyle-diseases-managements/osteoarthritis",
  },
  {
    title: "Cancer",
    href: "/programs-care/lifestyle-diseases-managements/cancer",
  },
];

export default function HeartDiseasePage() {
  return (
    <>
      <InnerBanner title="Heart Disease" bgImage="/images/page-banner-bg.png" />

      <DynamicDepartmentDetail
        title="Supporting cardiac recovery through safe exercise care."
        activeHref="/programs-care/lifestyle-diseases-managements/heart-disease"
        sidebarItems={lifestyleMenu}
        showCTA
        cta={{
          icon: "heart",
          title: "Recover Better. Move Better. Live Better.",
          description:
            "Our cardiac exercise program supports recovery, endurance and safe return to daily activity after cardiac conditions and surgeries.",
        }}
        sections={[
          {
            eyebrow: "Cardiac Recovery",
            icon: "heartPulse",
            heading: "Heart Disease",
            content:
              "60% of the world population suffering from cardiac diseases are Indians. It is of utmost importance that people understand that most of the cardiac diseases that are diagnosed and treated with surgeries like coronary artery bypass graft or stents, can be prevented by a regular exercise program. It is also possible for those that have already undergone a such surgeries to get back to their pre-surgery levels of activity by joining the SPARRC prescription exercise program. Our program has enabled people to even run a marathon after cardiac bypass surgeries.",
            images: [
              "/images/heart-disease-detail-1.png",
              "/images/heart-disease-detail-2.png",
            ],
            layout: "carouselLeft",
            showFeatures: true,
            features: [
              {
                icon: "heartHandshake",
                title: "Cardiac Care",
              },
              {
                icon: "activity",
                title: "Safe Exercise",
              },
              {
                icon: "shield",
                title: "Recovery Support",
              },
              {
                icon: "dumbbell",
                title: "Endurance Building",
              },
            ],
          },
        ]}
      />
    </>
  );
}