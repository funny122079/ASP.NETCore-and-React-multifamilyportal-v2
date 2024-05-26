import { useState } from "react";
import ProtoTypes from "prop-types";
import { Link } from "react-router-dom";

function MobileMenu({ handleSidebar, show }) {
  const [activeSubmenu, setActiveSubmenu] = useState();
  const handleActive = (e) => {
    if (activeSubmenu === e.target.name) {
      setActiveSubmenu("");
    } else {
      setActiveSubmenu(e.target.name);
    }
  };
  return (
    <div
      className={`modal offcanvas-modal fade ${show && "show"}`}
      id="offcanvas-modal"
      style={{ display: "block", zIndex: show ? "" : "-1" }}
      aria-modal={true}
      role="dialog"
      onClick={(e) => e.target.role === "dialog" && handleSidebar()}
    >
      <div className="modal-dialog offcanvas-dialog">
        <div className="modal-content">
          <div className="modal-header offcanvas-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={handleSidebar}
            ></button>
          </div>
          {/* <!-- offcanvas-logo-start --> */}
          <div className="offcanvas-logo">
            <div className="homec-header__logo">
              <Link to="/">
                <img src="img/logo.png" alt="#" />
              </Link>
            </div>
          </div>
          {/* <!-- offcanvas-logo-end --> */}
          {/* <!-- offcanvas-menu start --> */}
          <nav id="offcanvas-menu" className="offcanvas-menu">
            {/* <!-- Main Menu --> */}
            <ul className="nav-menu menu navigation list-none">
              <li
                className={`menu-item-has-children ${
                  activeSubmenu === "home" && "active"
                }`}
              >
                <Link href="#" name={"home"} onClick={(e) => handleActive(e)}>
                  Home
                </Link>
                <ul className="sub-menu">
                  <li>
                    <Link to="/">Homepage 01</Link>
                  </li>
                  <li>
                    <Link to="/home2">Homepage 02</Link>
                  </li>
                  <li>
                    <Link to="/home3">Homepage 03</Link>
                  </li>
                </ul>
              </li>
              <li
                className={`menu-item-has-children ${
                  activeSubmenu === "properties" && "active"
                }`}
              >
                <Link
                  to="#"
                  name={"properties"}
                  onClick={(e) => handleActive(e)}
                >
                  Properties
                </Link>
                <ul className="sub-menu">
                  <li>
                    <Link to="/property">Properties</Link>
                  </li>
                  <li>
                    <Link to="/property-single">Property Single</Link>
                  </li>
                  <li>
                    <Link to="/add-property">Add Property</Link>
                  </li>
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/submit-property">Submit Property</Link>
                  </li>
                  <li>
                    <Link to="/edit-property">Edit Property</Link>
                  </li>
                </ul>
              </li>
              <li
                className={`menu-item-has-children ${
                  activeSubmenu === "pages" && "active"
                }`}
              >
                <Link to="#" name={"pages"} onClick={(e) => handleActive(e)}>
                  Pages
                </Link>
                <ul className="sub-menu">
                  <li>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    <Link to="/pricing">Pricing</Link>
                  </li>
                  <li>
                    <Link to="/payment-method">Payment Method</Link>
                  </li>
                  <li>
                    <Link to="/faq">Faq's</Link>
                  </li>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                  <li>
                    <Link to="/signup">Signup</Link>
                  </li>
                  <li>
                    <Link to="/404">Error Page</Link>
                  </li>
                </ul>
              </li>
              <li
                className={`menu-item-has-children ${
                  activeSubmenu === "agents" && "active"
                }`}
              >
                <Link to="#" name={"agents"} onClick={(e) => handleActive(e)}>
                  Agents
                </Link>
                <ul className="sub-menu">
                  <li>
                    <Link to="/our-agent">Our Agent</Link>
                  </li>
                  <li>
                    <Link to="/agent-detail">Agent Details</Link>
                  </li>
                </ul>
              </li>
              <li
                className={`menu-item-has-children ${
                  activeSubmenu === "news" && "active"
                }`}
              >
                <Link to="#" name={"news"} onClick={(e) => handleActive(e)}>
                  News
                </Link>
                <ul className="/sub-menu">
                  <li>
                    <Link to="/blog">News</Link>
                  </li>
                  <li>
                    <Link to="/blog-single">News Single</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
            {/* <!-- End Main Menu --> */}
          </nav>
          {/* <!-- offcanvas-menu end --> */}
        </div>
      </div>
    </div>
  );
}

MobileMenu.propTypes = {
  handleSidebar: ProtoTypes.func.isRequired,
  show: ProtoTypes.bool.isRequired,
};

export default MobileMenu;
