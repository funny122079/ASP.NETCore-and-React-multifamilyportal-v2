import ProtoTypes from "prop-types";
import { Link } from "react-router-dom";

function TitleWithBtn({
  category,
  title,
  link,
  btnText,
  styleCategory,
  styleTitle,
  btn,
}) {
  return (
    <div className="homec-flex homec-flex__section mg-btm-60">
      <div className="homec-section__head m-0 mg-top-30">
        <span
          className={`homec-section__badge ${
            styleCategory?.color ? "" : "homec-primary-color"
          } homec-section__badge--small m-0`}
          data-aos="fade-in"
          data-aos-delay="300"
          style={styleCategory}
        >
          {category}
        </span>
        <h2
          className="homec-section__title"
          data-aos="fade-in"
          data-aos-delay="400"
          style={styleTitle}
        >
          {title}
        </h2>
      </div>
      {/* Button  */}
      <div
        className="homec-section__btn mg-top-30"
        data-aos="fade-right"
        data-aos-delay="500"
      >
        <Link
          to={link}
          className={`homec-btn ${btn === "v2" && "homec-btn__second"}`}
        >
          <span>{btnText}</span>
        </Link>
      </div>
    </div>
  );
}

TitleWithBtn.propTypes = {
  category: ProtoTypes.string.isRequired,
  title: ProtoTypes.string.isRequired,
  link: ProtoTypes.string.isRequired,
  btnText: ProtoTypes.string.isRequired,
  styleCategory: ProtoTypes.object,
  styleTitle: ProtoTypes.object,
  btn: ProtoTypes.string,
};

export default TitleWithBtn;
