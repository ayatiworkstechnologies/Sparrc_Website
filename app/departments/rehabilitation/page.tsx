import DynamicDepartmentCards from "@/components/Departments/DynamicDepartmentCards";
import InnerBanner from "@/components/InnerBanner";

export default function RehabilitationPage() {
  return (
    <>
      <InnerBanner title="Rehabilitation" bgImage="/images/page-banner-bg.png" />

      <DynamicDepartmentCards
        eyebrow="DEPARTMENTS"
        title="Rehabilitation"
        description="Specialized rehabilitation programs designed to restore strength, improve movement, support recovery, and help patients return to daily life with confidence."
        backgroundImage="/images/sub-banner-content-bg.png"
        columns={3}
        items={[
          {
            title: "Neuro Rehabilitation",
            description:
              "Neurological rehabilitation is a doctor-supervised program designed for people with diseases, injury, or disorders of the nervous system.",
            image: "/images/neuro-rehabilitation.png",
            href: "/departments/rehabilitation/neuro-rehabilitation",
            buttonText: "Read more",
          },
          {
            title: "Cardiac Rehabilitation",
            description:
              "Cardiac rehabilitation is a branch of medically supervised rehabilitation medicine or physical therapy to achieve and maintain optimal physical.",
            image: "/images/cardiac-rehabilitation.png",
            href: "/departments/rehabilitation/cardiac-rehabilitation",
            buttonText: "Read more",
          },
          {
            title: "Geriatric Rehabilitation",
            description:
              "Geriatric rehabilitation or geriatric physical therapy is the branch of medicine that studies rehabilitation and physical therapy.",
            image: "/images/geriatric-rehabilitation.png",
            href: "/departments/rehabilitation/geriatric-rehabilitation",
            buttonText: "Read more",
          },
          {
            title: "Clinical Pilates",
            description:
              "Clinical Pilates takes an individualized approach to treating injuries and other musculoskeletal dysfunctions.",
            image: "/images/clinical-pilates.png",
            href: "/departments/rehabilitation/clinical-pilates",
            buttonText: "Read more",
          },
          {
            title: "Sports Rehabilitation",
            description:
              "Articular Cartilage is the tissue at the end of the bones that aids in the movement in a joint. When this cartilage is damaged either by injury or by wear and tear.",
            image: "/images/sports-rehabilitation.png",
            href: "/departments/rehabilitation/sports-rehabilitation",
            buttonText: "Read more",
          },
        ]}
      />
    </>
  );
}