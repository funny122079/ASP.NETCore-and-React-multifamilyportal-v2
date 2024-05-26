import Header from "../Header";
import Breadcrumbs from "../Breadcrumbs";
import HistoryLinks from "../Breadcrumbs/HistoryLinks";
import PropertyFrom from "../Form/PropertyFrom";
import DownloadApp from "../DownloadApp";
import Footer from "../Footer";
import Preloader from "../Loader";
import { useEffect, useState } from "react";
import GoTopBtn from "../Button/GoTopBtn";

function SubmitProperty() {
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
        <Breadcrumbs
          title="Submit Property"
          titlePosition="bottom"
          background="url(img/bread-overlay.jpg)"
        >
          <HistoryLinks link="/home" text="Home" />
          <HistoryLinks
            link="/submit-property"
            text="Submit Property"
            isActive={true}
          />
        </Breadcrumbs>
        <PropertyFrom />
        <DownloadApp />
        <Footer />
        <GoTopBtn />
      </>
    );
  }
  return component;
}

export default SubmitProperty;
