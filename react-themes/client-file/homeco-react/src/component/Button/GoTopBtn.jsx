import { useEffect, useState } from "react";

function GoTopBtn() {
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

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <button
      onClick={goToTop}
      className={`scrollToTop ${scrollPosition > 0 && "show"}`}
      aria-label="Go Top"
    >
      Go Top<i className="fa-solid fa-angle-right"></i>
    </button>
  );
}

export default GoTopBtn;
