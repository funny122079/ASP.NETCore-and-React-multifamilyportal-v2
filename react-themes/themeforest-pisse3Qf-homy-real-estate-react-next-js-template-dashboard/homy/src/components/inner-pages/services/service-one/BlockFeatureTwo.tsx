import Image from "next/image"
import service_data from "@/data/inner-data/ServiceData";
import Link from "next/link";

import serviceShape_1 from "@/assets/images/shape/title_shape_07.svg";
import serviceShape_2 from "@/assets/images/shape/shape_73.svg";
import serviceShape_3 from "@/assets/images/shape/shape_74.svg";
import serviceShape_4 from "@/assets/images/shape/shape_75.svg";
import serviceShape_5 from "@/assets/images/shape/shape_76.svg";

const BlockFeatureTwo = ({ style }: any) => {
   return (
      <div className={`block-feature-seventeen ${style ? "dark-bg" : "bg-pink-three"} position-relative z-1 pt-120 xl-pt-80 pb-140 xl-pb-80`}>
         <div className="container">
            <div className="row">
               <div className="col-xl-8 m-auto">
                  <div className="title-one text-center wow fadeInUp mb-40 lg-mb-20">
                     <h3 className={`${style ? "text-white" : ""}`}>Core <span>Services<Image src={serviceShape_1} alt="" className="lazy-img" /></span></h3>
                     <p className={`fs-22 color-dark ${style ? "text-white" : ""}`}>Over 745K listings of apartments, lots, plots - available today.</p>
                  </div>
               </div>
            </div>
            <div className="row gx-xxl-5">
               {service_data.filter((items) => items.page === "service_1").map((item) => (
                  <div key={item.id} className="col-lg-4 col-md-6 d-flex mt-40 wow fadeInUp" data-wow-delay="0.1s">
                     <div className="card-style-ten d-flex align-items-start flex-column w-100 h-100">
                        <div className="icon d-flex align-items-center justify-content-center rounded-circle tran3s">
                           <Image src={item.icon} alt="" className="lazy-img" /></div>
                        <h6>{item.title}</h6>
                        <p>{item.desc}</p>
                        <Link href="/service_details" className="btn-twelve sm mt-auto">{item.btn}</Link>
                     </div>
                  </div>
               ))}
            </div>
         </div>
         {
            style ? (
               <><Image src={serviceShape_4} alt="" className="lazy-img shapes shape_01" />
                  <Image src={serviceShape_5} alt="" className="lazy-img shapes shape_02" />
               </>
            ) :
               (
                  <><Image src={serviceShape_2} alt="" className="lazy-img shapes shape_01" />
                     <Image src={serviceShape_3} alt="" className="lazy-img shapes shape_02" />
                  </>
               )
         }
      </div>
   )
}

export default BlockFeatureTwo
