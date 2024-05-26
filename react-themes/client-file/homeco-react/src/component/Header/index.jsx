import { useEffect, useState } from "react";
import MobileMenu from "../Navbar/MobileMenu";
import Navbar from "../Navbar";
import Topbar from "../Topbar";
import ProtoTypes from "prop-types";

function Header({ v2 }) {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [openSidebar, setOpenSidebar] = useState(false);
  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };
  return (
    <>
      <MobileMenu handleSidebar={toggleSidebar} show={openSidebar} />
      <header
        id="active-sticky"
        className={`homec-header ${scrollPosition > 20 && "is-sticky"}`}
      >
        <Topbar v2={v2} />
        <Navbar handleSidebar={toggleSidebar} secondNav={v2} />
      </header>
    </>
  );
}

Header.propTypes = {
  v2: ProtoTypes.bool,
};

export default Header;
