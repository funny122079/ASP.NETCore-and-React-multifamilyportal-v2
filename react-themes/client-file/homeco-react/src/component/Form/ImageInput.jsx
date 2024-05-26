import ProtoTypes from "prop-types";
import UploadedImageCard from "../Cards/UploadedImageCard";

function ImageInput({ uploadedImg, handleDelete, handleImage }) {
  return (
    <div className="homec-submit-form mg-top-40">
      <h4 className="homec-submit-form__title">Property Image</h4>
      <div className="homec-submit-form__inner">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12">
            <div className="mg-top-20">
              <div className="homec-submit-form__upload mg-btm-10">
                <p className="homec-img-video-label">
                  Slider Image* <span>(Max. limit 10 & Max. Size 10MB)</span>
                </p>
                <div className="homec-submit-form__upload-btn">
                  <button className="homec-btn homec-btn--upload">
                    <span>Upload New Image</span>
                  </button>
                </div>
              </div>
              {/* Image Input   */}
              <div className="homec-upload-images">
                <div className="row">
                  {uploadedImg?.map((image, index) => (
                    <UploadedImageCard
                      key={index + "img"}
                      img={image}
                      handleDelete={handleDelete}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <div className="mg-top-20">
              <p className="homec-img-video-label mg-btm-10">
                Thumbnail Image* <span>(Max. limit 10 & Max. Size 10MB)</span>
              </p>
              {/* Image Input   */}
              <div
                className="homec-image-video-upload homec-border homec-bg-cover  mg-top-20"
                style={{
                  backgroundImage: "url('https://placehold.co/540x205')",
                }}
              >
                <div className="homec-overlay homec-overlay--img-video"></div>
                <input
                  type="file"
                  className="btn-check"
                  name="options"
                  id="input-video1"
                  onChange={(e) => handleImage(e)}
                />
                <label
                  className="homec-image-video-upload__label"
                  htmlFor="input-video1"
                >
                  <img src="img/upload-file-2.svg" alt="#" />
                  <span className="homec-image-video-upload__title homec-image-video-upload__title--v2">
                    Drag & Drop or{" "}
                    <span className="homec-primary-color">Choose File</span> to
                    upload{" "}
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ImageInput.propTypes = {
  uploadedImg: ProtoTypes.array.isRequired,
  handleDelete: ProtoTypes.func.isRequired,
  handleImage: ProtoTypes.func.isRequired,
};

export default ImageInput;
