import Header from "../Header";
import Breadcrumbs from "../Breadcrumbs";
import HistoryLinks from "../Breadcrumbs/HistoryLinks";
import DownloadApp from "../DownloadApp";
import Footer from "../Footer";
import GoTopBtn from "../Button/GoTopBtn";
import FaqSection from "./FaqSection";
import FeaturesV2 from "../Features/FeaturesV2";
import FunFacts from "../FunFact";
import Preloader from "../Loader";
import { useEffect, useState } from "react";

function Faq() {
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
        <Breadcrumbs title="Faq's" titlePosition="bottom">
          <HistoryLinks link="/home" text="Home" />
          <HistoryLinks link="/faq" text="Faq's" isActive={true} />
        </Breadcrumbs>
        <FaqSection />
        <div className="mg-top-90">
          <FeaturesV2 />
          <FunFacts v2={true} />
        </div>
        <DownloadApp />
        <Footer />
        <GoTopBtn />
      </>
    );
  }
  return component;
}

export default Faq;
