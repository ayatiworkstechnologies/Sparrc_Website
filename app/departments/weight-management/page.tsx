import InnerBanner from "@/components/InnerBanner";
import DynamicDepartmentDetail from "@/components/Departments/DynamicDepartmentDetail";

export default function WeightManagementPage() {
  return (
    <>
      <InnerBanner
        title="Weight Management"
        bgImage="/images/page-banner-bg.png"
      />

      <DynamicDepartmentDetail
        title="Sustainable weight management for long-term health."
        showCTA
        cta={{
          icon: "scale",
          title: "Lose Weight. Build Health. Sustain Results.",
          description:
            "Our weight management program combines exercise prescription, nutrition counselling and group support for sustainable results.",
        }}
        sections={[
          {
            eyebrow: "",
            icon: "",
            heading: "Weight Management",
            content:
              "Weight Management has become one of the most sought after services in the health services sector owing to modern lifestyle changes and surging obesity levels. Most weight management tools available to the public are short-term in nature and offer quick fixes by way of diet and weight loss packages. At SPARRC, we take a long-term, sustainable and individualised approach to weight management. We use a combination of exercise prescription and nutrition counselling to offer a permanent weight-loss strategy for our clients. Our group therapy sessions also provide our clients with motivation and peer group comparison to sustain in their efforts to lose weight. Call +91 965 965 0000 to learn more about how you can manage weight sustainably and effectively.",
            image: "/images/weight-management-1.png",
            imageType: "large",
            layout: "imageRight",
          },
          {
            eyebrow: "",
            icon: "scale",
            heading: "Olli Belly",
            content:
              "Our most successful and popular weight management program was conducted in the year 2014, in collaboration with Vijay TV, called the Olli Belly. This was a reality show that captured the weight loss journey of the participants in real-time. As official fitness partner of this show, SPARRC was able to inspire the contestants to lost anywhere from 30 kgs – 50 kgs in a span of just 3 months. This was achieved without any medicinal supplements or surgical interventions. Contestants were coached by SPARRC to adopt right life style, right fitness training and right nutrition to lose weight and set themselves on the road to health.",
            images: [
              "/images/weight-management-2.png",
              "/images/weight-management-3.png",
              "/images/weight-management-4.png",
            ],
            layout: "carouselLeft",
            showFeatures: true,
            features: [
              {
                icon: "scale",
                title: "Weight Loss",
              },
              {
                icon: "utensils",
                title: "Nutrition Care",
              },
              {
                icon: "dumbbell",
                title: "Fitness Training",
              },
              {
                icon: "users",
                title: "Group Support",
              },
            ],
          },
        ]}
      />
    </>
  );
}