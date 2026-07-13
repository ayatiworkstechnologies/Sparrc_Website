import InnerBanner from "@/components/InnerBanner";
import DynamicDepartmentDetail from "@/components/Departments/DynamicDepartmentDetail";

export default function AquatherapyPage() {
  return (
    <>
      <InnerBanner
        title="Aquatherapy"
        bgImage="/images/page-banner-bg.png"
      />

      <DynamicDepartmentDetail
        title="Aquatherapy"
        showCTA={false}
        sections={[
          {
            layout: "content",
            icon: "waves",
            content:
              "There are many facets to healing and one successful arm of treatment is AQUATHERAPY, which has been the backbone of the SPARRC “Stay Healthy” regime.",
          },

          {
            layout: "carouselLeft",
            heading:
              "Improves Balance, Circulation, Muscle Strength and Relaxation.",
            icon: "waves",
            images: [
              "/images/aquatherapy-1.png",
              "/images/aquatherapy-2.png",
            ],
            showFeatures: false,
            content:
              "Aquatherapy or exercising in water helps a variety of people with their health problems. Under water, body weight is reduced by 90 per cent and the buoyancy gives the extra lift to make even the most difficult exercises doable. For example, people with knee problems are generally advised not to squat. In water, such people can do squats without discomfort or risk of injury and reap benefits such as improved muscle tone, balance, strength, muscular endurance and cardio respiratory endurance.",
          },

          {
            layout: "content",
            heading: "Who should do Aquatherapy?",
            icon: "personStanding",
            content: [
              "Almost everyone, especially those suffering from knee pain, osteoarthritis, osteoporosis and those who are looking forward to avoid a joint replacement surgery. The Geriatric population can experience improvement in strength and muscle tone. Those with Ataxia (which causes loss of balance) find that they are steadier on their feet and those with respiratory problems find that the water pressure strengthens the diaphragm, improving the musculature in the chest area thereby strengthening their lungs.",
              "The biggest advantage of Aquatherapy is the ability to exercise with ease under water. SPARRC Aquatic exercise program is the most enjoyed weight loss training schedule. One does burn calories effortlessly under water.",
            ],
          },

          {
            layout: "pointsCard",
            heading: "Aquatherapy can be used for treating",
            icon: "activity",
            listIcon: "/icons/logo-icon.png",
            points: [
              "Arthritis",
              "Ligament injuries",
              "Low back pain",
              "Limb oedema",
              "Avoiding surgery",
              "Managing post surgical management",
              "Gait training for patients with altered walking patterns",
            ],
          },

          {
            layout: "content",
            icon: "footprints",
            content:
              "It also assists in gait training for patients with altered walking patterns, which aids in adapting the normal walking ability.",
          },

          {
            layout: "content",
            heading: "Aquatherapy at SPARRC",
            icon: "shield",
            content: [
              "At SPARRC all the exercises done in water are done under the guidance of trained physiotherapist. A person not used to swimming or water is advised to start Aquatherapy for five minutes and increase it slowly to a one hour session. The exercises may seem gentle and easy but the after effects are quite substantial. The session always begins with a warm up. Half an hour of Aquatherapy is equal to an hour of walking or workouts in the gym.",
              "SPARRC encourages and ensures recovery without pain through Aquatherapy. Call us to find more about how you can benefit from Aquatherapy.",
            ],
          },
        ]}
      />
    </>
  );
}