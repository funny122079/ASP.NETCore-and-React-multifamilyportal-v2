import BreadcrumbOne from "@/components/common/breadcrumb/BreadcrumbOne"
import HeaderOne from "@/layouts/headers/HeaderOne"
import BLockFeatureOne from "./BLockFeatureOne"
import VideoBanner from "@/components/homes/home-seven/VideoBanner"
import BLockFeatureFive from "@/components/homes/home-one/BLockFeatureFive"
import Feedback from "@/components/homes/home-five/Feedback"
import AgentArea from "@/components/homes/home-one/AgentArea"
import Brand from "./Brand"
import FooterFour from "@/layouts/footers/FooterFour"
import FancyBanner from "@/components/common/FancyBanner"

const AboutUsOne = () => {
   return (
      <>
         <HeaderOne style={true} />
         <BreadcrumbOne title="About Agency" sub_title="About us" style={false} />
         <BLockFeatureOne />
         <VideoBanner />
         <BLockFeatureFive style={true} />
         <Feedback style={true} />
         <AgentArea style={false} />
         <Brand />
         <FancyBanner style={false} />
         <FooterFour />
      </>
   )
}

export default AboutUsOne
