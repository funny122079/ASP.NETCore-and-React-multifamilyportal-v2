import GoTopBtn from "../Button/GoTopBtn";
import Footer from "../Footer";
import DownloadApp from "../DownloadApp";
import HistoryLinks from "../Breadcrumbs/HistoryLinks";
import Breadcrumbs from "../Breadcrumbs";
import Header from "../Header";
import About from "./About";
import FeaturesV2 from "../Features/FeaturesV2";
import FunFacts from "../FunFact";
import AgentsV2 from "../Agents/AgentsV2";
import FaqSection from "../Faq/FaqSection";
import { useEffect, useState } from "react";
import Preloader from "../Loader";

function AboutUs() {
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
        <Breadcrumbs title="About US" titlePosition="bottom">
          <HistoryLinks link="/home" text="Home" />
          <HistoryLinks link="/about" text="About US" isActive={true} />
        </Breadcrumbs>
        <About />
        <FeaturesV2 v2={true} />
        <FunFacts />
        <AgentsV2 />
        <FaqSection />
        <DownloadApp />
        <Footer />
        <GoTopBtn />
      </>
    );
  }
  return component;
}

export default AboutUs;
