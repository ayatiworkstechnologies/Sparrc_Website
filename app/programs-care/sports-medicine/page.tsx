import InnerBanner from "@/components/InnerBanner";
import DynamicDepartmentDetail from "@/components/Departments/DynamicDepartmentDetail";

export default function SportsMedicinePage() {
    return (
        <>
            <InnerBanner title="Sports Medicine" bgImage="/images/page-banner-bg.png" />

            <DynamicDepartmentDetail
                title="Personalized care for injury prevention, rehabilitation and peak athletic performance."
                showCTA
                cta={{
                    icon: "dumbbell",
                    title: "Prevent Injuries. Recover Faster. Perform Better.",
                    description:
                        "Our sports medicine program helps athletes prevent injuries, recover safely and return to sport with stronger performance.",
                }}
                sections={[
                    {
                        eyebrow: "",
                        icon: "",
                        heading: "Sports Medicine",
                        content:
                            "If you are a high performance sportsperson or an elite athlete, you require expert assistance in the areas of injury prevention, injury management, rehabilitation after injury, performance maintenance and performance enhancement. The primary focus of Sports Medicine will be to ensure that elite athletes avoid injuries by proper rehabilitation. However, when injury happens, Sports Medicine ensures that the injury is managed well and the athlete is rehabilitated to return to their sports at the earliest and avoid a recurrence of the same injury. It is SPARRC’s goal to return the athletes to a higher level of performance than their level before the injury. Sports Medicine involves several specialists like Sports Trainers , Sports Physiotherapists, Sports Nutritionist and Sports Psychologist who monitor, correct and balance the biomechanics , Kinesiology , exercise physiology and sports physiotherapy. Whether you are a professional, recreational or scholastic athlete, our approach to sports medicine rehabilitation services is simple – personalized care with exceptional outcomes.",
                        images: [
                            "/images/sports-medicine-1.png",
                            "/images/sports-medicine-2.png",
                        ],
                        layout: "carouselRight",
                        showFeatures: true,
                        features: [
                            {
                                icon: "shield",
                                title: "Injury Prevention",
                            },
                            {
                                icon: "activity",
                                title: "Injury Management",
                            },
                            {
                                icon: "dumbbell",
                                title: "Performance Enhancement",
                            },
                            {
                                icon: "users",
                                title: "Expert Sports Team",
                            },
                        ],
                    },
                    {
                        eyebrow: "",
                        icon: "clipboardList",
                        heading: "Sports Related Complaints",
                        intro:
                            "Our specialist sports physios are highly experienced in the assessment and treatment of soft tissue injuries, with award winning knowledge of biomechanics, tissue pathology and healing. They carry out a thorough assessment, treatment and rehabilitation for all musculoskeletal injuries for all sports related complaints including:",
                        points: [
                            "Overuse injuries and stress fractures",
                            "Muscle tears, tendon and ligament sprains",
                            "Knee, ankle and foot injuries",
                            "Shoulder injuries, tennis/golfer elbow, hand and wrist pain",
                        ],
                        layout: "pointsCard",
                        listIcon: "/icons/logo-icon.png",
                    }
                ]}
            />
        </>
    );
}