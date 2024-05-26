import PropertyFrom from "../Form/PropertyFrom";
import Header from "../Header";
import Footer from "../Footer";
import DownloadApp from "../DownloadApp";
import Breadcrumbs from "../Breadcrumbs";
import HistoryLinks from "../Breadcrumbs/HistoryLinks";
import Preloader from "../Loader";
import { useEffect, useState } from "react";
import GoTopBtn from "../Button/GoTopBtn";

function EditProperty() {
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
          title="Edit Property"
          titlePosition="bottom"
          background="url(img/bread-overlay.jpg)"
        >
          <HistoryLinks link="/home" text="Home" />
          <HistoryLinks
            link="/edit-property"
            text="Edit Property"
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

export default EditProperty;
