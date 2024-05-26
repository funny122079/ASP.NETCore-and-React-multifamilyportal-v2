import Image from "next/image"
import Link from "next/link"

import titleShape from "@/assets/images/shape/title_shape_08.svg"
import fancyImg from "@/assets/images/assets/ils_02.svg"

const FancyBannerThree = () => {
   return (
      <div className="fancy-banner-three position-relative text-center z-1 pt-200 xl-pt-150 lg-pt-100 pb-250 xl-pb-200 lg-pb-120">
         <div className="container">
            <div className="row">
               <div className="col-xl-7 col-md-8 m-auto">
                  <div className="title-one mb-45 md-mb-30">
                     <h2>Any Inquiry? <span>Feel free<Image src={titleShape} alt="" className="lazy-img" /></span> To contact Us.</h2>
                  </div>
                  <Link href="/contact" className="btn-five text-uppercase">SEND MESSAGE</Link>
               </div>
            </div>
         </div>
         <Image src={fancyImg} alt="" className="lazy-img shapes w-100 illustration" />
      </div>
   )
}

export default FancyBannerThree
