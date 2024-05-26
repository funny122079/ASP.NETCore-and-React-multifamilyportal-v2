import Image, { StaticImageData } from "next/image"

import icon_1 from "@/assets/images/icon/icon_62.svg"
import icon_2 from "@/assets/images/icon/icon_63.svg"
import icon_3 from "@/assets/images/icon/icon_64.svg"
import icon_4 from "@/assets/images/icon/icon_65.svg"
import icon_5 from "@/assets/images/icon/icon_66.svg"

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
   {
      id: 5,
      icon: icon_5,
      title: "Type . Apartment",
   },
]

const PropertyOverview = () => {
   return (
      <ul className="style-none d-flex flex-wrap align-items-center justify-content-between">
         {property_overview_data.map((item) => (
            <li key={item.id}>
               <Image src={item.icon} alt="" className="lazy-img icon" />
               <span className="fs-20 text-white">{item.title}</span>
            </li>
         ))}
      </ul>
   )
}

export default PropertyOverview
