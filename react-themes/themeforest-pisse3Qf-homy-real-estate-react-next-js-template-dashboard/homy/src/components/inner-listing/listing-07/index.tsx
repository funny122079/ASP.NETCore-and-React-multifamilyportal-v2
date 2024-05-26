import FooterFour from "@/layouts/footers/FooterFour"
import HeaderFour from "@/layouts/headers/HeaderFour"
import FancyBanner from "@/components/common/FancyBanner"
import ListingSevenArea from "./ListingSevenArea"

const ListingSix = () => {
   return (
      <>
         <HeaderFour />
         <ListingSevenArea style={false} />
         <FancyBanner />
         <FooterFour />
      </>
   )
}

export default ListingSix;
