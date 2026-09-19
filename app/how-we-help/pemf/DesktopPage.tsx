import InnerBanner from "@/components/InnerBanner";
import DynamicDepartmentDetail from "@/components/Departments/DynamicDepartmentDetail";

export default function PEMFPage() {
  return (
    <>
      <InnerBanner
        title="PEMF"
        bgImage="/images/page-banner-bg.png"
      />

      <DynamicDepartmentDetail
        showCTA={false}
        sections={[
          {
            layout: "imageRight",
            heading: "WHAT IS PEMF",
            image: "/images/pemf-therapy.png",
            imageType: "large",
            content: [
              "PEMF therapy consists of sweeping or bathing the entire body or individual limb through a magnetic field.",
              "PEMF therapy is a non-invasive, simple & safe technique often administered over the site of a painful injury or inflammation.",
              "It causes vasodilation (opening and dilating blood vessels), modification of inflammation process, reduction of oedema (oedema is excessive fluid collection in tissues) and enhanced tissue repair.",
            ],
          },
          {
            layout: "pointsCard",
            heading: "Where is PEMF useful?",
            intro: "In treating",
            points: [
              "Arthritis & Spondylosis",
              "Fractures & Post-traumatic pain",
              "Parkinson's, Alzheimer's diseases",
              "Motor neuron disease, epilepsy peripheral neuropathy, hemiplegia and cerebral palsy",
              "Trophic/diabetic ulcers",
              "Mild depression and epilepsy.",
            ],
          },
          {
            layout: "pointsCard",
            heading: "Benefits of PEMF",
            points: [
              "Pain relief",
              "Reduces inflammation",
              "Improves blood oxygenation",
              "Improves blood circulation",
              "Heals bone & joint problems",
              "Stimulates the immune system",
              "Improves muscle function",
              "Reduces stress, improves sleep",
            ],
          },
          {
            layout: "content",
            heading:
              "Physiological background of PEMF in certain conditions:",
            content: [
              "There is an increase in vasodilatation which leads to increase in blood flow, thus improving oxygen supply and thereby reducing pain and/or decreasing inflammation. This also helps in removing toxins & wastes.",
              "It also causes bio-amplification, regulating granulation tissue and helping in the repairing process of chronic ulcers (a healthy granulation tissue is a key critical step in ulcer healing).",
              "The stimulating effect produced by PEMF on biosynthesis & cell proliferation manifests itself in increased formation of osteogenic foci (cellular proliferation – increase in the number of cells, osteogenic – bone forming), which is an important aspect of fracture healing.",
              "PEMF repolarizes or restores the cell membrane's charge back to resting potential/charge which regenerates the injured cells & stimulates the body's own natural healing process.",
              "Call us to find out if PEMF is the right treatment for you and how you can benefit from it.",
            ],
          },
        ]}
      />
    </>
  );
}