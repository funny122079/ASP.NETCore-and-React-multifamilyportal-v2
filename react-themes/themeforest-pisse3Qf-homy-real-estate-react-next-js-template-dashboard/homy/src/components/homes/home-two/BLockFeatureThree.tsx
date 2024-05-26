import Image from "next/image"
import Link from "next/link"

import lineShape from "@/assets/images/shape/shape_22.svg";
import CardStyleOne from "@/components/common/CardStyleOne";

const BLockFeatureThree = () => {
   return (
      <>
         <div className="row align-items-center mb-100 lg-mb-50 md-mb-20">
            <div className="col-xxl-6 col-xl-5 col-lg-8">
               <div className="title-one">
                  <h2 className="font-garamond m0 lh-1 position-relative">W’er here help you to find properties.
                     <Image src={lineShape} alt="" className="lazy-img shapes shape_02" /></h2>
               </div>
            </div>
            <div className="col-xxl-4 col-xl-4">
               <p className="fs-24 m0 color-dark lg-pt-30 lg-pb-50">We’v big collection of property & over more than 745,000 apartments, home for sell & rent</p>
            </div>
            <div className="col-xxl-2 col-xl-3 d-inline-flex justify-content-xl-end">
               <Link href="#" className="btn-five text-uppercase rounded-0">Get Started</Link>
            </div>
         </div>

         <CardStyleOne style={false} />
      </>
   )
}

export default BLockFeatureThree
