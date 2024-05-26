import ProtoTypes from "prop-types";

function ReviewCard({ rating, text, authorName, authorPosition, img }) {
  return (
    <div
      className="homec-testimonial homec-testimonial--v2"
      style={{ marginBottom: "50px" }}
    >
      <div className="homec-testimonial__main">
        {/* <!-- Author Rating --> */}
        <ul className="homec-rating list-none mg-btm-15">
          {Array.apply(null, { length: rating }).map((item, index) => (
            <li key={`item${+index}`}>
              <i className="fa-solid fa-star"></i>
            </li>
          ))}
        </ul>
        {/* <!-- Testimonial Text --> */}
        <p className="homec-testimonial__text">{text}</p>
        <div className="homec-testimonial__bottom mg-top-10">
          {/* <!-- Testimonial Author --> */}
          <div className="homec-testimonial__author">
            <div className="homec-testimonial__author--info">
              <h5 className="homec-testimonial__author--title">{authorName}</h5>
              <p className="homec-testimonial__author--position">
                {authorPosition}
              </p>
            </div>
          </div>
          {/* <!-- Testimonial Quoute Icon --> */}
        </div>
      </div>
      <div className="homec-testimonial__img">
        <div className="homec-testimonial__quote">
          <i className="fa-solid fa-quote-left"></i>
        </div>
        <img src={img} alt="#" />
      </div>
    </div>
  );
}
ReviewCard.propTypes = {
  rating: ProtoTypes.number.isRequired,
  text: ProtoTypes.string.isRequired,
  authorName: ProtoTypes.string.isRequired,
  authorPosition: ProtoTypes.string.isRequired,
  img: ProtoTypes.string.isRequired,
};
export default ReviewCard;
