import InnerBanner from "@/components/InnerBanner";
import DynamicDepartmentDetail from "@/components/Departments/DynamicDepartmentDetail";

const counsellingMenu = [
  {
    title: "Emotional Wellness",
    href: "/departments/counselling/emotional-wellness",
  },
  {
    title: "Nutrition and Diet",
    href: "/departments/counselling/nutrition-and-diet",
  },
];

export default function EmotionalWellnessPage() {
  return (
    <>
      <InnerBanner
        title="Emotional Wellness"
        bgImage="/images/page-banner-bg.png"
      />

      <DynamicDepartmentDetail
        title="Supporting emotional health for a healthier life."
        sidebarItems={counsellingMenu}
        activeHref="/departments/counselling/emotional-wellness"
        showCTA
        cta={{
          icon: "heartHandshake",
          title: "Find Balance. Build Confidence. Live Better.",
          description:
            "Our emotional wellness programs support mental wellbeing, stress management and healthier living through personalised care and therapeutic programs.",
        }}
        sections={[
          {
            eyebrow: "",
            icon: "heartHandshake",
            heading: "Emotional Wellness",
            content:
              "Healthy mind & healthy body, – one without the other is considered illness. Many research states that emotional health is highly influenced by physical activity and psycho – social interactions. SPARRC exercise prescriptions include group therapy, dance therapy, music therapy, art therapy and social activities that promotes emotional health. Our support group programs for neurological conditions and obesity comfort patients and help them stay motivated to live better.",
            layout: "content",
          },
          {
            eyebrow: "",
            icon: "heartHandshake",
            heading:
              "Health does not always come from medicines. Most of the time it comes from peace of mind, laughter and love.",
            content:
              "Combating stress is mental gymnastics and SPARRC mental health professionals understand the need of every individual and their lifestyle. Our Psychologists help set your goal of fitness and keep you motivated to achieve it. Yoga therapy and Relaxation Programs are also included in a full fledged training schedule. We understand emotional well-being aids in physical healing and vice – versa and therefore implement the intervention for pain management as well.",
            image: "/images/emotional-wellness.png",
            imageType: "large",
            layout: "imageRight",
          },
        ]}
      />
    </>
  );
}