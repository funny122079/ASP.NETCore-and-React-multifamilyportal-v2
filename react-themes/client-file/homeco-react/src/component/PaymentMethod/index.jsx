import Breadcrumbs from "../Breadcrumbs";
import Header from "../Header";
import HistoryLinks from "../Breadcrumbs/HistoryLinks";
import DownloadApp from "../DownloadApp";
import Footer from "../Footer";
import PackageDetails from "./PackageDetails";
import PaymentOptions from "./PaymentOptions";
import Preloader from "../Loader";
import { useEffect, useState } from "react";
import GoTopBtn from "../Button/GoTopBtn";

function PaymentMethod() {
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
          title="Payment Method"
          titlePosition="bottom"
          background="url(img/bread-overlay.jpg)"
        >
          <HistoryLinks link="home" text="Home" />
          <HistoryLinks
            link="/payment-method"
            text="Payment Method"
            isActive={true}
          />
        </Breadcrumbs>
        <section
          className="pd-top-80 pd-btm-80"
          style={{ backgroundImage: "url('img/payment-bg.png')" }}
        >
          <div className="container">
            <div className="row">
              <PackageDetails />
              <PaymentOptions price={99} />
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

export default PaymentMethod;
