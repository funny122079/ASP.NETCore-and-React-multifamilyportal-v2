"use client"
import property_data from "@/data/home-data/PropertyData"
import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"
import Slider from "react-slick"
import Fancybox from "@/components/common/Fancybox"

import propertyShape_1 from "@/assets/images/shape/shape_37.svg"
import propertyShape_2 from "@/assets/images/shape/shape_38.svg"
import propertyShape_3 from "@/assets/images/shape/shape_39.svg"

const setting = {
   dots: false,
   arrows: false,
   centerPadding: '0px',
   slidesToShow: 4,
   slidesToScroll: 4,
   autoplay: true,
   autoplaySpeed: 3000,
   responsive: [
      {
         breakpoint: 1400,
         settings: {
            slidesToShow: 3
         }
      },
      {
         breakpoint: 992,
         settings: {
            slidesToShow: 2
         }
      },
      {
         breakpoint: 768,
         settings: {
            slidesToShow: 1
         }
      }
   ]
}

const PropertyTwo = ({ style }: any) => {

   const sliderRef = useRef<Slider | null>(null);

   const handlePrevClick = () => {
      if (sliderRef.current) {
         sliderRef.current.slickPrev();
      }
   };

   const handleNextClick = () => {
      if (sliderRef.current) {
         sliderRef.current.slickNext();
      }
   };

   return (
      <div className="property-listing-four bg-pink-three position-relative z-1 overflow-hidden pt-120 xl-pt-80 pb-110 xl-pb-60 mt-170 xl-mt-140 lg-mt-120">
         <div className="container container-large">
            <div className="position-relative z-1">
               <div className="title-one mb-60 lg-mb-40 wow fadeInUp">
                  <h2 className="font-garamond">New <em>Listings</em> <span className="star-shape"><Image src={propertyShape_1} alt="" className="lazy-img" /></span></h2>
                  <p className="fs-22 m0">Explore latest & featured properties for sale.</p>
               </div>

               <Slider {...setting} ref={sliderRef} className={`listing-slider-one ${style ? "vw-100" : ""}`}>
                  {property_data.filter((items) => items.page == "home_3_property_2").map((item) => (
                     <div key={item.id} className="item">
                        <div className="listing-card-one style-three border-30 mb-50">
                           <div className="img-gallery p-15">
                              <div className="position-relative border-20 overflow-hidden">
                                 <div className="tag bg-white text-dark fw-500 border-20">{item.tag}</div>
                                 <Image src={item.thumb ? item.thumb : ""} className="w-100 border-20" alt="..." />
                                 <Link href="/listing_details_04" className="btn-four inverse rounded-circle position-absolute"><i className="bi bi-arrow-up-right"></i></Link>
                                 <div className="img-slider-btn">
                                    {item.carousel} <i className="fa-regular fa-image"></i>
                                    <Fancybox
                                       options={{
                                          Carousel: {
                                             infinite: true,
                                          },
                                       }}
                                    >
                                       {item.carousel_thumb.map((thumb, index) => (
                                          <a key={index} className="d-block" data-fancybox="gallery" href={`/assets/images/listing/img_large_0${thumb.id}.jpg`}></a>
                                       ))}
                                    </Fancybox>
                                 </div>
                              </div>
                           </div>
                           <div className="property-info pe-4 ps-4">
                              <Link href="/listing_details_04" className="title tran3s">{item.title}</Link>
                              <div className="address">{item.address}</div>
                              <ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between">
                                 {item.property_info.map((info, i) => (
                                    <li key={i} className="d-flex align-items-center">
                                       <span className="fs-16"><strong className="fw-500 color-dark">{info.feature}</strong> {info.total_feature}</span>
                                    </li>
                                 ))}
                              </ul>
                              <div className="pl-footer top-border d-flex align-items-center justify-content-between">
                                 <strong className="price fw-500 color-dark">${item.price}</strong>
                                 <ul className="style-none d-flex action-icons">
                                    <li><Link href="#"><i className="fa-light fa-heart"></i></Link></li>
                                    <li><Link href="#"><i className="fa-light fa-bookmark"></i></Link></li>
                                    <li><Link href="#"><i className="fa-light fa-circle-plus"></i></Link></li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                  ))}
               </Slider>

               <div className="section-btn text-center">
                  <Link href="/listing_04" className="btn-eleven fst-italic"><span>See all properties</span></Link>
               </div>
               <ul className="slider-arrows slick-arrow-two d-flex justify-content-center style-none md-mt-30">
                  <li onClick={handlePrevClick} className="prev_b slick-arrow"><i className="bi bi-arrow-left"></i></li>
                  <li onClick={handleNextClick} className="next_b slick-arrow"><i className="bi bi-arrow-right"></i></li>
               </ul>
            </div>
         </div>
         {!style &&
            <>
               <Image src={propertyShape_2} alt="" className="lazy-img shapes shape_01 wow fadeInDown" />
               <Image src={propertyShape_3} alt="" className="lazy-img shapes shape_02 wow fadeInUp" />
            </>
         }
      </div>
   )
}

export default PropertyTwo
