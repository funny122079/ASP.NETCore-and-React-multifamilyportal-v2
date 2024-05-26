import Header from "../Header";
import Footer from "../Footer";
import DownloadApp from "../DownloadApp";
import HistoryLinks from "../Breadcrumbs/HistoryLinks";
import Breadcrumbs from "../Breadcrumbs";
import AgentCard from "../Cards/AgentCard";
import Pagination from "../Pagination";
import FaqSection from "../Faq/FaqSection";
import Preloader from "../Loader";
import { useEffect, useState } from "react";
import agents from "../../data/agents";
import GoTopBtn from "../Button/GoTopBtn";

function OurAgents() {
  // page handle
  const [currentPage, setCurrentPage] = useState(1);
  const totalPage = 24;

  const handelPage = (page) => {
    if (page === "prev") {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    } else if (page === "next") {
      if (currentPage < totalPage) {
        setCurrentPage(currentPage + 1);
      }
    } else {
      setCurrentPage(page);
    }
  };

  // loading handle
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
        <Breadcrumbs title="Our Agents" titlePosition="bottom">
          <HistoryLinks link="home" text="Home" />
          <HistoryLinks link="/our-agent" text="Our Agents" isActive={true} />
        </Breadcrumbs>

        <section className="pd-top-70 pd-btm-100">
          <div className="container">
            <div className="row">
              {agents?.map((agent) => (
                <AgentCard
                  key={agent.id}
                  img={agent.img3}
                  phone={agent.phone}
                  linkedin={agent.linkedin}
                  twitter={agent.twitter}
                  insta={agent.insta}
                  name={agent.name}
                  desc={agent.position}
                  widthClasses="col-lg-3 col-md-6 col-12"
                  classes="homec-agent__grid homec-border mg-top-30"
                />
              ))}
            </div>
            <div className="row mg-top-40">
              <Pagination
                totalPage={totalPage}
                handlePage={handelPage}
                currentPage={currentPage}
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

export default OurAgents;
