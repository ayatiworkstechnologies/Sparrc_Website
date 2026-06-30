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

export default function RunningAndTrekkingPage() {
  return (
    <>
      <InnerBanner
        title="Running and Trekking"
        bgImage="/images/page-banner-bg.png"
      />

      <DynamicDepartmentDetail
        title="Training support for safer running and trekking."
        activeHref="/departments/training-programs/running-and-trekking"
        sidebarItems={trainingProgramsMenu}
        showCTA
        cta={{
          icon: "footprints",
          title: "Run Better. Trek Stronger. Prevent Injuries.",
          description:
            "Our running and trekking program supports performance, biomechanics, footwear guidance, training plans and injury prevention.",
        }}
        sections={[
          {
            eyebrow: "",
            icon: "",
            heading: "Running and Trekking",
            content:
              "Ever since hominids developed the trait of bipedalism, we have been running to prey or to escape the predator. The running action is an effective aerobic exercise that improves cardiac health which can substantially reduce the risk of any heart damage. Running as a sustained exercise routine for fitness, imposes certain extreme demands on the body. SPARRC training program for running & trekking is designed to assess the form of the athlete, give them corrective exercise prescriptions to prevent injuries, right training schedule to enhance performance and optimal nutrition advice for supporting the physical demands on the body.",
            image: "/images/running-and-trekking-1.png",
            imageType: "large",
            layout: "imageRight",
          },
          {
            eyebrow: "",
            icon: "target",
            heading: "What areas will be the focus of the training?",
            content:
              "Selection of the terrain or surface to run, ideal footwear, weather conditions, correct running technique, adequate strength training, right nutrition and proper biomechanics are some of the factors that will be focussed on during the training to enhance the performance of the athlete.",
            image: "/images/running-and-trekking-2.png",
            imageType: "large",
            layout: "imageLeft",
          },
          {
            eyebrow: "",
            icon: "clipboardCheck",
            heading: "Assessment and Treatment",
            content: [
              "Running gait assessment helps the physiotherapist and the physician plan a customized training schedule based on the runner's goal. A beginner who wants to cross 5kms or a seasoned runner who runs 70-80 miles a week, neither is an exception for sustaining injuries.",
              "Most runners go through myofascial pain or musculoskeletal conditions like shin splints, hamstring strain, IT band injuries, runner's knee and stress fracture. Remedial corrections through bio-mechanical assessment of running action, physiotherapy, corrective exercise plan for the postural and structural abnormalities, customised orthotics, aqua jogging and strengthening programs are the treatment advised at SPARRC.",
            ],
            layout: "gradientCard",
            listIcon: "/icons/logo-icon.png",
          },
        ]}
      />
    </>
  );
}