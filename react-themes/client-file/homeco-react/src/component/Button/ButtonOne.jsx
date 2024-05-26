import ProtoTypes from "prop-types";

function ButtonOne({ title, link, children }) {
  return (
    <div
      className="homec-btn__main mg-top-40"
      data-aos="fade-up"
      data-aos-delay="500"
    >
      <a href={link} className="homec-btn">
        {children}
        <span>{title}</span>
      </a>
    </div>
  );
}

ButtonOne.propTypes = {
  title: ProtoTypes.string.isRequired,
  link: ProtoTypes.string,
  children: ProtoTypes.node,
};

export default ButtonOne;
