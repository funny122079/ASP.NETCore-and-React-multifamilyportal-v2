import ProtoTypes from "prop-types";
import { useState } from "react";
import Select from "react-dropdown-select";

function FromField({ name, options }) {
  const [value, setValue] = useState(options[0]);
  return (
    <div className="form-group">
      <span className="homec-filter-group__label">{name}</span>
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
        style={{ border: "none", outline: "none", zIndex: "999" }}
      />
    </div>
  );
}

FromField.propTypes = {
  name: ProtoTypes.string.isRequired,
  options: ProtoTypes.array.isRequired,
};

export default FromField;
