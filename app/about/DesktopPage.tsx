import AboutBlueLotus from "@/components/Aboutpage/AboutBlueLotus";
import AboutDetails from "@/components/Aboutpage/AboutDetails";
import AboutMission from "@/components/Aboutpage/AboutMission";
import AboutMusculoskeletal from "@/components/Aboutpage/AboutMusculoskeletal";
import AboutSpectrum from "@/components/Aboutpage/AboutSpectrum";
import InterviewSection from "@/components/Aboutpage/InterviewSection";
import OurTeam from "@/components/Aboutpage/OurTeam";
import InnerBanner from "@/components/InnerBanner";


export default function AboutPage() {
    return (
        <>

            <InnerBanner
                title="About"
                bgImage="/images/page-banner-bg.png"
            />
            {/* {About details section} */}
            <AboutDetails />

            {/* {About content  + mission  section} */}
            <AboutMission />

            {/* {About Blue Lotus section} */}
            <AboutBlueLotus />

            {/* {The SPARRC Spectrum section} */}
            <AboutSpectrum />

            {/* {Musculoskeletal Health section} */}
            <AboutMusculoskeletal />

            {/* {Interview section} */}
            <InterviewSection />

            {/* {Our Team section} */}
            <OurTeam />


        </>
    );
}