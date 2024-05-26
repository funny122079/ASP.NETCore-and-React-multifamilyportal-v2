import ProtoTypes from "prop-types";
import { Link } from "react-router-dom";

function FooterList({ link, title }) {
  return (
    <li>
      <Link to={link}>
        <i className="fa-solid fa-minus"></i>
        {title}
      </Link>
    </li>
  );
}

FooterList.propTypes = {
  link: ProtoTypes.string.isRequired,
  title: ProtoTypes.string.isRequired,
};

export default FooterList;
