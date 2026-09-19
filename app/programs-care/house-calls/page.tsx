import InnerBanner from "@/components/InnerBanner";
import DynamicDepartmentDetail from "@/components/Departments/DynamicDepartmentDetail";

export default function HouseCallsPage() {
  return (
    <>
      <InnerBanner title="House Calls" bgImage="/images/page-banner-bg.png" />

      <DynamicDepartmentDetail
        title="Fitness medicine care delivered at your home."
        showCTA
        cta={{
          icon: "hand",
          title: "Care at Home. Comfort with Confidence.",
          description:
            "Our house call service brings assessments, therapies and prescription exercises to the comfort and privacy of your home.",
        }}
        sections={[
          {
            eyebrow: "",
            icon: "",
            heading: "House Calls",
            content:
              "Your health and well-being is important to us. We want to make it as simple as possible for you to get access to fitness medicine. Our House Calls program brings you assessments, therapies and prescription exercises to the comfort and privacy of your own home. Call +91 965 965 0000 to know more or book your Housecall service.",
            image: "/images/house-calls-1.png",
            imageType: "large",
            layout: "imageRight",
          },
          {
            eyebrow: "",
            icon: "clipboardList",
            heading: "Services available on Housecall",
            points: [
              "Myofascial Trigger Point Therapy",
              "Geriatric Rehabilitation",
              "Neuro Rehabilitation",
              "Avoid Surgery for Musculoskeletal conditions",
              "Nutritional Counselling",
              "Fitness Medicine for Lifestyle Diseases",
            ],
            layout: "pointsCard",
            listIcon: "/icons/logo-icon.png",
          },
        ]}
      />
    </>
  );
}