import DynamicDepartmentCards from "@/components/Departments/DynamicDepartmentCards";
import InnerBanner from "@/components/InnerBanner";

export default function AlternateTherapyPage() {
  return (
    <>
      <InnerBanner
        title="Alternate Therapy"
        bgImage="/images/page-banner-bg.png"
      />

      <DynamicDepartmentCards
        eyebrow="THERAPIES"
        title="Alternate Therapy"
        description="For Alternative therapy SPARRC prescribes Alternative therapy to provide a holistic approach for those patients who require a little more than the conventional treatment."
        backgroundImage="/images/sub-banner-content-bg.png"
        columns={2}
        items={[
          {
            title: "Cranio Sacral Therapy (CST)",
            description:
              "Cranio Sacral Therapy is the act of assisting the efficient flow of the fluids in the cerebrospinal system and easing the movement of tissues in this region.",
            image: "/images/cranio-sacral-therapy.png",
            href: "/therapies/alternate-therapy/cranio-sacral-therapy",
            buttonText: "Read more",
          },
          {
            title: "Musculoskeletal Assessment",
            description:
              "Six healing sounds is the part of the TCM (Traditional Chinese Medicine) used in healing various conditions.",
            image: "/images/six-healing-sounds.png",
            href: "/therapies/alternate-therapy/musculoskeletal-assessment",
            buttonText: "Read more",
          },
        ]}
      />
    </>
  );
}