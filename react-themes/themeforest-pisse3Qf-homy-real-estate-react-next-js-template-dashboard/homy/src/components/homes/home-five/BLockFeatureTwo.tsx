import feature_data from "@/data/home-data/FeatureData"
import Link from "next/link"
import Image from "next/image"

import titleShape from "@/assets/images/shape/title_shape_03.svg"

const BLockFeatureTwo = ({ style }: any) => {
   return (
      <div className={`block-feature-twelve ${style ? "mt-150 xl-mt-100" : "mt-170 xl-mt-120"}`}>
         <div className="container container-large">
            <div className="position-relative">
               <div className="title-one text-center text-lg-start mb-60 xl-mb-40 lg-mb-20 wow fadeInUp">
                  {style ? <h3><span>Popular<Image src={titleShape} alt="" className="lazy-img" /></span> Cities</h3> : <h3>Popular Cities</h3>}
               </div>

               <div className="wrapper flex-wrap d-flex justify-content-center justify-content-md-between align-items-center">
                  {feature_data.filter((items) => items.page === "home_5_feature_1").map((item) => (
                     <div key={item.id} className="location-card-three text-center wow fadeInUp" data-wow-delay={item.data_delay_time}>
                        <div className={`image-bg position-relative z-1 rounded-circle overflow-hidden mb-30 ${item.item_bg}`}>
                           <Link href="/listing_04" className="stretched-link"></Link>
                        </div>
                        <Link href="/listing_04" className="title"><h5>{item.title}</h5></Link>
                        <p>{item.desc}</p>
                     </div>
                  ))}
               </div>
               <div className="section-btn text-center md-mt-50">
                  <Link href="/listing_04" className="btn-eight"><span>Explore All</span> <i className="bi bi-arrow-up-right"></i></Link>
               </div>
            </div>
         </div>
      </div>
   )
}

export default BLockFeatureTwo
