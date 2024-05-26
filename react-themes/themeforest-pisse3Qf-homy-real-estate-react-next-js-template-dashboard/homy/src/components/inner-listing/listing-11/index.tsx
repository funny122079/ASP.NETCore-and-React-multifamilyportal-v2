import FooterFour from "@/layouts/footers/FooterFour"
import FancyBanner from "@/components/common/FancyBanner"
import ListingElevenArea from "./ListingElevenArea"
import HeaderOne from "@/layouts/headers/HeaderOne"

const ListingEleven = () => {
   return (
      <>
         <HeaderOne style={true} />
         <ListingElevenArea />
         <FancyBanner />
         <FooterFour />
      </>
   )
}

export default ListingEleven;
