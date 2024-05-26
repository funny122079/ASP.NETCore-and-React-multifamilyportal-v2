import ProtoTypes from "prop-types";

function FunFactList({ title }) {
  return (
    <li>
      <i className="fa-solid fa-check"></i>
      {title}
    </li>
  );
}

FunFactList.propTypes = {
  title: ProtoTypes.string.isRequired,
};

export default FunFactList;
