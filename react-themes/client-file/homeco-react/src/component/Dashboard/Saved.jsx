import Layout from "./Layout";
import LatestPropertyCard from "../Cards/LatestPropertyCard";
import properties from "../../data/property";
import Pagination from "../Pagination";
import { useState } from "react";

function Saved() {
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
    <Layout title="Saved">
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
          classes="col-12 mg-top-30"
          view={"list"}
        />
      ))}
      <Pagination
        totalPage={totalPage}
        handlePage={handelPage}
        currentPage={currentPage}
      />
    </Layout>
  );
}

export default Saved;
