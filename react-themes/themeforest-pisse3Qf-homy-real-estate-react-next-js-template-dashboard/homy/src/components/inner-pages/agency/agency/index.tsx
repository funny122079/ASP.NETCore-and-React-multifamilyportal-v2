import BreadcrumbThree from "@/components/common/breadcrumb/BreadcrumbThree"
import HeaderFour from "@/layouts/headers/HeaderFour"
import AgencyArea from "./AgencyArea"
import FooterFour from "@/layouts/footers/FooterFour"
import FancyBanner from "@/components/common/FancyBanner"

const Agency = () => {
   return (
      <>
         <HeaderFour />
         <BreadcrumbThree title="Agency" link="#" link_title="Pages" sub_title="Agency" style={true} />
         <AgencyArea />
         <FancyBanner/>
         <FooterFour/>
      </>
   )
}

export default Agency
