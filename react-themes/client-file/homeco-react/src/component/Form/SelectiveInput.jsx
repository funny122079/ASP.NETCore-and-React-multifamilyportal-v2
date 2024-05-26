import ProtoTypes from "prop-types";
import { useState } from "react";
import Select from "react-dropdown-select";

function SelectiveInput({ title, options, classes }) {
  const [value, setValue] = useState(options[0]);
  return (
    <div className={`property-sidebar__single ${classes}`}>
      <div className="property-sidebar__filters">
        <h4 className="property-sidebar__title">{title}</h4>
        <div className="form-group">
          <Select
            values={[value]}
            options={options}
            labelField="name"
            valueField="id"
            onChange={(values) => setValue(values)}
            searchBy="name"
            searchable={true}
            handle={true}
            placeholder="Select"
            closeOnSelect={true}
            dropdownPosition="auto"
            style={{
              outline: "none",
              padding: "10px",
              color: "#828ea3",
              cursor: "pointer",
            }}
          />
        </div>
      </div>
    </div>
  );
}

SelectiveInput.propTypes = {
  title: ProtoTypes.string.isRequired,
  options: ProtoTypes.array.isRequired,
  classes: ProtoTypes.string,
};

export default SelectiveInput;
