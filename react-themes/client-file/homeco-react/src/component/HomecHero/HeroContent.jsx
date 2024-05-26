import HeroContentList from "./HeroContentList";

function HeroContent() {
  return (
    <div className="homec-hero__content homec-hero__content--v2">
      <h1 className="homec-hero__title">
        Get your
        <span
          className="homec-hero__title--focus"
          style={{ backgroundImage: "url('img/shape-2.svg')" }}
        >
          Property
        </span>
        <br /> With Agents.
      </h1>
      <ul className="homec-iconic-list homec-iconic-list__v2 homec-iconic-list__white list-none mg-top-30">
        <HeroContentList
          text="Suspe ndisse suscipit sagittis
          leo."
        />
        <HeroContentList
          text="Entum estibulum dignissim as
          posuere."
        />
        <HeroContentList
          text="Best real house and property for
          your dream."
        />
      </ul>
      <a href="property-grid.html" className="homec-btn homec-btn__second">
        <span>See all Property</span>
      </a>
    </div>
  );
}

export default HeroContent;
