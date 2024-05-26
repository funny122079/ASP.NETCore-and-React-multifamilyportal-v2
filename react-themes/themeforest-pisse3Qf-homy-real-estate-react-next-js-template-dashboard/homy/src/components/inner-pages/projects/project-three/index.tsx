import BreadcrumbThree from "@/components/common/breadcrumb/BreadcrumbThree"
import HeaderFour from "@/layouts/headers/HeaderFour"
import FooterFour from "@/layouts/footers/FooterFour"
import ProjectArea from "./ProjectArea"
import FancyBannerCommon from "@/components/common/FancyBanner"
import FancyBanner from "../project-one/FancyBanner"

const ProjectThree = () => {
   return (
      <>
         <HeaderFour />
         <BreadcrumbThree title="Our Projects" link="#" link_title="Pages" sub_title="Projects" style={false} />
         <ProjectArea/>
         <FancyBanner />
         <FancyBannerCommon />
         <FooterFour />
      </>
   )
}

export default ProjectThree;
