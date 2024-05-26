import Header from "../Header";
import Footer from "../Footer";
import DownloadApp from "../DownloadApp";
import Breadcrumbs from "../Breadcrumbs";
import HistoryLinks from "../Breadcrumbs/HistoryLinks";
import PropertyAddCard from "../Cards/PropertyAddCard";
import { useEffect, useState } from "react";
import Preloader from "../Loader";
import GoTopBtn from "../Button/GoTopBtn";

function AddProperty() {
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
        <Breadcrumbs title="Add Property" titlePosition="bottom">
          <HistoryLinks link="/home" text="Home" />
          <HistoryLinks
            link="/add-property"
            text="Add Property"
            isActive={true}
          />
        </Breadcrumbs>

        <section className="homec-error pd-top-90 pd-btm-120">
          <div className="container">
            <div className="row">
              <PropertyAddCard
                img="img/property-rent.png"
                why="Rent"
                link="/submit-property"
              />
              <PropertyAddCard
                img="img/property-sale.png"
                why="Sale"
                link="/submit-property"
                btn="second"
              />
            </div>
          </div>
        </section>

        <DownloadApp />
        <Footer />
        <GoTopBtn />
      </>
    );
  }
  return component;
}

export default AddProperty;
