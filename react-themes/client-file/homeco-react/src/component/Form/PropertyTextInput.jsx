import ProtoTypes from "prop-types";

function PropertyTextInput({
  size,
  title,
  name,
  value,
  handleChange,
  placeholder,
  type,
  margin,
}) {
  return (
    <div className={`${size && size} col-12 `}>
      {/* Single Form Element */}
      <div className="mg-top-20">
        <h4
          className="homec-submit-form__heading"
          style={{ marginBottom: margin }}
        >
          {title}
        </h4>
        <div className="form-group homec-form-input">
          <input
            type={type ? type : "text"}
            value={value}
            name={name}
            placeholder={placeholder}
            onChange={(e) => {
              handleChange(e);
            }}
            required
          />
        </div>
      </div>
    </div>
  );
}

PropertyTextInput.propTypes = {
  size: ProtoTypes.string,
  title: ProtoTypes.string,
  name: ProtoTypes.string.isRequired,
  value: ProtoTypes.string.isRequired,
  handleChange: ProtoTypes.func.isRequired,
  placeholder: ProtoTypes.string,
  type: ProtoTypes.string,
  margin: ProtoTypes.string,
};

export default PropertyTextInput;
