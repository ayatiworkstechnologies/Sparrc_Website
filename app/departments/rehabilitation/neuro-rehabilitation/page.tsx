import InnerBanner from "@/components/InnerBanner";
import DynamicDepartmentDetail from "@/components/Departments/DynamicDepartmentDetail";


const rehabilitationMenu = [
  {
    title: "Neuro Rehabilitation",
    href: "/departments/rehabilitation/neuro-rehabilitation",
  },
  {
    title: "Cardiac Rehabilitation",
    href: "/departments/rehabilitation/cardiac-rehabilitation",
  },
  {
    title: "Geriatric Rehabilitation",
    href: "/departments/rehabilitation/geriatric-rehabilitation",
  },
  {
    title: "Clinical Pilates",
    href: "/departments/rehabilitation/clinical-pilates",
  },
  {
    title: "Sports Rehabilitation",
    href: "/departments/rehabilitation/sports-rehabilitation",
  },
];

export default function NeuroRehabilitationPage() {
    return (
        <>
            <InnerBanner
                title="Neuro Rehabilitation"
                bgImage="/images/page-banner-bg.png"
            />

            <DynamicDepartmentDetail
                title="Helping you move with confidence."
                 activeHref="/departments/rehabilitation/neuro-rehabilitation"
        sidebarItems={rehabilitationMenu}
                 showCTA
                cta={{
                    icon: "brain",
                    title: "Improve Mobility. Restore Function. Rebuild Confidence.",
                    description:
                        "Our neuro rehabilitation program supports recovery from nervous system conditions through supervised therapy, strength training and functional movement care.",
                }}
                sections={[
                    {
                        eyebrow: "",
                        icon: "",
                        heading: "Neuro Rehabilitation",
                        content:
                            "Neurological rehabilitation is a doctor-supervised program designed for people with diseases, injury, or disorders of the nervous system. Neurological rehab is vital in improving function, reducing symptoms, and improving the well-being of the patient. The multidisciplinary team at SPARRC include Doctors, Neuro- Physiotherapist, Occupational Therapist, Speech Therapist and a Nutritional Counsellor who are focused on improving a patient’s daily function and community re-integration. Particular focus is given to improving mobility and strength, as this is key to a person's independence.",
                        image: "/images/neuro-rehabilitation-1.png",
                        imageType: "large",
                        layout: "imageRight",
                    },
                    {
                        eyebrow: "",
                        icon: "clipboardList",
                        heading: "What conditions can be treated with Neuro Rehab?",
                        content:
                            "Injuries, infections, degenerative diseases, structural defects, tumors, and disorders in the circulatory system can impair the nervous system. Some of the conditions that may benefit from neurological rehab may include:",
                        images: [
                            "/images/neuro-rehabilitation-2.png",
                            "/images/neuro-rehabilitation-3.png",
                        ],
                        layout: "carouselLeft",
                        showFeatures: true,
                        features: [
                            {
                                icon: "brain",
                                title: "Nervous System Care",
                            },
                            {
                                icon: "activity",
                                title: "Mobility Support",
                            },
                            {
                                icon: "personStanding",
                                title: "Functional Recovery",
                            },
                            {
                                icon: "heartHandshake",
                                title: "Daily Independence",
                            },
                        ],
                    },
                    {
                        eyebrow: "",
                        icon: "brain",
                        heading: "Neuro rehabilitation may help manage the following conditions:",
                        content: [
                            
                            "Vascular disorders, such as ischemic strokes (caused by blood clots), hemorrhagic strokes (caused by bleeding in the brain), subdural hematoma, and transient ischemic attacks (TIAs)",
                            "Infections, such as meningitis, encephalitis, polio, and brain abscesses",
                            "Trauma e.g. brain and spinal cord injury",
                            "Structural or neuromuscular disorders, such as Bell palsy, cervical spondylosis, carpal tunnel syndrome, brain or spinal cord tumors, peripheral neuropathy, muscular dystrophy, myasthenia gravis, and Guillain-Barré syndrome",
                            "Functional disorders, such as headache, seizure disorder, dizziness, and neuralgia",
                            "Degenerative disorders, such as Parkinson disease, multiple sclerosis, amyotrophic lateral sclerosis (ALS), Alzheimer disease, and Huntington Chorea",
                        ],
                        layout: "gradientCard",
                        listIcon: "/icons/logo-icon.png",
                    }
                ]}
            />
        </>
    );
}