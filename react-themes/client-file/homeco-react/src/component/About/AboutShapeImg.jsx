import ProtoTypes from "prop-types";
function AboutShapeImg({ img, design }) {
  return (
    <div className={`homec-shape-single ${design}`}>
      <img src={img} alt="#" />
    </div>
  );
}

AboutShapeImg.propTypes = {
  img: ProtoTypes.string.isRequired,
  design: ProtoTypes.string.isRequired,
};

export default AboutShapeImg;
