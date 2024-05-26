import FooterFour from "@/layouts/footers/FooterFour"
import FancyBanner from "@/components/common/FancyBanner"
import ListingTwelveArea from "./ListingTwelveArea"
import HeaderOne from "@/layouts/headers/HeaderOne"

const ListingTwelve = () => {
   return (
      <>
         <HeaderOne style={true} />
         <ListingTwelveArea />
         <FancyBanner />
         <FooterFour />
      </>
   )
}

export default ListingTwelve;
