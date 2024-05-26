import BreadcrumbOne from "@/components/common/breadcrumb/BreadcrumbOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import FooterFour from "@/layouts/footers/FooterFour";
import FancyBanner from "../project-one/FancyBanner";
import ProjectArea from "./ProjectArea";
import FancyBannerCommon from "@/components/common/FancyBanner";

const ProjectOne = () => {
   return (
      <>
         <HeaderOne style={true} />
         <BreadcrumbOne title="Our Projects" link="#" link_title="Pages" sub_title="Project" style={true} />
         <ProjectArea />
         <FancyBanner />
         <FancyBannerCommon />
         <FooterFour />
      </>
   )
}

export default ProjectOne;
