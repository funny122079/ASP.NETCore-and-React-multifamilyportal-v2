import ProtoTypes from "prop-types";

function FilterTabBtn({ link, text, isActive, handleFilter }) {
  return (
    <a
      className={`list-group-item ${isActive === text && "active"}`}
      data-bs-toggle="list"
      href={link}
      role="tab"
      onClick={() => handleFilter(text)}
    >
      {text}
    </a>
  );
}

FilterTabBtn.propTypes = {
  link: ProtoTypes.string.isRequired,
  text: ProtoTypes.string.isRequired,
  isActive: ProtoTypes.string.isRequired,
  handleFilter: ProtoTypes.func.isRequired,
};

export default FilterTabBtn;
