import ProtoTypes from "prop-types";
import { useState } from "react";
import Accorodion from "./Accorodion";

function FloorDetails({ isActive }) {
  const [activeAccrdion, setActiveAccrdion] = useState("1st");

  const handleActiveAccrdion = (title) => {
    setActiveAccrdion(title);
  };

  return (
    <div
      className={`tab-pane fade ${isActive && "show active"}`}
      id="homec-pd-tab2"
      role="tabpanel"
    >
      <div className="homec-pdetails-tab__inner">
        <div
          className="homec-accordion accordion accordion-flush"
          id="homec-accordion"
        >
          {/* <!-- Single Accordion --> */}
          <Accorodion
            name="1st"
            img="img/floor-plane-img.png"
            text="Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at Hampden-Sydney C"
            isActive={activeAccrdion}
            handleActive={handleActiveAccrdion}
          />
          <Accorodion
            name="2nd"
            img="img/floor-plane-img.png"
            text="Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard
                  McClintock, a Latin professor at Hampden-Sydney C"
            isActive={activeAccrdion}
            handleActive={handleActiveAccrdion}
          />
          <Accorodion
            name="3rd"
            img="img/floor-plane-img.png"
            text="Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature
                from 45 BC, making it over 2000 years old. Richard
                McClintock, a Latin professor at Hampden-Sydney C"
            isActive={activeAccrdion}
            handleActive={handleActiveAccrdion}
          />
          <Accorodion
            name="4th"
            img="img/floor-plane-img.png"
            text="Contrary to popular belief, Lorem Ipsum is not simply random
              text. It has roots in a piece of classical Latin literature
              from 45 BC, making it over 2000 years old. Richard
              McClintock, a Latin professor at Hampden-Sydney C"
            isActive={activeAccrdion}
            handleActive={handleActiveAccrdion}
          />
        </div>
      </div>
    </div>
  );
}

FloorDetails.propTypes = {
  isActive: ProtoTypes.bool.isRequired,
};

export default FloorDetails;
