import { useState } from "react";
import PropertyBar from "./PropertyBar";
import Sidebar from "../Sidebar";
import LatestPropertyCard from "../Cards/LatestPropertyCard";
import Pagination from "../Pagination";
import properties from "../../data/property";

function PropertyGrid() {
  //handle grid style
  const [gridStyle, setGridStyle] = useState("grid");
  const handleGridStyle = (style) => {
    setGridStyle(style);
  };
  //handle page
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

  return (
    <section className="homec-propertys pd-top-80 pd-btm-80">
      <div className="container">
        <PropertyBar gridStyle={gridStyle} handleGridStyle={handleGridStyle} />
        <div className="row">
          <Sidebar />
          <div className="col-lg-8 col-12">
            <div className="tab-content" id="nav-tabContent">
              {/* <!-- Grid Tab --> */}
              <div
                className="tab-pane fade show active"
                id="homec-grid"
                role="tabpanel"
              >
                <div className="row">
                  {properties?.map((property) => (
                    <LatestPropertyCard
                      key={property.id}
                      img={property.img}
                      likeLink={property.likeLink}
                      detailsLink={property.detailsLink}
                      agentName={property.agentName}
                      agentImg={property.agentImg}
                      price={property.price}
                      period={property.period}
                      whatFor={property.whatFor}
                      propertyLink={property.propertyLink}
                      name={property.name}
                      address={property.address}
                      detailsList={property.detailsList}
                      classes={`${
                        gridStyle === "grid"
                          ? "col-md-6 col-12 mg-top-30"
                          : "col-12 mg-top-30"
                      } `}
                      view={gridStyle}
                    />
                  ))}
                </div>
                <Pagination
                  totalPage={totalPage}
                  handlePage={handelPage}
                  currentPage={currentPage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PropertyGrid;
