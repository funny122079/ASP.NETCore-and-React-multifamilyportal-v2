import ProtoTypes from "prop-types";

function Accorodion({ name, img, text, isActive, handleActive }) {
  return (
    <div className="accordion-item homec-accordion__single homec-accordion__single--floor mg-top-20">
      <h2 className="accordion-header" id="homect-1">
        <button
          className="accordion-button collapsed homec-accordion__heading homec-accordion__heading--floor"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#ac-collapseOne"
          onClick={() => handleActive(name)}
        >
          {name} Floor Stature
        </button>
      </h2>
      <div
        id="ac-collapseOne"
        className={`accordion-collapse collapse ${isActive === name && "show"}`}
        aria-labelledby="homect-1"
        data-bs-parent="#homec-accordion"
      >
        <div className="accordion-body homec-accordion__body homec-accordion__body--floor">
          <div className="floor-plan-img">
            <img src={img} alt="#" />
          </div>
          <div className="floor-plan-content">
            <p>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

Accorodion.propTypes = {
  name: ProtoTypes.string.isRequired,
  img: ProtoTypes.string.isRequired,
  text: ProtoTypes.string.isRequired,
  isActive: ProtoTypes.string.isRequired,
  handleActive: ProtoTypes.func.isRequired,
};

export default Accorodion;
