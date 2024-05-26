import BreadcrumbThree from "@/components/common/breadcrumb/BreadcrumbThree"
import HeaderFour from "@/layouts/headers/HeaderFour"
import FooterFour from "@/layouts/footers/FooterFour"
import CompareArea from "./CompareArea"
import FancyBanner from "@/components/common/FancyBanner"

const Compare = () => {
   return (
      <>
         <HeaderFour />
         <BreadcrumbThree title="Compare" link="#" link_title="Pages" sub_title="Compare" style={false} />
         <CompareArea />
         <FancyBanner />
         <FooterFour />
      </>
   )
}

export default Compare
