import { useEffect, useState } from "react";
import Header from "../Header";
import Breadcrumbs from "../Breadcrumbs";
import HistoryLinks from "../Breadcrumbs/HistoryLinks";
import Footer from "../Footer";
import GoTopBtn from "../Button/GoTopBtn";
import Preloader from "../Loader";
import SingleSlider from "./SingleSlider";
import ThumbnailsSlider from "./ThumbnilsSlider";
import PropertyDetails from "./PropertyDetails";

function PropertySingle() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(false);
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
        <section className="pd-top-80 pd-btm-80">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <SingleSlider />
                <ThumbnailsSlider />
              </div>
            </div>
          </div>
        </section>
        <PropertyDetails />
        <Footer />
        <GoTopBtn />
      </>
    );
  }

  return component;
}

export default PropertySingle;
