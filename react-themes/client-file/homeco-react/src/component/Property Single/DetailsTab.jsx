import ProtoTypes from "prop-types";

function DetailsTab({ text, isActive, children }) {
  return (
    <div
      className={`tab-pane fade ${isActive && "show active"}`}
      id="homec-pd-tab1"
      role="tabpanel"
    >
      <div className="homec-pdetails-tab__inner">
        {text?.map((item, index) => (
          <p key={index + "Fea"}>{item}</p>
        ))}
        {/* Homec Features  */}
        {children}
      </div>
    </div>
  );
}

DetailsTab.propTypes = {
  text: ProtoTypes.array.isRequired,
  children: ProtoTypes.node.isRequired,
  isActive: ProtoTypes.bool.isRequired,
};

export default DetailsTab;
