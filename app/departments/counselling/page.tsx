import DynamicDepartmentCards from "@/components/Departments/DynamicDepartmentCards";
import InnerBanner from "@/components/InnerBanner";

export default function CounsellingPage() {
  return (
    <>
      <InnerBanner title="Counselling" bgImage="/images/page-banner-bg.png" />

      <DynamicDepartmentCards
        eyebrow="DEPARTMENTS"
        title="Counselling"
        description="Health is a combination of physical and emotional wellbeing which are influenced by our lifestyle including physical activities, food and psycho-socio interactions. SPARRC aims to improve all aspects of a person’s wellbeing and offers Counselling services to offer wholesome wellness solutions to our clients."
        backgroundImage="/images/sub-banner-content-bg.png"
        columns={2}
        items={[
          {
            title: "Emotional Wellness",
            description:
              "Combating stress is mental gymnastics and SPARRC mental health professionals understand the need of every individual and their lifestyle.",
            image: "/images/emotional-wellness.png",
            href: "/departments/counselling/emotional-wellness",
            buttonText: "Read more",
          },
          {
            title: "Nutrition and Diet",
            description:
              "Right nutrition is 80% and the other 20% is physical activity and good sleep that contributes to healthy living.",
            image: "/images/nutrition-and-diet.png",
            href: "/departments/counselling/nutrition-and-diet",
            buttonText: "Read more",
          },
        ]}
      />
    </>
  );
}