import Image from "next/image"
import feature_data from "@/data/home-data/FeatureData"
import Link from "next/link"

import titleShape from "@/assets/images/shape/shape_37.svg"
import featureShape_1 from "@/assets/images/shape/shape_71.svg"
import featureShape_2 from "@/assets/images/shape/shape_39.svg"
import featureShape_3 from "@/assets/images/shape/shape_37.svg"

const BLockFeatureTwo = () => {
   return (
      <div className="block-feature-sixteen">
         <div className="bg-pink-two position-relative z-1 pt-140 xl-pt-100 lg-pt-80 pb-150 xl-pb-120 lg-pb-100">
            <div className="container">
               <div className="title-one text-center mb-70 xl-mb-40 lg-mb-20">
                  <h2 className="font-garamond star-shape"><span className="star-shape"><Image src={titleShape} alt="" className="lazy-img" /></span> Buy, Rend & Sell</h2>
                  <p className="fs-22 mt-xs color-dark">Over 745K listings of apartments, lots, plots - available today.</p>
               </div>

               <div className="row justify-content-center gx-xxl-5">
                  {feature_data.filter((items) => items.page === "home_1_feature_1").map((item) => (
                     <div key={item.id} className="col-lg-4 col-md-6 mt-30 d-flex wow fadeInUp" data-wow-delay={item.data_delay_time}>
                        <div className="card-style-five text-center d-inline-flex flex-column align-items-center tran3s h-100 w-100">
                           <Image src={item.icon ? item.icon : ""} alt="" className="lazy-img icon" />
                           <h5 className="mt-35 mb-20">{item.title}</h5>
                           <p className="fs-22 mb-50">{item.desc}</p>
                           <Link href="/listing_10" className="btn-twelve mt-auto">{item.btn}</Link>
                        </div>
                     </div>
                  ))}
               </div>
            </div>

            <Image src={featureShape_1} alt="" className="lazy-img shapes shape_01 wow fadeInDown" />
            <Image src={featureShape_2} alt="" className="lazy-img shapes shape_02 wow fadeInUp" />
         </div>

         <div className="block-feature-fourteen pt-150 xl-pt-120 lg-pt-100 pb-150 xl-pb-120 lg-pb-80">
            <div className="container">
               <div className="row">
                  <div className="col-lg-6">
                     <div className="title-one md-mb-30 pe-xxl-4 wow fadeInLeft">
                        <h2 className="font-garamond text-white star-shape">Easily Purchase, Sell, or Lease listings. <span className="star-shape"><Image src={featureShape_3} alt="" className="lazy-img" /></span></h2>
                     </div>
                  </div>
                  <div className="col-xxl-5 col-lg-6 ms-auto">
                     <p className="text-white fs-24 m0 lh-lg  wow fadeInRight">Your leading real estate advocate, transforming houses into dreams. Trust us to expertly guide you home</p>
                  </div>
               </div>

               <div className="wow fadeInUp mt-70 xl-mt-50">
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
      </div>
   )
}

export default BLockFeatureTwo
