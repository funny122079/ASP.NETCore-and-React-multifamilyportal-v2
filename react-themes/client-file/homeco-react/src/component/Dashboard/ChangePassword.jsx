import { useState } from "react";

function ChangePassword() {
  const [input, setInput] = useState({
    password: "",
    confirmPassword: "",
  });
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  return (
    <div className="col-lg-9 col-md-8 col-12 mg-top-30">
      <div className="homec-dashboard__inner homec-border">
        <div className="row">
          <div className="col-lg-7 col-12">
            <h3 className="ecom-wc__form-title homec-dashboard__password">
              Update your Password{" "}
              <span className="pd-btm-30">
                Your email address will not be published. Required fields are
                marked *
              </span>
            </h3>
            {/* Sign in Form */}
            <form
              className="ecom-wc__form-main p-0"
              action="index.html"
              method="post"
            >
              <div className="row">
                <div className="col-12">
                  <div className="form-group homec-form-input">
                    <label className="ecom-wc__form-label mg-btm-10">
                      Password*
                    </label>
                    <div className="form-group__input">
                      <input
                        className="ecom-wc__form-input"
                        placeholder="●●●●●●"
                        id="password-field"
                        type="password"
                        name="password"
                        maxLength="8"
                        required="required"
                        value={input.password}
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group homec-form-input">
                    <label className="ecom-wc__form-label mg-btm-10">
                      Confirm Password*
                    </label>
                    <div className="form-group__input">
                      <input
                        className="ecom-wc__form-input"
                        placeholder="●●●●●●"
                        id="confirm-password-field"
                        type="password"
                        name="confirmPassword"
                        maxLength="8"
                        required="required"
                        value={input.confirmPassword}
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* Form Group */}
              <div className="form-group form-mg-top25">
                <div className="ecom-wc__button ecom-wc__button--bottom">
                  <button className="homec-btn homec-btn__second" type="submit">
                    <span>Update Password</span>
                  </button>
                </div>
              </div>
            </form>
            {/* End Sign in Form */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
