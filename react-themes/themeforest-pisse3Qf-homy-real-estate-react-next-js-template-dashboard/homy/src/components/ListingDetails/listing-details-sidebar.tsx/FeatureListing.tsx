import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Fancybox from "@/components/common/Fancybox";

import featureThumb_1 from "@/assets/images/listing/img_13.jpg"
import featureThumb_2 from "@/assets/images/listing/img_14.jpg"
import featureThumb_3 from "@/assets/images/listing/img_15.jpg"
import largeThumb_1 from "@/assets/images/listing/img_large_01.jpg"
import largeThumb_2 from "@/assets/images/listing/img_large_02.jpg"
import largeThumb_3 from "@/assets/images/listing/img_large_03.jpg"

const largeThumb: string[] = ["1", "2", "3"];

interface DataType {
   id: number;
   thumb: StaticImageData;
   class_name?: string;
   large_thumb: StaticImageData[];
   tag: string;
   price: number;
   address: string;
}[];

const feature_listing_data: DataType[] = [
   {
      id: 1,
      thumb: featureThumb_1,
      class_name: "active",
      large_thumb: [largeThumb_1, largeThumb_2, largeThumb_3],
      tag: "FOR RENT",
      price: 123710,
      address: "120 Elgin St. Celina, Delaware",
   },
   {
      id: 2,
      thumb: featureThumb_2,
      large_thumb: [largeThumb_1, largeThumb_2, largeThumb_3],
      tag: "FOR RENT",
      price: 211536,
      address: "120 Elgin St. Celina, Delaware",
   },
   {
      id: 3,
      thumb: featureThumb_3,
      large_thumb: [largeThumb_1, largeThumb_2, largeThumb_3],
      tag: "FOR RENT",
      price: 305958,
      address: "120 Elgin St. Celina, Delaware",
   },
]

const FeatureListing = () => {
   return (
      <div className="feature-listing bg-white border-20 p-30">
         <h5 className="mb-40">Featured Listing</h5>
         <div id="F-listing" className="carousel slide">
            <div className="carousel-indicators">
               <button type="button" data-bs-target="#F-listing" data-bs-slide-to="0" className="active"
                  aria-current="true" aria-label="Slide 1"></button>
               <button type="button" data-bs-target="#F-listing" data-bs-slide-to="1"
                  aria-label="Slide 2"></button>
               <button type="button" data-bs-target="#F-listing" data-bs-slide-to="2"
                  aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
               {feature_listing_data.map((item) => (
                  <div key={item.id} className={`carousel-item ${item.class_name}`}>
                     <div className="listing-card-one style-three border-10">
                        <div className="img-gallery">
                           <div className="position-relative border-10 overflow-hidden">
                              <div className="tag bg-white text-dark fw-500 border-20">{item.tag}</div>
                              <Link href="#" className="fav-btn tran3s"><i className="fa-light fa-heart"></i></Link>
                              <Image src={item.thumb} className="w-100 border-10" alt="..." />
                              <div className="img-slider-btn">
                                 03 <i className="fa-regular fa-image"></i>
                                 <Fancybox
                                    options={{
                                       Carousel: {
                                          infinite: true,
                                       },
                                    }}
                                 >
                                    {largeThumb.map((thumb: any, index: any) => (
                                       <a key={index} className="d-block" data-fancybox="img5" href={`/assets/images/listing/img_large_0${thumb}.jpg`}></a>
                                    ))}
                                 </Fancybox>
                              </div>
                           </div>
                        </div>
                        <div className="property-info mt-15">
                           <div className="d-flex justify-content-between align-items-end">
                              <div>
                                 <strong className="price fw-500 color-dark">${item.price}</strong>
                                 <div className="address m0 pt-5">{item.address} </div>
                              </div>
                              <Link href="/listing_details_03" className="btn-four rounded-circle">
                                 <i className="bi bi-arrow-up-right"></i>
                              </Link>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default FeatureListing;
