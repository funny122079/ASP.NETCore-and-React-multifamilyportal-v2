import ProtoTypes from "prop-types";

function FeaturesCardV2({ icon, serial, title, text }) {
  return (
    <div
      className="homec-features-list__single"
      data-aos="fade-up"
      data-aos-delay="400"
    >
      <div className="homec-features-list__head">
        <div className="homec-features-list__first">
          <div className="homec-features-list__icon">
            <img src={icon} alt="#" />
            <h4 className="homec-features-list__number">{serial}</h4>
          </div>
        </div>
        <div className="homec-features-list__arrow homec-features-list__arrow--one">
          <img src="img/arrow-icon.svg" alt="#" />
        </div>
      </div>
      <div className="homec-features-list__body">
        <h4 className="homec-features-list__title">{title}</h4>
        <p className="homec-features-list__text">{text}</p>
      </div>
    </div>
  );
}

FeaturesCardV2.propTypes = {
  icon: ProtoTypes.string.isRequired,
  serial: ProtoTypes.string.isRequired,
  title: ProtoTypes.string.isRequired,
  text: ProtoTypes.string.isRequired,
};

export default FeaturesCardV2;
