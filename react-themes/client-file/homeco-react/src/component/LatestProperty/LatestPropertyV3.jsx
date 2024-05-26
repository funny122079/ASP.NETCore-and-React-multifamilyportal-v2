import LatestPropertyCard from "../Cards/LatestPropertyCard";
import TitleWithBtn from "../Title/TitleWithBtn";
import Carousel from "react-multi-carousel";
import { responsivePropertySlider } from "../../utils/responsiveSlider";
import CustomDotRound from "../CustomDot/CustomDotRound";
import properties from "../../data/property";

function LatestPropertyV3() {
  return (
    <section className="pd-top-90">
      <div className="homec-property-separate homec-bg-primary-color">
        <div
          className="homec-bg homec-bg__opacity"
          style={{ backgroundImage: "url(img/features-list-bg.svg)" }}
        ></div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* <!-- Section TItle --> */}
            <TitleWithBtn
              category="View All 329 New Listing"
              title="Latest Properties"
              link="/property"
              btnText="See all Properties"
              styleCategory={{ color: "#f2c94c" }}
              styleTitle={{ color: "#ffff" }}
              btn="v2"
            />
          </div>
        </div>
        <div className="swiper mySwiper homec-slider-property pd-btm-30 loading">
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
        {/* <!-- Slider Pagination --> */}
        <div className="swiper-pagination swiper-pagination__property mg-top-30"></div>
      </div>
    </section>
  );
}

export default LatestPropertyV3;
