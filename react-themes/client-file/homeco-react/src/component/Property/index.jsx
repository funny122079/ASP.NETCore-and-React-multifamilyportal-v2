import { useEffect, useState } from "react";
import Preloader from "../Loader";
import Header from "../Header";
import Breadcrumbs from "../Breadcrumbs";
import GoTopBtn from "../Button/GoTopBtn";
import Footer from "../Footer";
import HistoryLinks from "../Breadcrumbs/HistoryLinks";
import PropertyGrid from "./PropertyGrid";

function Property() {
  const [isLoading, setisLoadingg] = useState(true);
  useEffect(() => {
    setisLoadingg(false);
  }, []);

  let component = undefined;
  if (isLoading) {
    component = <Preloader />;
  } else {
    component = (
      <>
        <Header />
        <Breadcrumbs title="Latest Properties">
          <HistoryLinks link="home" text="Home" />
          <HistoryLinks
            link="property"
            text="Latest Properties"
            isActive={true}
          />
        </Breadcrumbs>
        <PropertyGrid />
        <Footer />
        <GoTopBtn />
      </>
    );
  }

  return component;
}

export default Property;
