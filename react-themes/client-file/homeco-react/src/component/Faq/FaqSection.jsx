import { useState } from "react";
import According from "./According";

function FaqSection() {
  const [collapse, setCollapse] = useState(1);
  const handleCollapse = (id) => {
    setCollapse(id === collapse ? false : id);
  };
  return (
    <section
      className="homec-bg-cover pd-top-90 pd-btm-120"
      style={{
        backgroundImage: "url('img/bg-shape-five.svg')",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <div className="container homec-container-medium">
        <div className="row homec-container-medium__row align-items-center">
          <div
            className="col-lg-6 col-md-6 col-12 mg-top-30"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="homec-section__head">
              <div className="homec-section__shape">
                <span
                  className="homec-section__badge homec-section__badge--shape homec-section__badge--shape--v2"
                  style={{ backgroundImage: "url('img/shape-3.svg')" }}
                >
                  FAQ
                </span>
              </div>
              <h2 className="homec-section__title">
                If you want to know Frequently Ask Questions
              </h2>
            </div>
            <div
              className="homec-accordion accordion accordion-flush"
              id="homec-accordion"
            >
              <According
                heading="What are we for it Company?"
                desc=" From the first year of primary school, we provide
                    interactive and one-to-one online trainings for our children
                    to enjoy the first year of primary school, we provide
                    interactive and one-to-one online trainings."
                collapse={collapse}
                handleCollapse={handleCollapse}
                id={1}
              />
              <According
                heading="What happens if you delete social media apps?"
                desc=" From the first year of primary school, we provide
                    interactive and one-to-one online trainings for our children
                    to enjoy the first year of primary school, we provide
                    interactive and one-to-one online trainings."
                collapse={collapse}
                handleCollapse={handleCollapse}
                id={2}
              />

              <According
                heading="What is social media in simple words?"
                desc="From the first year of primary school, we provide
                    interactive and one-to-one online trainings for our children
                    to enjoy the first year of primary school, we provide
                    interactive and one-to-one online trainings."
                collapse={collapse}
                handleCollapse={handleCollapse}
                id={3}
              />
              <According
                serial={4}
                heading="What is social media in simple words?"
                desc="From the first year of primary school, we provide
                    interactive and one-to-one online trainings for our children
                    to enjoy the first year of primary school, we provide
                    interactive and one-to-one online trainings."
                collapse={collapse}
                handleCollapse={handleCollapse}
                id={4}
              />
            </div>
          </div>
          <div
            className="col-lg-6 col-md-6 col-12 mg-top-30"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            {/* Support Img   */}
            <div className="homec-support-img">
              <img src="https://placehold.co/615x665" alt="#" />
              <div className="homec-support-img__content">
                <img src="img/support-icon-white.svg" alt="#" />
                <h4 className="homec-support-img__title">
                  24/7 Support <span>Have any Questions Contact Us?</span>
                </h4>
              </div>
            </div>
            {/* End Support Img  */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
