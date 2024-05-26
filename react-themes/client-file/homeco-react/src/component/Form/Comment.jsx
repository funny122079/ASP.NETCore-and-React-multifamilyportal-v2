import { useState } from "react";
import PropertyTextInput from "./PropertyTextInput";
import PropertyTextAreaV2 from "./PropertyTextAreaV2";

function Comment() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <div className="row">
      <div className="col-12">
        <div className="homec-comments-form mg-top-60">
          <h2 className="homec-comments-form__title m-0">Leave a Comment</h2>
          <p className="homec-comments-form__text">
            Your email address will not be published. Required fields are marked
            *
          </p>
          <div className="row">
            <PropertyTextInput
              size="col-lg-6 col-md-6"
              name="name"
              value={input.name}
              handleChange={handleChange}
              placeholder="Abdullah Mamun"
            />
            <PropertyTextInput
              size="col-lg-6 col-md-6"
              name="email"
              value={input.email}
              handleChange={handleChange}
              placeholder="Your Email"
            />
            <PropertyTextAreaV2
              value={input.message}
              handleChange={handleChange}
              name="message"
              placeHolder="Message Here"
              sizeFull={true}
            />
            <div className="col-12 d-flex justify-content-end mg-top-20">
              <button type="submit" className="homec-btn homec-btn__second">
                <span>Submit Now</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comment;
