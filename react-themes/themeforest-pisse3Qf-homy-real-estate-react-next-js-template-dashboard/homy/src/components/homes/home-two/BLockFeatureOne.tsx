import feature_data from "@/data/home-data/FeatureData"
import Link from "next/link"

const BLockFeatureOne = () => {
   return (
      <div className="block-feature-six mt-150 xl-mt-100">
         <div className="container">
            <div className="position-relative z-1">
               <div className="row">
                  <div className="col-xl-9 m-auto">
                     <div className="title-one text-center mb-35 lg-mb-20 wow fadeInUp">
                        <h2 className="font-garamond">Explore City with Most Properties</h2>
                        <p className="fs-22 mt-xs">Allows you to search for the best and latest properties & projects in different location. Search by area below to find your perfect place.</p>
                     </div>
                  </div>
               </div>

               <div className="row gx-xxl-5">
                  {feature_data.filter((items) => items.page === "home_2_feature_1").map((item) => (
                     <div key={item.id} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={item.data_delay_time}>
                        <div className={`location-card-two position-relative z-1 d-flex align-items-center justify-content-center mt-30 ${item.item_bg}`}>
                           <div className="content">
                              <h5 className="text-white font-garamond">{item.title}</h5>
                           </div>
                           <Link href="/listing_05" className="stretched-link"></Link>
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
