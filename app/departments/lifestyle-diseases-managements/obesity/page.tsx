import InnerBanner from "@/components/InnerBanner";
import DynamicDepartmentDetail from "@/components/Departments/DynamicDepartmentDetail";

const lifestyleMenu = [
    {
        title: "Diabetes",
        href: "/departments/lifestyle-diseases-managements/diabetes",
    },
    {
        title: "Obesity",
        href: "/departments/lifestyle-diseases-managements/obesity",
    },
    {
        title: "Hypertension",
        href: "/departments/lifestyle-diseases-managements/hypertension",
    },
    {
        title: "Heart Disease",
        href: "/departments/lifestyle-diseases-managements/heart-disease",
    },
    {
        title: "Osteoarthritis",
        href: "/departments/lifestyle-diseases-managements/osteoarthritis",
    },
    {
        title: "Cancer",
        href: "/departments/lifestyle-diseases-managements/cancer",
    },
];

export default function ObesityPage() {
    return (
        <>
            <InnerBanner title="Obesity" bgImage="/images/page-banner-bg.png" />

            <DynamicDepartmentDetail
                title="Managing obesity through healthy lifestyle changes."
                activeHref="/departments/lifestyle-diseases-managements/obesity"
                sidebarItems={lifestyleMenu}
                showCTA
                cta={{
                    icon: "dumbbell",
                    title: "Reduce Better. Maintain Better. Live Better.",
                    description:
                        "Our obesity management approach supports weight reduction, weight maintenance, joint protection and long-term lifestyle correction.",
                }}
                sections={[
                    {
                        eyebrow: "Obesity Management",
                        icon: "activity",
                        heading: "Obesity",
                        content:
                            "Obesity is another modern day lifestyle issue caused by overeating and under-exercising. Obesity is a simply the manifestation of excess energy that is being pushed into the system without the requirement of hunger and not optimally matched by the energy output. Exercise or yoga or taichi or any other form of physical activity as dance , martial arts that could have been prevented the obese state . Fat cells multiply in a child rapidly until the age of 6 years and then stabilize at an optimal level for each individual but today, these cells multiply throughout our lives. Even when we reduce the weight of the person , the fat cells shrink but do not vanish.",
                        image: "/images/obesity-detail-1.png",
                        imageType: "large",
                        layout: "imageRight",
                    },
                    {
                        eyebrow: "",
                        icon: "shield",
                        heading: "Weight Management",
                        content:
                            "Obesity management requires the compliance of the individual to understand and abide by the rules to ensure not only to reduce the weight but also to maintain it at the reduced level. Weight management concerns both reduction of weight and maintenance the reduced level. While there may be several diets and workout schedules that can reduce and maintain weight, the real success lies in overcoming issues that there were triggered by the increased weight like pain and weakened joints.",
                        layout: "gradientCard",
                    },
                ]}
            />
        </>
    );
}