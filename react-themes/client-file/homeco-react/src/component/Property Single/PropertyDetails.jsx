import { useState } from "react";
import PropertyDetailsBtn from "../Button/PropertyDetailsBtn";
import DetailsTab from "./DetailsTab";
import DetailsTabFeatures from "./DetailsTabFeatures";
import FloorDetails from "../FloorDetails";
import PropertyVideo from "../PropertyVideo/";
import PropertyLocation from "../PropertyLocation";
import PropertyReview from "../PropertyReview";
import PropertyAgents from "../Agents/PropertyAgents";

function PropertyDetails() {
  const [activeTab, setActiveTab] = useState("Property Details");
  const handleActive = (title) => {
    setActiveTab(title);
  };

  return (
    <section
      className="pd-top-0 homec-bg-third-color pd-btm-80 homec-bg-cover"
      style={{ backgroundImage: "url('img/property-single-bg.svg')" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-8 ol-12">
            <div
              className="list-group homec-list-tabs homec-list-tabs--v2"
              id="list-tab"
              role="tablist"
            >
              <PropertyDetailsBtn
                title="Property Details"
                active={activeTab}
                handleActive={handleActive}
              />
              <PropertyDetailsBtn
                title="Floor Plans"
                active={activeTab}
                handleActive={handleActive}
              />
              <PropertyDetailsBtn
                title="Property Video"
                active={activeTab}
                handleActive={handleActive}
              />
              <PropertyDetailsBtn
                title="Locations"
                active={activeTab}
                handleActive={handleActive}
              />
              <PropertyDetailsBtn
                title="Review"
                active={activeTab}
                handleActive={handleActive}
              />
            </div>

            <div className="homec-pdetails-tab">
              <div className="tab-content">
                <DetailsTab
                  isActive={activeTab === "Property Details"}
                  text={[
                    "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,",
                    'discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.',
                  ]}
                >
                  <DetailsTabFeatures
                    title="Additional Details"
                    property={[
                      { ["Building age"]: "2 Years" },
                      { Cooling: "Yes" },
                      { Gas: "Yes" },
                      { Parking: "Yes" },
                      { Sewer: "Yes" },
                      { ["Exercise Room"]: "Yes" },
                      { Heating: "Yes" },
                      { Water: "Yes" },
                      { Storage: "Yes" },
                    ]}
                  />{" "}
                  <DetailsTabFeatures
                    title="Nearest Place"
                    property={[
                      { Airport: "3 KM" },
                      { Hospital: "2 KM" },
                      { Breach: "3 KM" },
                      { School: "4 KM" },
                      { Park: "2 KM" },
                    ]}
                  />
                  <DetailsTabFeatures
                    title="Nearest Place"
                    property={[
                      "Elevator in building",
                      "Alcohol",
                      "Reservations",
                      "Free coffe and tea",
                      "Accepts Credit Cards",
                      "Air Condition",
                      "Cable Tv",
                      "Balcony",
                    ]}
                    check={true}
                  />
                </DetailsTab>
                <FloorDetails isActive={activeTab === "Floor Plans"} />
                <PropertyVideo
                  isActive={activeTab === "Property Video"}
                  img="https://placehold.co/785x410"
                  text="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden end to main to marked."
                />
                <PropertyLocation
                  address="70 Washington Square South, New York, NY 10012, United States"
                  text="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden end to main to marked."
                  isActive={activeTab === "Locations"}
                />
                <PropertyReview isActive={activeTab === "Review"} />
              </div>
            </div>
          </div>
          <PropertyAgents
            image="https://placehold.co/90x90"
            name="Wade De Warren"
            position="Real Estate Broker"
          />
        </div>
      </div>
    </section>
  );
}

export default PropertyDetails;
