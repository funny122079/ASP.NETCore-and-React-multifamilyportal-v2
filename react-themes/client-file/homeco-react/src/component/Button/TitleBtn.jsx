import ProtoTypes from "prop-types";
import { Link } from "react-router-dom";

function TitleBtn({ link, text, delay }) {
  return (
    <div
      className="col-12 d-flex justify-content-center mg-top-40"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      {/* Section TItle */}
      <Link to={link} className="homec-btn">
        <span>{text}</span>
      </Link>
    </div>
  );
}
TitleBtn.propTypes = {
  link: ProtoTypes.string.isRequired,
  text: ProtoTypes.string.isRequired,
  delay: ProtoTypes.string.isRequired,
};
export default TitleBtn;
