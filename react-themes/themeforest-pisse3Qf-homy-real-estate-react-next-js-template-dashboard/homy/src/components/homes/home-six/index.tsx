import BLockFeatureTwo from "../home-five/BLockFeatureTwo"
import Property from "../home-four/PropertyOne"
import Category from "./Category"
import HeroBanner from "./HeroBanner"
import PropertyOne from "./PropertyOne"
import HomeSixBLockFeatureTwo from "./BLockFeatureTwo"
import BLockFeatureThree from "./BLockFeatureThree"
import Feedback from "./Feedback"
import Brand from "./Brand"
import Blog from "../home-four/Blog"
import FancyBanner from "./FancyBanner"
import FooterFive from "@/layouts/footers/FooterFive"
import HeaderFour from "@/layouts/headers/HeaderFour"

const HomeSix = () => {
   return (
      <>
         <HeaderFour />
         <HeroBanner />
         <Category />
         <BLockFeatureTwo style={true} />
         <PropertyOne />
         <Property style_1={false} style_2={true} />
         <HomeSixBLockFeatureTwo />
         <BLockFeatureThree />
         <Feedback />
         <Brand />
         <Blog />
         <FancyBanner />
         <FooterFive />
      </>
   )
}

export default HomeSix
