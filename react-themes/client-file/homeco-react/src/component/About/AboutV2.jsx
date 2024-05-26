import { Link } from "react-router-dom";

function AboutV2() {
  return (
    <section className="homec-about pd-top-100 pd-btm-130">
      <div className="homec-shape">
        <img
          className="homec-shape-single homec-shape-1"
          src="img/anim-shape-1.svg"
          alt="#"
        />
        <img
          className="homec-shape-single homec-shape-2"
          src="img/anim-shape-2.svg"
          alt="#"
        />
        <img
          className="homec-shape-single homec-shape-3"
          src="img/anim-shape-3.svg"
          alt="#"
        />
      </div>
      <div className="container homec-container-medium">
        <div className="row  homec-container-medium__row align-items-center">
          <div
            className="col-lg-7 col-12 homec-about__column--one mg-top-30"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            {/* Homec Image Group  */}
            <div className="homec-image-group">
              <div className="homec-image-group__single">
                <img src="https://placehold.co/325x630" alt="#" />
                <img src="https://placehold.co/325x630" alt="#" />
              </div>
              <div className="homec-image-group__content">
                <h4 className="homec-image-group__title">70%</h4>
                <p className="homec-image-group__text">
                  Over 70% of Avenue clients said they earned extra and
                  commission in last year
                </p>
              </div>
            </div>
            {/*  End Homec Image Group */}
          </div>
          <div className="col-lg-5 col-12 homec-about__column--two mg-top-30">
            <div className="homec-about-content">
              {/* Section Title  */}
              <div className="homec-section__head">
                <div className="homec-section__shape">
                  <span
                    className="homec-section__badge homec-section__badge--shape"
                    style={{ backgroundImage: "url('img/section-shape.svg')" }}
                    data-aos="fade-down"
                    data-aos-delay="300"
                  >
                    About Homeco
                  </span>
                </div>
                <h2
                  className="homec-section__title"
                  data-aos="fade-in"
                  data-aos-delay="400"
                >
                  Have done some Coo Stuff with common users
                </h2>
              </div>
              <div
                className="homec-about-content__inner mg-top-20"
                data-aos="fade-in"
                data-aos-delay="500"
              >
                <p className="homec-about-content__text">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable.
                </p>
                <div className="homec-focus-content homec-border mg-top-20">
                  <p>
                    Over 20 years’ experience providing top quality house
                    Booking in to the rant and sell for your Amazing Dream &
                    Make you Happy
                  </p>
                </div>
                {/* Homec List  */}
                <ul className="homec-iconic-list list-none mg-top-30">
                  <li>
                    <i className="fa-solid fa-check"></i>Suspe ndisse suscipit
                    sagittis leo.
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>Entum estibulum
                    dignissim as posuere.
                  </li>
                </ul>
                {/* Homec Button */}
                <div className="mg-top-40">
                  <Link to="/add-property" className="homec-btn">
                    <span>Add Property</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutV2;
