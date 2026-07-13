import InnerBanner from "@/components/InnerBanner";
import DynamicDepartmentDetail from "@/components/Departments/DynamicDepartmentDetail";

const therapiesMenu = [
  {
    title: "Cranio Sacral Therapy (CST)",
    href: "/therapies/alternate-therapy/cranio-sacral-therapy",
  },
  {
    title: "Musculoskeletal Assessment",
    href: "/therapies/alternate-therapy/musculoskeletal-assessment",
  },
];

export default function CranioSacralTherapyPage() {
  return (
    <>
      <InnerBanner
        title="Cranio Sacral Therapy"
        bgImage="/images/page-banner-bg.png"
      />

      <DynamicDepartmentDetail
        title="Cranio Sacral Therapy (CST)"
        sidebarItems={therapiesMenu}
        activeHref="/therapies/alternate-therapy/cranio-sacral-therapy"
        showCTA={false}
        sections={[
          {
            layout: "imageRight",
            eyebrow: "Alternate Therapy",
            heading: "Cranio Sacral Therapy",
            icon: "brain",
            image: "/images/cranio-sacral-therapy.png",
            imageType: "large",
            content: [
              "Cranio Sacral system is the system of nerves, membranes and fluids that surround the brain and the spinal cord. This system is what protects and nourishes the most important organs in the human body.",
              "Cranio Sacral Therapy is the act of assisting the efficient flow of the fluids in the cerebrospinal system and easing the movement of tissues in this region. This therapy aims to improve the self-healing properties of the human body and can help in treating conditions like neurological impairment and chronic pain, support the immune system and improve sensory, motor and intellectual functions.",
            ],
          },
          {
            layout: "content",
            eyebrow: "SPARRC Expertise",
            heading: "Specialised Cranio Sacral Therapy",
            icon: "handHeart",
            content:
              "At SPARRC, we have therapists trained in this field from institutions outside India and they come with a unique understanding of the craniosacral system. These therapists feel and manipulate, by massaging your head and sacrum, the tides, rhythms, and flow of cerebrospinal fluid.",
          },
          {
            layout: "content",
            eyebrow: "Integrated Care",
            heading: "Supportive treatment approach",
            icon: "shield",
            content:
              "This therapy is offered not as a replacement but as an addition to the other therapies like MTPT and Physiotherapy.",
          },
        ]}
      />
    </>
  );
}