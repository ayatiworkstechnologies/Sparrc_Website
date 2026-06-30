import InnerBanner from "@/components/InnerBanner";
import DynamicDepartmentDetail from "@/components/Departments/DynamicDepartmentDetail";

const rehabilitationMenu = [
  {
    title: "Neuro Rehabilitation",
    href: "/departments/rehabilitation/neuro-rehabilitation",
  },
  {
    title: "Cardiac Rehabilitation",
    href: "/departments/rehabilitation/cardiac-rehabilitation",
  },
  {
    title: "Geriatric Rehabilitation",
    href: "/departments/rehabilitation/geriatric-rehabilitation",
  },
  {
    title: "Clinical Pilates",
    href: "/departments/rehabilitation/clinical-pilates",
  },
  {
    title: "Sports Rehabilitation",
    href: "/departments/rehabilitation/sports-rehabilitation",
  },
];

export default function GeriatricRehabilitationPage() {
  return (
    <>
      <InnerBanner
        title="Geriatric Rehabilitation"
        bgImage="/images/page-banner-bg.png"
      />

      <DynamicDepartmentDetail
        title="Helping older adults stay active and independent."
        activeHref="/departments/rehabilitation/geriatric-rehabilitation"
        sidebarItems={rehabilitationMenu}
        showCTA
        cta={{
          icon: "personStanding",
          title: "Restore Mobility. Improve Independence.",
          description:
            "Our geriatric rehabilitation program helps older adults regain strength, balance, mobility and confidence for a better quality of life.",
        }}
        sections={[
          {
            eyebrow: "",
            icon: "",
            heading: "Geriatric Rehabilitation",
            content:
              "Geriatric rehabilitation or geriatric physical therapy is the branch of medicine that studies rehabilitation and physical therapy issues in elderly to enable them to function at the highest possible level despite physical impairment. Many elderly patients suffer from multiple conditions that contribute to disability thereby making rehabilitation more challenging and slowing down the rate of progress. Rehabilitative measures must be adapted to the physiological age related decline and co-morbidities.",
            layout: "gradientCard",
          },
          {
            eyebrow: "",
            icon: "",
            heading: "SPARRC Geriatric Rehabilitation Care",
            content:
              "At SPARRC, our multidisciplinary team of Doctors, physiotherapists and fitness trainers understand that communication is very essential to geriatric rehabilitation. Clear dialogue is necessary to specifically improve any sensory impairment, including those related to vision and hearing difficulties. The goals in Geriatric rehabilitation are mainly management of impairments, development of functional independence and improvement of quality of life.",
            image: "/images/geriatric-rehabilitation-1.png",
            imageType: "large",
            layout: "imageRight",
          },
          {
            eyebrow: "",
            icon: "clipboardList",
            heading: "General indications for Geriatric Rehabilitation",
            intro:
              "Geriatric rehabilitation is recommended for older adults experiencing functional decline due to age-related conditions, illness or injury.",
            points: [
              "Acute reversible or partially reversible injuries e.g. strain, amputation",
              "Chronic progressive disabling diseases e.g. osteoarthritis, Parkinson disease",
              "Acute disabling event due to a chronic disease e.g. stroke due to cerebrovascular disease or hip fracture due to osteoporosis",
              "Lifestyle disease management e.g. Diabetes, Hypothyroid",
            ],
            layout: "pointsCard",
            listIcon: "/icons/logo-icon.png",
          },
        ]}
      />
    </>
  );
}