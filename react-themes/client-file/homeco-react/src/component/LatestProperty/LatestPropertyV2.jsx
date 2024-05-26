import Carousel from "react-multi-carousel";
import { responsivePropertySlider } from "../../utils/responsiveSlider";
import CustomDotRound from "../CustomDot/CustomDotRound";
import LatestPropertyCard from "../Cards/LatestPropertyCard";
import TitleWithBtn from "../Title/TitleWithBtn";
import properties from "../../data/property";

function LatestPropertyV2() {
  return (
    <div>
      <section
        className="homec-properties homec-bg-cover homec-bg-third-color pd-top-90 pd-btm-120"
        style={{ backgroundImage: "url('img/bg-shape-one.svg')" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <TitleWithBtn
                category="View All 329 New Listings"
                title="Latest Properties"
                link="/property"
                btnText="See all  Properties"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Carousel
                responsive={responsivePropertySlider}
                showDots={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                removeArrowOnDeviceType={[
                  "superLargeDesktop",
                  "desktop",
                  "tablet",
                  "mobile",
                ]}
                customDot={<CustomDotRound />}
              >
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
                    style={{ width: "95%", marginBottom: "60px" }}
                  />
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LatestPropertyV2;
