import BreadcrumbThree from "@/components/common/breadcrumb/BreadcrumbThree"
import HeaderFour from "@/layouts/headers/HeaderFour"
import FooterFour from "@/layouts/footers/FooterFour"
import ProjectArea from "./ProjectArea"
import FancyBanner from "@/components/common/FancyBanner"

const ProjectFour = () => {
   return (
      <>
         <HeaderFour />
         <BreadcrumbThree title="Our Projects" link="#" link_title="Pages" sub_title="Projects" style={false} />
         <ProjectArea />
         <FancyBanner />
         <FooterFour />
      </>
   )
}

export default ProjectFour;
