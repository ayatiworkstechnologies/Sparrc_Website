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

export default function NutritionAndDietPage() {
  return (
    <>
      <InnerBanner
        title="Nutrition and Diet"
        bgImage="/images/page-banner-bg.png"
      />

      <DynamicDepartmentDetail
        title="Right nutrition for healthy living."
        sidebarItems={counsellingMenu}
        activeHref="/departments/counselling/nutrition-and-diet"
        showCTA
        cta={{
          icon: "utensils",
          title: "Eat Better. Live Better. Perform Better.",
          description:
            "Our nutrition counselling helps you understand what to eat, when to eat, how much to eat and what not to eat based on your body composition and metabolism.",
        }}
        sections={[
          {
            eyebrow: "",
            icon: "utensils",
            heading: "Nutrition and Diet",
            content: [
              "SPARRC Nutrition Counseling helps an individual develop a keen Nutrition IQ to understand",
              "what to eat ?",
              "when to eat ?",
              "how much to eat?",
              "what not to eat?",
              "based on their body composition and metabolism.",
            ],
            image: "/images/nutrition-and-diet-1.png",
            imageType: "large",
            layout: "imageRight",
            listIcon: "/icons/logo-icon.png",
          },
          {
            eyebrow: "",
            icon: "apple",
            heading:
              "Healthy Living constitutes 80% Right Eating, 20% Physical Activity & Good Sleep.",
            content: [
              "Urban lifestyle does not allow us the freedom to explore the concept of real food and mindful eating. The quick access of processed food creates an imbalance in the nutritional values that are consumed causing vitamin deficiencies which leads to the need for nutritional supplements. Is there a necessity to compensate through supplements? Could we change the way of sourcing, cooking and eating food to improve our nutritional status?",
              "Right nutrition is 80% and the other 20% is physical activity and good sleep that attributes to healthy living. Insulin resistance, obesity, Diabetes, metabolic disorders and most other lifestyle diseases are managed effectively with right nutrition. Such discussions with our nutritionist could offer several wise options for you to choose your healthy lifestyle.",
              "Body dysmorphic disorder, Bulimia nervosa, anorexia nervosa and other eating disorders or emotional eating need an effective counseling and diet prescription to avoid detrimental effects. We help you to achieve the health goals through a step by step process of counseling with a holistic approach of working with mind and body.",
              "Our Sports Nutritionist could plan the diet chart according to the fitness routine, training schedule, level of competition, travel plan, biochemical parameters and psychology.",
            ],
            layout: "content",
          },
        ]}
      />
    </>
  );
}