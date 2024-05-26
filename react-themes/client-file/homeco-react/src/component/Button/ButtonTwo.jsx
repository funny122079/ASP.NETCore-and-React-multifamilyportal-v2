import ProtoTypes from "prop-types";
function ButtonTwo({ link, text }) {
  return (
    <div
      className="homec-section__btn mg-top-30"
      data-aos="fade-right"
      data-aos-delay="500"
    >
      <a href={link} className="homec-btn homec-btn__second">
        <span>{text}</span>
      </a>
    </div>
  );
}

ButtonTwo.propTypes = {
  link: ProtoTypes.string.isRequired,
  text: ProtoTypes.string.isRequired,
};

export default ButtonTwo;
