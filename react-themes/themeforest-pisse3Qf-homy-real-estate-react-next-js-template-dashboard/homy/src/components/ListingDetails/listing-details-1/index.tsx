import HeaderOne from "@/layouts/headers/HeaderOne"
import ListingDetailsOneArea from "./ListingDetailsOneArea"
import FancyBanner from "@/components/common/FancyBanner"
import FooterFour from "@/layouts/footers/FooterFour"

const ListingDetailsOne = () => {
  return (
    <>
      <HeaderOne style={true} />
      <ListingDetailsOneArea />
      <FancyBanner />
      <FooterFour />
    </>
  )
}

export default ListingDetailsOne
