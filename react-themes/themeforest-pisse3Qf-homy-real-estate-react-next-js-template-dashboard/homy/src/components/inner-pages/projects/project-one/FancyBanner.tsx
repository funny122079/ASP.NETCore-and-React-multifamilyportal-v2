import Image from "next/image"
import Link from "next/link"

import titleShape from "@/assets/images/shape/title_shape_08.svg"

const FancyBanner = () => {
   return (
      <div className="fancy-banner-three position-relative text-center z-1 pt-140 xl-pt-100 md-pt-80 pb-150 xl-pb-100">
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
      </div>
   )
}

export default FancyBanner
