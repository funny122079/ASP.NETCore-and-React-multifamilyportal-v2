import Image, { StaticImageData } from "next/image"

import icon_1 from "@/assets/images/icon/icon_58.svg"
import icon_2 from "@/assets/images/icon/icon_59.svg"
import icon_3 from "@/assets/images/icon/icon_60.svg"
import icon_4 from "@/assets/images/icon/icon_61.svg"

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
      <div className="property-feature-list position-relative z-2 pb-65">
         <div className="row">
            <div className="col-xl-8">
               <div className="dark-bg ps-5 pe-5 pt-25 pb-25 m-inverse">
                  <ul className="style-none d-flex flex-wrap align-items-center justify-content-between">
                     {property_overview_data.map((item) => (
                        <li key={item.id}>
                           <Image src={item.icon} alt="" className="lazy-img icon sm" />
                           <span className="fs-20 text-white">{item.title}</span>
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
         </div>
      </div>
   )
}

export default PropertyOverview
