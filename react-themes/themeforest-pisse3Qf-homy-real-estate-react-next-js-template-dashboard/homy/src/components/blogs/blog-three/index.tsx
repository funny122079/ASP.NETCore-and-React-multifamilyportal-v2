import BreadcrumbOne from "@/components/common/breadcrumb/BreadcrumbOne"
import FooterFour from "@/layouts/footers/FooterFour"
import HeaderOne from "@/layouts/headers/HeaderOne"
import BlogThreeArea from "./BlogThreeArea"
import FancyBanner from "@/components/common/FancyBanner"

const BlogThree = () => {
   return (
      <>
         <HeaderOne style={true} />
         <BreadcrumbOne title="Blog Full Width" link="#" link_title="Pages" sub_title="Blog" style={true} />
         <BlogThreeArea />
         <FancyBanner />
         <FooterFour />
      </>
   )
}

export default BlogThree
