import ProtoTypes from "prop-types";

function ListBtn({ name, handleClick, isActive, children }) {
  return (
    <a
      className={`list-group-item ${isActive === name && "active"}`}
      data-bs-toggle="list"
      href="#homec-grid"
      role="tab"
      name={name}
      onClick={() => {
        handleClick(name);
      }}
    >
      {children}
    </a>
  );
}

ListBtn.propTypes = {
  name: ProtoTypes.string.isRequired,
  handleClick: ProtoTypes.func.isRequired,
  isActive: ProtoTypes.string.isRequired,
  children: ProtoTypes.node.isRequired,
};

export default ListBtn;
