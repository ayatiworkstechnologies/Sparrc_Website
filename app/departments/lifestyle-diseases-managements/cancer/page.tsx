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

export default function CancerPage() {
    return (
        <>
            <InnerBanner title="Cancer" bgImage="/images/page-banner-bg.png" />

            <DynamicDepartmentDetail
                title="Supporting cancer recovery through exercise and immunity-focused care."
                activeHref="/departments/lifestyle-diseases-managements/cancer"
                sidebarItems={lifestyleMenu}
                showCTA
                cta={{
                    icon: "shield",
                    title: "Recover Better. Strengthen Better. Live Better.",
                    description:
                        "Our cancer care exercise program supports immunity, strength, lymphatic drainage and quality of life after cancer treatment.",
                }}
                sections={[
                    {
                        eyebrow: "Cancer Awareness",
                        icon: "shield",
                        heading: "Cancer",
                        content:
                            "Cancer is the condition of body that allows uncontrolled mitosis called cell division. It is very common for every cell to have what is called as “contact inhibition”. This is like when somebody comes into contact with you when you travel in a public transport – you feel your personal space invaded and you try to move away. The human cells when they come into contact with the next cells start multiplying . In cancer cells, this multiplication is uncontrolled because they have lost their “contact inhibition”. The cancer cells that are multiplying are usually identified by the police force within the body, namely the immune system, and removed, knowing that these cell membranes are different. Regular exercise can regulate the cancer cells and also boost the immunity to be smarter in its identification and elimination of the cancerous cells.",
                        images: ["/images/cancer-detail-1.png", "/images/cancer-detail-2.png"],
                        layout: "carouselLeft",
                        showFeatures: true,
                        features: [
                            {
                                icon: "shield",
                                title: "Immunity Support",
                            },
                            {
                                icon: "activity",
                                title: "Exercise Program",
                            },
                            {
                                icon: "heartPulse",
                                title: "Recovery Care",
                            },
                            {
                                icon: "sparkles",
                                title: "Quality of Life",
                            },
                        ],
                    },
                    {
                        eyebrow: "",
                        icon: "",
                        heading: "Cancer Recovery Support",
                        listIcon: "/icons/logo-icon.png",
                        content: [
                            "Cancers that can be easily controlled or prevented from recurrence like breast cancer and cervical cancer are also the ones that respond well to exercise programs. At SPARRC, we involve cancer survivors in an exercise program such that the recurrence is minimised and aim to improve the quality of life to pre-cancer conditions by making them fitter and stronger.",
                            "Women who undergo Mastectomy/radiotherapy/chemotherapy are put through an exercise program to minimize lymphatic edema by draining the lymphatic tissue through mobilization and exercises like Taichi.",
                        ],
                        layout: "gradientCard",
                    }
                ]}
            />
        </>
    );
}