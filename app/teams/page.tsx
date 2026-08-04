import InnerBanner from "@/components/InnerBanner";
import TeamList from "@/components/Teams/TeamList";

export default function TeamsPage() {
  return (
    <>
      <InnerBanner
        title="Teams"
        bgImage="/images/page-banner-bg.png"
      />

      <TeamList />
    </>
  );
}