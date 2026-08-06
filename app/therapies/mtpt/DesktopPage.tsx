import InnerBanner from "@/components/InnerBanner";
import DynamicDepartmentDetail from "@/components/Departments/DynamicDepartmentDetail";

export default function MTPTPage() {
    return (
        <>
            <InnerBanner
                title="Myofascial Trigger Point Therapy"
                bgImage="/images/page-banner-bg.png"
            />

            <DynamicDepartmentDetail
                title="Myofascial Trigger Point Therapy"
                showCTA={false}
                sections={[
                    {
                        layout: "content",
                        eyebrow: "Myofascial Pain Syndrome",
                        heading: "Understanding Myofascial Pain Syndrome",
                        icon: "activity",
                        content:
                            "Myofascial Pain Syndrome is a chronic pain condition that results from pressure on certain sensitive areas on the muscles (trigger points). The pain could be observed either directly on the affected muscles or sometimes elsewhere that is seemingly unrelated.",
                    },

                    {
                        layout: "carouselLeft",
                        eyebrow: "MTPT",
                        heading: "Myofascial Trigger Point Therapy",
                        icon: "handHeart",
                        images: [
                            "/images/mtpt-1.jpg",
                            // "/images/therapies/mtpt/mtpt-2.jpg",
                            // "/images/therapies/mtpt/mtpt-3.jpg",
                        ],
                        content: [
                            "Myofascial Trigger Point Therapy is a very good first line of treatment for Myofascial Pain Syndrome. Trigger points are formed owing to a multitude of causative factors ranging from overuse, abuse/misuse, and disuse of the myofascial system, to even emotional and psychological stress. By palpating the patient’s body, a skilled clinician or therapist is able to identify the trigger points and other areas of altered tone, texture, contour and temperature, all indicative of myofascial adhesions and ill-health.",
                            "The therapy involves skillful application of appropriate pressure over the affected area which relieves the myofascia—the dense, tough tissue which surrounds and covers all of the muscles and bones in the body—of this malady, thereby improving its suppleness. This results in better microcirculation, a significant reduction of pain and, most importantly, better movement.",
                            "SPARRC is a pioneer in the field of Myofascial Trigger Point Therapy and has very skilled therapists who are able to work on the trigger points to relieve patients of pain.",
                        ],
                        showFeatures: false,
                    },

                    {
                        layout: "splitList",
                        heading: "MTPT is also useful in treating conditions such as",
                        points: [
                            "Headache (diagnosed as migraine)",
                            "Vertigo",
                            "Trigeminal neuralgias",
                            "Hemifacial spasms",
                            "Facial pains",
                            "Tinnitus",
                            "Hard of hearing",
                            "Shoulder subluxations and dislocations",
                            "Fibromyalgia",
                            "Complex regional pain syndrome",
                            "Peripheral neuropathy",
                            "Thoracic outlet syndrome",
                            "Radiculopathy",
                        ],
                        pointIconImage: "/icons/logo-icon.png",

                        // Exactly 8 points are visible initially.
                        initialVisiblePoints: 8,

                        // Controls the gap between each scroll reveal.
                        revealStagger: 0.16,
                    }
                ]}
            />
        </>
    );
}