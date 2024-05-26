"use client"
import Image, { StaticImageData } from "next/image"
import Slider from "react-slick"

import brandLogo_1 from "@/assets/images/logo/p_logo_01.png"
import brandLogo_2 from "@/assets/images/logo/p_logo_02.png"
import brandLogo_3 from "@/assets/images/logo/p_logo_03.png"
import brandLogo_4 from "@/assets/images/logo/p_logo_04.png"
import brandLogo_5 from "@/assets/images/logo/p_logo_05.png"
import brandLogo_6 from "@/assets/images/logo/p_logo_06.png"

const brand_data: StaticImageData[] = [brandLogo_1, brandLogo_2, brandLogo_3, brandLogo_4, brandLogo_5, brandLogo_6, brandLogo_3]

const setting = {
   dots: false,
   arrows: false,
   centerPadding: '0px',
   slidesToShow: 6,
   slidesToScroll: 1,
   autoplay: true,
   autoplaySpeed: 3500,
   responsive: [
      {
         breakpoint: 1200,
         settings: {
            slidesToShow: 4
         }
      },
      {
         breakpoint: 768,
         settings: {
            slidesToShow: 3
         }
      },
      {
         breakpoint: 576,
         settings: {
            slidesToShow: 2
         }
      }
   ]
}

const BrandOne = () => {
   return (
      <div className="partner-section-one position-relative z-2">
         <div className="container">
            <p className="text-white fs-24"><span>Join 27,000+</span> companies who’ve reached </p>
         </div>
         <div className="bg-wrapper">
            <div className="container">
               <Slider {...setting} className="partner-logo-one">
                  {brand_data.map((brand, i) => (
                     <div key={i} className="item"><Image src={brand} alt="" /></div>
                  ))}
               </Slider>
            </div>
         </div>
      </div>
   )
}

export default BrandOne
