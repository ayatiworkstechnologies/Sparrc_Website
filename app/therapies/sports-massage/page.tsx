import ResponsivePage from "@/components/ResponsivePage";
import MobilePage from "@/mobile-src/app/therapy/sports-massage/page";
import DesktopPage from "./DesktopPage";
export default function Page() { return <ResponsivePage mobile={<MobilePage />} desktop={<DesktopPage />} />; }
