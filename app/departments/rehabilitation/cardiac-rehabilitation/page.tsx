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

export default function CardiacRehabilitationPage() {
  return (
    <>
      <InnerBanner
        title="Cardiac Rehabilitation"
        bgImage="/images/page-banner-bg.png"
      />

      <DynamicDepartmentDetail
        title="Safe cardiac recovery for better quality of life."
        activeHref="/departments/rehabilitation/cardiac-rehabilitation"
        sidebarItems={rehabilitationMenu}
        showCTA
        cta={{
          icon: "heartPulse",
          title: "Strengthen Your Heart. Restore Confidence.",
          description:
            "Our cardiac rehabilitation program supports safe recovery, improved cardiac efficiency, symptom relief and better quality of life.",
        }}
        sections={[
          {
            eyebrow: "",
            icon: "heartPulse",
            heading: "Cardiac Rehabilitation",
            content:
              "Cardiac rehabilitation is a branch of medically supervised rehabilitation medicine or physical therapy to achieve and maintain optimal physical and psychosocial health in patients living with cardiac disease or recent cardiac surgeries. We at SPARRC have a dedicated multidisciplinary team comprising a Doctor, Physiotherapist, occupational therapist and fitness trainer equipped to rehabilitate multiple cardiac conditions.",
            layout: "content",
          },
          {
            eyebrow: "",
            icon: "clipboardList",
            heading: "Goals of Cardiac Rehabilitation",
            content: [
              "The goals of cardiac rehabilitation include:",
              "Improve cardiac efficiency and reduce risk of infarction and death",
              "Help relieve unwanted symptoms such as breathlessness, angina, anxiety, depression and stress management.",
              "Increase work capacity and return to work if appropriate and/or previous level of functional capacity",
            ],
            image: "/images/cardiac-rehabilitation-1.png",
            imageType: "large",
            layout: "imageRight",
            listIcon: "/icons/logo-icon.png",
          },
          {
            eyebrow: "",
            icon: "heartPulse",
            heading: "Cardiac Conditions that can be Rehabilitated",
            intro:
              "Injuries, infections, degenerative diseases, structural defects, tumors, and disorders in the circulatory system can impair the nervous system. Some of the conditions that may benefit from neurological rehab may include:",
            points: [
              "Hypertension",
              "Ischaemic heart disease",
              "Myocardial infarction",
              "Surgeries (coronary angioplasty, coronary-aortic by-pass graft surgery)",
              "Chronic heart failure",
              "Cardiac myopathy",
              "Valve repair/replacement",
              "Insertion of cardiac pacemaker",
              "Peripheral arterial disease",
              "Post cerebral vascular disease",
            ],
            layout: "pointsCard",
            listIcon: "/icons/logo-icon.png",
          },
          {
            eyebrow: "",
            icon: "activity",
            heading: "Cardiac Rehabilitation Phases",
            content: [
              "Cardiac rehabilitation should begin as soon as possible and typically comprises four phases namely:",
              "In hospital patient period",
              "Post-discharge pre-exercise period",
              "Exercise and education program Maintenance",
              "The secondary prevention component of Cardiac Rehabilitation requires delivery of exercise counseling and customised training, education for heart-healthy living and counseling to reduce stress and risk factors and follow up with the intention of rehabilitation, depending on patient’s condition and complications of disease, for better quality of life for patients.",
            ],
            images: [
              "/images/cardiac-rehabilitation-2.png",
              "/images/cardiac-rehabilitation-3.png",
            ],
            layout: "carouselLeft",
            showFeatures: true,
            features: [
              {
                icon: "heartPulse",
                title: "Cardiac Efficiency",
              },
              {
                icon: "activity",
                title: "Exercise Training",
              },
              {
                icon: "shield",
                title: "Risk Reduction",
              },
              {
                icon: "heart",
                title: "Quality of Life",
              },
            ],
          },
        ]}
      />
    </>
  );
}