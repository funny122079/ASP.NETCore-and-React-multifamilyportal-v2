import HeroContent from "./HeroContent";
import HeroSlider from "./HeroSlider";

function HomecHero() {
  return (
    <section
      id="hero"
      className="homec-hero homec-hero__v2 p-relative"
      style={{ backgroundImage: "url('img/map.svg')" }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12">
            <div className="homec-hero__inner homec-hero__inner--v2">
              <HeroContent />
              <HeroSlider />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomecHero;
