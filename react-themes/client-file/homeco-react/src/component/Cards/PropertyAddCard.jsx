import Prototype from "prop-types";
import { Link } from "react-router-dom";

function PropertyAddCard({ img, why, btn, link }) {
  return (
    <div
      className="col-lg-6 col-md-6 col-12 mg-top-30"
      data-aos="fade-up"
      data-aos-delay="600"
    >
      {/* Homec Add Property Card  */}
      <div className="homec-add-property homec-bg-third-color homec-border">
        {/* Homec Property Image   */}
        <div className="homec-add-property__img">
          <img src={img} alt="#" />
        </div>
        {/* Homec Property Content   */}
        <div className="homec-add-property__content">
          <h3 className="homec-add-property__title">Add Property for {why}</h3>
          <p className="homec-add-property__text">
            Your email address will not be published. Required fields are marked
          </p>
          <div className="homec-add-property__button">
            <Link
              to={link}
              className={
                btn !== "second" ? "homec-btn" : "homec-btn homec-btn__second"
              }
            >
              <span>Create For {why}</span>
            </Link>
          </div>
        </div>
      </div>
      {/* End Homec Add Property Card  */}
    </div>
  );
}

PropertyAddCard.propTypes = {
  img: Prototype.string.isRequired,
  why: Prototype.string.isRequired,
  btn: Prototype.string,
  link: Prototype.string.isRequired,
};

export default PropertyAddCard;
