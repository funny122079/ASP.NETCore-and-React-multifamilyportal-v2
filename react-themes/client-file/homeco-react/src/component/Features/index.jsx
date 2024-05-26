import FeaturesCardV2 from "../Cards/FeaturesCardV2";
import Title from "../Title";

function Features() {
  return (
    <section className="homec-bg-primary-color pd-top-110 pd-btm-110">
      <div
        className="homec-bg homec-bg__opacity"
        style={{ backgroundImage: "url(img/features-list-bg.svg)" }}
      ></div>
      <div className="container">
        <div className="row">
          <Title
            firstText="4 step to go"
            secondText=" Why Choose us"
            marginSize="40"
            styleFirst={{ color: "#ffff" }}
            styleSecond={{ color: "#ffff" }}
          />
        </div>
        <div className="row">
          <div className="col-12">
            <div className="homec-features-list">
              {/* Features Single */}
              <FeaturesCardV2
                icon="img/hand-icon.svg"
                serial="01"
                title="Trusted"
                text="believe in our service & Care"
              />
              <FeaturesCardV2
                icon="img/support-icon.svg"
                serial="02"
                title="24/7 Support"
                text="believe in our service & Care"
              />
              <FeaturesCardV2
                icon="img/finance-icon.svg"
                serial="03"
                title="Financing Easy"
                text="believe in our service & Care"
              />
              <FeaturesCardV2
                icon="img/wide-house-icon.svg"
                serial="04"
                title="Wide Range House"
                text="believe in our service & Care"
              />
              {/* End Features Single */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
