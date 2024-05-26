import ProtoTypes from "prop-types";

function SingleContact({ title, text, children }) {
  return (
    <div className="homec-contact__single">
      <div className="homec-contact__icon">{children}</div>
      <div className="homec-contact__content">
        <p className="homec-contact__label">{title}</p>
        <h3 className="homec-contact__title">{text}</h3>
      </div>
    </div>
  );
}

SingleContact.propTypes = {
  title: ProtoTypes.string.isRequired,
  text: ProtoTypes.string.isRequired,
  children: ProtoTypes.node.isRequired,
};

export default SingleContact;
