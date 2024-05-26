import FooterFour from "@/layouts/footers/FooterFour"
import FancyBanner from "@/components/common/FancyBanner"
import ListingTwoArea from "./ListingTwoArea"
import HeaderOne from "@/layouts/headers/HeaderOne"

const ListingTwo = () => {
   return (
      <>
         <HeaderOne style={true} />
         <ListingTwoArea style={false} />
         <FancyBanner />
         <FooterFour />
      </>
   )
}

export default ListingTwo;
