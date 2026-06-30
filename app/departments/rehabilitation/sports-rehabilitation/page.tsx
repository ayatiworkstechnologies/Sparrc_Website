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

export default function SportsRehabilitationPage() {
  return (
    <>
      <InnerBanner
        title="Sports Rehabilitation"
        bgImage="/images/page-banner-bg.png"
      />

      <DynamicDepartmentDetail
        title="Safe recovery for stronger sports performance."
        activeHref="/departments/rehabilitation/sports-rehabilitation"
        sidebarItems={rehabilitationMenu}
        showCTA
        cta={{
          icon: "dumbbell",
          title: "Recover Stronger. Return Smarter.",
          description:
            "Our sports rehabilitation program helps reduce pain, restore mobility, improve strength and support safe return to sport.",
        }}
        sections={[
          {
            eyebrow: "",
            icon: "",
            heading: "Sports Rehabilitation",
            content:
              "Sports Injury Rehabilitation is a multi-disciplinary, safe, therapeutic approach to the assessment, evaluation, prevention and treatment of athletes. This is achieved by treating pain and achieving optimal levels of functional, occupational and sports specific fitness, regardless of age and ability. It utilises the principles of sport and exercise science incorporating physiological and pathological processes to prepare the participant for training, competition and, where applicable, work. Sports Rehabilitation helps benefit/treat a multitude of conditions like acute injuries (strains, sprains, dislocations, fractures) and chronic conditions (recurrent sprains, post-operative injuries e.g. ligament tears and reconstructions).",
            image: "/images/sports-rehabilitation-1.png",
            imageType: "large",
            layout: "imageRight",
          },
          {
            eyebrow: "",
            icon: "clipboardList",
            heading:
              "SPARRC’s multidisciplinary team of Sports Physician, Sports Physiotherapists and Fitness Advisors help with",
            content: [
              "Reduction of pain and improvement of mobility restriction",
              "Targeted and personalised exercise program – strengthening, endurance, cardiovascular training, agility and sports specific training – to return to pre injury function",
              "Reduction of re-injury or further sports related injury Improving peak athletic performance",
            ],
            images: [
              "/images/sports-rehabilitation-2.png",
              "/images/sports-rehabilitation-3.png",
            ],
            layout: "carouselLeft",
            showFeatures: true,
            features: [
              {
                icon: "activity",
                title: "Pain Reduction",
              },
              {
                icon: "personStanding",
                title: "Mobility Recovery",
              },
              {
                icon: "dumbbell",
                title: "Strength Training",
              },
              {
                icon: "target",
                title: "Peak Performance",
              },
            ],
          },
        ]}
      />
    </>
  );
}