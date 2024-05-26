"use client"
import Link from "next/link"
import Image, { StaticImageData } from "next/image"

import bannerAvatar_1 from "@/assets/images/media/img_33.jpg"
import bannerAvatar_2 from "@/assets/images/media/img_34.jpg"
import bannerAvatar_3 from "@/assets/images/media/img_35.jpg"
import bannerAvatar_4 from "@/assets/images/media/img_36.jpg"
import Slider from "react-slick"
import DropdownFour from "@/components/search-dropdown/home-dropdown/DropdownFour"

const banner_avatar: StaticImageData[] = [bannerAvatar_1, bannerAvatar_2, bannerAvatar_3, bannerAvatar_4]

const setting = {
   dots: false,
   arrows: false,
   centerPadding: '0px',
   slidesToShow: 1,
   slidesToScroll: 1,
   autoplay: true,
   fade: true,
   autoplaySpeed: 7000,
}

const HeroBanner = () => {
   return (
      <div className="hero-banner-four position-relative">
         <div className="position-relative main-bg position-relative z-1 pt-150 xl-pt-120 md-pt-60 pb-150 xl-pb-120 md-pb-80">
            <Slider {...setting} className="hero-slider-one m0">
               <div className="item m0"><div className="hero-img" style={{ backgroundImage: `url(/assets/images/media/img_32.jpg)` }}></div></div>
               <div className="item m0"><div className="hero-img" style={{ backgroundImage: `url(/assets/images/media/img_27.jpg)` }}></div></div>
               <div className="item m0"><div className="hero-img" style={{ backgroundImage: `url(/assets/images/media/img_28.jpg)` }}></div></div>
            </Slider>

            <div className="container position-relative z-2">
               <div className="row">
                  <div className="col-lg-6 wow fadeInLeft">
                     <div className="mt-45">
                        <h1 className="hero-heading text-white fw-500">
                           Buy, Sell & Rent.
                           <span className="d-block d-lg-inline-flex">
                              {banner_avatar.map((img, i) => (
                                 <Image key={i} src={img} alt="" className="lazy-img avatar" />
                              ))}
                           </span>
                        </h1>
                        <p className="fs-24 text-white pt-40 pb-30 md-pb-20 pe-xl-5">Explore a vast selection of over 745,000 listings, including apartments, lots, and plots.</p>
                        <div className="d-inline-flex flex-wrap align-items-center">
                           <Link href="/listing_01" className="btn-two rounded-0 border-0 mt-15 me-4"><span>Explore All</span></Link>
                           <Link href="/contact" className="btn-eight inverse mt-15"><span>Request a Callback</span> <i className="fa-sharp fa-light fa-arrow-right-long"></i></Link>
                        </div>
                     </div>
                  </div>

                  <div className="col-lg-5 col-lg-6 ms-auto wow fadeInRight">
                     <DropdownFour />
                  </div>
               </div>
            </div>
         </div>
         <div className="social-elemnet">
            <ul className="style-none d-flex align-items-center">
               <li><Link href="#" className="tran3s">Fb.</Link></li>
               <li><Link href="#" className="tran3s">Tw.</Link></li>
               <li><Link href="#" className="tran3s">Inst.</Link></li>
            </ul>
         </div>
         <div className="scroll-bar"><span>Scroll</span></div>
      </div>
   )
}

export default HeroBanner
