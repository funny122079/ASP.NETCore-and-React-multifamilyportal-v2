import Image from "next/image"
import feature_data from "@/data/home-data/FeatureData"

import titleShape from "@/assets/images/shape/title_shape_09.svg"

const BLockFeatureThree = () => {
   return (
      <div className="block-feature-fourteen pt-120 xl-pt-100 pb-140 xl-pb-100">
         <div className="container container-large">
            <div className="row">
               <div className="col-lg-6">
                  <div className="title-one md-mb-30 pe-xxl-4 wow fadeInLeft">
                     <h3 className="m0 text-white">Easily <span>Purchase,<Image src={titleShape} alt="" className="lazy-img" /></span> Sell, or Lease listings.</h3>
                  </div>
               </div>
               <div className="col-xxl-5 col-lg-6 ms-auto">
                  <p className="text-white fs-24 m0 lh-lg ps-xxl-5 wow fadeInRight">Your leading real estate advocate, transforming houses into dreams. Trust us to expertly guide you home</p>
               </div>
            </div>

            <div className="card-bg-wrapper wow fadeInUp mt-70 lg-mt-50">
               <div className="row">
                  {feature_data.filter((items) => items.page === "home_6_feature_1").map((item) => (
                     <div key={item.id} className="col-lg-4">
                        <div className="card-style-eight mt-45 wow fadeInUp">
                           <div className="d-flex align-items-start pe-xxl-5">
                              <Image src={item.icon ? item.icon : ""} alt="" className="lazy-img icon" />
                              <div className="text">
                                 <h5 className="text-white">{item.title}</h5>
                                 <p>{item.desc}</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   )
}

export default BLockFeatureThree
