import BreadcrumbThree from "@/components/common/breadcrumb/BreadcrumbThree"
import HeaderFour from "@/layouts/headers/HeaderFour"
import FooterFour from "@/layouts/footers/FooterFour"
import AgentArea from "./AgentArea"
import FancyBanner from "@/components/common/FancyBanner"

const Agent = () => {
   return (
      <>
         <HeaderFour />
         <BreadcrumbThree title="Our Agent" link="#" link_title="Pages" sub_title="Agents" style={true} />
         <AgentArea />
         <FancyBanner />
         <FooterFour/>
      </>
   )
}

export default Agent
