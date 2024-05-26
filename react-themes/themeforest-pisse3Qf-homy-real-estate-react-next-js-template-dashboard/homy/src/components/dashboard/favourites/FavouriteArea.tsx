"use client"
import UseShortedProperty from "@/hooks/useShortedProperty";
import Link from "next/link";
import Image from "next/image";
import ReactPaginate from "react-paginate";

import icon from "@/assets/images/icon/icon_46.svg"
import featureIcon_1 from "@/assets/images/icon/icon_04.svg"
import featureIcon_2 from "@/assets/images/icon/icon_05.svg"
import featureIcon_3 from "@/assets/images/icon/icon_06.svg"

const FavouriteArea = () => {

   const itemsPerPage = 9;
   const page = "listing_4";

   const {
      itemOffset,
      sortedProperties,
      currentItems,
      pageCount,
      handlePageClick,
      handleBathroomChange,
      handleBedroomChange,
      handleSearchChange,
      handlePriceChange,
      maxPrice,
      priceValue,
      resetFilters,
      selectedAmenities,
      handleAmenityChange,
      handleLocationChange,
      handleStatusChange,
      handleTypeChange,
      handlePriceDropChange
   } = UseShortedProperty({ itemsPerPage, page });

   const handleResetFilter = () => {
      resetFilters();
   };

   return (
      <>
         <div className="row gx-xxl-5">
            {currentItems.map((item: any) => (
               <div key={item.id} className="col-lg-4 col-md-6 d-flex mb-50 wow fadeInUp" data-wow-delay={item.data_delay_time}>
                  <div className="listing-card-one border-25 h-100 w-100 ">
                     <div className="img-gallery p-15">
                        <div className="position-relative border-25 overflow-hidden">
                           <div className={`tag border-25 ${item.tag_bg}`}>{item.tag}</div>
                           <Link href="#" className="fav-btn tran3s"><i className="fa-light fa-heart"></i></Link>
                           <div id={`carousel${item.carousel}`} className="carousel slide">
                              <div className="carousel-indicators">
                                 <button type="button" data-bs-target={`#carousel${item.carousel}`} data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                 <button type="button" data-bs-target={`#carousel${item.carousel}`} data-bs-slide-to="1" aria-label="Slide 2"></button>
                                 <button type="button" data-bs-target={`#carousel${item.carousel}`} data-bs-slide-to="2" aria-label="Slide 3"></button>
                              </div>
                              <div className="carousel-inner">
                                 {item.carousel_thumb.map((item: any, i: any) => (
                                    <div key={i} className={`carousel-item ${item.active}`} data-bs-interval="1000000">
                                       <Link href="/listing_details_01" className="d-block"><Image src={item.img} className="w-100" alt="..." /></Link>
                                    </div>
                                 ))}
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="property-info p-25">
                        <Link href="/listing_details_03" className="title tran3s">{item.title}</Link>
                        <div className="address">{item.address}</div>
                        <ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between">
                           <li className="d-flex align-items-center">
                              <Image src={featureIcon_1} alt=""
                                 className="lazy-img icon me-2" />
                              <span className="fs-16">{item.property_info.sqft} sqft</span>
                           </li>
                           <li className="d-flex align-items-center">
                              <Image src={featureIcon_2} alt=""
                                 className="lazy-img icon me-2" />
                              <span className="fs-16">{item.property_info.bed} bed</span>
                           </li>
                           <li className="d-flex align-items-center">
                              <Image src={featureIcon_3} alt=""
                                 className="lazy-img icon me-2" />
                              <span className="fs-16">{item.property_info.bath} bath</span>
                           </li>
                        </ul>
                        <div className="pl-footer top-border d-flex align-items-center justify-content-between">
                           <strong className="price fw-500 color-dark">${item.price.toLocaleString({ minimumFractionDigits: 2, maximumFractionDigits: 2 })} {item.price_text && <>/ <sub>m</sub></>}</strong>
                           <Link href="/listing_details_03" className="btn-four rounded-circle"><i className="bi bi-arrow-up-right"></i></Link>
                        </div>
                     </div>
                  </div>
               </div>
            ))}
         </div>

         <ReactPaginate
            breakLabel="..."
            nextLabel={<Image src={icon} alt="" className="ms-2" />}
            onPageChange={handlePageClick}
            pageRangeDisplayed={pageCount}
            pageCount={pageCount}
            previousLabel={<Image src={icon} alt="" className="ms-2" />}
            renderOnZeroPageCount={null}
            className="pagination-one d-flex align-items-center style-none pt-20"
         />
      </>
   )
}

export default FavouriteArea;
