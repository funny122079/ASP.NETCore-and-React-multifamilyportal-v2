import FeatureOne from "@/components/common/FeatureOne"
import Image from "next/image"

import featureShape_1 from "@/assets/images/shape/shape_55.svg"
import featureShape_2 from "@/assets/images/shape/shape_56.svg"

const BLockFeatureThree = () => {
   return (
      <div className="block-feature-nine bg-pink-two position-relative z-1 mt-170 xl-mt-100 pt-120 xl-pt-80 pb-150 xl-pb-80">
         <div className="container container-large">
            <div className="position-relative">
               <div className="row">
                  <div className="title-one text-center mb-50 lg-mb-20 wow fadeInUp">
                     <h3>Buy, Rend & Sell</h3>
                     <p className="fs-22">Over 745K listings of apartments, lots, plots - available today.</p>
                  </div>
               </div>

               <div className="row gx-xxl-5">
                  <FeatureOne />
               </div>
            </div>
         </div>
         <Image src={featureShape_1} alt="" className="lazy-img shapes shape_01" />
         <Image src={featureShape_2} alt="" className="lazy-img shapes shape_02" />
      </div>
   )
}

export default BLockFeatureThree
