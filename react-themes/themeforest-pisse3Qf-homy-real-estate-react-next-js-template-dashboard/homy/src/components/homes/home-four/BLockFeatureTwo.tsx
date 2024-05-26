"use client"
import Count from "@/components/common/Count"
import Image from "next/image"
import Link from "next/link"

import featureThumb from "@/assets/images/assets/screen_05.jpg"

const BLockFeatureTwo = ({ style }: any) => {
   return (
      <div className={`block-feature-ten md-mt-100 ${style ? " mt-170 xl-mt-120 mb-150 xl-mb-100" : "mt-200 xl-mt-160 lg-mt-120"}`}>
         <div className="container container-large">
            <div className="row">
               <div className="col-xxl-5 col-lg-6 ms-auto order-lg-last wow fadeInRight">
                  <div className="pt-40 xl-pt-20 pb-110 xl-pb-60">
                     <div className="title-one mb-45 lg-mb-20">
                        <h3>Find Your Perfect Match Easily.</h3>
                     </div>
                     <p className="fs-24 mb-45">Browse 745,000+ homes for purchase, rent, and mortgage options in our listings.</p>
                     <form onSubmit={(e) => e.preventDefault()} className="email-form position-relative z-1">
                        <input type="email" placeholder="Your Email Address..." />
                        <button className="btn-two">Find out</button>
                     </form>
                     <p className="fs-16 mt-10">For more details please <Link href="#" className="color-dark text-decoration-underline fst-italic">contact us</Link></p>
                     <div className="counter-wrapper pt-15 pe-xl-5">
                        <div className="row">
                           <div className="col-xxl-6 col-sm-5">
                              <div className="counter-block-one mt-20">
                                 <div className="main-count fw-500 color-dark"><span className="counter"><Count number={1.2} /></span>x</div>
                                 <span>Fast search engine</span>
                              </div>
                           </div>
                           <div className="col-xxl-6 col-sm-7">
                              <div className="counter-block-one mt-20">
                                 <div className="main-count fw-500 color-dark">$<span className="counter"><Count number={1.3} /></span>b+</div>
                                 <span>Property listing sold last year</span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="col-lg-6">
                  <div className="media-gallery position-relative z-1 h-100 wow fadeInLeft">
                     <div className={`bg ${style ? "bg_2" : ""}`}>
                        <div className="card-style-three p0">
                           <div className="bg-wrapper text-center">
                              <h3>0<Count number={7} />+</h3>
                              <p>Years Experience <br />with proud.</p>
                           </div>
                        </div>
                        <Image src={featureThumb} alt="" className="lazy-img screen_01" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default BLockFeatureTwo
