import DownloadApp from "../DownloadApp";
import Footer from "../Footer";
import HistoryLinks from "../Breadcrumbs/HistoryLinks";
import Breadcrumbs from "../Breadcrumbs";
import Header from "../Header";
import GoTopBtn from "../Button/GoTopBtn";
import AgentDetailCard from "../Cards/AgentDetailCard";
import PropertyAgents from "../Agents/PropertyAgents";
import { useEffect, useState } from "react";
import Pagination from "../Pagination";
import LatestPropertyCard from "../Cards/LatestPropertyCard";
import PropertyBar from "../Property/PropertyBar";
import Preloader from "../Loader";

function AgentDetail() {
  // handle gridStyle
  const [gridStyle, setGridStyle] = useState("grid");
  const handleGridStyle = (style) => {
    setGridStyle(style);
  };
  // handle Page
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

  // Loading Handeler

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
        <Breadcrumbs title="Our Agents Details" titlePosition="bottom">
          <HistoryLinks link="/home" text="Home" />
          <HistoryLinks
            link="/agent-detail"
            text="Agents Details"
            isActive={true}
          />
        </Breadcrumbs>
        <section className="pd-top-70 pd-btm-100">
          <div className="container">
            <div className="row">
              <AgentDetailCard
                image="https://placehold.co/360x390"
                name="Wade De Warren"
                position="Real Estate Broker"
                contactNumber="+0938 4937 23"
                email="Youremailad@gmail.com"
                location="2972 Westheimer Rd. Santa Ana, Illinois 85486"
                phone="#"
                linkedin="#"
                twitter="#"
                instagram="#"
                text="There are many variations of passages of Lorem Ipsum available, but the majority to have suffered alteration in some form, by injected humor. Ipsum available, but the a majority have suffered alteration in some form."
              />
              <PropertyAgents
                image="https://placehold.co/90x90"
                name="Wade De Warren"
                position="Real Estate Broker"
              />
            </div>
            <div className="row mg-top-30">
              <div className="col-12" data-aos-delay="500">
                <PropertyBar
                  gridStyle={gridStyle}
                  handleGridStyle={handleGridStyle}
                />
              </div>
              <LatestPropertyCard
                img="https://placehold.co/350x220"
                likeLink="#"
                detailsLink="#"
                agentName="Wade Wirren"
                agentImg="https://placehold.co/35x35"
                price={(3, 976)}
                period="month"
                whatFor="To sale"
                propertyLink="#"
                name="Northwest Office Space"
                locationImg="img/location-icon.svg"
                address="1901 Thornridge Cir. Shiloh, Hawaii 81063"
                detailsList={[
                  { img: "img/room-icon.svg", name: "3 Room" },
                  { img: "img/bath-icon.svg", name: "2 Bathroom" },
                  { img: "img/size-icon.svg", name: "5x9 m2" },
                ]}
                classes={`${
                  gridStyle === "grid"
                    ? "col-md-4 col-12 mg-top-30"
                    : "col-12 mg-top-30"
                } `}
                view={gridStyle}
              />
              <LatestPropertyCard
                img="https://placehold.co/350x220"
                likeLink="#"
                detailsLink="#"
                agentName="Wade Wirren"
                agentImg="https://placehold.co/35x35"
                price={(3, 976)}
                period="month"
                whatFor="To sale"
                propertyLink="#"
                name="Countryside Lake View..."
                locationImg="img/location-icon.svg"
                address="1901 Thornridge Cir. Shiloh, Hawaii 81063"
                detailsList={[
                  { img: "img/room-icon.svg", name: "3 Room" },
                  { img: "img/bath-icon.svg", name: "2 Bathroom" },
                  { img: "img/size-icon.svg", name: "5x9 m2" },
                ]}
                classes={`${
                  gridStyle === "grid"
                    ? "col-md-4 col-12 mg-top-30"
                    : "col-12 mg-top-30"
                } `}
                view={gridStyle}
              />
              <LatestPropertyCard
                img="https://placehold.co/350x220"
                likeLink="#"
                detailsLink="#"
                agentName="Wade Wirren"
                agentImg="https://placehold.co/35x35"
                price={(3, 976)}
                period="month"
                whatFor="To sale"
                propertyLink="#"
                name="Brand New Shopping Mall"
                locationImg="img/location-icon.svg"
                address="1901 Thornridge Cir. Shiloh, Hawaii 81063"
                detailsList={[
                  { img: "img/room-icon.svg", name: "3 Room" },
                  { img: "img/bath-icon.svg", name: "2 Bathroom" },
                  { img: "img/size-icon.svg", name: "5x9 m2" },
                ]}
                classes={`${
                  gridStyle === "grid"
                    ? "col-md-4 col-12 mg-top-30"
                    : "col-12 mg-top-30"
                } `}
                view={gridStyle}
              />
              <LatestPropertyCard
                img="https://placehold.co/350x220"
                likeLink="#"
                detailsLink="#"
                agentName="Wade Wirren"
                agentImg="https://placehold.co/35x35"
                price={(3, 976)}
                period="month"
                whatFor="To sale"
                propertyLink="#"
                name="Affordable Green Villa House"
                locationImg="img/location-icon.svg"
                address="1901 Thornridge Cir. Shiloh, Hawaii 81063"
                detailsList={[
                  { img: "img/room-icon.svg", name: "3 Room" },
                  { img: "img/bath-icon.svg", name: "2 Bathroom" },
                  { img: "img/size-icon.svg", name: "5x9 m2" },
                ]}
                classes={`${
                  gridStyle === "grid"
                    ? "col-md-4 col-12 mg-top-30"
                    : "col-12 mg-top-30"
                } `}
                view={gridStyle}
              />
              <LatestPropertyCard
                img="https://placehold.co/350x220"
                likeLink="#"
                detailsLink="#"
                agentName="Wade Wirren"
                agentImg="https://placehold.co/35x35"
                price={(3, 976)}
                period="month"
                whatFor="To sale"
                propertyLink="#"
                name="Diamond Manco Apartment"
                locationImg="img/location-icon.svg"
                address="1901 Thornridge Cir. Shiloh, Hawaii 81063"
                detailsList={[
                  { img: "img/room-icon.svg", name: "3 Room" },
                  { img: "img/bath-icon.svg", name: "2 Bathroom" },
                  { img: "img/size-icon.svg", name: "5x9 m2" },
                ]}
                classes={`${
                  gridStyle === "grid"
                    ? "col-md-4 col-12 mg-top-30"
                    : "col-12 mg-top-30"
                } `}
                view={gridStyle}
              />
              {gridStyle === "grid" && (
                <LatestPropertyCard
                  img="https://placehold.co/350x220"
                  likeLink="#"
                  detailsLink="#"
                  agentName="Wade Wirren"
                  agentImg="https://placehold.co/35x35"
                  price={3976}
                  period="month"
                  whatFor="To sale"
                  propertyLink="#"
                  name="Countryside Modern Lake"
                  locationImg="img/location-icon.svg"
                  address="1901 Thornridge Cir. Shiloh, Hawaii 81063"
                  detailsList={[
                    { img: "img/room-icon.svg", name: "3 Room" },
                    { img: "img/bath-icon.svg", name: "2 Bathroom" },
                    { img: "img/size-icon.svg", name: "5x9 m2" },
                  ]}
                  classes={`${
                    gridStyle === "grid"
                      ? " col-md-4 col-12 mg-top-30"
                      : "col-12 mg-top-30"
                  } `}
                />
              )}
            </div>
            <Pagination
              totalPage={totalPage}
              handlePage={handelPage}
              currentPage={currentPage}
            />
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

export default AgentDetail;
