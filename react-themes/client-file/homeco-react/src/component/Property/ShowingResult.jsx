import ProtoTypes from "prop-types";

function ShowingResult({ currentPage, totalPages }) {
  return (
    <div className="hoemc-showing-results">
      <p className="hoemc-showing-results__text">
        Showing <span>{currentPage}</span> of <span>{totalPages}</span> results
      </p>
    </div>
  );
}

ShowingResult.propTypes = {
  currentPage: ProtoTypes.string.isRequired || ProtoTypes.number.isRequired,
  totalPages: ProtoTypes.string.isRequired,
};

export default ShowingResult;
