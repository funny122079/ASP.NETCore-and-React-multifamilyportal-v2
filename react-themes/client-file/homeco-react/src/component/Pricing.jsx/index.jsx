import Header from "../Header";
import Breadcrumbs from "../Breadcrumbs";
import HistoryLinks from "../Breadcrumbs/HistoryLinks";
import DownloadApp from "../DownloadApp";
import Footer from "../Footer";
import GoTopBtn from "../Button/GoTopBtn";
import PricingCard from "../Cards/PricingCard";
import FaqSection from "../Faq/FaqSection";
import Preloader from "../Loader";
import { useEffect, useState } from "react";

function Pricing() {
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
        <Breadcrumbs title="Our Package" titlePosition="bottom">
          <HistoryLinks link="/home" text="Home" />
          <HistoryLinks link="/pricing" text="Our Package" isActive={true} />
        </Breadcrumbs>
        <section className="pd-top-90 pd-btm-120">
          <div className="container">
            <div className="row">
              <PricingCard
                title="Free"
                price="00"
                period="Month"
                features={[
                  { name: "Property Submission", value: 5 },
                  { name: "Amenity", value: 7 },
                  { name: "Nearest Place", value: 5 },
                  { name: "Photo", value: 3 },
                  { name: "Featured Property", value: false },

                  { name: "Top Property", value: false },
                  { name: "Urgent Property", value: false },
                ]}
              />{" "}
              <PricingCard
                title="Basic"
                price="49"
                period="Month"
                isActive={true}
                features={[
                  { name: "Property Submission", value: 5 },
                  { name: "Amenity", value: 7 },
                  { name: "Nearest Place", value: 5 },
                  { name: "Photo", value: 3 },
                  { name: "Featured Property", value: 2 },
                  { name: "Top Property", value: false },
                  { name: "Urgent Property", value: false },
                ]}
              />{" "}
              <PricingCard
                title="Pro"
                price="99"
                period="Month"
                features={[
                  { name: "Property Submission", value: 5 },
                  { name: "Amenity", value: 7 },
                  { name: "Nearest Place", value: 5 },
                  { name: "Photo", value: 3 },
                  { name: "Featured Property", value: 3 },
                  { name: "Top Property", value: true },
                  { name: "Urgent Property", value: true },
                ]}
              />
            </div>
          </div>
        </section>
        <FaqSection />
        <DownloadApp />
        <Footer />
        <GoTopBtn />
      </>
    );
  }
  return component;
}

export default Pricing;
