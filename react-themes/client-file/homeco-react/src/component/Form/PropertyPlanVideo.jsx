import ProtoTypes from "prop-types";

function PropertyPlanVideo({
  id,
  img,
  YTVideoId,
  desc,
  handleChange,
  handleDelete,
}) {
  return (
    <div className="row">
      <div className="col-lg-6 col-md-6 col-12">
        <div className="mg-top-30">
          <p className="homec-img-video-label mg-btm-10">
            Image* <span>(Max. limit 10 & Max. Size 10MB)</span>
          </p>
          {/* Image Input  */}
          <div className="homec-border">
            <img src={img} />
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-md-6 col-12">
        {/* Single Form Element */}
        <div className="mg-top-30">
          <h4 className="homec-submit-form__heading">Youtube Video id* </h4>
          <div className="form-group homec-form-input">
            <input
              type="text"
              placeholder="Title"
              value={YTVideoId}
              required
              onChange={(e) =>
                handleChange({
                  id,
                  keyType: "propertyPlan",
                  inputType: "YTVideoId",
                  value: e.target.value,
                })
              }
              name="YTVideoId"
            />
          </div>
        </div>
        {/* Single Form Element */}
        <div className="mg-top-30">
          <h4 className="homec-submit-form__heading">Video Description*</h4>
          <div className="form-group homec-form-input homec-form-add">
            <textarea
              placeholder="Description"
              required
              name="desc"
              onChange={(e) =>
                handleChange({
                  id,
                  keyType: "propertyPlan",
                  inputType: "desc",
                  value: e.target.value,
                })
              }
              value={desc}
            ></textarea>
            <button
              onClick={() => handleDelete("delete", id, "propertyPlan")}
              className="homec-form-add__button homec-form-add__button--delete"
            >
              <img src="img/delete-icon.svg" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

PropertyPlanVideo.propTypes = {
  img: ProtoTypes.string.isRequired,
  id: ProtoTypes.number.isRequired,
  YTVideoId: ProtoTypes.string,
  desc: ProtoTypes.string.isRequired,
  handleChange: ProtoTypes.func.isRequired,
  handleDelete: ProtoTypes.func.isRequired,
};

export default PropertyPlanVideo;
