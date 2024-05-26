import ProtoTypes from "prop-types";

function PropertyTextAreaV2({
  title,
  value,
  handleChange,
  name,
  placeHolder,
  sizeFull,
}) {
  return (
    <div className={sizeFull ? "col-12" : "col-lg-6 col-md-6 col-12 "}>
      {/* Single Form Element  */}
      <div className="mg-top-20">
        <h4 className="homec-submit-form__heading">{title}</h4>
        <div className="form-group homec-form-input">
          <textarea
            required
            placeholder={placeHolder}
            value={value}
            name={name}
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>
    </div>
  );
}

PropertyTextAreaV2.propTypes = {
  title: ProtoTypes.string,
  value: ProtoTypes.string.isRequired,
  handleChange: ProtoTypes.func.isRequired,
  name: ProtoTypes.string.isRequired,
  placeHolder: ProtoTypes.string,
  sizeFull: ProtoTypes.bool,
};

export default PropertyTextAreaV2;
