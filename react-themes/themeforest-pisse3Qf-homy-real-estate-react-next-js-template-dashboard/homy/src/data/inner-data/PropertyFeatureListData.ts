interface DataType {
   id: number;
   title: string;
   feature_list: {
      title: string;
      count: string;
   }[];
}[];

const property_feature_list: DataType[] = [
   {
      id: 1,
      title: "Property Details",
      feature_list: [
         { title: "Bedrooms:", count: "03" },
         { title: "Furnishing:", count: "Semi furnished", },
         { title: "Bathrooms:", count: "02", },
         { title: "Year Built:", count: "2010", },
         { title: "Floor:", count: "Ground", },
         { title: "Garage:", count: "03", },
         { title: "Ceiling Height:", count: "3.2m", },
         { title: "Property Type:", count: "Apartment", },
         { title: "Renovation:", count: "3.2m", },
         { title: "Status:", count: "For Sale", },
      ],
   },
   {
      id: 2,
      title: "Utility Details",
      feature_list: [
         { title: "Heating:", count: "Natural gas", },
         { title: "Intercom:", count: "Yes", },
         { title: "Air Condition:", count: "Yes", },
         { title: "Window Type:", count: "Aluminum frame", },
         { title: "Fireplace:", count: "--", },
         { title: "Cable TV:", count: "--", },
         { title: "Elevator:", count: "Yes", },
         { title: "WiFi:", count: "Yes", },
         { title: "Ventilation:", count: "Yes", },
      ],
   },
   {
      id: 3,
      title: "Outdoor Features",
      feature_list: [
         { title: "Garage:", count: "Yes", },
         { title: "Parking:", count: "Yes", },
         { title: "Garden:", count: "30m2", },
         { title: "Disabled Access:", count: "Ramp", },
         { title: "Swimming Pool:", count: "--", },
         { title: "Fence:", count: "--", },
         { title: "Security:", count: "3 Cameras", },
         { title: "Pet Friendly:", count: "Yes", },
      ],
   }
];

export default property_feature_list;