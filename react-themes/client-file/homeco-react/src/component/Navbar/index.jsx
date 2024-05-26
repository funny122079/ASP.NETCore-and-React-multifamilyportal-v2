import ProtoTypes from "prop-types";
import NavBtn from "./NavBtn";
import { Link } from "react-router-dom";
function Navbar({ handleSidebar, secondNav }) {
  return (
    <div className={"homec-header__middle"}>
      <div className={"container"}>
        <div className="row align-items-center">
          <div className="col-12">
            <div
              className="homec-header__inside"
              style={{ background: secondNav && "transparent" }}
            >
              <div className="homec-header__group">
                <div className="homec-header__logo">
                  <Link to="/">
                    <img src="img/logo.png" alt="#" />
                  </Link>
                </div>
                <div className="homec-header__menu">
                  <div className="navbar">
                    <div className="nav-item">
                      {/* Main Menu  */}
                      <ul className="nav-menu menu navigation list-none">
                        <NavBtn text="Home" link="/">
                          <NavBtn link="/" text="Homepage 01" />
                          <NavBtn link="/home2" text="Homepage 02" />
                          <NavBtn link="/home3" text="Homepage 03" />
                        </NavBtn>
                        <NavBtn text="Properties" link="#">
                          <NavBtn link="/property" text="Properties" />
                          <NavBtn
                            link="/property-single"
                            text="Property Single"
                          />
                          <NavBtn link="/add-property" text="Add Property" />
                          <NavBtn link="/dashboard" text="Dashboard" />
                          <NavBtn
                            link="/submit-property"
                            text="Submit Property"
                          />
                          <NavBtn link="/edit-property" text="Edit Property" />
                        </NavBtn>
                        <NavBtn text="Pages" link="#">
                          <NavBtn link="/about" text="About Us" />
                          <NavBtn link="/pricing" text="Pricing" />
                          <NavBtn
                            link="/payment-method"
                            text="Payment Method"
                          />
                          <NavBtn link="/faq" text="Faq's" />
                          <NavBtn link="/login" text="Login" />
                          <NavBtn link="/signup" text="Sign Up" />
                          <NavBtn link="/404" text="Error Page" />
                        </NavBtn>
                        <NavBtn text="Agents" link="#">
                          <NavBtn link="/our-agent" text="Our Agent" />
                          <NavBtn link="/agent-detail" text="Agent Details" />
                        </NavBtn>
                        <NavBtn text="News" link="#">
                          <NavBtn link="/blog" text="News" />
                          <NavBtn link="/blog-single" text="News Single" />
                        </NavBtn>
                        <NavBtn link="/contact" text="Contact" />
                      </ul>
                      {/* End Main Menu */}
                    </div>
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="offcanvas-toggler"
                data-bs-toggle="modal"
                data-bs-target="#offcanvas-modal"
                onClick={handleSidebar}
                aria-label="toggle modal"
              >
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
              </button>
              <div className="homec-header__button">
                <Link to="/dashboard" className="homec-header__icon">
                  <svg
                    width="28"
                    height="32"
                    viewBox="0 0 28 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M13.9659 16.2014C18.423 16.2014 22.0666 12.5579 22.0666 8.1007C22.0666 3.64352 18.423 0 13.9659 0C9.50869 0 5.86523 3.64352 5.86523 8.1007C5.86523 12.5579 9.50876 16.2014 13.9659 16.2014Z" />
                    <path d="M27.8681 22.6752C27.6558 22.1446 27.3729 21.6494 27.0545 21.1895C25.4273 18.784 22.9158 17.1922 20.0858 16.8031C19.7321 16.7677 19.343 16.8384 19.06 17.0507C17.5743 18.1473 15.8056 18.7133 13.9661 18.7133C12.1266 18.7133 10.3579 18.1473 8.87219 17.0507C8.58917 16.8384 8.20005 16.7323 7.84634 16.8031C5.0164 17.1922 2.46948 18.784 0.877655 21.1895C0.55929 21.6494 0.276269 22.18 0.0640708 22.6752C-0.0420283 22.8875 -0.00668454 23.1351 0.0994145 23.3474C0.382436 23.8426 0.736144 24.3379 1.05451 24.7623C1.54973 25.4345 2.08036 26.0358 2.68174 26.6018C3.17696 27.097 3.74294 27.5569 4.30898 28.0167C7.10351 30.1039 10.4641 31.2004 13.9307 31.2004C17.3974 31.2004 20.758 30.1038 23.5525 28.0167C24.1185 27.5923 24.6845 27.097 25.1798 26.6018C25.7457 26.0358 26.3117 25.4344 26.807 24.7623C27.1607 24.3025 27.4791 23.8426 27.7621 23.3474C27.9389 23.1351 27.9742 22.8874 27.8681 22.6752Z" />
                  </svg>
                </Link>
                {secondNav ? (
                  <Link
                    to="/add-property"
                    className="homec-btn homec-btn__second"
                  >
                    <span>Add Property</span>
                  </Link>
                ) : (
                  <Link to="/add-property" className="homec-btn">
                    <span>Add Property</span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Navbar.propTypes = {
  handleSidebar: ProtoTypes.func.isRequired,
  secondNav: ProtoTypes.bool,
};

export default Navbar;
