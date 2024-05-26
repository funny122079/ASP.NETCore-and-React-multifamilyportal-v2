import ProtoTypes from "prop-types";

function ReviewCardV3({
  rating,
  time,
  text,
  authorName,
  authorPosition,
  authorImg,
}) {
  return (
    <div className="homec-testimonial homec-testimonial--review homec-border mg-top-30">
      <div className="homec-rating--main mg-btm-15">
        {/* Author Rating  */}
        <ul className="homec-rating list-none">
          {Array.apply(null, { length: rating }).map((item, index) => (
            <li key={`item${+index}`}>
              <i className="fa-solid fa-star"></i>
            </li>
          ))}
        </ul>
        <span className="homec-primary-color">{time}</span>
      </div>
      {/* Testimonial Text  */}
      <p className="homec-testimonial__text">{text}</p>
      <div className="homec-testimonial__bottom">
        {/* Testimonial Author  */}
        <div className="homec-testimonial__author">
          <img src={authorImg} alt="#" />
          <div className="homec-testimonial__author--info">
            <h5 className="homec-testimonial__author--title">{authorName}</h5>
            <p className="homec-testimonial__author--position">
              {authorPosition}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

ReviewCardV3.propTypes = {
  rating: ProtoTypes.number.isRequired,
  time: ProtoTypes.string.isRequired,
  text: ProtoTypes.string.isRequired,
  authorName: ProtoTypes.string.isRequired,
  authorPosition: ProtoTypes.string.isRequired,
  authorImg: ProtoTypes.string.isRequired,
};

export default ReviewCardV3;
