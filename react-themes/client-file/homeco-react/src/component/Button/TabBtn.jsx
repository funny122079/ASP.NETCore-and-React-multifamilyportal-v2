import ProtoTypes from "prop-types";

function TabBtn({ link, text, active, handleActive }) {
  return (
    <a
      className={`list-group-item ${active === text && "active"}`}
      data-bs-toggle="list"
      href={link}
      role="tab"
      onClick={() => handleActive(text)}
    >
      {text}
    </a>
  );
}

TabBtn.propTypes = {
  link: ProtoTypes.string.isRequired,
  text: ProtoTypes.string.isRequired,
  active: ProtoTypes.string.isRequired,
  handleActive: ProtoTypes.func.isRequired,
};

export default TabBtn;
