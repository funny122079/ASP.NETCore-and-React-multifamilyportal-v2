import ProtoTypes from "prop-types";

function HistoryLinks({ link, text, isActive }) {
  return (
    <li className={isActive && "active"}>
      <a href={link}>{text}</a>
    </li>
  );
}

HistoryLinks.propTypes = {
  link: ProtoTypes.string.isRequired,
  text: ProtoTypes.string.isRequired,
  isActive: ProtoTypes.bool,
};

export default HistoryLinks;
