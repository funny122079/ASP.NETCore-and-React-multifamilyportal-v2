import ProtoTypes from "prop-types";
import { Link } from "react-router-dom";

function NavBtn({ link, text, children }) {
  return (
    <>
      {children ? (
        <li className="menu-item-has-children">
          <Link to={link}>{text}</Link>
          <ul className="sub-menu">{children}</ul>
        </li>
      ) : (
        <li>
          <Link to={link}>{text}</Link>
        </li>
      )}
    </>
  );
}

NavBtn.propTypes = {
  link: ProtoTypes.string.isRequired,
  text: ProtoTypes.string.isRequired,
  children: ProtoTypes.node,
};

export default NavBtn;
