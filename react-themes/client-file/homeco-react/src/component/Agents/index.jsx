import AgentCardV2 from "../Cards/AgentCardV2";
import AboutShapeImg from "../About/AboutShapeImg";
import agents from "../../data/agents";

function Agents() {
  return (
    <section className="homec-about homec-bg-third-color pd-top-120 pd-btm-120">
      <div className="homec-shape">
        <AboutShapeImg img="img/anim-shape-1.svg" design="homec-shape-1" />
        <AboutShapeImg img="img/anim-shape-2.svg" design="homec-shape-2" />
        <AboutShapeImg img="img/anim-shape-3.svg" design="homec-shape-3" />
        <AboutShapeImg img="img/anim-shape-1.svg" design="homec-shape-1" />
        <AboutShapeImg img="img/anim-shape-2.svg" design="homec-shape-2" />
        <AboutShapeImg img="img/anim-shape-3.svg" design="homec-shape-3" />
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 col-md-8 offset-md-2 col-12">
            <div className="homec-section__head text-center mg-btm-30">
              <span
                className="homec-section__badge homec-section__badge--small homec-primary-color m-0"
                data-aos="fade-in"
                data-aos-delay="300"
              >
                View All 234 Agent
              </span>
              <h2
                className="homec-section__title"
                data-aos="fade-in"
                data-aos-delay="400"
              >
                Meet Properties Agents
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          {agents?.map((agent) => (
            <AgentCardV2
              key={agent.id}
              img={agent.img}
              name={agent.name}
              position={agent.position}
              propertiesLink={agent.propertiesLink}
              detailsLink={agent.detailsLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Agents;
