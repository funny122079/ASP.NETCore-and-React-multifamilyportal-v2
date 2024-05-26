import Image from 'next/image'
import Link from 'next/link'

import fancyShape_1 from "@/assets/images/shape/shape_44.svg"
import fancyShape_2 from "@/assets/images/shape/shape_45.svg"

const FancyBannerTwo = () => {
   return (
      <div className="fancy-banner-seven mt-110 xl-mt-80 mb-130 xl-mb-100 lg-mb-80">
         <div className="container container-large">
            <div className="bg-wrapper position-relative z-1 pt-85 lg-pt-70 pb-100 xl-pb-80 lg-pb-70">
               <div className="row">
                  <div className="col-xl-7 col-lg-8 col-md-10 m-auto text-center">
                     <h2 className="font-garamond text-white">Find the right home for your family</h2>
                     <p className="fs-24 text-white mt-30 mb-45 lg-mb-30">We’ve more than 745,000 apartments, place & plot.</p>
                     <Link href="/about_us_01" className="btn-two"><span>Get Started</span></Link>
                  </div>
               </div>
               <Image src={fancyShape_1} alt="" className="lazy-img shapes shape_01 wow fadeInLeft" data-wow-delay="0.2s" />
               <Image src={fancyShape_2} alt="" className="lazy-img shapes shape_02 wow fadeInRight" />
            </div>
         </div>
      </div>
   )
}

export default FancyBannerTwo
