import ProtoTypes from "prop-types";
import Select from "react-dropdown-select";

function KeyValueInputField({
  options,
  title,
  titleTwo,
  handleKeyValue,
  value,
  placeholderOne,
  placeholderTwo,
  handleAddOrDelete,
  btnType,
  keyType,
}) {
  return (
    <div className="row">
      <div className="col-lg-6 col-md-6 col-12">
        {/* Single Form Element  */}
        <div className="mg-top-20">
          <h4 className="homec-submit-form__heading">{title}</h4>
          <div className="form-group homec-form-input">
            {options ? (
              <Select
                values={[value]}
                options={options}
                labelField="name"
                valueField="id"
                onChange={(values) =>
                  handleKeyValue({
                    id: value.id,
                    keyType,
                    inputType: "key",
                    value: values.name,
                  })
                }
                searchBy="name"
                searchable={true}
                handle={true}
                placeholder="Select"
                closeOnSelect={true}
                dropdownPosition="auto"
                className="homec-form-select homec-border"
              />
            ) : (
              <div className="col-lg-6 col-md-6 col-12">
                {/* Single Form Element */}
                <div className="mg-top-20">
                  <h4 className="homec-submit-form__heading">{title}</h4>
                  <div className="form-group homec-form-input">
                    <input
                      type="text"
                      value={value.key}
                      name="key"
                      placeholder={placeholderOne}
                      onChange={(e) => {
                        handleKeyValue({
                          id: value.id,
                          keyType,
                          inputType: "key",
                          value: e.target.value,
                        });
                      }}
                      required
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-md-6 col-12">
        {/* Single Form Element  */}
        <div className="mg-top-20">
          <h4 className="homec-submit-form__heading">{titleTwo}</h4>
          <div className="form-group homec-form-input homec-form-add">
            <input
              type="text"
              value={value.value}
              id={value.id}
              name="value"
              placeholder={placeholderTwo}
              required
              onChange={(e) =>
                handleKeyValue({
                  id: value.id,
                  keyType,
                  inputType: "value",
                  value: e.target.value,
                })
              }
            />
            <button
              className={`homec-form-add__button ${
                btnType !== "add" && "homec-form-add__button--delete"
              }`}
              onClick={() => handleAddOrDelete(btnType, value.id, keyType)}
            >
              <img
                src={
                  btnType === "add"
                    ? "img/plus-icon.svg"
                    : "img/delete-icon.svg"
                }
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

KeyValueInputField.propTypes = {
  options: ProtoTypes.array,
  title: ProtoTypes.string.isRequired,
  titleTwo: ProtoTypes.string.isRequired,
  handleKeyValue: ProtoTypes.func.isRequired,
  value: ProtoTypes.object.isRequired,
  placeholderOne: ProtoTypes.string,
  placeholderTwo: ProtoTypes.string,
  keyType: ProtoTypes.string.isRequired,
  handleAddOrDelete: ProtoTypes.func.isRequired,
  btnType: ProtoTypes.string.isRequired,
};

export default KeyValueInputField;
