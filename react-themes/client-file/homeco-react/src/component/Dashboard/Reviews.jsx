import Layout from "./Layout";
import ReviewCardV2 from "../Cards/ReviewCardV2";
import { useState } from "react";
import Pagination from "../Pagination";
import reviews from "../../data/reviews";

function Reviews() {
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
    <Layout title="Reviews">
      {reviews?.map((review) => (
        <ReviewCardV2
          key={review.id}
          rating={review.rating}
          date={review.date}
          text={review.text}
          authorName={review.authorName}
          authorPosition={review.authorPosition}
          v2={true}
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

export default Reviews;
