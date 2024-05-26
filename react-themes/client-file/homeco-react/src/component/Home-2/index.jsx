import { useEffect, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import GoTopBtn from "../Button/GoTopBtn";
import HomecHero from "../HomecHero/HomecHeroV2";
import Features from "../Features/FeaturesV2";
import AboutV2 from "../About/AboutV2";
import LatestPropertyV2 from "../LatestProperty/LatestPropertyV2";
import AgentsV2 from "../Agents/AgentsV2";
import PropertyListing from "../PropertyListing";
import FunFacts from "../FunFact";
import CustomerReviews from "../CustomerReviews";
import DownloadApp from "../DownloadApp";
import Blog from "../Blog";
import Preloader from "../Loader";

function Home2() {
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
        <HomecHero />
        <Features />
        <AboutV2 />
        <LatestPropertyV2 />
        <AgentsV2 />
        <PropertyListing />
        <FunFacts />
        <CustomerReviews />
        <DownloadApp />
        <Blog />
        <Footer />
        <GoTopBtn />
      </>
    );
  }

  return component;
}

export default Home2;
