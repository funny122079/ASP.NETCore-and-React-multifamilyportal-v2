import ProtoTypes from "prop-types";
import { Link } from "react-router-dom";

function FeatureCard({ link, title, text, children }) {
  return (
    <div
      className="col-lg-3 col-md-6 col-12 mg-top-30"
      data-aos="fade-up"
      data-aos-delay="400"
    >
      <Link to={link} className="homec-features__single">
        <div className="homec-features__icon">{children}</div>
        <div className="homec-features__content">
          <h3 className="homec-features__title">{title}</h3>
          <p className="homec-features__text">{text}</p>
        </div>
      </Link>
    </div>
  );
}

FeatureCard.propTypes = {
  link: ProtoTypes.string.isRequired,
  title: ProtoTypes.string.isRequired,
  text: ProtoTypes.string.isRequired,
  children: ProtoTypes.node.isRequired,
};

export default FeatureCard;
