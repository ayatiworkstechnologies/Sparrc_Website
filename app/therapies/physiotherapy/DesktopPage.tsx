import InnerBanner from "@/components/InnerBanner";
import DynamicDepartmentDetail from "@/components/Departments/DynamicDepartmentDetail";
import {
  Bone,
  Check,
  ClipboardCheck,
  HandHeart,
} from "lucide-react";

const physiotherapyMethods = [
  {
    title: "Myofascial Trigger Point Therapy",
    description:
      "Involves the use of subtle tissue movement and manipulation to facilitate the release of tissue tension which can lead to shifts in alignment and position of joints. This is applied using gentle warming and stretching of the tissues using the therapist's hands to target problem areas.",
    icon: HandHeart,
  },
  {
    title: "Joint Mobilisation",
    description:
      "Mobilisation of stiff vertebrae in the spine as well as the peripheral joints to improve alignment and posture for the relief of skeletal pain.",
    icon: Bone,
  },
  {
    title: "Exercise Prescription",
    description:
      "Establishment of structured exercise programmes to help the client to maintain changes made during treatment sessions. Physiotherapy can also help advice you on improvements in ergonomic and occupational postures to prevent future injuries.",
    icon: ClipboardCheck,
  },
];

const tapingPoints = [
  "Reduce the load on the muscle",
  "Protect an injured region",
  "Prevent tissue being damaged further",
  "Ensure that the nerve is not stretched",
];

export default function PhysiotherapyPage() {
  return (
    <>
      <InnerBanner
        title="Physiotherapy"
        bgImage="/images/page-banner-bg.png"
      />

      <DynamicDepartmentDetail
        title="Physiotherapy"
        showCTA={false}
        sections={[
          {
            layout: "content",
            content: [
              "Physiotherapy incorporates a number of different treatment techniques to provide a holistic approach to both injury prevention and cure.",
              "You will receive physiotherapy from a state registered Physiotherapist with rich experience in the treatment of musculoskeletal conditions from chronic low back pain to sports injuries and postural deficits.",
            ],
          },
          {
            layout: "imageLeft",
            image:
              "/images/physiotherapy-treatment.png",
            imageType: "large",
            content: [
              "Physiotherapist at SPARRC follow an integrated approach in pain management to achieve faster recovery. Their ability to assess and treat an ailment is honed by extensive training programs and constant education about recent advancements in the field. The hands-on techniques like Myofascial Trigger Point Therapy, mobilization, taping, Muscle Energy Technique (MET) etc are widely used over varied conditions as primary line of treatment. Electrotherapy modalities like Interferential Therapy (IFT), Ultrasound Therapy, Muscle Stimulator etc are used as adjunct therapy.",
              "Physiotherapy at SPARRC has various domains like Sports, Pediatric, Cardiac, Neuro and Orthopedic Physiotherapy. Individuals with various conditions like Back Pain, Parkinson’s Disease, Post-Surgery, Diabetes, Shoulder pain with restriction etc all undergo extensive rehabilitation, with the goal of achieving functional independence.",
            ],
          },
        ]}
      />

      {/* Physiotherapy methods */}
      <section className="bg-[#f7fbff] px-4 pb-10 sm:px-6 md:pb-14">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
          {physiotherapyMethods.map((method) => {
            const Icon = method.icon;

            return (
              <article
                key={method.title}
                className="group flex h-full flex-col rounded-[24px] border border-[#ddd5e8] bg-gradient-to-br from-[#d9d1e4] to-[#cfc5dc] p-6 text-center shadow-[0_12px_30px_rgba(62,47,85,0.10)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(62,47,85,0.16)] sm:p-7"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white/60 text-[#1268d6]">
                  <Icon size={24} strokeWidth={1.9} />
                </div>

                <h2 className="mt-5 text-[18px] font-extrabold leading-snug text-[#1268d6]">
                  {method.title}
                </h2>

                <p className="mt-4 text-[14px] font-medium leading-7 text-[#4b5363]">
                  {method.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      {/* Taping */}
      <section className="relative overflow-hidden bg-[#dff3ff] px-4 py-12 sm:px-6 md:py-16">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(18,104,214,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(18,104,214,0.045)_1px,transparent_1px)] [background-size:58px_58px]" />

        <div className="relative mx-auto max-w-6xl">
          <h2 className="text-[24px] font-extrabold uppercase text-[#1268d6] md:text-[30px]">
            Taping
          </h2>

          <p className="mt-5 text-[14px] font-medium leading-7 text-[#172033] md:text-[15px]">
            TAPING IS the technique that is used in a sports medicine and
            physiotherapy for conditions where we are able to
          </p>

          <div className="mt-6 space-y-4">
            {tapingPoints.map((point) => (
              <div
                key={point}
                className="flex items-start gap-3"
              >
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1268d6] text-white">
                  <Check size={13} strokeWidth={3} />
                </span>

                <p className="text-[14px] font-semibold leading-7 text-[#172033] md:text-[15px]">
                  {point}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-7 text-[14px] font-medium leading-7 text-[#172033] md:text-[15px]">
            With proper taping, sports persons even with a Grade 2 level injury
            can be allowed to play in a competition. Taping is a very important
            aspect in injury management and rehabilitation that SPARRC uses
            extensively to treat patients with pain.
          </p>
        </div>
      </section>
    </>
  );
}