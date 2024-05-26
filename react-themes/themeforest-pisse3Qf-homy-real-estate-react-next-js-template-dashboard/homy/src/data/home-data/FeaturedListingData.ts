interface DataType {
   id: number;
   page: string;
   tag: string;
   title: string;
   address: string;
   data_delay_time?: string;
   item_bg_img:string;
   property_info: {
      feature: string;
      total_feature: number;
   }[];
}[];

const feature_listing_data:DataType[]=[
   {
      id: 1,
      page: "home_5",
      tag: "Rent",
      item_bg_img:"item-bg-1",
      title: "Blueberry villa.",
      address: "Mirpur 10, Stadium dhaka 1208",
      property_info: [{feature: "sqft", total_feature: 2137 }, {feature: "bed", total_feature: 0o3 }, {feature: "kitchen", total_feature: 0o1 }, {feature: "bath", total_feature: 0o2 },],
   },
   {
      id: 2,
      page: "home_5",
      tag: "Sell",
      item_bg_img:"item-bg-2",
      title: "Swimming Pool Villa",
      address: "127 green road, California, USA",
      data_delay_time:"0.1s",
      property_info: [{feature: "sqft", total_feature: 2137 }, {feature: "bed", total_feature: 0o3 }, {feature: "kitchen", total_feature: 0o1 }, {feature: "bath", total_feature: 0o2 },],
   },
   {
      id: 3,
      page: "home_5",
      tag: "Rent",
      item_bg_img:"item-bg-3",
      title: "Modern Duplex",
      address: "Twin tower, 32 street, Florida",
      data_delay_time:"0.2s",
      property_info: [{feature: "sqft", total_feature: 2137 }, {feature: "bed", total_feature: 0o3 }, {feature: "kitchen", total_feature: 0o1 }, {feature: "bath", total_feature: 0o2 },],
   },
]

export default feature_listing_data;