import FooterFour from "@/layouts/footers/FooterFour"
import FancyBanner from "../home-four/FancyBanner"
import BLockFeatureOne from "../home-one/BLockFeatureOne"
import BLockFeatureThree from "../home-one/BLockFeatureThree"
import FancyBannerOne from "../home-one/FancyBannerOne"
import Category from "../home-three/Category"
import PropertyTwo from "../home-three/PropertyTwo"
import Blog from "../home-two/Blog"
import HeroBanner from "./HeroBanner"
import VideoBanner from "./VideoBanner"
import Feedback from "../home-three/Feedback"
import HeaderOne from "@/layouts/headers/HeaderOne"

const HomeSeven = () => {
   return (
      <>
         <HeaderOne style={true} />
         <HeroBanner />
         <Category style={true} />
         <BLockFeatureOne />
         <VideoBanner />
         <BLockFeatureThree />
         <PropertyTwo style={true} />
         <FancyBannerOne style={false} />
         <Feedback style={true} />
         <Blog style={true} />
         <FancyBanner style={true} />
         <FooterFour />
      </>
   )
}

export default HomeSeven
