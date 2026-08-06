import ResponsivePage from "@/components/ResponsivePage";
import MobilePage from "@/mobile-src/app/therapy/cranio-sacral/page";
import DesktopPage from "../alternate-therapy/cranio-sacral-therapy/page";

export default function Page() {
  return <ResponsivePage mobile={<MobilePage />} desktop={<DesktopPage />} />;
}
