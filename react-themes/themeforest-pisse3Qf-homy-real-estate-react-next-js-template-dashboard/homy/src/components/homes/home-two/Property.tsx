import property_data from "@/data/home-data/PropertyData"
import Image from "next/image"
import Link from "next/link"

import propertyShape from "@/assets/images/shape/shape_17.svg"


const Property = () => {
   return (
      <div className="xl-mt-120 property-listing-two position-relative z-1 mt-150 pb-150 xl-pb-120 lg-pb-80">
         <div className="container">
            <div className="position-relative">
               <div className="title-one mb-25 lg-mb-20 wow fadeInUp">
                  <h2 className="font-garamond">New Listings</h2>
                  <p className="fs-22 mt-xs">Explore latest & featured properties for sale.</p>
               </div>

               <div className="row gx-xxl-5">
                  {property_data.filter((items) => items.page === "home_2").map((item) => (
                     <div key={item.id} className="col-lg-4 col-md-6 d-flex mt-40 wow fadeInUp" data-wow-delay={item.data_delay_time}>
                        <div className="listing-card-one style-two h-100 w-100 ">
                           <div className="img-gallery">
                              <div className="position-relative overflow-hidden">
                                 <div className="tag fw-500">{item.tag}</div>
                                 <div id={`carousel${item.carousel}`} className="carousel slide">
                                    <div className="carousel-indicators">
                                       <button type="button" data-bs-target={`#carousel${item.carousel}`} data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                       <button type="button" data-bs-target={`#carousel${item.carousel}`} data-bs-slide-to="1" aria-label="Slide 2"></button>
                                       <button type="button" data-bs-target={`#carousel${item.carousel}`} data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    </div>
                                    <div className="carousel-inner">
                                       {item.carousel_thumb.map((item, i) => (
                                          <div key={i} className={`carousel-item ${item.active}`} data-bs-interval="1000000">
                                             <Link href="/listing_details_01" className="d-block"><Image src={item.img} className="w-100" alt="..." /></Link>
                                          </div>
                                       ))}
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="property-info p-25">
                              <Link href="#" className="title tran3s">{item.title}</Link>
                              <div className="address">{item.address}</div>
                              <ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between pb-5">
                                 {item.property_info.map((info, index) => (
                                    <li key={index} className="d-flex align-items-center">
                                       <Image src={info.icon} alt="" className="lazy-img icon me-2" />
                                       <span className="fs-16">{info.total_feature} {info.feature}</span>
                                    </li>
                                 ))}
                              </ul>
                              <div className="pl-footer top-border d-flex align-items-center justify-content-between">
                                 <strong className="price fw-500 color-dark">${item.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</strong>
                                 <Link href="#" className="btn-four"><i className="bi bi-arrow-up-right"></i></Link>
                              </div>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>

               <div className="section-btn text-center md-mt-60">
                  <Link href="/listing_05" className="btn-eight"><span>Explore All</span> <i
                     className="bi bi-arrow-up-right"></i></Link>
               </div>
            </div>
         </div>
         <Image src={propertyShape} alt="" className="lazy-img shapes shape_01" />
      </div>
   )
}

export default Property;
