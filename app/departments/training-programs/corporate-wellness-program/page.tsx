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

export default function CorporateWellnessProgramPage() {
  return (
    <>
      <InnerBanner
        title="Corporate Wellness Program"
        bgImage="/images/page-banner-bg.png"
      />

      <DynamicDepartmentDetail
        title="Workplace wellness for healthier teams."
        activeHref="/departments/training-programs/corporate-wellness-program"
        sidebarItems={trainingProgramsMenu}
        showCTA
        cta={{
          icon: "users",
          title: "Healthier Teams. Better Productivity.",
          description:
            "Our corporate wellness program helps employees stay active, reduce health risks, improve well-being and build stronger workplace performance.",
        }}
        sections={[
          {
            eyebrow: "",
            icon: "",
            heading: "Corporate Wellness Program",
            content:
              "Prolonged working hours seated at the desk, high stress jobs involving deadlines and targets, erratic eating habits are all hazards of a white collar job. Finding time to exercise in the middle of the daily bustle becomes almost impossible unless we put our mind to it. SPARRC Corporate training program is all about educating corporate employees on how to be fitness friendly even while their jobs consume them. This SPARRC program is designed to minimize the health risks for employees thereby increasing productivity and minimizing absenteeism for employers.",
            image: "/images/corporate-wellness-program-1.png",
            imageType: "large",
            layout: "imageRight",
          },
          {
            eyebrow: "",
            icon: "clipboardList",
            heading: "Program Highlights",
            content: [
              "SPARRC Corporate Wellness programs are designed to encourage, engage and motivate employees to get active and seek wellness. The program features interactive sessions and awareness talks for employees to take charge of their health and increase productivity.",
              "SPARRC also helps in team building activities as part of the employee emotional well-being and interpersonal relationships through",
              "Expressive art therapy",
              "MBTI* Personality Typing Program",
              "Counseling",
              "The Myers Briggs Type Indicator (MBTI) assessment is a popular and highly effective personal assessment tool for discovering your individual strengths and styles, and also, learning about how to work with others and build stronger teams. For engaging SPARRC to train your employees, call +91 965 965 0000.",
            ],
            layout: "gradientCard",
            listIcon: "/icons/logo-icon.png",
          },
        ]}
      />
    </>
  );
}