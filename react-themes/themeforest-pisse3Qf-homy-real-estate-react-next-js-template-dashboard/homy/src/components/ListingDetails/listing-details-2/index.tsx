import HeaderOne from "@/layouts/headers/HeaderOne"
import ListingDetailsTwoArea from "./ListingDetailsTwoArea"
import FancyBanner from "@/components/common/FancyBanner"
import FooterFour from "@/layouts/footers/FooterFour"

const ListingDetailsOne = () => {
  return (
    <>
      <HeaderOne style={true} />
      <ListingDetailsTwoArea />
      <FancyBanner />
      <FooterFour />
    </>
  )
}

export default ListingDetailsOne
