import Image, { StaticImageData } from "next/image"

import icon_1 from "@/assets/images/icon/icon_47.svg"
import icon_2 from "@/assets/images/icon/icon_48.svg"
import icon_3 from "@/assets/images/icon/icon_49.svg"
import icon_4 from "@/assets/images/icon/icon_50.svg"
import property_feature_list from "@/data/inner-data/PropertyFeatureListData"

interface DataType {
   id: number;
   icon: StaticImageData;
   title: string;
}[];

const property_overview_data: DataType[] = [
   {
      id: 1,
      icon: icon_1,
      title: "Sqft . 3,720",
   },
   {
      id: 2,
      icon: icon_2,
      title: "Bed . 03",
   },
   {
      id: 3,
      icon: icon_3,
      title: "Bath . 2",
   },
   {
      id: 4,
      icon: icon_4,
      title: "Kitchen . 01",
   },
]

const PropertyOverview = () => {
   return (
      <>
         <div className="property-overview p-40">
            <h4 className="mb-20">Overview</h4>
            <p className="fs-20 lh-lg">Lorem ipsum dolor sit amet consectetur. Et velit varius ipsum tempor vel dignissim tincidunt. Aliquam accumsan laoreet ultricies tincidunt faucibus fames augue in sociis. Nisl enim integer neque nec.</p>
            <div className="property-feature-list mt-40">
               <ul className="style-none d-flex flex-wrap align-items-center justify-content-between">
                  {property_overview_data.map((item) => (
                     <li key={item.id}>
                        <Image src={item.icon} alt="" className="lazy-img icon" />
                        <span className="fs-20 color-dark">{item.title}</span>
                     </li>
                  ))}
               </ul>
            </div>
         </div>

         <div className="property-feature-accordion border-top p-40">
            <h4 className="mb-20">Property Features</h4>
            <p className="fs-20 lh-lg">Risk management and compliance, when approached strategically, have the potential to go beyond mitigating threats.</p>
            <h5 className="pt-30 pb-25">Property Details</h5>
            {property_feature_list.slice(0, 1).map((item) => (
               <div key={item.id} className="feature-list-two">
                  <ul className="style-none d-flex flex-wrap justify-content-between">
                     {item.feature_list.map((list, i) => (
                        <li key={i}><span>{list.title} </span> <span className="fw-500 color-dark">{list.count}</span></li>
                     ))}
                  </ul>
               </div>
            ))}
         </div>
      </>
   )
}

export default PropertyOverview
