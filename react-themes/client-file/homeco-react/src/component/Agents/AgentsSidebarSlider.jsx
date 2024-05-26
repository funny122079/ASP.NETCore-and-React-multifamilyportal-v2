import CustomDot from "../CustomDot/CustomDot2";
import AgentCard from "../Cards/AgentCard";
import Carousel from "react-multi-carousel";
import { responsiveSmallAgentsSlider } from "../../utils/responsiveSlider";

function AgentsSidebarSlider() {
  return (
    <div className="mg-top-30">
      <div
        className="homec-agent-card homec-bg-cover"
        style={{ backgroundImage: "url('img/vector.svg')" }}
      >
        <h4 className="homec-agent-card__title mg-btm-20 text-white">
          Our Broker List
        </h4>

        <Carousel
          responsive={responsiveSmallAgentsSlider}
          showDots={true}
          infinite={true}
          autoPlay={true}
          dotListClass={"whiteDotList"}
          autoPlaySpeed={3000}
          removeArrowOnDeviceType={[
            "superLargeDesktop",
            "desktop",
            "tablet",
            "mobile",
          ]}
          customDot={<CustomDot />}
        >
          <AgentCard
            img="https://placehold.co/35x35"
            phone="#"
            linkedin="#"
            twitter="#"
            insta="#"
            name="Wade De Warren"
            desc="Real Estate Broker"
            fullWidth={true}
          />
          <AgentCard
            img="https://placehold.co/35x35"
            phone="#"
            linkedin="#"
            twitter="#"
            insta="#"
            name="Kathryn Murphy"
            fullWidth={true}
            desc="Real Estate Broker"
          />
          <AgentCard
            img="https://placehold.co/35x35"
            phone="#"
            linkedin="#"
            twitter="#"
            insta="#"
            name="Cody Fisher"
            fullWidth={true}
            desc="Real Estate Broker"
          />
          <AgentCard
            img="https://placehold.co/35x35"
            phone="#"
            linkedin="#"
            twitter="#"
            insta="#"
            name="Arlene McCoy"
            fullWidth={true}
            desc="Real Estate Broker"
          />
        </Carousel>
      </div>
    </div>
  );
}

export default AgentsSidebarSlider;
