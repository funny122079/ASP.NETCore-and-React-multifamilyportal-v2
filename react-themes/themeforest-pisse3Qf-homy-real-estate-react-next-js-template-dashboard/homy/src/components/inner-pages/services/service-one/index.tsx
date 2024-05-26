import BreadcrumbOne from "@/components/common/breadcrumb/BreadcrumbOne"
import FooterFour from "@/layouts/footers/FooterFour"
import HeaderOne from "@/layouts/headers/HeaderOne"
import BlockFeatureOne from "./BlockFeatureOne"
import HomeBLockFeatureOne from "@/components/homes/home-one/BLockFeatureOne"
import BlockFeatureTwo from "./BlockFeatureTwo"
import Feedback from "@/components/homes/home-one/Feedback"
import FancyBanner from "./FancyBanner"
import BLockFeatureTwo from "@/components/homes/home-four/BLockFeatureTwo"
import FancyBannerCommon from "@/components/common/FancyBanner"

const ServiceOne = () => {
   return (
      <>
         <HeaderOne style={true} />
         <BreadcrumbOne title="Our Services" link="#" link_title="Pages" sub_title="Services" style={false} />
         <BlockFeatureOne/>
         <HomeBLockFeatureOne />
         <BlockFeatureTwo style={false} />
         <FancyBanner />
         <Feedback/>
         <BLockFeatureTwo style={true} />
         <FancyBannerCommon />
         <FooterFour />
      </>
   )
}

export default ServiceOne;
