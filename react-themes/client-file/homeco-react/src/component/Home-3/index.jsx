import FeatureV2 from "../Features/FeaturesV2";
import Header from "../Header";
import HomecHero from "../HomecHero/HomecHeroV3";
import LatestPropertyV3 from "../LatestProperty/LatestPropertyV3";
import FunFactV2 from "../FunFact/FunFactV2";
import About from "../About/About";
import AgentsV2 from "../Agents/AgentsV2";
import PropertiesVideo from "../LatestProperty/PropertiesVideo";
import CustomerReview from "../CustomerReviews/CustomerReviewV2";
import Preloader from "../Loader";
import { useEffect, useState } from "react";
import DownloadApp from "../DownloadApp";
import Blog from "../Blog";
import Footer from "../Footer";
import GoTopBtn from "../Button/GoTopBtn";
import FaqSection from "../Faq/FaqSection";

function Home3() {
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
        <Header v2={true} />
        <HomecHero />
        <FeatureV2 v2={true} />
        <LatestPropertyV3 />
        <FunFactV2 />
        <About />
        <AgentsV2 />
        <PropertiesVideo />
        <CustomerReview />
        <FaqSection />
        <DownloadApp />
        <Blog />
        <Footer />
        <GoTopBtn />
      </>
    );
  }
  return component;
}

export default Home3;
