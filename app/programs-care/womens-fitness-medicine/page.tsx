import InnerBanner from "@/components/InnerBanner";
import DynamicDepartmentDetail from "@/components/Departments/DynamicDepartmentDetail";

export default function WomensFitnessMedicinePage() {
  return (
    <>
      <InnerBanner
        title="Women's Fitness Medicine"
        bgImage="/images/page-banner-bg.png"
      />

      <DynamicDepartmentDetail
        title="Helping women build strength, confidence and better health."
        showCTA
        cta={{
          icon: "heartPulse",
          title: "Stay Strong. Stay Confident. Stay Healthy.",
          description:
            "Our women's fitness medicine program supports strength, emotional wellness, fitness, nutrition and sustainable health routines for women.",
        }}
        sections={[
          {
            eyebrow: "",
            icon: "heartPulse",
            heading: "Women's Fitness Medicine",
            content:
              "Women's health is perhaps the most important yet most neglected in a family's healthcare. Indian women take their ‘nurturer’ role very seriously and contribute immensely to the welfare of their families but mostly fail to take care of themselves. SPARRC’s Women’s Fitness Medicine focuses on making women understand the significance of their health and equips them with a simple and sustainable fitness routine and nutrition profile.",
            image: "/images/womens-fitness-medicine-1.png",
            imageType: "large",
            layout: "imageRight",
          },
          {
            eyebrow: "‘Don’t let anyone tell you are weak because you are a woman’! – Mary Kom",
            icon: "sparkles",
            heading:
              "",
            content:
              "Weight gain, loss of confidence, depression and anxiety are the various issues that Indian women face owing to their lifestyle and scant importance given to their fitness and health. Women go through many stages of physical, emotional and social upheavals in their lives like menarchy, marriage and moving away from the parental home, pregnancy and child-birth and later menopause. All of these events put enormous pressure on women’s physical and mental health and it is the individual and their family’s duty to recognize the importance of their fitness and health.",
            layout: "gradientCard",
          },
          {
            eyebrow: "",
            icon: "activity",
            heading: "Women’s Fitness Programs",
            content: [
              "SPARRC offers various individual and group fitness programs for women specifically. Move 2 Music is a Dance Therapy program where women participate enthusiastically shedding their inhibitions and gaining fitness and confidence. Yoga, Taichi, Breathing sessions are also ideally suited for women to improve on their stability and focus.",
              "Call +91 965 965 0000 to learn more about the specific fitness programs for women available at SPARRC.",
            ],
            layout: "gradientCard",
            listIcon: "/icons/logo-icon.png",
          },
        ]}
      />
    </>
  );
}