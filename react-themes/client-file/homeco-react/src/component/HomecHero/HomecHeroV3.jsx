import HeroContentList from "./HeroContentList";
import ButtonOne from "../Button/ButtonOne";
import FromField from "../Filter/FromField";

function HomecHero() {
  return (
    <section id="hero" className="homec-hero homec-hero--v3 p-relative">
      <div className="homec-hero-group">
        <img
          className="homec-hero-group-img homec-hero-group-img__v1"
          src="img/hero-shape-group.svg"
          alt="#"
        />
        <img
          className="homec-hero-group-img homec-hero-group-img__v2"
          src="img/hero-shape-group-2.svg"
          alt="#"
        />
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12">
            <div className="homec-hero__inner homec-hero__inner--v2">
              {/* <!-- Hero Content --> */}
              <div className="homec-hero__content homec-hero__content--v2">
                <h1 className="homec-hero__title homec-hero__title--v2">
                  Explore Listings and make move Today
                </h1>
                <ul className="homec-iconic-list homec-iconic-list--v3 list-none mg-top-30">
                  <HeroContentList text="Suspe ndisse suscipit sagittis leo." />
                  <HeroContentList text="Entum estibulum dignissim as posuere." />
                  <HeroContentList text="Best real house and property for your deam." />
                </ul>
                <ButtonOne title="See all Property" link="property-grid.html" />
              </div>
              {/* <!-- End Hero Content --> */}
              <div className="homec-slider-property-slider homec-slider-property-slider--v2">
                <img src="https://placehold.co/645x550" alt="#" />
              </div>
            </div>
            <div className="homec-filters homec-filters__v2">
              <form action="#">
                <div className="homec-filter-group">
                  {/* <!-- Form Group --> */}
                  <FromField
                    name="Type"
                    options={[
                      {
                        id: 1,
                        name: "Apartment",
                      },
                      {
                        id: 2,
                        name: "Family House",
                      },
                      {
                        id: 2,
                        name: "Mordan Villa",
                      },
                    ]}
                  />
                  <FromField
                    name="Your Location"
                    options={[
                      {
                        id: 1,
                        name: "Bali",
                      },
                      {
                        id: 2,
                        name: "Chicago",
                      },
                      {
                        id: 2,
                        name: "New Jersey",
                      },
                    ]}
                  />
                  <FromField
                    name="Average Price"
                    options={[
                      {
                        id: 1,
                        name: "$400-$600",
                      },
                      {
                        id: 2,
                        name: "$600-$800",
                      },
                      {
                        id: 2,
                        name: "$800-$1000",
                      },
                    ]}
                  />
                  {/* <!-- Button --> */}
                  <button type="submit" className="homec-btn homec-btn__second">
                    <span className="homec-btn__inside">
                      <span>
                        <svg
                          width="21"
                          height="21"
                          viewBox="0 0 21 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.45185 16.8948C10.3289 16.8949 12.1522 16.2686 13.633 15.1152L19.2197 20.7019C19.637 21.105 20.3021 21.0934 20.7051 20.6761C21.0983 20.269 21.0983 19.6236 20.7051 19.2165L15.1184 13.6298C17.9805 9.9456 17.314 4.63881 13.6298 1.77676C9.94555 -1.08529 4.63881 -0.418815 1.77676 3.26541C-1.08529 6.94964 -0.418815 12.2564 3.26541 15.1185C4.74865 16.2707 6.57361 16.8958 8.45185 16.8948ZM3.96301 3.95978C6.44215 1.48059 10.4616 1.48054 12.9408 3.95969C15.42 6.43883 15.4201 10.4583 12.9409 12.9375C10.4618 15.4167 6.44229 15.4167 3.9631 12.9376C3.96305 12.9376 3.96305 12.9376 3.96301 12.9375C1.48386 10.4764 1.46926 6.47159 3.93034 3.99245C3.94121 3.98153 3.95209 3.97065 3.96301 3.95978Z"
                            fill="#111111"
                          />
                        </svg>
                      </span>
                      <span>Search</span>
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomecHero;
