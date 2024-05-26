import ProtoTypes from "prop-types";
function Title({ firstText, secondText, marginSize, styleFirst, styleSecond }) {
  return (
    <div
      className={`homec-section__head text-center mg-btm-${marginSize}`}
      style={{ zIndex: "0" }}
    >
      <span
        className={`homec-section__badge homec-section__badge--small m-0 ${
          styleFirst ? "" : "homec-primary-color"
        }`}
        style={{ ...styleFirst }}
        data-aos="fade-in"
        data-aos-delay="300"
      >
        {firstText}
      </span>
      <h2
        className="homec-section__title"
        style={{ ...styleSecond }}
        data-aos="fade-in"
        data-aos-delay="400"
      >
        {secondText}
      </h2>
    </div>
  );
}

Title.propTypes = {
  firstText: ProtoTypes.string.isRequired,
  secondText: ProtoTypes.string.isRequired,
  marginSize: ProtoTypes.string.isRequired,
  styleFirst: ProtoTypes.object,
  styleSecond: ProtoTypes.object,
};

export default Title;
