import type { Metadata } from "next";

import InnerBanner from "@/components/InnerBanner";
import CommunityMeetingNavigation from "@/components/Events/CommunityMeetingNavigation";
import EventShowcase from "@/components/Events/EventShowcase";
import SeniorInternshipProgram from "@/components/Events/SeniorInternshipProgram";

export const metadata: Metadata = {
  title: "Events | SPARRC",
  description:
    "Explore SPARRC community meetings, health awareness gatherings and upcoming events.",
};

export default function EventsPage() {
  return (
    <main className="overflow-hidden bg-white">
      <InnerBanner
        title="Events"
        bgImage="/images/page-banner-bg.png"
      />

      <CommunityMeetingNavigation />

      <SeniorInternshipProgram />

      <EventShowcase />


    </main>
  );
}