import LatestInterview from "@/components/Gallery/LatestInterview";
import NewsUpdatesSection from "@/components/Gallery/NewsUpdatesSection";
import WorldDiabetesGallery from "@/components/Gallery/WorldDiabetesGallery";
import InnerBanner from "@/components/InnerBanner";


export default function GalleryPage() {
    return (
        <>

            <InnerBanner
                title="Gallery"
                bgImage="/images/page-banner-bg.png"
            />
            
            <NewsUpdatesSection />

            <LatestInterview />

            <WorldDiabetesGallery />


        </>
    );
}