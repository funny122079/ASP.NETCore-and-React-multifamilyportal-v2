import FooterFour from "@/layouts/footers/FooterFour"
import FancyBanner from "@/components/common/FancyBanner"
import ListingFourArea from "./ListingFourArea"
import HeaderOne from "@/layouts/headers/HeaderOne"

const ListingSix = () => {
   return (
      <>
         <HeaderOne style={true} />
         <ListingFourArea />
         <FancyBanner />
         <FooterFour />
      </>
   )
}

export default ListingSix;
