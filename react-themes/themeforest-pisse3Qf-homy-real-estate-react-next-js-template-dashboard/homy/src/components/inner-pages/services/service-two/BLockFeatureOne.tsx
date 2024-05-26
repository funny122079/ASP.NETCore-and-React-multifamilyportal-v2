import Image from "next/image"
import Link from "next/link"

import featureImg from "@/assets/images/shape/title_shape_10.svg"

const BLockFeatureOne = () => {
   return (
      <div className="block-feature-eleven mt-150 xl-mt-100">
         <div className="container container-large">
            <div className="row">
               <div className="col-lg-5">
                  <div className="title-one md-mb-40">
                     <h3>1,230+ <span>Companies <Image src={featureImg} alt="" className="lazy-img" /></span>Trust by us.</h3>
                  </div>
               </div>
               <div className="col-xxl-6 col-lg-7 ms-auto">
                  <p className="fs-24 lh-lg mb-30 color-dark">Your leading real estate advocate, transforming houses into dreams. Trust us to expertly guide you home.  745,000 apartments & home for sell, rent & mortgage.</p>
                  <div className="d-inline-flex flex-wrap align-items-center">
                     <Link href="/about_us_02" className="btn-five md rounded-0 mt-20 me-5"><span>More Details</span></Link>
                     <Link href="/contact" className="btn-three mt-20"><span>Request a Callback</span> <i className="fa-light fa-arrow-right-long"></i></Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default BLockFeatureOne
