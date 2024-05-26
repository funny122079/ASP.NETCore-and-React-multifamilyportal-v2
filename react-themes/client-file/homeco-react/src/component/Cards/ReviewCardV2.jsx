import ProtoTypes from "prop-types";

function ReviewCardV2({ rating, text, authorName, authorPosition, date, v2 }) {
  return (
    <div style={{ width: v2 ? "100%" : "96%", marginLeft: v2 ? "" : "10px" }}>
      {/* <!-- Testimonial Single --> */}
      <div
        className={`homec-testimonial homec-border ${
          v2 && "homec-testimonial--review mg-top-30"
        }`}
      >
        {/* <!-- Author Rating --> */}
        <div className="homec-rating--main mg-btm-15">
          <ul className="homec-rating list-none mg-btm-15">
            {Array.apply(null, { length: rating }).map((item, index) => (
              <li key={`item${+index}`}>
                <i className="fa-solid fa-star"></i>
              </li>
            ))}
          </ul>
          {date && <span className="homec-primary-color">{date}</span>}
        </div>
        {/* <!-- Testimonial Text --> */}
        <p className="homec-testimonial__text">{text}</p>
        <div className="homec-testimonial__bottom mg-top-10">
          {/* <!-- Testimonial Author --> */}
          <div className="homec-testimonial__author">
            <img src="https://placehold.co/64x64" alt="#" />
            <div className="homec-testimonial__author--info">
              <h5 className="homec-testimonial__author--title">{authorName}</h5>
              <p className="homec-testimonial__author--position">
                {authorPosition}
              </p>
            </div>
          </div>
          {/* <!-- Testimonial Quoute Icon --> */}
          <div className="homec-testimonial__quote">
            <svg
              width="153"
              height="108"
              viewBox="0 0 153 108"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.1">
                <path d="M31.9633 67.8044C32.2714 71.1357 32.0357 80.1918 23.3603 92.7847C22.704 93.735 22.8231 95.0167 23.638 95.8314C27.175 99.3684 29.3649 101.6 30.9008 103.162C32.9205 105.221 33.8425 106.16 35.1921 107.383C36.0931 108.193 37.4565 108.207 38.3671 107.413C53.4884 94.2555 70.2837 67.0666 67.8534 33.7562C66.4293 14.1969 52.1623 2.42806e-05 33.9312 2.58744e-05C15.2218 2.751e-05 2.24064e-05 15.2194 2.40421e-05 33.9291C2.562e-05 51.978 14.1663 66.7795 31.9633 67.8044ZM33.9312 4.78132C49.5874 4.78132 61.8464 17.1128 63.0859 34.1017C63.0859 34.1017 63.0859 34.1017 63.0859 34.1041C65.8199 71.5677 43.55 95.9014 36.8215 102.345C36.1655 101.698 35.4161 100.937 34.3118 99.8121C32.9812 98.458 31.16 96.6043 28.4053 93.84C38.9368 77.6144 36.9499 66.0535 36.0792 64.3958C35.6659 63.609 34.8184 63.079 33.9312 63.079C17.8575 63.079 4.78133 50.0029 4.78132 33.9291C4.78132 17.8575 17.8575 4.78132 33.9312 4.78132Z" />
                <path d="M116.868 67.8043C117.179 71.1264 116.95 80.1755 108.265 92.7847C107.612 93.735 107.728 95.0166 108.543 95.8314C112.073 99.3614 114.261 101.591 115.795 103.153C117.821 105.217 118.746 106.158 120.095 107.383C120.996 108.193 122.36 108.205 123.27 107.416C138.391 94.2578 155.189 67.0735 152.763 33.7562L152.763 33.7538C151.334 14.1969 137.065 -6.23648e-06 118.834 -4.64267e-06C100.125 -3.00702e-06 84.9028 15.2194 84.9028 33.9291C84.9028 51.9801 99.0693 66.784 116.868 67.8043ZM118.834 4.7813C134.488 4.7813 146.754 17.1127 147.996 34.1041L147.996 34.1017C150.723 71.5746 128.453 95.9038 121.725 102.345C121.066 101.698 120.314 100.933 119.208 99.8049C117.879 98.4508 116.061 96.5995 113.31 93.84C123.842 77.612 121.855 66.0534 120.984 64.3981C120.571 63.6114 119.721 63.079 118.834 63.079C102.76 63.079 89.6841 50.0028 89.6841 33.9291C89.6841 17.8574 102.76 4.7813 118.834 4.7813Z" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      {/* <!-- End Testimonial Single --> */}
    </div>
  );
}
ReviewCardV2.propTypes = {
  rating: ProtoTypes.number.isRequired,
  text: ProtoTypes.string.isRequired,
  authorName: ProtoTypes.string.isRequired,
  authorPosition: ProtoTypes.string.isRequired,
  date: ProtoTypes.string,
  v2: ProtoTypes.bool,
};

export default ReviewCardV2;
