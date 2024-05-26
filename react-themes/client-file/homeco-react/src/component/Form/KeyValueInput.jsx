import ProtoTypes from "prop-types";
import KeyValueInputField from "./KeyValueInputField";

function KeyValueInput({
  info,
  handleAddOrDelete,
  handleChange,
  title,
  filedTitle,
  filedTitleTwo,
  placeholderOne,
  placeholderTwo,
  options,
  keyType,
}) {
  return (
    <div className="homec-submit-form mg-top-40">
      <h4 className="homec-submit-form__title">{title}</h4>
      <div className="homec-submit-form__inner">
        {typeof info === "object" &&
          info?.map((item, index) => (
            <KeyValueInputField
              key={item.id}
              options={options ? options : false}
              title={filedTitle}
              titleTwo={filedTitleTwo}
              handleKeyValue={handleChange}
              value={item}
              placeholderOne={placeholderOne}
              placeholderTwo={placeholderTwo}
              handleAddOrDelete={handleAddOrDelete}
              btnType={index === 0 ? "add" : "delete"}
              keyType={keyType}
            />
          ))}
      </div>
    </div>
  );
}

KeyValueInput.propTypes = {
  info: ProtoTypes.array.isRequired,
  handleAddOrDelete: ProtoTypes.func.isRequired,
  handleChange: ProtoTypes.func.isRequired,
  title: ProtoTypes.string.isRequired,
  filedTitle: ProtoTypes.string.isRequired,
  filedTitleTwo: ProtoTypes.string.isRequired,
  placeholderOne: ProtoTypes.string,
  placeholderTwo: ProtoTypes.string,
  keyType: ProtoTypes.string.isRequired,
  options: ProtoTypes.array.isRequired,
};

export default KeyValueInput;
