import ProtoTypes from "prop-types";
import CountUp from "react-countup";

function FunfactCard({ img, count, standard, title, v2 }) {
  return (
    <div
      className={
        v2 ? "col-lg-3 col-md-6 col-12 mg-top-40" : "col-lg-6 col-md-6 col-12"
      }
      data-aos="fade-in"
      data-aos-delay="600"
    >
      {/* FunFacts Single   */}
      <div className="homec-funfact__single homec-border">
        <div className="homec-funfact__icon">
          <img src={img} alt="#" />
        </div>
        <h3 className="homec-funfact__number">
          <span className="counter">
            <CountUp end={count} />
          </span>
          {standard}
        </h3>
        <p className="homec-funfact__text">{title}</p>
      </div>
      {/* End FunFacts Single   */}
    </div>
  );
}

FunfactCard.propTypes = {
  img: ProtoTypes.string.isRequired,
  count: ProtoTypes.number.isRequired,
  title: ProtoTypes.string.isRequired,
  standard: ProtoTypes.string,
  v2: ProtoTypes.bool,
};

export default FunfactCard;
