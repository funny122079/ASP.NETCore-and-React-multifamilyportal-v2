import Image from "next/image"
import feature_data from "@/data/home-data/FeatureData"

import titleShape from "@/assets/images/shape/title_shape_01.svg"

const BLockFeatureOne = () => {
   return (
      <div className="block-feature-one mt-130 xl-mt-100 lg-mt-80 mb-150 xl-mb-100 lg-mb-80">
         <div className="container">
            <div className="title-one text-center mb-50 xl-mb-30 lg-mb-20 wow fadeInUp">
               <h3>Unlock Homy&apos;s <span>advantages <Image src={titleShape} alt="" className="lazy-img" /></span></h3>
               <p className="fs-24">Your trusted real estate partner in every transaction.</p>
            </div>

            <div className="row gx-xl-5">
               {feature_data.filter((items) => items.page === "home_1_feature_1").map((item) => (
                  <div key={item.id} className="col-md-4">
                     <div className="card-style-one text-center wow fadeInUp mt-40">
                        <Image src={item.icon ? item.icon : ""} alt="" className="lazy-img m-auto icon" />
                        <div className="fs-16 text-uppercase fw-500 fs-text mt-35 md-mt-30 mb-20">{item.title}</div>
                        <p className="fs-24 ps-xxl-4 pe-xxl-4">{item.desc}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default BLockFeatureOne
