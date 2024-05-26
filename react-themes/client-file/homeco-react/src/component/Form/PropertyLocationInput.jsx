import ProtoTypes from "prop-types";
import PropertyTextInput from "./PropertyTextInput";
import PropertyTextAreaV2 from "./PropertyTextAreaV2";
import { useState } from "react";
import Select from "react-dropdown-select";

function PropertyLocationInput({ location, handleLocation }) {
  const [value, setValue] = useState({
    id: 1,
    name: "Dhaka",
  });
  return (
    <div className="homec-submit-form mg-top-40">
      <h4 className="homec-submit-form__title">Property Location</h4>
      <div className="homec-submit-form__inner">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12">
            {/* Single Form Element   */}
            <div className="mg-top-20">
              <h4 className="homec-submit-form__heading">City*</h4>
              <div className="form-group homec-form-input">
                <Select
                  values={[value]}
                  options={[
                    {
                      id: 1,
                      name: "Dhaka",
                    },
                    {
                      id: 2,
                      name: "Chittagong",
                    },
                    {
                      id: 2,
                      name: "Khulna",
                    },
                  ]}
                  labelField="name"
                  valueField="id"
                  onChange={(values) => setValue(values)}
                  searchBy="name"
                  searchable={true}
                  handle={true}
                  placeholder="Select"
                  closeOnSelect={true}
                  dropdownPosition="auto"
                  className="homec-form-select homec-border"
                />
              </div>
            </div>
          </div>
          <PropertyTextInput
            size="col-lg-6 col-md-6"
            title="Total Unit*"
            name="address"
            value={location.address}
            handleChange={handleLocation}
            placeholder="10/13 Link Road, Badda Dhaka"
          />
          <PropertyTextAreaV2
            title="Address Details*"
            value={location.addressDetails}
            handleChange={handleLocation}
            name="addressDetails"
            placeHolder="10/13 Link Road, Badda Dhaka"
          />
          <PropertyTextAreaV2
            title="Google Map*"
            value={location.googleMap}
            handleChange={handleLocation}
            name="googleMap"
          />
        </div>
      </div>
    </div>
  );
}

PropertyLocationInput.propTypes = {
  location: ProtoTypes.object.isRequired,
  handleLocation: ProtoTypes.func.isRequired,
};

export default PropertyLocationInput;
