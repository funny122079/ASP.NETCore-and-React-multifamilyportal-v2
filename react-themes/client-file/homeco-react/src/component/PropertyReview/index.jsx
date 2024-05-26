import ProtoTypes from "prop-types";
import ReviewCardV3 from "../Cards/ReviewCardV3";
import ReviewForm from "../Form/ReviewForm";

function PropertyReview({ isActive }) {
  return (
    <div
      className={`tab-pane fade ${isActive && "show active"}`}
      id="homec-pd-tab5"
      role="tabpanel"
    >
      <div className="homec-pdetails-tab__inner">
        <div className="homec-pdetails-tab--review">
          <ReviewCardV3
            rating={5}
            time="2 days ago"
            text="“There are many variations of passages of Lorem Ipsum available, in majority have into the find end to suffered.”"
            authorName="Arnold Burner"
            authorPosition="Senior Designer"
            authorImg="https://placehold.co/64x64"
          />
          <ReviewCardV3
            rating={5}
            time="2 days ago"
            text="“There are many variations of passages of Lorem Ipsum available, in majority have into the find end to suffered.”"
            authorName="Arnold Burner"
            authorPosition="Senior Designer"
            authorImg="https://placehold.co/64x64"
          />
          <ReviewCardV3
            rating={5}
            time="2 days ago"
            text="“There are many variations of passages of Lorem Ipsum available, in majority have into the find end to suffered.”"
            authorName="Arnold Burner"
            authorPosition="Senior Designer"
            authorImg="https://placehold.co/64x64"
          />
        </div>
        <ReviewForm />
      </div>
    </div>
  );
}

PropertyReview.propTypes = {
  isActive: ProtoTypes.bool.isRequired,
};

export default PropertyReview;
