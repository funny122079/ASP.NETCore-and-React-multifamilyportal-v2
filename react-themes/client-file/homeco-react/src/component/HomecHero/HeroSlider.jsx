import HeroSliderSlide from "./HeroSliderSlide";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsiveHeroSlider } from "../../utils/responsiveSlider";
import { CustomDot } from "../CustomDot/CustomDot";
function HeroSlider() {
  return (
    <div className="homec-slider-property-slider">
      {/* Swiper Card Slider */}

      <Carousel
        responsive={responsiveHeroSlider}
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
        customDot={<CustomDot />}
      >
        <HeroSliderSlide
          link="property-single"
          img="https://placehold.co/495x500"
          price="3,976"
          pricePeriod="month"
          title="Modern House With Pool"
          propertyText="1901 Thornridge Cir. Shiloh, Hawaii 81063"
          propertyImg="img/location-icon2.svg"
          propertyList={[
            { name: "3 Room", img: "img/room-icon2.svg" },
            { name: "2 Bathroom", img: "img/bath-icon2.svg" },
            { name: "5x9 m2", img: "img/size-icon2.svg" },
          ]}
        />
        <HeroSliderSlide
          link="property-single"
          img="https://placehold.co/495x500"
          price="3,976"
          pricePeriod="month"
          title="Diamond Mn Apartment"
          propertyText="1901 Thornridge Cir. Shiloh, Hawaii 81063"
          propertyImg="img/location-icon2.svg"
          propertyList={[
            { name: "3 Room", img: "img/room-icon2.svg" },
            { name: "2 Bathroom", img: "img/bath-icon2.svg" },
            { name: "5x9 m2", img: "img/size-icon2.svg" },
          ]}
        />
        <HeroSliderSlide
          link="property-single"
          img="https://placehold.co/495x500"
          price="3,976"
          pricePeriod="month"
          title="Northwest Office Space"
          propertyText="1901 Thornridge Cir. Shiloh, Hawaii 81063"
          propertyImg="img/location-icon2.svg"
          propertyList={[
            { name: "3 Room", img: "img/room-icon2.svg" },
            { name: "2 Bathroom", img: "img/bath-icon2.svg" },
            { name: "5x9 m2", img: "img/size-icon2.svg" },
          ]}
        />
      </Carousel>

      {/* End Swiper Card Slider  */}
    </div>
  );
}

export default HeroSlider;
