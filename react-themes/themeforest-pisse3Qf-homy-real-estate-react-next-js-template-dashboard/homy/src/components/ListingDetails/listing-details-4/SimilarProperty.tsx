"use client"
import Fancybox from "@/components/common/Fancybox";
import property_data from "@/data/home-data/PropertyData"
import Image from "next/image"
import Link from "next/link"
import Slider from "react-slick";

const setting = {
   dots: true,
   arrows: false,
   centerPadding: '0px',
   slidesToShow: 2,
   slidesToScroll: 2,
   autoplay: true,
   autoplaySpeed: 3000,
   responsive: [
      {
         breakpoint: 768,
         settings: {
            slidesToShow: 1
         }
      }
   ]
};

const SimilarProperty = () => {
   return (
      <div className="similar-property bottom-line-dark pb-20 mb-60">
         <h4 className="mb-40">Similar Homes You May Like</h4>
         <Slider {...setting} className="similar-listing-slider-two">
            {property_data.filter((items) => items.page == "home_3_property_2").map((item) => (
               <div key={item.id} className="item">
                  <div className="listing-card-one shadow-none style-two mb-50">
                     <div className="img-gallery">
                        <div className="position-relative overflow-hidden">
                           <div className="tag bg-white text-dark fw-500">FOR RENT</div>
                           <Image src={item.thumb ? item.thumb : ""} className="w-100" alt="..." />

                           <div className="img-slider-btn">
                              {item.carousel} <i className="fa-regular fa-image"></i>
                              <Fancybox
                                 options={{
                                    Carousel: {
                                       infinite: true,
                                    },
                                 }}
                              >
                                 {item.carousel_thumb.map((thumb: any, index: any) => (
                                    <a key={index} className="d-block" data-fancybox="gallery2" href={`/assets/images/listing/img_large_0${thumb.id}.jpg`}></a>
                                 ))}
                              </Fancybox>
                           </div>
                        </div>
                     </div>
                     <div className="property-info d-flex justify-content-between align-items-end pt-30">
                        <div>
                           <strong className="price fw-500 color-dark">${item.price}</strong>
                           <div className="address m0">{item.address}</div>
                        </div>
                        <Link href="/listing_details_01" className="btn-four mb-5"><i className="bi bi-arrow-up-right"></i></Link>
                     </div>
                  </div>
               </div>
            ))}
         </Slider>
      </div>
   )
}

export default SimilarProperty
