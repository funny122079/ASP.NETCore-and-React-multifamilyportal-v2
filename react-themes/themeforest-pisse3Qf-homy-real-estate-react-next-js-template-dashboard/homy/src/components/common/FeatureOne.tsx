import feature_data from "../../data/home-data/FeatureData"
import Image from "next/image"
import Link from "next/link"

const FeatureOne = () => {
   return (
      <>
         {feature_data.filter((items) => items.page === "home_4_feature_1").map((item) => (
            <div key={item.id} className="col-lg-4 col-md-6 mt-30 d-flex wow fadeInUp" data-wow-delay={item.data_delay_time}>
               <div className="card-style-six d-inline-flex flex-column align-items-start tran3s h-100 w-100">
                  <div className="icon d-flex align-items-center justify-content-center rounded-circle tran3s">
                     <Image src={item.icon ? item.icon : ""} alt="" className="lazy-img" />
                  </div>
                  <h5 className="mt-35 mb-20">{item.title}</h5>
                  <p className="mb-40">{item.desc}</p>
                  <Link href="/listing_03" className="btn-twelve rounded-0 sm mt-auto">{item.btn}</Link>
               </div>
            </div>
         ))}
      </>
   )
}

export default FeatureOne
