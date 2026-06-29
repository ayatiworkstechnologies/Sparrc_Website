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

export default function OsteoarthritisPage() {
  return (
    <>
      <InnerBanner title="Osteoarthritis" bgImage="/images/page-banner-bg.png" />

      <DynamicDepartmentDetail
        title="Restoring joint movement through therapy and exercise care."
        activeHref="/departments/lifestyle-diseases-managements/osteoarthritis"
        sidebarItems={lifestyleMenu}
        showCTA
        cta={{
          icon: "personStanding",
          title: "Move Better. Strengthen Better. Recover Better.",
          description:
            "Our osteoarthritis care approach supports joint movement, muscle strength and functional recovery through therapy and prescription exercise.",
        }}
        sections={[
          {
            eyebrow: "Joint Movement Care",
            icon: "bone",
            heading: "Osteoarthritis",
            content:
              "Articular Cartilage is the tissue at the end of the bones that aids in the movement in a joint. When this cartilage is damaged either by injury or by wear and tear, pain ensues since the movement at the joint is no longer smooth and frictionless. This condition is termed as Osteoarthritis and is diagnosed with the help of an X-ray or MRI imagery. The articular cartilage, once damaged cannot recover on its own and many are advised to have surgery to replace the natural cartilage with an artificial implement. However, it is our experience that many people are misdiagnosed as having osteoarthritis while they might have a simple myofascial condition since the symptoms are a lot alike.",
            image: "/images/osteoarthritis-detail-1.png",
            imageType: "large",
            layout: "imageRight",
          },
          {
            eyebrow: "",
            icon: "activity",
            heading: "Therapy & Exercise Recovery",
            content:
              "As much as 90 – 95% of the patients diagnosed with Osteoarthritis that come to SPARRC have recovered complete movement at the affected joints with the help of Aquatherapy, Myofascial release and a prescription exercise program. These therapies strengthen the muscles in order to support the joint and removes the need for a surgery.",
            layout: "gradientCard",
          },
        ]}
      />
    </>
  );
}