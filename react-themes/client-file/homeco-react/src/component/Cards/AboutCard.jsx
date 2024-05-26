import ProtoTypes from "prop-types";

function AboutCard({ img, text, count }) {
  return (
    <div className="homec-funfact__single homec-funfact__single--v2">
      <div className="homec-funfact__icon">
        <img src={img} alt="#" />
      </div>
      <h3 className="homec-funfact__number">
        <span className="counter">{count}</span>k+ Renters
      </h3>
      <p className="homec-funfact__text">{text}</p>
    </div>
  );
}

AboutCard.propTypes = {
  img: ProtoTypes.string.isRequired,
  text: ProtoTypes.string.isRequired,
  count: ProtoTypes.number.isRequired,
};

export default AboutCard;
