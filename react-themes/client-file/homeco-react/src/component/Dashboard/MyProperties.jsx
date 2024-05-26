import Layout from "./Layout";
import DashboardPropertyCard from "../Cards/DashboardPropertyCard";
import Pagination from "../Pagination";
import { useState } from "react";
import properties from "../../data/property";

function MyProperties() {
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
    <>
      <Layout title="My Properties">
        {properties?.map((property) => (
          <DashboardPropertyCard
            key={property.id}
            status={property.status}
            image={property.img2}
            why={property.whatFor}
            title={property.name}
            location={property.address}
            rating={property.rating}
            totalRating={property.totalRating}
          />
        ))}
        <Pagination
          totalPage={totalPage}
          currentPage={currentPage}
          handlePage={handelPage}
        />
      </Layout>
    </>
  );
}

export default MyProperties;
