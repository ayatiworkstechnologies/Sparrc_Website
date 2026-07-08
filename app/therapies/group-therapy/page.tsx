import InnerBanner from "@/components/InnerBanner";
import DynamicDepartmentDetail from "@/components/Departments/DynamicDepartmentDetail";

export default function GroupTherapyPage() {
  return (
    <>
      <InnerBanner
        title="Group Therapy"
        bgImage="/images/page-banner-bg.png"
      />

      <DynamicDepartmentDetail
        title="Group Therapy"
        showCTA={false}
        sections={[
          {
            layout: "imageRight",
            image: "/images/group-therapy-1.png",
            imageType: "large",
            content:
              "Healing is dependent on both Physical wellness and Mental wellness and Group Therapies play a large role in enhancing both kinds of wellness. People who work out in groups experience many-pronged benefits in the form of fitness and motivation. SPARRC recognizes this and organizes several Group Activities to help our clients commit to fitness and health. Here is a list of some of our Group Therapy activities:",
          },

          {
            layout: "carouselLeft",
            images: [
              "/images/group-therapy-2.png",
              
            ],

            listIcon: "/icons/logo-icon.png",

            content: [
              "Run for Life (RFL) organized on a weekend every month to encourage walking and moving.",
              "Move to Music (M2M) is a group activity that involves dancing to relieve stress and improve co-ordination and flexibility.",
              "Breathe Right program",
              "Weekend Group Activity",
              "Special events for specific interest groups like Diabetes, Stress Management etc.",
              "Check with your nearest SPARRC centre or call +91 965 965 0000 for more details and dates to participate in these activities.",
            ],

            showFeatures: false,
          },
        ]}
      />
    </>
  );
}