import SelectiveInput from "../Form/SelectiveInput";
import CheckInput from "../Form/CheckInput";
import RangeInput from "../Form/RangeInput";
import AgentsSidebarSlider from "../Agents/AgentsSidebarSlider";

function index() {
  return (
    <div className="col-lg-4 col-12 mg-top-30">
      <div className="property-sidebar">
        <SelectiveInput
          title="Country"
          options={[
            { id: 1, name: "Bangladesh" },
            { id: 2, name: "United Kingdom" },
            { id: 3, name: "United State" },
          ]}
        />
        <SelectiveInput
          title="City"
          options={[
            { id: 1, name: "Dhaka City" },
            { id: 2, name: "Chittagong" },
            { id: 3, name: "Sylhet" },
            { id: 4, name: "Khulna" },
            { id: 5, name: "Rajshahi" },
          ]}
          classes="mg-top-20"
        />
        <SelectiveInput
          title="Property Category"
          options={[
            { id: 1, name: "Apartment" },
            { id: 2, name: "Family House" },
            { id: 3, name: "Modern Villa" },
          ]}
          classes="mg-top-20"
        />
        <CheckInput
          title="Number Of Rooms"
          properties={[
            "Room 1",
            "Room 2",
            "Room 3",
            "Room 4",
            "Room 5",
            "Room 6",
          ]}
          name="room"
        />
        <CheckInput
          title="Bathrooms"
          properties={[
            "Room 1",
            "Room 2",
            "Room 3",
            "Room 4",
            "Room 5",
            "Room 6",
          ]}
          name="bathrooms"
        />
        <RangeInput
          minRange={0}
          maxRange={2000}
          defaultMinRange={400}
          defaultMaxRange={1200}
          title="Square feet"
          standard="sq. ft."
        />
        <RangeInput
          minRange={0}
          maxRange={600}
          defaultMinRange={120}
          defaultMaxRange={450}
          title="Price"
          text="Range: "
          symbol="$"
        />
      </div>
      <AgentsSidebarSlider />
    </div>
  );
}

export default index;
