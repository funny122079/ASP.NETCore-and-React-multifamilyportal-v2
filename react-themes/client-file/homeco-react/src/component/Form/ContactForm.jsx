import { useState } from "react";

function ContactForm() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  return (
    <form action="#" className="homec-property-ag__form">
      <div className="form-group">
        <input
          type="text"
          name="name"
          placeholder="Abdullah Mamun"
          value={input.name}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          name="fullname"
          placeholder="Your email"
          value={input.email}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="phoneNumber"
          placeholder="Your Phone"
          value={input.phoneNumber}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={input.subject}
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
      >
        <span>Send Message Now</span>
      </button>
    </form>
  );
}

export default ContactForm;
