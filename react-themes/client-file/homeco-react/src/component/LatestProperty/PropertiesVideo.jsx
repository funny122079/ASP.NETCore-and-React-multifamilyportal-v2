import { useState } from "react";
import Title from "../Title";
import TabBtn from "../Button/TabBtn";
import Video from "./Video";
import { responsiveLogoSlider2 } from "../../utils/responsiveSlider";
import Carousel from "react-multi-carousel";
import LogoCard from "../Cards/LogoCard";

function PropertiesVideo() {
  const [activeVideo, setActiveVideo] = useState("Duplex House");

  const handleActiveVideo = (video) => {
    setActiveVideo(video);
  };
  return (
    <section className="pd-top-120 pd-btm-60">
      <div className="homec-section-bottom-shape"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 col-md-8 offset-md-2 col-12">
            <Title
              firstText="Full Properties video"
              secondText="Our Living Space of Flat"
              marginSize="50"
            />
            {/* <!-- Section TItle --> */}
          </div>
        </div>
        <div className="row">
          <div className="col-12" data-aos="fade-up" data-aos-delay="400">
            <div
              className="list-group homec-list-tabs"
              id="list-tab"
              role="tablist"
            >
              <TabBtn
                link="#homec-gallery-tab1"
                text="Duplex House"
                handleActive={handleActiveVideo}
                active={activeVideo}
              />
              <TabBtn
                link="#homec-gallery-tab2"
                text="Apartment"
                handleActive={handleActiveVideo}
                active={activeVideo}
              />
              <TabBtn
                link="#homec-gallery-tab3"
                text="Building"
                handleActive={handleActiveVideo}
                active={activeVideo}
              />
              <TabBtn
                link="#homec-gallery-tab4"
                text="Penthouse"
                handleActive={handleActiveVideo}
                active={activeVideo}
              />
              <TabBtn
                link="#homec-gallery-tab5"
                text="Plaza"
                handleActive={handleActiveVideo}
                active={activeVideo}
              />
            </div>
          </div>
          <div className="col-12">
            <div className="tab-content mg-top-20" id="nav-tabContent">
              <Video
                category="Duplex House"
                img="https://placehold.co/1170x570"
                title="Modern House With Pool"
                text="1901 Thornridge Cir. Shiloh, Hawaii 81063"
                videoId="FzcfZyEhOoI"
                active={activeVideo}
              />
              <Video
                category="Apartment"
                img="https://placehold.co/1170x570"
                title="Modern Apartment for Sell"
                text="1901 Thornridge Cir. Shiloh, Hawaii 81063"
                videoId="FzcfZyEhOoI"
                active={activeVideo}
              />
              <Video
                category="Building"
                img="https://placehold.co/1170x570"
                title="Modern Building for Sell"
                text="1901 Thornridge Cir. Shiloh, Hawaii 81063"
                videoId="FzcfZyEhOoI"
                active={activeVideo}
              />
              <Video
                category="Penthouse"
                img="https://placehold.co/1170x570"
                title="Modern Penthouse for Sell"
                text="1901 Thornridge Cir. Shiloh, Hawaii 81063"
                videoId="FzcfZyEhOoI"
                active={activeVideo}
              />
              <Video
                category="Plaza"
                img="https://placehold.co/1170x570"
                title="Modern Plaza for Rent"
                text="1901 Thornridge Cir. Shiloh, Hawaii 81063"
                videoId="FzcfZyEhOoI"
                active={activeVideo}
              />
            </div>
          </div>
        </div>

        <div className="row mg-top-60">
          <div className="col-lg-10 offset-lg-2 col-12">
            <h4 className="homec-medium-title text-center text-white mg-btm-30">
              Trusted by big brands
            </h4>
            {/* <!-- Clients Logo Slider --> */}
            <div className="swiper mySwiper homec-slider-client loading">
              <Carousel
                responsive={responsiveLogoSlider2}
                showDots={false}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                removeArrowOnDeviceType={[
                  "superLargeDesktop",
                  "desktop",
                  "tablet",
                  "mobile",
                ]}
              >
                <LogoCard link="#" img="https://placehold.co/150x42" />
                <LogoCard link="#" img="https://placehold.co/150x42" />
                <LogoCard link="#" img="https://placehold.co/150x42" />
                <LogoCard link="#" img="https://placehold.co/150x42" />
                <LogoCard link="#" img="https://placehold.co/150x42" />
                <LogoCard link="#" img="https://placehold.co/150x42" />
                <LogoCard link="#" img="https://placehold.co/150x42" />
                <LogoCard link="#" img="https://placehold.co/150x42" />
                <LogoCard link="#" img="https://placehold.co/150x42" />
                <LogoCard link="#" img="https://placehold.co/150x42" />
                <LogoCard link="#" img="https://placehold.co/150x42" />
              </Carousel>
            </div>
            {/* <!-- End Clients Logo Slider --> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PropertiesVideo;
