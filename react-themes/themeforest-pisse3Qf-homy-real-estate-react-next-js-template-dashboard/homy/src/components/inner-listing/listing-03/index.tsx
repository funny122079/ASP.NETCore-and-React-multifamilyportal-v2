import FooterFour from "@/layouts/footers/FooterFour"
import FancyBanner from "@/components/common/FancyBanner"
import ListingThreeArea from "./ListingThreeArea"
import HeaderOne from "@/layouts/headers/HeaderOne"

const ListingSix = () => {
   return (
      <>
         <HeaderOne style={true} />
         <ListingThreeArea style={false} />
         <FancyBanner />
         <FooterFour />
      </>
   )
}

export default ListingSix;
