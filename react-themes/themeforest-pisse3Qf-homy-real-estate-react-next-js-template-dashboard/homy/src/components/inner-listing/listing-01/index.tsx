import FooterFour from "@/layouts/footers/FooterFour"
import ListingOneArea from "./ListingOneArea"
import FancyBanner from "@/components/common/FancyBanner"
import HeaderOne from "@/layouts/headers/HeaderOne"

const ListingOne = () => {
   return (
      <>
         <HeaderOne style={true} />
         <ListingOneArea />
         <FancyBanner />
         <FooterFour />
      </>
   )
}

export default ListingOne;
