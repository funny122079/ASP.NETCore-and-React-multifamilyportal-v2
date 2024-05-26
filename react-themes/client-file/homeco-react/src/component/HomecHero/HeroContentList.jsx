import PropTypes from "prop-types";
function HeroContentList({ text }) {
  return (
    <li>
      <i className="fa-solid fa-check"></i>
      {text}
    </li>
  );
}

HeroContentList.propTypes = {
  text: PropTypes.string.isRequired,
};

export default HeroContentList;
