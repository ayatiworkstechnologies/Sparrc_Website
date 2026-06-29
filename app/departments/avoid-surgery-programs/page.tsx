import InnerBanner from "@/components/InnerBanner";
import DynamicDepartmentDetail from "@/components/Departments/DynamicDepartmentDetail";

export default function AvoidSurgeryProgramsPage() {
  return (
    <>
      <InnerBanner
        title="Avoid Surgery Programs"
        bgImage="/images/page-banner-bg.png"
      />

      <DynamicDepartmentDetail
        title="Expert care to help you avoid unnecessary surgery."
        showCTA
        cta={{
          icon: "shield",
          title: "Avoid Surgery. Restore Movement. Return Stronger.",
          description:
            "Our avoid surgery program helps reduce pain, improve strength and restore performance through myofascial release, pulsation, aquatherapy and rehabilitation.",
        }}
        sections={[
          {
            eyebrow: "",
            icon: "",
            heading: "Avoid Surgery Program",
            content:
              "At SPARRC, we have thus far treated large number of cases that came to us seeking a second medical opinion about surgery to treat a variety of conditions like knee joint pain , spinal disc bulge, spinal prolapse, shoulder dislocation, ACL ligament tear etc. In over 95% of such cases, we have been able to restore the patient to optimal, pain-free state with no surgical intervention. We have also treated elite athletes performing at national and international level competitions including basketball players , shuttle players, tennis player and football players. With SPARRC Avoid surgery Program, all these athletes have been able to return to their competitions.",
            image: "/images/avoid-surgery-programs-1.png",
            imageType: "large",
            layout: "imageRight",
          },
          {
            eyebrow: "Program Approach",
            icon: "",
            heading: "SPARRC Avoid Surgery Program",
            content: [
              "In SPARRC Avoid Surgery Program, the patients are given clarity about their conditions and how we differ with the diagnosis made on an MRI image. In our experience, an MRI image interpretation – a two dimensional picture on a three dimensional reality - gives a false positive in almost 40% of the cases. This creates fear of an issue which may not actually exist in the individual.",
              "At SPARRC, we are able to reduce pain , minimize parasthesias (tingling of prickling sensation) with our mobilization techniques and we bring about strength in the muscular system. Once the underlying condition is treated, the patients are put through a Rehabilitation program and when that is followed through sincerely by the patients, the results are more than fantastic.",
              "While we recommend “avoid surgery” for many conditions, SPARRC will not suggest that to a condition which absolutely requires surgery. There are many conditions which absolutely require surgical care and such patients will be referred to the right surgeons. But, nearly 85% of the patients that come here seeking second opinion do not require surgical intervention.",
              "Our therapies include myofascial release , pulsation, aquatherapy and rehabilitation which have the ability to return athletes and non-athletes to their normal level of performance.",
            ],
            layout: "gradientCard",
            listIcon: "/icons/logo-icon.png",
          },
          {
            eyebrow: "Treatment & Testing",
            icon: "scan",
            heading: "Non-Surgical Recovery Support",
            content:
              "In case you have writing experience but lack academic qualifications, then it may help to attempt to find a second opinion on essays about literature were written by the caliber of your job.",
            images: [
              "/images/avoid-surgery-programs-2.png",
              "/images/avoid-surgery-programs-3.png",
            ],
            layout: "carouselLeft",
            showFeatures: true,
            features: [
              {
                icon: "shield",
                title: "Avoid Surgery",
              },
              {
                icon: "activity",
                title: "Pain Reduction",
              },
              {
                icon: "dumbbell",
                title: "Strength Recovery",
              },
              {
                icon: "personStanding",
                title: "Return to Performance",
              },
            ],
          },
          {
            eyebrow: "",
            icon: "clipboardCheck",
            heading: "CONDITIONS & SURGERIES AVOIDED",
            listIcon: "/icons/logo-icon.png",
            content: [
              "IVDP – Discectomy, Laminectomy",
              "Arthritis – Joint replacements",
              "Ligament Injuries – Reconstruction Surgery",
              "Avascular Necrosis – Partial replacements",
              "pasticity – Soft tissue release surgery",
              "Muscle tears – Muscle repair surgeries",
              "Spondylarthropathies – Arthrodesis surgery",
            ],
            layout: "gradientCard",
          },
        ]}
      />
    </>
  );
}