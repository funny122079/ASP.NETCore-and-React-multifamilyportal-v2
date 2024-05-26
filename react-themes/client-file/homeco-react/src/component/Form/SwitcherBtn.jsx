import ProtoTypes from "prop-types";

function SwitcherBtn({ title, name, isChecked, handleChange }) {
  return (
    <div className="homeco-switcher-group__item">
      <h4 className="homeco-switcher-group__title">{title}</h4>
      <div
        className="homeco-switcher-group__switch"
        onClick={() => handleChange(name, !isChecked)}
      >
        <div
          style={{
            width: "55px",
            height: "22px",
            backgroundColor: isChecked ? "#B8B3F7" : "#BFC5CF",
            borderRadius: "22px",
            position: "relative",
            transition: "all ease-in 0.4s",
          }}
        >
          <div
            style={{
              width: "28px",
              height: "28px",
              borderRadius: "50%",
              background: isChecked ? "#7166F0" : "#7E8BA0",
              position: "absolute",
              top: "-3px",
              transition: "0.4s",
              left: isChecked ? "26px" : "0px",
            }}
          ></div>
        </div>
        <p className="homeco-switcher-group__text">Enable / Disable</p>
      </div>
    </div>
  );
}

SwitcherBtn.propTypes = {
  title: ProtoTypes.string.isRequired,
  name: ProtoTypes.string.isRequired,
  isChecked: ProtoTypes.bool.isRequired,
  handleChange: ProtoTypes.func.isRequired,
};

export default SwitcherBtn;
