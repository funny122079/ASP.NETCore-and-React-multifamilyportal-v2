import { StaticImageData } from "next/image";

import categoryIcon_1 from "@/assets/images/icon/icon_15.svg";
import categoryIcon_2 from "@/assets/images/icon/icon_16.svg";
import categoryIcon_3 from "@/assets/images/icon/icon_17.svg";
import categoryIcon_4 from "@/assets/images/icon/icon_18.svg";
import categoryIcon_5 from "@/assets/images/icon/icon_19.svg";
import categoryIcon_6 from "@/assets/images/icon/icon_20.svg";
import categoryIcon_7 from "@/assets/images/icon/icon_21.svg";
import categoryIcon_8 from "@/assets/images/icon/icon_22.svg";

interface DataType {
   id: number;
   page: string;
   icon?: StaticImageData;
   text: string;
   item_bg_img?:string;
   data_delay_time?:string;
}[];

const category_data: DataType[] = [
   {
      id: 1,
      page: "home_3",
      icon: categoryIcon_1,
      text: "Shopping Mall",
   },
   {
      id: 2,
      page: "home_3",
      icon: categoryIcon_2,
      text: "Apartments",
   },
   {
      id: 3,
      page: "home_3",
      icon: categoryIcon_3,
      text: "Villa",
   },
   {
      id: 4,
      page: "home_3",
      icon: categoryIcon_4,
      text: "Industry",
   },
   {
      id: 5,
      page: "home_3",
      icon: categoryIcon_5,
      text: "Office",
   },
   {
      id: 6,
      page: "home_3",
      icon: categoryIcon_6,
      text: "Medical",
   },
   {
      id: 7,
      page: "home_3",
      icon: categoryIcon_7,
      text: "House",
   },
   {
      id: 8,
      page: "home_3",
      icon: categoryIcon_8,
      text: "Loft",
   },

   // home_4

   {
      id: 1,
      page: "home_4",
      item_bg_img:"category-4-item-1",
      text: "Apartments",
   },
   {
      id: 2,
      page: "home_4",
      item_bg_img:"category-4-item-2",
      text: "House",
      data_delay_time:"0.1s"
   },
   {
      id: 3,
      page: "home_4",
      item_bg_img:"category-4-item-3",
      text: "Lofts",
      data_delay_time:"0.2s"
   },
   {
      id: 4,
      page: "home_4",
      item_bg_img:"category-4-item-4",
      text: "Villa",
      data_delay_time:"0.3s"
   },
]

export default category_data;