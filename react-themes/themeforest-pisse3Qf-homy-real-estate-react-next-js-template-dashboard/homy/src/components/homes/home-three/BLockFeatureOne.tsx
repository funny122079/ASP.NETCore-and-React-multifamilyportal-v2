import feature_data from "@/data/home-data/FeatureData"
import Image from "next/image"
import Link from "next/link"

import titleShape from "@/assets/images/shape/shape_37.svg"

const icon: string[] = ["fa-sharp fa-solid fa-star", "fa-sharp fa-solid fa-star", "fa-sharp fa-solid fa-star", "fa-sharp fa-solid fa-star", "fa-sharp fa-solid fa-star",]

const BLockFeatureOne = () => {
   return (
      <div className="block-feature-seven position-relative z-1 mt-120 xl-mt-100">
         <div className="container container-large">
            <div className="position-relative">
               <div className="text-center mb-30 wow fadeInUp">
                  <div className="title-one mb-30 lg-mb-20">
                     <h2 className="font-garamond star-shape">How our clients get <em>benefited</em> by us <span className="star-shape"><Image src={titleShape} alt="" className="lazy-img" /></span></h2>
                     <p className="fs-24 mt-xs">“Outstanding service, bought my dream home quickly!”</p>
                  </div>
                  <ul className="rating style-none d-flex justify-content-center">
                     {icon.map((icon, i) => (
                        <li key={i}><i className={icon}></i></li>
                     ))}
                     <li><span className="color-dark fw-500">4.7</span> (18k Reviews)</li>
                  </ul>
               </div>

               <div className="row justify-content-center gx-xxl-5">
                  {feature_data.filter((items) => items.page === "home_1_feature_1").map((item) => (
                     <div key={item.id} className="col-lg-4 col-md-6 mt-30 d-flex wow fadeInUp" data-wow-delay={item.data_delay_time}>
                        <div className="card-style-five text-center d-inline-flex flex-column align-items-center tran3s h-100 w-100">
                           <Image src={item.icon ? item.icon : ""} alt="" className="lazy-img icon" />
                           <h5 className="mt-35 mb-20">{item.title}</h5>
                           <p className="fs-22 mb-50">{item.desc}</p>
                           <Link href="listing_10" className="btn-twelve mt-auto">{item.btn}</Link>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   )
}

export default BLockFeatureOne
