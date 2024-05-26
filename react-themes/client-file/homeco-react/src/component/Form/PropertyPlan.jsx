import ProtoTypes from "prop-types";
import PropertyPlanVideo from "./PropertyPlanVideo";

function PropertyPlan({ info, handleChange, handleAddOrDelete }) {
  return (
    <div className="homec-submit-form mg-top-40">
      <h4 className="homec-submit-form__title">Property Plan</h4>
      <div className="homec-submit-form__inner">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12">
            <div className="mg-top-20">
              <p className="homec-img-video-label mg-btm-10">
                Thumbnail Image* <span>(Max. limit 10 & Max. Size 10MB)</span>
              </p>
              {/* Image Input   */}
              <div
                className="homec-image-video-upload homec-border homec-bg-cover"
                style={{
                  backgroundImage: "url('https://placehold.co/528x196')",
                }}
              >
                <div className="homec-overlay homec-overlay--img-video"></div>
                <input
                  type="file"
                  className="btn-check"
                  name="img"
                  value={info[0].img}
                  onChange={(e) => {
                    handleChange({
                      id: info[0].id,
                      keyType: "propertyPlan",
                      inputType: "thumbnail",
                      value: e.target.value,
                    });
                  }}
                  id="input-video1"
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
          <div className="col-lg-6 col-md-6 col-12">
            {/* Single Form Element   */}
            <div className="mg-top-30">
              <h4 className="homec-submit-form__heading">Youtube Video id* </h4>
              <div className="form-group homec-form-input">
                <input
                  type="text"
                  placeholder="Title"
                  required
                  name="YTVideoId"
                  value={info[0].YTVideoId}
                  onChange={(e) =>
                    handleChange({
                      id: info[0].id,
                      keyType: "propertyPlan",
                      inputType: "YTVideoId",
                      value: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            {/* Single Form Element  */}
            <div className="mg-top-30">
              <h4 className="homec-submit-form__heading">Video Description*</h4>
              <div className="form-group homec-form-input homec-form-add">
                <textarea
                  placeholder="Description"
                  required
                  name="desc"
                  onChange={(e) =>
                    handleChange({
                      id: info[0].id,
                      keyType: "propertyPlan",
                      inputType: "desc",
                      value: e.target.value,
                    })
                  }
                  value={info[0].desc}
                ></textarea>
                <button
                  className="homec-form-add__button"
                  onClick={() => handleAddOrDelete("add", "", "propertyPlan")}
                >
                  <img src="img/plus-icon.svg" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {info?.map(
          (item, index) =>
            index !== 0 && (
              <PropertyPlanVideo
                key={item.id}
                id={item.id}
                img={item.thumbnail}
                YTVideoId={item.YTVideoId}
                desc={item.desc}
                handleChange={handleChange}
                handleDelete={handleAddOrDelete}
              />
            )
        )}
      </div>
    </div>
  );
}

PropertyPlan.propTypes = {
  info: ProtoTypes.array.isRequired,
  handleChange: ProtoTypes.func.isRequired,
  handleAddOrDelete: ProtoTypes.func.isRequired,
};

export default PropertyPlan;
