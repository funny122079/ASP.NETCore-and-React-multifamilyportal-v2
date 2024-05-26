import ProtoTypes from "prop-types";

function UploadedImageCard({ img, handleDelete }) {
  return (
    <div className="col-lg-4 col-md-4 col-12 mg-top-10">
      <div className="homec-upload-images__single">
        <img src={img.img} />
        <button
          className="homec-upload-images__single--edit"
          onClick={() => handleDelete(img.id)}
        >
          <img src="img/delete-icon.svg" />
        </button>
      </div>
    </div>
  );
}

UploadedImageCard.propTypes = {
  img: ProtoTypes.object.isRequired,
  handleDelete: ProtoTypes.func.isRequired,
};

export default UploadedImageCard;
