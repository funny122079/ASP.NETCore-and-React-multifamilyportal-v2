import ProtoTypes from "prop-types";

function PropertyVideoInput({ handleVideoInput, video }) {
  return (
    <div className="homec-submit-form mg-top-40">
      <h4 className="homec-submit-form__title">Property Video</h4>
      <div className="homec-submit-form__inner">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12">
            <div className="mg-top-20">
              <p className="homec-img-video-label mg-btm-10">
                Upload Video Image*{" "}
                <span>(Max. limit 10 & Max. Size 10MB)</span>
              </p>
              {/* Image Input */}
              <div
                className="homec-image-video-upload homec-border homec-bg-cover"
                style={{
                  backgroundImage: "url('https://placehold.co/540x205')",
                }}
              >
                <div className="homec-overlay homec-overlay--img-video"></div>
                <input
                  type="file"
                  className="btn-check"
                  id="input-video1"
                  name="video"
                  onChange={(e) => handleVideoInput(e)}
                  value={video?.video}
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
            {/* Single Form Element   */}
            <div className="mg-top-20">
              <h4 className="homec-submit-form__heading">Video Description*</h4>
              <div className="form-group homec-form-input">
                <textarea
                  name="description"
                  required
                  onChange={(e) => handleVideoInput(e)}
                  value={video.description}
                ></textarea>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <div className="mg-top-20">
              <p className="homec-img-video-label mg-btm-10">
                Upload Video* <span>(Max. limit 10 & Max. Size 10MB)</span>
              </p>
              {/* Image Input  */}
              <div
                className="homec-image-video-upload homec-border homec-bg-cover"
                style={{
                  backgroundImage: "url('https://placehold.co/540x205')",
                }}
              >
                <div className="homec-overlay homec-overlay--img-video"></div>
                <input
                  type="file"
                  className="btn-check"
                  name="videoId"
                  id="input-video1"
                  //   onChange={(e) => handleVideoInput(e)}
                />
                <label className="homec-image-video-upload__icon">
                  <a
                    href="#"
                    data-video-id="FzcfZyEhOoI"
                    className="js-video-btn "
                  >
                    <i className="fas fa-play"></i>
                  </a>
                </label>
              </div>
            </div>
            {/* Single Form Element  */}
            <div className="mg-top-20">
              <h4 className="homec-submit-form__heading">Youtube Video id* </h4>
              <div className="form-group homec-form-input">
                <input
                  type="text"
                  required
                  name="YTVideoId"
                  value={video.YTVideoId}
                  onChange={(e) => handleVideoInput(e)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

PropertyVideoInput.propTypes = {
  handleVideoInput: ProtoTypes.func.isRequired,
  video: ProtoTypes.object.isRequired,
};

export default PropertyVideoInput;
