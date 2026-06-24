import DynamicDepartmentCards from "@/components/Departments/DynamicDepartmentCards";
import InnerBanner from "@/components/InnerBanner";


export default function AssessmentsPage() {
    return (
        <>

            <InnerBanner
                title="Assessments"
                bgImage="/images/page-banner-bg.png"
            />

            {/* {Assessments content} */}
            <DynamicDepartmentCards
                eyebrow="DEPARTMENTS"
                title="Assessment"
                description="Scientific assessments designed to understand movement, posture, fitness, strength, flexibility, and physical performance."
                backgroundImage="/images/departments/assessment-bg.png"
                backgroundPosition="center right"
                columns={3}
                items={[
                    {
                        title: "Bio Mechanical Assessment",
                        description:
                            "Biomechanics is the study of Human movement. Biomechanical assessment is the process of analysing the movements of upper body, lower body and spine.",
                        image: "/images/assessment-1.png",
                        href: "/departments/assessments/bio-mechanical-assessment",
                        buttonText: "Read more",
                    },
                    {
                        title: "Musculoskeletal Assessment",
                        description:
                            "The musculoskeletal system is composed of muscles, bones, joints and the other connective tissue components that join these structures.",
                         image: "/images/assessment-1.png",
                        href: "/departments/assessments/musculoskeletal-assessment",
                        buttonText: "Read more",
                    },
                    {
                        title: "Cardio Pulmonary Exercise Testing",
                        description:
                            "It provides assessment of the integrative exercise responses involving the pulmonary, cardiovascular and skeletal systems.",
                         image: "/images/assessment-1.png",
                        href: "/departments/assessments/cardio-pulmonary-exercise-testing",
                        buttonText: "Read more",
                    },
                    {
                        title: "Running Gait Assessment",
                        description:
                            "A running gait analysis is a tool used to assess the way in which you run. It involves the identification of bio-mechanical abnormalities in the running gait.",
                        image: "/images/assessment-1.png",
                        href: "/departments/assessments/running-gait-assessment",
                        buttonText: "Read more",
                    },
                    {
                        title: "Other Assessments",
                        description:
                            "Articular Cartilage is the tissue at the end of the bones that aids in the movement in a joint. When this cartilage is damaged either by injury or by wear and tear.",
                        image: "/images/assessment-1.png",
                        href: "/departments/assessments/other-assessments",
                        buttonText: "Read more",
                    },
                ]}
            />



        </>
    );
}