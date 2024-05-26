import BreadcrumbOne from '@/components/common/breadcrumb/BreadcrumbOne'
import FooterFour from '@/layouts/footers/FooterFour'
import HeaderOne from '@/layouts/headers/HeaderOne'
import FaqArea from './FaqArea'
import FancyBanner from '@/components/common/FancyBanner'

const Faq = () => {
   return (
      <>
         <HeaderOne style={true} />
         <BreadcrumbOne title="Question & Answers" link="#" link_title="Pages" sub_title="Faq’s" style={true} />
         <FaqArea/>
         <FancyBanner style={false} />
         <FooterFour />
      </>
   )
}

export default Faq
