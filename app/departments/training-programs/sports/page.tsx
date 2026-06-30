import InnerBanner from "@/components/InnerBanner";
import DynamicDepartmentDetail from "@/components/Departments/DynamicDepartmentDetail";

const trainingProgramsMenu = [
  {
    title: "Sports",
    href: "/departments/training-programs/sports",
  },
  {
    title: "Corporate Wellness Program",
    href: "/departments/training-programs/corporate-wellness-program",
  },
  {
    title: "Vocal Athletes",
    href: "/departments/training-programs/vocal-athletes",
  },
  {
    title: "Running and Trekking",
    href: "/departments/training-programs/running-and-trekking",
  },
];

export default function SportsPage() {
  return (
    <>
      <InnerBanner title="Sports" bgImage="/images/page-banner-bg.png" />

      <DynamicDepartmentDetail
        title="Sport specific training for better performance."
        activeHref="/departments/training-programs/sports"
        sidebarItems={trainingProgramsMenu}
        showCTA
        cta={{
          icon: "dumbbell",
          title: "Train Smarter. Perform Better.",
          description:
            "Our sports training program builds strength, endurance, agility and sport-specific performance with personalized exercise planning.",
        }}
        sections={[
          {
            eyebrow: "",
            icon: "",
            heading: "Sports",
            content:
              "Every sport activity has its own specific training to build up fitness levels of players for the particular sport. Role of sport specific training is huge in development of decision making expertise in different sports. In a short pre competition training camp, sports specific program dominates the other physical conditioning programs. The goal of sports specific training remains transference of strength and power training to enhance the performance of the athlete.",
            image: "/images/sports-1.png",
            imageType: "large",
            layout: "imageRight",
          },
          {
            eyebrow: "",
            icon: "activity",
            heading: "Sports Specific Training",
            content:
              "Sports specific training (SST) includes progressive resistance exercises to train for acceleration & stretch – shortening cycle through a certain Range of motion that simulates a movement pattern in a particular sport. These include usage of concentric, eccentric & isometric muscle action followed by performance of bilateral and unilateral, single and multiple joints actions. Exercise regimes are designed in such a way to optimize the preservation of exercise intensity.",
            images: ["/images/sports-2.png", "/images/sports-3.png"],
            layout: "carouselLeft",
            showFeatures: true,
            features: [
              {
                icon: "dumbbell",
                title: "Strength Training",
              },
              {
                icon: "zap",
                title: "Acceleration Power",
              },
              {
                icon: "activity",
                title: "Movement Pattern",
              },
              {
                icon: "target",
                title: "Sport Performance",
              },
            ],
          },
          {
            eyebrow: "",
            icon: "clipboardList",
            heading: "Performance Training Approach",
            content: [
              "Sport specific specialized training drills are given to improve the movement pattern or aerobic fitness requirement for the games like badminton & football respectively.",
              "A set of aerobic exercises are also included to know the heart rate in sport specific training is a valid measure of actual work intensity. Soccer specific drills may be performed as aerobic interval training. Cycling, running or any other aerobic or interval training programs are given to observe adaptations in cardio respiratory fitness.",
              "For example:- A small and very essential component of sprinting is acceleration performance. Feeding an athlete with plyometric, unilateral and horizontal movement of whole body elicits significant increase in sprint acceleration performance, thus highlighting the importance of movement pattern and contraction velocity specificity than giving him bilateral, vertical movements like squats & lunges.",
            ],
            layout: "gradientCard",
            listIcon: "/icons/logo-icon.png",
          },
        ]}
      />
    </>
  );
}