import InnerBanner from "@/components/InnerBanner";
import DynamicDepartmentDetail from "@/components/Departments/DynamicDepartmentDetail";

const therapiesMenu = [
  {
    title: "Cranio Sacral Therapy (CST)",
    href: "/therapies/alternate-therapy/cranio-sacral-therapy",
  },
  {
    title: "Musculoskeletal Assessment",
    href: "/therapies/alternate-therapy/musculoskeletal-assessment",
  },
];

export default function MusculoskeletalAssessmentPage() {
  return (
    <>
      <InnerBanner
        title="Musculoskeletal Assessment"
        bgImage="/images/page-banner-bg.png"
      />

      <DynamicDepartmentDetail
        title="Six Healing Sounds"
        sidebarItems={therapiesMenu}
        activeHref="/therapies/alternate-therapy/musculoskeletal-assessment"
        showCTA={false}
        sections={[
          {
            layout: "content",
            eyebrow: "Alternate Therapy",
            icon: "waves",
            content:
              "Six healing sounds is the part of the TCM (Traditional Chinese Medicine) used in healing various conditions. We are aware of the five elements in the Indian tradition (called as Panchabhoota) – earth, water, air, heat or fire and space. In TCM they call it as wood, fire, earth, metal and water. Each element impacts sound in different ways and are believed to impact the human body in a specific way.",
          },

          {
            layout: "imageRight",
            eyebrow: "Six Healing Sounds",
            heading: "The Science of Sound and Healing",
            icon: "waves",
            image: "/images/six-healing-sounds.png",
            imageType: "large",
            content:
              "Sound is the very powerful element and with sound we could alter a lot of things – the world was created by sound says the Big Bang Theory. The Bible too claims that everything was created with sound and Rig Veda also says the same. Sound has so much potential to alter anything. An experiment by Dr Masaru Emoto proved that words and sounds have the ability to transform the molecular structure of water, as evidenced in the patterns made by ice crystals. Since the human body consists of 65% water, it is not difficult to believe that Sound can heal the human body too.",
          },

          {
            layout: "content",
            eyebrow: "Traditional Chinese Medicine",
            heading: "Healing the body through sound",
            icon: "heartPulse",
            content: [
              "TCM recognizes five major organs in the human body – heart, liver, spleen, lung and kidney. They are each assigned an element (fire, earth, metal, water or wood). Every organ also has an associated sound the organ resonates with. Stale and congested qi (energy in the body according to TCM) can be expelled from the affected organ and be replaced with fresh, clear qi by using the healing sounds.",
              "For example, kidney holds the emotion fear. The lung holds the emotion of sadness. The spleen holds the emotion grief. By holding on to these negative emotions, an individual can manifest pain or other ailments in those organs.",
              "Negative emotions cause the qi to get stuck. Depending on where the qi gets stuck, one manifests pain or other discomforts. Stale qi in the spleen may manifest as bloating, abdominal pain, gas, and/or poor digestion. Stale qi in the liver may be experienced as pain or liver/gallbladder dysfunction.",
            ],
            listIcon: "/icons/logo-icon.png",
          },

          {
            layout: "content",
            eyebrow: "SPARRC Expertise",
            heading: "Six Healing Sounds Therapy at SPARRC",
            icon: "handHeart",
            content:
              "SPARRC has therapists trained in Six Healing Sounds – they assess an individual and determine the physical as well as emotional dysfunctions in them and then apply the appropriate healing sounds to give them relief. People who experience the Six Healing Sounds claim they feel relaxed and rejuvenated after these sessions. Call +91 965 965 0000 to learn more about this therapy and how it can benefit you.",
          },
        ]}
      />
    </>
  );
}