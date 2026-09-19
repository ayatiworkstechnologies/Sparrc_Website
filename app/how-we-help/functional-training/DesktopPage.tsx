import Link from "next/link";
import {
  Activity,
  ArrowRight,
  Dumbbell,
  PersonStanding,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";

import InnerBanner from "@/components/InnerBanner";
import DynamicDepartmentDetail from "@/components/Departments/DynamicDepartmentDetail";

const functionalExercises = [
  {
    title: "Pushups",
    icon: Activity,
  },
  {
    title: "Situps",
    icon: PersonStanding,
  },
  {
    title: "Planks",
    icon: ShieldCheck,
  },
  {
    title: "Lunges",
    icon: Target,
  },
  {
    title: "Squats",
    icon: Dumbbell,
  },
];

export default function FunctionalTrainingPage() {
  return (
    <main className="overflow-x-clip bg-[#f7fbff]">
      <InnerBanner
        title="Functional Training"
        bgImage="/images/page-banner-bg.png"
      />

      <DynamicDepartmentDetail
        title="Functional Training"
        showCTA={false}
        sections={[
          {
            layout: "content",
            icon: "dumbbell",
            content:
              "Functional Training is training/retraining an individual in performing the activities in daily life or a sporting activity or a martial art, dance, or any form of leisure activity. Exercises are also designed to suit the individual to give them functional independence after an injury or surgery.",
          },
          {
            layout: "imageRight",
            heading: "What is Functional Fitness Training?",
            icon: "activity",
            image:
              "/images/functional-training.png",
            imageType: "large",
            content:
              "Functional Training is nothing but working out with a purpose. The specific purpose could be different for each individual but the goal is to make movements easier. By training your muscles to work correctly and efficiently in tasks that you do repeatedly everyday at home or work or in your sport, you can avoid the risk of injury. For example, a squat is a functional training exercise since we need to perform tasks at work or home that require a similar movement. Functional training can be done with or without the aid of fitness implements. Commonly used exercises are pushups, situps, planks, lunges, squats etc.",
          },
          {
            layout: "content",
            heading: "Who should do Functional Training?",
            icon: "users",
            content:
              "The main aim of Functional Training is to make the body move with ease and comfort in any situation. It is highly recommended for geriatric population to improve coordination, balance, and body awareness so that their everyday life is easy and dependency-free. For sports people, functional training helps in increasing strength and agility throughout the fullest range of motions available. Joint strengthening by functional training is very essential in preventing injury for both career sports people and those who take some sport for leisure. Core strength, balance and movement integrity are key requirements for excelling at sports.",
          },
        ]}
      />

      
    </main>
  );
}