import { useState } from "react";
import PropertyTextInput from "./PropertyTextInput";
import PropertyTextAreaV2 from "./PropertyTextAreaV2";

function PersonalInfo() {
  const [input, setInput] = useState({
    image: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    emailAddress: "",
    location: "",
    aboutText: "",
    facebook: "",
    twitter: "",
    instagram: "",
    linkedin: "",
  });
  const handleChange = (e) => {
    setInput({ ...input, [e?.target?.name]: e?.target?.value });
  };
  return (
    <form className="ecom-wc__form-main p-0" action="index.html" method="post">
      <div className="row">
        <div className="col-12">
          <div className="homec-profile__edit mg-top-20">
            <img src="https://placehold.co/90x90" alt="#" />
            <label htmlFor="file-input">
              <span className="homec-pimg">
                <svg
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.5147 11.5C17.7284 12.7137 18.9234 13.9087 20.1296 15.115C19.9798 15.2611 19.8187 15.4109 19.6651 15.5683C17.4699 17.7635 15.271 19.9587 13.0758 22.1539C12.9334 22.2962 12.7948 22.4386 12.6524 22.5735C12.6187 22.6034 12.5663 22.6296 12.5213 22.6296C11.3788 22.6334 10.2362 22.6297 9.09365 22.6334C9.01498 22.6334 9 22.6034 9 22.536C9 21.4009 9 20.2621 9.00375 19.1271C9.00375 19.0746 9.02997 19.0109 9.06368 18.9772C10.4123 17.6249 11.7609 16.2763 13.1095 14.9277C14.2295 13.8076 15.3459 12.6913 16.466 11.5712C16.4884 11.5487 16.4997 11.5187 16.5147 11.5Z"
                    fill="white"
                  ></path>
                  <path
                    d="M20.9499 14.2904C19.7436 13.0842 18.5449 11.8854 17.3499 10.6904C17.5634 10.4694 17.7844 10.2446 18.0054 10.0199C18.2639 9.76139 18.5261 9.50291 18.7884 9.24443C19.118 8.91852 19.5713 8.91852 19.8972 9.24443C20.7251 10.0611 21.5492 10.8815 22.3771 11.6981C22.6993 12.0165 22.7105 12.4698 22.3996 12.792C21.9238 13.2865 21.4443 13.7772 20.9686 14.2717C20.9648 14.2792 20.9536 14.2867 20.9499 14.2904Z"
                    fill="white"
                  ></path>
                </svg>
              </span>
            </label>
            <input
              id="file-input"
              type="file"
              name="image"
              value={input.image}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
        </div>
        <PropertyTextInput
          size="col-lg-6 col-md-6"
          title="First Name*"
          name="firstName"
          value={input.firstName}
          handleChange={(e) => handleChange(e)}
          placeholder="Demo Name"
        />
        <PropertyTextInput
          size="col-lg-6 col-md-6"
          title="Last Name*"
          name="lastName"
          value={input.lastName}
          handleChange={(e) => handleChange(e)}
          placeholder="Demo Name"
        />
        <PropertyTextInput
          title="Phone Number*"
          name="phoneNumber"
          value={input.phoneNumber}
          handleChange={(e) => handleChange(e)}
          placeholder="Phone Number"
        />
        <PropertyTextInput
          title="Email Address*"
          name="emailAddress"
          value={input.emailAddress}
          handleChange={(e) => handleChange(e)}
          placeholder="Email Address"
        />
        <PropertyTextInput
          title="Location*"
          name="location"
          value={input.location}
          handleChange={(e) => handleChange(e)}
          placeholder="Your Location"
        />
        <PropertyTextAreaV2
          title="About Text*"
          value={input.aboutText}
          handleChange={handleChange}
          name="aboutText"
          placeholder="Type here"
          sizeFull={true}
        />
        <h4 className="homec-modal-form__middle">Social Link</h4>
        <div className="row">
          <PropertyTextInput
            size="col-lg-6 col-md-6"
            title="Facebook*"
            name="facebook"
            value={input.facebook}
            handleChange={(e) => handleChange(e)}
            placeholder="Facebook Link"
          />
          <PropertyTextInput
            size="col-lg-6 col-md-6"
            title="Twitter*"
            name="twitter"
            value={input.twitter}
            handleChange={(e) => handleChange(e)}
            placeholder="Twitter Link"
          />
          <PropertyTextInput
            size="col-lg-6 col-md-6"
            title="Instagram*"
            name="instagram"
            value={input.instagram}
            handleChange={(e) => handleChange(e)}
            placeholder="Instagram Link"
          />
          <PropertyTextInput
            size="col-lg-6 col-md-6"
            title="Linkedin*"
            name="linkedin"
            value={input.linkedin}
            handleChange={(e) => handleChange(e)}
            placeholder="Linkedin Link"
          />
        </div>
      </div>
      {/* Form Group  */}
      <div className="form-group form-mg-top25">
        <div className="ecom-wc__button ecom-wc__button--bottom">
          <button className="homec-btn homec-btn__second" type="submit">
            <span>Update Profile</span>
          </button>
        </div>
      </div>
    </form>
  );
}

export default PersonalInfo;
