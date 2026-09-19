import InnerBanner from "@/components/InnerBanner";
import DynamicDepartmentDetail from "@/components/Departments/DynamicDepartmentDetail";

export default function PreAndPostNatalFitnessPage() {
  return (
    <>
      <InnerBanner
        title="Pre And Post Natal Fitness"
        bgImage="/images/page-banner-bg.png"
      />

      <DynamicDepartmentDetail
        title="Scientific fitness care for pregnancy, motherhood and safe recovery."
        showCTA
        cta={{
          icon: "heartHandshake",
          title: "Stay Strong. Recover Safely. Feel Better.",
          description:
            "Our pre and post-natal fitness program supports safe pregnancy, healthy recovery, posture care and strength restoration after delivery.",
        }}
        sections={[
          {
            eyebrow: "",
            icon: "",
            heading: "Pre And Post Natal Fitness",
            content:
              "Pregnancy is a major health event in a woman's life and fitness is one of the most important factor for her dealing with it successfully. Unfortunately, fitness is one of the most overlooked aspects at this point in her life. While family pampers her with what she craves to eat many also do the mistake of being over cautious and completely restrict movement while they are pregnant. This has the potential not only to complicate delivery but also her recovery post delivery is delayed. SPARRC takes a very scientific approach to pre and post-natal fitness, keeping in mind the cultural nuances of our population and the psycho-social aspects of pregnancy and motherhood.",
            image: "/images/pre-and-post-natal-fitness-1.png",
            imageType: "large",
            layout: "imageRight",
          },
          {
            eyebrow: "",
            icon: "heartPulse",
            heading: "Pre-Natal Fitness",
            content:
              "There are several aspects to a woman's fitness during pregnancy. It is important to make sure that she does develop gestational diabetes during this period (which predisposes to her contracting the lifestyle disease later in life) and also to ensure that her weight is managed appropriately. Excess weight gain during the pregnancy period is very commonly observed since women minimise physical activity, in order to ensure safety, and also indulge unabashedly in food cravings. Back Pain is commonly observed during and after pregnancy if the back is not strong enough to carry the extra weight during pregnancy. Fitness also involves the mother’s ability to carry the foetus for the full-term and deliver the baby without complications and preferably without surgery. Pre-natal fitness is also crucial to quick recovery post-pregnancy. Many women struggle with regaining their pre-pregnancy form after delivery and this also puts enormous psychological stress on their ability to enjoy the precious moments of motherhood.",
            layout: "gradientCard",
          },
          {
            eyebrow: "",
            icon: "waves",
            heading: "Pregnancy Fitness Protocol",
            content:
              "SPARRC addresses both the physical fitness needs and the nutritional needs of the mother during this delicate stage in their lives. The pregnant mother is evaluated to include their height, weight and body mass index for prescribing fitness protocol. Their pressure and pulse rate is also considered such that when they exercise their pulse rate should be maintained at appropriate levels so that the child is benefitted by the movement and not debrided of any blood supply. Aquatherapy has proven very useful for women to workout without putting pressure on themselves or experiencing any pain. The exercise program includes Swiss Ball, Mat Exercises, EFX as well as TRX – to ensure that the posture is good and correct in order to have a safe and easy delivery",
            images: [
              "/images/pre-and-post-natal-fitness-2.png",
              "/images/pre-and-post-natal-fitness-3.png",
              
            ],
            layout: "carouselLeft",
            showFeatures: true,
            features: [
              {
                icon: "heartPulse",
                title: "Safe Pregnancy Fitness",
              },
              {
                icon: "activity",
                title: "Posture & Back Care",
              },
              {
                icon: "utensils",
                title: "Nutrition Support",
              },
              {
                icon: "waves",
                title: "Aquatherapy",
              },
            ],
          },
          {
            eyebrow: "",
            icon: "heartHandshake",
            heading: "Post-Natal Fitness",
            content:
              "Motherhood comes with lots of joy and lots of challenges. Sleepless nights and sitting up for breast feeding can't be easy on anyone. Women rarely find a moment to spare for themselves but it is very important that they spend a few moments for their own fitness at this stage. SPARRC's post-natal fitness program addresses all the needs of a new mother – strong back that supports breast feeding, quick shedding of excess pregnancy fat etc. Group therapy also helps them in socialising with others who are experiencing similar conditions in life and learn from each other's stories.",
            layout: "gradientCard",
          },
        ]}
      />
    </>
  );
}