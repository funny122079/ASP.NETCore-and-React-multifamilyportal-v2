import Header from "../Header";
import Breadcrumbs from "../Breadcrumbs";
import HistoryLinks from "../Breadcrumbs/HistoryLinks";
import DownloadApp from "../DownloadApp";
import Footer from "../Footer";
import GoTopBtn from "../Button/GoTopBtn";
import { useEffect, useState } from "react";
import Preloader from "../Loader";

function ErrorPage() {
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
        <Breadcrumbs title="404 Page" titlePosition="bottom">
          <HistoryLinks link="/home" text="Home" />
          <HistoryLinks link="/404" text="Error Page" isActive={true} />
        </Breadcrumbs>
        <section className="homec-error section-padding">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12">
                <div className="homec-error-inner">
                  {/* Error Content Image */}
                  <div className="homec-error-inner__img">
                    <img src="https://placehold.co/1000x565" alt="#" />
                  </div>
                  <h1 className="homec-error-inner__title">
                    Oops! Page Not Found.
                  </h1>
                  <div className="homec-error-inner__button">
                    <a href="/" className="homec-btn">
                      <span>Back to Home Page</span>
                    </a>
                  </div>
                </div>
              </div>
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

export default ErrorPage;
