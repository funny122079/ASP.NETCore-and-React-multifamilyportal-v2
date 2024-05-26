import ProtoTypes from "prop-types";
import FunfactCard from "../Cards/FunfactCard";
import ButtonOne from "../Button/ButtonOne";
import FunFactList from "./FunFactList";

function FunFacts({ v2 }) {
  return (
    <section
      className={`homec-funfacts pd-btm-100 ${v2 && "pd-top-120 mg-top-30"}`}
    >
      <img src="https://placehold.co/1920x430" alt="#" />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div
              className="homec-funfact homec-border"
              style={{ backgroundImage: "url(img/bg-pattern1.png)" }}
            >
              <div className="row align-items-center">
                <div className="col-lg-5 col-12">
                  <div className="homec-funfact__inner">
                    <div
                      className="homec-funfact__content"
                      data-aos="fade-up"
                      data-aos-delay="300"
                    >
                      <h2 className="homec-section__title mg-btm-10">
                        Fun Facts
                      </h2>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, majority have suffered.
                      </p>
                    </div>
                    {/* Homec List  */}
                    <ul
                      className="homec-iconic-list list-none mg-top-30"
                      data-aos="fade-up"
                      data-aos-delay="400"
                    >
                      <FunFactList title="Suspe ndisse suscipit sagittis leo." />
                      <FunFactList title="Entum estibulum dignissim as posuere." />
                      <FunFactList title="Entum estibulum dignissim as posuere." />
                    </ul>
                    {/* Homec Button  */}
                    <ButtonOne title="Need any House" />
                  </div>
                </div>
                <div className="col-lg-7 col-12">
                  <div className="homec-funfacts">
                    <div className="row">
                      <FunfactCard
                        img="img/funfact-icon1.svg"
                        count={435}
                        title="Happy Customer"
                        standard="K"
                      />
                      <FunfactCard
                        img="img/funfact-icon2.svg"
                        count={123}
                        title="Co-agent"
                        standard="K"
                      />
                      <FunfactCard
                        img="img/funfact-icon3.svg"
                        count={120}
                        title="Branches around"
                      />
                      <FunfactCard
                        img="img/funfact-icon3.svg"
                        count={150}
                        title="Built Hose"
                        standard="K"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

FunFacts.propTypes = {
  v2: ProtoTypes.bool,
};

export default FunFacts;
