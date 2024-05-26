import DashboardFavourite from "@/components/dashboard/favourites";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "Dashboard Favourite Homy - Real Estate React Next js Template",
};
const index = () => {
   return (
      <Wrapper>
         <DashboardFavourite />
      </Wrapper>
   )
}

export default index