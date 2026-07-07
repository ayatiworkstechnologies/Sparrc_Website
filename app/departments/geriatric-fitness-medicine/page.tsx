import InnerBanner from "@/components/InnerBanner";
import DynamicDepartmentDetail from "@/components/Departments/DynamicDepartmentDetail";

export default function GeriatricFitnessMedicinePage() {
  return (
    <>
      <InnerBanner
        title="Geriatric Fitness Medicine"
        bgImage="/images/page-banner-bg.png"
      />

      <DynamicDepartmentDetail
        title="Helping elderly people stay active and independent."
        showCTA
        cta={{
          icon: "personStanding",
          title: "Stay Active. Move Better. Live Stronger.",
          description:
            "Our geriatric fitness medicine program supports elderly people with strength, mobility, confidence and better quality of life.",
        }}
        sections={[
          {
            eyebrow: "",
            icon: "personStanding",
            heading: "Geriatric Fitness Medicine",
            content:
              "Geriatric Fitness Medicine deals with diagnosing and treating the elderly population with cardiopulmonary, musculoskeletal and mobility issues through exercise interventions. SPARRC Geriatric Fitness has been able to inspire thousands of elderly people. Among them, we have veteran athletes who perform at the national and international level at the age groups of 80 and 90. For the general geriatric population though, having the ability to go about their everyday life without pain, to be able to sleep well and wake up refreshed are victories that can be guaranteed by the prescription exercise program at SPARRC.",
            layout: "content",
          },
          {
            eyebrow: "",
            icon: "heartPulse",
            heading: "What is Geriatric Fitness Medicine?",
            content:
              "Geriatric Fitness Medicine is to ensure the loss of muscle mass, loss of bone mass, loss of confidence and loss of joint mobility can be minimized in older people such that they are able to be independently take care of themselves and live a life that is fulfilling.",
            images: [
              "/images/geriatric-fitness-medicine-1.png",
            //   "/images/geriatric-fitness-medicine-2.png",
            ],
            layout: "carouselLeft",
            showFeatures: true,
            features: [
              {
                icon: "personStanding",
                title: "Independent Living",
              },
              {
                icon: "bone",
                title: "Bone Health",
              },
              {
                icon: "dumbbell",
                title: "Muscle Strength",
              },
              {
                icon: "heartHandshake",
                title: "Confidence Care",
              },
            ],
          },
          {
            eyebrow: "",
            icon: "activity",
            heading: "How does Geriatric Fitness Medicine exercises work?",
            content:
              "Geriatric fitness focuses on 4 key components of ageing – cardiopulmonary endurance, musculoskeletal endurance, flexibility and body composition. Prescription exercises that improve on these 4 components help in improving the quality of life of the geriatric populace.",
            image: "/images/geriatric-fitness-medicine-3.png",
            imageType: "large",
            layout: "imageRight",
          },
          {
            eyebrow: "",
            icon: "users",
            heading: "Exercise Support Programs",
            content:
              "Our exercise prescription include group therapy, dance therapy, music therapy, art therapy and social activities that promote emotional health. Our support group programs for neurological conditions and obesity comfort patients and help them stay motivated to live better.",
            layout: "content",
          },
        ]}
      />
    </>
  );
}