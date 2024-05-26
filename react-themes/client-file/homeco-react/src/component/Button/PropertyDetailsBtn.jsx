import ProtoTypes from "prop-types";

function PropertyDetailsBtn({ active, title, handleActive }) {
  return (
    <a
      className={`list-group-item ${active === title && "active"}`}
      data-bs-toggle="list"
      role="tab"
      onClick={() => handleActive(title)}
    >
      {title}
    </a>
  );
}

PropertyDetailsBtn.propTypes = {
  active: ProtoTypes.string.isRequired,
  title: ProtoTypes.string.isRequired,
  handleActive: ProtoTypes.func.isRequired,
};

export default PropertyDetailsBtn;
