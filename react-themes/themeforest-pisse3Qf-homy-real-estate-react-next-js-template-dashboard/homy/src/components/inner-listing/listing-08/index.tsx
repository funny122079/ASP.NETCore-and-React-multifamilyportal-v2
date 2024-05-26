import FooterFour from "@/layouts/footers/FooterFour"
import HeaderFour from "@/layouts/headers/HeaderFour"
import FancyBanner from "@/components/common/FancyBanner"
import ListingEightArea from "./ListingEightArea"

const ListingEight = () => {
   return (
      <>
         <HeaderFour />
         <ListingEightArea style={false} />
         <FancyBanner />
         <FooterFour />
      </>
   )
}

export default ListingEight;
