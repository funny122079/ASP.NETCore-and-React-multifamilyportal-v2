import Image from "next/image"
import fancyShape from "@/assets/images/shape/shape_30.svg"
import Link from "next/link"

const FancyBannerTwo = () => {
   return (
      <div className="fancy-banner-five position-relative z-1 pt-90 lg-pt-70 pb-110 lg-pb-70 mt-170 xl-mt-120">
         <div className="container">
            <div className="row">
               <div className="col-xl-8 m-auto text-center">
                  <div className="title-one mb-40 lg-mb-20">
                     <h2 className="font-garamond fs-xl text-white">Any Inquiry? Feel free To contact Us.</h2>
                  </div>
                  <Link href="/contact" className="btn-nine text-uppercase"><span>SEND MESSAGE</span></Link>
               </div>
            </div>
         </div>
         <Image src={fancyShape} alt="" className="lazy-img shapes shape_01" />
      </div>
   )
}

export default FancyBannerTwo
