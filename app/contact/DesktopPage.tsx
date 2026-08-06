
import ConnectWithUs from "@/components/ContactUs/ConnectWithUs";
import SparrcBranches from "@/components/ContactUs/SparrcBranches";
import InnerBanner from "@/components/InnerBanner";


export default function ContactPage() {
    return (
        <>

            <InnerBanner
                title="Contact Us"
                bgImage="/images/page-banner-bg.png"
            />
          
          <ConnectWithUs />

          <SparrcBranches />

        </>
    );
}