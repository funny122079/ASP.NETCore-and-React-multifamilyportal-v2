import TitleWithBtn from "../Title/TitleWithBtn";
import AgentCard from "../Cards/AgentCard";
import Carousel from "react-multi-carousel";
import { responsiveAgentsSlider } from "../../utils/responsiveSlider";
import CustomDot from "../CustomDot/CustomDot2";
import agents from "../../data/agents";

function AgentsV2() {
  return (
    <section
      className="homec-bg-third-color homec-bg-cover pd-top-90 pd-btm-120"
      style={{ backgroundImage: "url('https://placehold.co/1920x880')" }}
    >
      <div className="homec-overlay"></div>
      <div
        className="section-inside-bg"
        style={{ backgroundImage: "url('img/agent-bg-2.jpg')" }}
      ></div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <TitleWithBtn
              category="View all 234 Agent"
              title="Meet Properties Agents"
              link="/our-agent"
              btnText="See All Agents"
              styleCategory={{ color: "#F2C94C" }}
              styleTitle={{ color: "#ffff" }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="swiper mySwiper homec-slider-agent loading">
              <div className="swiper-wrap">
                <Carousel
                  responsive={responsiveAgentsSlider}
                  showDots={true}
                  infinite={true}
                  autoPlay={true}
                  dotListClass={"dotList"}
                  autoPlaySpeed={3000}
                  removeArrowOnDeviceType={[
                    "superLargeDesktop",
                    "desktop",
                    "tablet",
                    "mobile",
                  ]}
                  customDot={<CustomDot />}
                >
                  {agents?.map((agent) => (
                    <AgentCard
                      key={agent.id}
                      img={agent.img2}
                      phone={agent.phone}
                      linkedin={agent.linkedin}
                      twitter={agent.twitter}
                      insta={agent.insta}
                      name={agent.name}
                      desc={agent.position}
                    />
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AgentsV2;
