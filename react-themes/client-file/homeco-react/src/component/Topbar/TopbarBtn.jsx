import ProtoTypes from "prop-types";

function TopbarBtn({ link, img, text }) {
  return (
    <li>
      <a href={link}>
        <img src={img} alt="#" />
        <span>{text}</span>
      </a>
    </li>
  );
}

TopbarBtn.propTypes = {
  link: ProtoTypes.string.isRequired,
  img: ProtoTypes.string.isRequired,
  text: ProtoTypes.string.isRequired,
  color: ProtoTypes.string,
};

export default TopbarBtn;
