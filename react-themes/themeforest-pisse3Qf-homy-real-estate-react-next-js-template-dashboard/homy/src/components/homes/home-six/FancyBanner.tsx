import Image from "next/image"

import fanchyBannerShape_1 from "@/assets/images/shape/shape_51.svg"
import fanchyBannerShape_2 from "@/assets/images/media/img_44.png"
import fanchyBannerShape_3 from "@/assets/images/shape/shape_50.svg"
import Link from "next/link"

const FancyBanner = () => {
   return (
      <div className="fancy-banner-eight bg-pink-two overflow-hidden wow fadeInUp pt-10 mt-170 xl-mt-120 md-mt-90">
         <div className="container container-large">
            <div className="bg-wrapper p0 position-relative z-1">
               <div className="row align-items-end">
                  <div className="col-xl-5 col-lg-7 col-md-7">
                     <div className="pb-80 lg-pb-40 md-pt-40">
                        <h3>Start your Journey as <span className="fw-normal fst-italic">A Retailer.</span></h3>
                        <div className="d-inline-flex flex-wrap align-items-center position-relative mt-15">
                           <Link href="/agent" className="btn-eight mt-10 me-4"><span>Become an Agent</span></Link>
                           <Link href="/contact" className="btn-two rounded-0 border-0 mt-10"><span>Contact us</span></Link>
                           <Image src={fanchyBannerShape_1} alt="" className="lazy-img shapes shape_02 wow fadeInRight" />
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-6 col-lg-5 col-md-5 text-center text-md-end">
                     <div className="media-wrapper position-relative z-1 d-inline-block">
                        <Image src={fanchyBannerShape_2} alt="" className="lazy-img" />
                        <Image src={fanchyBannerShape_3} alt="" className="lazy-img shapes shape_01" />
                     </div>
                  </div>
               </div>

            </div>
         </div>
      </div>
   )
}

export default FancyBanner
