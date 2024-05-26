"use client"
import Image from "next/image"

import titleShape from "@/assets/images/shape/title_shape_06.svg";
import featureThumb from "@/assets/images/assets/screen_12.png";
import Link from "next/link";

const BLockFeatureFour = () => {
   return (
      <div className="block-feature-four mt-170 xl-mt-130 md-mt-40">
         <div className="container">
            <div className="row">
               <div className="col-lg-6 d-flex order-lg-last">
                  <div className="ps-xxl-5 ms-xl-4 pt-100 xl-pt-80 pb-45 w-100 h-100 wow fadeInRight">
                     <div className="title-one mb-60 lg-mb-40">
                        <div className="upper-title">CB ESTIMATE</div>
                        <h3>Get quick <span>estimate<Image src={titleShape} alt="" className="lazy-img" /></span> on your home.</h3>
                        <p className="fs-24 color-dark">Master your property&apos;s valuation for a poised entry into the real estate market, armed with self-assurance and insight.</p>
                     </div>
                     <form onSubmit={(e) => e.preventDefault()} className="me-xl-4">
                        <input type="email" placeholder="Your Email Address..." />
                        <button>Find out</button>
                     </form>
                     <div className="fs-16 mt-10 opacity-75">*For accurate info please <Link href="/contact" className="fst-italic color-dark text-decoration-underline">contact us.</Link></div>
                  </div>
               </div>

               <div className="col-lg-6 d-flex">
                  <div className="img-gallery position-relative z-1 w-100 h-100 me-lg-5 wow fadeInLeft">
                     <div className="img-bg" style={{ backgroundImage: `url(/assets/images/media/img_11.jpg)` }}></div>
                     <div className="card-one">
                        <div className="text text-center z-1">
                           <h6>Your estimate is in!</h6>
                           <h3>$378,30.00</h3>
                        </div>
                        <Image src={featureThumb} alt="" className="lazy-img w-100" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default BLockFeatureFour
