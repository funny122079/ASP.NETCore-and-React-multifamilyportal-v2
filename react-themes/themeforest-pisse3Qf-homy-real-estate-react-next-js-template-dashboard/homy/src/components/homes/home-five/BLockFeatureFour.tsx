import Image from "next/image"
import Count from "@/components/common/Count";

import featureImg_1 from "@/assets/images/media/img_03.jpg";
import featureImg_2 from "@/assets/images/shape/shape_57.svg";
import featureImg_3 from "@/assets/images/assets/screen_08.png";
import featureImg_4 from "@/assets/images/assets/screen_07.png";

const BLockFeatureFour = () => {
   return (
      <div className="block-feature-ten mt-200 xl-mt-150 lg-mt-110">
         <div className="container container-large">
            <div className="row">
               <div className="col-lg-6 ms-auto order-lg-last wow fadeInRight">
                  <div className="pb-50 ps-xxl-5 position-relative z-1">
                     <div className="feedback-block-two">
                        <blockquote className="font-garamond">&quot;Extraordinary <span>service!</span>  Quick solutions. Highly recommended.&quot;</blockquote>
                        <div className="d-flex align-items-center mt-75 md-mt-50">
                           <Image src={featureImg_1} alt="" className="rounded-circle avatar" />
                           <div className="ps-4">
                              <h6 className="fs-22 mb-5">James Bond.</h6>
                              <span className="opacity-75">CEO & Head of Homy Inc</span>
                           </div>
                        </div>
                     </div>

                     <div className="wrapper mt-70 xl-mt-50 md-mt-20">
                        <div className="row">
                           <div className="col-sm-6">
                              <div className="counter-block-two dark mt-30">
                                 <div className="main-count sm font-garamond fw-500"><span className="counter"><Count number={1200} /></span>+</div>
                                 <p className="fs-20 m0">Project handover</p>
                              </div>
                           </div>
                           <div className="col-sm-6">
                              <div className="counter-block-two dark mt-30">
                                 <div className="main-count sm font-garamond fw-500"><span className="counter"><Count number={1.9} /></span>mil+</div>
                                 <p className="fs-20 m0">Happy customers</p>
                              </div>
                           </div>
                        </div>
                     </div>

                     <Image src={featureImg_2} alt="" className="lazy-img shapes shape_01 d-none d-lg-block" />
                  </div>
               </div>

               <div className="col-lg-6">
                  <div className="media-gallery position-relative z-1 h-100 wow fadeInLeft">
                     <div className="bg" style={{ backgroundImage: `url(/assets/images/media/img_46.jpg)` }}>
                        <Image src={featureImg_3} alt="" className="lazy-img screen_03" />
                        <Image src={featureImg_4} alt="" className="lazy-img screen_02" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default BLockFeatureFour
