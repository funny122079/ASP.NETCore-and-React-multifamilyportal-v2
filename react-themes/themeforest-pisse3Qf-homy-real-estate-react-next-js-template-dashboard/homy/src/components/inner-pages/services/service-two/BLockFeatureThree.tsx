import feature_data from "@/data/home-data/FeatureData";
import Image from "next/image";
import Link from "next/link";

import titleShape from "@/assets/images/shape/title_shape_10.svg";

const BLockFeatureThree = () => {
   return (
      <div className="block-feature-seven position-relative z-1 mt-150 xl-mt-120 lg-mt-100">
         <div className="container container-large">
            <div className="position-relative">
               <div className="text-center wow fadeInUp">
                  <div className="title-one">
                     <h3><span>We’r Here <Image src={titleShape} alt="" className="lazy-img" /></span>to help you</h3>
                     <p className="fs-22 mt-xs">Explore featured properties for sale.</p>
                  </div>
               </div>

               <div className="wrapper position-relative z-1 mt-45 lg-mt-20 mb-100 lg-mb-50">
                  <div className="row gx-xxl-5">
                     {feature_data.filter((items) => items.page === "home_two_feature_2").map((item) => (
                        <div key={item.id} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={item}>
                           <div className="card-style-two overflow-hidden position-relative z-1 mt-30">
                              <Image src={item.img ? item.img : ""} alt="" className="lazy-img w-100 tran5s" />
                              <div className="content text-center">
                                 <div className="btn-line tran3s fw-500 text-uppercase">{item.tag}</div>
                                 <h4 className="mt-15 mb-35">{item.title}</h4>
                                 <Link href="/listing_02" className="btn-four rounded-circle m-auto"><i
                                    className="bi bi-arrow-up-right"></i></Link>
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

export default BLockFeatureThree
