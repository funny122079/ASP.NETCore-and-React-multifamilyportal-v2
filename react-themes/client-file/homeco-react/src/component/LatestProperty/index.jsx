import Title from "../Title";
import TitleBtn from "../Button/TitleBtn";
import LatestPropertyCard from "../Cards/LatestPropertyCard";
import properties from "../../data/property";

function LatestProperty() {
  return (
    <section
      className="homec-properties homec-bg-cover pd-top-120 pd-btm-120"
      style={{ backgroundImage: "url('img/bg-shape-four.svg')" }}
    >
      <div className="homec-shape">
        <div className="homec-shape-single homec-shape-7">
          <img src="img/anim-shape-4.svg" alt="#" />
        </div>
        <div className="homec-shape-single homec-shape-8">
          <img src="img/anim-shape-5.svg" alt="#" />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* Section TItle */}
            <Title
              firstText="View All 329 New Listings"
              secondText=" Latest Properties"
              marginSize="30"
              styleSecond={{ color: "#ffff" }}
            />
          </div>
        </div>

        <div className="row">
          {properties?.map((property) => (
            <LatestPropertyCard
              key={property.id}
              img={property.img}
              likeLink={property.likeLink}
              detailsLink={property.detailsLink}
              agentName={property.agentName}
              agentImg={property.agentImg}
              price={property.price}
              period={property.period}
              whatFor={property.whatFor}
              propertyLink={property.propertyLink}
              name={property.name}
              address={property.address}
              detailsList={property.detailsList}
            />
          ))}
        </div>
        <div className="row">
          <TitleBtn delay="600" link="/property" text="See all Properties" />
        </div>
      </div>
    </section>
  );
}

export default LatestProperty;
