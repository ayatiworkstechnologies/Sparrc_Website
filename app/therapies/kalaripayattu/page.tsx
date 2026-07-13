import InnerBanner from "@/components/InnerBanner";
import DynamicDepartmentDetail from "@/components/Departments/DynamicDepartmentDetail";

export default function KalaripayattuPage() {
  return (
    <>
      <InnerBanner
        title="Kalaripayattu"
        bgImage="/images/page-banner-bg.png"
      />

      <DynamicDepartmentDetail
        title="Kalaripayattu"
        showCTA={false}
        sections={[
          {
            layout: "content",
            content:
              "Kalaripayattu is an indigenous Martial Art form of Southern India. The art was practiced extensively in southern India to prepare soldiers for battle. Kalam = field and Payattu = Practice. Kalaripayattu means preparation for the battle field. When the body is ready for war, everything else takes a backseat, including disease.",
          },

          {
            layout: "imageRight",
            heading: "CVN Kalari",
            image: "/images/kalaripayattu-1.png",
            imageType: "large",
            content:
              "Guru Shri C V Bala Nair ( C V Narayanan's brother) was the founder of CVN Kalari in Kerala. Shri C V Narayanan (CVN) learnt the martial art form and did several stage shows and demonstrations all over the world to popularize the martial art form.",
          },

          {
            layout: "content",
            heading: "Muralikrishnan C R",
            content:
              'Grandson of Shri C.V. Narayanan (CVN), Marali hails from the Kalaripayattu family. He began practicing from the age of 8 years, and was the direct disciple of CVN. He practices Uzhichil as a part of therapy in Kalari. He has his association with SPARRC for 8 years. Being the mother of all martial arts, Murali says, “It is not just a martial art, it is an art itself!” He has trained several of various age groups ranging from 8 years to 50 years in Kerala, Tamil Nadu and abroad.',
          },

          {
            layout: "imageLeft",
            heading:
              "Practicing Kalaripayattu thrice a week for an hour can help individuals in",
            image: "/images/kalaripayattu-2.png",
            imageType: "large",
            listIcon: "/icons/logo-icon.png",
            content: [
              "Rejuvenating their body",
              "Strength training",
              "Flexibility",
              "Coordination",
              "Balance",
              "Speed, and Agility",
            ],
          },

          {
            layout: "imageRight",
            image: "/images/kalaripayattu-3.png",
            imageType: "large",
            content:
              "The practice is aimed at not only improving one’s physical capacity but also at improving their mental agility, sharpness and focus. This is a really useful practice for children and even older adults. Call +91 965 965 0000 to know about where you can join SPARRC Kalari classes.",
          },
        ]}
      />
    </>
  );
}