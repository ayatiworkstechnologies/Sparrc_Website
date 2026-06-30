import DynamicDepartmentCards from "@/components/Departments/DynamicDepartmentCards";
import InnerBanner from "@/components/InnerBanner";

export default function TrainingProgramsPage() {
  return (
    <>
      <InnerBanner
        title="Training Programs"
        bgImage="/images/page-banner-bg.png"
      />

      <DynamicDepartmentCards
        eyebrow="DEPARTMENTS"
        title="Training Programs"
        description="Exercise is not just about strengthening or increasing flexibility or increasing stamina. It is that as well as much more, involving training the Neuromuscular system to incorporate movement patterns that maximise performance and minimise injuries. At SPARRC our training program includes Rehabilitation and Prehabilitation protocols comprising of:"
        backgroundImage="/images/sub-banner-content-bg.png"
        columns={2}
        items={[
          {
            title: "Sports",
            description:
              "Every sport activity has its own specific training to build up fitness levels of players for the particular sport. Role of sport specific training is huge in development of decision making expertise in different sports.",
            image: "/images/training-programs-1.png",
            href: "/departments/training-programs/sports",
            buttonText: "Read more",
          },
          {
            title: "Corporate Wellness Program",
            description:
              "Prolonged working hours seated at the desk, high stress jobs involving deadlines and targets, erratic eating habits are all hazards of a white collar job.",
            image: "/images/training-programs-2.png",
            href: "/departments/training-programs/corporate-wellness-program",
            buttonText: "Read more",
          },
          {
            title: "Vocal athletes",
            description:
              "Voice Exercise or Singing Fitness can benefit singers to improve their ability to sing. Training the small muscles that are present in the neck and chest builds the strength.",
            image: "/images/training-programs-3.png",
            href: "/departments/training-programs/vocal-athletes",
            buttonText: "Read more",
          },
          {
            title: "Running and Trekking",
            description:
              'Cancer is the condition of body that allows uncontrolled mitosis called cell division. It is very common for every cell to have what is called as "contact inhibition".',
            image: "/images/training-programs-4.png",
            href: "/departments/training-programs/running-and-trekking",
            buttonText: "Read more",
          },
        ]}
      />
    </>
  );
}