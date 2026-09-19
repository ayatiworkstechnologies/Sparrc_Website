import InnerBanner from "@/components/InnerBanner";
import DynamicDepartmentDetail from "@/components/Departments/DynamicDepartmentDetail";

export default function DanceMedicinePage() {
  return (
    <>
      <InnerBanner title="Dance Medicine" bgImage="/images/page-banner-bg.png" />

      <DynamicDepartmentDetail
        title="Specialized care for dancers to prevent injuries and improve performance."
        showCTA
        cta={{
          icon: "sparkles",
          title: "Prevent Injuries. Improve Balance. Perform Better.",
          description:
            "Our dance medicine program supports dancers with injury prevention, performance enhancement, prehab, rehab and personalized exercise care.",
        }}
        sections={[
          {
            eyebrow: "",
            icon: "personStanding",
            heading: "Dance Medicine",
            content:
              "Dance Medicine is a part of Sport Medicine that deals with prevention and management of injuries for Dancers. The branch also deals with Prescription exercise for performance enhancement, Prehab and Rehab for Dancers. Dancers' requirements are very unique according to the style of the dance. The demand to improve their performance grows as they climb the ladder of their career. Very much like the sporting population, Dancers need a well balanced exercise prescription and emotional support to fully exploit their potential.",
            image: "/images/dance-medicine-1.png",
            imageType: "large",
            layout: "imageRight",
          },
          {
            eyebrow: "Clinical Approach",
            icon: "clipboardCheck",
            heading: "Treatment Procedure",
            content:
              "Biomechanical assessment of the movements pertaining to the dance form is done to avoid repetitive injuries and predict possible injuries Based on the Fitness assessment report, Kalaripayatu and yoga are included in the training schedule of the dancers to improve physical fitness.",
            layout: "gradientCard",
          },
        ]}
      />
    </>
  );
}