import ProtoTypes from "prop-types";

function ListCardBottom({ img, text }) {
  return (
    <li>
      <img src={img} alt="#" />
      {text}
    </li>
  );
}

ListCardBottom.propTypes = {
  img: ProtoTypes.string.isRequired,
  text: ProtoTypes.string.isRequired,
};

export default ListCardBottom;
