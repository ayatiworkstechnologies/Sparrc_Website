import InnerBanner from "@/components/InnerBanner";
import DynamicDepartmentDetail from "@/components/Departments/DynamicDepartmentDetail";

export default function PainManagementPage() {
  return (
    <>
      <InnerBanner title="Pain Management" bgImage="/images/page-banner-bg.png" />

      <DynamicDepartmentDetail
        title="Relieving pain and restoring movement."
        showCTA
        cta={{
          icon: "handHeart",
          title: "Reduce Pain. Restore Movement. Live Better.",
          description:
            "Our pain management program identifies the root cause of pain and helps restore mobility through myofascial release, movement therapy and prescription exercises.",
        }}
        sections={[
          {
            eyebrow: "",
            icon: "handHeart",
            heading: "Pain Management",
            content:
              "The most debilitating aspect of human life is pain and people are very upset when they have pain, irrespective of the disease that they may have. They might even live with a disease for many years, but when they develop pain, they are really uncomfortable. Removing pain has been the major challenge that SPARRC has undertaken and has achieved quite a bit of success with it.",
            layout: "content",
          },
          {
            eyebrow: "",
            icon: "stethoscope",
            heading: "What causes Pain and how do we treat it?",
            content:
              "Conventional approach to pain management suggests that pain comes from the degenerative structures of the joint or disc. But the most common reason for pain comes from the myofascial tissue – the muscle and the covering of the muscle called fascia. These structures emote with us and also take the structural load of the body . It is SPARRC’s unique approach to manage pain with myofasical trigger point release therapy – this can reduce pain in most of the condition in an about a week to 10 days. Once a person has relief from pain, we move them on to an exercise program which is the key element in preventing pain from re-appearing. SPARRC pain management program identifies the cause without biochemical tests, avoids pharmacological prescriptions for treatment and ultimately avoids surgical intervention. SPARRC’s goal is to restore the individual to a pain-free status as quickly as possible with the application of myofasial trigger point release and exercise prescription.",
            layout: "content",
          },
          {
            eyebrow: "",
            icon: "target",
            heading: "Understanding the Cause of Pain",
            intro: "SPARRC is keen on understanding whether:",
            points: [
              "There are changes in the mechanical principles that are creating the trouble",
              "There is change in the biochemistry of the individual which can go from endocrine organs to muscles",
              "It is due to any other tissues which are not given proper stimulus",
              "The individual is not breathing optimally which can cause biochemical changes",
              "There are social and psychological aspects which are also known factors in creating pain",
            ],
            layout: "pointsCard",
            listIcon: "/icons/logo-icon.png",
          },
          {
            eyebrow: "",
            icon: "activity",
            heading: "Individual Pain Treatment",
            content:
              "The treatment is chosen individually for every patient to treat the underlying cause and then eliminate pain. The goal is to reduce/eliminate pain and restore the full range of motion for the individual, without bio-mechanical & radiological testing, pharmaceutical prescriptions or surgical interventions.",
            images: [
              "/images/pain-management-1.png",
              "/images/pain-management-2.png",
            ],
            layout: "carouselLeft",
            showFeatures: true,
            features: [
              {
                icon: "target",
                title: "Root Cause Care",
              },
              {
                icon: "activity",
                title: "Movement Therapy",
              },
              {
                icon: "handHeart",
                title: "Pain Relief",
              },
              {
                icon: "shield",
                title: "Avoid Surgery",
              },
            ],
          },
          {
            eyebrow: "",
            icon: "clipboardList",
            heading: "Types of Pain",
            intro: "The most common complaints that we address are pain in the knees, back, neck and shoulders ",
            points: [
              "We also treat pain that results from injuries and previous surgeries.",
              "Any form of pain could be managed at SPARRC but for those who need further investigations and referrals SPARRC will be able to direct them to the right physicians/surgeons.",
              "Many people continue with low level pain for several days/months before it is made acute by a sudden movement or incident and then they come seeking help. Even in such cases, once we diagnose the underlying causes, we have had success in treating their pain and restoring full range of movements.",
            ],
            layout: "pointsCard",
            listIcon: "/icons/logo-icon.png",
          },
          {
            eyebrow: "",
            icon: "shield",
            heading: "Preventing Pain",
            content:
              "Preventing Pain SPARRC is also committed to preventing pain rather than just treating pain. The pain manifestation is normally from a structural damage. In SPARRC, we strive to find out before there is a structural damage whether there are any functional incapacities which could manifest as pain. Addressing factors that could cause pain in the long run by prescription exercises and movement therapy is a key element of SPARRC’s commitment to our clients.",
            layout: "content",
          },
        ]}
      />
    </>
  );
}