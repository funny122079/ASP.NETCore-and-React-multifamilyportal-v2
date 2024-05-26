import ProtoTypes from "prop-types";

function PricingCard({ features, title, price, period, isActive }) {
  return (
    <div
      className="col-lg-4 col-md-4 col-12 mg-top-30"
      data-aos="fade-up"
      data-aos-delay="400"
    >
      <div className={`homec-psingle ${isActive && "homec-psingle__active"}`}>
        <div className="homec-psingle__head">
          <h4 className="homec-psingle__title">{title}</h4>
          <div className="homec-psingle__amount">
            <span className="homec-psingle__currency">$</span>
            {price}
            <span>/{period}</span>
          </div>
        </div>
        <div className="homec-psingle__body">
          <ul className="homec-psingle__list">
            {features?.map((feature, index) => (
              <li key={feature.name + index}>
                <span
                  className={`homec-psingle__icon ${
                    feature.value ? "homec-check-color" : "homec-remove-color"
                  } `}
                >
                  <i
                    className={`fas ${
                      feature.value ? "fa-check" : "fa-remove"
                    } `}
                  ></i>
                </span>
                {feature.value && feature.value} {feature.name}
              </li>
            ))}
          </ul>
          <div className="homec-psingle__button">
            <a href="#" className="homec-btn homec-btn__thrid">
              <span>Apply for Plan Now</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

PricingCard.propTypes = {
  features: ProtoTypes.array.isRequired,
  title: ProtoTypes.string.isRequired,
  price: ProtoTypes.string.isRequired,
  period: ProtoTypes.string.isRequired,
  isActive: ProtoTypes.bool,
};

export default PricingCard;
