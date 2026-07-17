import type { Metadata } from "next";

import InnerBanner from "@/components/InnerBanner";
import DynamicEventArticle from "@/components/Events/DynamicEventArticle";

export const metadata: Metadata = {
  title: "Neuro Community Meeting | SPARRC",
  description:
    "SPARRC Neuro Community Meeting held at the Alwarpet branch on June 7, 2024.",
};

const neuroMeetingImages = [
  {
    src: "/images/neurocommunitymeeting.png",
    alt: "Patients and caregivers attending the SPARRC neuro community meeting",
    objectPosition: "contain",
  },

];

const neuroMeetingParagraphs = [
  `The neuro community meeting was held at SPARRC’s Alwarpet branch on June 7, 2024. The meet saw a turnout of 30 patients and their caregivers commuting from areas across Chennai. The idea behind organising a large gathering of patients suffering from similar neurological ailments was to boost morale, motivate and generate a sense of empowerment.`,

  `The meeting began with Dr. Kannan Pugazhendi taking centre stage with his thunderous words of encouragement that invigorated the audience. “I make sure you are an active participant not a passive recipient,” remarked Dr Kannan as he went on to explain that neurological problems develop due to lack of movement, imbalanced meals, high stress and environments that do not challenge the physical abilities of the body. The session progressed with Dr. Kannan sharing his insights on the transition of the body from middle age to old age and the kind of movement essential for the upkeep of the ageing body. As the doctor outlined these procedures, he engaged the audience in deep breathing exercises. During the exercises, Dr Kannan peppered the session with trivia that explained how much oxygen the body can breathe in, the importance of regulating one’s breath and how oxygen supply powers essential activities of the brain and the body.`,

  `What sets apart Dr Kannan’s approach is his unique blend of sports medicine rehabilitation techniques and an intuitive integration of yoga. As the session commenced the doctor impressed upon the importance of the Pancha Pranas – the five universal energies that flow through the body. His idea behind outlining the Pancha Pranas is to allow patients to understand the workings of the body and realise the unrealised potential of the body. In each session, Dr. Kannan introduces new exercises and explains the science behind them as he performs them`,

  `All exercises performed in the session were sitting exercises that can be easily carried out without much exertion. Dr Kannan’s bilingual (English and Tamil) explanation of the yogic and scientific reasons that make the exercises so timeless and effective was well received by all patients.`,

  `The audience interacted with Dr. Kannan, asked him questions and appreciated him for being a positive force in their lives. During the session, Dr Kannan said that he does not subscribe to wearing a doctor’s coat, or carrying a stethoscope, nor does he expect his staff to be in aprons. He is averse to the ‘hospital smell’ and believes in creating a positive and comforting environment where patients can feel at home.`,

  `The highlight of the event was the Move to Music (M2M) session. This is a session designed by SPARRC where patients can congregate and move to music. M2M sessions allow patients to socialise with a larger group of people suffering from similar health ailments thereby promoting a sense of solidarity and integration. Music coupled with movement is therapeutic – it allows patients to be mindful about the self, and body’s movements and imbibes self-confidence. Although nonverbal, M2M allows participants to navigate issues that they might find difficult to put into words. Such sessions also strengthen the cognitive and physical abilities of the body.`,

  `The one-hour-long session was a success and all attendees were filled with hope and optimism. Meeting and interacting with fellow patients strengthens the resolve to recover and rejuvenates the mind. The much sought-after community gatherings are uplifting for patients and are held every month. The next gathering discussing knee health will be held in July 2024.`,
];

export default function NeuroCommunityMeetingPage() {
  return (
    <main className="overflow-hidden bg-white">
      <InnerBanner
        title="Neuro Community Meeting"
        bgImage="/images/page-banner-bg.png"
      />

      <DynamicEventArticle
        images={neuroMeetingImages}
        paragraphs={neuroMeetingParagraphs}
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