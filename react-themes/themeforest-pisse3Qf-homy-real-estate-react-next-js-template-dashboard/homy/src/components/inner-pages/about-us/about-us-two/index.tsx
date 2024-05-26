import BreadcrumbTwo from "@/components/common/breadcrumb/BreadcrumbTwo";
import HeaderTwo from "@/layouts/headers/HeaderTwo";
import BLockFeatureOne from "./BLockFeatureOne";
import BLockFeatureTwo from "./BLockFeatureTwo";
import Feedback from "@/components/homes/home-six/Feedback";
import Brand from "./Brand";
import FancyBanner from "./FancyBanner";
import FooterTwo from "@/layouts/footers/FooterTwo";

const AboutUsTwo = () => {
   return (
      <>
         <HeaderTwo style_1={true} style_2={false} />
         <BreadcrumbTwo title="About Agency" sub_title="About us" />
         <BLockFeatureOne />
         <BLockFeatureTwo />
         <Feedback />
         <Brand />
         <FancyBanner />
         <FooterTwo />
      </>
   )
}

export default AboutUsTwo;
