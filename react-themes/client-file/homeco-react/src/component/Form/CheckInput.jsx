import ProtoTypes from "prop-types";

function CheckInput({ title, properties, name }) {
  return (
    <div className="property-sidebar__single mg-top-20">
      <div className="property-sidebar__checkboxd">
        <h4 className="property-sidebar__title m-0">{title}</h4>
        <div className="row">
          {properties.map((item, index) => (
            <div className="col-md-6 col-12" key={item + index}>
              <div className="form-group homec-form-checkbox mg-top-15">
                <input type="checkbox" id={item} name={item} value={name} />
                <label className="homec-form-label" htmlFor="room1">
                  {item}
                </label>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

CheckInput.propTypes = {
  title: ProtoTypes.string.isRequired,
  properties: ProtoTypes.array.isRequired,
  name: ProtoTypes.string.isRequired,
};

export default CheckInput;
