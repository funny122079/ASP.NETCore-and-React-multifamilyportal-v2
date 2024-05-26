import property_data from "@/data/home-data/PropertyData"
import Image from "next/image"
import Link from "next/link"

import titleShape from "@/assets/images/shape/title_shape_03.svg"

const PropertyOne = ({ style_1, style_2 }: any) => {
   return (
      <div className="property-listing-five mt-170 xl-mt-120">
         <div className="container container-large">
            <div className="position-relative">
               <div className="title-one mb-25 lg-mb-10 wow fadeInUp">
                  {style_2 ? <h3><span>New<Image src={titleShape} alt="" className="lazy-img" /></span> Listings</h3> :
                     <h3>{style_1 ? "Popular Listings" : "New Listings"}</h3>}
                  <p className="fs-22">Explore latest and featured properties for sale, rent & mortgage.</p>
               </div>

               <div className="row gx-xxl-5">
                  {property_data.filter((items) => items.page === "home_2").map((item) => (
                     <div key={item.id} className="col-lg-4 col-md-6 d-flex mt-40 wow fadeInUp">
                        <div className="listing-card-one style-two shadow-none h-100 w-100">
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
                           <div className="property-info pt-20">
                              <Link href="/listing_details_03" className="title tran3s">{item.title}</Link>
                              <div className="address">{item.address}</div>
                              <ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between pb-15 pt-5">
                                 {item.property_info.map((info, index) => (
                                    <li key={index} className="d-flex align-items-center">
                                       <Image src={info.icon} alt="" className="lazy-img icon me-2" />
                                       <span className="fs-16">{info.total_feature} {info.feature}</span>
                                    </li>
                                 ))}
                              </ul>
                              <div className="pl-footer top-border bottom-border d-flex align-items-center justify-content-between">
                                 <strong className="price fw-500 color-dark">${item.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</strong>
                                 <Link href="/listing_details_03" className="btn-four"><i className="bi bi-arrow-up-right"></i></Link>
                              </div>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>

               <div className="section-btn text-center md-mt-60">
                  <Link href="/listing_08" className="btn-eight"><span>Explore All</span> <i className="bi bi-arrow-up-right"></i></Link>
               </div>
            </div>
         </div>
      </div>
   )
}

export default PropertyOne
