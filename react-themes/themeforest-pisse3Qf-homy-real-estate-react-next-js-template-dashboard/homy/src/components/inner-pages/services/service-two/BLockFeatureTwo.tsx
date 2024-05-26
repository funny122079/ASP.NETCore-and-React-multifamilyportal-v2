import Count from "@/components/common/Count"
import FaqOne from "@/components/common/faq/FaqOne"
import Image from "next/image"
import Link from "next/link"

import featureImg from "@/assets/images/assets/screen_05.jpg"

const BLockFeatureTwo = () => {
   return (
      <div className="block-feature-ten mt-170 xl-mt-120 md-mt-100 mb-150 xl-mb-100">
         <div className="container container-large">
            <div className="row">
               <div className="col-xxl-5 col-lg-6 ms-auto order-lg-last wow fadeInRight">
                  <div className="pb-45">
                     <div className="title-one mb-70 lg-mb-50">
                        <div className="upper-title">Why US</div>
                        <h3>Find you Dream Home Easily.</h3>
                     </div>
                     <div className="accordion accordion-style-one top-bottom-line p0 mb-80 lg-mb-50" id="accordionOne">
                        <FaqOne />
                     </div>
                     <Link href="/contact" className="btn-five rounded-0">Contact us</Link>
                  </div>
               </div>
               <div className="col-lg-6">
                  <div className="media-gallery position-relative z-1 h-100 wow fadeInLeft">
                     <div className="bg" style={{ backgroundImage: `url(/assets/images/media/img_56.jpg)` }}>
                        <div className="card-style-three p0">
                           <div className="bg-wrapper text-center">
                              <h3>0<Count number={7} />+</h3>
                              <p>Years Experience <br />with proud.</p>
                           </div>
                        </div>
                        <Image src={featureImg} alt="" className="lazy-img screen_01" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default BLockFeatureTwo
