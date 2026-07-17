import type { Metadata } from "next";

import InnerBanner from "@/components/InnerBanner";
import DynamicEventArticle from "@/components/Events/DynamicEventArticle";

export const metadata: Metadata = {
  title: "Geriatric Community Meeting | SPARRC",
  description:
    "SPARRC Geriatric Community Meeting held at the Alwarpet branch on June 14, 2024.",
};

const geriatricMeetingImages = [
  {
    src: "/images/geriatric-community-meeting-june-14-2024.png",
    alt: "Patients attending the SPARRC geriatric community meeting",
    objectPosition: "center center",
  },

  
 

  {
    src: "/images/geriatric-community-meeting-june-14-2024-2.png",
    alt: "Dr Kannan conducting the geriatric community meeting at SPARRC",
    objectPosition: "center center",
  },
  
];

const geriatricMeetingParagraphs = [
  `When a patient enters through the doors of SPARRC he/she can be sure to leave the same gates feeling positive and invigorated. Such is the nature of community meetings at SPARRC. Community gatherings are organised to bring patients (suffering from similar geriatric ailments) together to build a sense of community and instil confidence by sharing stories, interacting with fellow patients and expressing queries to Dr. Kannan Pugazhendi. June 14 saw the congregation of 60 patients across Chennai who had travelled long distances to be part of a geriatric session with Dr. Kannan at SPARRC’s Alwarpet branch. In the session, Dr. Kannan explained and performed a set of sitting exercises along with the attendees. The evening was inundated with Dr. Kannan’s humorous observations, anecdotes and experience-rich outpourings that enthralled all participants.`,

  `In the field of sports medicine, Dr. Kannan takes a unique approach. Inspired by yoga, Tai Chi and Qigong, (a Chinese martial art) the doctor takes elements from different schools of thought and integrates them in simple exercises that can be performed with minimal or no exertion. He believes in prescribing exercises, not medicines. Most exercises at SPARRC are tailor-made by Dr. Kannan whose rich reservoir of knowledge is swelled by the dynamic disciplines of yoga, martial arts and sports medicine.`,

  `As the program commenced, Dr. Kannan went on to identify some faulty breathing techniques. He laid great emphasis on regulating one’s breath which is vital for maintaining acid-base balance in the body. Dr. Kannan also outlined the importance of diaphragmatic breathing. Diaphragmatic breathing is specific to the diaphragm, abdominal, intercostal and pelvic floor muscles. The method entails drawing in the diaphragm with each inhalation and slowly letting go of the exhaled air. A conscious control of the diaphragm muscle stabilises vertebrae in the lumbar region.`,

  `In the next segment of the session, Dr. Kannan impressed upon the need to expose oneself to the sun for at least 30 minutes a day. Sunlight is responsible for melatonin secretion and oxidisation of vitamin D in the body. The soft rays of the morning sun – between 6.30 am and 8.30 am are conducive to the body’s well-being.`,

  `In addition to breath regulation and sunlight intake, Dr. Kannan urged all to drink adequate water throughout the day. He believes that small lifestyle changes like this can bring about a sea change in one’s overall well-being.`,

  `All participants took inspiration from an 87-year-old senior patient who spoke about his fitness journey with SPARRC. Such testimonials have made community gatherings an encouraging space for patients. A much-requested event, stories of overcoming chronic pain and achieving physiological milestones generate a sense of positivity and empowerment among patients.`,

  `The event came to a close with clients engaging in a question-and-answer session with the doctor. The presence of Dr. Kannan is like an anchor for patients on the cusp of overcoming pain and injury. The session concluded with a round of tea and snacks for all attendees.`,
];

export default function GeriatricCommunityMeetingPage() {
  return (
    <main className="overflow-hidden bg-white">
      <InnerBanner
        title="Geriatric Community Meeting"
        bgImage="/images/page-banner-bg.png"
      />

      <DynamicEventArticle
        images={geriatricMeetingImages}
        paragraphs={geriatricMeetingParagraphs}
        phoneLabel="+91 965 965 0000"
        phoneHref="tel:+919659650000"
        contactPrefix="For more details, contact our helpline number at"
        contactSuffix="or your nearest SPARRC centre."
        autoplayDelay={5000}
        priorityFirstImage
      />
    </main>
  );
}