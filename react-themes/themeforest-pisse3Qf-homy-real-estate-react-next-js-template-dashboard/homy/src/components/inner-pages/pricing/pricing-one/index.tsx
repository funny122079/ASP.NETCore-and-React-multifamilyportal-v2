import BreadcrumbOne from "@/components/common/breadcrumb/BreadcrumbOne"
import FooterFour from "@/layouts/footers/FooterFour"
import HeaderOne from "@/layouts/headers/HeaderOne"
import PricingOneArea from "./PricingOneArea"
import FancyBannerCommon from "@/components/common/FancyBanner"
import FancyBanner from "../../projects/project-one/FancyBanner"

const PricingOne = () => {
   return (
      <>
         <HeaderOne style={true} />
         <BreadcrumbOne title="Pricing Plan" link="#" link_title="Pages" sub_title="Pricing" style={true} />
         <PricingOneArea />
         <FancyBanner/>
         <FancyBannerCommon style={false} />
         <FooterFour />
      </>
   )
}

export default PricingOne
