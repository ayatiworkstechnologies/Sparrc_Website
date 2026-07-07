import InnerBanner from "@/components/InnerBanner";
import DynamicDepartmentDetail from "@/components/Departments/DynamicDepartmentDetail";

export default function PediatricFitnessProgramPage() {
  return (
    <>
      <InnerBanner
        title="Pediatric Fitness Program"
        bgImage="/images/page-banner-bg.png"
      />

      <DynamicDepartmentDetail
        title="Building healthy movement habits in children."
        showCTA
        cta={{
          icon: "sparkles",
          title: "Move Early. Learn Better. Grow Stronger.",
          description:
            "Our pediatric fitness program helps children improve balance, coordination, strength, concentration and overall physical development.",
        }}
        sections={[
          {
            eyebrow: "",
            icon: "sparkles",
            heading: "Pediatric Fitness Program",
            content: [
              "Pediatric Sports and Fitness Medicine department for children and teens deals with diagnosing and treating musculoskeletal issues through exercise interventions. This speciality guides by providing early exercise interventions to prevent lifestyle diseases in young ones.",
              "Children of the modern age, are victims of a society that expects a lot out of them mentally and so little physically. They have been made to slave over books and lead a life of inactivity that has ensured that they will surely be patients even when they become Doctors in the future. Pediatric Fitness Medicine focuses on making children move – movements that will ensure better balance, superior co-ordination and better overall development that will, in fact, also make better learners out of them.",
            ],
            layout: "content",
          },
          {
            eyebrow: "",
            icon: "brain",
            heading:
              "Physical development and Brain development are interconnected. When kids are active, their brain develops, allowing increased concentration and energy.",
            content:
              "Pediatric Fitness Medicine is a preventive program rather than a curative one. When children are taught the importance of physical activity at a young age, they are able to make it into a lifelong habit. They also become instrumental in bringing about an attitude change in the entire family and motivate others to also take up fitness as a lifestyle.",
            image: "/images/pediatric-fitness-program-1.png",
            imageType: "large",
            layout: "imageRight",
          },
          {
            eyebrow: "",
            icon: "activity",
            heading: "Benefits of Pediatric Fitness",
            content: [
              "Beyond the benefits of strength, endurance and co-ordination, studies have shown that early physical activity may also favourably alter selected anatomic and psychosocial parameters.",
              "SPARRC’s Pediatric Fitness Physicians and Therapists work with children in a variety of ways to make the sessions productive as well as fun for the participants ensuring that children adopt fitness with enthusiasm.",
            ],
            layout: "gradientCard",
            listIcon: "/icons/logo-icon.png",
          },
        ]}
      />
    </>
  );
}