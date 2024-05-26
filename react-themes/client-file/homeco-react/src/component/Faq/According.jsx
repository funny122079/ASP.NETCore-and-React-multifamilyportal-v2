import ProtoTypes from "prop-types";

function According({ collapse, heading, desc, handleCollapse, id }) {
  return (
    <div
      className="accordion-item homec-accordion__single mg-top-30"
      onClick={() => handleCollapse(id)}
    >
      <h2 className="accordion-header">
        <button
          className={`accordion-button  homec-accordion__heading ${
            collapse !== id && "collapsed"
          }`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#ac-collapse1"
          aria-label="toggler"
        >
          {heading}
        </button>
      </h2>
      <div
        className={`accordion-collapse ${collapse !== id && "collapse"}`}
        data-bs-parent="#homec-accordion"
      >
        <div className="accordion-body homec-accordion__body">{desc}</div>
      </div>
    </div>
  );
}

According.propTypes = {
  heading: ProtoTypes.string.isRequired,
  desc: ProtoTypes.string.isRequired,
  collapse: ProtoTypes.number.isRequired,
  handleCollapse: ProtoTypes.func.isRequired,
  id: ProtoTypes.number.isRequired,
};

export default According;
