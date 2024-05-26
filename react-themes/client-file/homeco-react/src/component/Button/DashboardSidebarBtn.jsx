import ProtoTypes from "prop-types";

function DashboardSidebarBtn({ active, handleActive, title, children }) {
  return (
    <a
      className={`list-group-item  ${active === title && "active"}`}
      onClick={() => handleActive(title)}
    >
      <div className="homec-dashboard__list--icon">{children}</div>
      {title}
    </a>
  );
}

DashboardSidebarBtn.propTypes = {
  active: ProtoTypes.string.isRequired,
  handleActive: ProtoTypes.func.isRequired,
  title: ProtoTypes.string.isRequired,
  children: ProtoTypes.node.isRequired,
};

export default DashboardSidebarBtn;
