import ProtoTypes from "prop-types";

function PropertyCheckInput({ title, handleChange, isChecked }) {
  return (
    <div className="form-group homec-form-checkbox mg-top-15">
      <input
        type="checkbox"
        id="item2"
        name={title}
        checked={isChecked}
        onChange={(e) => handleChange(e)}
      />
      <label className="homec-form-label" htmlFor="item2">
        {title}
      </label>
    </div>
  );
}

PropertyCheckInput.propTypes = {
  title: ProtoTypes.string.isRequired,
  isChecked: ProtoTypes.bool.isRequired,
  handleChange: ProtoTypes.func.isRequired,
};

export default PropertyCheckInput;
