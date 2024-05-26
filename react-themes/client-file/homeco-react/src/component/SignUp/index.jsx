import { useEffect, useState } from "react";
import WelcomeCard from "../Cards/WelcomeCard";
import PropertyTextInput from "../Form/PropertyTextInput";
import Preloader from "../Loader";

function SignUp() {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  // Loading Handle
  const [isLoading, setisLoadingg] = useState(true);
  useEffect(() => {
    setisLoadingg(false);
  }, []);

  let component = undefined;
  if (isLoading) {
    component = <Preloader />;
  } else {
    component = (
      <section
        className="ecom-wc ecom-wc__full ecom-bg-cover"
        // style={{ backgroundImage: "url('img/credential-bg.svg')" }}
      >
        <div className="container-fluid p-0">
          <div className="row g-0">
            <div className="col-lg-6 col-12">
              <div className="ecom-wc__form">
                <div className="ecom-wc__form-inner">
                  <h3 className="ecom-wc__form-title ecom-wc__form-title__one">
                    Create Account
                    <span>
                      Your email address will not be published. Required fields
                      are marked *
                    </span>
                  </h3>
                  {/* Sign in Form  */}
                  <form
                    className="ecom-wc__form-main p-0  "
                    action="index.html"
                    method="post"
                  >
                    <div className="row">
                      <PropertyTextInput
                        size="col-lg-6 col-md-6"
                        title="First Name*"
                        name="firstName"
                        value={input.firstName}
                        handleChange={handleChange}
                        placeholder="Jhon"
                        margin="-10px"
                      />
                      <PropertyTextInput
                        size="col-lg-6 col-md-6"
                        title="Last Name*"
                        name="lastName"
                        value={input.lastName}
                        handleChange={handleChange}
                        placeholder="Doe"
                        margin="-10px"
                      />

                      <PropertyTextInput
                        size="col-lg-6 col-md-6"
                        title="Phone Number*"
                        name="phoneNumber"
                        value={input.phoneNumber}
                        handleChange={handleChange}
                        placeholder="+884401895493"
                        margin="-10px"
                      />
                      <PropertyTextInput
                        size="col-lg-6 col-md-6"
                        title="Email Address*"
                        name="email"
                        value={input.email}
                        handleChange={handleChange}
                        placeholder="demo3243@gmail.com"
                        margin="-10px"
                      />
                      <PropertyTextInput
                        size="col-lg-6 col-md-6"
                        title="Password*"
                        name="password"
                        value={input.password}
                        handleChange={handleChange}
                        placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                        type="password"
                        margin="-10px"
                      />
                      <PropertyTextInput
                        size="col-lg-6 col-md-6"
                        title="Confirm Password*"
                        name="confirmPassword"
                        value={input.confirmPassword}
                        handleChange={handleChange}
                        placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                        type="password"
                        margin="-10px"
                      />
                    </div>
                    <div className="form-group form-mg-top-30">
                      <div className="ecom-wc__button ecom-wc__button--bottom">
                        <button
                          className="homec-btn homec-btn__second"
                          type="submit"
                        >
                          <span>Login</span>
                        </button>
                        <button
                          className="homec-btn homec-btn__second homec-btn__social"
                          type="submit"
                        >
                          <span className="ntfmax-wc__btn-icon">
                            <img src="img/google.svg" alt="#" />
                          </span>
                          <span>Sign Up with Google</span>
                        </button>
                      </div>
                    </div>
                    {/* Form Group  */}
                    <div className="form-group mg-top-20">
                      <div className="ecom-wc__bottom">
                        <p className="ecom-wc__text">
                          Already have an account ?<a href="signup">Login</a>
                        </p>
                      </div>
                    </div>
                  </form>
                  {/* End Sign in Form  */}
                </div>
              </div>
            </div>
            <WelcomeCard
              languages={["English", "Bengali", "Frances"]}
              links={[
                { link: "#", name: "Terms & Condition" },
                { link: "#", name: "Privacy Policy" },
                { link: "#", name: "Help" },
              ]}
              image="https://placehold.co/600x600"
              brunches="120"
              builtHouse="150k"
            />
          </div>
        </div>
      </section>
    );
  }
  return component;
}

export default SignUp;
