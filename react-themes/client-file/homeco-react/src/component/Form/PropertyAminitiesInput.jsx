import ProtoTypes from "prop-types";
import PropertyCheckInput from "./PropertyCheckInput";

function PropertyAminitiesInput({ aminities, handleChange }) {
  return (
    <div className="homec-submit-form mg-top-40">
      <h4 className="homec-submit-form__title">Aminities</h4>
      <div className="homec-submit-form__inner">
        <div className="form-group homec-form-input--list">
          {Object.keys(aminities).map((item, index) => (
            <PropertyCheckInput
              key={item + index}
              title={item}
              isChecked={aminities[item]}
              handleChange={handleChange}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

PropertyAminitiesInput.propTypes = {
  aminities: ProtoTypes.object.isRequired,
  handleChange: ProtoTypes.func.isRequired,
};

export default PropertyAminitiesInput;
