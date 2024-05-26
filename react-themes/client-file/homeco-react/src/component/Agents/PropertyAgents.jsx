import ProtoTypes from "prop-types";
import { useState } from "react";

function PropertyAgents({ image, name, position }) {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  return (
    <div className="col-lg-4 col-12">
      {/*  Property Agent Card  */}
      <div
        className="homec-property-ag homec-property-ag--side homec-bg-cover"
        style={{ backgroundImage: "url('img/property-ag-bg.svg')" }}
      >
        <h3 className="homec-property-ag__title">Property Agent</h3>
        {/*  Property Profile  */}
        <div className="homec-property-ag__author">
          <div className="homec-property-ag__author--img">
            <img src={image} alt="#" />
          </div>
          <div className="homec-property-ag__author--content">
            <h4 className="homec-property-ag__author--title">
              {name}
              <span>{position}</span>
            </h4>
          </div>
        </div>
        {/* End Property Profile  */}
        <form action="#" className="homec-property-ag__form">
          <div className="form-group">
            <input
              type="text"
              name="firstName"
              value={input.firstName}
              onChange={(e) => handleChange(e)}
              placeholder="Abdullah Al"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="lastName"
              value={input.lastName}
              onChange={(e) => handleChange(e)}
              placeholder="Mamun"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={input.email}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Description"
              required="required"
              value={input.message}
              onChange={(e) => handleChange(e)}
            ></textarea>
          </div>
          <button
            type="submit"
            className="homec-btn homec-btn__second homec-property-ag__button"
            style={{ zIndex: "0" }}
          >
            <span>Send Message Now</span>
          </button>
        </form>
      </div>
      {/* End Property Agent Card */}
    </div>
  );
}

PropertyAgents.propTypes = {
  image: ProtoTypes.string.isRequired,
  name: ProtoTypes.string.isRequired,
  position: ProtoTypes.string.isRequired,
};

export default PropertyAgents;
