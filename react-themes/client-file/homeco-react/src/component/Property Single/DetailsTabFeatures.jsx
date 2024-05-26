import ProtoTypes from "prop-types";

function DetailsTabFeatures({ title, property, check }) {
  return (
    <div className="homec-ptdetails-features mg-top-30">
      <h4 className="homec-ptdetails-features__title">{title}</h4>
      <ul className="homec-ptdetails-features__list">
        {property?.map((item, index) =>
          check ? (
            <li key={item + index}>
              <b>
                <i className="fas fa-check"></i> {item}
              </b>
            </li>
          ) : (
            <li key={index + Object.keys(item)[0]}>
              <b>{Object.keys(item)[0]}:</b>{" "}
              <span>{item[Object.keys(item)[0]]}</span>
            </li>
          )
        )}
      </ul>
    </div>
  );
}

DetailsTabFeatures.propTypes = {
  title: ProtoTypes.string.isRequired,
  property: ProtoTypes.array.isRequired,
  check: ProtoTypes.bool,
};

export default DetailsTabFeatures;
