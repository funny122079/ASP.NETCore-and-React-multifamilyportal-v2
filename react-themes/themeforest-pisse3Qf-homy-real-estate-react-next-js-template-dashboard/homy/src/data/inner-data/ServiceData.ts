import { StaticImageData } from "next/image";

import serviceIcon_1 from "@/assets/images/icon/icon_69.svg";
import serviceIcon_2 from "@/assets/images/icon/icon_70.svg";
import serviceIcon_3 from "@/assets/images/icon/icon_71.svg";

interface DataType {
   id: number;
   page: string;
   icon: StaticImageData;
   title: string;
   desc: string;
   data_delay_time?: string;
   btn: string;
}[]

const service_data: DataType[] = [
   {
      id: 1,
      page: "service_1",
      icon: serviceIcon_1,
      title: "Buy a home",
      btn: "Buy Home",
      desc: "Explore homy’s 2 million+ homes and uncover your ideal living space.",
   },
   {
      id: 2,
      page: "service_1",
      icon: serviceIcon_2,
      title: "Rent a Home",
      btn: "Rent Home",
      desc: "Discover a rental you'll love on homy, thanks to 35+ filters.",
      data_delay_time: "0.1s",
   },
   {
      id: 3,
      page: "service_1",
      icon: serviceIcon_3,
      title: "Sell Home",
      btn: "Sell Home",
      desc: "List, sell, thrive – with our top-notch real estate agency.",
      data_delay_time: "0.2s",
   },
   {
      id: 4,
      page: "service_1",
      icon: serviceIcon_1,
      title: "Mortgage",
      btn: "Buy Home",
      desc: "Explore homy’s 2 million+ homes and uncover your ideal living space.",
   },
   {
      id: 5,
      page: "service_1",
      icon: serviceIcon_2,
      title: "Consulting",
      btn: "Rent Home",
      desc: "Discover a rental you'll love on homy, thanks to 35+ filters.",
      data_delay_time: "0.1s",
   },
   {
      id: 6,
      page: "service_1",
      icon: serviceIcon_3,
      title: "Property Managements",
      btn: "Sell Home",
      desc: "List, sell, thrive – with our top-notch real estate agency.",
      data_delay_time: "0.2s",
   },
   
]

export default service_data;