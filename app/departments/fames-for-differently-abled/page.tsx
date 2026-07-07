import InnerBanner from "@/components/InnerBanner";
import DynamicDepartmentDetail from "@/components/Departments/DynamicDepartmentDetail";

export default function FamesForDifferentlyAbledPage() {
  return (
    <>
      <InnerBanner
        title="FAMES for Differently Abled"
        bgImage="/images/page-banner-bg.png"
      />

      <DynamicDepartmentDetail
        title="Movement education and therapy for specially abled children."
        showCTA
        cta={{
          icon: "sparkles",
          title: "Move Freely. Heal Safely. Grow Happily.",
          description:
            "FAMES supports specially abled children through physical therapy, movement therapy, play therapy, art therapy and personalized fitness adaptation.",
        }}
        sections={[
          {
            eyebrow: "",
            icon: "sparkles",
            heading: "FAMES for Differently Abled",
            content: [
              "FAMES – Fitness Adaptation & Movement Education Service is a department of SPARRC that encompasses Physical therapy, Movement therapy, Art therapy, Play therapy, Massage therapy and other healing methods to enable a better quality of life for the specially abled children.",
              "Differently Abled children tend to have weak muscles due to lack of free movements from poor social and motor skills, a preference for screen-based activities, and a lack of opportunities for the specially abled in our communities. This lack of normal movements results in weakening of the musculo-skeletal system over a period of time. SPARRC team of Pediatric Sports Physicians, Pediatricians, Pediatric Physiotherapists, Special Educators, Occupational therapists, Speech therapists, Nutritionists and Psychologists work together with the children to understand their needs and plan an adaptable daily life routine.",
            ],
            layout: "content",
          },
          {
            eyebrow: "",
            icon: "heartHandshake",
            heading: "Fitness Adaptation Program",
            content:
              "We develop an individualised system of fitness adaptation for them from a very young age. Movements help the children express more freely to improve not only their physical health but also their emotional health. FAMES strives to provide a very safe and healthy environment to stay active for holistic healing of the children. Children with Special needs are given the individual attention they need. Special Yoga, Kalaripayatu and Move to Music Programs make their days happy, joyous and fulfilling.",
            images: [
              "/images/fames-for-differently-abled-1.png",
              "/images/fames-for-differently-abled-2.png",
              "/images/fames-for-differently-abled-3.png",
            ],
            layout: "carouselLeft",
            showFeatures: true,
            features: [
              {
                icon: "activity",
                title: "Movement Therapy",
              },
              {
                icon: "sparkles",
                title: "Play Therapy",
              },
              {
                icon: "heartHandshake",
                title: "Holistic Healing",
              },
              {
                icon: "users",
                title: "Individual Attention",
              },
            ],
          },
          {
            eyebrow: "",
            icon: "users",
            heading: "",
            content: [
              "At SPARRC, we accept those with Autism, ADHD, Down’s syndrome, Cerebral palsy and children with difficulties as differently abled. For regular updates on the FAMES activities, follow our Facebook Page here.",
              "http://fb.com/Fames.Sparrc",
            ],
            layout: "gradientCard",
            listIcon: "/icons/logo-icon.png",
          },
        ]}
      />
    </>
  );
}