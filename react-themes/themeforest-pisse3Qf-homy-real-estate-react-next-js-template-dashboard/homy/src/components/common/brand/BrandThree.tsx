"use client"
import Image, { StaticImageData } from "next/image"
import Slider from "react-slick"

import brandLogo_1 from "@/assets/images/logo/p_logo_07.png"
import brandLogo_2 from "@/assets/images/logo/p_logo_08.png"
import brandLogo_3 from "@/assets/images/logo/p_logo_09.png"
import brandLogo_4 from "@/assets/images/logo/p_logo_10.png"
import brandLogo_5 from "@/assets/images/logo/p_logo_11.png"
import brandLogo_6 from "@/assets/images/logo/p_logo_12.png"

const brand_data: StaticImageData[] = [brandLogo_1, brandLogo_2, brandLogo_3, brandLogo_4, brandLogo_5, brandLogo_6, brandLogo_3]

const setting = {
   dots: false,
   arrows: false,
   centerPadding: '0px',
   slidesToShow: 5,
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

const BrandThree = () => {
   return (
      <Slider {...setting} className="partner-logo-two">
         {brand_data.map((brand, i) => (
            <div key={i} className="item"><Image src={brand} alt="" /></div>
         ))}
      </Slider>
   )
}

export default BrandThree;
