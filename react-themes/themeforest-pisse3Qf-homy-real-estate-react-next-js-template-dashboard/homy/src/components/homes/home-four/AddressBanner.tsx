import Link from "next/link"
import Image from "next/image"

import circleImg from "@/assets/images/icon/icon_39.svg"

interface DataType {
   id: number;
   class_name?: string;
   title: string;
   address_1: string;
   address_2?: string;
}

const address_data: DataType[] = [
   {
      id: 1,
      title: "We’r always happy to help.",
      address_1: "ask@homy.com"
   },
   {
      id: 2,
      class_name: "skew-line",
      title: "Our hotline number",
      address_1: "+757 699 4478,",
      address_2: "+991 377 9731",
   },
   {
      id: 3,
      title: "Live chat",
      address_1: "www.homylivechat.com"
   },
]

const AddressBanner = ({ style }: any) => {
   return (
      <div className={`address-banner wow fadeInUp mt-120 lg-mt-80 ${style ? "mb-140" : ""}`}>
         <div className="container container-large">
            <div className="d-flex flex-wrap justify-content-center justify-content-lg-between">
               {address_data.map((item) => (
                  <div key={item.id} className={`block position-relative ${item.class_name} z-1 mt-25`}>
                     <div className="d-xl-flex align-items-center">
                        <div className="icon rounded-circle d-flex align-items-center justify-content-center"><Image src={circleImg} alt="" className="lazy-img" /></div>
                        <div className="text">
                           <p className="fs-22">{item.title}</p>
                           <Link href="#" className="tran3s">{item.address_1}</Link>
                           {item.address_2 && <> { " " } <Link href="#" className="tran3s">{item.address_2}</Link></>}
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default AddressBanner
