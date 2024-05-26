"use client"
import Image from "next/image"
import Link from "next/link";
import Count from "@/components/common/Count";
import { useState } from "react";
import VideoPopup from "@/modals/VideoPopup";

import featureShape from "@/assets/images/assets/screen_01.png";

const BLockFeatureTwo = () => {

   const [isVideoOpen, setIsVideoOpen] = useState(false);

   return (
      <>
         <div className="block-feature-two mt-150 xl-mt-110">
            <div className="wrapper">
               <div className="row gx-xl-5">
                  <div className="col-xxl-7 col-md-6 d-flex wow fadeInLeft">
                     <div className="block-one w-100 h-100">
                        <div className="position-relative z-1 h-100">
                           <h3 className="mb-55">Secure your family&apos;s dream home.</h3>
                           <a onClick={() => setIsVideoOpen(true)} style={{ cursor: "pointer" }} className="fancybox video-icon d-flex align-items-center justify-content-center rounded-circle ms-3" data-fancybox="">
                              <i className="fa-solid fa-play"></i>
                           </a>
                           <div className="card-box text-center">
                              <h3 className="main-count fw-500">0<span className="counter"><Count number={7} /></span>+</h3>
                              <p className="fs-20">Years Experience <br />with proud.</p>
                           </div>
                           <Image src={featureShape} alt="" className="lazy-img shapes screen_01" />
                        </div>
                     </div>
                  </div>

                  <div className="col-xxl-5 col-md-6 wow fadeInRight">
                     <div className="block-two">
                        <div className="bg-wrapper">
                           <h4>Who we are?</h4>
                           <p className="fs-22 mt-20">Your premier partner in real estate. <br /> Transforming properties into dreams. Let us guide you home with expertise.</p>
                           <div className="counter-wrapper ps-xl-3 pb-30 mt-45 mb-50">
                              <div className="row">
                                 <div className="col-6">
                                    <div className="counter-block-one mt-20">
                                       <div className="main-count fw-500 color-dark"><span className="counter"><Count number={1.7} /></span>K+</div>
                                       <span>Completed Project</span>
                                    </div>
                                 </div>
                                 <div className="col-6">
                                    <div className="counter-block-one mt-20">
                                       <div className="main-count fw-500 color-dark"><span className="counter"><Count number={1.3} /></span>mil+</div>
                                       <span>Happy Customers</span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <ul className="list-style-one fs-22 color-dark style-none">
                              <li>Loan & low Interest facility</li>
                              <li>Over 100k+ property & update regularly</li>
                              <li>Expert agent consultation</li>
                           </ul>
                           <div className="d-inline-flex flex-wrap align-items-center mt-15 md-mt-10">
                              <Link href="/about_us_01" className="btn-two mt-20 me-4"><span>More Details</span></Link>
                              <Link href="/contact" className="btn-three mt-20"><span>Request a Callback</span> <i className="fa-light fa-arrow-right-long"></i></Link>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* video modal start */}
         <VideoPopup
            isVideoOpen={isVideoOpen}
            setIsVideoOpen={setIsVideoOpen}
            videoId={"tUP5S4YdEJo"}
         />
         {/* video modal end */}
      </>
   )
}

export default BLockFeatureTwo
